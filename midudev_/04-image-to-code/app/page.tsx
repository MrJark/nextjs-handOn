'use client'

import { Form } from '@/components/Form'
import { useState } from 'react'
import { STEPS } from '../components/variables/variables'
// import { Spinner } from '@/components/spinner'

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

	const transformUrlIntoCode = async (url: string) => {
		setStep(STEPS.LOADING)
		const res = await fetch('/api/generate-code-from-image', {
			method: 'POST',
			body: JSON.stringify({ url }),
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

		// // leer el streaming de datos 👇🏼 ( lo refacturo con funcion generativa)
		// //1. crear un reader
		// const reader = res.body.getReader()
		// //2. Creas un decodificador para los textos
		// const decoder = new TextDecoder()
		// // 3. lees los datos con un loop infinito y solo parará cunado el reader te diga que ha acabado
		// // if (reader == null) return
		// while (true) {
		// 	const { done, value } = await reader.read()
		// 	const chunk = decoder.decode(value) // los chunks son las distintas partes del código, las piezas
		// 	// console.log(chunk)
		// 	setResult((prevResult) => prevResult + chunk)
		// 	if (done) break // aquí se para cuando acabe para que no se haga infinito
		// }
		for await (const chunk of streamReader(res)) {
			// para iterar con los chunk
			setResult((prev) => prev + chunk)
		}
	}

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
					{step === STEPS.LOADING && <div className="flex justify-center items-center">{/* <Spinner /> */}</div>}
					{step === STEPS.INITIAL && <Form transformUrlIntoCode={transformUrlIntoCode} />}
					{step === STEPS.PREVIEW && (
						<div className="rounded flex flex-col gap-4">
							<iframe srcDoc={result} className="w-full h-full border-4 rounded border-gray-400 aspect-video" />
							<pre>
								<code>{result}</code>
							</pre>
						</div>
					)}
				</section>
			</main>
		</div>
	)
}
