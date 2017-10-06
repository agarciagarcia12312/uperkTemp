module.exports = function(sequelize, DataTypes) {
	var Orders = sequelize.define("Orders", {
		// Busines name string
		streetAddress: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len:[2-20]
			}
		},
		city: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len:[2-20]
			}
		},
		state: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len:[2-20]
			}
		},

		zipCode: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len:[2-20]
			}
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len:[2-20]
			}
		},
		deliveryDate: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		deliveryTime: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1-8]
			}	
		},
		paymentMethod: {
			type: DataTypes.STRING,
			allowNull:false
		},
		itemCount: {
			type: DataTypes.INTEGER,
			allowNull:false
		},
		totalPrice: {
			type: DataTypes.DECIMAL,
			allowNull:false
		}
		// link to photo string
		// photoLink: {
		// 	type: DataTypes.STRING,
		// 	allowNull: true,
		// },
	});
	 Orders.associate = function(models) {
	 	// Associating Business with deals
   		 // When a Business is deleted, also delete any associated deals
   		 Orders.belongsTo(models.Users, {
   		 	foreignKey: {
     	  	allowNull: false
     		}
     	});
	 	Orders.hasMany(models.Sold_items, {
	 		onDelete: "cascade"
	 	});

	 };

	 return Orders;
};