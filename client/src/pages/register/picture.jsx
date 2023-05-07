import { useEffect, useState } from "react"
import { Button } from '@mui/material';
import axios from "axios"

const Uploader = ({ picture, setPicture, label }) => {
    const [selectFile, setSelectFile] = useState();

    useEffect(() => {
        if (selectFile) {
            const formData = new FormData();
            formData.append("file", selectFile)
            axios.post("http://localhost:3600/upload", formData).then(({ data }) => {
                if (data?.name) {
                    setPicture([...picture, data.name])
                }
            }).catch(err => {
            })
        }
    }, [selectFile])

    const onSelectFile = (e) => {
        setSelectFile(e.target.files[0])

    }

    return (
        <>
            <label htmlFor="file">  </label>
            <Button variant="contained" component="label">
                load picture
                <input hidden type="file" onChange={onSelectFile} name="file" />
            </Button>
        </>
    )
}
export default Uploader;
