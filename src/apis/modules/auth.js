import request from "../../apis";

export default {
    login(crenditials){
        console.log(crenditials);
        return request({
            url: 'user/login',
            method: 'post',
            data : crenditials
          });
    }
}