<template>
  <div>
    <div class="flex justify-space-between font-size-20px font-weight mb-12px">
      <div>仪表盘</div>
      <el-button @click="jumpToReportCreate" type="primary">新建仪表盘</el-button>
    </div>

    <el-table :data="tableData" style="margin-top: 20px">
      <el-table-column label="仪表盘名称" prop="name">
        <template #default="scope">
          <el-button link type="primary" @click="jumpToReportDetail(scope.row.id)">{{ scope.row.name }}</el-button>
        </template>
      </el-table-column>
      <el-table-column label="更新时间" prop="updateTime"></el-table-column>
      <el-table-column label="创建人" prop="user"></el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button link type="primary" @click="jumpToReportEdit(scope.row.id)">修改</el-button>
          <el-button link type="primary" @click="jumpToReportPreview(scope.row.id)">全屏预览</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'ReportMng',
    data() {
      return {
        tableData: [
          {
            id: 1,
            name: '管理员工作台',
            updateTime: '2022-06-22 16:03',
            user: 'admin',
          },
          {
            id: 2,
            name: '自定义仪表盘',
            updateTime: '2022-07-06 16:06',
            user: 'admin',
          },
        ],
      }
    },
    methods: {
      jumpToReportCreate() {
        this.$router.push('/report-mng/create')
      },
      jumpToReportEdit(id) {
        this.$router.push(`/report-mng/edit/${id}`)
      },
      jumpToReportDetail(id) {
        this.$router.push(`/report-mng/detail/${id}`)
      },
      jumpToReportPreview(id) {
        let routeData = this.$router.resolve({ path: `/report-mng/preview/${id}` })
        window.open(routeData.href, '_blank')
      },
    },
  }
</script>

<style lang="scss" scoped></style>
