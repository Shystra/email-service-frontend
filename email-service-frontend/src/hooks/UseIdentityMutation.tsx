import { useMutation } from "react-query";
import { PersonData } from "../interface/PersonData";
import axios from "axios";


const postData = (data: PersonData) => {
    return axios.post("http://localhost:8080/send-data", data)
}
export function UseIdentityMutation(){
    const { mutate, isLoading, isSuccess, isError } = useMutation({
        mutationFn: (data: PersonData) => postData(data)
    })
    return{
        mutate,
        isLoading,
        isSuccess,
        isError
    }

}