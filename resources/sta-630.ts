// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core'
import { APIResource } from '~/resource'
import type * as FormData from 'formdata-node'
import { multipartFormRequestOptions, maybeMultipartFormRequestOptions } from '~/core'
import { isRequestOptions } from '~/core'
import * as Shared from '~/resources/shared'

export class Sta_630Resource extends APIResource {

  nestedPath(options?: Core.RequestOptions): Promise<Core.APIResponse<GithubUser>>{
         return this.get('/sta_630/define_models_nested_path', options)
       };
}

export interface GithubUser  {
  /**
 * Someone's email address.
 */
email: string

preferences: GithubUserPreferences
}

export interface GithubUserPreferences  {
  /**
 * What email they want in their commit messages
 */
commit_email: string

/**
 * What name they want in their commit messages
 */
commit_name: string

/**
 * Do they prefer view Git diffs side by side, or interleaved?
 */
diff_style: 'interleaved' | 'side_by_side'
}