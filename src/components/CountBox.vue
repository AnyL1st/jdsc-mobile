<template>
    <div class="count-box">
      <button @click="handleSub" class="minus">-</button>
      <input :value="value" @change="handleChange" class="inp" type="text">
      <button @click="handleAdd" class="add">+</button>
    </div>
  </template>

<script>
export default {
  name: 'CountBox',
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  methods: {
    handleSub () {
      if (this.value <= 1) return this.$toast('数字不对')
      this.$emit('input', this.value - 1)
    },
    handleAdd () {
      this.$emit('input', this.value + 1)
    },
    handleChange (e) {
      const num = +e.target.value
      if (num < 1 || isNaN(num)) {
        e.target.value = this.value
        return this.$toast('数字不对')
      }
      this.$emit('input', e.taget.value)
    }
  }

}
</script>

  <style lang="less" scoped>
  .count-box {
    width: 110px;
    display: flex;
    .add, .minus {
      width: 30px;
      height: 30px;
      outline: none;
      border: none;
      background-color: #efefef;
    }
    .inp {
      width: 40px;
      height: 30px;
      outline: none;
      border: none;
      margin: 0 5px;
      background-color: #efefef;
      text-align: center;
    }
  }
  </style>
