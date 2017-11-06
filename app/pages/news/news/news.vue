<template>
    <layout>
        <group>
            <cell
                :title="newInfo.title"
                v-for="newInfo in news"
                :key="newInfo.id"
                :link="`/news/news/${newInfo.id}`"
                is-link></cell>
        </group>
    </layout>
</template>

<script>
import { Cell, Group, XHeader } from 'vux'
export default {
    name: 'News',
    page () {
        return {
            header: {
                title: '新闻',
                showBack: false,
                showTabbar: true
            }
        }
    },
    data () {
        return {
            news: [{
                id: 1,
                title: '我是一条新闻1',
                intro: '我是一条新闻介绍啦啦啦啦啦'
            }, {
                id: 2,
                title: '我是一条新闻2',
                intro: '我是一条新闻介绍啦啦啦啦啦'
            }, {
                id: 3,
                title: '我是一条新闻3',
                intro: '我是一条新闻介绍啦啦啦啦啦'
            }]
        }
    },
    components: {Cell, Group, XHeader}
}
</script>

<style>

</style>
