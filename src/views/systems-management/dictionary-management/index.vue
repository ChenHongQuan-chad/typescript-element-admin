<!--
 * @Description:
 * @LastEditTime: 2022-01-13 14:16:55
-->
<template>
	<div class="dashboard-container">
        <base-title-image></base-title-image>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import baseTitleImage from '@/components/base-components/base-title-image.vue'

@Component({
	name: 'projectsManager',
    components: {
        baseTitleImage
    }
})
export default class extends Vue {

}
</script>
