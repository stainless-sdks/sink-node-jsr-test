import Sink from 'sink-npm';
import http from 'http';
import { promisify } from 'util';
import * as qs from 'qs';

const port = 7583;

const sink = new Sink({
  userToken: 'something1234',
  baseURL: `http://127.0.0.1:${port}`,
  username: 'Robert',
  requiredArgNoEnv: '<example>',
  someNumberArgRequiredNoDefault: 0,
  someNumberArgRequiredNoDefaultNoEnv: 0,
});

const app = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  const { pathname, search } =
    req.url ? new URL(req.url, `http://${req.headers.host}`) : { pathname: '', search: '' };
  switch (pathname) {
    case '/binaries/return_binary':
      const query = qs.parse(decodeURIComponent(search.substring(1)), { comma: true });
      res.setHeader('Content-Type', 'application/binary');
      res.writeHead(200);
      res.end(JSON.stringify({ a: 'foo', b: 'bar' }));
      return;
    default:
      res.writeHead(404);
      res.end();
      return;
  }
});

describe('download binaries', () => {
  let server: http.Server;
  beforeAll(async () => {
    await new Promise<void>((cb) => {
      server = app.listen(port, cb);
    });
  });
  afterAll(async () => {
    await promisify<void>((cb) => server.close(cb))();
  });

  it(`object query`, async function () {
    const response = await sink.binaries.returnBinary();
    // Slightly hacky way to verify that response is a Response.
    // Less hacky ways require dubious changes to the shim exports
    expect(response['constructor'].name).toEqual('Response');
    const body = await response.text();
    expect(body).toEqual('{"a":"foo","b":"bar"}');
  }, 10000);
});
