// pages/index/helpNotice/helpNotice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loction_src:'../../../icons/location.png',
    noticeList:[{
      index:1,
      name:'教育学习',
      remark:'补习6年级数学（学习方法为主）',
      status:'待救助',
      address:'南桥镇悦晟新苑'
    },{
      index:2,
      name:'医疗救助',
      remark:'患有甲状腺癌，需要医疗方面求助',
      status:'待救助',
      address:'南桥镇普康苑'
    },{
      index:3,
      name:'医疗救助',
      remark:'患有甲状腺癌，需要医疗咨询以及日常照护',
      status:'待救助',
      address:'南桥镇普康苑'
    },{
      index:4,
      name:'医疗救助',
      remark:'患有甲状腺癌，前列腺癌，需要医疗方面求助',
      status:'待救助',
      address:'南桥镇正环路888弄附近'
    },{
      index:5,
      name:'医疗救助',
      remark:'患有肠癌，需要医疗方面求助',
      status:'待救助',
      address:'南桥镇正环路666弄附近'
    },{
      index:6,
      name:'医疗救助',
      remark:'尿毒症肾移植，需要医疗方面求助',
      status:'待救助',
      address:'南桥镇江海花园'
    },{
      index:7,
      name:'医疗救助',
      remark:'鼻癌，需要医疗方面求助以及政策求助',
      status:'待救助',
      address:'南桥镇立新路94弄'
    },{
      index:8,
      name:'医疗救助',
      remark:'白血病需要医疗方面求助以及日常照护',
      status:'待救助',
      address:'南桥镇贝港北区'
    },{
      index:9,
      name:'医疗救助',
      remark:'乳腺癌需要医疗方面求助以及政策求助',
      status:'待救助',
      address:'南桥镇贝港新村'
    },{
      index:10,
      name:'医疗救助',
      remark:'肢体残疾需要医疗方面求助',
      status:'待救助',
      address:'南桥镇金昊雅苑南区'
    },{
      index:11,
      name:'医疗救助',
      remark:'心脏病需要医疗方面求助',
      status:'待救助',
      address:'南桥镇金海苑北区'
    },{
      index:12,
      name:'医疗救助',
      remark:'高血压病需要医疗方面求助',
      status:'待救助',
      address:'南桥镇金昊雅苑南区'
    },{
      index:13,
      name:'医疗救助',
      remark:'身患肾恶性肿瘤需要医疗方面求助以及日常照护',
      status:'待救助',
      address:'南桥镇育秀东区'
    },{
      index:14,
      name:'医疗救助',
      remark:'侏儒症需要医疗方面求助',
      status:'待救助',
      address:'南桥镇运河新村'
    },{
      index:15,
      name:'医疗救助',
      remark:'肠癌需要医疗方面求助',
      status:'待救助',
      address:'南桥镇众旺苑'
    },{
      index:16,
      name:'医疗救助',
      remark:'肢体残疾需要医疗方面求助',
      status:'待救助',
      address:'南桥镇华严村'
    },{
      index:17,
      name:'医疗救助',
      remark:'脑瘤需要医疗方面求助',
      status:'待救助',
      address:'南桥镇民旺苑北区'
    },{
      index:18,
      name:'医疗救助',
      remark:'脑溢血瘫痪需要医疗方面求助以及日常照护',
      status:'待救助',
      address:'南桥镇民旺苑南区'
    },{
      index:19,
      name:'医疗救助',
      remark:'慢性肾病需要医疗方面求助',
      status:'待救助',
      address:'南桥镇民旺苑南区'
    },{
      index:20,
      name:'医疗救助',
      remark:'肺癌需要医疗方面求助',
      status:'待救助',
      address:'南桥镇育秀东区'
    },{
      index:21,
      name:'医疗救助',
      remark:'尿毒症需要医疗方面求助',
      status:'待救助',
      address:'南桥镇古华南区'
    },{
      index:22,
      name:'医疗救助',
      remark:'白血病需要医疗方面求助以及日常照护',
      status:'待救助',
      address:'南桥镇万龙新村'
    },{
      index:23,
      name:'医疗救助',
      remark:'肺部肿瘤 左肾输尿管肿瘤，需要医疗方面求助',
      status:'待救助',
      address:'南桥镇江海新村'
    },{
      index:24,
      name:'医疗救助',
      remark:'眼疾，需要医疗方面求助以及日常照护',
      status:'待救助',
      address:'南桥镇江海新村'
    },{
      index:25,
      name:'医疗救助',
      remark:'肺癌，需要医疗方面求助',
      status:'待救助',
      address:'南桥镇江海二村'
    },{
      index:26,
      name:'医疗救助',
      remark:'需要志愿者服务需要医疗方面求助',
      status:'待救助',
      address:'南桥镇阳光春城'
    },{
      index:27,
      name:'医疗救助',
      remark:'精神残疾需要医疗方面求助',
      status:'待救助',
      address:'南桥镇定康路'
    },{
      index:28,
      name:'医疗救助',
      remark:'下肢动脉硬化闭塞症需要医疗方面求助',
      status:'待救助',
      address:'南桥镇金海苑北区'
    },{
      index:29,
      name:'医疗救助',
      remark:'听力残疾需要医疗方面求助以及政策求助',
      status:'待救助',
      address:'南桥镇贝港花苑'
    },{
      index:30,
      name:'医疗救助',
      remark:'肝癌需要医疗方面求助',
      status:'待救助',
      address:'南桥镇金海公路1588弄'
    },{
      index:31,
      name:'医疗救助',
      remark:'华氏巨球蛋白血症需要医疗方面求助',
      status:'待救助',
      address:'南桥镇南庄路1388弄'
    },{
      index:32,
      name:'医疗救助',
      remark:'高血压 糖尿病需要医疗方面求助',
      status:'待救助',
      address:'南桥镇古华南区'
    },
    
    {
      index:33,
      name:'教育学习',
      remark:'补习高中数学、语文、地理（学习方法为主）',
      status:'待救助',
      address:'南桥镇运河北路附近'
    },{
      index:34,
      name:'教育学习',
      remark:'补习高二英语（语法）',
      status:'待救助',
      address:'南桥镇众旺苑'
    },{
      index:35,
      name:'教育学习',
      remark:'补习拼音教学、电脑打字,服务对象有轻度智力障碍',
      status:'进行中',
      address:'南桥镇育秀东区'
    },{
      index:36,
      name:'教育学习',
      remark:'补习6年级数学（学习方法为主）',
      status:'进行中',
      address:'南桥镇悦晟新苑'
    },{
      index:37,
      name:'教育学习',
      remark:'补习小学3年级语文、数学等预习,服务对象有2人，均为2年级升3年级，同时补课',
      status:'进行中',
      address:'南桥镇解放新村'
    },{
      index:38,
      name:'教育学习',
      remark:'补习小学三年级英语、数学',
      status:'进行中',
      address:'南桥镇贝港南区'
    },{
      index:39,
      name:'教育学习',
      remark:'补习初中英语阅读和数学几何',
      status:'进行中',
      address:'解放新村'
    },{
      index:40,
      name:'心理干预',
      remark:'本人患大重病，丈夫患精神疾病',
      status:'进行中',
      address:'庄行镇南庄路附近'
    },{
      index:41,
      name:'心理干预',
      remark:'高中女生(抑郁)',
      status:'进行中',
      address:'南桥镇阳光二期'
    },{
      index:42,
      name:'心理干预',
      remark:'大重病后抑郁情绪',
      status:'进行中',
      address:'南桥运河北路附近'
    },{
      index:43,
      name:'心理干预',
      remark:'儿童多动症',
      status:'进行中',
      address:'南桥镇宏伟路附近'
    },{
      index:44,
      name:'心理干预',
      remark:'大重病后抑郁情绪',
      status:'进行中',
      address:'南桥镇南奉公路附近'
    },{
      index:45,
      name:'心理干预',
      remark:'儿子患精神疾病',
      status:'进行中',
      address:'南桥镇古华南区'
    },{
      index:46,
      name:'心理干预',
      remark:'精神疾病（轻度狂躁）',
      status:'进行中',
      address:'邬桥社区汇南小区'
    },{
      index:47,
      name:'心理干预',
      remark:'服务对象智力障碍（一级）',
      status:'进行中',
      address:'南桥镇人民北路附近'
    },{
      index:48,
      name:'心理干预',
      remark:'青少年、自卑、抑郁情绪',
      status:'进行中',
      address:'南桥镇定康路附近'
    },{
      index:49,
      name:'心理干预',
      remark:'大重病后抑郁情绪',
      status:'进行中',
      address:'南桥镇运河北路附近'
    },{
      index:50,
      name:'心理干预',
      remark:'大重病后抑郁情绪',
      status:'进行中',
      address:'解放新村'
    }]
  },

  // 申请
  apply: function() {
    wx.navigateToMiniProgram({
      appId: 'wx34b0738d0eef5f78',
      path: 'pages/forms/publish?token=LAlaNV',
      extraData: {
        foo: 'bar'
      },
      envVersion: 'release',
      success(res) {
        // 打开成功
      }
    })
  },
  // 发布
  publish: function() {
    wx.navigateToMiniProgram({
      appId: 'wx34b0738d0eef5f78',
      path: 'pages/forms/publish?token=rFNhDP',
      extraData: {
        foo: 'bar'
      },
      envVersion: 'release',
      success(res) {
        // 打开成功
      }
    })
  },
  // 获取地址位置信息
  addressClick(e) {
    const that = this;
    // 获取当前位置的经纬度
    wx.getLocation({
      type: 'wgs84',
      success (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        debugger
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          // 在地图上显示当前位置
          success (res) {
            // 在地图上选择位置显示
            wx.chooseLocation({
              success (res) {
                // console.log(e.currentTarget.dataset['address'])
                debugger
                console.log(res);
                const { address } = res;
                that.setData({
                  address
                })
                console.log(that.data.address)
                that.getinfo();
              },fail(res){
                console.log(res);
              }
            })
          },fail(){
            console.log(res)
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})