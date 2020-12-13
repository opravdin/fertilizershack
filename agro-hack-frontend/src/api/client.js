import Axios from "axios";
const appurl="http://84.201.178.157:8000"

const request = async (params) => {
    params.url = appurl + params.url
    return Axios(params)
}

export default request;
