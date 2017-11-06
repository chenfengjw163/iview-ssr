<template>
    <div class="tabbar-view">
        <keep-alive>
            <!-- <component :is="navName" v-show="vux.rootPage"></component> -->
        </keep-alive>
        <div class="page-content">
            <transition name="vux-pop-in">
                <router-view class="router-view"></router-view>
            </transition>
        </div>
        <tabbar v-model="navIndex" icon-class="tabbar-icon">
            <tabbar-item :selected="bar.selected" v-for="(bar, index) in barOptions" :key="index">
                <i class="iconfont" :class="bar.icon" slot="icon"></i>
                <span slot="label">{{bar.label}}</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import {Tabbar, TabbarItem} from 'vux'
export default {
    name: 'TabbarView',
    data () {
        return {
            navIndex: 0
        }
    },
    props: {
        barOptions: {
            type: Array,
            default () {
                return []
            }
        }
    },
    created () {
    },
    computed: {
        ...mapState(['vux'])
    },
    components: {Tabbar, TabbarItem}
}
</script>

<style>

</style>
