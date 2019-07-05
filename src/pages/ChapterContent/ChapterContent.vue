<template>
    <div class="content">
        <div>
        <h6>{{chapterName}}</h6>
        <h3>{{chapterName}}</h3>
        <div class="html" v-html="chapterContent">
        </div>
        </div>
    </div>
</template>

<script>
import NovelApi from '../../api/novel.js'
export default {
    data () {
        return {
            chapterName: '',
            chapterContent: ''
        }
    },
    methods: {
        async getMessage () {
            const data = {}
            const res = await  NovelApi.getNovelChapterContent(data)
            console.log(res)
            if (res.code === 200) {
                this.chapterName = res.data.name
                this.chapterContent =  res.data.content
            }
        }
    },
    created () {
        this.getMessage()
    }
}
</script>

<style lang="scss" scoped>
    @import  '../../assets/style/var.scss';
    .content {
        padding:  80px 20px 20px 40px;
        width: 100%;
        height: 100%;
        color: $color-chapter-content-font-day1;
        background: $color-chapter-content-background-day1;
        overflow: auto;
        h6 {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            padding: 0 20px;
            font-weight: normal;
            line-height: 3;
            color: $color-font-3;
            background: $color-chapter-content-background-day1;
        }
        h3 {
            text-align: center;
            font-size: 18px;
            line-height: 2.5;
        }
        .html {
            letter-spacing: 1px;
        }
    }
</style>

