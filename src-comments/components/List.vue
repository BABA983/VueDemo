<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="comments.length===0">暂无评论，点击左侧添加评论吧！</h2>
    <ul class="list-group">
      <Item v-for="(comment, index) in comments" :key="index" :comment="comment"
        :deleteComment="deleteComments" :index="index"/>
    </ul>
  </div>
</template>

<script>
  import Item from './Item.vue'
    export default {
      //声明接受属性: 这个属性就会成为组件对象的属性  接受父组件传过来的数据
      props: ['comments','deleteComments'], //这种【】只指定属性名
      components: {
        Item
      },
      methods: {
        delete () {

        }
      }
    }
</script>

<style>
  .reply {
    margin-top: 0px;
  }
  li {
    transition: .5s;
    overflow: hidden;
  }
  .handle a {
    display: block;
    text-decoration: none;
  }
</style>
