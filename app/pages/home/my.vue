<template>
    <layout>
        <div class="my-content">
            我的
        </div>
        {{demo.list}}
    </layout>
</template>

<script>
import {mapState} from 'vuex'
import {
    FETCH_DEMO_LIST_REQUEST
} from 'store/demo/types'
import { XHeader } from 'vux'
export default {
    name: 'My',
    components: {XHeader},
    page () {
        return {
            header: {
                title: '我的',
                showBack: false,
                showTabbar: true
            }
        }
    },
    computed: {
        ...mapState(['demo'])
    },
    async created () {
        const result = await this.$store.dispatch(FETCH_DEMO_LIST_REQUEST)
        if (result) {
            console.log('success')
        }
    }
}
</script>

<style lang="scss">
.my-content {
    padding: 10px;
}
</style>
