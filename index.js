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

    return res.json({curso: `Curso com nome de:  ${nome}`});
})

//Route
server.get('/curso:/id', (req, res) => { 

  const id = req.params.id;

    return res.json({curso: `Curso com nome id:  ${id}`});
})




server.listen(3000);