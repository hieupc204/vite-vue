<template>
    <a-table :columns="columns" :data-source="data">
        <template #headerCell="{ column }">
            <template v-if="column.key === 'name'">
                <span>

                    Name
                </span>
            </template>
        </template>

        <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
                <a>
                    {{ record.name }}
                </a>
            </template>
            <template v-else-if="column.key === 'tags'">
                <span>
                    <a-tag v-for="tag in record.tags" :key="tag"
                        :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
                        {{ tag.toUpperCase() }}
                    </a-tag>
                </span>
            </template>
            <template v-else-if="column.key === 'action'">
                <a-dropdown>
                    <template #overlay>
                        <a-menu>
                            <a-menu-item key="1" @click="editUsers(record.key)">
                                <font-awesome-icon icon="pen-to-square" /> Edit
                            </a-menu-item>
                            <a-menu-item key="2" @click="deleteUsers(record.key)">
                                <font-awesome-icon icon="trash" /> Delete
                            </a-menu-item>
                        </a-menu>
                    </template>
                    <a-button>
                        Action
                        <DownOutlined />
                    </a-button>
                </a-dropdown>
            </template>
        </template>
    </a-table>
</template>

<script>
import { useMenu } from "../../../stores/use-menu.js";
import { defineComponent } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';
export default defineComponent({
    components: {
        DownOutlined
    },
    setup() {
        // const store = useMenu();
        useMenu().onSelectedKeys(['admin-users']);
        return {
            data,
            columns
        }
    },
    methods: {
        editUsers: function (id) {
            console.log('hieupc-------edit: ', id);
        },
        deleteUsers: function (id) {
            console.log('hieupc-------delete: ', id);
        }
    }
});

const columns = [
    {
        name: 'Name',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    }, {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
    }, {
        title: 'Action',
        key: 'action',
    }
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    }, {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    }, {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    }];
</script>
<style>
#components-dropdown-demo-placement .ant-btn {
    margin-right: 8px;
    margin-bottom: 8px;
}

.svg-inline--fa {
    padding-right: 5px;
}
</style>