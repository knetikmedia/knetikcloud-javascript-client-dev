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
    define(['ApiClient', 'model/CountryResource', 'model/CurrencyResource', 'model/Result', 'model/StateResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CountryResource'), require('../model/CurrencyResource'), require('../model/Result'), require('../model/StateResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.LocationsApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.CountryResource, root.KnetikCloud.CurrencyResource, root.KnetikCloud.Result, root.KnetikCloud.StateResource);
  }
}(this, function(ApiClient, CountryResource, CurrencyResource, Result, StateResource) {
  'use strict';

  /**
   * Locations service.
   * @module api/LocationsApi
   * @version 3.0.11
   */

  /**
   * Constructs a new LocationsApi. 
   * @alias module:api/LocationsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get a list of countries
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CountryResource>} and HTTP response
     */
    this.getCountriesWithHttpInfo = function() {
      var postBody = null;


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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [CountryResource];

      return this.apiClient.callApi(
        '/location/countries', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of countries
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CountryResource>}
     */
    this.getCountries = function() {
      return this.getCountriesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the iso3 code of your country
     * Determined by geo ip location. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'String'} and HTTP response
     */
    this.getCountryByGeoLocationWithHttpInfo = function() {
      var postBody = null;


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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/location/geolocation/country', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the iso3 code of your country
     * Determined by geo ip location. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */
    this.getCountryByGeoLocation = function() {
      return this.getCountryByGeoLocationWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of a country&#39;s states
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/StateResource>} and HTTP response
     */
    this.getCountryStatesWithHttpInfo = function(countryCodeIso3) {
      var postBody = null;

      // verify the required parameter 'countryCodeIso3' is set
      if (countryCodeIso3 === undefined || countryCodeIso3 === null) {
        throw new Error("Missing the required parameter 'countryCodeIso3' when calling getCountryStates");
      }


      var pathParams = {
        'country_code_iso3': countryCodeIso3
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
      var returnType = [StateResource];

      return this.apiClient.callApi(
        '/location/countries/{country_code_iso3}/states', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of a country&#39;s states
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/StateResource>}
     */
    this.getCountryStates = function(countryCodeIso3) {
      return this.getCountryStatesWithHttpInfo(countryCodeIso3)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the currency information of your country
     * Determined by geo ip location, currency to country mapping and a fallback setting. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CurrencyResource} and HTTP response
     */
    this.getCurrencyByGeoLocationWithHttpInfo = function() {
      var postBody = null;


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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CurrencyResource;

      return this.apiClient.callApi(
        '/location/geolocation/currency', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the currency information of your country
     * Determined by geo ip location, currency to country mapping and a fallback setting. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CurrencyResource}
     */
    this.getCurrencyByGeoLocation = function() {
      return this.getCurrencyByGeoLocationWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));