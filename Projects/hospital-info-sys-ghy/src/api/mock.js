import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import user from './mockServeData/user'
import permission  from './mockServeData/permission'


//定义mock请求拦截
Mock.mock('/api/home/getData', homeApi.getStatisticalData)

//用户列表的数据
Mock.mock('/api/user/addUser', 'post', user.createUser)
Mock.mock('/api/user/editUser', 'post', user.updateUser)
Mock.mock('/api/user/delUser', 'post', user.deleteUser)
Mock.mock(/api\/user\/getUser/, user.getUserList)


Mock.mock(/api\/permission\/getMenu/, 'post', permission.getMenu)
