const { Router } = require('express');
const router = Router();
const controladorSabritas = require('../controlador/controladorSabritas')

router.get('/',controladorSabritas.index )
       .post('/',controladorSabritas.agregar)
        .get('/:key/:value', controladorSabritas.buscar,controladorSabritas.mostrar)
        .put('/:key/:value', controladorSabritas.buscar, controladorSabritas.actualizar)
        .delete('/:key/:value', controladorSabritas.buscar, controladorSabritas.eliminar);

res=router;


module.exports=router;
