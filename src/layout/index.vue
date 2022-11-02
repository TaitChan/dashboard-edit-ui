<template>
  <div class="layout">
    <nav class="layout__nav">
      <el-menu :default-active="$route.path" router>
        <el-menu-item v-for="menu in menuList" :key="menu.path" :index="menu.path">
          <span>{{ menu.meta?.title }}</span>
        </el-menu-item>
      </el-menu>
    </nav>
    <main class="layout__main">
      <router-view />
    </main>
  </div>
</template>
<script>
  import { routes } from '@/router/index'
  export default {
    name: 'LayoutPage',
    data() {
      return {}
    },
    computed: {
      menuList() {
        return routes[0].children.filter((route) => {
          return route.meta?.title && !route.meta?.hidden
        })
      },
    },
  }
</script>

<style lang="scss">
  .layout {
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
    &__nav {
      width: 210px;
      height: 100%;
      border-right: 1px solid var(--gray-1);
    }
    &__main {
      flex: 1;
      overflow: scroll;
      padding: 20px;
    }
  }
</style>
