module.exports = function(sequelize, DataTypes) {
	var Sold_items = sequelize.define("Sold_items", {
		// Busines name string
		name: {
			type:DataTypes.STRING,
			allowNull:false
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len:[2-50]
			}
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
	 Sold_items.associate = function(models) {
	 	// Associating Business with deals
   		 // When a Business is deleted, also delete any associated deals
	 	Sold_items.belongsTo(models.Orders, {
	 		foreignKey: {
     	  	allowNull: false
     		}
	 	});
	 };

	 return Sold_items;
};