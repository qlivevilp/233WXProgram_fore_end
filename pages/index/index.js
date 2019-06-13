let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommend: false,
    concern: false,
    quetion: false,
    hhh: null,
    search: null,
    recommendationList: [], //推荐列表
    questionAndanswerList: [], //问答列表
    concernList: [],//关注列表
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: {},
    isHide: false,
    detailObj: {},
    arry: []
    //data: {},
  },
  getGlobal_variable_value() {
    var that = this;
    that.setData({
      recommend: app.globalData.ispopular_rcd,
      concern: app.globalData.isMy_cn,
      quetion: app.globalData.isQA_plaza
    })
    console.log(that.data.recommend)
  },

  toDtails(event) {
    var that = this;
    var arr = event.currentTarget.dataset.index;
    var model = JSON.stringify(arr);
    /*时间字符串分割*/
    var str1 = arr.sTime;
    var spl1 = str1.split("T");
    var spl2 = spl1[1].split(".");
    var str = "  " + spl1[0] + '  ' + spl2[0];
    this.data.arry[2] = str;

    this.data.arry[0] = arr.sContext;
    this.data.arry[1] = arr.sPic;
    this.data.arry[3] = arr.sId;
    console.log("首页数据连接测试1：" + JSON.stringify(arr))
    // console.log("首页3" + JSON.stringify(this.data.arry[0]))
    wx.navigateTo({
      url: '../details/details?arry=' + JSON.stringify(this.data.arry),
    })
  },
  toDtails_q(event) {
    var that = this;

    // console.log("首页2" + this.data.arry[0])
    var arr = event.currentTarget.dataset.index;
    var model = JSON.stringify(arr);
    /*时间字符串分割*/
    var str1 = arr.qTime;
    var spl1 = str1.split("T");
    var spl2 = spl1[1].split(".");
    var str = "  " + spl1[0] + '  ' + spl2[0];
    this.data.arry[2] = str;
    this.data.arry[0] = arr.qContext;
    this.data.arry[1] = arr.qPic;
    this.data.arry[3] = arr.qsId;
    console.log("首页数据连接测试2：" + JSON.stringify(arr))
    console.log("首页数据连接测试3：" + JSON.stringify(this.data.arry[0]))
    wx.navigateTo({
      url: '../details/details?arry=' + JSON.stringify(this.data.arry),
    })
  },
  /**
   * 获取关注列表
   */
  getconcernList() {
    var that = this;
    wx.request({
      url: 'http://minizians.cn:8080/selectFromFriends',
      //data:{},
      //请求后台数据成功
      success(res) {
        var jsonObject = new Array();
        console.log(res.data)
        jsonObject = res.data;
        console.log(jsonObject[0])
        console.log("首页数据连接测试4：" + JSON.stringify(jsonObject[0]))
        that.setData({
          concernList: jsonObject,
        });
      },
      fail(res) {
        console.log('返回数据失败')
      }
    })
  },
  /**
   * 获取问答列表
   */
  getquestionAndanswerList() {
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
        console.log("首页数据连接测试5：" + JSON.stringify(jsonObject[0]))
        that.setData({
          questionAndanswerList: jsonObject,
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
    // 查看是否授权
    wx.getSetting({

      success: function (res) {

        if (res.authSetting['scope.userInfo']) {

          wx.getUserInfo({

            success: function (res) {

              // 用户已经授权过,不需要显示授权页面,所以不需要改变 isHide 的值

              // 根据自己的需求有其他操作再补充

              // 我这里实现的是在用户授权成功后，调用微信的 wx.login 接口，从而获取code

              wx.login({

                success: res => {

                  // 获取到用户的 code 之后：res.code

                  console.log("用户的code:" + res.code);

                  // 可以传给后台，再经过解析获取用户的 openid

                  // 或者可以直接使用微信的提供的接口直接获取 openid ，方法如下：

                  // wx.request({

                  //     // 自行补上自己的 APPID 和 SECRET

                  //     url: 'https://api.weixin.qq.com/sns/jscode2session?appid=自己的APPID&secret=自己的SECRET&js_code=' + res.code + '&grant_type=authorization_code',

                  //     success: res => {

                  //         // 获取到用户的 openid

                  //         console.log("用户的openid:" + res.data.openid);

                  //     }

                  // });

                }

              });

            }

          });

        } else {

          // 用户没有授权

          // 改变 isHide 的值，显示授权页面

          that.setData({

            isHide: true

          });

        }

      }

    });
    this.getrrecommendationList();
    this.getquestionAndanswerList();
    this.getconcernList();
  },
  /**
   * 获取推荐列表
   */
  getrrecommendationList() {
    var that = this;
    wx.request({
      url: 'http://minizians.cn:8080/selectShareByLike',
      //data:{},
      //请求后台数据成功
      success(res) {
        var jsonObject = new Array();
        //  console.log("5555",res.data)
        jsonObject = res.data;
        console.log(jsonObject[0])
        // console.log("首页3" + JSON.stringify(jsonObject[0]))
        that.setData({
          recommendationList: jsonObject,
        });
      },
      fail(res) {
        console.log('返回数据失败')
      }
    })

  },

  bindGetUserInfo: function (e) {

    if (e.detail.userInfo) {

      //用户按了允许授权按钮

      var that = this;

      // 获取到用户的信息了，打印到控制台上看下
      console.log("用户的信息如下：");
      console.log(e.detail.userInfo);
      //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
      that.setData({
        isHide: false,
        userInfo: e.detail.userInfo
      });
      app.globalData.nick_Name = e.detail.userInfo.nickName;
      app.globalData.avatar_Url = e.detail.userInfo.avatarUrl;
      console.log(app.globalData.nick_Name);
      console.log(app.globalData.avatar_Url);

    } else {

      //用户按了拒绝按钮

      wx.showModal({

        title: '警告',

        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!',

        showCancel: false,

        confirmText: '返回授权',

        success: function (res) {

          // 用户没有授权成功，不需要改变 isHide 的值

          if (res.confirm) {

            console.log('用户点击了“返回授权”');

          }
        }
      });
    }
  },


  /** 
  *搜索
  */
  suo: function (e) {

    wx.navigateTo({

      url: '../search/search',

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
    // 生命周期函数--监听页面显示
    var that = this
    //  获取全局参数，在上一个页面赋值的

    var page_value = app.globalData.page_value;
    console.log(app.globalData.page_value);
    var search = app.globalData.search;
    //判断是否带参数，带的话执行里边逻辑
    if (search != null || search != '' || search != undefined) {
      //设置到页面data中，其他地方就可以使用了
      if (app.globalData.page_value == "ispopular_rcd") {
        that.setData({
          searchContent: search,
          recommend: false,
          concern: false,
          quetion: false
        });
        console.log("recommend:" + that.data.recommend)
        console.log("concern:" + that.data.concern)
        console.log("quetion:" + that.data.quetion)
      }
      else if (app.globalData.page_value == "isMy_cn") {
        that.setData({
          searchContent: search,
          recommend: true,
          concern: true,
          quetion: false
        });
        console.log("recommend:" + that.data.recommend)
        console.log("concern:" + that.data.concern)
        console.log("quetion:" + that.data.quetion)
      }
      else if (app.globalData.page_value == "isQA_plaza") {
        that.setData({
          searchContent: search,
          recommend: true,
          concern: false,
          quetion: true
        });
        console.log("recommend:" + that.data.recommend)
        console.log("concern:" + that.data.concern)
        console.log("quetion:" + that.data.quetion)
      }
    }
    //  记得，一定要还原全局数据
    app.globalData.page_value = null;
    app.globalData.search = '';
    console.log(app.globalData.page_value);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

})