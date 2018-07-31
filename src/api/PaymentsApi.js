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
    define(['ApiClient', 'model/PageResourcePaymentMethodTypeResource', 'model/PaymentAuthorizationResource', 'model/PaymentMethodResource', 'model/PaymentMethodTypeResource', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourcePaymentMethodTypeResource'), require('../model/PaymentAuthorizationResource'), require('../model/PaymentMethodResource'), require('../model/PaymentMethodTypeResource'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.PaymentsApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.PageResourcePaymentMethodTypeResource, root.KnetikCloud.PaymentAuthorizationResource, root.KnetikCloud.PaymentMethodResource, root.KnetikCloud.PaymentMethodTypeResource, root.KnetikCloud.Result);
  }
}(this, function(ApiClient, PageResourcePaymentMethodTypeResource, PaymentAuthorizationResource, PaymentMethodResource, PaymentMethodTypeResource, Result) {
  'use strict';

  /**
   * Payments service.
   * @module api/PaymentsApi
   * @version 3.0.11
   */

  /**
   * Constructs a new PaymentsApi. 
   * @alias module:api/PaymentsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a new payment method for a user
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PAYMENTS_ADMIN or owner
     * @param {Number} userId ID of the user for whom the payment method is being created
     * @param {Object} opts Optional parameters
     * @param {module:model/PaymentMethodResource} opts.paymentMethod Payment method being created
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentMethodResource} and HTTP response
     */
    this.createPaymentMethodWithHttpInfo = function(userId, opts) {
      opts = opts || {};
      var postBody = opts['paymentMethod'];

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling createPaymentMethod");
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = PaymentMethodResource;

      return this.apiClient.callApi(
        '/users/{user_id}/payment-methods', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new payment method for a user
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PAYMENTS_ADMIN or owner
     * @param {Number} userId ID of the user for whom the payment method is being created
     * @param {Object} opts Optional parameters
     * @param {module:model/PaymentMethodResource} opts.paymentMethod Payment method being created
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentMethodResource}
     */
    this.createPaymentMethod = function(userId, opts) {
      return this.createPaymentMethodWithHttpInfo(userId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an existing payment method for a user
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PAYMENTS_ADMIN or owner
     * @param {Number} userId ID of the user for whom the payment method is being updated
     * @param {Number} id ID of the payment method being deleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deletePaymentMethodWithHttpInfo = function(userId, id) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deletePaymentMethod");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deletePaymentMethod");
      }


      var pathParams = {
        'user_id': userId,
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
        '/users/{user_id}/payment-methods/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an existing payment method for a user
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PAYMENTS_ADMIN or owner
     * @param {Number} userId ID of the user for whom the payment method is being updated
     * @param {Number} id ID of the payment method being deleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deletePaymentMethod = function(userId, id) {
      return this.deletePaymentMethodWithHttpInfo(userId, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single payment method for a user
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PAYMENTS_ADMIN or owner
     * @param {Number} userId ID of the user for whom the payment method is being retrieved
     * @param {Number} id ID of the payment method being retrieved
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentMethodResource} and HTTP response
     */
    this.getPaymentMethodWithHttpInfo = function(userId, id) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getPaymentMethod");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPaymentMethod");
      }


      var pathParams = {
        'user_id': userId,
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
      var returnType = PaymentMethodResource;

      return this.apiClient.callApi(
        '/users/{user_id}/payment-methods/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single payment method for a user
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PAYMENTS_ADMIN or owner
     * @param {Number} userId ID of the user for whom the payment method is being retrieved
     * @param {Number} id ID of the payment method being retrieved
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentMethodResource}
     */
    this.getPaymentMethod = function(userId, id) {
      return this.getPaymentMethodWithHttpInfo(userId, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single payment method type
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Number} id ID of the payment method type being retrieved
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentMethodTypeResource} and HTTP response
     */
    this.getPaymentMethodTypeWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPaymentMethodType");
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
      var returnType = PaymentMethodTypeResource;

      return this.apiClient.callApi(
        '/payment/types/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single payment method type
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Number} id ID of the payment method type being retrieved
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentMethodTypeResource}
     */
    this.getPaymentMethodType = function(id) {
      return this.getPaymentMethodTypeWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all payment method types
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterName Filter for payment method types whose name matches a given string
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourcePaymentMethodTypeResource} and HTTP response
     */
    this.getPaymentMethodTypesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_name': opts['filterName'],
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
      var returnType = PageResourcePaymentMethodTypeResource;

      return this.apiClient.callApi(
        '/payment/types', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all payment method types
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterName Filter for payment method types whose name matches a given string
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourcePaymentMethodTypeResource}
     */
    this.getPaymentMethodTypes = function(opts) {
      return this.getPaymentMethodTypesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all payment methods for a user
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PAYMENTS_ADMIN or owner
     * @param {Number} userId ID of the user for whom the payment methods are being retrieved
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterName Filter for payment methods whose name starts with a given string
     * @param {module:model/String} opts.filterPaymentType Filter for payment methods with a specific payment type
     * @param {Number} opts.filterPaymentMethodTypeId Filter for payment methods with a specific payment method type by id
     * @param {String} opts.filterPaymentMethodTypeName Filter for payment methods whose payment method type name starts with a given string
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PaymentMethodResource>} and HTTP response
     */
    this.getPaymentMethodsWithHttpInfo = function(userId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getPaymentMethods");
      }


      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
        'filter_name': opts['filterName'],
        'filter_payment_type': opts['filterPaymentType'],
        'filter_payment_method_type_id': opts['filterPaymentMethodTypeId'],
        'filter_payment_method_type_name': opts['filterPaymentMethodTypeName'],
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
      var returnType = [PaymentMethodResource];

      return this.apiClient.callApi(
        '/users/{user_id}/payment-methods', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all payment methods for a user
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PAYMENTS_ADMIN or owner
     * @param {Number} userId ID of the user for whom the payment methods are being retrieved
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterName Filter for payment methods whose name starts with a given string
     * @param {module:model/String} opts.filterPaymentType Filter for payment methods with a specific payment type
     * @param {Number} opts.filterPaymentMethodTypeId Filter for payment methods with a specific payment method type by id
     * @param {String} opts.filterPaymentMethodTypeName Filter for payment methods whose payment method type name starts with a given string
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PaymentMethodResource>}
     */
    this.getPaymentMethods = function(userId, opts) {
      return this.getPaymentMethodsWithHttpInfo(userId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Authorize payment of an invoice for later capture
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PAYMENTS_ADMIN or PAYMENTS_USER
     * @param {Object} opts Optional parameters
     * @param {module:model/PaymentAuthorizationResource} opts.request Payment authorization request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentAuthorizationResource} and HTTP response
     */
    this.paymentAuthorizationWithHttpInfo = function(opts) {
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
      var returnType = PaymentAuthorizationResource;

      return this.apiClient.callApi(
        '/payment/authorizations', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Authorize payment of an invoice for later capture
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PAYMENTS_ADMIN or PAYMENTS_USER
     * @param {Object} opts Optional parameters
     * @param {module:model/PaymentAuthorizationResource} opts.request Payment authorization request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentAuthorizationResource}
     */
    this.paymentAuthorization = function(opts) {
      return this.paymentAuthorizationWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Capture an existing invoice payment authorization
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PAYMENTS_ADMIN
     * @param {Number} id ID of the payment authorization to capture
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.paymentCaptureWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling paymentCapture");
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
        '/payment/authorizations/{id}/capture', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Capture an existing invoice payment authorization
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PAYMENTS_ADMIN
     * @param {Number} id ID of the payment authorization to capture
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.paymentCapture = function(id) {
      return this.paymentCaptureWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an existing payment method for a user
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PAYMENTS_ADMIN or owner
     * @param {Number} userId ID of the user for whom the payment method is being updated
     * @param {Number} id ID of the payment method being updated
     * @param {Object} opts Optional parameters
     * @param {module:model/PaymentMethodResource} opts.paymentMethod The updated payment method data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentMethodResource} and HTTP response
     */
    this.updatePaymentMethodWithHttpInfo = function(userId, id, opts) {
      opts = opts || {};
      var postBody = opts['paymentMethod'];

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updatePaymentMethod");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updatePaymentMethod");
      }


      var pathParams = {
        'user_id': userId,
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
      var returnType = PaymentMethodResource;

      return this.apiClient.callApi(
        '/users/{user_id}/payment-methods/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an existing payment method for a user
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PAYMENTS_ADMIN or owner
     * @param {Number} userId ID of the user for whom the payment method is being updated
     * @param {Number} id ID of the payment method being updated
     * @param {Object} opts Optional parameters
     * @param {module:model/PaymentMethodResource} opts.paymentMethod The updated payment method data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentMethodResource}
     */
    this.updatePaymentMethod = function(userId, id, opts) {
      return this.updatePaymentMethodWithHttpInfo(userId, id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
