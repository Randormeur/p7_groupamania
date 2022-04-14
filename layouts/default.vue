<template>
<div class="app">
    <header class="app-header">
        <div >
            <img src="/images/LogoS/icon-above-font.png" class="app-logo app-rounded"/>
        </div>
        <div class="app-search">
            <nuxt-link  to="/">Home</nuxt-link>
        </div>
        <div class='app-user-menu'>
            <div v-if="$auth.loggedIn">
                <nuxt-link to="/logout" >Logout</nuxt-link>
            </div>
            <div v-if="!$auth.loggedIn">
                <nuxt-link  to="/login">Login</nuxt-link>
                <nuxt-link  to="/signup">Sign Up</nuxt-link>
            </div>
        </div>
    </header>
    <nuxt/>
</div>
</template>

<script>
</script>