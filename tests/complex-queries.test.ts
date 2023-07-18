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
});

const app = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  const { pathname, search } =
    req.url ? new URL(req.url, `http://${req.headers.host}`) : { pathname: '', search: '' };
  switch (pathname) {
    case '/object_query':
    case '/array_query':
      const query = qs.parse(decodeURIComponent(search.substring(1)), { comma: true });
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(200);
      res.end(JSON.stringify(query));
      return;
    default:
      res.writeHead(404);
      res.end();
      return;
  }
});

describe('complex queries', () => {
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
    expect(
      await sink.complexQueries.objectQuery({
        include: { a: 'foo', b: 'bar' },
      }),
    ).toEqual({
      include: { a: 'foo', b: 'bar' },
    });
  }, 10000);

  it(`array query`, async function () {
    expect(
      await sink.complexQueries.arrayQuery({
        include: ['users', 'users.comments'],
      }),
    ).toEqual({
      include: ['users', 'users.comments'],
    });
  }, 10000);
});
