// pages/details/details.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    iscollected: false,
    iscomment: false,
    detailObj: {},
    arr: [],
    detail_id:-1,
    flag:false,
    userList:[
      {
        u_id: 1,
        u_name: 'Tang',
      },
      {
        u_id: 2,
        u_name: 'Y.',
      },
      {
        u_id: 4,
        u_name: '随缘随意',
      },
      {
        u_id: 5,
        u_name: 'addUser',
      },
      {
        u_id: 6,
        u_name: 'testUsr',
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) 
  {
    var that = this;
    var temp ;
    var flag=false;
    this.data.arry = JSON.parse(options.arry);
    // detail_id = this.data.arry[3];
    console.log("详情页数据连接测试1：" + this.data.arry[3])
    var model = options.index;
    console.log("详情页数据连接测试2：" + JSON.stringify(model))
    that.setData({
      arry: this.data.arry,
      temp: this.data.arry[3],
    })

    wx.request({
      url: 'http://minizians.cn:8080/selectShareComment',
      //data:{},
      //请求后台数据成功
      success(res) {
        var jsonObject = new Array();
        var array = new Array();
        jsonObject = res.data;
        console.log('123', jsonObject[0].uId)
        // console.log('1  :', res.data.length)
        for (var i = 0; i < res.data.length; i++) {
          // console.log('1  :', typeof(i))
          // console.log('1  :', res.data.length)
          // console.log('123', jsonObject[0].uId)
          // console.log('1  :', jsonObject[i].uId)
          if (jsonObject[i].uId === 1) {
            jsonObject[i].csTime = 'Tang';
            // flag = true
          }
          else if (jsonObject[i].uId === 2) {
            jsonObject[i].csTime = 'Y.';
            // flag=true
          }
          else if (jsonObject[i].uId === 3) {
            jsonObject[i].csTime = '随缘随意';
          //   flag = true
          }
          else if (jsonObject[i].uId === 4) {
            jsonObject[i].csTime = 'addUser';
            // flag = true
          }
          else if (jsonObject[i].uId === 5) {
            jsonObject[i].csTime = 'testUsr';
            // flag = true
          }
          if (jsonObject[i].sId === that.data.temp){
            that.setData({
              flag:true
            })
          }
          // console.log('1111  :', jsonObject[i].sId, '   ' + JSON.stringify(that.data.temp))
        };
        // console.log('1111  :', flag)
            that.setData({
              array: jsonObject,
            });

      },
    });
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

  handleCollection() {
    let iscollected = !this.data.iscollected;
    this.setData({
      iscollected
    });
    let title = iscollected ? '收藏成功' : '取消收藏'
    wx.showToast({
      title,
      icon: 'success'
    })
  },
  handleShare() {
    wx.showToast({
      title: '分享成功',
      icon: 'success'
    })
  },
  handleComment() {
    let iscomment = !this.data.iscomment;
    this.setData({
      iscomment
    });
  },
  btn_submit(e){
    this.handleComment();
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