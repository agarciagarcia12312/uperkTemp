module.exports = function(sequelize, DataTypes) {
	var Users = sequelize.define("Users", {
		// Busines name string
		email: {
			type:DataTypes.STRING,
			allowNull:false,
			validate: {
				isEmail: true
			}
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len:[2-20]
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len:[6-10]
			}
		},
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
			allowNull: true,
			validate: {
				len:[2-20]
			}
		},
		streetAddress2: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				len:[2-20]
			}
		},
		city2: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				len:[2-20]
			}
		},
		state2: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				len:[2-20]
			}
		},

		zipCode2: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				len:[2-20]
			}
		},
		phone2: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				len:[2-20]
			}
		}
	});
	 Users.associate = function(models) {
	 	// Associating Business with deals
   		 // When a Business is deleted, also delete any associated deals
	 	Users.hasMany(models.Orders, {
	 		onDelete: "cascade"
	 	});
	 	Users.hasOne(models.Cart, {
	 		onDelete: "cascade"
	 	});
	 };

	 return Users;
};