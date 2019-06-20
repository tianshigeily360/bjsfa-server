const Mock = 'mockjs';
let data = ({
  // 店铺接口
  visitIn: [{
      id: 1,
      pid: 231093,
      name: '文悦超市',
      area: '44m',
      ditch: '平山阳光仓库',
      type: '混合型',
      bossName: '武老板',
      subon: '2019-05-08 16:54:26',
      phone: 17835816757,
      distance: '500m',
      address: "乌鲁木齐大西桥",
      del: 0
    },
    {
      id: 2,
      pid: 231093,
      name: '世纪超市',
      area: '44m',
      ditch: '平山阳光仓库',
      type: '混合型',
      bossName: '牛老板',
      subon: '2019-05-08 16:54:26',
      phone: 17835816757,
      distance: '200m',
      del: 0,
      address: "乌鲁木齐大西桥"
    },
    {
      id: 3,
      pid: 231093,
      name: '北冰洋超市',
      area: '44m',
      ditch: '平山阳光仓库',
      type: '混合型',
      bossName: '加老板',
      subon: '2019-05-08 16:54:26',
      phone: 17835816757,
      distance: '2km',
      del: 0,
      address: "乌鲁木齐大西桥"
    },
    {
      id: 4,
      pid: 231093,
      name: '幸福超市',
      area: '44m',
      ditch: '平山阳光仓库',
      type: '混合型',
      bossName: '张老板',
      subon: '2019-05-08 16:54:26',
      phone: 17835816757,
      distance: '300m',
      del: 0,
      address: "乌鲁木齐大西桥"
    },
    {
      id: 5,
      pid: 231093,
      name: '时间超市',
      area: '44m',
      ditch: '平山阳光仓库',
      type: '混合型',
      bossName: '罗老板',
      subon: '2019-05-08 16:54:26',
      phone: 17835816757,
      distance: '600m',
      del: 0,
      address: "乌鲁木齐大西桥"
    },
    {
      id: 6,
      pid: 231093,
      name: '姥爷超市',
      area: '44m',
      ditch: '平山阳光仓库',
      type: '混合型',
      bossName: '李老板',
      subon: '2019-05-08 16:54:26',
      phone: 17835816757,
      distance: '800m',
      del: 0,
      address: "乌鲁木齐大西桥"
    },
    {
      id: 7,
      pid: 231093,
      name: '文悦超市',
      area: '44m',
      ditch: '平山阳光仓库',
      type: '混合型',
      bossName: '武老板',
      subon: '2019-05-08 16:54:26',
      phone: 17835816757,
      distance: '500m',
      del: 0,
      address: "乌鲁木齐大西桥"
    },
    {
      id: 8,
      pid: 231093,
      name: '文悦超市',
      area: '44m',
      ditch: '平山阳光仓库',
      type: '混合型',
      bossName: '武老板',
      subon: '2019-05-08 16:54:26',
      phone: 17835816757,
      distance: '500m',
      del: 0,
      address: "乌鲁木齐大西桥"
    }
  ],
  

  // 仓库接口
  repo: [
    {
      id: 1,
      reponame: '新乐阳光仓库',
      del: 0
    },
    {
      id: 2,
      reponame: '李小贤仓库',
      del: 0
    },
    {
      id: 3,
      reponame: '武渝东仓库',
      del: 0
    },
    {
      id: 4,
      reponame: '张亚如仓库',
      del: 0
    },
    {
      id: 5,
      reponame: '牛桂荣仓库',
      del: 0
    },
    {
      id: 6,
      reponame: '加敏仓库',
      del: 0
    },
    {
      id: 7,
      reponame: '罗凤霞仓库',
      del: 0
    },
  ],
  
  // 培训资料接口
  // 培训图文接口
  trainingImg: [{
      id: 1,
      title: '七度空间纯棉超薄哦',
      text: '武渝东三年奋达科技示范户我i据贺卡市场是连接符号打开几十年',
      img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2675641121,2895192120&fm=26&gp=0.jpg',
      del: 0,
      monery: "19.50",
      number: "1"
    },
    {
      id: 2,
      title: '护舒宝纯棉超薄哦',
      text: '武渝东三年奋达科技示范户我i据贺卡市场是连接符号打开几十年',
      img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3519951658,837889124&fm=26&gp=0.jpg',
      del: 0,
      monery: "19.50",
      number: "1"
    },
    {
      id: 3,
      title: '七度空间纯棉超薄哦',
      text: '武渝东三年奋达科技示范户我i据贺卡市场是连接符号打开几十年',
      img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2675641121,2895192120&fm=26&gp=0.jpg',
      del: 0,
      monery: "19.50",
      number: "1"
    },
    {
      id: 4,
      title: '护舒宝纯棉超薄哦',
      text: '武渝东三年奋达科技示范户我i据贺卡市场是连接符号打开几十年',
      img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2675641121,2895192120&fm=26&gp=0.jpg',
      del: 0,
      monery: "19.50",
      number: "1"
    },
    {
      id: 5,
      title: '护舒宝纯棉超薄哦',
      text: '武渝东三年奋达科技示范户我i据贺卡市场是连接符号打开几十年',
      img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3519951658,837889124&fm=26&gp=0.jpg',
      del: 0,
      monery: "19.50",
      number: "1"
    },
    {
      id: 6,
      title: '护舒宝纯棉超薄哦',
      text: '武渝东三年奋达科技示范户我i据贺卡市场是连接符号打开几十年',
      img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2675641121,2895192120&fm=26&gp=0.jpg',
      del: 0,
      monery: "19.50",
      number: "1"
    },
  ],
  // 培训问答接口
  answer: [
    {
      id: 1,
      question: '武渝东帅吗？',
      trueAnswer: '帅',
      answer: '不帅嘛',
      del: 0
    },
    {
      id: 2,
      question: '兔子和乌龟比什么绝对不会输',
      trueAnswer: '仰卧起坐',
      answer1: '跳远',
      answer2: '赛跑',
      del: 0
    },
    {
      id: 3,
      question: 'What’s the Chinese for “talk big”?',
      trueAnswer: '吹牛',
      answer1: '说谎话',
      answer2: '骂人',
      answer3: '很大',
      del: 0
    },
    {
      id: 4,
      question: '地球上出现的潮汐是由于',
      trueAnswer: '地月吸引力',
      answer1: '地球自转',
      answer2: '地球公转',
      answer3: '黄赤交角',
      del: 0
    },
    {
      id: 5,
      question: '中国最大的商业银行是',
      trueAnswer: '中国工商银行',
      answer1: '中国华夏银行',
      answer2: '中国农业银行',
      answer3: '中国邮政储蓄',
      del: 0
    }
  ],
  
  // 数据同步接口
  dataSync: [
    {
      id: 1,
      title: '结束拜访',
      text: '武渝东爱上了你擦科技处卡',
      number: 002100,
      subon: '2014.12.23 12:24:00',
      del: 0
    },
    {
      id: 2,
      title: '下单数据',
      text: '武渝东爱上了你擦科技处卡',
      number: 002100,
      subon: '2014.12.23 12:24:00',
      del: 0
    },
    {
      id: 3,
      title: '结束拜访',
      text: '武渝东爱上了你擦科技处卡',
      number: 002100,
      subon: '2014.12.23 12:24:00',
      del: 0
    }
  ],
  // 首页九宫格接口
  menuList: [{
      id: 1,
      menuName: '公司通告',
      imgUrl: 'http://192.168.0.126:7777/server/img/gstg.png',
      url: '/notice',
      del: 0
    },
    {
      id: 2,
      menuName: '进店拜访',
      imgUrl: 'http://192.168.0.126:7777/server/img/jdbf.png',
      url: '/visitshop',
      del: 0
    },
    {
      id: 3,
      menuName: '电话订单',
      imgUrl: 'http://192.168.0.126:7777/server/img/dhdd.png',
      url: '/phoneorder',
      del: 0
    },
    {
      id: 4,
      menuName: '培训资料',
      imgUrl: 'http://192.168.0.126:7777/server/img/pxzl.png',
      url: '/training',
      del: 0
    },
    {
      id: 5,
      menuName: '数据同步',
      imgUrl: 'http://192.168.0.126:7777/server/img/sjtb.png',
      url: '/asyncdata',
      del: 0
    },
    {
      id: 6,
      menuName: '新增门店',
      imgUrl: 'http://192.168.0.126:7777/server/img/xzmd.png',
      url: '/addedshop',
      del: 0
    },
    {
      id: 7,
      menuName: '消息中心',
      imgUrl: 'http://192.168.0.126:7777/server/img/xxzx.png',
      url: '/message',
      del: 0
    },
    {
      id: 8,
      menuName: '订单状态',
      imgUrl: 'http://192.168.0.126:7777/server/img/ddzt.png',
      url: '/orders',
      del: 0
    }
  ],
  // 首页 echart 接口
  echartData: [{
    month: '16%',
    sale: '77%',
    count: 266
  }],

  // 公告通过title 接口
  announce: [{
      id: 1,
      pid: 1,
      title: '销售代表团建通知',
      subon: '2016年11月21日',
      del: 0
    },
    {
      id: 2,
      pid: 2,
      title: '代表团建通知',
      subon: '2016年11月21日',
      del: 0
    },
    {
      id: 3,
      pid: 3,
      title: '产品团建通知',
      subon: '2016年11月21日',
      del: 0
    },
    {
      id: 4,
      pid: 4,
      title: '销售关于项目通知',
      subon: '2016年11月21日',
      del: 0
    },
    {
      id: 5,
      pid: 5,
      title: '销售代表通知',
      subon: '2016年11月21日',
      del: 0
    },
    {
      id: 6,
      pid: 6,
      title: '代表团建通知',
      subon: '2016年11月21日',
      del: 0
    }
  ],
  // 公告信息text 接口
  message: [
    {
      id: 1,
      pid: 1,
      title: '<h1>代表团全体成员</h1>',
      text: '<p>武渝东安抚巨化股份卡刷点卡不插卡社保卡办事处爱丽丝打开计算机的卡萨丁卡萨诺安科技报道擦</p>',
      subon: '2016.5.12-2016.5.14',
      address: '北京双龙峡冰瀑',
      del: 0
    },
    {
      id: 2,
      pid: 2,
      title: '<h1>全体成员</h1>',
      text: '<p>武渝东安抚巨化股份卡刷点卡不插卡社保卡办事处爱丽丝打开计算机的卡萨丁卡萨诺安科技报道擦</p>',
      subon: '2016.5.12-2016.5.14',
      address: '北京双龙峡冰瀑',
      del: 0
    },
    {
      id: 3,
      pid: 3,
      title: '<h1>销售代表团全体成员</h1>',
      text: '<p>武渝东安抚巨化股份卡刷点卡不插卡社保卡办事处爱丽丝打开计算机的卡萨丁卡萨诺安科技报道擦</p>',
      subon: '2016.5.12-2016.5.14',
      address: '北京双龙峡冰瀑',
      del: 0
    },
    {
      id: 4,
      pid: 4,
      title: '<h1>hhh全体成员</h1>',
      text: '<p>武渝东安抚巨化股份卡刷点卡不插卡社保卡办事处爱丽丝打开计算机的卡萨丁卡萨诺安科技报道擦</p>',
      subon: '2016.5.12-2016.5.14',
      address: '北京双龙峡冰瀑',
      del: 0
    },
    {
      id: 5,
      pid: 5,
      title: '<h1>ggg全体成员</h1>',
      text: '<p>武渝东安抚巨化股份卡刷点卡不插卡社保卡办事处爱丽丝打开计算机的卡萨丁卡萨诺安科技报道擦</p>',
      subon: '2016.5.12-2016.5.14',
      address: '北京双龙峡冰瀑',
      del: 0
    },
    {
      id: 6,
      pid: 6,
      title: '<h1>mmm全体成员</h1>',
      text: '<p>武渝东安抚巨化股份卡刷点卡不插卡社保卡办事处爱丽丝打开计算机的卡萨丁卡萨诺安科技报道擦</p>',
      subon: '2016.5.12-2016.5.14',
      address: '北京双龙峡冰瀑',
      del: 0
    }
  ],

  // #region 店内活动接口
  // 入口
  activity: [{
      id: 1,
      shopId: 1,
      month: 23343,
      year: 47575,
      percent: '34'
    },
    {
      id: 2,
      shopId: 3,
      month: 43875,
      year: 95858,
      percent: '54'
    },
    {
      id: 3,
      shopId: 2,
      month: 57635,
      year: 23445,
      percent: '56'
    },
    {
      id: 4,
      shopId: 6,
      month: 34342,
      year: 32434,
      percent: '36'
    },
    {
      id: 5,
      shopId: 5,
      month: 34324,
      year: 32423,
      percent: '76'
    },
    {
      id: 6,
      shopId: 8,
      month: 23424,
      year: 43244,
      percent: '47'
    },
    {
      id: 7,
      shopId: 7,
      month: 43244,
      year: 56755,
      percent: '47'
    },
    {
      id: 8,
      shopId: 4,
      month: 2344,
      year: 23423,
      percent: '28'
    },
  ],
  //下单页头部菜单接口
  orderMenu: [{
      id: 1,
      menuName: "促销",
    },
    {
      id: 2,
      menuName: "全部",
    },
    {
      id: 3,
      menuName: "PSKU-N",
    },
    {
      id: 4,
      menuName: "PSKU-M",
    },
    {
      id: 5,
      menuName: "PSKU-Y",
    },
  ],
  orderList: [
    {
    id: 1,
    menuId: 1,
    title: '巧克力威化饼',
    serial: 34577,
    monery: 78.00,
    number: 12,
    repertory: 1200,
    img: "http://img3.imgtn.bdimg.com/it/u=3857246371,3665907822&fm=26&gp=0.jpg"
  },
    {
    id: 2,
    menuId: 1,
    title: '巧克力威化饼',
    serial: 34577,
    monery: 78.00,
    number: 12,
    repertory: 1200,
    img: "http://img3.imgtn.bdimg.com/it/u=3857246371,3665907822&fm=26&gp=0.jpg"
  },
    {
    id: 3,
    menuId: 1,
    title: '巧克力威化饼',
    serial: 34577,
    monery: 78.00,
    number: 12,
    repertory: 1200,
    img: "http://img3.imgtn.bdimg.com/it/u=3857246371,3665907822&fm=26&gp=0.jpg"
  },
    {
    id: 4,
    menuId: 1,
    title: '巧克力威化饼',
    serial: 34577,
    monery: 78.00,
    number: 12,
    repertory: 1200,
    img: "http://img3.imgtn.bdimg.com/it/u=3857246371,3665907822&fm=26&gp=0.jpg"
  },
    {
    id: 5,
    menuId: 1,
    title: '巧克力威化饼',
    serial: 34577,
    monery: 78.00,
    number: 12,
    repertory: 1200,
    img: "http://img3.imgtn.bdimg.com/it/u=3857246371,3665907822&fm=26&gp=0.jpg"
  },
    {
    id: 6,
    menuId: 1,
    title: '巧克力威化饼',
    serial: 34577,
    monery: 78.00,
    number: 12,
    repertory: 1200,
    img: "http://img3.imgtn.bdimg.com/it/u=3857246371,3665907822&fm=26&gp=0.jpg"
  },
    {
    id: 7,
    menuId: 1,
    title: '巧克力威化饼',
    serial: 34577,
    monery: 78.00,
    number: 12,
    repertory: 1200,
    img: "http://img3.imgtn.bdimg.com/it/u=3857246371,3665907822&fm=26&gp=0.jpg"
  },
    {
    id: 8,
    menuId: 1,
    title: '巧克力威化饼',
    serial: 34577,
    monery: 78.00,
    number: 12,
    repertory: 1200,
    img: "http://img3.imgtn.bdimg.com/it/u=3857246371,3665907822&fm=26&gp=0.jpg"
  },
    {
    id: 9,
    menuId: 1,
    title: '巧克力威化饼',
    serial: 34577,
    monery: 78.00,
    number: 12,
    repertory: 1200,
    img: "http://img3.imgtn.bdimg.com/it/u=3857246371,3665907822&fm=26&gp=0.jpg"
  },
    {
    id: 10,
    menuId: 1,
    title: '巧克力威化饼',
    serial: 34577,
    monery: 78.00,
    number: 12,
    repertory: 1200,
    img: "http://img3.imgtn.bdimg.com/it/u=3857246371,3665907822&fm=26&gp=0.jpg"
  },
  {
    id:11,
    menuId: 3,
    title: '曲奇饼',
    serial: 34577,
    monery: 28.00,
    number: 22,
    repertory: 1200,
    img: "http://img3.imgtn.bdimg.com/it/u=2165682634,1275439937&fm=26&gp=0.jpg"
  },
  {
    id:12,
    menuId: 3,
    title: '曲奇饼',
    serial: 34577,
    monery: 28.00,
    number: 22,
    repertory: 1200,
    img: "http://img3.imgtn.bdimg.com/it/u=2165682634,1275439937&fm=26&gp=0.jpg"
  },
  {
    id:13,
    menuId: 3,
    title: '曲奇饼',
    serial: 34577,
    monery: 28.00,
    number: 22,
    repertory: 1200,
    img: "http://img3.imgtn.bdimg.com/it/u=2165682634,1275439937&fm=26&gp=0.jpg"
  },
  {
    id:14,
    menuId: 3,
    title: '曲奇饼',
    serial: 34577,
    monery: 28.00,
    number: 22,
    repertory: 1200,
    img: "http://img3.imgtn.bdimg.com/it/u=2165682634,1275439937&fm=26&gp=0.jpg"
  },
  {
    id:15,
    menuId: 3,
    title: '曲奇饼',
    serial: 34577,
    monery: 28.00,
    number: 22,
    repertory: 1200,
    img: "http://img3.imgtn.bdimg.com/it/u=2165682634,1275439937&fm=26&gp=0.jpg"
  },
  {
    id:16,
    menuId: 3,
    title: '曲奇饼',
    serial: 34577,
    monery: 28.00,
    number: 22,
    repertory: 1200,
    img: "http://img3.imgtn.bdimg.com/it/u=2165682634,1275439937&fm=26&gp=0.jpg"
  },
  {
    id:17,
    menuId: 3,
    title: '曲奇饼',
    serial: 34577,
    monery: 28.00,
    number: 22,
    repertory: 1200,
    img: "http://img3.imgtn.bdimg.com/it/u=2165682634,1275439937&fm=26&gp=0.jpg"
  },
  {
    id:18,
    menuId: 3,
    title: '曲奇饼',
    serial: 34577,
    monery: 28.00,
    number: 22,
    repertory: 1200,
    img: "http://img3.imgtn.bdimg.com/it/u=2165682634,1275439937&fm=26&gp=0.jpg"
  },
  {
    id:19,
    menuId: 3,
    title: '曲奇饼',
    serial: 34577,
    monery: 28.00,
    number: 22,
    repertory: 1200,
    img: "http://img3.imgtn.bdimg.com/it/u=2165682634,1275439937&fm=26&gp=0.jpg"
  },
  {
    id:20,
    menuId: 3,
    title: '曲奇饼',
    serial: 34577,
    monery: 28.00,
    number: 22,
    repertory: 1200,
    img: "http://img3.imgtn.bdimg.com/it/u=2165682634,1275439937&fm=26&gp=0.jpg"
  },
]
  // #endregion
})
module.exports = data;