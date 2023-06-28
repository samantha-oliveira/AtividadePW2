const express  = require('express');

const app = express();




app.use(express.json());

app.use(express.urlencoded({extended: true}))

const pacienteController = require('./controller/pacienteController');
app.use('/', pacienteController);


const pacienteModel = require('./model/pacienteModel')




app.use('/', pacienteModel);




app.listen(3000, ()=>{

   console.log("Tá funcionando!");

});