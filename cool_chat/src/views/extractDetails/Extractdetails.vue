<template>
    <div>
        <van-nav-bar
        title="提取明细"
        left-arrow
        @click-left="onClickLeft"
        />
        <ul>
            <li>
                <div>
                    <span class="extract">提取</span>
                    <span class="money">-100</span>
                </div>
                <div>
                    <span class="color999">2019/08/12&nbsp;12:06</span>
                    <span class="color999">进行中</span>
                </div>
            </li>
            <li>
                <div>
                    <span class="extract">提取</span>
                    <span class="money">-100</span>
                </div>
                <div>
                    <span class="color999">2019/08/12&nbsp;12:06</span>
                    <span class="color999">已到账</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Extractdetails',
    data(){
        return {

        }
    },
    methods: {
        onClickLeft() {
            console.log('返回');
        }
    },
    mounted() {
        this.$store.dispatch('changeHomeNavSign');
    },
    beforeDestroy(){
        this.$store.dispatch('updateHomeNavSign');
    }
}
</script>

<style scoped>
    ul li {
        height: 68px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        font-size: 15px;
        margin: 0 auto;
        border-bottom: 1px solid #e6e6e6;
        padding: 0 14px;
    }
    li div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .extract {
        color: #1a1a1a;
        font-weight: 600;
    }
    .money {
        color: #ff3e5d;
        font-weight: 600;
    }
    .color999 {
        color: #999;
    }
</style>
