<template>
    <div class="app-container">
        <div class="app-title">
            <h1>Bienvenue sur le site Groupamania</h1>
        </div>
        <div v-if="!$auth.loggedIn">
            <nuxt-link to="/signup">Créer un nouveau compte</nuxt-link>
            <nuxt-link to="/login">Se connecter</nuxt-link>
        </div>
        
        <div v-if="$auth.loggedIn">
            <AllPost :posts="posts"/>
        </div>
        
        
    </div>
</template>

<script>

export default {
    head(){
        return {
            title:'Accueil',
            meta: [{
                name: 'description',
                content: "Voici la page d'accueil",
                hid: 'description'
            }]
        }
    },
     
    async asyncData(context){
        const {data} = await context.$axios.get('/posts')
        return {
        posts : data
        }
    },
}
</script>