const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=zuYHwCyT#c9Zb-DJXQOOZstyI2rSVNV6GaAr2HjXh7aeKfi644rk",
MONGODB: process.env.MONGODB || "mongodb+srv://nimafree:nimafree@nimafree.ae8e2.mongodb.net/",//enter mongo db url
};
