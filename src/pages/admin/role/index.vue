<template>
    Đây là trang role
</template>

<script>
import { useMenu } from "../../../stores/use-menu.js";

export default {
    setup(){
        // const store = useMenu();
        useMenu().onSelectedKeys(['admin-role']);
    }
}
</script>