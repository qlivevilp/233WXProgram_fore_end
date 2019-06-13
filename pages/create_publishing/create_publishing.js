// pages/create_publishing/create_publishing.js
import {
  $init,
  $digest
} from '../../utils/common.util'

Page({

  data: {
    px: [],
    isupload:false,
    pxopen: false,

    pxshow: false,

    active: true,

    imgUrl: "../../icons/down.png",
    //输入框
    height: 20,
    focus: false,

    //图片上传
    images: [],
    createArry: {
      q_title: {},
      q_tag: {},
      q_context: {},
      q_pic: {},
      u_id: {},
    },
    input_value: null
  },

  writeback() {
    
   },

  input_title(e) {
    this.data.createArry.q_title = e.detail.value;
    console.log("标题：", e.detail.value)
  },
  input_type(e) {
    this.data.createArry.q_tag = e.detail.value;
    console.log("类型：", e.detail.value)
  },
  input_content(e) {
    this.data.createArry.q_context = e.detail.value;
    console.log("摘要：", e.detail.value)
  },
  but_submit() {
    var that = this;
    that.setData({
      input_value: '',
      isupload: false
    });
    console.log("1：", this.data.createArry.q_title);
    console.log("2：", this.data.createArry.q_tag);
    console.log("3：", this.data.createArry.q_context)
    console.log("4：", ((this.data.createArry.q_title != '') & (this.data.createArry.q_tag != '')))
    if (((this.data.createArry.q_title != null) & this.data.createArry.q_tag != null) & this.data.createArry.q_context != null) {
      wx.showToast({
        title: '发表成功',
        icon: 'success'

      })
    } else {
      wx.showToast({
        title: '发表失败，注意信息不能为空！',
      })
    }
  },
  onLoad: function () {

    this.setData({

      px: ['推文', '提问']

    })

  },
    gotoShow: function(){
      var _this = this
        wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        // success
        console.log(res)
        _this.setData({
          src: res.tempFilePaths,
          isupload:true
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  }
  
})