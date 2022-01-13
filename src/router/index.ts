import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

/* Layout */
import Layout from '@/layout/index.vue'

Vue.use(VueRouter)

/**
  ConstantRoutes
  a base page that does not have permission requirements
  all roles can be accessed
*/
export const constantRoutes: RouteConfig[] = [
    {
        path: '/login',
        component: () =>
            import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
        meta: { hidden: true }
    },
    {
        path: '/404',
        component: () =>
            import(/* webpackChunkName: "404" */ '@/views/error-page/404.vue'),
        meta: { hidden: true }
    },
    {
        path: '/401',
        component: () =>
            import(/* webpackChunkName: "401" */ '@/views/error-page/401.vue'),
        meta: { hidden: true }
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: '/dashboard',
                component: () =>
                    import(
                        /* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'
                    ),
                name: 'dashboard',
                meta: {
                    title: '仪表盘',
                    icon: 'dashboard',
                    affix: true
                }
            }
        ]
    },
    {
        path: '/projects-management-menu',
        component: Layout,
        meta: {
            title: '项目管理',
            icon: 'projects',
            affix: true
        },
        children: [
            {
                path: '/projects-management',
                component: () =>
                    import(
                        '@/views/projects-management/index.vue'
                    ),
                name: 'projectsManagement',
                meta: {
                    title: '项目管理',
                    icon: 'projects',
                    affix: true
                }
            },
            {
                path: '/projects-management/data-source',
                component: () =>
                    import(
                        '@/views/projects-management/data-source/index.vue'
                    ),
                name: 'dataSource',
                meta: {
                    title: '数据源',
                    icon: 'data',
                    affix: true
                }
            },
            {
                path: '/projects-management/documents-management',
                component: () =>
                    import(
                        '@/views/projects-management/documents-management/index.vue'
                    ),
                name: 'documentsManagement',
                meta: {
                    title: '文档工作台',
                    icon: 'documents-management',
                    affix: true
                }
            }
        ]
    },
    {
        path: '/systems-management-menu',
        component: Layout,
        meta: {
            title: '系统管理',
            icon: 'systems-management',
            affix: true
        },
        children: [
            {
                path: '/systems-management/dictionary-management',
                component: () =>
                    import(
                        '@/views/systems-management/dictionary-management/index.vue'
                    ),
                name: 'dictionaryManagement',
                meta: {
                    title: '字典管理',
                    icon: 'dictionary-management',
                    affix: true
                }
            },
            {
                path: '/systems-management/logs-management',
                component: () =>
                    import(
                        '@/views/systems-management/logs-management/index.vue'
                    ),
                name: 'logsManagement',
                meta: {
                    title: '日志管理',
                    icon: 'logs-management',
                    affix: true
                }
            },
            {
                path: '/systems-management/users-management',
                component: () =>
                    import(
                        '@/views/systems-management/users-management/index.vue'
                    ),
                name: 'usersManagement',
                meta: {
                    title: '用户管理',
                    icon: 'users-management',
                    affix: true
                }
            },
            {
                path: '/systems-management/roles-management',
                component: () =>
                    import(
                        '@/views/systems-management/roles-management/index.vue'
                    ),
                name: 'rolesManagement',
                meta: {
                    title: '角色管理',
                    icon: 'roles-management',
                    affix: true
                }
            },
            {
                path: '/systems-management/authority-management',
                component: () =>
                    import(
                        '@/views/systems-management/authority-management/index.vue'
                    ),
                name: 'authorityManagement',
                meta: {
                    title: '权限管理',
                    icon: 'authority-management',
                    affix: true
                }
            }

        ]
    },
    // 个人中心
    {
        path: '/profile',
        component: Layout,
        redirect: '/profile/index',
        meta: { hidden: true },
        children: [
            {
                path: 'index',
                component: () =>
                    import(
                        /* webpackChunkName: "profile" */ '@/views/profile/index.vue'
                    ),
                name: 'Profile',
                meta: {
                    title: 'profile',
                    icon: 'user',
                    noCache: true
                }
            }
        ]
    }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes: RouteConfig[] = [
    {
        path: '*',
        redirect: '/404',
        meta: { hidden: true }
    }
]

const createRouter = () =>
    new VueRouter({
        // mode: 'history',  // Disabled due to Github Pages doesn't support this, enable this if you need.
        scrollBehavior: (to, from, savedPosition) => {
            if (savedPosition) {
                return savedPosition
            } else {
                return { x: 0, y: 0 }
            }
        },
        base: process.env.BASE_URL,
        routes: constantRoutes
    })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter();
    (router as any).matcher = (newRouter as any).matcher // reset router
}

export default router
