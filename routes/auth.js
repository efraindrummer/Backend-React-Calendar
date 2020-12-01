const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');

//controladores de usuarios
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

router.post(
    '/new', 
    [
        //middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres como minimo').isLength({min: 6})
    ], 
    crearUsuario);

router.post(
    '/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres como minimo').isLength({min: 6})
    ]
    , loginUsuario);

router.get('/renew', revalidarToken);

module.exports = router;