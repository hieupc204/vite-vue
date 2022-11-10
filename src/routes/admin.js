const admin = [
    {
        path: "/admin",
        component:()=> import("../layouts/admin.vue"),
        children:[
            {
                path: "users",
                name: "admin-users",
                component:()=> import("../pages/admin/users/index.vue")
            },
            {
                path: "role",
                name: "admin-role",
                component:()=> import("../pages/admin/role/index.vue")
            },
            {
                path: "branch",
                name: "admin-branch",
                component:()=> import("../pages/admin/branch/index.vue")
            }
        ]
    }
]

export default admin;