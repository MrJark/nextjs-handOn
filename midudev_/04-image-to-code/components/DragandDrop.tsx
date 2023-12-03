'use client'

import { Dropzone, ExtFile, FileMosaic } from '@files-ui/react'
import { useState } from 'react'

export const DragandDrop = () => {
	const [files, setFiles] = useState<ExtFile[]>()

	const updateFiles = (files: ExtFile[]) => {
		console.log(files)
		setFiles(files)
	}
	return (
		<Dropzone
			header={false}
			footer={false}
			max={1}
			label="Drag and Drop your screenchot here"
			accept="image/*"
			onChange={updateFiles}
		>
			{files?.map((file, index) => {
				return <FileMosaic key={index} {...file} preview />
			})}
		</Dropzone>
	)
}
