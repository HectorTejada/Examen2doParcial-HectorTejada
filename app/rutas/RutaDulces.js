const { Router } = require('express');
const router = Router();
const ControladorDulces = require('../controlador/controladorDulces');

router.get('/',ControladorDulces.index )
       .post('/',ControladorDulces.agregar)
        .get('/:key/:value', ControladorDulces.buscar,ControladorDulces.mostrar)
        .put('/:key/:value', ControladorDulces.buscar, ControladorDulces.actualizar)
        .delete('/:key/:value', ControladorDulces.buscar, ControladorDulces.eliminar);

res=router;


module.exports=router;

