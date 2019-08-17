<template>
    <div>
      <ul>
        <li v-for="(message, index) in messages" :key="message.id">
          <!--<router-link :to="`/home/message/detail/${message.id}`">{{message.title}}</router-link>--> <!--ES6 `` --- ES5 ''-->
          <router-link :to="'/home/message/detail/'+message.id">{{message.title}}</router-link> <!--ES6 `` --- ES5 ''-->
          <button @click="push(message.id)">Push查看</button>
          <button @click="replace(message.id)">Replace查看</button>
        </li>
      </ul>
      <button @click="$router.back()">回退</button>
      <router-view :messages="messages"></router-view> <!-- 加:为对象 不加则为字符串 -->
    </div>
</template>

<script>
    export default {

      data () {
        return {
          messages: []
        }
      },
      mounted () {
        setTimeout(() => {
          const messages = [
            {
              id: 1,
              title: 'message01'
            },
            {
              id: 3,
              title: 'message03'
            },
            {
              id: 5,
              title: 'message05'
            }
          ]
          this.messages = messages
        },1000)
      },
      methods: {
        push (id) {
          this.$router.push(`/home/message/detail/${id}`)
        },
        replace (id) {
          this.$router.replace(`/home/message/detail/${id}`)
        }
      }
    }
</script>

<style>

</style>
