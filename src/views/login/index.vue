<template>
    <div class="login">
    <van-nav-bar title="会员登录" left-arrow left-text="返回" @click-left="$router.go(-1)" />

    <div class="container">
      <div class="title">
        <h3>手机号登录</h3>
        <p>未注册的手机号登录后将自动注册</p>
      </div>

      <div class="form">
        <div class="form-item">
          <input v-model="phoneNum" class="inp" maxlength="11" placeholder="请输入手机号码" type="text">
        </div>
        <div class="form-item">
          <input v-model="picCode" class="inp" maxlength="5" placeholder="请输入图形验证码" type="text">
          <img v-if="picUrl" :src="picUrl" @click="getPicCode" alt="">
        </div>
        <div class="form-item">
          <input v-model="msgCode" class="inp" placeholder="请输入短信验证码" type="text">
          <button @click="getCode">
            {{ second === totalSecond ? '获取验证码' : second + '秒后重新发送'}}
          </button>
        </div>
      </div>

      <div @click="loginBtn" class="login-btn">登录</div>
    </div>
  </div>
</template>

<script>
import { picCodeApi, msgCodeApi, loginApi } from '@/api/login.js'

export default {
  name: 'LoginIndex',
  data () {
    return {
      picUrl: '',
      picCode: '',
      picKey: '',
      totalSecond: 60,
      second: 60,
      timer: null,
      msgCode: '',
      phoneNum: ''
    }
  },
  created () {
    this.getPicCode()
  },
  mounted () {
    // this.$toast('提示文案')
  },

  methods: {
    async getPicCode () {
      const { data: { base64, key } } = await picCodeApi()
      this.picUrl = base64
      this.picKey = key
    },
    // 校验手机号和验证码
    validfy () {
      if (!/^1[3-9]\d{9}$/.test(this.phoneNum)) {
        return false
      }
      if (!/^\w{4}$/.test(this.picCode)) {
        return false
      }
      return true
    },
    async getCode () {
      if (!this.validfy()) { return this.$toast.fail('手机号或验证码校验失败') }
      if (this.timer || this.second !== this.totalSecond) return
      const res = await msgCodeApi(this.picCode, this.picKey, this.phoneNum)
      console.log(res)
      this.$toast('验证码已发送')
      this.timer = setInterval(() => {
        this.second--
        console.log('counting...')
        if (this.second <= 1) {
          this.second = this.totalSecond
          clearInterval(this.timer)
          this.timer = null
        }
      }, 1000)
    },
    async loginBtn () {
      const { message, data: { token, userId } } = await loginApi(this.phoneNum, this.msgCode)
      // console.log(res)
      this.$store.commit('user/setUserInfo', { token, userId })
      this.$toast(`用户${userId},${message}`)
      setTimeout(() => {
        const theUrl = this.$route.query.backUrl || '/'
        this.$router.replace(theUrl)
      }, 1000)
    }
  },
  destroyed () {
    clearInterval(this.timer)
    this.timer = null
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 49px 29px;

  .title {
    margin-bottom: 20px;
    h3 {
      font-size: 26px;
      font-weight: normal;
    }
    p {
      line-height: 40px;
      font-size: 14px;
      color: #b8b8b8;
    }
  }

  .form-item {
    border-bottom: 1px solid #f3f1f2;
    padding: 8px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    .inp {
      display: block;
      border: none;
      outline: none;
      height: 32px;
      font-size: 14px;
      flex: 1;
    }
    img {
      width: 94px;
      height: 31px;
    }
    button {
      height: 31px;
      border: none;
      font-size: 13px;
      color: #cea26a;
      background-color: transparent;
      padding-right: 9px;
    }
  }

  .login-btn {
    width: 100%;
    height: 42px;
    margin-top: 39px;
    background: linear-gradient(90deg,#ecb53c,#ff9211);
    color: #fff;
    border-radius: 39px;
    box-shadow: 0 10px 20px 0 rgba(0,0,0,.1);
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
