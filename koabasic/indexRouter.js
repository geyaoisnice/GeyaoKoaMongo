const Koa = require("koa")
const static = require("koa-static")
const bodyParser = require("koa-bodyparser")
const views = require("koa-views")
const path = require("path")
const session = require("koa-session-minimal")
const app = new Koa()
const router = require("./routes/index")
app.use(session({
    key: "geyao",
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}))
app.use(async (ctx, next) => {
    if (ctx.url.includes("login")) {
        await next()
        return
    }
    if (ctx.session.user) {
        await next()
    } else {
        ctx.redirect("/login")
    }
})
app.use(bodyParser())
app.use(static(path.join(__dirname, "public")))
app.use(views(path.join(__dirname, "views"), { extension: "ejs" }))
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)