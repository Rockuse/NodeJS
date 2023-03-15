require('dotenv').config();
const getConfig = (env) => {
    try {
        return eval(`process.env.${env.toUpperCase()}`)
    } catch (error) {
        return ''
    }

}

module.exports = { getConfig }