<template>
  <div class="flex flex-column height-100-percent">
    <div class="flex justify-space-between font-size-20px font-weight mb-12px">
      <div>
        <svg-icon icon-class="back" @click="$router.go(-1)"></svg-icon>
        {{ title }}
      </div>
      <div>
        <!--        <el-button>-->
        <!--          <svg-icon icon-class="plus"></svg-icon>-->
        <!--          自定义指标卡-->
        <!--        </el-button>-->
        <el-button @click="openDrawer">
          <svg-icon icon-class="plus"></svg-icon>
          选择指标卡
        </el-button>
        <el-button @click="openSettingDrawer">
          <svg-icon icon-class="setting"></svg-icon>
          仪表盘设置
        </el-button>
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary">{{ saveBtn }}</el-button>
      </div>
    </div>
    <div class="report-save flex-1 overflow-scroll padding-20px">
      <grid-layout
        v-model:layout="editTargetList"
        :col-num="100"
        :row-height="10"
        :is-draggable="true"
        :is-resizable="true"
        :responsive="false"
        :vertical-compact="true"
        :use-css-transforms="false"
      >
        <grid-item
          v-for="(target, index) in editTargetList"
          :key="target.cardId"
          :x="target.x"
          :y="target.y"
          :w="target.w"
          :h="target.h"
          :i="target.i"
        >
          <div class="edit-target-card flex flex-column" style="position: relative">
            <div class="flex justify-end align-center pb-20px" style="position: absolute; top: 0; right: 0">
              <el-tag type="info" class="mr-5px">仅供参考</el-tag>
              <div class="flex bg-gray-1 border-radius-6px color-info padding-2px">
                <el-tooltip content="点击设置宽度50%" placement="top">
                  <span
                    style="width: 2em"
                    class="flex align-center justify-center cursor-pointer"
                    @click="target.w = 50"
                    :class="target.w === 50 ? 'color-primary border-radius-4px box-shadow-small bg-white' : ''"
                  >
                    <svg-icon icon-class="layout-banhang" class="font-size-20px"></svg-icon>
                  </span>
                </el-tooltip>
                <el-tooltip content="点击设置宽度100%" placement="top">
                  <span
                    style="width: 2em"
                    class="flex align-center justify-center cursor-pointer"
                    @click="target.w = 100"
                    :class="target.w === 100 ? 'color-primary border-radius-4px box-shadow-small bg-white' : ''"
                  >
                    <svg-icon icon-class="layout-zhenghang" class="font-size-20px"></svg-icon>
                  </span>
                </el-tooltip>
              </div>
              <el-tooltip content="移除" placement="top">
                <el-button link type="info" @click="handleDel(target.cardId)" class="ml-5px">
                  <svg-icon icon-class="delete" class="font-size-16px"></svg-icon>
                </el-button>
              </el-tooltip>
            </div>
            <div class="chart-item flex-1">
              <component :is="target.cardId"></component>
            </div>
          </div>
        </grid-item>
      </grid-layout>
    </div>
  </div>
  <el-drawer v-model="drawer" title="选择指标卡" size="min(800px,100%)" destroy-on-close>
    <report-save-drawer @cancel="drawer = false" @ok="drawer = false"></report-save-drawer>
  </el-drawer>
  <el-drawer v-model="settingDrawer" title="仪表盘设置" size="min(400px,100%)" destroy-on-close>
    <setting-drawer @cancel="settingDrawer = false" @ok="settingDrawer = false"></setting-drawer>
  </el-drawer>
</template>

<script>
  import ReportSaveDrawer from './report-save-drawer'
  import { useReportStore } from '@/stores/report.js'
  import { mapState, mapActions } from 'pinia'
  import { getReportDetail } from '@/api/report'
  import { GridLayout, GridItem } from 'vue-grid-layout'
  import SvgIcon from '@/components/svg-icon'
  import SettingDrawer from './setting-drawer'

  export default {
    name: 'ReportSave',
    components: { SettingDrawer, SvgIcon, ReportSaveDrawer, GridLayout, GridItem },
    data() {
      return {
        id: this.$route.params.id || '',
        drawer: false,
        settingDrawer: false,
        grid: undefined,
        editTargetList: [],
      }
    },
    computed: {
      ...mapState(useReportStore, ['activeTargetList']),
      isEdit() {
        return Boolean(this.$route.params.id)
      },
      title() {
        return this.isEdit ? `修改仪表盘/${this.id === '1' ? '管理员工作台' : '自定义仪表盘'}` : '新建仪表盘'
      },
      saveBtn() {
        return this.isEdit ? '更新' : '保存'
      },
    },
    watch: {
      activeTargetList: {
        handler(val) {
          this.editTargetList = val
        },
        deep: true,
      },
    },
    created() {
      if (this.isEdit) {
        this.getReportDetail()
      } else {
        this.clearActiveTarget()
      }
    },
    mounted() {
      // this.grid = GridStack.init()
    },
    methods: {
      ...mapActions(useReportStore, ['setActiveTargetList', 'delActiveTarget', 'clearActiveTarget']),
      async getReportDetail() {
        const { data } = getReportDetail(this.id)
        data.forEach((v) => {
          v.active = true
        })
        this.editTargetList = data
      },
      openDrawer() {
        this.drawer = true
        console.log(JSON.stringify(this.editTargetList))
        this.setActiveTargetList(this.editTargetList)
      },
      openSettingDrawer() {
        this.settingDrawer = true
      },
      handleDel(cardId) {
        this.setActiveTargetList(this.editTargetList)
        this.delActiveTarget(cardId)
      },
      handleCancel() {
        this.$confirm('离开后将不保留编辑内容', '确认要离开当前编辑页面吗？', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            this.$router.go(-1)
          })
          .catch(() => {
            console.log('1')
          })
      },
    },
    unmounted() {
      this.clearActiveTarget()
    },
  }
</script>

<style lang="scss" scoped>
  .report-save {
    //background: #f0f9ff;
    background: #f0f2f5;
    border: 1px dashed #90cdf5;
    //opacity: 0.8;
  }
  .edit-target-card {
    height: 100%;
    border: 1px solid transparent;
    &:hover {
      border: 1px solid #169aee;
      background: #f0f9ff;
    }
    .chart-item {
      & > div {
        height: 100%;
      }
    }
  }
  :deep(.vue-grid-item) {
    height: unset;
  }
  :deep(.vue-grid-item).vue-grid-placeholder {
    background: transparent;
    border: 1px dashed rgba(0, 0, 0, 1);
  }
</style>
