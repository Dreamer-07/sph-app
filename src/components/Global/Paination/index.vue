<template>
  <div class="pagination">
    <button v-if="pageNo !== 1" @click="$emit('updatePageNo', pageNo - 1)">上一页</button>
    <button v-if="pageList.start > 1" @click="$emit('updatePageNo', 1)">1</button>
    <button v-if="pageList.start > 2">...</button>

    <button :class="{active: page === pageNo}" v-for="page in pageList.data" @click="$emit('updatePageNo', page)">{{ page }}</button>

    <button v-if="pageList.end < totalPage - 1">...</button>
    <button v-if="pageList.end < totalPage" @click="$emit('updatePageNo', totalPage)">{{ totalPage }}</button>
    <button v-if="pageNo !== totalPage" @click="$emit('updatePageNo', pageNo + 1)">下一页</button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
import range from 'lodash/range'

export default {
  name: "Pagination",
  props: ['pageNo', 'pageSize', 'continuity', 'total'],
  computed: {
    // 计算总页数 = 数据总量 / 每页数据量
    totalPage() {
      return Math.ceil(this.total / this.pageSize)
    },
    // 计算连续的页码集合
    pageList() {
      let start = 0, end = 0;
      start = this.pageNo - parseInt(this.continuity / 2);
      end = this.pageNo + parseInt(this.continuity / 2);
      // 如果 start 小于 1
      if (start < 1) {
        start = 1;
        end = this.continuity > this.totalPage ? this.totalPage : this.continuity;
      }
      // 如果 end 大于 totalPage
      if (end > this.totalPage) {
        start = this.continuity > this.totalPage ? 1 : this.totalPage - this.continuity + 1;
        end = this.totalPage;
      }
      return {data: range(start, end + 1), start, end};
    }
  }
}
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;

  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
