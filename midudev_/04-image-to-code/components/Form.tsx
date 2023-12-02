'use client'

import { Label } from '@radix-ui/react-label'
import { Input } from './ui/input'
import { Button } from './ui/button'

export const Form = () => {
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault()
				const form = event.currentTarget as HTMLFormElement
				const url = form.elements.namedItem('url') as HTMLInputElement

				console.log(url.value)
			}}
			action=""
		>
			<Label htmlFor="url" className="flex flex-col gap-4">
				Add your image url
				<Input name="url" id="url" type="url" placeholder="https://tu-screenshot/image.jpg" />
				<Button className="w-1/3">Generate code</Button>
			</Label>
		</form>
	)
}
