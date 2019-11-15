<template>
    <div id="wrap">
        <div class="searchWrap">
            <div class="searchInner">
                <van-icon class="backButton" size="0.6rem" name="arrow-left" @click="back"/>
                <van-search class="searchInput" background="#fff" shape="round" placeholder="请输入搜索关键词" v-model="value" />
            </div>
        </div>
        <div class="userInfo">
            <div class="headPortrait"></div>
            <div class="infoWrap">
                <div class="infoTop">
                    <span class="userName">大呼大湖</span>
                    <div class="userAge"><van-icon name="contact" />26</div>
                </div>
                <div class="userId">ID: 259986</div>
            </div>
        </div>
        <div class="errorMsg">
            <van-icon size="1.6rem" name="failure" />
            <div class="addMarginTop">请检查输入内容或用户不存在</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            value: ''
        }
    },
    mounted() {
        this.$store.dispatch('changeHomeNavSign');
    },
    beforeDestroy(){
        this.$store.dispatch('updateHomeNavSign');
    },
    methods:{
        back(){
      this.$router.push({path:'/'})
        }
    }
}
</script>

<style scoped>
    #wrap {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
    }
    .searchWrap {
        border-bottom: 1px solid #e6e6e6;
    }
    .searchInner {/* 输入框 */
        margin: 0 auto;
        width: 345px;
        height: 44px;
        display: flex;
    }
    .backButton {/* 后退按钮 */
        margin-top: 10px;
    }
    .searchInput {/* 输入框撑满剩余宽度 */
        flex: 1;
    }
    .userInfo {/* 用户信息 */
        width: 345px;
        height: 48px;
        margin: 0 auto;
        border-bottom: 1px solid #e6e6e6;
        display: flex;
        padding: 15px 0;
        font-size: 12px;
    }
    .headPortrait {/* 用户头像 */
        width: 48px;
        height: 48px;
        border-radius: 50%;
        margin-right: 15px;
        background-color: red;
    }

    .infoTop {
        display: flex;
    }
    .userName {/* 用户名字 */
        font-size: 15px;
        color: #1a1a1a;
        margin-right: 8px;
    }
    .userAge {/* 用户年龄 */
        width: 30px;
        height: 13px;
        border-radius: 3px;
        background-color: #3979fd;
        color: #fff;
        padding: 2px;
        font-size: 9px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .userId {/* 用户的ID */
        font-size: 11px;
        color: #999;
        text-align: left;
        line-height: 26px;
    }


    .errorMsg {/* 错误提示信息 */
        margin: auto;
        font-size: 14px;
        color: #1a1a1a;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .addMarginTop {
        margin-top: 10px;
    }
</style>
