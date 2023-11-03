#!/usr/bin/env yarn tsn -T

import Sink from 'sink-npm';

const sink = new Sink({
  userToken: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  username: 'Robert',
  requiredArgNoEnv: '<example>',
  someNumberArgRequiredNoDefault: 0,
  someNumberArgRequiredNoDefaultNoEnv: 0,
});

export async function main() {
  const response = await sink.responses.additionalProperties().asResponse();
  console.log(response);
  console.log(`response headers: `, response.raw.headers.raw());

  const obj = await response.parse();
  console.log(`obj: `, obj);
}

export async function envelopes() {
  const response = await sink.envelopes.explicit().asResponse();
  console.log(response);
  console.log(`response headers: `, response.raw.headers.raw());

  const obj = await response.parse();
  console.log(`obj: `, obj);
  console.log(obj.data.city);
  console.log('\n\n\n');

  const normal = await sink.envelopes.explicit();
  console.log(`normal: `, normal);
  console.log(normal.city);
}

// main().catch(console.error);
envelopes().catch(console.error);
