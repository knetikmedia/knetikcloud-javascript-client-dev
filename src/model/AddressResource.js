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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.AddressResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AddressResource model module.
   * @module model/AddressResource
   * @version 3.0.11
   */

  /**
   * Constructs a new <code>AddressResource</code>.
   * @alias module:model/AddressResource
   * @class
   * @param address1 {String} The first line of the address
   * @param city {String} The city
   * @param countryCode {String} The iso3 code for the country
   */
  var exports = function(address1, city, countryCode) {
    var _this = this;

    _this['address1'] = address1;

    _this['city'] = city;
    _this['country_code'] = countryCode;


  };

  /**
   * Constructs a <code>AddressResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddressResource} obj Optional instance to populate.
   * @return {module:model/AddressResource} The populated <code>AddressResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('address1')) {
        obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
      }
      if (data.hasOwnProperty('address2')) {
        obj['address2'] = ApiClient.convertToType(data['address2'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('country_code')) {
        obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
      }
      if (data.hasOwnProperty('postal_code')) {
        obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
      }
      if (data.hasOwnProperty('state_code')) {
        obj['state_code'] = ApiClient.convertToType(data['state_code'], 'String');
      }
    }
    return obj;
  }

  exports.registerChild = function(child, discriminatorValue) {
	  child.discriminatorField = exports.discriminatorField;
	  child.discriminatorValue = discriminatorValue;
	  child.parent = exports;
	  if(exports.children == null)
		  exports.children = {};
	  exports.children[discriminatorValue] = child;
	  if(exports.parent != null)
		  exports.parent.registerChild(child, discriminatorValue);
  }
  
  var discriminatorValue = 'AddressResource';


  /**
   * The first line of the address
   * @member {String} address1
   */
  exports.prototype['address1'] = undefined;
  /**
   * A second line of the address
   * @member {String} address2
   */
  exports.prototype['address2'] = undefined;
  /**
   * The city
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * The iso3 code for the country
   * @member {String} country_code
   */
  exports.prototype['country_code'] = undefined;
  /**
   * The postal code
   * @member {String} postal_code
   */
  exports.prototype['postal_code'] = undefined;
  /**
   * The code for the state. Required if the country has states/provinces/equivalent
   * @member {String} state_code
   */
  exports.prototype['state_code'] = undefined;



  return exports;
}));

