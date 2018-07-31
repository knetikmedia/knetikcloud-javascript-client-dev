/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com.
 *
 * OpenAPI spec version: latest 
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/FlagReportResource', 'model/FlagResource', 'model/PageResourceFlagReportResource', 'model/PageResourceFlagResource', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FlagReportResource'), require('../model/FlagResource'), require('../model/PageResourceFlagReportResource'), require('../model/PageResourceFlagResource'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.MediaModerationApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.FlagReportResource, root.KnetikCloud.FlagResource, root.KnetikCloud.PageResourceFlagReportResource, root.KnetikCloud.PageResourceFlagResource, root.KnetikCloud.Result);
  }
}(this, function(ApiClient, FlagReportResource, FlagResource, PageResourceFlagReportResource, PageResourceFlagResource, Result) {
  'use strict';

  /**
   * MediaModeration service.
   * @module api/MediaModerationApi
   * @version 3.0.11
   */

  /**
   * Constructs a new MediaModerationApi. 
   * @alias module:api/MediaModerationApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add a flag
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Object} opts Optional parameters
     * @param {module:model/FlagResource} opts.flagResource The flag resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FlagResource} and HTTP response
     */
    this.addFlagWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['flagResource'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FlagResource;

      return this.apiClient.callApi(
        '/moderation/flags', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add a flag
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Object} opts Optional parameters
     * @param {module:model/FlagResource} opts.flagResource The flag resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FlagResource}
     */
    this.addFlag = function(opts) {
      return this.addFlagWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a flag
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; MODERATION_ADMIN or owner
     * @param {Object} opts Optional parameters
     * @param {String} opts.contextName The name of the context
     * @param {String} opts.contextId The id of the context
     * @param {Number} opts.userId The id of the user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteFlagWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'context_name': opts['contextName'],
        'context_id': opts['contextId'],
        'user_id': opts['userId'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/moderation/flags', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a flag
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; MODERATION_ADMIN or owner
     * @param {Object} opts Optional parameters
     * @param {String} opts.contextName The name of the context
     * @param {String} opts.contextId The id of the context
     * @param {Number} opts.userId The id of the user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteFlag = function(opts) {
      return this.deleteFlagWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a page of flags
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; MODERATION_ADMIN or owner
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterContext Filter by flag context
     * @param {String} opts.filterContextId Filter by flag context ID
     * @param {Number} opts.filterUserId Filter by user ID
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceFlagResource} and HTTP response
     */
    this.getFlagsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_context': opts['filterContext'],
        'filter_context_id': opts['filterContextId'],
        'filter_user_id': opts['filterUserId'],
        'size': opts['size'],
        'page': opts['page'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PageResourceFlagResource;

      return this.apiClient.callApi(
        '/moderation/flags', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns a page of flags
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; MODERATION_ADMIN or owner
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterContext Filter by flag context
     * @param {String} opts.filterContextId Filter by flag context ID
     * @param {Number} opts.filterUserId Filter by user ID
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceFlagResource}
     */
    this.getFlags = function(opts) {
      return this.getFlagsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a flag report
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; MODERATION_ADMIN
     * @param {Number} id The flag report id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FlagReportResource} and HTTP response
     */
    this.getModerationReportWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getModerationReport");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = FlagReportResource;

      return this.apiClient.callApi(
        '/moderation/reports/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a flag report
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; MODERATION_ADMIN
     * @param {Number} id The flag report id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FlagReportResource}
     */
    this.getModerationReport = function(id) {
      return this.getModerationReportWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a page of flag reports
     * Context can be either a free-form string or a pre-defined context name. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; MODERATION_ADMIN
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.excludeResolved Ignore resolved context (default to true)
     * @param {String} opts.filterContext Filter by moderation context
     * @param {String} opts.filterContextId Filter by moderation context ID
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceFlagReportResource} and HTTP response
     */
    this.getModerationReportsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'exclude_resolved': opts['excludeResolved'],
        'filter_context': opts['filterContext'],
        'filter_context_id': opts['filterContextId'],
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PageResourceFlagReportResource;

      return this.apiClient.callApi(
        '/moderation/reports', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns a page of flag reports
     * Context can be either a free-form string or a pre-defined context name. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; MODERATION_ADMIN
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.excludeResolved Ignore resolved context (default to true)
     * @param {String} opts.filterContext Filter by moderation context
     * @param {String} opts.filterContextId Filter by moderation context ID
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceFlagReportResource}
     */
    this.getModerationReports = function(opts) {
      return this.getModerationReportsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a flag report
     * Lets you set the resolution of a report. Resolution types is {banned,ignore} in case of &#39;banned&#39; you will need to pass the reason. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; MODERATION_ADMIN
     * @param {Number} id The flag report id
     * @param {Object} opts Optional parameters
     * @param {module:model/FlagReportResource} opts.flagReportResource The new flag report
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateModerationReportWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['flagReportResource'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateModerationReport");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/moderation/reports/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a flag report
     * Lets you set the resolution of a report. Resolution types is {banned,ignore} in case of &#39;banned&#39; you will need to pass the reason. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; MODERATION_ADMIN
     * @param {Number} id The flag report id
     * @param {Object} opts Optional parameters
     * @param {module:model/FlagReportResource} opts.flagReportResource The new flag report
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateModerationReport = function(id, opts) {
      return this.updateModerationReportWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));