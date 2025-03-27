import { toast, TypeOptions } from "react-toastify"

const updateToast = (toastId:string,text:undefined | string,type:TypeOptions='success') => {
    toast.update(toastId,{
        render:text,
        type,
        isLoading:false,
        autoClose:5000
    })
}
export default updateToast