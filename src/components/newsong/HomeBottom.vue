<template>
    <div>
        <div class="desc">
            更多新歌，近在西格<button class="btnname">打开App</button>
        </div>
        <span v-if="isShowSpan">听歌识曲 | 曲库开放计划</span>
    </div>
</template>

<script>
export default {
    props: {
        isShowSpan: true
    }
}
</script>

<style lang="scss" scoped>
.desc {
    margin-top: 20px;
    margin-bottom: 30px;
}
.btnname {
    margin-left: 5px;
    width: 80px;
    height: 30px;
    background-color: deepskyblue;
    color: #fff;
    border: none;
    border-radius: 3px;
}
</style>