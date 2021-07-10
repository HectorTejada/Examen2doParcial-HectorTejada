const mongoose = require('mongoose');

const SabritasSchema = new mongoose.Schema({
    Codigo:{
        type: String,
        unique:true
        
    },
    Nombre:{
        type: String,
        
    },
    Gramos:{
        type: Number,
        
    },
    Precio:{
        type: Number,
    },
    Fechaderegistro:{
        type: String

    }
})

//const Sabritas = mongoose.model('Sabritas', SabritasSchema);
const Sabritas = mongoose.model('sabritas',SabritasSchema);

module.exports = Sabritas;