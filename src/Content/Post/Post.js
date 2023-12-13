import {React,useState} from 'react'

const Post = () => {
  const [file, setfile] = useState();
  const [text, settext] = useState();
  const date = new Date();
  const submit = () => {

  }
  return (
    <>
      <div className='homrInnerPost1'>
        <input className='inputc' onChange={(e) =>
          settext(e.target.value)} style={{ width: "90%", height: "17vh", marginTop: "10px" }} />
        <input type="file" className='file' onChange={(e) =>
          setfile(e.target.value)} />
        <button onClick={submit}>Post</button>
      </div>
    </>

  )
}

export default Post