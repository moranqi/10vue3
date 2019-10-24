<template>
    <div class="loginSuccess">
        <h2>问卷调查问卷调查表填写</h2>
        <p>恭喜你完成调查</p>
        <p>您的性别是::{{this.$route.params.sex}}</p>
        <p>您的爱好是:{{this.$route.params.hobby}}</p>
        <p>个人简介:{{this.$route.params.zwjs}}</p>
    </div>
</template>

<script>
    export default {
        name: "success"
    }
</script>

<style scoped>
</style>