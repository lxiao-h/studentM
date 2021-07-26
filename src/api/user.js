import axiosAPI from '@/axiosAPI';

const appkey = 'liuhaha_1607006599038';
// liuhaha_1607006599038

// function format(obj) {
//   let str = '';
//   for (const key in obj) {
//     str += `&${key}=${obj[key]}`;
//   }
//   return str;
// }

export default {
  login(data) {
    const str = `appkey=${appkey}${data}`;
    return axiosAPI.post('/api/student/stuLogin', str);
  },
  logon(params) {
    return axiosAPI.post('/api/student/stuRegister',
      `appkey=${appkey}&account=${params.account}&username=
        ${params.username}&password=${params.password}&rePassword=${params.rePassword}`);
  },
};
