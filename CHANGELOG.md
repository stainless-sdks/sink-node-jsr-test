# Changelog

## 0.11.3-beta.1 (2024-01-18)

Full Changelog: [v0.11.2-beta.1...v0.11.3-beta.1](https://github.com/stainless-sdks/sink-node-public/compare/v0.11.2-beta.1...v0.11.3-beta.1)

### Bug Fixes

* add test for case when every param in a body is read-only ([#339](https://github.com/stainless-sdks/sink-node-public/issues/339)) ([3ac3216](https://github.com/stainless-sdks/sink-node-public/commit/3ac3216db4dd11f9d96fb93f278e11e0b2104ba4))

## 0.11.2-beta.1 (2024-01-17)

Full Changelog: [v0.11.1-beta.1...v0.11.2-beta.1](https://github.com/stainless-sdks/sink-node-public/compare/v0.11.1-beta.1...v0.11.2-beta.1)

### Bug Fixes

* **types:** accept undefined for optional client options ([#338](https://github.com/stainless-sdks/sink-node-public/issues/338)) ([9d60a2a](https://github.com/stainless-sdks/sink-node-public/commit/9d60a2aed1451277223e0645ba7cfd55a783365f))


### Chores

* **internal:** debug logging for retries; speculative retry-after-ms support ([#336](https://github.com/stainless-sdks/sink-node-public/issues/336)) ([9e87865](https://github.com/stainless-sdks/sink-node-public/commit/9e8786596e3be92414065575124c256639344d1c))

## 0.11.1-beta.1 (2024-01-17)

Full Changelog: [v0.11.0-beta.1...v0.11.1-beta.1](https://github.com/stainless-sdks/sink-node-public/compare/v0.11.0-beta.1...v0.11.1-beta.1)

### Bug Fixes

* use `Accept: */*` as a default Header for void endpoints ([#334](https://github.com/stainless-sdks/sink-node-public/issues/334)) ([3ee58af](https://github.com/stainless-sdks/sink-node-public/commit/3ee58af2d2d2b416b7564a5429617f1991c629de))

## 0.11.0-beta.1 (2024-01-16)

Full Changelog: [v0.10.0...v0.11.0-beta.1](https://github.com/stainless-sdks/sink-node-public/compare/v0.10.0...v0.11.0-beta.1)

### Features

* add and test `send_as_query_param` and `send_as_path_param` ([#332](https://github.com/stainless-sdks/sink-node-public/issues/332)) ([0a7053f](https://github.com/stainless-sdks/sink-node-public/commit/0a7053fb2cc20755c0b0f381c5bd67c14acd34f5))
* add path param enum test ([#333](https://github.com/stainless-sdks/sink-node-public/issues/333)) ([9ab5755](https://github.com/stainless-sdks/sink-node-public/commit/9ab5755e39945bccfc56eb969af52902796e4a97))
* add test for resource with only custom methods ([#331](https://github.com/stainless-sdks/sink-node-public/issues/331)) ([b54329d](https://github.com/stainless-sdks/sink-node-public/commit/b54329d66799833b308e71b5e1ac84efed1f0202))


### Chores

* **internal:** narrow type into stringifyQuery ([#327](https://github.com/stainless-sdks/sink-node-public/issues/327)) ([9932f78](https://github.com/stainless-sdks/sink-node-public/commit/9932f7831420e776b9b67d5103b02c4b1fd0b998))


### Documentation

* fix missing async in readme code sample ([#330](https://github.com/stainless-sdks/sink-node-public/issues/330)) ([8e27114](https://github.com/stainless-sdks/sink-node-public/commit/8e2711496176f439fa5bd2cc4219c6ee9908e72a))
* **readme:** improve api reference ([#329](https://github.com/stainless-sdks/sink-node-public/issues/329)) ([41d9c6b](https://github.com/stainless-sdks/sink-node-public/commit/41d9c6b90f19aef863cdb9462ae5f64277023c65))

## 0.10.0 (2024-01-10)

Full Changelog: [v0.9.1...v0.10.0](https://github.com/stainless-sdks/sink-node-public/compare/v0.9.1...v0.10.0)

### Features

* **types:** add test for unknown paginated items ([#323](https://github.com/stainless-sdks/sink-node-public/issues/323)) ([ab867f6](https://github.com/stainless-sdks/sink-node-public/commit/ab867f6c98fae37d46e8083b5063434bf5e1cfdd))


### Bug Fixes

* use default base url if BASE_URL env var is blank ([#326](https://github.com/stainless-sdks/sink-node-public/issues/326)) ([ce1c03f](https://github.com/stainless-sdks/sink-node-public/commit/ce1c03f8d38a00074186b79c360c15c6c4a20955))


### Chores

* add .keep files for examples and custom code directories ([#325](https://github.com/stainless-sdks/sink-node-public/issues/325)) ([4441763](https://github.com/stainless-sdks/sink-node-public/commit/44417637997667eca53ca0b5567a3da0947149f6))

## 0.9.1 (2024-01-05)

Full Changelog: [v0.9.0...v0.9.1](https://github.com/stainless-sdks/sink-node-public/compare/v0.9.0...v0.9.1)

### Bug Fixes

* escape interface names, fix pagination types ([#322](https://github.com/stainless-sdks/sink-node-public/issues/322)) ([0a228e9](https://github.com/stainless-sdks/sink-node-public/commit/0a228e99bcea8564b0a863a285b67bf23d1a4848))


### Chores

* **internal:** improve type signatures ([#320](https://github.com/stainless-sdks/sink-node-public/issues/320)) ([220ae0d](https://github.com/stainless-sdks/sink-node-public/commit/220ae0da055b3a945641971a724fefc43e763c10))

## 0.9.0 (2024-01-04)

Full Changelog: [v0.8.1...v0.9.0](https://github.com/stainless-sdks/sink-node-public/compare/v0.8.1...v0.9.0)

### Features

* add test case for models using $ref syntax ([#318](https://github.com/stainless-sdks/sink-node-public/issues/318)) ([af44441](https://github.com/stainless-sdks/sink-node-public/commit/af4444197c54a06f863e27ba3a20864d564a554d))


### Bug Fixes

* **headers:** always send lowercase headers and strip undefined (BREAKING in rare cases) ([#319](https://github.com/stainless-sdks/sink-node-public/issues/319)) ([e4e1765](https://github.com/stainless-sdks/sink-node-public/commit/e4e17650f06e637e872c645c507c90a9f0837881))


### Chores

* **internal:** bump license ([#316](https://github.com/stainless-sdks/sink-node-public/issues/316)) ([92411c5](https://github.com/stainless-sdks/sink-node-public/commit/92411c5f2adfd3c8eb2c07134f26f19a4d638dea))

## 0.8.1 (2023-12-20)

Full Changelog: [v0.8.0...v0.8.1](https://github.com/stainless-sdks/sink-node-public/compare/v0.8.0...v0.8.1)

### Bug Fixes

* better typing for parameters when `x-stainless-empty-object: true` ([#315](https://github.com/stainless-sdks/sink-node-public/issues/315)) ([9263273](https://github.com/stainless-sdks/sink-node-public/commit/926327316938e3392a0a0a54cfefbd0c28c91dcc))


### Chores

* **deps:** update jest ([#310](https://github.com/stainless-sdks/sink-node-public/issues/310)) ([81ca5b3](https://github.com/stainless-sdks/sink-node-public/commit/81ca5b34a78b367825e3c7cc3bac156bc794df29))
* **internal:** minor updates to pagination ([#313](https://github.com/stainless-sdks/sink-node-public/issues/313)) ([380f1a6](https://github.com/stainless-sdks/sink-node-public/commit/380f1a68c235fd68ee73de8b30bf4073a7e6b75e))


### Documentation

* reformat README.md ([#314](https://github.com/stainless-sdks/sink-node-public/issues/314)) ([1d42321](https://github.com/stainless-sdks/sink-node-public/commit/1d423211c75ab6124c9985c23278d9eb91c3efa1))


### Refactors

* write jest config in typescript ([#312](https://github.com/stainless-sdks/sink-node-public/issues/312)) ([c3f3ad6](https://github.com/stainless-sdks/sink-node-public/commit/c3f3ad6a11645d26cef0cde08f07b42575145ca2))

## 0.8.0 (2023-12-18)

Full Changelog: [v0.7.0...v0.8.0](https://github.com/stainless-sdks/sink-node-public/compare/v0.7.0...v0.8.0)

### Features

* add test case for reserved params names ([#309](https://github.com/stainless-sdks/sink-node-public/issues/309)) ([fc8a8e7](https://github.com/stainless-sdks/sink-node-public/commit/fc8a8e797742320ef2bbd3bc5b2d55b24983d604))
* add test for binary endpoint with a path param ([#308](https://github.com/stainless-sdks/sink-node-public/issues/308)) ([6241d88](https://github.com/stainless-sdks/sink-node-public/commit/6241d88ed884e528722c0c1874db9b608f66be4a))
* **client:** support reading the base url from an env variable ([#297](https://github.com/stainless-sdks/sink-node-public/issues/297)) ([a3dd32c](https://github.com/stainless-sdks/sink-node-public/commit/a3dd32c8ef096ed223080e0832e8ff27e2076547))
* generated ([#291](https://github.com/stainless-sdks/sink-node-public/issues/291)) ([e32a04c](https://github.com/stainless-sdks/sink-node-public/commit/e32a04c19e366cf5947f6075d767a63ab1b03a1e))


### Bug Fixes

* better typing for parameters when request body is defined as empty ([#304](https://github.com/stainless-sdks/sink-node-public/issues/304)) ([98c6e79](https://github.com/stainless-sdks/sink-node-public/commit/98c6e791865e3e10613b9e9d94d8c9aec76f8075))


### Chores

* add share model for testing pagination ([#300](https://github.com/stainless-sdks/sink-node-public/issues/300)) ([1f74347](https://github.com/stainless-sdks/sink-node-public/commit/1f7434760a94e6c0726c100b4715268aca56aed5))
* **deps:** update dependency ts-jest to v29.1.1 ([#307](https://github.com/stainless-sdks/sink-node-public/issues/307)) ([6c814ae](https://github.com/stainless-sdks/sink-node-public/commit/6c814ae4736f2f465ee1514870b71d2db76e99bf))
* **dev:** sam testing stuff ([#289](https://github.com/stainless-sdks/sink-node-public/issues/289)) ([0813fac](https://github.com/stainless-sdks/sink-node-public/commit/0813fac2a77b5be81e4c01872b05e78e16033534))
* **internal:** remove file import and conditionally run prepare ([#293](https://github.com/stainless-sdks/sink-node-public/issues/293)) ([46c1c6e](https://github.com/stainless-sdks/sink-node-public/commit/46c1c6e7081dd34f4803ee358c02375d68a92ad8))
* regenerate based on monorepo spec ([#292](https://github.com/stainless-sdks/sink-node-public/issues/292)) ([50a0b9a](https://github.com/stainless-sdks/sink-node-public/commit/50a0b9ac55092307f863cb77e872738223ef2298))
* remove pagination tests for now ([#298](https://github.com/stainless-sdks/sink-node-public/issues/298)) ([cf23bf7](https://github.com/stainless-sdks/sink-node-public/commit/cf23bf7edad73fce4a103220950ddd85f9f32e3e))
* update dependencies ([#306](https://github.com/stainless-sdks/sink-node-public/issues/306)) ([4eddaa3](https://github.com/stainless-sdks/sink-node-public/commit/4eddaa37602179ad86b9cd174054a40df7bcd6cf))
* update prettier ([#305](https://github.com/stainless-sdks/sink-node-public/issues/305)) ([ccca93c](https://github.com/stainless-sdks/sink-node-public/commit/ccca93c4726c3230dc41b7907bfc7d61af864156))
* uses Stainless GitHub App for codeflow ([#303](https://github.com/stainless-sdks/sink-node-public/issues/303)) ([931d588](https://github.com/stainless-sdks/sink-node-public/commit/931d588c26d6064b2904819b943b79e2f811bb50))


### Documentation

* **readme:** update example snippets ([#296](https://github.com/stainless-sdks/sink-node-public/issues/296)) ([41eff69](https://github.com/stainless-sdks/sink-node-public/commit/41eff694e822168b1337d4b25a3608c82405157e))


### Build System

* specify `packageManager: yarn` ([#302](https://github.com/stainless-sdks/sink-node-public/issues/302)) ([7966481](https://github.com/stainless-sdks/sink-node-public/commit/7966481f3906e02cb99c1a2db9af1967c2bbc29b))

## 0.7.0 (2023-11-21)

Full Changelog: [v0.6.0...v0.7.0](https://github.com/stainless-sdks/sink-node-public/compare/v0.6.0...v0.7.0)

### Features

* add string type test ([#284](https://github.com/stainless-sdks/sink-node-public/issues/284)) ([f4ea242](https://github.com/stainless-sdks/sink-node-public/commit/f4ea24244995bf7d8b8dc9f25f1248f8f2353990))
* add tests for union with unknown variant ([#285](https://github.com/stainless-sdks/sink-node-public/issues/285)) ([7a4b39f](https://github.com/stainless-sdks/sink-node-public/commit/7a4b39fa56a3fb412185b89c5b7c02fc5b45bf3c))
* allow installing package directly from github ([#287](https://github.com/stainless-sdks/sink-node-public/issues/287)) ([295f24f](https://github.com/stainless-sdks/sink-node-public/commit/295f24f2459b4bc45301a24394b3414b1fb82358))


### Chores

* **ci:** update release-please config ([#275](https://github.com/stainless-sdks/sink-node-public/issues/275)) ([a842467](https://github.com/stainless-sdks/sink-node-public/commit/a842467b6c11ada360db7d0b0b5f6080124631f4))
* **docs:** fix github links ([#277](https://github.com/stainless-sdks/sink-node-public/issues/277)) ([988e1fe](https://github.com/stainless-sdks/sink-node-public/commit/988e1fec7fd50da893de224b04a332cff6f0f590))
* **internal:** don't call prepare in dist ([#288](https://github.com/stainless-sdks/sink-node-public/issues/288)) ([80b5444](https://github.com/stainless-sdks/sink-node-public/commit/80b544457bc844cbd44c1b8d5abad98c4b0310ac))
* **internal:** update APIResource structure ([#281](https://github.com/stainless-sdks/sink-node-public/issues/281)) ([dfa3bb8](https://github.com/stainless-sdks/sink-node-public/commit/dfa3bb89d412046f12980eba5f872ff279258222))
* **internal:** update jest config ([#280](https://github.com/stainless-sdks/sink-node-public/issues/280)) ([8bdd934](https://github.com/stainless-sdks/sink-node-public/commit/8bdd934f675abf4560b5c5656eba76e51f5a02c2))
* **internal:** update stats file ([#282](https://github.com/stainless-sdks/sink-node-public/issues/282)) ([a10fa97](https://github.com/stainless-sdks/sink-node-public/commit/a10fa97e1afd8854eebb053df6359ec67b209144))
* **internal:** update tsconfig ([#278](https://github.com/stainless-sdks/sink-node-public/issues/278)) ([215ffb7](https://github.com/stainless-sdks/sink-node-public/commit/215ffb7462065b5777328595b3a7817fb4195b4a))
* **types:** add more array types tests ([#279](https://github.com/stainless-sdks/sink-node-public/issues/279)) ([9358713](https://github.com/stainless-sdks/sink-node-public/commit/9358713d7dbc301909e5337ddc2a2d715f32bcf9))
* update enum tests ([#283](https://github.com/stainless-sdks/sink-node-public/issues/283)) ([e5940b6](https://github.com/stainless-sdks/sink-node-public/commit/e5940b67b4ede049c41e66ae95932fa13171572f))
* update recursive types ([#286](https://github.com/stainless-sdks/sink-node-public/issues/286)) ([686ae33](https://github.com/stainless-sdks/sink-node-public/commit/686ae336b43dc3f2a7a0f05ff039681fa4b90fa2))

## 0.6.0 (2023-11-05)

Full Changelog: [v0.5.0...v0.6.0](https://github.com/stainless-sdks/sink-node-public/compare/v0.5.0...v0.6.0)

### Features

* add support for default headers per-resource ([#267](https://github.com/stainless-sdks/sink-node-public/issues/267)) ([9c2c1c0](https://github.com/stainless-sdks/sink-node-public/commit/9c2c1c05b7054467aeabfe6037d65bb29a7f3fa6))
* add union type name tests ([#270](https://github.com/stainless-sdks/sink-node-public/issues/270)) ([5fc2969](https://github.com/stainless-sdks/sink-node-public/commit/5fc296919f50a4a71f28e1d92c6af82afa174cc2))
* **client:** allow binary returns ([#271](https://github.com/stainless-sdks/sink-node-public/issues/271)) ([72786a9](https://github.com/stainless-sdks/sink-node-public/commit/72786a99eed6bad8ad81a7eee875ec6ace4dd1ed))
* **github:** include a devcontainer setup ([#269](https://github.com/stainless-sdks/sink-node-public/issues/269)) ([1e3c8e2](https://github.com/stainless-sdks/sink-node-public/commit/1e3c8e2bac84b1f1cde911ff109a32901f68cae8))
* temporarily skip mutual recursion cases ([#272](https://github.com/stainless-sdks/sink-node-public/issues/272)) ([881f194](https://github.com/stainless-sdks/sink-node-public/commit/881f194a1d63999bf31e7063be5c8b09e5715839))


### Chores

* **internal:** update gitignore ([#265](https://github.com/stainless-sdks/sink-node-public/issues/265)) ([5ca782d](https://github.com/stainless-sdks/sink-node-public/commit/5ca782d76dce1cc5e69e739f0ff6dd2865cc98d7))
* small cleanups ([#268](https://github.com/stainless-sdks/sink-node-public/issues/268)) ([52bbdc8](https://github.com/stainless-sdks/sink-node-public/commit/52bbdc8425d12ca91c661371e8b8f5ba861d3e5f))


### Documentation

* document customizing fetch ([#273](https://github.com/stainless-sdks/sink-node-public/issues/273)) ([0ffaab1](https://github.com/stainless-sdks/sink-node-public/commit/0ffaab132bdb314b5e56b225a6621f2244e249e5))
* **readme:** remove redundant whitespace ([#274](https://github.com/stainless-sdks/sink-node-public/issues/274)) ([00b963f](https://github.com/stainless-sdks/sink-node-public/commit/00b963fe7c2cb93d43608556f19e193232017fca))

## 0.5.0 (2023-10-25)

Full Changelog: [v0.4.1...v0.5.0](https://github.com/stainless-sdks/sink-node-public/compare/v0.4.1...v0.5.0)

### Features

* more unions tests ([#262](https://github.com/stainless-sdks/sink-node-public/issues/262)) ([1921701](https://github.com/stainless-sdks/sink-node-public/commit/192170179dce6de3646311d5fcb1dbc1f1a5af89))


### Bug Fixes

* typo in build script ([#264](https://github.com/stainless-sdks/sink-node-public/issues/264)) ([fe602df](https://github.com/stainless-sdks/sink-node-public/commit/fe602dfd0c29f59c5dc66db3423eb9fc543dbdfa))

## 0.4.1 (2023-10-24)

Full Changelog: [v0.3.8...v0.4.1](https://github.com/stainless-sdks/sink-node-public/compare/v0.3.8...v0.4.1)

### Features

* add case for nullable unions ([#254](https://github.com/stainless-sdks/sink-node-public/issues/254)) ([00be3a5](https://github.com/stainless-sdks/sink-node-public/commit/00be3a565e419f0349714083e2cf4728cc6a0e35))
* add tests for date path params ([#257](https://github.com/stainless-sdks/sink-node-public/issues/257)) ([98aa10b](https://github.com/stainless-sdks/sink-node-public/commit/98aa10b4a75f56309d6fb6798527565e8c334a6f))
* added Ruby ([#250](https://github.com/stainless-sdks/sink-node-public/issues/250)) ([d8824ee](https://github.com/stainless-sdks/sink-node-public/commit/d8824ee2a519c522ce52fbbd3c62584ce3176ed1))
* handle 204 No Content gracefully ([#260](https://github.com/stainless-sdks/sink-node-public/issues/260)) ([eb69496](https://github.com/stainless-sdks/sink-node-public/commit/eb694960d08d60cbc1f6b5299ce2c08a0224fbde))
* partially add extra_params_and_fields case ([#252](https://github.com/stainless-sdks/sink-node-public/issues/252)) ([5edfc9f](https://github.com/stainless-sdks/sink-node-public/commit/5edfc9ff915542b81e5b1c52c3f5ec6540b04fb8))


### Bug Fixes

* import web-streams-polyfill without overriding globals ([#258](https://github.com/stainless-sdks/sink-node-public/issues/258)) ([0f00764](https://github.com/stainless-sdks/sink-node-public/commit/0f00764f1894dc691ecf3cb6e1e916d0dc7e75b7))
* improve status code in error messages ([#255](https://github.com/stainless-sdks/sink-node-public/issues/255)) ([9cb2a66](https://github.com/stainless-sdks/sink-node-public/commit/9cb2a66342e9cc7e2c71fd97578e60689244680d))


### Chores

* **internal:** add debug logs for stream responses ([#253](https://github.com/stainless-sdks/sink-node-public/issues/253)) ([8121f53](https://github.com/stainless-sdks/sink-node-public/commit/8121f53a86b4cd44ba4f2bece1b158e29f3ca1ef))


### Documentation

* organisation -&gt; organization (UK to US English) ([#256](https://github.com/stainless-sdks/sink-node-public/issues/256)) ([7d2d7b2](https://github.com/stainless-sdks/sink-node-public/commit/7d2d7b2c163d5eade34fc606039811d703af66dc))

## 0.3.8 (2023-10-13)

Full Changelog: [v0.3.7...v0.3.8](https://github.com/stainless-sdks/sink-node-public/compare/v0.3.7...v0.3.8)

### Chores

* update comment ([#248](https://github.com/stainless-sdks/sink-node-public/issues/248)) ([3a77507](https://github.com/stainless-sdks/sink-node-public/commit/3a775075c8dac21aa9ea9d69a8b7dc49fc4d8063))

## 0.3.7 (2023-10-12)

Full Changelog: [v0.3.6...v0.3.7](https://github.com/stainless-sdks/sink-node-public/compare/v0.3.6...v0.3.7)

### Chores

* add case insensitive get header function ([#246](https://github.com/stainless-sdks/sink-node-public/issues/246)) ([cd44ce6](https://github.com/stainless-sdks/sink-node-public/commit/cd44ce697b5ec1639f8adf97793c960c8bbe7fb3))

## 0.3.6 (2023-10-12)

Full Changelog: [v0.3.5...v0.3.6](https://github.com/stainless-sdks/sink-node-public/compare/v0.3.5...v0.3.6)

## 0.3.5 (2023-10-12)

Full Changelog: [v0.3.4...v0.3.5](https://github.com/stainless-sdks/sink-node-public/compare/v0.3.4...v0.3.5)

### Features

* add nested request model test case ([#237](https://github.com/stainless-sdks/sink-node-public/issues/237)) ([889bc91](https://github.com/stainless-sdks/sink-node-public/commit/889bc91180fc6f2481c81960d14b0d66783ab254))
* add tests for property array of objects in params ([#242](https://github.com/stainless-sdks/sink-node-public/issues/242)) ([2dc3558](https://github.com/stainless-sdks/sink-node-public/commit/2dc35581ca9d01a625781f3387e1e26cff722685))
* **client:** add client argument test ([#243](https://github.com/stainless-sdks/sink-node-public/issues/243)) ([6772ea9](https://github.com/stainless-sdks/sink-node-public/commit/6772ea99876e6d3cd8e53271cd28cfa8f536f373))


### Bug Fixes

* **client:** eliminate circular imports, which cause runtime errors in webpack dev bundles ([#238](https://github.com/stainless-sdks/sink-node-public/issues/238)) ([765fb99](https://github.com/stainless-sdks/sink-node-public/commit/765fb993359abbccdea799321d4b1cf5687c4467))
* fix namespace exports regression ([#239](https://github.com/stainless-sdks/sink-node-public/issues/239)) ([e7993fa](https://github.com/stainless-sdks/sink-node-public/commit/e7993fa7839fa8ad4f35951b880ba619cd61da2f))
* prevent ReferenceError, update compatibility to ES2020 and Node 18+ ([#235](https://github.com/stainless-sdks/sink-node-public/issues/235)) ([d87788d](https://github.com/stainless-sdks/sink-node-public/commit/d87788dde89c624b938fd417ab3439fa6cd68d73))


### Chores

* **internal:** refactor status code printing in error ([#240](https://github.com/stainless-sdks/sink-node-public/issues/240)) ([fbb06b1](https://github.com/stainless-sdks/sink-node-public/commit/fbb06b18843895e1ca517615787f990f3431403c))


### Refactors

* **test:** refactor authentication tests ([#241](https://github.com/stainless-sdks/sink-node-public/issues/241)) ([f400b9c](https://github.com/stainless-sdks/sink-node-public/commit/f400b9c48a352c06684917b08b4e4220d46fc730))

## 0.3.4 (2023-10-05)

Full Changelog: [v0.3.3...v0.3.4](https://github.com/stainless-sdks/sink-node-public/compare/v0.3.3...v0.3.4)

### Features

* now supporting x-stainless-param ([#232](https://github.com/stainless-sdks/sink-node-public/issues/232)) ([869c13a](https://github.com/stainless-sdks/sink-node-public/commit/869c13ac84369e3ed03967c0706bbb6a73ce1534))


### Chores

* **internal:** bump stats ([#229](https://github.com/stainless-sdks/sink-node-public/issues/229)) ([1c9692a](https://github.com/stainless-sdks/sink-node-public/commit/1c9692a4ce47d1373cf432d3452a1d7d749e5c99))
* **internal:** minor formatting improvement ([#233](https://github.com/stainless-sdks/sink-node-public/issues/233)) ([efc0c33](https://github.com/stainless-sdks/sink-node-public/commit/efc0c335608e058754d6ba8243abfd52f0824132))
* restructuring ([#231](https://github.com/stainless-sdks/sink-node-public/issues/231)) ([6ddbab8](https://github.com/stainless-sdks/sink-node-public/commit/6ddbab8662f1923285b847a5e512d0701d4260a4))

## 0.3.3 (2023-10-03)

Full Changelog: [v0.3.2...v0.3.3](https://github.com/stainless-sdks/sink-node-public/compare/v0.3.2...v0.3.3)

### Chores

* **tests:** update test examples ([#227](https://github.com/stainless-sdks/sink-node-public/issues/227)) ([23f3482](https://github.com/stainless-sdks/sink-node-public/commit/23f34821ca63a0b173445cd6eb61537bf334aa76))

## 0.3.2 (2023-09-25)

Full Changelog: [v0.3.1...v0.3.2](https://github.com/stainless-sdks/sink-node-public/compare/v0.3.1...v0.3.2)

### Features

* **client:** handle retry-after with a date ([#221](https://github.com/stainless-sdks/sink-node-public/issues/221)) ([0889b3b](https://github.com/stainless-sdks/sink-node-public/commit/0889b3b79bb279de881c6cee121302e401de32f3))
* **package:** export a root error type ([#219](https://github.com/stainless-sdks/sink-node-public/issues/219)) ([21d9f91](https://github.com/stainless-sdks/sink-node-public/commit/21d9f910231ea3aaa3f7b3947e143f4d413a838a))

## 0.3.1 (2023-09-22)

Full Changelog: [v0.3.0...v0.3.1](https://github.com/stainless-sdks/sink-node-public/compare/v0.3.0...v0.3.1)

### Documentation

* **api.md:** add shared models ([#217](https://github.com/stainless-sdks/sink-node-public/issues/217)) ([97a63d1](https://github.com/stainless-sdks/sink-node-public/commit/97a63d1954ae62805267bfaf72f710d1e7dcc8ff))

## 0.3.0 (2023-09-21)

Full Changelog: [v0.2.3...v0.3.0](https://github.com/stainless-sdks/sink-node-public/compare/v0.2.3...v0.3.0)

### ⚠ BREAKING CHANGES

* fix capitalization of `Github` to `GitHub` in some places ([#216](https://github.com/stainless-sdks/sink-node-public/issues/216))

### Features

* **api:** add more reserved word testcases ([#214](https://github.com/stainless-sdks/sink-node-public/issues/214)) ([c45055e](https://github.com/stainless-sdks/sink-node-public/commit/c45055e5d7b0ecf36f9f11eec1d30a1bf0666684))


### Refactors

* fix capitalization of `Github` to `GitHub` in some places ([#216](https://github.com/stainless-sdks/sink-node-public/issues/216)) ([77f80cc](https://github.com/stainless-sdks/sink-node-public/commit/77f80cc66d733927197b9463e433701215738e53))

## 0.2.3 (2023-09-20)

Full Changelog: [v0.2.2...v0.2.3](https://github.com/stainless-sdks/sink-node-public/compare/v0.2.2...v0.2.3)

### Features

* **client:** support importing node or web shims manually ([#212](https://github.com/stainless-sdks/sink-node-public/issues/212)) ([eed9024](https://github.com/stainless-sdks/sink-node-public/commit/eed9024ed679fb9e25145ba71f90011d56aec348))

## 0.2.2 (2023-09-20)

Full Changelog: [v0.2.1...v0.2.2](https://github.com/stainless-sdks/sink-node-public/compare/v0.2.1...v0.2.2)

### Bug Fixes

* allow deprecated method aliases ([#210](https://github.com/stainless-sdks/sink-node-public/issues/210)) ([3bed897](https://github.com/stainless-sdks/sink-node-public/commit/3bed8976693fe6ea0b1ec91e14b4e366847c073e))

## 0.2.1 (2023-09-20)

Full Changelog: [v0.2.0...v0.2.1](https://github.com/stainless-sdks/sink-node-public/compare/v0.2.0...v0.2.1)

### Documentation

* **readme:** remove incorrect wording in opening ([#208](https://github.com/stainless-sdks/sink-node-public/issues/208)) ([a3ec243](https://github.com/stainless-sdks/sink-node-public/commit/a3ec2431847e25ccf78bbe5c6ed291adc4b0b1d4))

## 0.2.0 (2023-09-15)

Full Changelog: [v0.1.4...v0.2.0](https://github.com/stainless-sdks/sink-node-public/compare/v0.1.4...v0.2.0)

### ⚠ BREAKING CHANGES

* add an enum value ([#207](https://github.com/stainless-sdks/sink-node-public/issues/207))

### Features

* add an enum value ([#207](https://github.com/stainless-sdks/sink-node-public/issues/207)) ([62cef23](https://github.com/stainless-sdks/sink-node-public/commit/62cef23f9674e7ec38ab445d606ecf25bdba6b56))
* **errors:** add status code to error message ([#206](https://github.com/stainless-sdks/sink-node-public/issues/206)) ([d34d70e](https://github.com/stainless-sdks/sink-node-public/commit/d34d70e2d4d109dbda562bdb87fd0eb143499346))


### Documentation

* declare Bun 1.0 officially supported ([#205](https://github.com/stainless-sdks/sink-node-public/issues/205)) ([9557bb3](https://github.com/stainless-sdks/sink-node-public/commit/9557bb350353ed5de0d6be3d3b97334917e9a6ba))

## 0.1.4 (2023-09-15)

Full Changelog: [v0.1.3...v0.1.4](https://github.com/stainless-sdks/sink-node-public/compare/v0.1.3...v0.1.4)

## 0.1.3 (2023-09-14)

Full Changelog: [v0.1.2...v0.1.3](https://github.com/stainless-sdks/sink-node-public/compare/v0.1.2...v0.1.3)

### Features

* **client:** retry on 408 Request Timeout ([#199](https://github.com/stainless-sdks/sink-node-public/issues/199)) ([6f967d6](https://github.com/stainless-sdks/sink-node-public/commit/6f967d687f24395e856981ba7c3c1e943dc111b0))


### Bug Fixes

* **config:** use correct positional params name in tests ([#197](https://github.com/stainless-sdks/sink-node-public/issues/197)) ([4ff921c](https://github.com/stainless-sdks/sink-node-public/commit/4ff921c0fca0800619298d9149308e7262f311c5))
* fix module not found errors in Vercel edge ([#195](https://github.com/stainless-sdks/sink-node-public/issues/195)) ([2642056](https://github.com/stainless-sdks/sink-node-public/commit/264205619bd7a35c5ca22206c8ecf145b7615611))


### Chores

* bump stats ([#194](https://github.com/stainless-sdks/sink-node-public/issues/194)) ([032cf93](https://github.com/stainless-sdks/sink-node-public/commit/032cf93fca914ecc0a1b3877f463c592d1329f53))
* **internal:** export helper from core ([#191](https://github.com/stainless-sdks/sink-node-public/issues/191)) ([3aaec3c](https://github.com/stainless-sdks/sink-node-public/commit/3aaec3ce82e6a7b2906f1851869ecf41f1ea4358))
* **internal:** minor formatting changes ([#193](https://github.com/stainless-sdks/sink-node-public/issues/193)) ([b262d65](https://github.com/stainless-sdks/sink-node-public/commit/b262d652cb259ea03cdef285bd65346fc113001c))
* **style:** remove redundant renaming in destructures ([#196](https://github.com/stainless-sdks/sink-node-public/issues/196)) ([653a9ba](https://github.com/stainless-sdks/sink-node-public/commit/653a9ba40a9d310e2b5959ed25a2f52f2849672f))

## 0.1.2 (2023-09-06)

Full Changelog: [v0.1.1...v0.1.2](https://github.com/stainless-sdks/sink-node-public/compare/v0.1.1...v0.1.2)

### Features

* add `x-stainless-useDefault` testcase ([#181](https://github.com/stainless-sdks/sink-node-public/issues/181)) ([17f7b5b](https://github.com/stainless-sdks/sink-node-public/commit/17f7b5bca25354d510f7e5b42719238056d582ac))
* add nested pagination property test ([#178](https://github.com/stainless-sdks/sink-node-public/issues/178)) ([04b1bcb](https://github.com/stainless-sdks/sink-node-public/commit/04b1bcb2f49e64fc27133dad08f736fe7392a653))
* add test cases for `only` config usage ([#183](https://github.com/stainless-sdks/sink-node-public/issues/183)) ([a0bec63](https://github.com/stainless-sdks/sink-node-public/commit/a0bec63d171b493639bbfa0688428f0feebf2981))
* add test for doc escaping ([#185](https://github.com/stainless-sdks/sink-node-public/issues/185)) ([533cec7](https://github.com/stainless-sdks/sink-node-public/commit/533cec788882b82aa11d746aa94d07de40dbd81c))
* add test for params model with param in name ([#186](https://github.com/stainless-sdks/sink-node-public/issues/186)) ([f29a5c3](https://github.com/stainless-sdks/sink-node-public/commit/f29a5c34984b9a8b8b1affff22ce604dd1dff522))
* add test for union of numbers ([#179](https://github.com/stainless-sdks/sink-node-public/issues/179)) ([49e10fd](https://github.com/stainless-sdks/sink-node-public/commit/49e10fd3df079a6abc0e245f543d5a2b087f3554))
* add tests for child model references ([#174](https://github.com/stainless-sdks/sink-node-public/issues/174)) ([5e1c57d](https://github.com/stainless-sdks/sink-node-public/commit/5e1c57df5b7b3891354a0db8ce44a64526ff49d0))
* add tests for optional file params ([#187](https://github.com/stainless-sdks/sink-node-public/issues/187)) ([c0856dd](https://github.com/stainless-sdks/sink-node-public/commit/c0856ddc53abd68d08b7b150e8efe694ee1195cf))
* add tests for union items in arrays ([#177](https://github.com/stainless-sdks/sink-node-public/issues/177)) ([23cc577](https://github.com/stainless-sdks/sink-node-public/commit/23cc5773b5b613c32808a697b40e70ed99dd36f7))
* fixes tests where an array has to have unique enum values ([#188](https://github.com/stainless-sdks/sink-node-public/issues/188)) ([54722b6](https://github.com/stainless-sdks/sink-node-public/commit/54722b6de96a591438911064f47771129747e44e))
* more params types tests ([#176](https://github.com/stainless-sdks/sink-node-public/issues/176)) ([bdae883](https://github.com/stainless-sdks/sink-node-public/commit/bdae8835ab2d0fd1e434693a0995dff3a17e1aa3))


### Bug Fixes

* **client:** fix TS errors that appear when users Go to Source in VSCode ([#182](https://github.com/stainless-sdks/sink-node-public/issues/182)) ([39c8833](https://github.com/stainless-sdks/sink-node-public/commit/39c88331213054954fee9b557658f5eef578a01c))
* **client:** handle case where the client is instantiated with a undefined baseURL ([#184](https://github.com/stainless-sdks/sink-node-public/issues/184)) ([7bdd0d3](https://github.com/stainless-sdks/sink-node-public/commit/7bdd0d36c5470016ad7d136b1f4be2a05924d785))
* **client:** use explicit file extensions in _shims imports ([#180](https://github.com/stainless-sdks/sink-node-public/issues/180)) ([322308c](https://github.com/stainless-sdks/sink-node-public/commit/322308cf2026cc62ba7157724bbe9623a54fa717))
* **readme:** update link to api.md to use the correct branch ([#190](https://github.com/stainless-sdks/sink-node-public/issues/190)) ([fc3f45c](https://github.com/stainless-sdks/sink-node-public/commit/fc3f45c21e941afe68be79d51ee7584a05d1c5dc))


### Documentation

* **readme:** add link to api.md ([#189](https://github.com/stainless-sdks/sink-node-public/issues/189)) ([9369d89](https://github.com/stainless-sdks/sink-node-public/commit/9369d8938241e7efbfe4a564e6ffdb8bf7776552))

## 0.1.1 (2023-08-31)

Full Changelog: [v0.1.0...v0.1.1](https://github.com/stainless-sdks/sink-node-public/compare/v0.1.0...v0.1.1)

### Features

* add test case for null property ([#170](https://github.com/stainless-sdks/sink-node-public/issues/170)) ([38f1f6a](https://github.com/stainless-sdks/sink-node-public/commit/38f1f6aa0e23f8a1e9b5cb7fd0a413cb6ed74f4e))
* add test for method named get ([#171](https://github.com/stainless-sdks/sink-node-public/issues/171)) ([084a8ab](https://github.com/stainless-sdks/sink-node-public/commit/084a8abe31345748742210884b67280a70adcb0d))
* add tests for complex union types in params ([#169](https://github.com/stainless-sdks/sink-node-public/issues/169)) ([de15cc4](https://github.com/stainless-sdks/sink-node-public/commit/de15cc4d167bd237712e2cc5ff3e66a5e61ac8cb))
* **package:** add Bun export map ([#172](https://github.com/stainless-sdks/sink-node-public/issues/172)) ([edeaf35](https://github.com/stainless-sdks/sink-node-public/commit/edeaf350d7bd55a9d0be90143252f024395a98ca))
* sync ([#168](https://github.com/stainless-sdks/sink-node-public/issues/168)) ([e6b26d0](https://github.com/stainless-sdks/sink-node-public/commit/e6b26d07dfd9bc81d14bb7618ae646ff4b3fb117))


### Bug Fixes

* **types:** improve getNextPage() return type ([#165](https://github.com/stainless-sdks/sink-node-public/issues/165)) ([341e853](https://github.com/stainless-sdks/sink-node-public/commit/341e853e20612c9cc8207627f0a84eaed862099a))

## 0.1.0 (2023-08-28)

Full Changelog: [sink-npm-v0.0.2...sink-npm-v0.1.0](https://github.com/stainless-sdks/sink-node-public/compare/sink-npm-v0.0.2...sink-npm-v0.1.0)

### ⚠ BREAKING CHANGES

* **client:** Stream.toReadableStream() has been removed
* **client:** support accessing raw response + remove deprecated features ([#131](https://github.com/stainless-sdks/sink-node-public/issues/131))
* import issue with ESM ([#77](https://github.com/stainless-sdks/sink-node-public/issues/77))
* drop official support for EOL Node versions (Node 12, 13, 14, 15) ([#60](https://github.com/stainless-sdks/sink-node-public/issues/60))

### Features

* add ambiguous schemas and transforms on them ([#24](https://github.com/stainless-sdks/sink-node-public/issues/24)) ([11db471](https://github.com/stainless-sdks/sink-node-public/commit/11db4716735d4e52dc0157c01aad34ecea032fd6))
* add cases for skipped methods in individual languages ([#47](https://github.com/stainless-sdks/sink-node-public/issues/47)) ([d536596](https://github.com/stainless-sdks/sink-node-public/commit/d536596198c031ecab669203ceaa99d3d3e0398e))
* add client argument without environment variable ([#35](https://github.com/stainless-sdks/sink-node-public/issues/35)) ([69f3732](https://github.com/stainless-sdks/sink-node-public/commit/69f373275086fc1c144df0d3b8c522f1e8435cd3))
* add endpoint for streaming from a query param ([#57](https://github.com/stainless-sdks/sink-node-public/issues/57)) ([21e020b](https://github.com/stainless-sdks/sink-node-public/commit/21e020b09fcd467a515a8d61c574e5143c12eb39))
* add method for testing file uploads ([#50](https://github.com/stainless-sdks/sink-node-public/issues/50)) ([8545e22](https://github.com/stainless-sdks/sink-node-public/commit/8545e22070d7ccd36100e7a7a6f03078d798845b))
* add method to test wrapped unknown responses ([#42](https://github.com/stainless-sdks/sink-node-public/issues/42)) ([4b637b3](https://github.com/stainless-sdks/sink-node-public/commit/4b637b333e4a9c6deb99b945423e35125a41de7f))
* add more test cases ([#34](https://github.com/stainless-sdks/sink-node-public/issues/34)) ([fa692d5](https://github.com/stainless-sdks/sink-node-public/commit/fa692d52b89a08712a0dc11c0b71240f3e691a04))
* add more test methods ([#46](https://github.com/stainless-sdks/sink-node-public/issues/46)) ([6e5eece](https://github.com/stainless-sdks/sink-node-public/commit/6e5eece24661b9f7598b1959898e9a9b8f8e183f))
* add some tests for name clashes ([#132](https://github.com/stainless-sdks/sink-node-public/issues/132)) ([494e088](https://github.com/stainless-sdks/sink-node-public/commit/494e088f7220df691d44ff85b9980d54bdd449ac))
* add support for custom request options ([#162](https://github.com/stainless-sdks/sink-node-public/issues/162)) ([35ef0a0](https://github.com/stainless-sdks/sink-node-public/commit/35ef0a0a0ac72d7708ffb69dd997d5f612ff4554))
* add test cases for duplicate param names ([#158](https://github.com/stainless-sdks/sink-node-public/issues/158)) ([8c7f9f1](https://github.com/stainless-sdks/sink-node-public/commit/8c7f9f1b841db3d64f5477849b1093e6bb155b4c))
* add test for custom dev dependencies ([#41](https://github.com/stainless-sdks/sink-node-public/issues/41)) ([2c05dd3](https://github.com/stainless-sdks/sink-node-public/commit/2c05dd3b20aa91f7d4c5fd0d705b4b976f079144))
* add test for naming clash ([#63](https://github.com/stainless-sdks/sink-node-public/issues/63)) ([a2bf2e0](https://github.com/stainless-sdks/sink-node-public/commit/a2bf2e01a434bc0669b738da04d56f12c7c393a5))
* add test for nested streaming params ([#55](https://github.com/stainless-sdks/sink-node-public/issues/55)) ([2711714](https://github.com/stainless-sdks/sink-node-public/commit/27117140c033e972ac563ebe6d1f5ad816619143))
* add tests for casing ([#32](https://github.com/stainless-sdks/sink-node-public/issues/32)) ([9c8d6de](https://github.com/stainless-sdks/sink-node-public/commit/9c8d6de322d03db3fcce1573fa78bcd62bc6c065))
* add tests for envelope unwrapping arrays ([#145](https://github.com/stainless-sdks/sink-node-public/issues/145)) ([1724f0d](https://github.com/stainless-sdks/sink-node-public/commit/1724f0ddb80b1d7594f49a01d023030058a005cc))
* add tests for mixed query and body params ([#49](https://github.com/stainless-sdks/sink-node-public/issues/49)) ([46e6806](https://github.com/stainless-sdks/sink-node-public/commit/46e6806a160840ad6b200e7f61dce7df6af0d0c4))
* add tests for model import clashing ([#160](https://github.com/stainless-sdks/sink-node-public/issues/160)) ([39db69e](https://github.com/stainless-sdks/sink-node-public/commit/39db69e34211cd2618cbf715ddc0d4ead743acec))
* add tests for non-string path params ([#56](https://github.com/stainless-sdks/sink-node-public/issues/56)) ([4752908](https://github.com/stainless-sdks/sink-node-public/commit/47529082e532fb791f7e4f3cf34226addd56ec81))
* add tests for reserved names ([#157](https://github.com/stainless-sdks/sink-node-public/issues/157)) ([04c4602](https://github.com/stainless-sdks/sink-node-public/commit/04c4602230283ffe391d24aa49c8caa3066d8cb4))
* add tests for various cases ([#54](https://github.com/stainless-sdks/sink-node-public/issues/54)) ([8feebd5](https://github.com/stainless-sdks/sink-node-public/commit/8feebd506154ba90f1fe4ef38d2602796cbaed70))
* add types to test python imports ([#140](https://github.com/stainless-sdks/sink-node-public/issues/140)) ([3a68a68](https://github.com/stainless-sdks/sink-node-public/commit/3a68a6806b555bce8d52a514bdee99384981df1c))
* add union in response test case ([#53](https://github.com/stainless-sdks/sink-node-public/issues/53)) ([c0796bb](https://github.com/stainless-sdks/sink-node-public/commit/c0796bb7120bdd290ffd505b904d0fbe1c7cff44))
* allOf models now have toXxx methods to access the separate allOf models ([#133](https://github.com/stainless-sdks/sink-node-public/issues/133)) ([b9cc64f](https://github.com/stainless-sdks/sink-node-public/commit/b9cc64f1bab847651f74d94d3adb82e81e4d977e))
* allow a default timeout to be set for clients ([#139](https://github.com/stainless-sdks/sink-node-public/issues/139)) ([d5c3cca](https://github.com/stainless-sdks/sink-node-public/commit/d5c3ccaaacd079b0969111f798ace1f83f0f3e7c))
* **api:** add cross referenced and nested allOf case to sink ([#109](https://github.com/stainless-sdks/sink-node-public/issues/109)) ([cee3948](https://github.com/stainless-sdks/sink-node-public/commit/cee3948d1aa633d594ec2cf02f675828b6462a5b))
* **api:** add routes to test array and object query params ([#104](https://github.com/stainless-sdks/sink-node-public/issues/104)) ([e00de67](https://github.com/stainless-sdks/sink-node-public/commit/e00de676ddae613c537a21bbe9aeac35b8b78051))
* **api:** updates ([#141](https://github.com/stainless-sdks/sink-node-public/issues/141)) ([4e5ffbb](https://github.com/stainless-sdks/sink-node-public/commit/4e5ffbb932135177f4bc6328523bf5088f9a54ba))
* **ci:** add publish-npm script ([86cc964](https://github.com/stainless-sdks/sink-node-public/commit/86cc964333ef8327125909bece461ac9e335899c))
* **cli:** add auto-migration support ([#128](https://github.com/stainless-sdks/sink-node-public/issues/128)) ([6d547ff](https://github.com/stainless-sdks/sink-node-public/commit/6d547ff290b02ad2cc527e082f315573966ffbeb))
* **client:** add multipart form data tests ([#130](https://github.com/stainless-sdks/sink-node-public/issues/130)) ([8fd1ce7](https://github.com/stainless-sdks/sink-node-public/commit/8fd1ce7e2060b83cabd357bffee1618e20dc174e))
* **client:** add support for `defaultQuery` option ([#75](https://github.com/stainless-sdks/sink-node-public/issues/75)) ([32b0217](https://github.com/stainless-sdks/sink-node-public/commit/32b0217deae032119ae75a6e316fb249fca77f9b))
* **client:** add support for passing a `signal` request option ([#96](https://github.com/stainless-sdks/sink-node-public/issues/96)) ([85594dc](https://github.com/stainless-sdks/sink-node-public/commit/85594dc861302b7062d910f8d5fdb8e7291e1253))
* **client:** add support for specifying client-level default headers ([#44](https://github.com/stainless-sdks/sink-node-public/issues/44)) ([3e6f1a3](https://github.com/stainless-sdks/sink-node-public/commit/3e6f1a3a79296a5216e5d1fe5c50d616b1a6d45b))
* **client:** detect browser usage ([#120](https://github.com/stainless-sdks/sink-node-public/issues/120)) ([e383724](https://github.com/stainless-sdks/sink-node-public/commit/e383724b2d57034012f4670080983c169c98a0b5))
* **client:** export ClientOptions interface ([#106](https://github.com/stainless-sdks/sink-node-public/issues/106)) ([bb9cfa5](https://github.com/stainless-sdks/sink-node-public/commit/bb9cfa53a776c26f9c1e12737ca17b1ee64a3577))
* **client:** handle trailing slash in base url properly ([#39](https://github.com/stainless-sdks/sink-node-public/issues/39)) ([cadc278](https://github.com/stainless-sdks/sink-node-public/commit/cadc2786dfad5f8f0726208252c4c3b39041533e))
* **client:** improve compatibility with Bun ([#146](https://github.com/stainless-sdks/sink-node-public/issues/146)) ([6915c6c](https://github.com/stainless-sdks/sink-node-public/commit/6915c6c62c37cee63abeac451c472d0a15de4866))
* **client:** improve timeout handling to reuse agent ([#89](https://github.com/stainless-sdks/sink-node-public/issues/89)) ([c34a49e](https://github.com/stainless-sdks/sink-node-public/commit/c34a49e423763b03fd29fcbe0be7b77fec9a08bd))
* **client:** support accessing raw response + remove deprecated features ([#131](https://github.com/stainless-sdks/sink-node-public/issues/131)) ([534e114](https://github.com/stainless-sdks/sink-node-public/commit/534e1145eaf66f6e9764405e76bc6bc1e8315068))
* **client:** support passing a custom `fetch` function ([#92](https://github.com/stainless-sdks/sink-node-public/issues/92)) ([f59a27b](https://github.com/stainless-sdks/sink-node-public/commit/f59a27bf6401e21e1fb84b5f8db1d19b565f34f4))
* **cli:** rewrite in JS for better compatibility ([#156](https://github.com/stainless-sdks/sink-node-public/issues/156)) ([cd7f76a](https://github.com/stainless-sdks/sink-node-public/commit/cd7f76ae474101e151db2927e29101f868f3c59e))
* **docs:** add documentation to the client constructor ([#144](https://github.com/stainless-sdks/sink-node-public/issues/144)) ([01729bd](https://github.com/stainless-sdks/sink-node-public/commit/01729bd243210d2e4672e5a4b7a0eba8589d2abd))
* make pagination response properties nullable ([#37](https://github.com/stainless-sdks/sink-node-public/issues/37)) ([fdb3fd0](https://github.com/stainless-sdks/sink-node-public/commit/fdb3fd0feb3cacbb740ba4ac96000afeaf4e9bc9))
* **streaming:** add `.toReadableStream()` method ([#124](https://github.com/stainless-sdks/sink-node-public/issues/124)) ([f1d8629](https://github.com/stainless-sdks/sink-node-public/commit/f1d8629115a5d82d355b0b8a7236f4ae1f5e8a6c))
* **streaming:** make requests immediately throw an error if an aborted signal is passed in ([#108](https://github.com/stainless-sdks/sink-node-public/issues/108)) ([cbe58c5](https://github.com/stainless-sdks/sink-node-public/commit/cbe58c556e57b8abec60fd413bcf9c1bb11b5494))
* support ESM and web platform runtimes; easier file uploads ([#67](https://github.com/stainless-sdks/sink-node-public/issues/67)) ([2ab52c1](https://github.com/stainless-sdks/sink-node-public/commit/2ab52c17b8288f6cab38d34097401bc63d3e1f38))
* test code blocks in commit messages ([#80](https://github.com/stainless-sdks/sink-node-public/issues/80)) ([9c6bbe9](https://github.com/stainless-sdks/sink-node-public/commit/9c6bbe9d64cc3186668258b7e69badf44f527657))
* tests for skipping object properties ([#148](https://github.com/stainless-sdks/sink-node-public/issues/148)) ([9cf9102](https://github.com/stainless-sdks/sink-node-public/commit/9cf9102efab4fd06be06813dbb009a5d67115043))
* **test:** unskip file uploads tests ([#116](https://github.com/stainless-sdks/sink-node-public/issues/116)) ([06328fc](https://github.com/stainless-sdks/sink-node-public/commit/06328fc8646e733896b93978524962a7f505fad0))
* **types:** export RequestOptions type ([#154](https://github.com/stainless-sdks/sink-node-public/issues/154)) ([6f8ebb9](https://github.com/stainless-sdks/sink-node-public/commit/6f8ebb9bd9fc8ebbbf54819732548453f4cb3fb9))
* **types:** improve streaming params types ([#121](https://github.com/stainless-sdks/sink-node-public/issues/121)) ([5b7fdb2](https://github.com/stainless-sdks/sink-node-public/commit/5b7fdb2d395e3efc7b4257caec5e5b318bf9c111))
* **types:** remove footgun with streaming params ([#152](https://github.com/stainless-sdks/sink-node-public/issues/152)) ([ba74ee2](https://github.com/stainless-sdks/sink-node-public/commit/ba74ee28009e85ea008075e61973bab6d68565a0))


### Bug Fixes

* change unspecified response model name generation ([#65](https://github.com/stainless-sdks/sink-node-public/issues/65)) ([992146a](https://github.com/stainless-sdks/sink-node-public/commit/992146aff2cd4cfa36d58d4723b850abfef79269))
* **ci:** publishing step ([#22](https://github.com/stainless-sdks/sink-node-public/issues/22)) ([de6a7e7](https://github.com/stainless-sdks/sink-node-public/commit/de6a7e77402081a2e1a68e221c526cb48ddf325b))
* **client:** fix errors with file uploads in the browser ([#107](https://github.com/stainless-sdks/sink-node-public/issues/107)) ([6fba85a](https://github.com/stainless-sdks/sink-node-public/commit/6fba85a29d3d5dbc4a004fe43452af9980196a80))
* **client:** fix TypeError when a request gets retried ([#143](https://github.com/stainless-sdks/sink-node-public/issues/143)) ([1295e56](https://github.com/stainless-sdks/sink-node-public/commit/1295e560c4048dd4c0b827489e53fcd7adea05dd))
* **client:** handle undefined process in more places ([#111](https://github.com/stainless-sdks/sink-node-public/issues/111)) ([e1215a0](https://github.com/stainless-sdks/sink-node-public/commit/e1215a0533d251c98d43445ecebd9967436d6dc3))
* **client:** properly expose `maxRetries` option ([#31](https://github.com/stainless-sdks/sink-node-public/issues/31)) ([77a6e9c](https://github.com/stainless-sdks/sink-node-public/commit/77a6e9c89c265f4415ea2d283cabe2a3a2ef7c28))
* **client:** properly handle multi-byte characters in Content-Length ([#93](https://github.com/stainless-sdks/sink-node-public/issues/93)) ([72640c8](https://github.com/stainless-sdks/sink-node-public/commit/72640c845c07eeefa67c1bf473ed48d06433b417))
* **core:** fix navigator check for strange environments ([#151](https://github.com/stainless-sdks/sink-node-public/issues/151)) ([0db3a2c](https://github.com/stainless-sdks/sink-node-public/commit/0db3a2cf90bdd3b61f2ac0cf490718065be2ef94))
* fix error in environments without `TextEncoder` ([#103](https://github.com/stainless-sdks/sink-node-public/issues/103)) ([aae11f8](https://github.com/stainless-sdks/sink-node-public/commit/aae11f883d12267c9c2d4a8e980ab67b3c1a50a2))
* fix errors in package source files when users go to definition in VSCode ([#88](https://github.com/stainless-sdks/sink-node-public/issues/88)) ([3fb7d0e](https://github.com/stainless-sdks/sink-node-public/commit/3fb7d0ec6f32214b0318cd68f94463db840d05ea))
* fix errors with "named" client export in CJS ([#101](https://github.com/stainless-sdks/sink-node-public/issues/101)) ([3c709a9](https://github.com/stainless-sdks/sink-node-public/commit/3c709a95d9252f65776e3db166c80603ec89f528))
* fix export map order ([#105](https://github.com/stainless-sdks/sink-node-public/issues/105)) ([56ceb74](https://github.com/stainless-sdks/sink-node-public/commit/56ceb742a2b8b7f6cf891fbd7ebc884dbe69f237))
* fix undefined message in errors ([#110](https://github.com/stainless-sdks/sink-node-public/issues/110)) ([5f03e59](https://github.com/stainless-sdks/sink-node-public/commit/5f03e59b36e9e3cac70362a023aeef55f1abf17a))
* **form-data:** strip out undefined properties ([#62](https://github.com/stainless-sdks/sink-node-public/issues/62)) ([b3cedee](https://github.com/stainless-sdks/sink-node-public/commit/b3cedee283bdc32f3218a53b5230381470a7da56))
* import issue with ESM ([#77](https://github.com/stainless-sdks/sink-node-public/issues/77)) ([b5d8ee4](https://github.com/stainless-sdks/sink-node-public/commit/b5d8ee425b23521cae27da7fb750457949c54835))
* include README.md, LICENSE and CHANGELOG.md in published package ([#85](https://github.com/stainless-sdks/sink-node-public/issues/85)) ([0180d1d](https://github.com/stainless-sdks/sink-node-public/commit/0180d1d8b3e2ef43043ed5068fe46f9c19001783))
* **internal:** improve stream cancellation handling of abort controllers ([#59](https://github.com/stainless-sdks/sink-node-public/issues/59)) ([46a90c5](https://github.com/stainless-sdks/sink-node-public/commit/46a90c533260362fc847992c0b393390ba87a295))
* **sse:** handle server-sent events more robustly ([#40](https://github.com/stainless-sdks/sink-node-public/issues/40)) ([176fbd8](https://github.com/stainless-sdks/sink-node-public/commit/176fbd8732ebc9f9579bffb91d5d6d0fd37e35a8))
* **stream:** declare Stream.controller as public ([#161](https://github.com/stainless-sdks/sink-node-public/issues/161)) ([856fdab](https://github.com/stainless-sdks/sink-node-public/commit/856fdab14891e310f0620697e984e12a098944cd))
* **streaming:** do not abort successfully completed streams ([#95](https://github.com/stainless-sdks/sink-node-public/issues/95)) ([3dd03b6](https://github.com/stainless-sdks/sink-node-public/commit/3dd03b6d0fdae86a7c0578394e0cb120ad7790fe))
* **streaming:** fix response body streaming in non-Chrome environments ([#90](https://github.com/stainless-sdks/sink-node-public/issues/90)) ([a25e9c8](https://github.com/stainless-sdks/sink-node-public/commit/a25e9c84df65570664abb01d3aa990ce1f2025c4))
* **streaming:** polyfill ReadableStream async iterator and text decoding ([#84](https://github.com/stainless-sdks/sink-node-public/issues/84)) ([d583237](https://github.com/stainless-sdks/sink-node-public/commit/d5832374c26b6ae158d5ca27aff28b9faaa73061))
* support `PromiseLike` input to `toFile` ([#87](https://github.com/stainless-sdks/sink-node-public/issues/87)) ([fcd815d](https://github.com/stainless-sdks/sink-node-public/commit/fcd815d5934fe84b5ded6d4f2da3a5a024a4369b))
* **types:** add catch-all overload to streaming methods ([#150](https://github.com/stainless-sdks/sink-node-public/issues/150)) ([0616952](https://github.com/stainless-sdks/sink-node-public/commit/0616952239f044fe5e6989602856df2496ca41f5))
* **types:** remove incorrect duplicated `Promise` from some return types ([#71](https://github.com/stainless-sdks/sink-node-public/issues/71)) ([e480b61](https://github.com/stainless-sdks/sink-node-public/commit/e480b61860960e6fad58cc521efece65aa72381a))


### Documentation

* drop official support for EOL Node versions (Node 12, 13, 14, 15) ([#60](https://github.com/stainless-sdks/sink-node-public/issues/60)) ([f4558f1](https://github.com/stainless-sdks/sink-node-public/commit/f4558f1ff721e01ac4533f0e6d931d06c5be6e99))


### Code Refactoring

* **client:** remove Stream.toReadableStream() ([#138](https://github.com/stainless-sdks/sink-node-public/issues/138)) ([610c6bc](https://github.com/stainless-sdks/sink-node-public/commit/610c6bc52eb82a87d29f7f9974ecbf1b33619e9f))

## [0.0.2](https://github.com/stainless-sdks/sink-node-public/compare/sink-npm-v0.0.1...sink-npm-v0.0.2) (2023-04-28)

### Features

- add additional coercion functions ([b73c073](https://github.com/stainless-sdks/sink-node-public/commit/b73c0737501d49d06e70a3e2d32be8008311525d))
- add constants for testing ([d67e555](https://github.com/stainless-sdks/sink-node-public/commit/d67e5551bc0554f90d6e66cd2ef395acc3868e8f))
- add deprecated methods ([9189f43](https://github.com/stainless-sdks/sink-node-public/commit/9189f43b1527e97444ebcb422ee6096991a6c78e))
- add internal support for streaming responses ([78d345a](https://github.com/stainless-sdks/sink-node-public/commit/78d345a79987a85882c40a8a45875e4a5f8ceaf6))
- add internal support for streaming responses ([78d345a](https://github.com/stainless-sdks/sink-node-public/commit/78d345a79987a85882c40a8a45875e4a5f8ceaf6))
- add methods to test direct array responses ([b6411ed](https://github.com/stainless-sdks/sink-node-public/commit/b6411ede7a9f3b6295f119b9d41cf76356a662ab))
- add methods to test direct array responses ([b6411ed](https://github.com/stainless-sdks/sink-node-public/commit/b6411ede7a9f3b6295f119b9d41cf76356a662ab))
- add support for empty objects ([c670c92](https://github.com/stainless-sdks/sink-node-public/commit/c670c92a99aff89f8c7e0aedf73e8c253a168e91))
- add support for empty objects ([c670c92](https://github.com/stainless-sdks/sink-node-public/commit/c670c92a99aff89f8c7e0aedf73e8c253a168e91))
- add testing methods ([4d770a5](https://github.com/stainless-sdks/sink-node-public/commit/4d770a5562244825981968c95a3dc326191fe750))
- add testing methods ([4d770a5](https://github.com/stainless-sdks/sink-node-public/commit/4d770a5562244825981968c95a3dc326191fe750))
- add webhook HMAC verification helper methods ([2bfffe8](https://github.com/stainless-sdks/sink-node-public/commit/2bfffe8a238b52a7c7aa0cc9135e43f268de8d41))
- **api:** add foo method ([c22a790](https://github.com/stainless-sdks/sink-node-public/commit/c22a79047f4a7e3a89280a97c40684f118d1d597))
- **api:** add foo method ([#13](https://github.com/stainless-sdks/sink-node-public/issues/13)) ([89e5232](https://github.com/stainless-sdks/sink-node-public/commit/89e5232dff8b3303de6a675fb466e3be301f3b3c))
- **api:** add my new method ([#14](https://github.com/stainless-sdks/sink-node-public/issues/14)) ([1ac2358](https://github.com/stainless-sdks/sink-node-public/commit/1ac2358ea26aae50254a31919b99fbe56285f06b))
- **api:** add my new method ([#15](https://github.com/stainless-sdks/sink-node-public/issues/15)) ([5b32fc5](https://github.com/stainless-sdks/sink-node-public/commit/5b32fc5cb6b7432356427f3b750be1a3e36523d1))
- authorizations headers are now handled by default headers ([d35432c](https://github.com/stainless-sdks/sink-node-public/commit/d35432c32c239bf5e2909076a9a56911ee8bb1d4))
- **ci:** configure automatica releases ([#17](https://github.com/stainless-sdks/sink-node-public/issues/17)) ([4cdaf53](https://github.com/stainless-sdks/sink-node-public/commit/4cdaf53c823ab7b5660d18e007b5a8e53e416573))
- **ci:** implement auto-publish script ([#19](https://github.com/stainless-sdks/sink-node-public/issues/19)) ([997fc5a](https://github.com/stainless-sdks/sink-node-public/commit/997fc5a7aeabd82f23801386db7bf549983c5d2c))
- **core:** add support for dictionary responses ([3da0bf5](https://github.com/stainless-sdks/sink-node-public/commit/3da0bf53a225a2774471a64a0c9c731836774de7))
- **core:** add support for dictionary responses ([3da0bf5](https://github.com/stainless-sdks/sink-node-public/commit/3da0bf53a225a2774471a64a0c9c731836774de7))
- generate auth methods ([dedd235](https://github.com/stainless-sdks/sink-node-public/commit/dedd2356b1cc9588a8d6c4f09ca318389a9c2086))
- generate Go tests ([16a7883](https://github.com/stainless-sdks/sink-node-public/commit/16a788319e1be8d53942447e326bfa5010a5792d))
- **internal:** improve example generation ([050b148](https://github.com/stainless-sdks/sink-node-public/commit/050b1485d73d611ec0121a9e825906866b8c425d))
- **internal:** improve example generation ([050b148](https://github.com/stainless-sdks/sink-node-public/commit/050b1485d73d611ec0121a9e825906866b8c425d))
- **internal:** re-export `fileFromPath` helper util from the root ([05c9a2f](https://github.com/stainless-sdks/sink-node-public/commit/05c9a2fc99b8a79a0b6aa8294606eb1f55f1441e))
- **internal:** re-export `fileFromPath` helper util from the root ([05c9a2f](https://github.com/stainless-sdks/sink-node-public/commit/05c9a2fc99b8a79a0b6aa8294606eb1f55f1441e))
- remove unnecessary nulls ([59e6216](https://github.com/stainless-sdks/sink-node-public/commit/59e6216890375a9100c938f0e963c60608201200))
- test passing client arguments through as headers ([70677e8](https://github.com/stainless-sdks/sink-node-public/commit/70677e87a1d9c2388563829532c573751b914c03))
- test passing client arguments through as headers ([70677e8](https://github.com/stainless-sdks/sink-node-public/commit/70677e87a1d9c2388563829532c573751b914c03))
- **tsconfig:** set declarationMap: true ([3b3a391](https://github.com/stainless-sdks/sink-node-public/commit/3b3a391b61efc52263f412195f271e89a64bf9f5))
- **tsconfig:** set declarationMap: true ([3b3a391](https://github.com/stainless-sdks/sink-node-public/commit/3b3a391b61efc52263f412195f271e89a64bf9f5))

### Bug Fixes

- allow importing in typescript without manually installing @types/web ([e57c610](https://github.com/stainless-sdks/sink-node-public/commit/e57c610ed3ce7e552d9a8b860df86c43bf69d680))
- bump @types/node version ([edc83f7](https://github.com/stainless-sdks/sink-node-public/commit/edc83f724a722127f516f552abacc45e8df7893b))
- compile errors and failing tests ([58ee05d](https://github.com/stainless-sdks/sink-node-public/commit/58ee05d7ea78b275f5fe0f7bcac9a875048f4d61))
- **internal:** fix TS error when setting global AbortController polyfill ([71557e6](https://github.com/stainless-sdks/sink-node-public/commit/71557e6dd5f0d8480fb5f7765c446d11eb1a4bd3))
- **internal:** fix TS error when setting global AbortController polyfill ([71557e6](https://github.com/stainless-sdks/sink-node-public/commit/71557e6dd5f0d8480fb5f7765c446d11eb1a4bd3))
- polyfill AbortController more safely ([0b65d33](https://github.com/stainless-sdks/sink-node-public/commit/0b65d33ec49ddcd3ceb11211ad51fbd000982d16))
- polyfill AbortController more safely ([0b65d33](https://github.com/stainless-sdks/sink-node-public/commit/0b65d33ec49ddcd3ceb11211ad51fbd000982d16))

### Reverts

- remove `crypto` module import ([7b44181](https://github.com/stainless-sdks/sink-node-public/commit/7b44181d5c9b2abed71ba733e303c9fa68cf21ae))
- remove `crypto` module import ([7b44181](https://github.com/stainless-sdks/sink-node-public/commit/7b44181d5c9b2abed71ba733e303c9fa68cf21ae))
