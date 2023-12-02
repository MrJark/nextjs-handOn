'use client'
import { Form } from '@/components/Form'
import { Button } from '@/components/ui/button'

export default function Home() {
	const transformUrlIntoCode = async (url: string) => {
		const res = await fetch('/api/generate-code-from-image', {
			method: 'POST',
			body: JSON.stringify({ url }),
			headers: {
				'Content-Type': 'aplication/json',
			},
		})

		if (!res.ok || res.body == null) {
			throw new Error('Error while generating the code ')
		}

		// leer el streaming de datos 👇🏼
		//1. crear un reader
		const reader = res.body.getReader()
		//2. Creas un decodificador para los textos
		const decoder = new TextDecoder()
		// 3. lees los datos con un loop infinito y solo parará cunado el reader te diga que ha acabado
		while (true) {
			const { done, value } = await reader.read()
			const chunk = decoder.decode(value)
			console.log(chunk)
			if (done) break // aquí se para cuando acabe para que no se haga infinito
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
				<section className="max-w-2xl mx-auto p-10">
					<Form transformUrlIntoCode={transformUrlIntoCode} />
				</section>
			</main>
		</div>
	)
}
