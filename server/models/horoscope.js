'use strict';
module.exports = function (sequelize, DataTypes) {
	var Horoscope = sequelize.define('Horoscope', {
		zodiac: {
			type: DataTypes.STRING,
		},
		description: {
			type: DataTypes.TEXT,
		},
		todays_horoscope: {
			type: DataTypes.TEXT,
		},
    date_range: {
			type: DataTypes.STRING,
		}
	}, {
		classMethods: {
      associate: function(models) {
    	}
		}
	});
	return Horoscope;
};
