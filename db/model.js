var mongoose  =  require('mongoose');  
   
var empSchema = new mongoose.Schema({  
    Latitud:{  
        type:Number  
    },  
    Longitud:{  
        type:Number  
    },  
    ID:{  
        type:Number  
    },  
    Titulo:{  
        type:String
    },  
    Anunciante:{  
        type:String
    },  
    Descripcion:{  
        type:String
    },  
    Reformado:{  
        type:String
    },  
    Telefonos:{  
        type:String
    },  
    Precio:{  
        type:Number  
    },  
    Precio_por_metro:{  
        type:Number  
    },  
    Direccion:{  
        type:String
    },  
    Provincia:{  
        type:String
    },  
    Ciudad:{  
        type:String
    },  
    Metros_cuadrados:{  
        type:Number
    },  
    Habitaciones:{  
        type:Number
    },  
    Baños:{  
        type:Number
    },
    Parking:{  
        type:String
    },
    Segunda_mano:{  
        type:String
    },
    Armarios_Empotrados: {
        type:String
    },
    Construido_en: {
        type:Number
    },
    Amueblado: {
        type:String
    },
    Calefaccion_individual: {
        type:String
    },
    Certificacion_energetica: {
        type:String
    },
    Planta: {
        type:String
    },
    Exterior: {
        type:String
    },
    Interior: {
        type:String
    },
    Ascensor: {
        type:String
    },
    Fecha: {
        type:String
    },
    Calle: {
        type:String
    },
    Barrio: {
        type:String
    },
    Distrito: {
        type:String
    },
    Terraza: {
        type:String
    },
    Trastero: {
        type:String
    },
    Cocina_Equipada: {
        type:String
    },
    Cocina_equipada: {
        type:String
    },
    Aire_acondicionado: {
        type:String
    },
    Piscina: {
        type:String
    },
    Jardín: {
        type:String
    },
    Metros_cuadrados_útiles: {
        type:Number
    },
    Apto_para_personas_con_movilidad_reducida: {
        type:String
    },
    Plantass: {
        type:Number
    },
    Se_admiten_mascotas: {
        type:String
    },
    Balcon: {
        type:String
    },
});  

module.exports = mongoose.model('empModel', empSchema);