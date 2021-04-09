import axios from 'axios';

const Users_URL='http://localhost:8080/login/add';
const Signup_URL='http://localhost:8080/user/add';
const Image_Get_Url="http://localhost:8080/imagemodal/getbyimage";
const Image_Put_Url="http://localhost:8080/imagemodal/add";
const Comment_Get_Url="http://localhost:8080/imagemodal/getbyimage";

class Services{
    getServices(prop){
        return axios.post(Users_URL,(prop));
    }
    postServices(prop){
        return axios.post(Signup_URL,JSON.stringify(prop));
    }
    getImageServices(){
        return axios.get(Image_Get_Url);
    }
    putImageServices(props){
        return axios.put(Image_Put_Url, JSON.stringify(props));
    }
    getCommentServices(){
        return axios.get(Comment_Get_Url)
    }
}
export default new Services();