'use strict';

module.exports = function (sequelize, DataTypes) {
	var User = sequelize.define('User', {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		birthdate: {
			type: DataTypes.DATE,
		},
		zodiac: {
			type: DataTypes.STRING
		}
	}, {
		classMethods: {
      		associate: function(models) {
      		},
		},
		instanceMethods: {
		}
	});
	return User;
};
