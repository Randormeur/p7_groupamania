<template>
    <div>
        <h1> Créer un nouveau post</h1>
        <div >
        <form action=""
          method="post"
          @submit.prevent="submitForm()">

          <div >
            <label for="">Titre</label>
            <input type="text" v-model="title">
          </div>

          <div >
            <label for="">Contenu du post</label>
            <input type="text" v-model="content">
          </div>

          <div >
            <label for="">Image/gif</label>
            <input type="text" v-model="image">
            
          </div>
          <div >
            <label for="">Description de l'image</label>
            <input type="text" v-model="image_desc">
          </div>

          <input type="submit" value="Register">
          <nuxt-link to="/" >Cancel</nuxt-link>

        </form>
      </div>
        
    </div>
        
</template>

<script>

import newDate from '~/utils/newDate'
export default {
 middleware: 'auth',
  data(){
    return{
      errors:null,
      title:null,
      content:null,
      image:null,
      image_desc:null,
      userid:null,
    }
  },
  methods:{
    submitForm(){
      
      this.$axios.post( 'http://localhost:3000/api/posts', {
          title: this.title,
          content: this.content,
          image: this.image,
          image_desc: this.image_desc,
          userid: 1
        })
        .then((response) => {
          console.log(response)
          if(response.data._id){
            this.$router.push({ name:'posts', params:{ created:'yes' } })
          }
        })
        .catch( (error) => {
          console.log(error)
          if(error.response.data.errors){
            this.errors = error.response.data.errors
          }
        });
    }
  }
}
</script>