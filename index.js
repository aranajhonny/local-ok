'use strict';
const http = require('http');
const estatic = require('serve-static');
const chalk = require('chalk');
const finalhandler = require('finalhandler');
const compression = require('compression');

const PORT = process.env.PORT || '3000';
const FOLDER = 'public';

exports.server = options => {
	options = options || {};
	const port = options.port || process.env.PORT || PORT;
	const folder = options.folder || FOLDER;
	const serve = estatic(folder);
	const server = http.createServer(function onRequest(req, res) {
		const _compress = compression();
		_compress(req, res, () => {
			serve(req, res, finalhandler(req, res));
		});
	});
	server.listen(port);
	console.log(chalk.green(`Listening ${folder} on 127.0.0.1:${port}`));
};

