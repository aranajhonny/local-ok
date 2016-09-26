import test from 'ava';
import http from 'ava-http';
import lok from './index';

test('response 200', async t => {
	lok.server({
		folder: 'example',
		port: '3001'
	});
	const res = await http.getResponse('http://127.0.0.1:3001');
	t.is(res.statusCode, 200);
	t.pass();
});

test('response 404', async t => {
	lok.server({
		folder: '',
		port: '3002'
	});
	http.getResponse('http://127.0.0.1:3002').catch(err => {
		t.is(err.statusCode, 404);
		t.pass();
	});
});
