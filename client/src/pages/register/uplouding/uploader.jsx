
import { useEffect, useState } from "react"
import axios from "axios"
import { Button } from "@mui/material"

const Uploader = ({ file, setFile, label }) => {
  const [selectFile, setSelectFile] = useState(null)

  useEffect(() => {
    if (selectFile) {
      const formData = new FormData();
      console.log("innnnnnnnnnnnnnnn "+formData);
      formData.append("file", selectFile)
      console.log("fffffffffffff "+selectFile);
      axios.post("http://localhost:3600/api/upload", formData, {}).then(({ data }) => {
        console.log("aaaaaaaaaaaaaaa");
        if (data?.name) {
          setFile(data.name)
        }
      }).catch(err => {
        console.log("error", err)
      })
    }

  }, [selectFile])



  const onSelectFile = (e) => {
    console.log(e.target.files[0])
    setSelectFile(e.target.files[0])
  }
  return (
    <>
      <Button variant="outlined" component="label">{label ? label : "File"}
        <input type="file" onChange={onSelectFile} id="file" hidden />
      </Button>
      {/* <label htmlFor="file"> {label? label : "File"} </label> */}
      <input type="file" onChange={onSelectFile} name="file" />
    </>
  )
}

export default Uploader