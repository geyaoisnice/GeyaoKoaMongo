const Router = require("koa-router")
const router = new Router()
router.post("/",(ctx,next)=>{
    console.log(ctx.request.body)
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
    console.log(ctx.query,ctx.querystring)
    ctx.body=["11111","22222"]
})

router.post("/login",(ctx,next)=>{
    console.log(ctx.request.body)

    const {username,password}=(ctx.request.body)
    if(username=="geyao"&&password=="123456"){
        ctx.session.user={
            username:"geyao"
        }
       
        ctx.body={
            ok:"1",
        }
    }else{
        ctx.body={
            ok:"0",
        }
    }
})
module.exports=router