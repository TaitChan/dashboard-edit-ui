<template>
  <div class="flex flex-column">
    <div class="target-title mb-24px">项目概况</div>
    <ul class="flex-1 flex flex-column">
      <div class="mb-24px flex-1">
        <base-chart chartRef="project-overview" :option="option"></base-chart>
      </div>
      <li v-for="item in list" class="border-radius-8px flex align-center font-size-14px" style="color: #666666">
        <span></span>
        <div>{{ item.label }}</div>
        <div class="font-size-20px justify-self-end font-weight" style="color: #333">{{ item.value }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { getOption } from './index.js'
  export default {
    name: 'project-overview',
    data() {
      return {
        option: {},
        list: [
          {
            label: '已创建',
            value: 22,
          },
          {
            label: '已上线',
            value: 33,
          },
          {
            label: '已下线',
            value: 45,
          },
        ],
      }
    },
    created() {
      const { option } = getOption()
      this.option = option
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
    background: white;
    box-shadow: 0 2px 20px 0 #d3d6e3;
    opacity: 0.83;
    padding: 10px 24px 10px 16px;
    span {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
  li:not(:last-child) {
    margin-bottom: 12px;
  }
  li:nth-child(3n + 1) > span {
    background: #5acba8;
  }
  li:nth-child(3n + 2) > span {
    background: #4880ff;
  }
  li:nth-child(3n + 3) > span {
    background: #d4d4d4;
  }
</style>
