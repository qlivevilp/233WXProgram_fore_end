// tabBarComponent/tabBar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbar: {
      type: Object,
      value: {
        "backgroundColor": "#ffffff",
        "color": "#979795",
        "selectedColor": "#1c1c1b",
        "list": [
          {
            "pagePath": "/pages/index/index",
            "iconPath": "icons/index.png",
            "selectedIconPath": "icons/index_active.png",
            "text": "主页"
          },
          {
            "pagePath": "/pages/middle/middle",
            "iconPath": "icons/add.png",
            "selectedIconPath": "icons/add_active.png",
            "isSpecial": true,
            "text": "发布"
          },
          {
            "pagePath": "/pages/mine/mine",
            "iconPath": "icons/personal.png",
            "selectedIconPath": "icon/personal_active.png",
            "text": "个人中心"
          }
        ]
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
   
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
