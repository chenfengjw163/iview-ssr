<template>
    <layout>
        <div class="about-content">
            关于我们
            <x-button type="primary" link="/news/news/1">介绍</x-button>
        </div>
    </layout>
</template>

<script>
import { XButton, XHeader } from 'vux'
export default {
    name: 'About',
    components: {XButton, XHeader},
    page () {
        return {
            header: {
                title: '关于我们',
                showBack: false,
                showTabbar: true
            }
        }
    }
}
</script>

<style lang="scss">
.about-content {
    padding: 10px;
}
</style>
