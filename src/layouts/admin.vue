<template>
    <Header></Header>
    <div class="container-fluid mt-3">
        <div class="row">
            <div class="col-sm-2 d-none d-sm-flex">
                <a-list bordered style="width:100%;">
                    <LeftMenu />
                    <template #header>
                    <div>DANH MỤC</div>
                    </template>
                </a-list>
            </div>

            <div class="col-12 col-sm-10">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import LeftMenu from "../components/LeftMenu.vue";
import Header from "../components/Header.vue";

export default {
    components : {
        LeftMenu,
        Header
    }
}
</script>