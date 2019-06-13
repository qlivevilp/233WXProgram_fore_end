// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arry: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 输入监听
   */
  searchInputAction: function (e) {
    console.log(e)
    var that = this;
    let value = e.detail.value
    if (value.length == 0) {
      this.setData({
        searchResultDatas: []
      })
      return
    }
    wx.request({
      // url: 'https://gank.io/api/search/query/' + encodeURIComponent(value) + '/category/all/count/10/page/1',
      url: 'http://minizians.cn:8080/searchShare?condition='+ encodeURIComponent(value),
      data: '',
      success: function (res) {
        console.log(res.data);
        var jsonObject = new Array();
        jsonObject = res.data;
        // console.log(res.data[0].sTitle);
        // console.log(res.data[0].sTitle = e.detail.value?true:false);
          let searchData = res.data.map(function (res) {
            return { key: value, name: res.sTitle }
        })
        that.setData({
           searchData,
           searchResultDatas: res.data,
        })
      },
      fail: function (res) { },
    })
  },

  toDtails(event) {
    var that = this;
    var arr = new Array();
     arr = event.currentTarget.dataset.item;
    /*时间字符串分割*/
    var str1 = arr.sTime;
    var spl1 = str1.split("T");
    var spl2 = spl1[1].split(".");
    var str = "  " + spl1[0] + '  ' + spl2[0];
    this.data.arry[2] = str;
    this.data.arry[0] = arr.sContext;
    this.data.arry[1] = arr.sPic;
    this.data.arry[3] = arr.sId;
    that.setData({
      arry: this.data.arry,
      temp: this.data.arry[3],
    })
    console.log("首页2" + JSON.stringify(arr))
    console.log("首页3" + JSON.stringify(this.data.arry[0]))
    wx.navigateTo({
      url: '../details/details?arry=' + JSON.stringify(this.data.arry),
    })
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