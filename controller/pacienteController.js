const express = require('express');

const pacienteModel = require('../model/pacienteModel');

const router = express.Router();

const uploads = require('../helpers/uploads/uploads')


router.post('/paciente/cadastro', uploads.array('foto_paciente', 1), (req,res)=>{

    let { nome_paciente, telefone_paciente, celular_paciente, email_paciente, nome_responsavel, telefone_responsavel } = req.body;
    let foto_paciente = req.files[0].path;




    pacienteModel.create(

        {

        nome_paciente,

        telefone_paciente,

        celular_paciente,

        email_paciente,

        foto_paciente,

        nome_responsavel,

        telefone_responsavel

        }




    ).then(

        ()=>{

            return res.status(201).json({

                errorStatus: false,

                mensageStatus:'Paciente cadastrado!'

            });

        }

    ).catch(

        (error)=>{

            return res.status(500).json({

                errorStatus: true,

                mensageStatus: error

            });

        }

    );

});




module.exports = router;