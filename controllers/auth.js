const { response } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');

const crearUsuario = async(req, res = response) => { 

    const { email, password} = (req.body);

    try {

        let usuario = await Usuario.findOne({ email});

        if(usuario){
            return res.status(400).json({
                ok: false,
                msg: 'EL USUARIO YA EXISTE CON ESE CORREO'
            });
        }
        
        usuario = new Usuario(req.body);
        //encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);
        //guardar en la base de datos
        await usuario.save();

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name
        });

    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok: false,
            mag: 'por favor hable con el administrador'
        });
    }
}

const loginUsuario = async(req, res = response) => {

    const { email, password } = (req.body);

    try {

        const usuario = await Usuario.findOne({ email });

        if(!usuario){
            return res.status(400).json({
                ok: false,
                msg: 'EL USUARIO NO EXISTE CON ESE CORREO'
            });
        }

        //confirmar las contraseñas
        const validPassword = bcrypt.compareSync(password, usuario.password);

        if(!validPassword){
            return res.status(400).json({
                ok: false,
                false: 'Password incorrecto'
            });
        }

        //Generar JWT despues analizar la contraseña
        res.json({
            ok: true,
            uid: usuario.id,
            name: usuario.name
        });
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'por favor hable con el administrador'
        });
    }

}

const revalidarToken = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'renew'
    });
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}