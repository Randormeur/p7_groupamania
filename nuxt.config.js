export default {
    components: true,
    head: {
        titleTemplate: "Groupamania: %s",
        htmlAttrs: {
            lang: "en"
        },
        bodyAttrs:{
            class: ["main"]
        },
        meta: [{
            charset: "utf-8",
        }]
    },
    router: {
        prefetchLinks: false
    },
    plugins:[],
    modules:[],
    buildModules:['@nuxtjs/tailwindcss'],
    css: ['~/assets/sass/app.scss'],
    build: {
        extractCSS: true,
        loaders: {
            limit: 0,
        }
    }
}