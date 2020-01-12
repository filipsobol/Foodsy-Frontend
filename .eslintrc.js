module.exports = {
    root: true,

    env: {
        browser: true,
        node: true
    },

    parserOptions: {
        parser: 'babel-eslint'
    },

    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended'
    ],

    rules: {
        "semi": ["error", "always"],
        "indent": ["error", 4],
        "quotes": ["error", "double"],
        "vue/html-indent": ["error", 4],
        "vue/script-indent": ["error", 4],
        "vue/attributes-order": ["error", {
            "order": [
                "DEFINITION",
                "LIST_RENDERING",
                "CONDITIONALS",
                "RENDER_MODIFIERS",
                "GLOBAL",
                "UNIQUE",
                "TWO_WAY_BINDING",
                "OTHER_DIRECTIVES",
                "OTHER_ATTR",
                "EVENTS",
                "CONTENT"
            ]
        }],
        "comma-dangle": "off",
        "vue/html-closing-bracket-newline": "off",
        "space-before-function-paren": "off",
    }
}
