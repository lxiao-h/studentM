<template>
  <div class="studentContainer">
      <StudentList
            :tableData="dataTable"
            @editStu="editStu"
            @delStu="delStu"
          />
          <StuInfo
            :dialogVisible="isShow"
            @subInfo="subInfo"
            @cancleInfo="cancleInfo"
            :stuInfo="stuInfo"
          />
  </div>
</template>

<script>
import StudentList from '@/components/StudentList.vue';
import student from '@/api/student';
import StuInfo from '@/components/StuInfo.vue';
import formatStu from '@/utils/formatStu';
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      // dataTable: [],
      isShow: false,
      stuInfo: {},
    };
  },
  components: {
    StudentList,
    StuInfo,
  },
  computed: { // ['page', 'total', 'size']

    ...mapState({
      page: (state) => state.page,
      totla: (state) => state.totla,
      size: (state) => state.size,
      dataTable: (state) => state.student,
    }),
  },
  async beforeCreate() {
    // const data = await student.getByPage(`page=1&size=${this.size}`);
    // //  .then((res) => {
    // this.setTotal(Math.ceil(data.cont / this.size));
    // this.dataTable = formatStu(data);
    // // });
  },
  async  created() {
    const data = await student.getByPage(`page=1&size=${this.size}`);
    // console.log(data.data);
    // console.log(Math.ceil(data.data.cont / this.size));
    this.setTotal(Math.ceil(data.data.cont / this.size));
    this.setStu(formatStu(data.data.findByPage));
  },
  methods: {
    ...mapActions(['setStu', 'setTotal']),
    delStu(info) {
      console.log(info);
      student.deleteBySno(`sNo=${info.sNo}`).then((r) => {
        console.log(r);
        if (r.status === 'success') {
          alert('删除成功');
          student.getByPage(`page=${this.page}&size=${this.size}`).then((res) => {
            this.dataTable = formatStu(res.data);
          });
        } else {
          console.log(r.msg);
        }
      });
    },
    editStu(info) {
      this.stuInfo = info;
      this.isShow = true;
    },
    subInfo(info) {
      const stu = info;
      this.isShow = false;
      const birt = new Date().getFullYear() - info.age;
      stu.birth = birt;
      student.editStu(
        `sNo=${stu.sNo}&name=${stu.name}&sex=${stu.sex}&birth=${stu.birth}&phone=${stu.phone}&address=${stu.address}&email=${stu.email}`,
      ).then((res) => {
        if (res.status === 'success') {
          student.getByPage(`page=${this.page}&size=${this.size}`).then((r) => {
            this.dataTable = formatStu(r.data);
          });
        } else {
          console.log(res.msg);
        }
      });
    },
    cancleInfo() {
      console.log('取消了');
      this.isShow = false;
    },
  },
};
</script>

<style scoped>
</style>
