const Router = require("koa-router")
const userRouter=require("./user.js")
const listRouter=require("./list.js")
const homeRouter=require("./home.js")
const loginRouter=require("./login.js")
const router = new Router()
//统一添加
//  router.prefix("/api")
//先注册路由级组件
router.use("/user",userRouter.routes(),userRouter.allowedMethods())
router.use("/list",listRouter.routes(),listRouter.allowedMethods())
router.use("/home",homeRouter.routes(),homeRouter.allowedMethods())
router.use("/login",loginRouter.routes(),loginRouter.allowedMethods())
module.exports=router