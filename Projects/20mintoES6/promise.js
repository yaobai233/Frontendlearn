// 本系列代码是对b站视频20分钟学会ES6之异步处理的代码练习
// 异步任务默认要等同步任务执行完毕后才开始执行
// 1. promise
const p1 =new Promise((resolve, reject) => {
    // resolve('任务1：成功获得的数据')
    reject('任务1失败信息')
})

// p1.then().then().then().then().catch()
p1.then(data => {
    console.log(data)
    // 此处return返回一个promise对象进入下一个then()执行另一个异步任务
    return new Promise((resolve, reject) => {
        // resolve('任务2：成功获得的数据')
        // reject('任务2失败信息')
    })
}, err => {
    console.log('任务1失败了。。。')
    //失败处理函数没有设置返回值的话，默认返回一个成功的promise对象，继续触发后续then()
    //为了让后续都失败，两种处理方式。方式一：手动返回一个新的失败promise；方式二：抛出异常
    throw new Error("任务1已失败，任务2也无法成功");
})
.then(data => { 
    console.log(data)
}, err => {
    console.log('任务2失败了。。。')
})
// 如果以上每一个then分支都添加失败处理函数，那.catch就失效了
.catch(err => {
    console.log(err)
})
console.log(p1)

//2. async异步 await等
//步骤1：准备一个返回promise对象的函数
function asyncTask() {
    return new Promise((resolve, reject) => {
        //假装有一些关键代码。。。。
        const isSuccess = true
        if (isSuccess) {
            resolve('任务b:..成功的处理结果')
        } else {
            reject('任务b:..失败的处理结果')
        }
    })
}

//步骤2：为使用await的函数添加async
async function main () {
    //添加async和await之后就能使得异步任务像同步任务一样被调用，即不存在先同步任务再异步任务的调用顺序
    console.log('任务a执行')
    const data = await asyncTask()
    console.log(data)
    console.log('任务c执行')

    //实际中这里可能会是各种各样的异步任务、同步任务混合
    // await asyncTask()
    // await asyncTask()
    // await asyncTask()
}
main()