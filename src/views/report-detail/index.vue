<template>
  <div class="height-100-percent flex flex-column">
    <div class="flex justify-space-between font-size-20px font-weight mb-12px">
      <div>
        <svg-icon icon-class="back" @click="$router.go(-1)"></svg-icon>
        仪表盘详情/{{ id === '1' ? '管理员工作台' : '自定义仪表盘' }}
      </div>
      <el-dropdown>
        <svg-icon icon-class="more-filled"></svg-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="jumpToReportEdit(id)">修改仪表盘</el-dropdown-item>
            <el-dropdown-item @click="jumpToReportPreview(id)">预览仪表盘</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div
      class="flex-1 overflow-scroll"
      style="background-size: cover"
      :style="{ backgroundImage: 'url(' + require('@/assets/dashboard-bg/1.png') + ')' }"
    >
      <grid-layout
        v-model:layout="detailTargetList"
        :col-num="100"
        :row-height="10"
        :is-draggable="false"
        :is-resizable="false"
        :responsive="false"
        :vertical-compact="true"
        :use-css-transforms="false"
      >
        <grid-item
          v-for="target in detailTargetList"
          :key="target.cardId"
          :x="target.x"
          :y="target.y"
          :w="target.w"
          :h="target.h"
          :i="target.i"
        >
          <div class="detail-target-card flex flex-column">
            <div class="chart-item flex-1">
              <component :is="target.cardId"></component>
            </div>
          </div>
        </grid-item>
      </grid-layout>
    </div>
  </div>
</template>

<script>
  import { getReportDetail } from '@/api/report'
  import { GridLayout, GridItem } from 'vue-grid-layout'

  export default {
    name: 'ReportDetail',
    components: { GridLayout, GridItem },
    data() {
      return {
        detailTargetList: [],
        id: this.$route.params.id,
      }
    },
    created() {
      this.getReportDetail()
    },
    methods: {
      async getReportDetail() {
        const { data } = getReportDetail(this.id)
        this.detailTargetList = data
      },
      jumpToReportEdit(id) {
        this.$router.push(`/report-mng/edit/${id}`)
      },
      jumpToReportPreview(id) {
        let routeData = this.$router.resolve({ path: `/report-mng/preview/${id}` })
        window.open(routeData.href, '_blank')
      },
    },
  }
</script>

<style lang="scss" scoped>
  .detail-target-card {
    height: 100%;
    .chart-item {
      & > div {
        height: 100%;
      }
    }
  }
</style>
