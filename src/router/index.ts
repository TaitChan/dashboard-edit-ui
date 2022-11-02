import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/report-mng',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/report-mng',
        name: 'reportMng',
        component: () => import('@/views/report-mng/index.vue'),
        meta: {
          title: '仪表盘',
        },
      },
      {
        path: '/report-mng/create',
        name: 'reportCreate',
        component: () => import('@/views/report-save/index.vue'),
        meta: {
          title: '新建仪表盘',
          hidden: true,
        },
      },
      {
        path: '/report-mng/edit/:id',
        name: 'reportEdit',
        component: () => import('@/views/report-save/index.vue'),
        meta: {
          title: '修改仪表盘',
          hidden: true,
        },
      },
      {
        path: '/report-mng/detail/:id',
        name: 'reportDetail',
        component: () => import('@/views/report-detail/index.vue'),
        meta: {
          title: '仪表盘详情',
          hidden: true,
        },
      },

      {
        path: '/target-mng',
        name: 'targetMng',
        component: () => import('@/views/target-mng/index.vue'),
        meta: {
          title: '指标库',
        },
      },
      {
        path: '/icons',
        name: 'IconsLibrary',
        component: () => import('@/views/z-util-page/icons/index.vue'),
        meta: {
          title: '图标管理',
          hidden: true,
        },
      },
    ],
  },
  {
    path: '/report-mng/preview/:id',
    name: 'reportPreview',
    component: () => import('@/views/report-preview/index.vue'),
    meta: {
      title: '仪表盘预览',
      hidden: true,
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
