# CNode-React
CNode React Server Render
#概述#
CNode社区React服务器端渲染
#Run#
 1. clone代码到本地
 2. cd ${project directory}
 3. npm install
 4. grunt 
 5. node app
 6. http://localhost:4000
 
#功能#
暂时只有三个查看页面，由于首页获取不到分页信息，采用的是滚动加载，这个对SPA来说比较坑，每次回退都得滚半天，F
#SEO#
后端渲染主要不就是为了SEO么么哒，注意页面切换推广代码的变化
#重要的框架或类库#
 - 后端渲染引擎 [react-engine](https://github.com/paypal/react-engine)
 - 路由管理 [react-router](https://github.com/rackt/react-router)
