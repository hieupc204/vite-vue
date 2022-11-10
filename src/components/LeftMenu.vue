<template>
  <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline">
    <a-menu-item key="admin-users">
      <router-link :to="{ name: 'admin-users' }">
        <span>
          <UserOutlined /> Tài khoản
        </span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="admin-role">
      <router-link :to="{ name: 'admin-role' }">
        <span>
          <TagOutlined /> Phân quyền
        </span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="admin-branch">
      <router-link :to="{ name: 'admin-branch' }">
        <span>
          <BranchesOutlined />Chi nhánh
        </span>
      </router-link>
    </a-menu-item>
  </a-menu>
</template>
<script>
import { UserOutlined, TagOutlined, BranchesOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
import { useMenu } from "../stores/use-menu.js";
import { storeToRefs } from 'pinia'
export default defineComponent({
  components: {
    UserOutlined,
    TagOutlined,
    BranchesOutlined
  },
  setup() {
    const store = useMenu();
    return {
      ...storeToRefs(store)
    };
  },

});
</script>
<style>
.ant-menu-item .anticon {
  padding-right: 5px;
}
</style>