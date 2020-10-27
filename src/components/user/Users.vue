<template>
<!-- 面包屑 -->
<div>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    <el-breadcrumb-item>用户列表</el-breadcrumb-item>
  </el-breadcrumb>
<!-- 卡片 -->
  <el-card class="box-card">
    <!-- 搜索区域 -->
    <el-row :gutter="20">
      <el-col :span="8">
        <el-input v-model="input" placeholder="请输入内容">
          <el-button slot="append" icon="el-icon-search" ></el-button>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="dialogVisible = true">添加用户</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" border style="width: 100%" stripe fit>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="email" label="邮箱" width="200"> </el-table-column>
      <el-table-column prop="phone" label="电话"> </el-table-column>
      <el-table-column prop="role" label="角色"> </el-table-column>
      <el-table-column prop="status" label="状态">
        <el-switch v-model="value" active-color="#13ce66" inactive-color="#dcdfe6"> </el-switch>
      </el-table-column>
      <el-table-column prop="operation" label="操作">
        <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
        <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
        <el-tooltip class="item" effect="dark" content="提示文字" placement="top" :enterable="false">
          <el-button type="warning" icon="el-icon-share" size="mini"></el-button>
        </el-tooltip>
      </el-table-column>
    </el-table>
    <!-- 分页组件 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </el-card>
  <!-- 弹窗 创建用户 -->
  <el-dialog
    title="创建用户"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">
    <!-- <span>这是一段信息</span> -->
    <div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</div>
</template>
<script>
export default {
  methods: {
    handleSizeChange (val) {
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      // console.log(`当前页: ${val}`);
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    submitForm (formName) {
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     alert('submit!');
      //   } else {
      //     console.log('error submit!!');
      //     return false;
      //   }
      // });
    },
    resetForm (formName) {
      // this.$refs[formName].resetFields();
    }
  },
  data () {
    return {
      tableData: [{
        name: '王小壮',
        email: 'pengzhen@sysinte.com',
        phone: '15225657037',
        role: '超级管理员',
        status: false,
        operation: ''
      }, {
        name: '王小虎',
        email: 'pengzhen@sysinte.com',
        phone: '15225657037',
        role: '系统管理员',
        status: false,
        operation: ''
      }, {
        name: '王小红',
        email: 'pengzhen@sysinte.com',
        phone: '15225657037',
        role: '员工1',
        status: false,
        operation: ''
      }, {
        name: '王小明',
        email: 'pengzhen@sysinte.com',
        phone: '15225657037',
        role: '员工2',
        status: false,
        operation: ''
      }],
      value: true,
      input: '',
      dialogVisible: false,
      currentPage4: 4,
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>
<style lang="less" scoped>
.el-row {
  margin-bottom: 10px;
}
</style>
