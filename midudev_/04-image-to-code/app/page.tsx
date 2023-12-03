'use client'

import { Form } from '@/components/Form'
import { useState } from 'react'
import { STEPS } from '../components/variables/variables'
import { Spinner } from '@/components/Spinner'
import { DragandDrop } from '@/components/DragandDrop'

// para transfromar a base 64
const toBase64 = (file: File) => {
	return new Promise<string>((resolve, reject) => {
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = () => resolve(reader.result as string)
		reader.onerror = (error) => reject(error)
	})
}

async function* streamReader(res: Response) {
	const reader = res.body?.getReader()
	const decoder = new TextDecoder()
	if (reader == null) return

	while (true) {
		const { done, value } = await reader.read()
		const chunk = decoder.decode(value)

		yield chunk // esto es con lo que se itera, con la palabra reservada yield
		if (done) break // aquí se para cuando acabe para que no se haga infinito
	}
}

export default function Home() {
	const [result, setResult] = useState('') // para guardar los estados del prompt devuelto
	const [step, setStep] = useState(STEPS.INITIAL)

	const transformToCode = async (body: string) => {
		// método para abstracción
		// he copiado todo lo de transformUrlIntoCode pero cambiando el body por el body proque esta parte serála del draganddrop
		setStep(STEPS.LOADING)
		const res = await fetch('/api/generate-code-from-image', {
			method: 'POST',
			body,
			headers: {
				'Content-Type': 'aplication/json',
			},
		})
		// console.log(res)

		if (!res.ok || res.body == null) {
			setStep(STEPS.ERROR)
			throw new Error('Error while generating code ')
		}

		setStep(STEPS.PREVIEW)

		for await (const chunk of streamReader(res)) {
			setResult((prev) => prev + chunk)
		}
	}

	const transformImageToCode = async (file: File) => {
		const img = await toBase64(file)
		await transformToCode(JSON.stringify({ img }))
	}

	const transformUrlIntoCode = async (url: string) => {
		// lo puedo comentar todo porque he creado una abstracción que es transformToCode y solo cambia el elemento que le tengo que pasar. En este caso es la url y en el drag es la img
		await transformToCode(JSON.stringify({ url }))
		// setStep(STEPS.LOADING)
		// const res = await fetch('/api/generate-code-from-image', {
		// 	method: 'POST',
		// 	body: JSON.stringify({ url }),
		// 	headers: {
		// 		'Content-Type': 'aplication/json',
		// 	},
		// })
		// // console.log(res)
		// if (!res.ok || res.body == null) {
		// 	setStep(STEPS.ERROR)
		// 	throw new Error('Error while generating code ')
		// }
		// setStep(STEPS.PREVIEW)
		// // // leer el streaming de datos 👇🏼 ( lo refacturo con funcion generativa)
		// // //1. crear un reader
		// // const reader = res.body.getReader()
		// // //2. Creas un decodificador para los textos
		// // const decoder = new TextDecoder()
		// // // 3. lees los datos con un loop infinito y solo parará cunado el reader te diga que ha acabado
		// // // if (reader == null) return
		// // while (true) {
		// // 	const { done, value } = await reader.read()
		// // 	const chunk = decoder.decode(value) // los chunks son las distintas partes del código, las piezas
		// // 	// console.log(chunk)
		// // 	setResult((prevResult) => prevResult + chunk)
		// // 	if (done) break // aquí se para cuando acabe para que no se haga infinito
		// // }
		// for await (const chunk of streamReader(res)) {
		// 	// para iterar con los chunk
		// 	setResult((prev) => prev + chunk)
		// }
	}

	const [background, html] = result.split('|||')

	return (
		<div className="grid grid-cols-[300px_1fr]">
			<aside className="flex flex-col justify-between min-h-screen p-4 bg-slate-700">
				<header className="text-left">
					<h1 className="text-2xl font-semibold pb-2">Image to Code</h1>
					<h2 className="text-sm opacity-75">Change your images into code super fast!</h2>
				</header>

				<section>Filtros</section>

				<footer>
					Develop by{' '}
					<a href="https://mrjark.com" target="_blank" className="text-[#4fe5b8]">
						mrjark
					</a>{' '}
					with{' '}
					<a href="https://www.youtube.com/watch?v=Mhk78pRLHeo&t=313s" target="_blank" className="text-[#09f]">
						midudev
					</a>
				</footer>
			</aside>
			<main className="bg-gray-900">
				<section className="max-w-5xl w-full mx-auto p-10">
					{step === STEPS.LOADING && (
						<div className="flex justify-center items-center">
							<Spinner />
						</div>
					)}
					{step === STEPS.INITIAL && (
						<div className="flex flex-col gap-6">
							<DragandDrop transformImageToCode={transformImageToCode} />
							<Form transformUrlIntoCode={transformUrlIntoCode} />
						</div>
					)}
					{step === STEPS.PREVIEW && (
						<div className="rounded flex flex-col gap-4">
							<div
								className="w-full h-full border-4 rounded border-gray-700 aspect-video"
								style={{ backgroundColor: `#${background ? background.trim() : 'fff'}` }}
							>
								<iframe srcDoc={result} className="w-full h-full border-4 rounded border-gray-400 aspect-video" />
							</div>
							<pre>
								<code>{html}</code>
							</pre>
						</div>
					)}
				</section>
			</main>
		</div>
	)
}
