<!--
 * @Description:
 * @Author: Chad
 * @LastEditTime: 2022-01-13 10:37:36
-->
<template>
   <!--PDF 预览-->
    <ls-dialog title="PDF 预览" v-model="viewVisible" size="full" @close='closeDialog'>
       <div style="margin-bottom: 15px; text-align: right">
            <ls-button type="primary" size="small" @click.stop="previousPage">
            上一页
            </ls-button>
            <ls-button type="primary" size="small" @click.stop="nextPage">
            下一页
            </ls-button>
            <span>当前第{{pdfPage}}页 / 共{{pageCount}}页</span>
        </div>
        <div >
            <pdf
            :src="src"
            :page="pdfPage"
            @num-pages="pageCount = $event"
            @page-loaded="pdfPage = $event"
            style="display: inline-block; width: 100%"
            ></pdf>
        </div>
     </ls-dialog>
</template>

<script>
 import pdf from 'vue-pdf'
 export default {
    components: {
      pdf
    },
    props: {
        srcInit: {
            type: [Object, String],
            default: () => {
                return ''
            }
        }
    },
    data() {
        return {
            // PDF预览
            viewVisible: false,
            src: null,
            pdfPage: 1,
            pageCount: 0
        }
    },
    created() {
    },
    methods: {
        // PDF预览
        previewPDFInit() {
             // 有时PDF文件地址会出现跨域的情况,这里最好处理一下
            // this.src = pdf.createLoadingTask(this.srcInit);
            this.src = this.srcInit
            this.$nextTick(() => {
                this.viewVisible = true
                console.log(this.viewVisible)
            })
        },
        // 关闭窗口初始化PDF页码
        closeDialog() {
            this.pdfPage = 1
        },
        // PDF改变页数
        previousPage() {
            let p = this.pdfPage
            p = p > 1 ? p - 1 : this.pageCount
            this.pdfPage = p
        },
        nextPage() {
            let p = this.pdfPage
            p = p < this.pageCount ? p + 1 : 1
            this.pdfPage = p
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
