<template>
  <div class="flex flex-column">
    <div class="target-title mb-50px">应用库概况</div>
    <ul class="flex-1 grid grid-gap-16px grid-template-columns-200px">
      <li
        v-for="item in list"
        class="flex align-center font-size-16px border-radius-8px font-weight-400"
        style="color: #666"
      >
        <el-progress type="circle" :percentage="item.percent" :color="item.color" :width="96" />
        <div class="ml-30px">
          {{ item.label }}
          <div class="font-size-32px font-weight-600 mt-14px" style="color: #4a4a4a">
            {{ item.value }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'app-library-overview',
    data() {
      return {
        list: [
          {
            label: '容器应用',
            value: 32,
            color: '#3C7AFA',
            percent: 27,
          },
          {
            label: '虚拟机应用',
            value: 85,
            color: '#5ACBA8',
            percent: 67,
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
  ::v-deep .el-progress__text {
    font-size: 20px !important;
    color: #4a4a4a;
    font-weight: 600;
    margin-left: 0.3em;
  }
  ::v-deep .el-progress-circle__track {
    --el-fill-color-light: #d4d4d4;
  }
</style>
