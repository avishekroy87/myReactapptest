import { useRef, useState } from "react"

const useImageupload = () =>{
    const[imgUrl, setImgUrl] = useState();
    const fileinputRef = useRef();

    const handleImageupload = (event) =>{
        const file = event.target.files[0];
        if(file && file.type.startsWith('images/')){
            const reader = new FileReader();
            reader.onloadend = () => {
                setImgUrl(reader.result);
            }
            reader.readAsDataURL(file);
        }
    }

    const clearimageUrl = () => {
        setImgUrl(null);
        fileinputRef.current.value = null;
    }
    return(
        imgUrl,
        fileinputRef,
        handleImageupload,
        clearimageUrl

    )

}
export default useImageupload