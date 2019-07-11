<template>
    <div class='photo'>
        <img v-bind:src='imgUrl' class='image' v-bind:alt="name">
        <div class='info'>
            <span class='top_info'>{{ name }}</span>
            <div class='bottom_info'>
                <time>{{ time }}</time>
                <button>
                    <a v-bind:href='imgUrl' v-bind:download='imgName'>点击下载</a>
                </button>
            </div>
        </div>
    </div>
</template>

<style>
    .photo {
        margin: 20px;
        border-width: 1px;
        border-style: solid;
        border-color: #ebeef5;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        background-color: #fff;
        overflow: hidden;
    }

    .image {
        width: 100%;
        display: block;
    }

    .info {
        padding: 14px;
    }

    .top_info {
        color: #303133;
        font-size: 16px;
        font-weight: 400;
    }

    .bottom_info {
        margin-top: 13px;
        line-height: 12px;
    }

    .bottom_info > time {
        color: #999;
        font-size: 13px;
        font-weight: 400;
    }

    .bottom_info > button {
        padding: 0;
        margin: 0;
        float: right;
        border-color: transparent;
        background: transparent;
        font-size: 14px;
        font-weight: 500;
        text-align: center;
        line-height: 1;
        white-space: nowrap;
    }
</style>

<script>
    export default {
        props: {
            initName: {
                default: '活动掠影'
            },
            initTime: {
                default: undefined
            },
            initImgName: {
                default: undefined
            },
            initImgUrl: {
                default: 'logo/logo-with-name.png'
            }
        },
        data: function () {
            return {
                name: this.initName,
                imgUrl: '/img/' + this.initImgUrl
            }
        },
        computed: {
            time: function () {
                if (this.initTime) {
                    return this.initTime;
                } else {
                    const date = new Date();
                    let result = '';
                    result += date.getFullYear();
                    result += '年';
                    result += date.getMonth() + 1;
                    result += '月';
                    result += date.getDate();
                    result += '日';
                    return result;
                }
            },
            imgName: function () {
                if (this.initImgName) {
                    return this.initImgName + this.initImgUrl.substr(this.initImgUrl.lastIndexOf('.'));
                } else {
                    return this.initImgName;
                }
            }
        }
    };
</script>
