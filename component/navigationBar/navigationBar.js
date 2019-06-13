 //component/navigationBar/navigationBar.js
 let app = getApp();
 Component({
   /**
    * 组件的属性列表
    */
   properties: {

   },

   /**
    * 组件的初始数据
    */
   data: {
     reco:null,
     con:null,
     ques:null,
     page_value:null
   },

   /**
    * 组件的方法列表
    */
   methods: {

     ispopular_rcd: function() {
       app.globalData.page_value = "ispopular_rcd";
       app.globalData.search = "value";
       wx.switchTab({
         url: '../../pages/index/index'
       }) ;
       wx.reLaunch({
         url: '../../pages/index/index'
       })
       //console.log(app.globalData.page_value)
     },

     isMy_cn: function() {
       app.globalData.page_value = "isMy_cn";
       app.globalData.search = "value";
      /* wx.switchTab({
         url: '../../pages/index/index'
       });*/
       wx.reLaunch({
         url: '../../pages/index/index'
       })
     },

     isQA_plaza: function() {
       app.globalData.page_value = "isQA_plaza";
       app.globalData.search = "value";
       /*wx.switchTab({
         url: '../../pages/index/index'
       }) */
       wx.reLaunch({
         url: '../../pages/index/index'
       })
     }
   },

 })