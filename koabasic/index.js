const Koa = require("koa")
const app = new Koa()
app.use(async (ctx, next) => {
    if (ctx.url === "/favicon.ico") return
    console.log("111111")
    await next()
    console.log("444444")
    ctx.body = "hello geyao"
})
app.use(async (ctx, next) => {
    console.log("222222")
    await delay(1000)
    console.log("333333")
})
function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time)
    })
}
app.listen(3000)

