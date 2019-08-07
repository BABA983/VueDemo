<template>
    <div class="container">
      <Search/>
      <Users/>
    </div>
</template>

<script>
  import axios from 'axios'
  import Main from './components/Main.vue'
  import Search from './components/Search.vue'
    export default {
      components: {
        Users: Main,
        Search
      },
      data () {
        return {
          repoName: '',
          repoUrl: ''
        }
      },
      mounted () {
        //发ajax请求获取数据
        const url = 'http://api.github.com/search/repositories?q=v&sort=stars'
        /*this.$http.get(url).then(
          response => {
            //success
            const result = response.data
            //最受欢迎repo
            const mostRepo = result.items[0]
            this.repoUrl = mostRepo.html_url
            this.repoName = mostRepo.name
          },
          response => {
            alert('请求失败')
          }
        )*/
        //使用axios发送ajax请求
        axios.get(url).then(response => {
          //success
          const result = response.data
          //最受欢迎repo
          const mostRepo = result.items[0]
          this.repoUrl = mostRepo.html_url
          this.repoName = mostRepo.name
        }).catch(error => {
          alert('请求失败')
        })
      }
    }
</script>

<style>
  .card {
    float:left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }
  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }
  .card-text {
    font-size: 85%;
  }
</style>
