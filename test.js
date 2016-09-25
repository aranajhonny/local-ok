import test from 'ava';
import http from 'ava-http';
import lok from './index'

test('response headers', async t => {
	lok.server({
	  folder:'example',
	  port: '3000'
	});
    const res = await http.getResponse('http://127.0.0.1:3000');
    console.log('Get page');
    t.is(res.statusCode, 200);
});