import { createApp } from 'vue'
import router from './routes/index.js'
import { createPinia } from 'pinia'
import {
        Drawer, 
        Button, 
        message,
        List,
        Menu,
        Table,
        Dropdown,
        Tag
} from 'ant-design-vue';
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas, fab, far)

import 'ant-design-vue/dist/antd.css';
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css"

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.use(createPinia());
app.use(Button);
app.use(Drawer);
app.use(List);
app.use(Menu);
app.use(Table);
app.use(Dropdown);
app.use(Tag);
app.mount('#app');

app.config.globalProperties.$message = message;


