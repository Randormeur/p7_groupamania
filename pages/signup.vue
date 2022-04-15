<template>
  <div>
    <h1>Créer un nouveau compte</h1>
    <hr>

    <div >
      <div >
        <form action=""
          method="post"
          @submit.prevent="submitForm()">

          <div >
            <label for="">Name</label>
            <input type="text" class="form-control"
              :class="{ 'is-invalid': errors && errors.name }"
              v-model="name">
           
          </div>

          <div >
            <label for="">Email</label>
            <input type="text" 
              :class="{ 'is-invalid': errors && errors.email }"
              v-model="email">
            
          </div>

          <div >
            <label for="">Password</label>
            <input type="password" class="form-control"
              :class="{ 'is-invalid': errors && errors.password }"
              v-model="password">
            
          </div>

          <input type="submit" value="Register">
          <nuxt-link to="/" >Cancel</nuxt-link>

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
      name:null,
      email:null,
      password:null,
      status:false,
    }
  },
  methods:{
    submitForm(){
      this.$axios.post( 'http://localhost:3000/api/auth/signup', {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response)
          if(response.data._id){
            this.$router.push({ name:'login', params:{ registered:'yes' } })
            // log in if successfully registered
            this.$auth.loginWith('local', {
                data: {
                  email: this.email,
                  password: this.password
                }
              })
              .catch( (error) => {
                console.log(error)
              })
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