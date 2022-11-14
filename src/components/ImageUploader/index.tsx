import React from 'react';

interface IImageUploaderProps {
    file : any
}

function ImageUploader(props : IImageUploaderProps) {

    const uploader = (event : any) => {
        let file = event.target.files[0];
    }
  return (
    <div>
        <input type="file" name='Upload file'/>
    </div>
  )
}

export default ImageUploader