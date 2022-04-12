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
    modules:[
        '@nuxtjs/axios',
    ],
    axios: {
        // proxyHeaders: false
    },
    buildModules:['@nuxtjs/tailwindcss'],
    css: ['~/assets/sass/app.scss'],
    build: {
        extractCSS: true,
        loaders: {
            limit: 0,
        }
    },
    serverMiddleware: ['~/api/index.js']
    ,
    env:{
        DB_HOST: process.env.DB_HOST || 'db-host',
        DB_DATABASE: process.env.DB_DATABASE || 'db-database',
        DB_USER: process.env.DB_USER || 'db-user',
        DB_PASS: process.env.DB_PASS || 'db-pass'
    },
    router: {
        middleware: []
    }
}