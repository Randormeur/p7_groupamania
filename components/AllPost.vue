<template>
    <div>
        <h1> Liste des posts</h1>
        <div>
            <nuxt-link to="posts/newpost">Créer un nouveau post</nuxt-link>
        </div>
        <div class="app-post" v-for="post in posts">
            <div class="app-post-bord">
                <img src="/images/LogoS/icon-above-font.png" class="app-post-logo app-rounded"/>
            </div>
            <div class="app-post-container">
                <div class="app-post-head">
                    <div class="app-post-name">{{post.userid}} </div> 
                    <div class="app-post-date">{{newDate(post.createdAt)}}</div>
                </div>
                <div>{{post.title}}</div>
                <div>
                    {{post.content}}
                </div>
                <div>
                    <button>Comment</button>
                    <button>like</button>
                </div>
            </div>
        </div>
    </div>
        
</template>

<script>
import newDate from '~/utils/newDate'
export default {
  methods: {
      newDate,
  },
    props:{
    posts: {
      type: Array,
      default: []
    }
  }
}
</script>