const http = require('http');
const static = require('serve-static')
const chalk = require('chalk');
const finalhandler = require('finalhandler');
const compression = require('compression');

const  PORT = process.env.PORT || '3000';
const  FOLDER = 'public'

exports.server = (options) => {
	options = options || {}
	let port = options.port || process.env.PORT || PORT
	let folder = options.folder || FOLDER
	let serve = static(folder);
	let server = http.createServer(function onRequest (req, res) {
		let _compress = compression()
		 _compress(req, res, function (err) {
	  		  serve(req, res, finalhandler(req, res))
	  	 });
	});
	server.listen(port)
	console.log( chalk.green(`Listening ${folder} on 127.0.0.1:${port}`));

}

