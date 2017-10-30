<template>
    <div>
        <ul class="new-list">
            <li v-for="news in newsData" :key="news.id">
                <span class="title">{{news.title}}</span>
                <span class="time">{{news.time}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'list',
    data () {
        return {
            demo: 1,
            newsData: [
                {
                    id: 1,
                    title: '新闻13',
                    time: '2017-01-01'
                },
                {
                    id: 2,
                    title: '新闻1',
                    time: '2017-01-01'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
.new-list {
    width: 500px;
    list-style: none;

    li {
        line-height: 30px;
        font-size: 14px;

        .title {
            color: black;
        }
        
        .time {
            color: gray;
        }
    }
}
</style>
