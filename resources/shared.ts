// File generated from our OpenAPI spec by Stainless.

export interface ObjectWithChildRef {
  bar?: SimpleObject;

  foo?: string;
}

export namespace ObjectWithChildRef {
  export interface Bar {
    bar?: number;
  }
}

export interface SimpleObject {
  bar?: number;
}
