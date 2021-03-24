const menuList = [
    {
        title: "Home",
        key: '/home'
    },
    {
        title:"Permission",
        key: "/permission",
        children:[
            {
                title:"User",
                key:"/permission/user"
            },
            {
                title:"Option2",
                key:"/user/option2"
            },
            {
                title:"Option3",
                key:"/user/option3"
            },
        ]
    },
    {
        title:"Dashboard",
        key: "/dashboard",
        children:[
            {
                title:"Option1",
                key:"/dashboard/option1"
            },
            {
                title:"Option2",
                key:"/dashboard/option2"
            },
            {
                title:"Option3",
                key:"/dashboard/option3"
            }
        ]
    },
    {
        title:"Setting",
        key: "/setting",
        children:[
            {
                title:"Option1",
                key:"/setting/option1"
            },
            {
                title:"Option2",
                key:"/setting/option2"
            },
            {
                title:"Option3",
                key:"/setting/option3"
            }
        ]
    },
];

export default menuList;
