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
    define(['ApiClient', 'model/MonitoringAlertResource', 'model/MonitoringIncidentEventResource', 'model/MonitoringIncidentResource', 'model/MonitoringMetricDatapointResource', 'model/MonitoringMetricResource', 'model/PageResourceMonitoringAlertResource', 'model/PageResourceMonitoringIncidentEventResource', 'model/PageResourceMonitoringIncidentResource', 'model/PageResourceMonitoringMetricResource', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/MonitoringAlertResource'), require('../model/MonitoringIncidentEventResource'), require('../model/MonitoringIncidentResource'), require('../model/MonitoringMetricDatapointResource'), require('../model/MonitoringMetricResource'), require('../model/PageResourceMonitoringAlertResource'), require('../model/PageResourceMonitoringIncidentEventResource'), require('../model/PageResourceMonitoringIncidentResource'), require('../model/PageResourceMonitoringMetricResource'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.MonitoringApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.MonitoringAlertResource, root.KnetikCloud.MonitoringIncidentEventResource, root.KnetikCloud.MonitoringIncidentResource, root.KnetikCloud.MonitoringMetricDatapointResource, root.KnetikCloud.MonitoringMetricResource, root.KnetikCloud.PageResourceMonitoringAlertResource, root.KnetikCloud.PageResourceMonitoringIncidentEventResource, root.KnetikCloud.PageResourceMonitoringIncidentResource, root.KnetikCloud.PageResourceMonitoringMetricResource, root.KnetikCloud.Result);
  }
}(this, function(ApiClient, MonitoringAlertResource, MonitoringIncidentEventResource, MonitoringIncidentResource, MonitoringMetricDatapointResource, MonitoringMetricResource, PageResourceMonitoringAlertResource, PageResourceMonitoringIncidentEventResource, PageResourceMonitoringIncidentResource, PageResourceMonitoringMetricResource, Result) {
  'use strict';

  /**
   * Monitoring service.
   * @module api/MonitoringApi
   * @version 3.0.11
   */

  /**
   * Constructs a new MonitoringApi. 
   * @alias module:api/MonitoringApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a new alert
     * &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions:&lt;/b&gt; POST
     * @param {Object} opts Optional parameters
     * @param {module:model/MonitoringAlertResource} opts.alertResource The new alert
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MonitoringAlertResource} and HTTP response
     */
    this.createAlertWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['alertResource'];


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
      var returnType = MonitoringAlertResource;

      return this.apiClient.callApi(
        '/monitoring/alerts', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new alert
     * &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions:&lt;/b&gt; POST
     * @param {Object} opts Optional parameters
     * @param {module:model/MonitoringAlertResource} opts.alertResource The new alert
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MonitoringAlertResource}
     */
    this.createAlert = function(opts) {
      return this.createAlertWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a new metric
     * &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions:&lt;/b&gt; POST
     * @param {Object} opts Optional parameters
     * @param {module:model/MonitoringMetricResource} opts.metricResource The new metric
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MonitoringMetricResource} and HTTP response
     */
    this.createMetricWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['metricResource'];


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
      var returnType = MonitoringMetricResource;

      return this.apiClient.callApi(
        '/monitoring/metrics', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new metric
     * &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions:&lt;/b&gt; POST
     * @param {Object} opts Optional parameters
     * @param {module:model/MonitoringMetricResource} opts.metricResource The new metric
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MonitoringMetricResource}
     */
    this.createMetric = function(opts) {
      return this.createMetricWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an existing alert
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; DELETE
     * @param {String} id The alert id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteAlertWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteAlert");
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
        '/monitoring/alerts/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an existing alert
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; DELETE
     * @param {String} id The alert id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteAlert = function(id) {
      return this.deleteAlertWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * End an existing incident
     * Does not delete the incident, but marks it as resolved by setting the end date.&lt;b&gt;Permissions Needed:&lt;/b&gt; DELETE
     * @param {String} id The incident id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteIncidentWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteIncident");
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
        '/monitoring/incidents/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * End an existing incident
     * Does not delete the incident, but marks it as resolved by setting the end date.&lt;b&gt;Permissions Needed:&lt;/b&gt; DELETE
     * @param {String} id The incident id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteIncident = function(id) {
      return this.deleteIncidentWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an existing metric
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; DELETE
     * @param {String} id The metric id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteMetricWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteMetric");
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
        '/monitoring/metrics/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an existing metric
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; DELETE
     * @param {String} id The metric id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteMetric = function(id) {
      return this.deleteMetricWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single alert
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; GET
     * @param {String} id The alert id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MonitoringAlertResource} and HTTP response
     */
    this.getAlertWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getAlert");
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
      var returnType = MonitoringAlertResource;

      return this.apiClient.callApi(
        '/monitoring/alerts/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single alert
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; GET
     * @param {String} id The alert id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MonitoringAlertResource}
     */
    this.getAlert = function(id) {
      return this.getAlertWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search alerts
     * Get a list of alerts with optional filtering. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; LIST
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceMonitoringAlertResource} and HTTP response
     */
    this.getAlertsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = PageResourceMonitoringAlertResource;

      return this.apiClient.callApi(
        '/monitoring/alerts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search alerts
     * Get a list of alerts with optional filtering. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; LIST
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceMonitoringAlertResource}
     */
    this.getAlerts = function(opts) {
      return this.getAlertsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single incident
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; GET
     * @param {String} id The incident id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MonitoringIncidentResource} and HTTP response
     */
    this.getIncidentWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getIncident");
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
      var returnType = MonitoringIncidentResource;

      return this.apiClient.callApi(
        '/monitoring/incidents/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single incident
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; GET
     * @param {String} id The incident id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MonitoringIncidentResource}
     */
    this.getIncident = function(id) {
      return this.getIncidentWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the events of an incident
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; LIST
     * @param {String} id The incident id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceMonitoringIncidentEventResource} and HTTP response
     */
    this.getIncident1WithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getIncident1");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
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
      var returnType = PageResourceMonitoringIncidentEventResource;

      return this.apiClient.callApi(
        '/monitoring/incidents/{id}/events', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the events of an incident
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; LIST
     * @param {String} id The incident id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceMonitoringIncidentEventResource}
     */
    this.getIncident1 = function(id, opts) {
      return this.getIncident1WithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search incidents
     * Get a list of incidents with optional filtering. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; LIST
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceMonitoringIncidentResource} and HTTP response
     */
    this.getIncidentsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = PageResourceMonitoringIncidentResource;

      return this.apiClient.callApi(
        '/monitoring/incidents', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search incidents
     * Get a list of incidents with optional filtering. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; LIST
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceMonitoringIncidentResource}
     */
    this.getIncidents = function(opts) {
      return this.getIncidentsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single metric
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; GET
     * @param {String} id The metric id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MonitoringMetricResource} and HTTP response
     */
    this.getMetricWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getMetric");
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
      var returnType = MonitoringMetricResource;

      return this.apiClient.callApi(
        '/monitoring/metrics/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single metric
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; GET
     * @param {String} id The metric id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MonitoringMetricResource}
     */
    this.getMetric = function(id) {
      return this.getMetricWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search metrics
     * Get a list of metrics with optional filtering. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; LIST
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceMonitoringMetricResource} and HTTP response
     */
    this.getMetricsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = PageResourceMonitoringMetricResource;

      return this.apiClient.callApi(
        '/monitoring/metrics', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search metrics
     * Get a list of metrics with optional filtering. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; LIST
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceMonitoringMetricResource}
     */
    this.getMetrics = function(opts) {
      return this.getMetricsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Report an incident event
     * Updates the current incident for an alert or starts a new one if none current. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions:&lt;/b&gt; POST
     * @param {Object} opts Optional parameters
     * @param {module:model/MonitoringIncidentEventResource} opts.incidentResource The new incident
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MonitoringIncidentResource} and HTTP response
     */
    this.receiveEventWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['incidentResource'];


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
      var returnType = MonitoringIncidentResource;

      return this.apiClient.callApi(
        '/monitoring/incidents', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Report an incident event
     * Updates the current incident for an alert or starts a new one if none current. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions:&lt;/b&gt; POST
     * @param {Object} opts Optional parameters
     * @param {module:model/MonitoringIncidentEventResource} opts.incidentResource The new incident
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MonitoringIncidentResource}
     */
    this.receiveEvent = function(opts) {
      return this.receiveEventWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Record a metric datapoint
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; RECORD
     * @param {String} id The metric id
     * @param {Object} opts Optional parameters
     * @param {module:model/MonitoringMetricDatapointResource} opts.metricDatapoint The metric datapoint
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.recordDatapointWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['metricDatapoint'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling recordDatapoint");
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
        '/monitoring/metrics/{id}/datapoints', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Record a metric datapoint
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; RECORD
     * @param {String} id The metric id
     * @param {Object} opts Optional parameters
     * @param {module:model/MonitoringMetricDatapointResource} opts.metricDatapoint The metric datapoint
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.recordDatapoint = function(id, opts) {
      return this.recordDatapointWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an existing alert
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PUT
     * @param {String} id The alert id
     * @param {Object} opts Optional parameters
     * @param {module:model/MonitoringAlertResource} opts.alertResource The alert object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateAlertWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['alertResource'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateAlert");
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
        '/monitoring/alerts/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an existing alert
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PUT
     * @param {String} id The alert id
     * @param {Object} opts Optional parameters
     * @param {module:model/MonitoringAlertResource} opts.alertResource The alert object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateAlert = function(id, opts) {
      return this.updateAlertWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an existing metric
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PUT
     * @param {String} id The metric id
     * @param {Object} opts Optional parameters
     * @param {module:model/MonitoringMetricResource} opts.metricResource The metric object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateMetricWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['metricResource'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateMetric");
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
        '/monitoring/metrics/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an existing metric
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PUT
     * @param {String} id The metric id
     * @param {Object} opts Optional parameters
     * @param {module:model/MonitoringMetricResource} opts.metricResource The metric object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateMetric = function(id, opts) {
      return this.updateMetricWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));