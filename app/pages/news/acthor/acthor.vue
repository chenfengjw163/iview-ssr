<template>
    <layout title="作者介绍">
        <div class="acthor-info">
            hi 我是作者xxx
        </div>
    </layout>
</template>

<script>
export default {
    name: 'Acthor',
    data () {
        return {
            name2: 1
        }
    },
    page () {
        return '作者介绍'
    }
}
</script>

<style lang="scss">
.acthor-info {
    padding: 10px;
}
</style>
