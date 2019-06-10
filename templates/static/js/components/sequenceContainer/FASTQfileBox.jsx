import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

export default function FASTQfileBox() {
 const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className='FASTQfileBox'>
      <div {...getRootProps({className: 'FASTQfileBox_border'})}>
        <input {...getInputProps()} />
        <p>Drop FASTQ files here, or click to select files</p>
      </div>
      <aside className='FASTQfileBox_list'>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}