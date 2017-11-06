<template>
    <layout>
        <div class="new-content">
            <h3>
                我是标题
            </h3>
            <x-button mini type="primary" link="/news/acthor">查看作者</x-button>
            <p class="content">
                我是内容！！！！！！！！！！！！！！！
                我是内容！！！！！！！！！！！！！！！
                我是内容！！！！！！！！！！！！！！！
                我是内容！！！！！！！！！！！！！！！
            </p>
        </div>
    </layout>
</template>

<script>
import {XButton} from 'vux'
export default {
    name: 'NewsDetail',
    page () {
        return '新闻详情'
    },
    components: {XButton}
}
</script>

<style lang="scss">
.new-content {
    padding: 10px;
    
    h3 {
        line-height: 50px;
    }
}
</style>
