// proxy 代理对象
const obj = {
    name: 'yaobai',
    age: 18
}
let container = document.getElementById('container')
container.textContent = obj.name
//实际中可能会频繁更改,那么就会导致很多冗余代码，因此引入proxy
// obj.name = 123
// container.textContent = obj.name
// obj.name = 'sdfs'
// container.textContent = obj.name
// obj.name = 'affaeeeeeee'
// container.textContent = obj.name

//将p1和obj绑定
const p1 = new Proxy(obj, {
    get (target, property, receiver) {
        return obj[property]
    },
    set (target, property, value) {
        obj[property] = value
        container.textContent = obj.name
    }
})
console.log(p1.name)
p1.name = 'mars8888'