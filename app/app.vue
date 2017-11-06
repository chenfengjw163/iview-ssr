<template>
    <div id="app" style="height: 100%">
        <view-box>
            <x-header
                transition="vux-header-fade-in-right"
                :left-options="{showBack: vux.header.showBack}"
                :title="vux.header.title"></x-header>
            <transition name="vux-pop-in">
                {{vux.header.showBack}}
                <router-view class="router-view"></router-view>
            </transition>
            <tabbar icon-class="tabbar-icon" v-if="vux.header.showTabbar">
                <tabbar-item :selected="true" link="/news/news">
                    <x-icon type="ios-home-outline" size="30" slot="icon"></x-icon>
                    <span slot="label">新闻</span>
                </tabbar-item>
                <tabbar-item link="/home/about">
                    <x-icon type="ios-chatbubble-outline" size="30" slot="icon"></x-icon>
                    <span slot="label">介绍</span>
                </tabbar-item>
                <tabbar-item link="/home/my">
                    <x-icon type="ios-person-outline" size="30" slot="icon"></x-icon>
                    <span slot="label">我的</span>
                </tabbar-item>
            </tabbar>
        </view-box>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import {Tabbar, TabbarItem, ViewBox, XHeader} from 'vux'

export default {
    name: 'app',
    data () {
        return {
        }
    },
    computed: {
        ...mapState(['vux'])
    },
    components: {ViewBox, Tabbar, TabbarItem, XHeader}
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
}
.weui-bar__item_on {
    .tabbar-icon {
        fill: #09bb07;
    }
}
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.router-view {
  width: 100%;
}
</style>