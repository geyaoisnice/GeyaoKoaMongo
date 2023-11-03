const Router = require("koa-router")
const router = new Router()
router.post("/",(ctx,next)=>{
    ctx.body={
        ok:"1",
        info:"添加成功"
    }
})
router.put("/:id",(ctx,next)=>{
    ctx.body={
        ok:"1",
        info:"修改成功"
    }
})
router.del("/:id",(ctx,next)=>{
    ctx.body={
        ok:"1",
        info:"删除成功"
    }
})
router.get("/",(ctx,next)=>{
    ctx.body=["11111","22222"]
})
module.exports=router