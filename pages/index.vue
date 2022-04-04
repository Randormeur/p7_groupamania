<template>
    <div class="app-container">
        <div class="app-title">
            <h1>Bienvenue sur le site Groupamania</h1>
        </div>
        <ModeArticle/>
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
}
</script>