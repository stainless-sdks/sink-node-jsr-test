# Testing

Models:

- <code><a href="./resources/testing.ts">TestingRootResponse</a></code>

Methods:

- <code title="get /">client.testing.<a href="./resources/testing.ts">root</a>() -> Promise<Core.APIResponse<TestingRootResponse>></code>

# Cards

Models:

- <code><a href="./resources/cards.ts">Card</a></code>
- <code><a href="./resources/cards.ts">CardAlias</a></code>
- <code><a href="./resources/cards.ts">FundingAccount</a></code>
- <code><a href="./resources/cards.ts">CardProvisionFooResponse</a></code>

Methods:

- <code title="post /cards">client.cards.<a href="./resources/cards.ts">create</a>({ ...params }) -> Promise<Core.APIResponse<Card>></code>
- <code title="get /cards/{card_token}">client.cards.<a href="./resources/cards.ts">retrieve</a>(cardToken) -> Promise<Core.APIResponse<Card>></code>
- <code title="patch /cards/{card_token}">client.cards.<a href="./resources/cards.ts">update</a>(cardToken, { ...params }) -> Promise<Core.APIResponse<Card>></code>
- <code title="get /cards">client.cards.<a href="./resources/cards.ts">list</a>({ ...params }) -> Core.PagePromise<CardsPageNumber></code>
- <code title="post /cards/list">client.cards.<a href="./resources/cards.ts">listNonGet</a>() -> Core.PagePromise<CardsPageNumber></code>
- <code title="get /cards/{card_token}">client.cards.<a href="./resources/cards.ts">listNotPaginated</a>(cardToken) -> Promise<Core.APIResponse<Card>></code>
- <code title="post /cards/{card_token}/provision">client.cards.<a href="./resources/cards.ts">provisionFoo</a>(cardToken, { ...params }) -> Promise<Core.APIResponse<CardProvisionFooResponse>></code>
- <code title="post /cards/{card_token}/reissue">client.cards.<a href="./resources/cards.ts">reissue</a>(cardToken, { ...params }) -> Promise<Core.APIResponse<Card>></code>

# Resources

Methods:

- <code title="post /no_response">client.resources.<a href="./resources/resources.ts">foo</a>() -> Promise<void></code>

# ConfigTools

# CompanyResource

Models:

- <code><a href="./resources/company/company.ts">Company</a></code>

## Payments

Models:

- <code><a href="./resources/company/payments.ts">CompanyPayment</a></code>

Methods:

- <code title="get /company/payments/{payment_id}">client.company.payments.<a href="./resources/company/payments.ts">retrieve</a>(paymentId) -> Promise<Core.APIResponse<CompanyPayment>></code>

# Sta_563

Models:

- <code><a href="./resources/sta-563.ts">DeleteEmptyObjectResponse</a></code>

Methods:

- <code title="delete /sta_563_empty_object">client.sta_563.<a href="./resources/sta-563.ts">deleteEmptyObject</a>() -> Promise<Core.APIResponse<unknown>></code>

# Sta_569

Models:

- <code><a href="./resources/sta-569.ts">Sta_569OneEntryResponse</a></code>
- <code><a href="./resources/sta-569.ts">Sta_569OneEntryWithNullResponse</a></code>

Methods:

- <code title="post /sta_569_array_types/one_entry">client.sta_569.<a href="./resources/sta-569.ts">oneEntry</a>({ ...params }) -> Promise<Core.APIResponse<Sta_569OneEntryResponse>></code>
- <code title="post /sta_569_array_types/one_entry_with_null">client.sta_569.<a href="./resources/sta-569.ts">oneEntryWithNull</a>({ ...params }) -> Promise<Core.APIResponse<Sta_569OneEntryWithNullResponse | null>></code>

# Sta_630

Models:

- <code><a href="./resources/sta-630.ts">GithubUser</a></code>
- <code><a href="./resources/sta-630.ts">GithubUserPreferences</a></code>

Methods:

- <code title="get /sta_630/define_models_nested_path">client.sta_630.<a href="./resources/sta-630.ts">nestedPath</a>() -> Promise<Core.APIResponse<GithubUser>></code>

# Parent

## Child

Models:

- <code><a href="./resources/parent/child.ts">ChildInlinedResponseResponse</a></code>

Methods:

- <code title="get /inlined_response">client.parent.child.<a href="./resources/parent/child.ts">inlinedResponse</a>() -> Promise<Core.APIResponse<ChildInlinedResponseResponse>></code>

# Sta_606

Methods:

- <code title="post /sta_606_shared_types/response">client.sta_606.<a href="./resources/sta-606.ts">withSharedModel</a>() -> Promise<Core.APIResponse<ObjectWithChildRef>></code>
- <code title="post /sta_606_shared_types/request_params">client.sta_606.<a href="./resources/sta-606.ts">withSharedParams</a>({ ...params }) -> Promise<void></code>

# Envelopes

Models:

- <code><a href="./resources/envelopes.ts">Address</a></code>
- <code><a href="./resources/envelopes.ts">EnvelopeInlineResponseResponse</a></code>

Methods:

- <code title="get /envelopes/data">client.envelopes.<a href="./resources/envelopes.ts">explicit</a>() -> Promise<Address></code>
- <code title="get /envelopes/items">client.envelopes.<a href="./resources/envelopes.ts">implicit</a>() -> Promise<Address></code>
- <code title="get /envelopes/items/inline_response">client.envelopes.<a href="./resources/envelopes.ts">inlineResponse</a>() -> Promise<EnvelopeInlineResponseResponse></code>

# Types

Models:

- <code><a href="./resources/types.ts">TypeEnumsResponse</a></code>

Methods:

- <code title="post /types/enums">client.types.<a href="./resources/types.ts">enums</a>({ ...params }) -> Promise<Core.APIResponse<TypeEnumsResponse>></code>

# Names

Models:

- <code><a href="./resources/names/names.ts">NameResponseShadowsPydanticResponse</a></code>

Methods:

- <code title="get /names/response_property_shadows_pydantic">client.names.<a href="./resources/names/names.ts">responseShadowsPydantic</a>() -> Promise<Core.APIResponse<NameResponseShadowsPydanticResponse>></code>

## Params

Methods:

- <code title="post /names/params/options">client.names.params.<a href="./resources/names/params.ts">optionsParam</a>({ ...params }) -> Promise<void></code>

# Widgets

Models:

- <code><a href="./resources/widgets.ts">Widget</a></code>

Methods:

- <code title="get /widgets/{widgetId}/filter/{filterType}">client.widgets.<a href="./resources/widgets.ts">retrieveWithFilter</a>(widgetId, filterType) -> Promise<Core.APIResponse<Widget>></code>

# Sta_613

Models:

- <code><a href="./resources/sta-613.ts">Sta_613GlobalWithStandardResponse</a></code>
- <code><a href="./resources/sta-613.ts">Sta_613OnlyGlobalResponse</a></code>

Methods:

- <code title="post /sta_613/path_params/{camelCasedPath}/{id}">client.sta_613.<a href="./resources/sta-613.ts">globalWithStandard</a>(camelCasedPath, id) -> Promise<Core.APIResponse<Sta_613GlobalWithStandardResponse>></code>
- <code title="post /sta_613/path_params/{client_path_param}">client.sta_613.<a href="./resources/sta-613.ts">onlyGlobal</a>(clientPathParam) -> Promise<Core.APIResponse<Sta_613OnlyGlobalResponse>></code>

# PathParams

Models:

- <code><a href="./resources/path-params.ts">PathParamMultipleResponse</a></code>
- <code><a href="./resources/path-params.ts">PathParamSingularResponse</a></code>

Methods:

- <code title="post /path_params/{first}/{second}/{last}">client.pathParams.<a href="./resources/path-params.ts">multiple</a>(first, second, last) -> Promise<Core.APIResponse<PathParamMultipleResponse>></code>
- <code title="post /path_params/{singular}">client.pathParams.<a href="./resources/path-params.ts">singular</a>(singular) -> Promise<Core.APIResponse<PathParamSingularResponse>></code>

# Responses

Models:

- <code><a href="./resources/responses.ts">ObjectWithAnyOfNullProperty</a></code>
- <code><a href="./resources/responses.ts">ObjectWithOneOfNullProperty</a></code>
- <code><a href="./resources/responses.ts">ResponseMissingRequiredResponse</a></code>

Methods:

- <code title="get /responses/anyof_null">client.responses.<a href="./resources/responses.ts">anyofNull</a>() -> Promise<Core.APIResponse<ObjectWithAnyOfNullProperty>></code>
- <code title="get /responses/array">client.responses.<a href="./resources/responses.ts">arrayResponse</a>() -> Core.PagePromise<SimpleObjectsMyFakePage></code>
- <code title="get /responses/missing_required">client.responses.<a href="./resources/responses.ts">missingRequired</a>() -> Promise<Core.APIResponse<ResponseMissingRequiredResponse>></code>
- <code title="get /responses/oneof_null">client.responses.<a href="./resources/responses.ts">oneofNull</a>() -> Promise<Core.APIResponse<ObjectWithOneOfNullProperty>></code>
- <code title="get /responses/simple_object">client.responses.<a href="./resources/responses.ts">sharedResponseObject</a>() -> Promise<Core.APIResponse<SimpleObject>></code>

# Params

Models:

- <code><a href="./resources/params.ts">MyModel</a></code>
- <code><a href="./resources/params.ts">ParamTopLevelAnyOfResponse</a></code>
- <code><a href="./resources/params.ts">ParamTopLevelOneOfResponse</a></code>
- <code><a href="./resources/params.ts">ParamUnionOverlappingPropResponse</a></code>

Methods:

- <code title="post /params/read_only_properties">client.params.<a href="./resources/params.ts">readOnlyProperties</a>({ ...params }) -> Promise<void></code>
- <code title="post /params/top_level_allOf">client.params.<a href="./resources/params.ts">topLevelAllOf</a>({ ...params }) -> Promise<void></code>
- <code title="post /params/top_level_allOf_nested_object">client.params.<a href="./resources/params.ts">topLevelAllOfNestedObject</a>({ ...params }) -> Promise<void></code>
- <code title="post /params/top_level_anyOf">client.params.<a href="./resources/params.ts">topLevelAnyOf</a>({ ...params }) -> Promise<Core.APIResponse<ParamTopLevelAnyOfResponse>></code>
- <code title="post /params/top_level_oneOf">client.params.<a href="./resources/params.ts">topLevelOneOf</a>({ ...params }) -> Promise<Core.APIResponse<ParamTopLevelOneOfResponse>></code>
- <code title="post /params/top_level_anyOf_overlapping_property">client.params.<a href="./resources/params.ts">unionOverlappingProp</a>({ ...params }) -> Promise<Core.APIResponse<ParamUnionOverlappingPropResponse>></code>
- <code title="post /params/with_model_property">client.params.<a href="./resources/params.ts">withModelProperty</a>({ ...params }) -> Promise<void></code>

# DecoratorTests

Models:

- <code><a href="./resources/decorator-tests/decorator-tests.ts">DecoratorTestKeepMeResponse</a></code>

Methods:

- <code title="get /decorator_tests/keep/me">client.decoratorTests.<a href="./resources/decorator-tests/decorator-tests.ts">keepMe</a>() -> Promise<Core.APIResponse<DecoratorTestKeepMeResponse>></code>

## Languages

Methods:

- <code title="get /responses/simple_object">client.decoratorTests.languages.<a href="./resources/decorator-tests/languages.ts">skippedForPython</a>() -> Promise<Core.APIResponse<SimpleObject>></code>

## KeepThisResource

Models:

- <code><a href="./resources/decorator-tests/keep-this-resource.ts">KeepThisResourceKeepThisMethodResponse</a></code>

Methods:

- <code title="get /decorator_tests/nested/keep/this/method">client.decoratorTests.keepThisResource.<a href="./resources/decorator-tests/keep-this-resource.ts">keepThisMethod</a>() -> Promise<Core.APIResponse<KeepThisResourceKeepThisMethodResponse>></code>
