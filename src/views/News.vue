<template>
    <div>
      <ul>
        <li v-for="(new1, index) in news" :key>{{new1.name}}: {{new1.content}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          news: [
            {
              name: 'name01',
              content: 'content01'
            },
            {
              name: 'name02',
              content: 'content02'
            },
            {
              name: 'name03',
              content: 'content03'
            }
          ]
        }
      }
    }
</script>

<style>

</style>
