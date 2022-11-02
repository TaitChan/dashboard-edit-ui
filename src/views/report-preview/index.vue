<template>
  <div class="height-100-percent flex flex-column" style="height: 100vh">
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
