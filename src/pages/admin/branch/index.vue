<template>
    Đây là trang branch
</template>

<script>
import { useMenu } from "../../../stores/use-menu.js";
import { branch } from "../../../stores/branch/branch.js";

export default {
    setup(){
        // const store = useMenu();
        useMenu().onSelectedKeys(['admin-branch']);

    },
    methods: {
        async getList(){
            await branch().getList(null);
            console.log(branch().listBranch);
            console.log(branch().listBranch.title);
        }
    },
    mounted() {
        this.getList();
    },
}
</script>