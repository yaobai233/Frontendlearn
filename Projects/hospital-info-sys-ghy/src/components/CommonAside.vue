<template>
    <el-menu 
    default-active="1-4-1" 
    class="el-menu-vertical-demo" 
    @open="handleOpen" 
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
        <h3> {{ isCollapse ? 'HIS':'医院信息管理系统' }}</h3>
        <!-- :是v-bind的缩写 -->
        <!-- key用来确保当前选项的唯一性 -->
        <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.name" v-bind:index="item.name"> 
            <i :class="`el-icon-${item.icon}`"></i>
            <span slot="title">{{item.label}}</span>
        </el-menu-item>
        <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">
            <template slot="title">
                <i :class="`el-icon-${item.icon}`"></i>
                <span slot="title">{{item.label}}</span>
            </template>
            <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
                <el-menu-item  @click="clickMenu(subItem)"  :index="subItem.path">{{subItem.label}}</el-menu-item>
            </el-menu-item-group>
            <!-- <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu> -->
        </el-submenu>
    </el-menu>
</template>

  
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;

}
.el-menu-vertical-demo{
    height:100vh;
    overflow: hidden;
    border:0;
    h3 {
        color: #fff;
        text-align: center;
        line-height: 48px;
    }
}
</style>
  
<script>
import { computed } from 'vue';
import Cookie from "js-cookie";

export default {
    data() {
        return {};
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        //点击菜单
        clickMenu(item){
            console.log(item);
            //当前页面路由和跳转路由不一致才跳转
            if(this.$route.path !== item.path && !(this.$route.path === '/home' && (item.path === '/' ))){
                this.$router.push(item.path)
            }
            this.$store.commit('selectMenu',item)
        }
    },
    computed:{
        //没有子菜单
        noChildren() {
            return this.menuData.filter(item => !item.children)
        },
        //有子菜单
        hasChildren() {
            return this.menuData.filter(item => item.children)
        },
        isCollapse(){
            return this.$store.state.tab.isCollapse
        },
        menuData() {
            //判断当前数据，如果缓存中没有，从当前store中获取
            return JSON.parse(Cookie.get('menu')) || this.$store.state.tab.menu
        }
    }
}
</script>