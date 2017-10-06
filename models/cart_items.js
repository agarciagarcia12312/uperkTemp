module.exports = function(sequelize, DataTypes) {
	var Cart_items = sequelize.define("Cart_items", {
		// Busines name string
		name: {
			type:DataTypes.STRING,
			allowNull:false
		},
		name: {
			type:DataTypes.INTEGER,
			allowNull:false
		},
		// password string
		option1: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				len:[1-20]
			}
		},
		option2: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				len:[1-20]
			}
		},
		option3: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				len:[1-20]
			}
		}
		// link to photo string
		// photoLink: {
		// 	type: DataTypes.STRING,
		// 	allowNull: true,
		// },
	});
	 Cart_items.associate = function(models) {
	 	// Associating Business with deals
   		 // When a Business is deleted, also delete any associated deals
	 	Cart_items.belongsTo(models.Orders, {
	 		foreignKey: {
     	  	allowNull: false
     		}
	 	});
	 };

	 return Cart_items;
};