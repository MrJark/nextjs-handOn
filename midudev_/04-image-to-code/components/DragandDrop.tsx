'use client'

import { Dropzone, ExtFile, FileMosaic } from '@files-ui/react'
import { useState } from 'react'

export const DragandDrop = ({ transformImageToCode }: { transformImageToCode: (file: File) => void }) => {
	// const [files, setFiles] = useState<ExtFile[]>() // esto es para el preview

	const updateFiles = (files: ExtFile[]) => {
		// tienes que transfromar el File a un base 64 que básicamente es un text
		// console.log(files)
		// setFiles(files)
		const file = files[0].file
		if (file != null) transformImageToCode(file)
	}
	return (
		<Dropzone
			header={false}
			footer={false}
			max={1}
			label="Drag and Drop your screenchot here"
			accept="image/*"
			onChange={updateFiles}
		/>
		// No hace falta porque no le le pongo el preview
		// {/* {files?.map((file, index) => {
		// 	return <FileMosaic key={index} {...file} preview />
		// })} */}
	)
}
