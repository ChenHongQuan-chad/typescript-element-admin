<!--
 * @Description:
 * @LastEditTime: 2022-01-06 15:06:34
-->
<template>
    <div class="login-container">
        <div style="color: white;font-size: 28px;text-align: center">欢迎来到星辰大海的注册页面</div>
        <el-input v-model="registerForm.accountNo" prefix-icon="el-icon-user" placeholder="请输入账户" style="margin-top: 20px">
        </el-input>
        <el-input v-model="registerForm.accountName" prefix-icon="el-icon-user" placeholder="请输入名称" style="margin-top: 20px">
        </el-input>
        <el-input v-model="registerForm.password" type="password" prefix-icon="el-icon-lock" placeholder="请输入密码" style="margin-top: 20px">
        </el-input>
        <el-input v-model="registerForm.qrpassword" type="password" prefix-icon="el-icon-lock" placeholder="请输入确认密码" style="margin-top: 20px">
        </el-input>
        <el-input v-model="registerForm.email" prefix-icon="el-icon-message" placeholder="请输入邮箱" style="width: 70%;float: left;margin-top: 20px"></el-input>
        <el-button type="primary" style="margin-left: 5px;height: 36px;margin-top: 20px" @click="sendInfo">发送验证码</el-button>
        <el-input v-model="registerForm.verification" prefix-icon="el-icon-view" placeholder="请输入验证码" style="margin-top: 20px">
        </el-input>
        <el-button type="primary" style="margin-top: 20px;width: 100%;height: 36px;" @click="register">注册</el-button>
        <el-button type="text" style="float: right" @click="goLogin">去登录</el-button>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component({
	name: 'Register'
})

export default class extends Vue {
	private registerForm = {
		accountNo: '',
		accountName: '',
		password: '',
		qrpassword: '',
		email: '',
		verification: ''
	}

	private sendInfo() {

	}

	// 登录
	private register() {

	}

	private goLogin() {
		this.$emit('goLogin')
	}
}
</script>

<style scoped lang="scss">
.login-container {
	width: 400px;
}

</style>
