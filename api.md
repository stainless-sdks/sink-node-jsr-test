# Testing

Models:

- <code><a href="./resources/testing.ts">RootResponse</a></code>

Methods:

- <code title="get /">client.testing.<a href="./resources/testing.ts">root</a>() -> RootResponse</code>

# PaginationTests

## Concrete

Models:

- <code><a href="./resources/pagination-tests/concrete.ts">MyConcretePageItem</a></code>

Methods:

- <code title="get /paginated/concrete_cursor">client.paginationTests.concrete.<a href="./resources/pagination-tests/concrete.ts">list</a>({ ...params }) -> MyConcretePage</code>

## PageNumber

Methods:

- <code title="get /paginated/page_number">client.paginationTests.pageNumber.<a href="./resources/pagination-tests/page-number.ts">list</a>({ ...params }) -> MyModelsPagePageNumber</code>

## Cursor

Methods:

- <code title="get /paginated/cursor">client.paginationTests.cursor.<a href="./resources/pagination-tests/cursor.ts">list</a>({ ...params }) -> MyModelsPageCursor</code>

## CursorURL

Methods:

- <code title="get /paginated/cursor_url">client.paginationTests.cursorURL.<a href="./resources/pagination-tests/cursor-url.ts">list</a>({ ...params }) -> MyModelsPageCursorURL</code>

## Offset

Methods:

- <code title="get /paginated/offset">client.paginationTests.offset.<a href="./resources/pagination-tests/offset.ts">list</a>({ ...params }) -> MyModelsPageOffset</code>

## FakePages

Methods:

- <code title="get /paginated/fake_page">client.paginationTests.fakePages.<a href="./resources/pagination-tests/fake-pages.ts">list</a>({ ...params }) -> SimpleObjectsFakePage</code>

## Hypermedia

Methods:

- <code title="get /paginated/hypermedia">client.paginationTests.hypermedia.<a href="./resources/pagination-tests/hypermedia.ts">list</a>({ ...params }) -> MyModelsPageHypermedia</code>

## HypermediaRaw

Methods:

- <code title="get /paginated/hypermedia_raw">client.paginationTests.hypermediaRaw.<a href="./resources/pagination-tests/hypermedia-raw.ts">list</a>({ ...params }) -> MyModelsPageHypermediaRaw</code>

# ResourceRefs

## PaginatedModelFirstRef

Methods:

- <code title="get /resource_refs/paginated_model_separate_resource">client.resourceRefs.paginatedModelFirstRef.<a href="./resources/resource-refs/paginated-model-first-ref.ts">list</a>({ ...params }) -> CardsPageCursor</code>

## PaginatedModelSecondRef

Methods:

- <code title="get /resource_refs/paginated_model_separate_resource">client.resourceRefs.paginatedModelSecondRef.<a href="./resources/resource-refs/paginated-model-second-ref.ts">list</a>({ ...params }) -> CardsPageCursor</code>

# Cards

Models:

- <code><a href="./resources/cards.ts">Card</a></code>
- <code><a href="./resources/cards.ts">CardAlias</a></code>
- <code><a href="./resources/cards.ts">FundingAccount</a></code>
- <code><a href="./resources/cards.ts">CardProvisionFooResponse</a></code>

Methods:

- <code title="post /cards">client.cards.<a href="./resources/cards.ts">create</a>({ ...params }) -> Card</code>
- <code title="get /cards/{card_token}">client.cards.<a href="./resources/cards.ts">retrieve</a>(cardToken) -> Card</code>
- <code title="patch /cards/{card_token}">client.cards.<a href="./resources/cards.ts">update</a>(cardToken, { ...params }) -> Card</code>
- <code title="get /cards">client.cards.<a href="./resources/cards.ts">list</a>({ ...params }) -> CardsCardPage</code>
- <code title="post /deprecations/method">client.cards.<a href="./resources/cards.ts">deprecatedMethod</a>() -> Promise<void></code>
- <code title="post /cards/list">client.cards.<a href="./resources/cards.ts">listNonGet</a>({ ...params }) -> CardsCardPage</code>
- <code title="get /cards/{card_token}">client.cards.<a href="./resources/cards.ts">listNotPaginated</a>(cardToken) -> Card</code>
- <code title="post /cards/{card_token}/provision">client.cards.<a href="./resources/cards.ts">provisionFoo</a>(cardToken, { ...params }) -> CardProvisionFooResponse</code>
- <code title="post /cards/{card_token}/reissue">client.cards.<a href="./resources/cards.ts">reissue</a>(cardToken, { ...params }) -> Card</code>

Custom Methods:

- `create`
- `retrieve`
- `update`
- `list`
- `createAliased`
- `deprecatedGetAuthURL`
- `deprecatedMethod`
- `listNonGet`
- `listNotPaginated`
- `provisionFoo`
- `reissue`

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

- <code title="get /company/payments/{payment_id}">client.company.payments.<a href="./resources/company/payments.ts">retrieve</a>(paymentId) -> CompanyPayment</code>

# Sta563

Models:

- <code><a href="./resources/sta-563.ts">DeleteEmptyObjectResponse</a></code>

Methods:

- <code title="delete /sta_563_empty_object">client.sta563.<a href="./resources/sta-563.ts">deleteEmptyObject</a>() -> DeleteEmptyObjectResponse</code>

# Sta569

Models:

- <code><a href="./resources/sta-569.ts">Sta569OneEntryResponse</a></code>
- <code><a href="./resources/sta-569.ts">Sta569OneEntryWithNullResponse</a></code>

Methods:

- <code title="post /sta_569_array_types/one_entry">client.sta569.<a href="./resources/sta-569.ts">oneEntry</a>({ ...params }) -> Sta569OneEntryResponse</code>
- <code title="post /sta_569_array_types/one_entry_with_null">client.sta569.<a href="./resources/sta-569.ts">oneEntryWithNull</a>({ ...params }) -> Sta569OneEntryWithNullResponse | null</code>

# Sta630

Models:

- <code><a href="./resources/sta-630.ts">GithubUser</a></code>
- <code><a href="./resources/sta-630.ts">GithubUserPreferences</a></code>

Methods:

- <code title="get /sta_630/define_models_nested_path">client.sta630.<a href="./resources/sta-630.ts">nestedPath</a>() -> GithubUser</code>

# Parent

## Child

Models:

- <code><a href="./resources/parent/child.ts">ChildInlinedResponseResponse</a></code>

Methods:

- <code title="get /inlined_response">client.parent.child.<a href="./resources/parent/child.ts">inlinedResponse</a>() -> ChildInlinedResponseResponse</code>

# Sta606

Methods:

- <code title="post /sta_606_shared_types/response">client.sta606.<a href="./resources/sta-606.ts">withSharedModel</a>() -> ObjectWithChildRef</code>
- <code title="post /sta_606_shared_types/request_params">client.sta606.<a href="./resources/sta-606.ts">withSharedParams</a>({ ...params }) -> Promise<void></code>

# Envelopes

Models:

- <code><a href="./resources/envelopes.ts">Address</a></code>
- <code><a href="./resources/envelopes.ts">EnvelopeInlineResponseResponse</a></code>

Methods:

- <code title="get /envelopes/data">client.envelopes.<a href="./resources/envelopes.ts">explicit</a>() -> Address</code>
- <code title="get /envelopes/items">client.envelopes.<a href="./resources/envelopes.ts">implicit</a>() -> Address</code>
- <code title="get /envelopes/items/inline_response">client.envelopes.<a href="./resources/envelopes.ts">inlineResponse</a>() -> EnvelopeInlineResponseResponse</code>

# Types

Models:

- <code><a href="./resources/types/types.ts">TypeEnumsResponse</a></code>
- <code><a href="./resources/types/types.ts">TypeDatesResponse</a></code>
- <code><a href="./resources/types/types.ts">TypeDatetimesResponse</a></code>

Methods:

- <code title="post /types/dates">client.types.<a href="./resources/types/types.ts">dates</a>({ ...params }) -> TypeDatesResponse</code>
- <code title="post /types/datetimes">client.types.<a href="./resources/types/types.ts">datetimes</a>({ ...params }) -> TypeDatetimesResponse</code>
- <code title="post /types/enums">client.types.<a href="./resources/types/types.ts">enums</a>({ ...params }) -> TypeEnumsResponse</code>

## ReadOnlyParams

Models:

- <code><a href="./resources/types/read-only-params.ts">ReadOnlyParamSimpleResponse</a></code>

Methods:

- <code title="post /types/read_only_params/simple">client.types.readOnlyParams.<a href="./resources/types/read-only-params.ts">simple</a>({ ...params }) -> ReadOnlyParamSimpleResponse</code>

## WriteOnlyResponses

Models:

- <code><a href="./resources/types/write-only-responses.ts">WriteOnlyResponseSimpleResponse</a></code>

Methods:

- <code title="get /types/write_only_responses/simple">client.types.writeOnlyResponses.<a href="./resources/types/write-only-responses.ts">simple</a>() -> WriteOnlyResponseSimpleResponse</code>

## Maps

Models:

- <code><a href="./resources/types/maps.ts">MapNullableItemsResponse</a></code>

Methods:

- <code title="get /types/map/nullable_items">client.types.maps.<a href="./resources/types/maps.ts">nullableItems</a>() -> MapNullableItemsResponse</code>

## Objects

Models:

- <code><a href="./resources/types/objects.ts">ObjectMixedKnownAndUnknownResponse</a></code>

Methods:

- <code title="get /types/object/mixed_known_and_unknown">client.types.objects.<a href="./resources/types/objects.ts">mixedKnownAndUnknown</a>() -> ObjectMixedKnownAndUnknownResponse</code>

# Names

Models:

- <code><a href="./resources/names/names.ts">NameResponseShadowsPydanticResponse</a></code>

Methods:

- <code title="get /names/response_property_shadows_pydantic">client.names.<a href="./resources/names/names.ts">responseShadowsPydantic</a>() -> NameResponseShadowsPydanticResponse</code>

## Params

Methods:

- <code title="post /names/body_params/options">client.names.params.<a href="./resources/names/params.ts">optionsParam</a>({ ...params }) -> Promise<void></code>

# Widgets

Models:

- <code><a href="./resources/widgets.ts">Widget</a></code>

Methods:

- <code title="get /widgets/{widgetId}/filter/{filterType}">client.widgets.<a href="./resources/widgets.ts">retrieveWithFilter</a>(widgetId, filterType) -> Widget</code>

# Sta613

Models:

- <code><a href="./resources/sta-613.ts">Sta613OnlyGlobalResponse</a></code>
- <code><a href="./resources/sta-613.ts">Sta613GlobalWithStandardResponse</a></code>

Methods:

- <code title="post /sta_613/path_params/{camelCasedPath}/{id}">client.sta613.<a href="./resources/sta-613.ts">globalWithStandard</a>(camelCasedPath, id) -> Sta613GlobalWithStandardResponse</code>
- <code title="post /sta_613/path_params/{client_path_param}">client.sta613.<a href="./resources/sta-613.ts">onlyGlobal</a>(clientPathParam) -> Sta613OnlyGlobalResponse</code>

# Responses

Models:

- <code><a href="./resources/responses.ts">ObjectWithAnyOfNullProperty</a></code>
- <code><a href="./resources/responses.ts">ObjectWithOneOfNullProperty</a></code>
- <code><a href="./resources/responses.ts">SimpleAllof</a></code>
- <code><a href="./resources/responses.ts">ResponseObjectNoPropertiesResponse</a></code>
- <code><a href="./resources/responses.ts">ResponseObjectWithAdditionalPropertiesPropResponse</a></code>
- <code><a href="./resources/responses.ts">ResponseObjectWithHeavilyNestedUnionResponse</a></code>
- <code><a href="./resources/responses.ts">ResponseAdditionalPropertiesResponse</a></code>
- <code><a href="./resources/responses.ts">ResponseAdditionalPropertiesNestedModelReferenceResponse</a></code>
- <code><a href="./resources/responses.ts">ResponseIntegerResponseResponse</a></code>
- <code><a href="./resources/responses.ts">ResponseStringResponseResponse</a></code>
- <code><a href="./resources/responses.ts">ResponseBooleanResponseResponse</a></code>
- <code><a href="./resources/responses.ts">ResponseMissingRequiredResponse</a></code>
- <code><a href="./resources/responses.ts">ResponseArrayResponseResponse</a></code>
- <code><a href="./resources/responses.ts">ResponseAllofSimpleResponse</a></code>
- <code><a href="./resources/responses.ts">ResponseObjectAllPropertiesResponse</a></code>

Methods:

- <code title="post /responses/additional_properties">client.responses.<a href="./resources/responses.ts">additionalProperties</a>() -> ResponseAdditionalPropertiesResponse</code>
- <code title="post /responses/additional_properties_nested_model_reference">client.responses.<a href="./resources/responses.ts">additionalPropertiesNestedModelReference</a>() -> ResponseAdditionalPropertiesNestedModelReferenceResponse</code>
- <code title="get /responses/allof/simple">client.responses.<a href="./resources/responses.ts">allofSimple</a>() -> ResponseAllofSimpleResponse</code>
- <code title="get /responses/anyof_null">client.responses.<a href="./resources/responses.ts">anyofNull</a>() -> ObjectWithAnyOfNullProperty</code>
- <code title="get /responses/array">client.responses.<a href="./resources/responses.ts">arrayResponse</a>() -> ResponseArrayResponseResponse</code>
- <code title="post /responses/boolean">client.responses.<a href="./resources/responses.ts">booleanResponse</a>() -> ResponseBooleanResponseResponse</code>
- <code title="post /responses/empty">client.responses.<a href="./resources/responses.ts">emptyResponse</a>() -> Promise<void></code>
- <code title="post /responses/integer">client.responses.<a href="./resources/responses.ts">integerResponse</a>() -> ResponseIntegerResponseResponse</code>
- <code title="get /responses/missing_required">client.responses.<a href="./resources/responses.ts">missingRequired</a>() -> ResponseMissingRequiredResponse</code>
- <code title="get /responses/object/everything">client.responses.<a href="./resources/responses.ts">objectAllProperties</a>() -> ResponseObjectAllPropertiesResponse</code>
- <code title="post /responses/object_no_properties">client.responses.<a href="./resources/responses.ts">objectNoProperties</a>() -> ResponseObjectNoPropertiesResponse</code>
- <code title="post /responses/object_with_additional_properties_prop">client.responses.<a href="./resources/responses.ts">objectWithAdditionalPropertiesProp</a>() -> ResponseObjectWithAdditionalPropertiesPropResponse</code>
- <code title="post /responses/object_with_heavily_nested_union">client.responses.<a href="./resources/responses.ts">objectWithHeavilyNestedUnion</a>() -> ResponseObjectWithHeavilyNestedUnionResponse</code>
- <code title="get /responses/oneof_null">client.responses.<a href="./resources/responses.ts">oneofNull</a>() -> ObjectWithOneOfNullProperty</code>
- <code title="get /responses/simple_object">client.responses.<a href="./resources/responses.ts">sharedResponseObject</a>() -> SimpleObject</code>
- <code title="post /responses/string">client.responses.<a href="./resources/responses.ts">stringResponse</a>() -> Promise<string></code>

# PathParams

Models:

- <code><a href="./resources/path-params.ts">PathParamSingularResponse</a></code>
- <code><a href="./resources/path-params.ts">PathParamMultipleResponse</a></code>

Methods:

- <code title="post /path_params/{first}/{second}/{last}">client.pathParams.<a href="./resources/path-params.ts">multiple</a>(first, second, last) -> PathParamMultipleResponse</code>
- <code title="post /path_params/{singular}">client.pathParams.<a href="./resources/path-params.ts">singular</a>(singular) -> PathParamSingularResponse</code>

# PositionalParams

Methods:

- <code title="post /positional_params/basic_body">client.positionalParams.<a href="./resources/positional-params.ts">basicBody</a>({ ...params }) -> Promise<void></code>
- <code title="get /positional_params/basic_query">client.positionalParams.<a href="./resources/positional-params.ts">basicQuery</a>({ ...params }) -> Promise<void></code>
- <code title="post /positional_params/body">client.positionalParams.<a href="./resources/positional-params.ts">body</a>({ ...params }) -> Promise<void></code>
- <code title="post /positional_params/body_extra_param">client.positionalParams.<a href="./resources/positional-params.ts">bodyExtraParam</a>({ ...params }) -> Promise<void></code>
- <code title="post /positional_params/query/{id}/kitchen_sink/{key}">client.positionalParams.<a href="./resources/positional-params.ts">kitchenSink</a>(id, camelCase, { ...params }) -> Promise<void></code>
- <code title="post /positional_params/{first}/{second}/{last}">client.positionalParams.<a href="./resources/positional-params.ts">multiplePathParams</a>(second, name, { ...params }) -> Promise<void></code>
- <code title="get /positional_params/query">client.positionalParams.<a href="./resources/positional-params.ts">query</a>(foo) -> Promise<void></code>
- <code title="post /positional_params/query/{id}">client.positionalParams.<a href="./resources/positional-params.ts">queryAndPath</a>(bar, id) -> Promise<void></code>
- <code title="get /positional_params/query_multiple">client.positionalParams.<a href="./resources/positional-params.ts">queryMultiple</a>(foo, { ...params }) -> Promise<void></code>
- <code title="get /positional_params/{single}">client.positionalParams.<a href="./resources/positional-params.ts">single</a>(single) -> Promise<void></code>

# QueryParams

Methods:

- <code title="get /query_params/anyOf">client.queryParams.<a href="./resources/query-params.ts">anyOf</a>({ ...params }) -> Promise<void></code>
- <code title="get /query_params/array">client.queryParams.<a href="./resources/query-params.ts">array</a>({ ...params }) -> Promise<void></code>
- <code title="get /query_params/enum">client.queryParams.<a href="./resources/query-params.ts">enum</a>({ ...params }) -> Promise<void></code>
- <code title="get /query_params/object">client.queryParams.<a href="./resources/query-params.ts">object</a>({ ...params }) -> Promise<void></code>
- <code title="get /query_params/oneOf">client.queryParams.<a href="./resources/query-params.ts">oneOf</a>({ ...params }) -> Promise<void></code>
- <code title="get /query_params/primitives">client.queryParams.<a href="./resources/query-params.ts">primitives</a>({ ...params }) -> Promise<void></code>

# BodyParams

Models:

- <code><a href="./resources/body-params.ts">MyModel</a></code>
- <code><a href="./resources/body-params.ts">BodyParamUnionOverlappingPropResponse</a></code>

Methods:

- <code title="post /body_params/read_only_properties">client.bodyParams.<a href="./resources/body-params.ts">readOnlyProperties</a>({ ...params }) -> Promise<void></code>
- <code title="post /body_params/top_level_allOf_nested_object">client.bodyParams.<a href="./resources/body-params.ts">topLevelAllOfNestedObject</a>() -> Promise<void></code>
- <code title="post /body_params/top_level_anyOf_overlapping_property">client.bodyParams.<a href="./resources/body-params.ts">unionOverlappingProp</a>() -> BodyParamUnionOverlappingPropResponse</code>
- <code title="post /body_params/with_model_property">client.bodyParams.<a href="./resources/body-params.ts">withModelProperty</a>({ ...params }) -> Promise<void></code>

# HeaderParams

Methods:

- <code title="post /header_params/client_argument">client.headerParams.<a href="./resources/header-params.ts">clientArgument</a>({ ...params }) -> Promise<void></code>

# DecoratorTests

Models:

- <code><a href="./resources/decorator-tests/decorator-tests.ts">DecoratorTestKeepMeResponse</a></code>

Methods:

- <code title="get /decorator_tests/keep/me">client.decoratorTests.<a href="./resources/decorator-tests/decorator-tests.ts">keepMe</a>() -> DecoratorTestKeepMeResponse</code>

## Languages

Methods:

- <code title="get /responses/simple_object">client.decoratorTests.languages.<a href="./resources/decorator-tests/languages.ts">skippedForPython</a>() -> SimpleObject</code>

## KeepThisResource

Models:

- <code><a href="./resources/decorator-tests/keep-this-resource.ts">KeepThisResourceKeepThisMethodResponse</a></code>

Methods:

- <code title="get /decorator_tests/nested/keep/this/method">client.decoratorTests.keepThisResource.<a href="./resources/decorator-tests/keep-this-resource.ts">keepThisMethod</a>() -> KeepThisResourceKeepThisMethodResponse</code>

# Tests

Methods:

- <code title="get /tests/run_codegen">client.tests.<a href="./resources/tests.ts">runCodegen</a>() -> Promise<void></code>

# Version1_30Names

Models:

- <code><a href="./resources/version-1-30-names.ts">Version1_30NameCreateResponse</a></code>

Methods:

- <code title="post /version_1_30_names/query/{version_1_15}">client.version1_30Names.<a href="./resources/version-1-30-names.ts">create</a>(version1_15, { ...params }) -> Version1_30NameCreateResponse</code>
