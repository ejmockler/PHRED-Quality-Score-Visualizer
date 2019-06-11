import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import request from 'superagent'

export default function FASTQfileBox() {
 const {acceptedFiles, getRootProps, getInputProps, isDragActive} = useDropzone({
  accept: '.fq,.fastq',  
  onDrop: acceptedFiles => {
   const req = request.post('/upload')
   acceptedFiles.forEach(file => {
    req.attach(file.name, file)
   })
   req.end(callback)
  }})
 const files = acceptedFiles.map(file => (
  <li key={file.path}>
   {file.path} - {file.size} bytes
  </li>
 ));

 return (
  <section className='FASTQfileBox'>
   <div {...getRootProps({className: 'FASTQfileBox_border'})}>
    <input {...getInputProps()} />
    {
      isDragActive ? (
      <p>Drop FASTQ here...</p>) : (
      <p>Drop FASTQ files here, or click to select files</p>)
    }
    <em>(Only .fq, .fastq files accepted)</em>)
   </div>
   <aside className='FASTQfileBox_list'>
    <h4>Files</h4>
    <ul>{files}</ul>
   </aside>
  </section>
 );
}