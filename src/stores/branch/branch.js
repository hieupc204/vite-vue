import BranchServices from "../../apis/modules/branch";
import { defineStore } from 'pinia'

export const branch = defineStore('branch', {
  state: () => ({
    listBranch : null,
    errorMessage : ""
  }),

  actions: {
    async getList(crenditials){

        try {
            const response = await BranchServices.getList(crenditials);
            this.listBranch = response;
            // return await response.data;
            // return reponse;
        } catch (ex) {
            // console.log(error.response.status);
        //    throw new Error("dsadsads");
        }
       
    }
  }
})