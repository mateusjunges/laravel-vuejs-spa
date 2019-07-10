import Home from '@views/Home'
import Hello from '@views/Hello'
import UsersIndex from '@views/UsersIndex'
import EditUser from '@views/EditUser'
import NotFound from '@views/NotFound'

export default {
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello,
        },
        {
            path: '/users',
            name: 'users.index',
            component: UsersIndex
        },
        {
            path: '/users/:id/edit',
            name: 'users.edit',
            component: EditUser,
        },
        {
            path: '/404',
            name: '404',
            component: NotFound,
        },
        {
            path: '*',
            redirect: '/404',
        }
    ],
}
