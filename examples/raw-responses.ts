#!/usr/bin/env yarn tsn -T

import Sink from 'sink-npm';

const client = new Sink({
  userToken: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  username: 'Robert',
  requiredArgNoEnv: '<example>',
  someNumberArgRequiredNoDefault: 0,
  someNumberArgRequiredNoDefaultNoEnv: 0,
});

export async function main() {
  const { data, response } = await client.responses.additionalProperties().withResponse();
  console.log(response);
  console.log(`response headers: `, response.headers.raw());
  console.log(`data: `, data);
}

export async function envelopes() {
  const { data, response } = await client.envelopes.explicit().withResponse();
  console.log(response);
  console.log(`response headers: `, response.headers.raw());

  console.log(`obj: `, data);
  console.log(data.city);
  console.log('\n\n\n');

  const normal = await client.envelopes.explicit();
  console.log(`normal: `, normal);
  console.log(normal.city);
}

// main().catch(console.error);
envelopes().catch(console.error);
