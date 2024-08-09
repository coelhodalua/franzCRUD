const express = require('express');

const server = express();
// para funcionar o post
server.use(express.json());

/* 
//localhost:3000/curso
queryparams = ?nome=NodeJS
Route Params = /curso/2
Request Body = {nome: "NomeJS", tipo: "aula"}
*/


const cursos = ['NodeJS' , 'JavaScript', 'React Native', 'Java SpringBoot'];


// Middleware Global 
 server.use ((req, res, next) =>{
    console.log(`URL CHAMADA: ${req.url}`);
    return next();
 })

 // function para validacoes
 function checkCurso (req, res, next){
  if (!req.body.name){
    return res.status(400).json({ error: "Nome do curso é obrigatório"});
  }
  return next();
 }

 // e se eu mandar um dado que nao existe, tratar msg

 function checkIndexCurso (req, res, next) {
  // verifica se existe este index (esse id)
  const curso = cursos[req.params.index];
  if (!curso){
    return res.status(400).json({error: "O curso não existe!!!"});
  }
  req.curso = curso;
  return next();
 }

// lista todos os cursos
server.get ('/cursos',  (req, res) => {
  return res.json(cursos);
});

// lista curso pelo id
server.get('/cursos/:index' ,checkIndexCurso,  (req, res) => {
  return res.json(req.curso);
})


// criar um novo curso POST
server.post('/cursos', checkCurso,  (req, res) => {
  const {name} = req.body;


  cursos.push(name);
  return res.json();
});

// atualizando um registro PUT
server.put ('/cursos/:index' , checkCurso, checkIndexCurso,  (req,res) => {
  const { index } = req.params;
  const { name } = req.body;
  cursos[index] = name;
  return res.json(cursos);
});

// delete 
server.delete ('/cursos/:index' , checkIndexCurso, (req,res) => {
  const { index } = req.params;
  cursos.splice(index, 1);
  return res.json({message: "curso deletado com sucesso"});
});

server.listen(3000);