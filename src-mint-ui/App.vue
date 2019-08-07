<template>
  <mt-button @click.native="handleClick" style="width:100%">点击触发 handleClick</mt-button>
</template>

<script>
  import { Toast } from 'mint-ui'
    export default {
      methods: {
        handleClick () {
          Toast('提示信息');
        }
      }
    }

</script>

<style>

</style>
