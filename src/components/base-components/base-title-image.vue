<!--
 * @Description:
 * @LastEditTime: 2022-01-13 11:20:39
-->
<template>
    <div class="title-box">
        <div class="base-title">
            <slot v-if="type === 'image'">
                <img :src="imgUrl" alt="" srcset="" />
            </slot>
            <slot name="line" v-else>
                <div class="line-colum"></div>
            </slot>
            <div class="title">
                {{ title }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
/**
 * @description:左侧图片、svg、圆弧，右侧标题
 * @api: 默认圆弧渐变，如果需要引入image,则type为image.
 */
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({
    name: 'titleImage'
})
export default class extends Vue {
    @Prop({ default: '单位分布' }) private title!: string;
    @Prop({ default: '' }) private type!: string;
    @Prop({
        default: () => {
            return require('@img/title.png')
        }
    })
    private imgUrl!: Object;
}
</script>

<style lang="scss" scoped>
.base-title {
    display: flex;
    align-items: center;
    vertical-align: middle;
}
img {
    vertical-align: middle;
    display: inline-block;
    align-items: center;
    margin: 0 auto;
    padding-right: 5px;
}
.line-colum {
    width: 7px;
    height:20px;
    border-radius: $bs;
    background:linear-gradient(lighten($light-blue,10%),$light-blue);
}
.title {
    margin-left: 8px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    font-family: SourceHanSansCN-Bold;
    font-size: 18px;
    color: #61748d;
    letter-spacing: 0.22px;
    font-weight: 700;
}
.title-box {
    margin: 20px;
    display: flex;
    align-items: center;
    text-align: center;
}
</style>
