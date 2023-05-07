import Uploader from "./uploader"

export default function Picture({ picture, setPicture }) {
    return (
        <>
            <Uploader file={picture} setFile={setPicture}  />
        </>
    )
}
