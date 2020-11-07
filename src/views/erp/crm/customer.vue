<template>
  <div>
    客户管理
    <el-table
      ref="multipleTable"
      :data="list"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="序号" width="70" align="center">
        <template slot-scope="scope">
          {{ (page - 1) * limit + scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column prop="customerName" label="姓名" width="120">
      </el-table-column>
      <el-table-column label="类型" width="180">
        <template slot-scope="scope">
          {{ scope.row.type === 1 ? "一般客户" : "重要客户" }}
        </template>
      </el-table-column>
      <el-table-column prop="gmtCreate" label="创建时间" width="150">
      </el-table-column>
      <el-table-column prop="gmtModified" label="更新时间" width="150">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
// import {getCustomerPageListCondition} from "@/api/erp/crm/customer";
import customer from "@/api/erp/crm/customer";
export default {
    data() {
    return {
      list: [],
      total: 0,
      page: 1,
      limit: 10,
      teacherQuery: {
        custoemrName: "",
        type: "",
        begin: "",
        end: "",
      },
    };
  },
  created() {
    this.getList();
  },
  methods: {
    //获取讲师列表
    getList(page = 1) {
      this.page = page
      customer.getCustomerPageListCondition(this.page, this.limit, this.customerQuery)
        .then((response) => {
          //请求成功返回数据
          this.tableData = response.data.rows;
          this.tatal = response.data.total;
        })
        .catch((error) => {
          console.log(error);
        }); //请求失败
    },
    resetData() {
      this.teacherQuery = {};
      this.getList();
    },
    toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    
  }
}
</script>