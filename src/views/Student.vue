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

export default {
  data() {
    return {
      dataTable: [],
      isShow: false,
      stuInfo: {},
    };
  },
  components: {
    StudentList,
    StuInfo,
  },
  beforeCreate() {
    student.getAllStudent().then((res) => {
      this.dataTable = res.data.map((i) => ({
        ...i,
        sex1: i.sex === 0 ? '男' : '女',
        age:
          new Date().getFullYear()
          - parseInt(i.birth.toString().slice(0, 4), 0),
      }));
    });
  },
  created() {},
  methods: {
    delStu(info) {
      console.log(info);
      student.deleteBySno(`sNo=${info.sNo}`).then((r) => {
        console.log(r);
        if (r.status === 'success') {
          alert('删除成功');
          student.getAllStudent().then((res) => {
            this.dataTable = res.data.map((i) => ({
              ...i,
              sex1: i.sex === 0 ? '男' : '女',
              age:
                new Date().getFullYear()
                - parseInt(i.birth.toString().slice(0, 4), 0),
            }));
          });
        } else {
          console.log(r.msg);
        }
      });
    },
    editStu(info) {
      // console.log(info);
      this.stuInfo = info;
      this.isShow = true;
    },
    subInfo(info) {
      const stu = info;
      // console.log('提交了');
      this.isShow = false;
      const birt = new Date().getFullYear() - info.age;
      stu.birth = birt;
      student.editStu(
        `sNo=${stu.sNo}&name=${stu.name}&sex=${stu.sex}&birth=${stu.birth}&phone=${stu.phone}&address=${stu.address}&email=${stu.email}`,
      ).then((res) => {
        if (res.status === 'success') {
          student.getAllStudent().then((r) => {
            this.dataTable = r.data.map((i) => ({
              ...i,
              sex1: i.sex === 0 ? '男' : '女',
              age:
                new Date().getFullYear()
                - parseInt(i.birth.toString().slice(0, 4), 0),
            }));
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
