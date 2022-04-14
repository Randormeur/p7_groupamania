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
        '@nuxtjs/auth'
    ],
    axios: {
        //baseURL: process.env.API_URL
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
    },
    auth: {
        strategies: {
            local: {
                endpoints: {
                    // these are the API endpoints we created in Express
                    login: {
                        url: '/auth/login',
                        method: 'post',
                        propertyName: 'token'
                    },
                    logout: true,
                    user: {
                         url: '/auth/user',
                        method: 'get',
                        propertyName: 'user'
                    }
                },
                tokenRequired: true,
                tokenType: "Bearer"
            }
        },
        redirect: {
              login: '/login', // User will be redirected to this path if login is required
              logout: '/', // User will be redirected to this path if after logout, current route is protected
              home: '/' // User will be redirect to this path after login if accessed login page directly
        },
        rewriteRedirects: true,}
}