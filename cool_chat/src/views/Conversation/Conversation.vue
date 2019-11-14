<template>
    <div>
        <van-nav-bar
        title="通话"
        left-arrow
        @click-left="onClickLeft"
        />
        <van-tabs @click="onClick" line-width="0.6rem" color="#fe5671">
            <van-tab title="通话记录">
                <ul>
                    <li class="callLog">
                        <div class="headPortrait"></div>
                        <div class="detailsWrap">
                            <div class="detailsPerson">
                                <div class="details">
                                    <span class="userName">大呼大湖</span>
                                    <div class="userAge"><van-icon name="contact" />26</div>
                                </div>
                                <span class="callStateErr">未接</span>
                            </div>
                            <div class="detailsPerson">
                                <div class="">2019/08/12来电</div>
                                <div>通话30分20秒</div>
                            </div>
                        </div>
                    </li>
                    <li class="callLog">
                        <div class="headPortrait"></div>
                        <div class="detailsWrap">
                            <div class="detailsPerson">
                                <div class="details">
                                    <span class="userName">大呼大湖</span>
                                    <div class="userAge"><van-icon name="contact" />26</div>
                                </div>
                                <span class="callStateOk">已接</span>
                            </div>
                            <div class="detailsPerson">
                                <div class="">2019/08/12来电</div>
                                <div>通话30分20秒</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </van-tab>
            <van-tab title="退款">
                <ol>
                    <li class="refund callLog">
                        <div class="headPortrait"></div>
                        <div class="refundContain">
                            <div class="refundInner">
                                <div class="details">
                                    <span class="userName">大呼大湖</span>
                                    <div class="userAge"><van-icon name="contact" />26</div>
                                </div>
                                <div>12:26</div>
                            </div>
                            <div>的卡拉健身房拉萨大家拉萨的空间弗利萨的阿斯兰的空间发爱丽丝的接口了拉萨扩大解放</div>
                            <div class="buttonWrap">
                                <van-button round type="info" color="#15d0aa" class="addMarginRight">同意</van-button>
                                <van-button round type="info" color="#ff234c">不同意</van-button>
                            </div>
                        </div>
                    </li>
                    <li class="refund callLog">
                        <div class="headPortrait"></div>
                        <div class="refundContain">
                            <div class="refundInner">
                                <div class="details">
                                    <span class="userName">大呼大湖</span>
                                    <div class="userAge"><van-icon name="contact" />26</div>
                                </div>
                                <div>12:26</div>
                            </div>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                            <div class="buttonWrap">
                                <van-button disabled round type="primary" color="#d1d1d1" class="disabledButton">已选择同意，该笔收益将退款</van-button>
                            </div>
                        </div>
                    </li>
                    <li class="refund callLog">
                        <div class="headPortrait"></div>
                        <div class="refundContain">
                            <div class="refundInner">
                                <div class="details">
                                    <span class="userName">大呼大湖</span>
                                    <div class="userAge"><van-icon name="contact" />26</div>
                                </div>
                                <div>12:26</div>
                            </div>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                            <div class="buttonWrap">
                                <van-button disabled round type="primary" color="#d1d1d1" class="disabledButton">不同意退款，平台处理中</van-button>
                            </div>
                        </div>
                    </li>
                </ol>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {

        };
    },
    methods: {
        onClickLeft() {
            console.log('返回');
        },
         onClick(name, title) {
            console.log(title);
        }
    },
    mounted() {
        this.$store.dispatch('changeHomeNavSign');
    },
    beforeDestroy(){
        this.$store.dispatch('updateHomeNavSign');
    }
};
</script>

<style scoped>
    .van-icon-arrow-left {
        font-size: 20px;
        color: #1a1a1a;
    }

    
    .callLog {
        height: 78px;
        padding: 0 14px;
        margin: 0 auto;
        font-size: 15px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 1px solid #e6e6e6;
    }

    .detailsWrap {
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: space-evenly;
    }

    .detailsPerson {
        display: flex;
        justify-content: space-between;
    }

    .details {
        display: flex;
    }

    .headPortrait {/* 用户头像 */
        width: 48px;
        height: 48px;
        border-radius: 50%;
        margin-right: 15px;
        background-color: red;
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

    .userName {/* 用户名字 */
        font-size: 15px;
        color: #1a1a1a;
        margin-right: 8px;
    }

    .callStateErr {
        color: #ff7789;
    }
    .callStateOk {
        color: #71ddc3;
    }



    /* 退款 */
    .refund {
        height: 164px;
        align-items: flex-start;
        position: relative;
    }
    .refundContain {
        flex: 1;
    }
    .refundInner {
        display: flex;
        justify-content: space-between;
        height: 42px;
    }
    .van-button {
        width: 110px;
        height: 32px;
        line-height: 32px;
    }
    .buttonWrap {
        position: absolute;
        bottom: 15px;
    }
    .addMarginRight {
        margin-right: 15px;
    }
    .disabledButton {
        width: 211px;
        height: 32px;
        line-height: 32px;
        border-radius: 12px;
    }
    
</style>
