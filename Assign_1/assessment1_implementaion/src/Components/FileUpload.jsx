import React from 'react'

export const FileUpload = () => {
    const handelChange=(e)=>{
        let val=e.target.value
        let arr=val.split("\\")
        ;let file=arr[arr.length-1]
        console.log(file)

    }
  return (
    <div>
        <input type="file" onChange={handelChange} />
    </div>
  )
}
