<template>
  <div class="height-100-percent flex flex-column">
    <div class="flex-1">
      <el-form label-width="100px" :rules="formRules">
        <el-form-item label="仪表盘名称" prop="name">
          <el-input v-model="form.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="背景图" prop="bg">
          <el-select v-model="form.bg" style="width: 100%" clearable>
            <el-option label="背景图1" value="1"></el-option>
            <el-option label="背景图2" value="2"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="pt-20px flex justify-end">
      <div>
        <el-button @click="$emit('cancel')">取消</el-button>
        <el-button type="primary" @click="$emit('ok')">确定</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'setting-drawer',
    components: {},
    data() {
      return {
        form: {
          name: '管理员工作台',
          bg: '1',
        },
        formRules: {
          name: [{ required: true, message: '必填', trigger: 'blur' }],
        },
      }
    },
    computed: {},
    created() {},
    methods: {},
  }
</script>
<style lang="scss" scoped></style>
