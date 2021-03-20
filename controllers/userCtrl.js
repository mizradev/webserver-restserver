const { response, request } = require('express');

exports.showUser  = (req = request, res = response) => {
	
	const { q, limit = 10 } = req.query; 

	res.json({msg:'Hola mundo', querys: { q, limit }})
}

exports.postUser  = (req = request, res = response) => {
	const { name, email } = req.body;
	res.json({msg:'Hola mundo', data: {name, email}})
}