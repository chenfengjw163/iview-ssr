<template>
    <div id="app">
        hello world
        <router-link to="/list">list</router-link>
        <router-link to="/edit">edit</router-link>
        <router-link to="/detail">detail</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
    created () {
        console.log('created ')
    }
}
</script>