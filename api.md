# Sink

Types:

- <code><a href="./src/resources/top-level.ts">APIStatus</a></code>
- <code><a href="./src/resources/top-level.ts">APIStatusAlias</a></code>
- <code><a href="./src/resources/top-level.ts">CustomAPIStatusMessage</a></code>

Methods:

- <code title="get /status">client.<a href="./src/index.ts">apiStatus</a>() -> APIStatus</code>
- <code title="post /no_response">client.<a href="./src/index.ts">createNoResponse</a>() -> void</code>
- <code>client.<a href="./src/index.ts">getAuthURL</a>({ redirectUri, clientId }) -> string</code>

# Shared

Types:

- <code><a href="./src/resources/shared.ts">BasicSharedModelObject</a></code>
- <code><a href="./src/resources/shared.ts">Currency</a></code>
- <code><a href="./src/resources/shared.ts">ObjectWithChildRef</a></code>
- <code><a href="./src/resources/shared.ts">SharedCursorNestedResponsePropMeta</a></code>
- <code><a href="./src/resources/shared.ts">SharedSelfRecursion</a></code>
- <code><a href="./src/resources/shared.ts">ShippingAddress</a></code>
- <code><a href="./src/resources/shared.ts">SimpleObject</a></code>
- <code><a href="./src/resources/shared.ts">SimpleObjectAlias</a></code>

# Testing

Types:

- <code><a href="./src/resources/testing.ts">RootResponse</a></code>

Methods:

- <code title="get /">client.testing.<a href="./src/resources/testing.ts">root</a>() -> RootResponse</code>

# ComplexQueries

Types:

- <code><a href="./src/resources/complex-queries.ts">ComplexQueryArrayQueryResponse</a></code>
- <code><a href="./src/resources/complex-queries.ts">ComplexQueryObjectQueryResponse</a></code>

Methods:

- <code title="get /array_query">client.complexQueries.<a href="./src/resources/complex-queries.ts">arrayQuery</a>({ ...params }) -> ComplexQueryArrayQueryResponse</code>
- <code title="get /object_query">client.complexQueries.<a href="./src/resources/complex-queries.ts">objectQuery</a>({ ...params }) -> ComplexQueryObjectQueryResponse</code>

# Casing

## EEOC

Types:

- <code><a href="./src/resources/casing/eeoc.ts">EEOC</a></code>

Methods:

- <code title="get /casing/eeoc">client.casing.eeoc.<a href="./src/resources/casing/eeoc.ts">list</a>({ ...params }) -> EEOCsPageCursor</code>

# DefaultReqOptions

Methods:

- <code title="get /default_req_options">client.defaultReqOptions.<a href="./src/resources/default-req-options/default-req-options.ts">exampleMethod</a>() -> BasicSharedModelObject</code>

## Child

Methods:

- <code title="get /default_req_options">client.defaultReqOptions.child.<a href="./src/resources/default-req-options/child.ts">exampleMethod</a>() -> BasicSharedModelObject</code>

# Tools

Types:

- <code><a href="./src/resources/tools.ts">ObjectSkippedProps</a></code>

Methods:

- <code title="post /tools/skipped_params">client.tools.<a href="./src/resources/tools.ts">skippedParams</a>({ ...params }) -> ObjectSkippedProps</code>

# MethodConfig

Types:

- <code><a href="./src/resources/method-config.ts">MethodConfigSkippedTestsAllResponse</a></code>
- <code><a href="./src/resources/method-config.ts">MethodConfigSkippedTestsGoResponse</a></code>
- <code><a href="./src/resources/method-config.ts">MethodConfigSkippedTestsJavaResponse</a></code>
- <code><a href="./src/resources/method-config.ts">MethodConfigSkippedTestsKotlinResponse</a></code>
- <code><a href="./src/resources/method-config.ts">MethodConfigSkippedTestsNodeResponse</a></code>
- <code><a href="./src/resources/method-config.ts">MethodConfigSkippedTestsNodeAndPythonResponse</a></code>
- <code><a href="./src/resources/method-config.ts">MethodConfigSkippedTestsPythonResponse</a></code>
- <code><a href="./src/resources/method-config.ts">MethodConfigSkippedTestsRubyResponse</a></code>

Methods:

- <code title="get /method_config/skipped_tests/{id}">client.methodConfig.<a href="./src/resources/method-config.ts">skippedTestsAll</a>(id) -> MethodConfigSkippedTestsAllResponse</code>
- <code title="get /method_config/skipped_tests/{id}">client.methodConfig.<a href="./src/resources/method-config.ts">skippedTestsGo</a>(id) -> MethodConfigSkippedTestsGoResponse</code>
- <code title="get /method_config/skipped_tests/{id}">client.methodConfig.<a href="./src/resources/method-config.ts">skippedTestsJava</a>(id) -> MethodConfigSkippedTestsJavaResponse</code>
- <code title="get /method_config/skipped_tests/{id}">client.methodConfig.<a href="./src/resources/method-config.ts">skippedTestsKotlin</a>(id) -> MethodConfigSkippedTestsKotlinResponse</code>
- <code title="get /method_config/skipped_tests/{id}">client.methodConfig.<a href="./src/resources/method-config.ts">skippedTestsNode</a>(id) -> MethodConfigSkippedTestsNodeResponse</code>
- <code title="get /method_config/skipped_tests/{id}">client.methodConfig.<a href="./src/resources/method-config.ts">skippedTestsNodeAndPython</a>(id) -> MethodConfigSkippedTestsNodeAndPythonResponse</code>
- <code title="get /method_config/skipped_tests/{id}">client.methodConfig.<a href="./src/resources/method-config.ts">skippedTestsPython</a>(id) -> MethodConfigSkippedTestsPythonResponse</code>
- <code title="get /method_config/skipped_tests/{id}">client.methodConfig.<a href="./src/resources/method-config.ts">skippedTestsRuby</a>(id) -> MethodConfigSkippedTestsRubyResponse</code>

# Streaming

Types:

- <code><a href="./src/resources/streaming.ts">StreamingBasicResponse</a></code>
- <code><a href="./src/resources/streaming.ts">StreamingNestedParamsResponse</a></code>
- <code><a href="./src/resources/streaming.ts">StreamingQueryParamDiscriminatorResponse</a></code>

Methods:

- <code title="post /streaming/basic">client.streaming.<a href="./src/resources/streaming.ts">basic</a>({ ...params }) -> StreamingBasicResponse</code>
- <code title="post /streaming/nested_params">client.streaming.<a href="./src/resources/streaming.ts">nestedParams</a>({ ...params }) -> StreamingNestedParamsResponse</code>
- <code title="get /streaming/query_param_discriminator">client.streaming.<a href="./src/resources/streaming.ts">queryParamDiscriminator</a>({ ...params }) -> StreamingQueryParamDiscriminatorResponse</code>

# PaginationTests

## Concrete

Types:

- <code><a href="./src/resources/pagination-tests/concrete.ts">MyConcretePageItem</a></code>

Methods:

- <code title="get /paginated/concrete/cursor">client.paginationTests.concrete.<a href="./src/resources/pagination-tests/concrete.ts">list</a>({ ...params }) -> MyConcretePage</code>
- <code title="post /paginated/concrete/more_params">client.paginationTests.concrete.<a href="./src/resources/pagination-tests/concrete.ts">listExtraParamsAndFields</a>({ ...params }) -> ConcretePageWithExtraParamsAndFields</code>

## PageNumber

Methods:

- <code title="get /paginated/page_number">client.paginationTests.pageNumber.<a href="./src/resources/pagination-tests/page-number.ts">list</a>({ ...params }) -> MyModelsPagePageNumber</code>

## Cursor

Methods:

- <code title="get /paginated/cursor">client.paginationTests.cursor.<a href="./src/resources/pagination-tests/cursor.ts">list</a>({ ...params }) -> MyModelsPageCursor</code>
- <code title="get /paginated/cursor_nested_response_prop">client.paginationTests.cursor.<a href="./src/resources/pagination-tests/cursor.ts">listNestedResponseProp</a>({ ...params }) -> MyModelsPageCursorNestedResponseProp</code>

## CursorURL

Methods:

- <code title="get /paginated/cursor_url">client.paginationTests.cursorURL.<a href="./src/resources/pagination-tests/cursor-url.ts">list</a>({ ...params }) -> MyModelsPageCursorURL</code>

## Offset

Methods:

- <code title="get /paginated/offset">client.paginationTests.offset.<a href="./src/resources/pagination-tests/offset.ts">list</a>({ ...params }) -> MyModelsPageOffset</code>

## FakePages

Methods:

- <code title="get /paginated/fake_page">client.paginationTests.fakePages.<a href="./src/resources/pagination-tests/fake-pages.ts">list</a>({ ...params }) -> SimpleObjectsFakePage</code>

## Hypermedia

Methods:

- <code title="get /paginated/hypermedia">client.paginationTests.hypermedia.<a href="./src/resources/pagination-tests/hypermedia.ts">list</a>({ ...params }) -> MyModelsPageHypermedia</code>

## ExtraParamsAndFields

Methods:

- <code title="post /paginated/more_params">client.paginationTests.extraParamsAndFields.<a href="./src/resources/pagination-tests/extra-params-and-fields.ts">list</a>({ ...params }) -> MyModelsGenericPageWithExtraParamsAndFields</code>

## HypermediaRaw

Methods:

- <code title="get /paginated/hypermedia_raw">client.paginationTests.hypermediaRaw.<a href="./src/resources/pagination-tests/hypermedia-raw.ts">list</a>({ ...params }) -> MyModelsPageHypermediaRaw</code>

# Docstrings

Types:

- <code><a href="./src/resources/docstrings.ts">DocstringLeadingDoubleQuoteResponse</a></code>
- <code><a href="./src/resources/docstrings.ts">DocstringTrailingDoubleQuoteResponse</a></code>

Methods:

- <code title="get /docstrings/description_contains_comments">client.docstrings.<a href="./src/resources/docstrings.ts">descriptionContainsJsDoc</a>() -> BasicSharedModelObject</code>
- <code title="get /docstrings/description_contains_comment_enders">client.docstrings.<a href="./src/resources/docstrings.ts">descriptionContainsJsDocEnd</a>() -> BasicSharedModelObject</code>
- <code title="get /docstrings/property_leading_double_quote">client.docstrings.<a href="./src/resources/docstrings.ts">leadingDoubleQuote</a>() -> DocstringLeadingDoubleQuoteResponse</code>
- <code title="get /docstrings/property_trailing_double_quote">client.docstrings.<a href="./src/resources/docstrings.ts">trailingDoubleQuote</a>() -> DocstringTrailingDoubleQuoteResponse</code>

# InvalidSchemas

## Arrays

Types:

- <code><a href="./src/resources/invalid-schemas/arrays.ts">ArrayMissingItemsResponse</a></code>

Methods:

- <code title="get /invalid_schemas/arrays/missing_items">client.invalidSchemas.arrays.<a href="./src/resources/invalid-schemas/arrays.ts">missingItems</a>() -> ArrayMissingItemsResponse</code>

## Objects

Types:

- <code><a href="./src/resources/invalid-schemas/objects.ts">ObjectMissingItemsResponse</a></code>

Methods:

- <code title="get /invalid_schemas/objects/property_missing_def">client.invalidSchemas.objects.<a href="./src/resources/invalid-schemas/objects.ts">missingItems</a>() -> ObjectMissingItemsResponse</code>

# ResourceRefs

## PaginatedModelFirstRef

Methods:

- <code title="get /resource_refs/paginated_model_separate_resource">client.resourceRefs.paginatedModelFirstRef.<a href="./src/resources/resource-refs/paginated-model-first-ref.ts">list</a>({ ...params }) -> CardsPageCursor</code>

## PaginatedModelSecondRef

Methods:

- <code title="get /resource_refs/paginated_model_separate_resource">client.resourceRefs.paginatedModelSecondRef.<a href="./src/resources/resource-refs/paginated-model-second-ref.ts">list</a>({ ...params }) -> CardsPageCursor</code>

# Cards

Types:

- <code><a href="./src/resources/cards.ts">Card</a></code>
- <code><a href="./src/resources/cards.ts">CardAlias</a></code>
- <code><a href="./src/resources/cards.ts">FundingAccount</a></code>
- <code><a href="./src/resources/cards.ts">CardProvisionFooResponse</a></code>

Methods:

- <code title="post /cards">client.cards.<a href="./src/resources/cards.ts">create</a>({ ...params }) -> Card</code>
- <code title="get /cards/{card_token}">client.cards.<a href="./src/resources/cards.ts">retrieve</a>(cardToken) -> Card</code>
- <code title="patch /cards/{card_token}">client.cards.<a href="./src/resources/cards.ts">update</a>(cardToken, { ...params }) -> Card</code>
- <code title="get /cards">client.cards.<a href="./src/resources/cards.ts">list</a>({ ...params }) -> CardsCardPage</code>
- <code title="post /deprecations/method_all_but_go_diff_message">client.cards.<a href="./src/resources/cards.ts">deprecatedAllButGoDiffMessage</a>() -> void</code>
- <code title="post /deprecations/method_all_but_go_diff_message">client.cards.<a href="./src/resources/cards.ts">deprecatedAllDiffMessage</a>() -> void</code>
- <code title="post /deprecations/method">client.cards.<a href="./src/resources/cards.ts">deprecatedMethod</a>() -> void</code>
- <code title="post /deprecations/method_only_go">client.cards.<a href="./src/resources/cards.ts">deprecatedOnlyGo</a>() -> void</code>
- <code title="post /cards/list">client.cards.<a href="./src/resources/cards.ts">listNonGet</a>({ ...params }) -> CardsCardPage</code>
- <code title="get /cards/{card_token}">client.cards.<a href="./src/resources/cards.ts">listNotPaginated</a>(cardToken) -> Card</code>
- <code title="post /cards/{card_token}/provision">client.cards.<a href="./src/resources/cards.ts">provisionFoo</a>(cardToken, { ...params }) -> CardProvisionFooResponse</code>
- <code title="post /cards/{card_token}/reissue">client.cards.<a href="./src/resources/cards.ts">reissue</a>(cardToken, { ...params }) -> Card</code>
- <code>client.cards.<a href="./src/resources/cards.ts">deprecatedGetAuthURL</a>({ redirectUri, clientId }) -> string</code>

# Files

Types:

- <code><a href="./src/resources/files.ts">FileCreateMultipartResponse</a></code>
- <code><a href="./src/resources/files.ts">FileEverythingMultipartResponse</a></code>
- <code><a href="./src/resources/files.ts">FileWithOptionalParamResponse</a></code>

Methods:

- <code title="post /files/multipart">client.files.<a href="./src/resources/files.ts">createMultipart</a>({ ...params }) -> FileCreateMultipartResponse</code>
- <code title="post /files/multipart_everything">client.files.<a href="./src/resources/files.ts">everythingMultipart</a>({ ...params }) -> FileEverythingMultipartResponse</code>
- <code title="post /files/with_optional_param">client.files.<a href="./src/resources/files.ts">withOptionalParam</a>({ ...params }) -> FileWithOptionalParamResponse</code>

# Binaries

Methods:

- <code title="get /binaries/return_binary">client.binaries.<a href="./src/resources/binaries.ts">returnBinary</a>() -> Response</code>

# Resources

Methods:

- <code title="post /no_response">client.resources.<a href="./src/resources/resources.ts">foo</a>() -> void</code>

# ConfigTools

Types:

- <code><a href="./src/resources/config-tools.ts">OnlyNodeModel</a></code>

Methods:

- <code title="post /cards">client.configTools.<a href="./src/resources/config-tools.ts">onlyInNode</a>({ ...params }) -> Card</code>

# Company

Types:

- <code><a href="./src/resources/company/company.ts">Company</a></code>

## Payments

Types:

- <code><a href="./src/resources/company/payments.ts">CompanyPayment</a></code>

Methods:

- <code title="get /company/payments/{payment_id}">client.company.payments.<a href="./src/resources/company/payments.ts">retrieve</a>(paymentId) -> CompanyPayment</code>

# OpenapiFormats

Types:

- <code><a href="./src/resources/openapi-formats.ts">OpenapiFormatArrayTypeOneEntryResponse</a></code>
- <code><a href="./src/resources/openapi-formats.ts">OpenapiFormatArrayTypeOneEntryWithNullResponse</a></code>

Methods:

- <code title="post /openapi_formats/array_type_one_entry">client.openapiFormats.<a href="./src/resources/openapi-formats.ts">arrayTypeOneEntry</a>({ ...params }) -> OpenapiFormatArrayTypeOneEntryResponse</code>
- <code title="post /openapi_formats/array_type_one_entry_with_null">client.openapiFormats.<a href="./src/resources/openapi-formats.ts">arrayTypeOneEntryWithNull</a>({ ...params }) -> OpenapiFormatArrayTypeOneEntryWithNullResponse | null</code>

# Parent

## Child

Types:

- <code><a href="./src/resources/parent/child.ts">ChildInlinedResponseResponse</a></code>

Methods:

- <code title="get /inlined_response">client.parent.child.<a href="./src/resources/parent/child.ts">inlinedResponse</a>() -> ChildInlinedResponseResponse</code>

# Envelopes

Types:

- <code><a href="./src/resources/envelopes.ts">Address</a></code>
- <code><a href="./src/resources/envelopes.ts">EnvelopeInlineResponseResponse</a></code>
- <code><a href="./src/resources/envelopes.ts">EnvelopeWrappedArrayResponse</a></code>

Methods:

- <code title="get /envelopes/data">client.envelopes.<a href="./src/resources/envelopes.ts">explicit</a>() -> Address</code>
- <code title="get /envelopes/items">client.envelopes.<a href="./src/resources/envelopes.ts">implicit</a>() -> Address</code>
- <code title="get /envelopes/items/inline_response">client.envelopes.<a href="./src/resources/envelopes.ts">inlineResponse</a>() -> EnvelopeInlineResponseResponse</code>
- <code title="get /envelopes/items/wrapped_array">client.envelopes.<a href="./src/resources/envelopes.ts">wrappedArray</a>() -> EnvelopeWrappedArrayResponse</code>

# Types

Types:

- <code><a href="./src/resources/types/types.ts">TypeDatesResponse</a></code>
- <code><a href="./src/resources/types/types.ts">TypeDatetimesResponse</a></code>
- <code><a href="./src/resources/types/types.ts">TypeEnumsResponse</a></code>

Methods:

- <code title="post /types/dates">client.types.<a href="./src/resources/types/types.ts">dates</a>({ ...params }) -> TypeDatesResponse</code>
- <code title="post /types/datetimes">client.types.<a href="./src/resources/types/types.ts">datetimes</a>({ ...params }) -> TypeDatetimesResponse</code>
- <code title="post /types/enum_tests_array_unique_values">client.types.<a href="./src/resources/types/types.ts">enumTestsArrayUniqueValues</a>([ ...body ]) -> void</code>
- <code title="post /types/enum_tests_array_unique_values_2_values">client.types.<a href="./src/resources/types/types.ts">enumTestsArrayUniqueValues2Values</a>([ ...body ]) -> void</code>
- <code title="post /types/enum_tests_array_unique_values_numbers">client.types.<a href="./src/resources/types/types.ts">enumTestsArrayUniqueValuesNumbers</a>([ ...body ]) -> void</code>
- <code title="post /types/enums">client.types.<a href="./src/resources/types/types.ts">enums</a>({ ...params }) -> TypeEnumsResponse</code>

## ReadOnlyParams

Types:

- <code><a href="./src/resources/types/read-only-params.ts">ReadOnlyParamSimpleResponse</a></code>

Methods:

- <code title="post /types/read_only_params/simple">client.types.readOnlyParams.<a href="./src/resources/types/read-only-params.ts">simple</a>({ ...params }) -> ReadOnlyParamSimpleResponse</code>

## WriteOnlyResponses

Types:

- <code><a href="./src/resources/types/write-only-responses.ts">WriteOnlyResponseSimpleResponse</a></code>

Methods:

- <code title="get /types/write_only_responses/simple">client.types.writeOnlyResponses.<a href="./src/resources/types/write-only-responses.ts">simple</a>() -> WriteOnlyResponseSimpleResponse</code>

## Maps

Types:

- <code><a href="./src/resources/types/maps.ts">MapNullableItemsResponse</a></code>

Methods:

- <code title="get /types/map/nullable_items">client.types.maps.<a href="./src/resources/types/maps.ts">nullableItems</a>() -> MapNullableItemsResponse</code>

## Objects

Types:

- <code><a href="./src/resources/types/objects.ts">ObjectMixedKnownAndUnknownResponse</a></code>
- <code><a href="./src/resources/types/objects.ts">ObjectMultipleArrayPropertiesSameRefResponse</a></code>
- <code><a href="./src/resources/types/objects.ts">ObjectMultiplePropertiesSameModelResponse</a></code>
- <code><a href="./src/resources/types/objects.ts">ObjectMultiplePropertiesSameRefResponse</a></code>
- <code><a href="./src/resources/types/objects.ts">ObjectTwoDimensionalArrayPrimitivePropertyResponse</a></code>

Methods:

- <code title="get /types/object/mixed_known_and_unknown">client.types.objects.<a href="./src/resources/types/objects.ts">mixedKnownAndUnknown</a>() -> ObjectMixedKnownAndUnknownResponse</code>
- <code title="get /types/object/multiple_array_properties_same_ref">client.types.objects.<a href="./src/resources/types/objects.ts">multipleArrayPropertiesSameRef</a>() -> ObjectMultipleArrayPropertiesSameRefResponse</code>
- <code title="get /types/object/multiple_properties_same_model">client.types.objects.<a href="./src/resources/types/objects.ts">multiplePropertiesSameModel</a>() -> ObjectMultiplePropertiesSameModelResponse</code>
- <code title="get /types/object/multiple_properties_same_ref">client.types.objects.<a href="./src/resources/types/objects.ts">multiplePropertiesSameRef</a>() -> ObjectMultiplePropertiesSameRefResponse</code>
- <code title="get /types/object/2d_array_primitive_properties">client.types.objects.<a href="./src/resources/types/objects.ts">twoDimensionalArrayPrimitiveProperty</a>() -> ObjectTwoDimensionalArrayPrimitivePropertyResponse</code>

## Arrays

Types:

- <code><a href="./src/resources/types/arrays.ts">ArrayObjectItems</a></code>
- <code><a href="./src/resources/types/arrays.ts">ArrayFloatItemsResponse</a></code>
- <code><a href="./src/resources/types/arrays.ts">ArrayObjectItemsResponse</a></code>

Methods:

- <code title="get /types/array/float_items">client.types.arrays.<a href="./src/resources/types/arrays.ts">floatItems</a>() -> ArrayFloatItemsResponse</code>
- <code title="post /types/array/model_nested_in_params">client.types.arrays.<a href="./src/resources/types/arrays.ts">nestedInParams</a>({ ...params }) -> void</code>
- <code title="get /types/array/object_items">client.types.arrays.<a href="./src/resources/types/arrays.ts">objectItems</a>() -> ArrayObjectItemsResponse</code>

# Names

Types:

- <code><a href="./src/resources/names/names.ts">Balance</a></code>
- <code><a href="./src/resources/names/names.ts">NameChildPropImportClashResponse</a></code>
- <code><a href="./src/resources/names/names.ts">NamePropertiesCommonConflictsResponse</a></code>
- <code><a href="./src/resources/names/names.ts">NameResponsePropertyClashesModelImportResponse</a></code>
- <code><a href="./src/resources/names/names.ts">NameResponseShadowsPydanticResponse</a></code>

Methods:

- <code title="post /names/child_prop_import_clash">client.names.<a href="./src/resources/names/names.ts">childPropImportClash</a>() -> NameChildPropImportClashResponse</code>
- <code title="get /names/method_name_get">client.names.<a href="./src/resources/names/names.ts">get\_</a>() -> BasicSharedModelObject</code>
- <code title="post /names/properties_common_conflicts">client.names.<a href="./src/resources/names/names.ts">propertiesCommonConflicts</a>({ ...params }) -> NamePropertiesCommonConflictsResponse</code>
- <code title="get /names/response_property_clashes_model_import">client.names.<a href="./src/resources/names/names.ts">responsePropertyClashesModelImport</a>() -> NameResponsePropertyClashesModelImportResponse</code>
- <code title="get /names/response_property_shadows_pydantic">client.names.<a href="./src/resources/names/names.ts">responseShadowsPydantic</a>() -> NameResponseShadowsPydanticResponse</code>

## Unions

Types:

- <code><a href="./src/resources/names/unions.ts">DiscriminatedUnion</a></code>
- <code><a href="./src/resources/names/unions.ts">VariantsSinglePropObjects</a></code>

Methods:

- <code title="get /names/unions/discriminated_union">client.names.unions.<a href="./src/resources/names/unions.ts">discriminated</a>() -> DiscriminatedUnion</code>
- <code title="get /names/unions/variants_single_prop_objects">client.names.unions.<a href="./src/resources/names/unions.ts">variantsSinglePropObjects</a>() -> VariantsSinglePropObjects</code>

## ReservedNames

### Import

Types:

- <code><a href="./src/resources/names/reserved-names/import.ts">Import</a></code>

Methods:

- <code title="get /names/reserved_names/import">client.names.reservedNames.import.<a href="./src/resources/names/reserved-names/import.ts">import</a>() -> Import</code>

### Methods

Types:

- <code><a href="./src/resources/names/reserved-names/methods.ts">Export</a></code>
- <code><a href="./src/resources/names/reserved-names/methods.ts">Return</a></code>

Methods:

- <code title="post /names/reserved_names/methods/export/{class}">client.names.reservedNames.methods.<a href="./src/resources/names/reserved-names/methods.ts">export</a>(\_class, { ...params }) -> Export</code>

## Params

Methods:

- <code title="post /names/body_params/options">client.names.params.<a href="./src/resources/names/params.ts">optionsParam</a>({ ...params }) -> void</code>
- <code title="post /names/body_params/timeout">client.names.params.<a href="./src/resources/names/params.ts">timeoutParam</a>({ ...params }) -> void</code>

## CanCauseClashes

### EmploymentData

Types:

- <code><a href="./src/resources/names/can-cause-clashes/employment-data.ts">EmploymentData</a></code>

# Widgets

Types:

- <code><a href="./src/resources/widgets.ts">Widget</a></code>

Methods:

- <code title="get /widgets/{widgetId}/filter/{filterType}">client.widgets.<a href="./src/resources/widgets.ts">retrieveWithFilter</a>(widgetId, filterType) -> Widget</code>

# DefaultPathParams

Types:

- <code><a href="./src/resources/default-path-params.ts">DefaultPathParamGlobalWithStandardResponse</a></code>
- <code><a href="./src/resources/default-path-params.ts">DefaultPathParamOnlyGlobalResponse</a></code>

Methods:

- <code title="post /default_path_params/path_params/{camelCasedPath}/{id}">client.defaultPathParams.<a href="./src/resources/default-path-params.ts">globalWithStandard</a>(camelCasedPath, id) -> DefaultPathParamGlobalWithStandardResponse</code>
- <code title="post /default_path_params/path_params/{client_path_param}">client.defaultPathParams.<a href="./src/resources/default-path-params.ts">onlyGlobal</a>(clientPathParam) -> DefaultPathParamOnlyGlobalResponse</code>

# Responses

Types:

- <code><a href="./src/resources/responses/responses.ts">ModelFromNestedPath</a></code>
- <code><a href="./src/resources/responses/responses.ts">ModelWithNestedModel</a></code>
- <code><a href="./src/resources/responses/responses.ts">ObjectWithAnyOfNullProperty</a></code>
- <code><a href="./src/resources/responses/responses.ts">ObjectWithOneOfNullProperty</a></code>
- <code><a href="./src/resources/responses/responses.ts">ResponsesAllofCrossObject</a></code>
- <code><a href="./src/resources/responses/responses.ts">SimpleAllof</a></code>
- <code><a href="./src/resources/responses/responses.ts">UnknownObject</a></code>
- <code><a href="./src/resources/responses/responses.ts">ResponseAdditionalPropertiesResponse</a></code>
- <code><a href="./src/resources/responses/responses.ts">ResponseAdditionalPropertiesNestedModelReferenceResponse</a></code>
- <code><a href="./src/resources/responses/responses.ts">ResponseAllofCrossResourceResponse</a></code>
- <code><a href="./src/resources/responses/responses.ts">ResponseAllofSimpleResponse</a></code>
- <code><a href="./src/resources/responses/responses.ts">ResponseArrayResponseResponse</a></code>
- <code><a href="./src/resources/responses/responses.ts">ResponseBooleanResponseResponse</a></code>
- <code><a href="./src/resources/responses/responses.ts">ResponseIntegerResponseResponse</a></code>
- <code><a href="./src/resources/responses/responses.ts">ResponseMissingRequiredResponse</a></code>
- <code><a href="./src/resources/responses/responses.ts">ResponseNestedArrayResponse</a></code>
- <code><a href="./src/resources/responses/responses.ts">ResponseObjectAllPropertiesResponse</a></code>
- <code><a href="./src/resources/responses/responses.ts">ResponseObjectNoPropertiesResponse</a></code>
- <code><a href="./src/resources/responses/responses.ts">ResponseObjectWithAdditionalPropertiesPropResponse</a></code>
- <code><a href="./src/resources/responses/responses.ts">ResponseObjectWithHeavilyNestedUnionResponse</a></code>
- <code><a href="./src/resources/responses/responses.ts">ResponseStringResponseResponse</a></code>

Methods:

- <code title="post /responses/additional_properties">client.responses.<a href="./src/resources/responses/responses.ts">additionalProperties</a>() -> ResponseAdditionalPropertiesResponse</code>
- <code title="post /responses/additional_properties_nested_model_reference">client.responses.<a href="./src/resources/responses/responses.ts">additionalPropertiesNestedModelReference</a>() -> ResponseAdditionalPropertiesNestedModelReferenceResponse</code>
- <code title="get /responses/allof/cross">client.responses.<a href="./src/resources/responses/responses.ts">allofCrossResource</a>() -> ResponseAllofCrossResourceResponse</code>
- <code title="get /responses/allof/simple">client.responses.<a href="./src/resources/responses/responses.ts">allofSimple</a>() -> ResponseAllofSimpleResponse</code>
- <code title="get /responses/anyof_null">client.responses.<a href="./src/resources/responses/responses.ts">anyofNull</a>() -> ObjectWithAnyOfNullProperty</code>
- <code title="get /responses/array">client.responses.<a href="./src/resources/responses/responses.ts">arrayResponse</a>() -> ResponseArrayResponseResponse</code>
- <code title="post /responses/boolean">client.responses.<a href="./src/resources/responses/responses.ts">booleanResponse</a>() -> ResponseBooleanResponseResponse</code>
- <code title="post /responses/empty">client.responses.<a href="./src/resources/responses/responses.ts">emptyResponse</a>() -> void</code>
- <code title="post /responses/integer">client.responses.<a href="./src/resources/responses/responses.ts">integerResponse</a>() -> ResponseIntegerResponseResponse</code>
- <code title="get /responses/missing_required">client.responses.<a href="./src/resources/responses/responses.ts">missingRequired</a>() -> ResponseMissingRequiredResponse</code>
- <code title="get /responses/nested_array">client.responses.<a href="./src/resources/responses/responses.ts">nestedArray</a>() -> ResponseNestedArrayResponse</code>
- <code title="get /responses/object/everything">client.responses.<a href="./src/resources/responses/responses.ts">objectAllProperties</a>() -> ResponseObjectAllPropertiesResponse</code>
- <code title="post /responses/object_no_properties">client.responses.<a href="./src/resources/responses/responses.ts">objectNoProperties</a>() -> ResponseObjectNoPropertiesResponse</code>
- <code title="post /responses/object_with_additional_properties_prop">client.responses.<a href="./src/resources/responses/responses.ts">objectWithAdditionalPropertiesProp</a>() -> ResponseObjectWithAdditionalPropertiesPropResponse</code>
- <code title="post /responses/object_with_heavily_nested_union">client.responses.<a href="./src/resources/responses/responses.ts">objectWithHeavilyNestedUnion</a>() -> ResponseObjectWithHeavilyNestedUnionResponse</code>
- <code title="get /responses/oneof_null">client.responses.<a href="./src/resources/responses/responses.ts">oneofNull</a>() -> ObjectWithOneOfNullProperty</code>
- <code title="get /responses/shared_simple_object">client.responses.<a href="./src/resources/responses/responses.ts">sharedSimpleObject</a>() -> SimpleObject</code>
- <code title="post /responses/string">client.responses.<a href="./src/resources/responses/responses.ts">stringResponse</a>() -> string</code>
- <code title="post /responses/unknown_object">client.responses.<a href="./src/resources/responses/responses.ts">unknownObject</a>() -> unknown</code>
- <code title="get /responses/with_model_in_nested_path">client.responses.<a href="./src/resources/responses/responses.ts">withModelInNestedPath</a>() -> ModelWithNestedModel</code>

## UnionTypes

Types:

- <code><a href="./src/resources/responses/union-types.ts">UnionTypeMixedTypesResponse</a></code>
- <code><a href="./src/resources/responses/union-types.ts">UnionTypeNullableUnionResponse</a></code>
- <code><a href="./src/resources/responses/union-types.ts">UnionTypeNumbersResponse</a></code>
- <code><a href="./src/resources/responses/union-types.ts">UnionTypeObjectsResponse</a></code>
- <code><a href="./src/resources/responses/union-types.ts">UnionTypeSuperMixedTypesResponse</a></code>

Methods:

- <code title="post /responses/unions/mixed_types">client.responses.unionTypes.<a href="./src/resources/responses/union-types.ts">mixedTypes</a>() -> UnionTypeMixedTypesResponse</code>
- <code title="post /responses/unions/nullable">client.responses.unionTypes.<a href="./src/resources/responses/union-types.ts">nullableUnion</a>() -> UnionTypeNullableUnionResponse | null</code>
- <code title="post /responses/unions/numbers">client.responses.unionTypes.<a href="./src/resources/responses/union-types.ts">numbers</a>() -> UnionTypeNumbersResponse</code>
- <code title="post /responses/unions/objects">client.responses.unionTypes.<a href="./src/resources/responses/union-types.ts">objects</a>() -> UnionTypeObjectsResponse</code>
- <code title="post /responses/unions/super_mixed_types">client.responses.unionTypes.<a href="./src/resources/responses/union-types.ts">superMixedTypes</a>() -> UnionTypeSuperMixedTypesResponse</code>

# PathParams

Types:

- <code><a href="./src/resources/path-params.ts">PathParamMultipleResponse</a></code>
- <code><a href="./src/resources/path-params.ts">PathParamSingularResponse</a></code>

Methods:

- <code title="post /path_params/{dashed-param}">client.pathParams.<a href="./src/resources/path-params.ts">dashedParam</a>(dashedParam) -> BasicSharedModelObject</code>
- <code title="post /path_params/dates/{date_param}">client.pathParams.<a href="./src/resources/path-params.ts">dateParam</a>(dateParam) -> BasicSharedModelObject</code>
- <code title="post /path_params/date_times/{datetime_param}">client.pathParams.<a href="./src/resources/path-params.ts">datetimeParam</a>(datetimeParam) -> BasicSharedModelObject</code>
- <code title="post /path_params/{integer_param}">client.pathParams.<a href="./src/resources/path-params.ts">integerParam</a>(integerParam) -> BasicSharedModelObject</code>
- <code title="post /path_params/{first}/{second}/{last}">client.pathParams.<a href="./src/resources/path-params.ts">multiple</a>(first, second, last) -> PathParamMultipleResponse</code>
- <code title="post /path_params/mixed/{integer_param}/{string_param}">client.pathParams.<a href="./src/resources/path-params.ts">paramsMixedTypes</a>(integerParam, stringParam) -> BasicSharedModelObject</code>
- <code title="post /path_params/{singular}">client.pathParams.<a href="./src/resources/path-params.ts">singular</a>(singular) -> PathParamSingularResponse</code>

# PositionalParams

Methods:

- <code title="post /positional_params/basic_body">client.positionalParams.<a href="./src/resources/positional-params.ts">basicBody</a>({ ...params }) -> void</code>
- <code title="get /positional_params/basic_query">client.positionalParams.<a href="./src/resources/positional-params.ts">basicQuery</a>({ ...params }) -> void</code>
- <code title="post /positional_params/body">client.positionalParams.<a href="./src/resources/positional-params.ts">body</a>({ ...params }) -> void</code>
- <code title="post /positional_params/body_extra_param">client.positionalParams.<a href="./src/resources/positional-params.ts">bodyExtraParam</a>({ ...params }) -> void</code>
- <code title="post /positional_params/query/{id}/kitchen_sink/{key}">client.positionalParams.<a href="./src/resources/positional-params.ts">kitchenSink</a>(id, { ...params }) -> void</code>
- <code title="post /positional_params/{first}/{second}/{last}">client.positionalParams.<a href="./src/resources/positional-params.ts">multiplePathParams</a>(second, { ...params }) -> void</code>
- <code title="get /positional_params/query">client.positionalParams.<a href="./src/resources/positional-params.ts">query</a>({ ...params }) -> void</code>
- <code title="post /positional_params/query/{id}">client.positionalParams.<a href="./src/resources/positional-params.ts">queryAndPath</a>(id, { ...params }) -> void</code>
- <code title="get /positional_params/query_multiple">client.positionalParams.<a href="./src/resources/positional-params.ts">queryMultiple</a>({ ...params }) -> void</code>
- <code title="get /positional_params/{single}">client.positionalParams.<a href="./src/resources/positional-params.ts">single</a>(single) -> void</code>
- <code title="post /positional_params/body/union/{id}">client.positionalParams.<a href="./src/resources/positional-params.ts">unionBodyAndPath</a>(id, { ...params }) -> void</code>

# QueryParams

Methods:

- <code title="get /query_params/allOf">client.queryParams.<a href="./src/resources/query-params.ts">allOf</a>({ ...params }) -> void</code>
- <code title="get /query_params/anyOf">client.queryParams.<a href="./src/resources/query-params.ts">anyOf</a>({ ...params }) -> void</code>
- <code title="get /query_params/anyOfStringOrArray">client.queryParams.<a href="./src/resources/query-params.ts">anyOfStringOrArray</a>({ ...params }) -> void</code>
- <code title="get /query_params/array">client.queryParams.<a href="./src/resources/query-params.ts">array</a>({ ...params }) -> void</code>
- <code title="get /query_params/enum">client.queryParams.<a href="./src/resources/query-params.ts">enum</a>({ ...params }) -> void</code>
- <code title="get /query_params/object">client.queryParams.<a href="./src/resources/query-params.ts">object</a>({ ...params }) -> void</code>
- <code title="get /query_params/oneOf">client.queryParams.<a href="./src/resources/query-params.ts">oneOf</a>({ ...params }) -> void</code>
- <code title="get /query_params/primitives">client.queryParams.<a href="./src/resources/query-params.ts">primitives</a>({ ...params }) -> void</code>

# BodyParams

Types:

- <code><a href="./src/resources/body-params/body-params.ts">ModelWithParamInName</a></code>
- <code><a href="./src/resources/body-params/body-params.ts">MyModel</a></code>
- <code><a href="./src/resources/body-params/body-params.ts">NestedRequestModelA</a></code>
- <code><a href="./src/resources/body-params/body-params.ts">NestedRequestModelB</a></code>
- <code><a href="./src/resources/body-params/body-params.ts">NestedRequestModelC</a></code>
- <code><a href="./src/resources/body-params/body-params.ts">StringMapModel</a></code>
- <code><a href="./src/resources/body-params/body-params.ts">BodyParamTopLevelAllOfResponse</a></code>
- <code><a href="./src/resources/body-params/body-params.ts">BodyParamUnionOverlappingPropResponse</a></code>

Methods:

- <code title="post /body_params/with_nested_models">client.bodyParams.<a href="./src/resources/body-params/body-params.ts">nestedRequestModels</a>({ ...params }) -> ModelWithNestedModel</code>
- <code title="post /body_params/object_with_array_of_objects">client.bodyParams.<a href="./src/resources/body-params/body-params.ts">objectWithArrayOfObjects</a>({ ...params }) -> void</code>
- <code title="post /body_params/param_in_model_name_ref">client.bodyParams.<a href="./src/resources/body-params/body-params.ts">paramInModelNameRef</a>({ ...params }) -> void</code>
- <code title="post /body_params/property_model_ref">client.bodyParams.<a href="./src/resources/body-params/body-params.ts">propertyModelRef</a>({ ...params }) -> void</code>
- <code title="post /body_params/property_with_complex_union">client.bodyParams.<a href="./src/resources/body-params/body-params.ts">propertyWithComplexUnion</a>({ ...params }) -> void</code>
- <code title="post /body_params/property_with_heavily_nested_complex_union">client.bodyParams.<a href="./src/resources/body-params/body-params.ts">propertyWithHeavilyNestedComplexUnion</a>({ ...params }) -> void</code>
- <code title="post /body_params/read_only_properties">client.bodyParams.<a href="./src/resources/body-params/body-params.ts">readOnlyProperties</a>({ ...params }) -> void</code>
- <code title="post /body_params/string_map_model_ref">client.bodyParams.<a href="./src/resources/body-params/body-params.ts">stringMapModelRef</a>({ ...params }) -> void</code>
- <code title="post /body_params/top_level_allOf">client.bodyParams.<a href="./src/resources/body-params/body-params.ts">topLevelAllOf</a>({ ...params }) -> BodyParamTopLevelAllOfResponse</code>
- <code title="post /body_params/top_level_allOf_nested_object">client.bodyParams.<a href="./src/resources/body-params/body-params.ts">topLevelAllOfNestedObject</a>({ ...params }) -> void</code>
- <code title="post /body_params/top_level_anyOf_with_ref">client.bodyParams.<a href="./src/resources/body-params/body-params.ts">topLevelAnyOfWithRef</a>({ ...params }) -> BasicSharedModelObject</code>
- <code title="post /body_params/top_level_array">client.bodyParams.<a href="./src/resources/body-params/body-params.ts">topLevelArray</a>([ ...items ]) -> void</code>
- <code title="post /body_params/top_level_array_with_children">client.bodyParams.<a href="./src/resources/body-params/body-params.ts">topLevelArrayWithChildren</a>([ ...items ]) -> void</code>
- <code title="post /body_params/top_level_oneOf_one_entry">client.bodyParams.<a href="./src/resources/body-params/body-params.ts">topLevelOneOfOneEntry</a>({ ...params }) -> void</code>
- <code title="post /body_params/top_level_shared_type">client.bodyParams.<a href="./src/resources/body-params/body-params.ts">topLevelSharedType</a>({ ...params }) -> void</code>
- <code title="post /body_params/top_level_anyOf_overlapping_property">client.bodyParams.<a href="./src/resources/body-params/body-params.ts">unionOverlappingProp</a>({ ...params }) -> BodyParamUnionOverlappingPropResponse</code>
- <code title="post /body_params/with_default_body_param_optional">client.bodyParams.<a href="./src/resources/body-params/body-params.ts">withDefaultBodyParamOptional</a>({ ...params }) -> void</code>
- <code title="post /body_params/with_default_body_param_required">client.bodyParams.<a href="./src/resources/body-params/body-params.ts">withDefaultBodyParamRequired</a>({ ...params }) -> void</code>
- <code title="post /body_params/with_model_property">client.bodyParams.<a href="./src/resources/body-params/body-params.ts">withModelProperty</a>({ ...params }) -> void</code>

## Unions

Types:

- <code><a href="./src/resources/body-params/unions.ts">ModelString</a></code>

Methods:

- <code title="post /body_params/unions/param_union_enum_new_type">client.bodyParams.unions.<a href="./src/resources/body-params/unions.ts">paramUnionEnumNewType</a>({ ...params }) -> void</code>

# HeaderParams

Methods:

- <code title="post /header_params/client_argument">client.headerParams.<a href="./src/resources/header-params.ts">clientArgument</a>({ ...params }) -> void</code>

# MixedParams

Methods:

- <code title="post /mixed_params/query_and_body">client.mixedParams.<a href="./src/resources/mixed-params/mixed-params.ts">queryAndBody</a>({ ...params }) -> BasicSharedModelObject</code>
- <code title="post /mixed_params/query_body_and_path/{path_param}">client.mixedParams.<a href="./src/resources/mixed-params/mixed-params.ts">queryBodyAndPath</a>(pathParam, { ...params }) -> BasicSharedModelObject</code>

## Duplicates

Methods:

- <code title="post /mixed_params/duplicates/body_and_path/{id}">client.mixedParams.duplicates.<a href="./src/resources/mixed-params/duplicates.ts">bodyAndPath</a>(pathId, { ...params }) -> BasicSharedModelObject</code>
- <code title="post /mixed_params/duplicates/query_and_body">client.mixedParams.duplicates.<a href="./src/resources/mixed-params/duplicates.ts">queryAndBody</a>({ ...params }) -> BasicSharedModelObject</code>
- <code title="post /mixed_params/duplicates/query_and_path/{id}">client.mixedParams.duplicates.<a href="./src/resources/mixed-params/duplicates.ts">queryAndPath</a>(pathId, { ...params }) -> BasicSharedModelObject</code>

# MakeAmbiguousSchemasLooser

Types:

- <code><a href="./src/resources/make-ambiguous-schemas-looser.ts">MakeAmbiguousSchemasLooserMakeAmbiguousSchemasLooserResponse</a></code>

Methods:

- <code title="get /make-ambiguous-schemas-looser">client.makeAmbiguousSchemasLooser.<a href="./src/resources/make-ambiguous-schemas-looser.ts">makeAmbiguousSchemasLooser</a>() -> MakeAmbiguousSchemasLooserMakeAmbiguousSchemasLooserResponse</code>

# MakeAmbiguousSchemasExplicit

Types:

- <code><a href="./src/resources/make-ambiguous-schemas-explicit.ts">MakeAmbiguousSchemasExplicitMakeAmbiguousSchemasExplicitResponse</a></code>

Methods:

- <code title="get /make-ambiguous-schemas-explicit">client.makeAmbiguousSchemasExplicit.<a href="./src/resources/make-ambiguous-schemas-explicit.ts">makeAmbiguousSchemasExplicit</a>() -> MakeAmbiguousSchemasExplicitMakeAmbiguousSchemasExplicitResponse</code>

# DecoratorTests

Types:

- <code><a href="./src/resources/decorator-tests/decorator-tests.ts">DecoratorTestKeepMeResponse</a></code>

Methods:

- <code title="get /decorator_tests/keep/me">client.decoratorTests.<a href="./src/resources/decorator-tests/decorator-tests.ts">keepMe</a>() -> DecoratorTestKeepMeResponse</code>

## Languages

Methods:

- <code title="get /responses/shared_simple_object">client.decoratorTests.languages.<a href="./src/resources/decorator-tests/languages.ts">skippedForPython</a>() -> SimpleObject</code>

## KeepThisResource

Types:

- <code><a href="./src/resources/decorator-tests/keep-this-resource.ts">KeepThisResourceKeepThisMethodResponse</a></code>

Methods:

- <code title="get /decorator_tests/nested/keep/this/method">client.decoratorTests.keepThisResource.<a href="./src/resources/decorator-tests/keep-this-resource.ts">keepThisMethod</a>() -> KeepThisResourceKeepThisMethodResponse</code>

# Tests

Methods:

- <code title="get /tests/run_codegen">client.tests.<a href="./src/resources/tests.ts">runCodegen</a>() -> void</code>

# DeeplyNested

## LevelOne

Types:

- <code><a href="./src/resources/deeply-nested/level-one/level-one.ts">ModelLevel1</a></code>

Methods:

- <code title="get /cards/{card_token}">client.deeplyNested.levelOne.<a href="./src/resources/deeply-nested/level-one/level-one.ts">methodLevel1</a>(cardToken) -> Card</code>

### LevelTwo

Types:

- <code><a href="./src/resources/deeply-nested/level-one/level-two/level-two.ts">ModelLevel2</a></code>

Methods:

- <code title="get /cards/{card_token}">client.deeplyNested.levelOne.levelTwo.<a href="./src/resources/deeply-nested/level-one/level-two/level-two.ts">methodLevel2</a>(cardToken) -> Card</code>

#### LevelThree

Types:

- <code><a href="./src/resources/deeply-nested/level-one/level-two/level-three.ts">ModelLevel3</a></code>

Methods:

- <code title="get /cards/{card_token}">client.deeplyNested.levelOne.levelTwo.levelThree.<a href="./src/resources/deeply-nested/level-one/level-two/level-three.ts">methodLevel3</a>(cardToken) -> Card</code>

# Version1_30Names

Types:

- <code><a href="./src/resources/version-1-30-names.ts">Version1_30NameCreateResponse</a></code>

Methods:

- <code title="post /version_1_30_names/query/{version_1_15}">client.version1_30Names.<a href="./src/resources/version-1-30-names.ts">create</a>(version1_15, { ...params }) -> Version1_30NameCreateResponse</code>

# Recursion

Types:

- <code><a href="./src/resources/recursion/recursion.ts">ArrayRecursion</a></code>
- <code><a href="./src/resources/recursion/recursion.ts">BranchRecursion</a></code>
- <code><a href="./src/resources/recursion/recursion.ts">BranchRecursionChildA</a></code>
- <code><a href="./src/resources/recursion/recursion.ts">BranchRecursionChildB</a></code>
- <code><a href="./src/resources/recursion/recursion.ts">SelfRecursion</a></code>
- <code><a href="./src/resources/recursion/recursion.ts">RecursionCreateEnvelopeResponse</a></code>

Methods:

- <code title="post /recursion/branch">client.recursion.<a href="./src/resources/recursion/recursion.ts">createBranch</a>({ ...params }) -> BranchRecursion</code>
- <code title="post /recursion/envelope">client.recursion.<a href="./src/resources/recursion/recursion.ts">createEnvelope</a>({ ...params }) -> RecursionCreateEnvelopeResponse</code>
- <code title="post /recursion/self">client.recursion.<a href="./src/resources/recursion/recursion.ts">createSelf</a>({ ...params }) -> SelfRecursion</code>

## SharedResponses

Methods:

- <code title="post /recursion/shared/responses/self">client.recursion.sharedResponses.<a href="./src/resources/recursion/shared-responses.ts">createSelf</a>() -> SharedSelfRecursion</code>

# SharedQueryParams

Types:

- <code><a href="./src/resources/shared-query-params.ts">SharedQueryParamRetrieveResponse</a></code>
- <code><a href="./src/resources/shared-query-params.ts">SharedQueryParamDelResponse</a></code>

Methods:

- <code title="get /shared-query-params">client.sharedQueryParams.<a href="./src/resources/shared-query-params.ts">retrieve</a>({ ...params }) -> string</code>
- <code title="delete /shared-query-params">client.sharedQueryParams.<a href="./src/resources/shared-query-params.ts">del</a>({ ...params }) -> string</code>

# ModelReferencedInParentAndChild

Types:

- <code><a href="./src/resources/model-referenced-in-parent-and-child/model-referenced-in-parent-and-child.ts">ModelReferencedInParentAndChild</a></code>

Methods:

- <code title="get /model_referenced_in_parent_and_child">client.modelReferencedInParentAndChild.<a href="./src/resources/model-referenced-in-parent-and-child/model-referenced-in-parent-and-child.ts">retrieve</a>() -> ModelReferencedInParentAndChild</code>

## Child

Methods:

- <code title="get /model_referenced_in_parent_and_child/child">client.modelReferencedInParentAndChild.child.<a href="./src/resources/model-referenced-in-parent-and-child/child.ts">retrieve</a>() -> ModelReferencedInParentAndChild</code>
