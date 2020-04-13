const createApp = require('./app.js')
module.exports = (context) => {
    return new Promise((reslove,reject) => {
        let {url} = context
        let {app, router} = createApp(context)
        router.push(url)
        router.onReady(() => {
            let matchedComponents = router.getMatchedComponents()
            if (!matchedComponents.length) {
                return reject({
                    code: 404
                })
            }
            reslove(app)
        },reject)
    })
}
