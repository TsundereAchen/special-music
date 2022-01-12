<template>
    <div>榜单页面</div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    created() {
        this.getRankList()
    },
    methods: {
        async getRankList() {
            const {data:res} = await this.$axios.get('/rank/list&json=true')
            console.log(res)
        }
    }
}
</script>