<template>
  <ul id="pageWrapper">
    <li @click="changePage('prev')" :class="{ unSelect: nowPage === 1 }">
      <i class="el-icon-arrow-left"></i>
    </li>
    <template v-if="totalPage < 9">
      <li
        v-for="i in totalPage"
        :key="i"
        @click="changePage(i)"
        :class="{ active: i === nowPage }"
      >
        {{ i }}
      </li>
    </template>
    <template v-if="totalPage >= 9">
      <li :key="1" @click="changePage(1)" :class="{ active: 1 === nowPage }">
        1
      </li>
      <template v-if="nowPage < 5">
        <li :key="2" @click="changePage(2)" :class="{ active: 2 === nowPage }">
          2
        </li>
        <li :key="3" @click="changePage(3)" :class="{ active: 3 === nowPage }">
          3
        </li>
        <li :key="4" @click="changePage(4)" :class="{ active: 4 === nowPage }">
          4
        </li>
        <li @click="changePage('increase')" class="ellipsis increase"></li>
      </template>
      <template v-if="nowPage > 4 && nowPage <= totalPage - 5">
        <li @click="changePage('decrease')" class="ellipsis decrease"></li>
        <li :key="nowPage - 2" @click="changePage(nowPage - 2)">
          {{ nowPage - 2 }}
        </li>
        <li :key="nowPage - 1" @click="changePage(nowPage - 1)">
          {{ nowPage - 1 }}
        </li>
        <li :key="nowPage" @click="changePage(nowPage)" class="active">
          {{ nowPage }}
        </li>
        <li :key="nowPage + 1" @click="changePage(nowPage + 1)">
          {{ nowPage + 1 }}
        </li>
        <li :key="nowPage + 2" @click="changePage(nowPage + 2)">
          {{ nowPage + 2 }}
        </li>
        <li @click="changePage('increase')" class="ellipsis increase"></li>
      </template>
      <template v-if="nowPage > totalPage - 5">
        <li @click="changePage('decrease')" class="ellipsis decrease"></li>
        <li
          :key="totalPage - 5"
          @click="changePage(totalPage - 5)"
          :class="{ active: totalPage - 5 === nowPage }"
        >
          {{ totalPage - 5 }}
        </li>
        <li
          :key="totalPage - 4"
          @click="changePage(totalPage - 4)"
          :class="{ active: totalPage - 4 === nowPage }"
        >
          {{ totalPage - 4 }}
        </li>
        <li
          :key="totalPage - 3"
          @click="changePage(totalPage - 3)"
          :class="{ active: totalPage - 3 === nowPage }"
        >
          {{ totalPage - 3 }}
        </li>
        <li
          :key="totalPage - 2"
          @click="changePage(totalPage - 2)"
          :class="{ active: totalPage - 2 === nowPage }"
        >
          {{ totalPage - 2 }}
        </li>
        <li
          :key="totalPage - 1"
          @click="changePage(totalPage - 1)"
          :class="{ active: totalPage - 1 === nowPage }"
        >
          {{ totalPage - 1 }}
        </li>
      </template>
      <li
        :key="totalPage"
        @click="changePage(totalPage)"
        :class="{ active: totalPage === nowPage }"
      >
        {{ totalPage }}
      </li>
    </template>
    <li
      @click="changePage('next')"
      :class="{ unSelect: nowPage === totalPage }"
    >
      <i class="el-icon-arrow-right"></i>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      // nowPage: 1,
      // totalPage: 1000,
    };
  },
  props: ['nowPage', 'totalPage'],
  methods: {
    changePage(val) {
      // if (val === 'prev') {
      //   this.nowPage = this.nowPage === 1 ? 1 : this.nowPage - 1;
      // } else if (val === 'next') {
      //   this.nowPage = this.nowPage === this.totalPage ? this.totalPage : this.nowPage + 1;
      // } else if (val === 'increase') {
      //   this.nowPage = this.nowPage + 5 >= this.totalPage
      //     ? this.totalPage
      //     : this.nowPage + 5;
      // } else if (val === 'decrease') {
      //   this.nowPage = this.nowPage - 5 <= 1 ? 1 : this.nowPage - 5;
      // } else {
      //   this.nowPage = val;
      // }
      this.$emit('changePage', val);
    },
  },
  computed: {},
};
</script>

<style scoped>
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}

#pageWrapper {
  display: flex;
  margin-top: 10px;
}

#pageWrapper li {
  min-width: 40px;
  padding: 0 3px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 20px;
  box-sizing: border-box;
  cursor: pointer;
  margin: 0 5px;
  background-color: #f4f4f5;
  color: #606266;
  min-width: 30px;
  border-radius: 2px;
}

#pageWrapper li.ellipsis {
  width: 40px;
}

#pageWrapper li.ellipsis::after {
  content: "...";
}

#pageWrapper li.ellipsis.decrease:hover::after {
  content: "<<";
}

#pageWrapper li.ellipsis.increase:hover::after {
  content: ">>";
}

#pageWrapper .unSelect {
  cursor: not-allowed;
}

#pageWrapper .active {
  background-color: #409eff;
  color: #fff;
}
</style>
