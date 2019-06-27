const { Random } = require('mockjs');

module.exports =  [{
  id: 1000,
  username: 'wyd',
  password: 'aicoder.com',
  del: false,
  active: true, //  激活
  avatar: 'http://192.168.0.119:8848/server/img/a1.png',
  name: "张三",
  school: '清华大学',
  mail: Random.email(),
  phone: '189222222',
  isTeacher: true
}, {
  id: 1001,
  username: 'ngr',
  password: 'aicoder.com',
  del: false,
  active: true, //  激活
  avatar: 'http://192.168.0.119:8848/server/img/a1.png',
  name: "李思",
  school: '清华大学',
  mail: Random.email(),
  phone: '189222222',
  isTeacher: false
}, {
  id: 1002,
  username: 'admin',
  password: 'aicoder.com',
  del: false,
  active: true, //  激活
  avatar: 'http://192.168.0.119:8848/server/img/a1.png',
  name: "李思",
  school: '清华大学',
  mail: Random.email(),
  phone: '189222222',
  isTeacher: true
}, {
  id: 1003,
  username: 'admin1',
  password: 'aicoder.com',
  del: false,
  active: true, //  激活
  avatar: 'http://192.168.0.119:8848/server/img/a1.png',
  name: "李思",
  school: '清华大学',
  mail: Random.email(),
  phone: '189222222',
  isTeacher: true
}, {
  id: 1004,
  comnum: '123456',
  usernum: '123456',
  password: 'aicoder.com',
  del: false,
  active: true, //  激活
  avatar: 'http://192.168.0.126:7777/server/img/avator.png',
  name: "凌一零",
  school: '清华大学',
  section: '市场开拓',
  login: '2016-09-23 19:53',
  mail: Random.email(),
  phone: '189222222',
  isTeacher: true
}
]