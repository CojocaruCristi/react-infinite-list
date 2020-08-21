import axios from "axios";

const apiRoot = "https://api.unsplash.com"

export const imgAPI = {
    getImg() {
       return  axios.get(`${apiRoot}/photos/random/?client_id=LfNHrSCSSjAw3hV3oSGdmmpMsx-FKcv_hbBXf1aAzaE&count=10`).then(response => {
            return response.data
        })
    }
}