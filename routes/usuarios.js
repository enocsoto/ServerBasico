const { Router } = require("express");
const { ususarioGet, ususariosGet, usuariosPost, usuariosPut, usuariosDelete } = require('../controllers/usuarios');

const route = Router();

route.get('/:id', ususarioGet);
route.get('/', ususariosGet);
route.post('/', usuariosPost);
route.put('/:id', usuariosPut);
route.delete('/:id', usuariosDelete);

module.exports = route;