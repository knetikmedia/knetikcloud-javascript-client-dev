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
    define(['ApiClient', 'model/MessageResource', 'model/MessageTemplateBulkRequest', 'model/MessageTemplateResource', 'model/PageResourceMessageTemplateResource', 'model/RawEmailResource', 'model/RawPushResource', 'model/RawSMSResource', 'model/Result', 'model/TemplateEmailResource', 'model/TemplatePushResource', 'model/TemplateSMSResource', 'model/WebsocketMessageResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/MessageResource'), require('../model/MessageTemplateBulkRequest'), require('../model/MessageTemplateResource'), require('../model/PageResourceMessageTemplateResource'), require('../model/RawEmailResource'), require('../model/RawPushResource'), require('../model/RawSMSResource'), require('../model/Result'), require('../model/TemplateEmailResource'), require('../model/TemplatePushResource'), require('../model/TemplateSMSResource'), require('../model/WebsocketMessageResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.MessagingApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.MessageResource, root.KnetikCloud.MessageTemplateBulkRequest, root.KnetikCloud.MessageTemplateResource, root.KnetikCloud.PageResourceMessageTemplateResource, root.KnetikCloud.RawEmailResource, root.KnetikCloud.RawPushResource, root.KnetikCloud.RawSMSResource, root.KnetikCloud.Result, root.KnetikCloud.TemplateEmailResource, root.KnetikCloud.TemplatePushResource, root.KnetikCloud.TemplateSMSResource, root.KnetikCloud.WebsocketMessageResource);
  }
}(this, function(ApiClient, MessageResource, MessageTemplateBulkRequest, MessageTemplateResource, PageResourceMessageTemplateResource, RawEmailResource, RawPushResource, RawSMSResource, Result, TemplateEmailResource, TemplatePushResource, TemplateSMSResource, WebsocketMessageResource) {
  'use strict';

  /**
   * Messaging service.
   * @module api/MessagingApi
   * @version 3.0.11
   */

  /**
   * Constructs a new MessagingApi. 
   * @alias module:api/MessagingApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Compile a message template
     * Processes a set of input data against the template and returnes the compiled result. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; MESSAGING_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/MessageTemplateBulkRequest} opts.request request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {'String': 'String'}>} and HTTP response
     */
    this.compileMessageTemplateWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['request'];


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
      var returnType = {'String': 'String'};

      return this.apiClient.callApi(
        '/messaging/templates/compilations', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Compile a message template
     * Processes a set of input data against the template and returnes the compiled result. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; MESSAGING_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/MessageTemplateBulkRequest} opts.request request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {'String': 'String'}>}
     */
    this.compileMessageTemplate = function(opts) {
      return this.compileMessageTemplateWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a message template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; MESSAGING_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/MessageTemplateResource} opts.messageTemplate The new template email to be sent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MessageTemplateResource} and HTTP response
     */
    this.createMessageTemplateWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['messageTemplate'];


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
      var returnType = MessageTemplateResource;

      return this.apiClient.callApi(
        '/messaging/templates', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a message template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; MESSAGING_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/MessageTemplateResource} opts.messageTemplate The new template email to be sent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MessageTemplateResource}
     */
    this.createMessageTemplate = function(opts) {
      return this.createMessageTemplateWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an existing message template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; MESSAGING_ADMIN
     * @param {String} id The message_template id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteMessageTemplateWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteMessageTemplate");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/messaging/templates/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an existing message template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; MESSAGING_ADMIN
     * @param {String} id The message_template id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteMessageTemplate = function(id) {
      return this.deleteMessageTemplateWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single message template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; MESSAGING_ADMIN
     * @param {String} id The message_template id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MessageTemplateResource} and HTTP response
     */
    this.getMessageTemplateWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getMessageTemplate");
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
      var returnType = MessageTemplateResource;

      return this.apiClient.callApi(
        '/messaging/templates/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single message template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; MESSAGING_ADMIN
     * @param {String} id The message_template id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MessageTemplateResource}
     */
    this.getMessageTemplate = function(id) {
      return this.getMessageTemplateWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search message templates
     * Get a list of message templates with optional filtering. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; MESSAGING_ADMIN
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterTagset Filter for message templates with at least one of a specified set of tags (separated by comma)
     * @param {String} opts.filterTagIntersection Filter for message templates with all of a specified set of tags (separated by comma)
     * @param {String} opts.filterTagExclusion Filter for message templates with none of a specified set of tags (separated by comma)
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceMessageTemplateResource} and HTTP response
     */
    this.getMessageTemplatesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_tagset': opts['filterTagset'],
        'filter_tag_intersection': opts['filterTagIntersection'],
        'filter_tag_exclusion': opts['filterTagExclusion'],
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
      var returnType = PageResourceMessageTemplateResource;

      return this.apiClient.callApi(
        '/messaging/templates', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search message templates
     * Get a list of message templates with optional filtering. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; MESSAGING_ADMIN
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterTagset Filter for message templates with at least one of a specified set of tags (separated by comma)
     * @param {String} opts.filterTagIntersection Filter for message templates with all of a specified set of tags (separated by comma)
     * @param {String} opts.filterTagExclusion Filter for message templates with none of a specified set of tags (separated by comma)
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceMessageTemplateResource}
     */
    this.getMessageTemplates = function(opts) {
      return this.getMessageTemplatesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send a message
     * Sends a message with one or more formats to one or more users. Fill in any message formats desired (email, sms, websockets) and each user will recieve all valid formats. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; MESSAGING_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/MessageResource} opts.messageResource The message to be sent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.sendMessageWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['messageResource'];


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
      var returnType = null;

      return this.apiClient.callApi(
        '/messaging/message', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send a message
     * Sends a message with one or more formats to one or more users. Fill in any message formats desired (email, sms, websockets) and each user will recieve all valid formats. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; MESSAGING_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/MessageResource} opts.messageResource The message to be sent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.sendMessage = function(opts) {
      return this.sendMessageWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send a raw email to one or more users
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; MESSAGING_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/RawEmailResource} opts.rawEmailResource The new raw email to be sent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.sendRawEmailWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['rawEmailResource'];


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
      var returnType = null;

      return this.apiClient.callApi(
        '/messaging/raw-email', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send a raw email to one or more users
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; MESSAGING_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/RawEmailResource} opts.rawEmailResource The new raw email to be sent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.sendRawEmail = function(opts) {
      return this.sendRawEmailWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send a raw push notification
     * Sends a raw push notification message to one or more users. User&#39;s without registered mobile device for the application will be skipped. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; MESSAGING_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/RawPushResource} opts.rawPushResource The new raw push notification to be sent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.sendRawPushWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['rawPushResource'];


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
      var returnType = null;

      return this.apiClient.callApi(
        '/messaging/raw-push', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send a raw push notification
     * Sends a raw push notification message to one or more users. User&#39;s without registered mobile device for the application will be skipped. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; MESSAGING_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/RawPushResource} opts.rawPushResource The new raw push notification to be sent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.sendRawPush = function(opts) {
      return this.sendRawPushWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send a raw SMS
     * Sends a raw SMS text message to one or more users. User&#39;s without registered mobile numbers will be skipped. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; MESSAGING_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/RawSMSResource} opts.rawSMSResource The new raw SMS to be sent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.sendRawSMSWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['rawSMSResource'];


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
      var returnType = null;

      return this.apiClient.callApi(
        '/messaging/raw-sms', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send a raw SMS
     * Sends a raw SMS text message to one or more users. User&#39;s without registered mobile numbers will be skipped. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; MESSAGING_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/RawSMSResource} opts.rawSMSResource The new raw SMS to be sent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.sendRawSMS = function(opts) {
      return this.sendRawSMSWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send a templated email to one or more users
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; MESSAGING_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateEmailResource} opts.messageResource The new template email to be sent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.sendTemplatedEmailWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['messageResource'];


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
      var returnType = null;

      return this.apiClient.callApi(
        '/messaging/templated-email', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send a templated email to one or more users
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; MESSAGING_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateEmailResource} opts.messageResource The new template email to be sent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.sendTemplatedEmail = function(opts) {
      return this.sendTemplatedEmailWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send a templated push notification
     * Sends a templated push notification message to one or more users. User&#39;s without registered mobile device for the application will be skipped. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; MESSAGING_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplatePushResource} opts.templatePushResource The new templated push notification to be sent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.sendTemplatedPushWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['templatePushResource'];


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
      var returnType = null;

      return this.apiClient.callApi(
        '/messaging/templated-push', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send a templated push notification
     * Sends a templated push notification message to one or more users. User&#39;s without registered mobile device for the application will be skipped. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; MESSAGING_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplatePushResource} opts.templatePushResource The new templated push notification to be sent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.sendTemplatedPush = function(opts) {
      return this.sendTemplatedPushWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send a new templated SMS
     * Sends a templated SMS text message to one or more users. User&#39;s without registered mobile numbers will be skipped. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; MESSAGING_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateSMSResource} opts.templateSMSResource The new template SMS to be sent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.sendTemplatedSMSWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['templateSMSResource'];


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
      var returnType = null;

      return this.apiClient.callApi(
        '/messaging/templated-sms', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send a new templated SMS
     * Sends a templated SMS text message to one or more users. User&#39;s without registered mobile numbers will be skipped. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; MESSAGING_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateSMSResource} opts.templateSMSResource The new template SMS to be sent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.sendTemplatedSMS = function(opts) {
      return this.sendTemplatedSMSWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send a websocket message
     * Sends a websocket message to one or more users. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; MESSAGING_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/WebsocketMessageResource} opts.websocketResource The new websocket message to be sent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.sendWebsocketWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['websocketResource'];


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
      var returnType = null;

      return this.apiClient.callApi(
        '/messaging/websocket-message', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send a websocket message
     * Sends a websocket message to one or more users. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; MESSAGING_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/WebsocketMessageResource} opts.websocketResource The new websocket message to be sent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.sendWebsocket = function(opts) {
      return this.sendWebsocketWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an existing message template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; MESSAGING_ADMIN
     * @param {String} id The message_template id
     * @param {Object} opts Optional parameters
     * @param {module:model/MessageTemplateResource} opts.messageTemplateResource The message template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MessageTemplateResource} and HTTP response
     */
    this.updateMessageTemplateWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['messageTemplateResource'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateMessageTemplate");
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
      var returnType = MessageTemplateResource;

      return this.apiClient.callApi(
        '/messaging/templates/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an existing message template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; MESSAGING_ADMIN
     * @param {String} id The message_template id
     * @param {Object} opts Optional parameters
     * @param {module:model/MessageTemplateResource} opts.messageTemplateResource The message template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MessageTemplateResource}
     */
    this.updateMessageTemplate = function(id, opts) {
      return this.updateMessageTemplateWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
