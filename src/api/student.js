import axiosAPI from '@/axiosAPI';

const appkey = 'liuhaha_1607006599038';
export default {
  getAllStudent() {
    return axiosAPI.get(`/api/student/findAll?appkey=${appkey}`);
  },
  getByPage(data) {
    return axiosAPI.get(`/api/student/findByPage?appkey=${appkey}&${data}`);
  },
  deleteBySno(data) {
    return axiosAPI.get(`/api/student/delBySno?appkey=${appkey}&${data}`);
  },
  editStu(data) {
    return axiosAPI.get(`/api/student/updateStudent?appkey=${appkey}&${data}`);
  },
  addStu(data) {
    return axiosAPI.get(`/api/student/addStudent?appkey=${appkey}&${data}`);
  },
};
