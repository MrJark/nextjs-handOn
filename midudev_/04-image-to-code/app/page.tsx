import { Form } from '@/components/Form'
import { Button } from '@/components/ui/button'

export default function Home() {
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
					with midudev
				</footer>
			</aside>
			<main className="bg-gray-900">
				<section className="max-w-2xl mx-auto p-10">
					<Form />
				</section>
			</main>
		</div>
	)
}
