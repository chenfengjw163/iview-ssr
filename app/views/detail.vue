<template>
    <div>
        detail
        <h3>{{topics.isFetching? '加载中。。。': '加载完成'}}</h3>
        <ul>
            <li v-for="topic in topics.data" :key="topic.name">{{topic.name}}</li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name: 'detail',
    computed: {
        ...mapState(['topics'])
    },
    mounted () {
        this.$store.dispatch('fetchList')
    }
}
</script>

<style>
  
</style>
