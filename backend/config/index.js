require('dotenv').config();
const getConfig = (env) =>{
return eval(`process.env.${env}`)
}