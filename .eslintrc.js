module.exports = {
    "env": {
        "browser": true
    },
    "extends": [
        'eslint:recommended',
        'airbnb',
        'plugin:vue/base',
        'prettier'
    ],
    "parserOptions": {
        "ecmaVersion": 5,
        "ecmaFeatures":{
            "jsx":true
        }
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};