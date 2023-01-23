const { response, request } = require("express");

const ususariosGet = ((req = request, res = response) => {
    const {page =1, limit=10}= req.query;
    
    res.json({
        msg: 'get API', 
        page,
        limit
    });
});

const ususarioGet = ((req, res = response) => {
    const { id } = req.params;

    res.json({
        msg: 'get API - id',
        id
    });
});

const usuariosPost = ((req, res = response) => {
    const { nombre, edad } = req.body;

    res.json({
        body
    });
});

const usuariosPut = ((req = request, res = response) => {
    const { id } = req.params;

    res.json({
        msg: 'put API',
        id
    });
});

const usuariosDelete = ((req, res = response) => {
    const { id } = req.params;

    res.json({
        msg: 'delete API',
        id
    });
});

module.exports = {
    ususariosGet,
    ususarioGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}