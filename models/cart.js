module.exports = function(sequelize, DataTypes) {
	var Cart = sequelize.define("Cart", {
		itemCount: {
			type: DataTypes.INTEGER,
			allowNull:false
		},
		totalPrice: {
			type: DataTypes.DECIMAL,
			allowNull:false
		}
	});
	 Cart.associate = function(models) {

	 	// Associating  cart with users
   		Cart.belongsTo(models.Users, {
   			foreignKey: {
     	  	allowNull: false
     		}
   		});
   		// Cart has many Cart Items
	 	Cart.hasMany(models.Cart_items, {
	 		onDelete: "cascade"
	 	});

	 };

	 return Cart;
};