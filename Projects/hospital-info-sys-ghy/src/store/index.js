import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab';

Vue.use(Vuex) //全局注入

//创建vuex实例，即store
export default new Vuex.Store({
    modules:{
        tab
    }
})
