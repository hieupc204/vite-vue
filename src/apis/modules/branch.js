import request from "../../apis";

export default {
    getList(crenditials){
        // return Api().post('branch/get-list', crenditials);
        return request({
            url: '/branch/get-list',
            method: 'post',
            crenditials
          });
    }
    
}