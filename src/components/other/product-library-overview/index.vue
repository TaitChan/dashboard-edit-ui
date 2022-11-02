<template>
  <div class="flex flex-column">
    <div class="target-title mb-24px">制品库概况</div>
    <ul class="flex-1 grid grid-gap-16px grid-template-columns-30-percent">
      <li v-for="item in list" class="font-size-16px border-radius-8px flex flex-column" style="color: #666; padding: 16px 26px">
        <div class="flex align-center">
          <svg-icon :icon-class="item.icon" class="mr-10px font-size-20px"></svg-icon>
          {{ item.label }}
        </div>
        <div class="flex-1 font-size-24px font-weight mt-14px flex justify-center align-center" style="color: #333">{{ item.value }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  import SvgIcon from '../../svg-icon'
  export default {
    name: 'product-library-overview',
    components: { SvgIcon },
    data() {
      return {
        list: [
          {
            label: '制品数',
            value: '18',
            icon: '制品数',
          },
          {
            label: '镜像数',
            value: '18',
            icon: '镜像数',
          },
          {
            label: '三方组件数',
            value: '22',
            icon: '三方组件数',
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
  .target-title {
    color: #292e43;
    font-size: 16px;
    font-weight: 500;
    &::before {
      content: '';
      display: inline-block;
      height: 12px;
      width: 5px;
      background: #226ee7;
      margin-right: 1em;
    }
  }
  li {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 2px 20px 0 #d3d6e3;
    opacity: 0.9;
  }
</style>
