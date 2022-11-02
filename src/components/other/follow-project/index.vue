<template>
  <div class="flex flex-column">
    <div class="target-title mb-24px">重点项目关注情况</div>
    <ul class="flex-1 grid grid-gap-16px grid-template-columns-20-percent">
      <li
        v-for="(item, index) in list"
        class="border-radius-8px flex flex-column"
        style="color: #666; padding: 14px 16px"
      >
        <div class="flex align-center font-weight font-size-16px mb-14px" style="color: #292e43">
          <el-image
            :src="require('@/icons/png/project' + (index + 1) + '.png')"
            style="height: 40px"
            class="mr-12px"
          ></el-image>
          {{ item.label }}
        </div>
        <div>
          <label>目前进展：</label>
          <span>{{ item.status }}</span>
        </div>
        <div>
          <label>负责人员：</label>
          <span>{{ item.user }}</span>
        </div>
        <div>
          <label>存在问题：</label>
          <span :style="{ color: item.problem ? '#F5222D' : '' }">{{ item.problem || '--' }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import SvgIcon from '../../svg-icon'
  export default {
    name: 'follow-project',
    components: { SvgIcon },
    data() {
      return {
        list: [
          {
            label: '信息管理项目1',
            status: '交付中',
            icon: '制品数',
            user: '张三',
            problem: '单元测试覆盖率较低',
          },
          {
            label: '信息管理项目2',
            status: '交付中',
            icon: '制品数',
            user: '李四',
            problem: '',
          },
          {
            label: '信息管理项目3',
            status: '交付中',
            icon: '制品数',
            user: '王五',
            problem: '',
          },
          {
            label: '信息管理项目4',
            status: '交付中',
            icon: '制品数',
            user: '赵六',
            problem: '',
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
  li > div:not(:last-child, :first-child) {
    margin-bottom: 10px;
    margin-left: 2px;
  }
  li {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 2px 20px 0 #d3d6e3;
    opacity: 0.9;
    label,
    span {
      color: #8a8a8a;
      font-size: 14px;
      font-weight: 400;
    }
    span {
      color: #333333;
    }
  }
</style>
