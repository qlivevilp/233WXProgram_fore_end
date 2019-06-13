// pages/personal_page/personal_page.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userAvatarUrl: null,
    userNickName: null,
    isconcerned: true,
    iscollected: true,
    istweeted: true,
    isquested: true,
    flag: 0,
    friendList: [],
    collectionList: [],
    tweetList: [],
    questionList: [],
  },
  /**
   * 获取关注好友信息列表
   */
  getMyconcernList() {
    var that = this;
    wx.request({
      url: 'http://minizians.cn:8080/selectFriends',
      //data:{},
      //请求后台数据成功
      success(res) {
        var jsonObject = new Array();
        console.log(res.data)
        jsonObject = res.data;
        console.log(jsonObject[0])
        console.log("首页3" + JSON.stringify(jsonObject[0]))
        that.setData({
          friendList: jsonObject,
        });
      },
      fail(res) {
        console.log('返回数据失败')
      }
    })
  },
  /**
   * 获取收藏列表
   */
  getMycollectionList() {
    var that = this;
    wx.request({
      url: 'http://minizians.cn:8080/selectQuestionByLike',
      //data:{},
      //请求后台数据成功
      success(res) {
        var jsonObject = new Array();
        console.log(res.data)
        jsonObject = res.data;
        console.log(jsonObject[0])
        console.log("首页3" + JSON.stringify(jsonObject[0]))
        that.setData({
          collectionList: jsonObject,
        });
      },
      fail(res) {
        console.log('返回数据失败')
      }
    })
  },
  /**
   * 获取我的推文
   */
  getTweetList() {
    var that = this;
    wx.request({
      url: 'http://minizians.cn:8080/selectShareByLike',
      //data:{},
      //请求后台数据成功
      success(res) {
        var jsonObject = new Array();
        console.log(res.data)
        jsonObject = res.data;
        console.log(jsonObject[0])
        console.log("首页3" + JSON.stringify(jsonObject[0]))
        that.setData({
          tweetList: jsonObject,

        });
      },
      fail(res) {
        console.log('返回数据失败')
      }
    })
  },
  /**
   * 获取我的提问
   */
  getQuestionList() {
    var that = this;
    wx.request({
      url: 'http://minizians.cn:8080/selectOwnQuestion',
      //data:{},
      //请求后台数据成功
      success(res) {
        var jsonObject = new Array();
        console.log(res.data)
        jsonObject = res.data;
        console.log(jsonObject[0])
        console.log("首页3" + JSON.stringify(jsonObject[0]))
        that.setData({
          questionList: jsonObject,
        });
      },
      fail(res) {
        console.log('返回数据失败')
      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      userNickName: app.globalData.nick_Name,
      userAvatarUrl: app.globalData.avatar_Url,
    });
  },
  //按钮事件处理函数
  handleConcerned() {
    var that = this;
    that.setData({
      iscollected: !that.data.iscollected,
      istweeted: !that.data.istweeted,
      isquested: !that.data.isquested,
      flag: 1
    });
    this.getMyconcernList();
  },
  handleCollection() {
    var that = this;
    that.setData({
      isconcerned: !that.data.isconcerned,
      istweeted: !that.data.istweeted,
      isquested: !that.data.isquested,
      flag: 2
    });
    this.getMycollectionList();
  },
  handleTweet() {
    var that = this;
    that.setData({
      isconcerned: !that.data.isconcerned,
      iscollected: !that.data.iscollected,
      isquested: !that.data.isquested,
      flag: 3
    });
    this.getTweetList();
  },
  handleQuestion() {
    var that = this;
    that.setData({
      isconcerned: !that.data.isconcerned,
      iscollected: !that.data.iscollected,
      istweeted: !that.data.istweeted,
      flag: 4
    });
    this.getQuestionList();
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