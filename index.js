const express = require('express');

const server = express();

/* queryparams = ?nome=NodeJS
Route Params = /curso/2
Request Body = {nome: "NomeJS", tipo: "aula"}
*/

//localhost:3000/curso


//queryparams
server.get('/curso', (req, res) => { 

  const name = req.query.nome;

    return res.json({curso: `aaaa  ${nome}`});
})




server.listen(3000);