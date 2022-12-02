const axios = require('axios');

axios.get("https://digimon-api.vercel.app/api/digimon")
    .then(function(resp){
        console.log(resp.data[1].img);  
    })
    .catch(function(err){
        console.log(err);
    })