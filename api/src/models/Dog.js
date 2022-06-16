const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog',
{
    id:{
      type: DataTypes.UUID,
   defaultValue: DataTypes.UUIDV4, 
    primaryKey:true,
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
     weight:{
       type:DataTypes.INTEGER,
       validate:{
         min: 5,
         max: 82
       }
     },
     height:{
       type: DataTypes.STRING
     },
     image:{
          type:DataTypes.TEXT
     },
     years:{
      type:DataTypes.INTEGER
     },
    
  });
};
