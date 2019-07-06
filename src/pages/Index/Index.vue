<template>
    <div class="page">
        <header>
            <span class="title">Ge阅读</span>
        </header>
        <div class="content">
        </div>
        <footer class="footer">
            <van-tabbar 
                v-model="active"
                active-color="#A60A0B"
                inactive-color="#A3A3A3">
                <van-tabbar-item>
                    <span>书架</span>
                    <img
                        slot="icon"
                        slot-scope="props"
                        :src="props.active ? icon1.active : icon1.normal"
                    >
                </van-tabbar-item>
            </van-tabbar>
            <div class="van-tabbar-item__ico"></div>
        </footer>
    </div>
</template>

<script>
import tabIcon1Active from '@/assets/img/tab_book_active.png'
import tabIcon1Normal from '@/assets/img/tab_book.png'
export default {
    data () {
        return {
            active: 0,
            icon1: {
                active: tabIcon1Active,
                normal: tabIcon1Normal
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/var.scss';
    .page {
        display: flex;
        flex-direction: column;
    }
    header {
        height: 50px;
        display: flex;
        padding: 0 20px;
        align-items: center;
        background: $color-main;
        .title {
            color: #FFFFFF;
            font-size: 20px;
        }
    }
    .content {
        flex: auto;
    }
    footer {
        height: 50px;
    }
</style>





