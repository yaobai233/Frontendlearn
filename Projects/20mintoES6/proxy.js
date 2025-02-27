// proxy �������
const obj = {
    name: 'yaobai',
    age: 18
}
let container = document.getElementById('container')
container.textContent = obj.name
//ʵ���п��ܻ�Ƶ������,��ô�ͻᵼ�ºܶ�������룬�������proxy
// obj.name = 123
// container.textContent = obj.name
// obj.name = 'sdfs'
// container.textContent = obj.name
// obj.name = 'affaeeeeeee'
// container.textContent = obj.name

//��p1��obj��
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