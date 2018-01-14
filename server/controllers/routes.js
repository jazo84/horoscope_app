var express = require('express');
var path = require('path');

var models = require('./../models');
models.sequelize.sync();

var router = express.Router();

router.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '../../client/public/html/main_page.html'));
});

router.get('/zodiac', (req, res) => {
	console.log(req)
	});

router.post('/horoscope', (req,res) => {
	if (req.body.name !== "" && req.body.birthdate !=='') {
		models.User.create({
			name: req.body.name,
			birthdate: req.body.birthdate
		}).then(function(User){
			res.json(User);
		})
	} else res.json("blank_fields")
})

router.post('/horoscopes',(req,res) => {
	console.log(req.body.date_range)
	if (req.body.zodiac !== '' && req.body.description !== '' && req.body.todays_horoscrope !== '' && req.body.data_range !== '') {

		models.Horoscope.create({
			zodiac:req.body.zodiac,
			description: req.body.description,
			todays_horoscope: req.body.todays_horoscope,
			date_range:req.body.date_range
		}).then(function(Horoscope){
			res.json(Horoscope);
		});
	} else if (req.body.zodiac === '' && req.body.description === '' && req.body.todays_horoscrope ==='' && req.body.data_range === ''){
		res.json("blank_fields")
	}
});

// router.put('/update-user/:id', function (req,res){
// 	models.User.findOne({where:{id:req.params.id}}).then(function(zodiac){
// 		zodiac.set('zodiac',req.body.zodiac);
// 		zodiac.save();
// 	}).then(function (success){
// 		res.json({zodiac:"Zodiac updated in user profile"})
// 	}).catch(function(err){
// 		throw err
// 	});
// });

module.exports = router;
