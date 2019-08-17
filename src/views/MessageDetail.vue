<template>
  <div>
    <p>{{$route.params.id}}</p>
    <ul v-for="(message, index) in messages" :key="message.id">
      <template v-if="message.id == $route.params.id">
        <li>id:{{message.id}}</li>
        <li>title:{{message.title}}</li>
        <li>content:xx</li>
      </template>
    </ul>
  </div>

</template>

<script>
    export default {
      props: {
        messages:{
          type: Array
        }
      }
    }
</script>

<style>

</style>
