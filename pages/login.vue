<template>
  <div>
    <h1>Se connecter</h1>
    <hr>

   

    <div class="">
      <div class="">
        <form action=""
          method="post"
          @submit.prevent="submitForm()">

          <div class="">
            <label for="">Email</label>
            <input type="text" class=""
              :class="{ 'is-invalid': errors && errors.email }"
              v-model="email">
            
          </div>

          <div class="">
            <label for="">Password</label>
            <input type="password" class=""
              :class="{ 'is-invalid': errors && errors.password }"
              v-model="password">
            
          </div>

         

          <input type="submit" value="Login" class="">
          <nuxt-link to="/" class="">Cancel</nuxt-link>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  auth: 'guest',
  data(){
    return{
      errors:null,
      login_error:null,
      email:null,
      password:null,
      status:false,
    }
  },
  methods:{
    submitForm(){
      this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        })
        .then(() => console.log('Logged In!'))
        .catch( (error) => {
          console.log(error)
          if(error.response.data.message){
            this.login_error = error.response.data.message
          }
        })
    }
  }
}
</script>