'use client'

import { Label } from '@radix-ui/react-label'
import { Input } from './ui/input'
import { Button } from './ui/button'

export const Form = () => {
	return (
		<form
			className="flex flex-col gap-6"
			onSubmit={(event) => {
				event.preventDefault()
				const form = event.currentTarget as HTMLFormElement
				const url = form.elements.namedItem('url') as HTMLInputElement

				console.log(url.value)
			}}
			action=""
		>
			<Label htmlFor="url">
				Add your image url
				<Input name="url" id="url" type="url" placeholder="https://tu-screenshot/image.jpg" />
				<Button>Generate code</Button>
			</Label>
		</form>
	)
}
