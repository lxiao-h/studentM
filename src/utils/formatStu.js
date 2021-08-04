export default function formatStu(stu) {
  return stu.map((i) => ({
    ...i,
    sex1: i.sex === 0 ? '男' : '女',
    age: new Date().getFullYear()
            - parseInt(i.birth.toString().slice(0, 4), 0),
  }));
}
