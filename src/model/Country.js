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
    root.KnetikCloud.Country = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Country model module.
   * @module model/Country
   * @version 3.0.11
   */

  /**
   * Constructs a new <code>Country</code>.
   * @alias module:model/Country
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Country</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Country} obj Optional instance to populate.
   * @return {module:model/Country} The populated <code>Country</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('iso2')) {
        obj['iso2'] = ApiClient.convertToType(data['iso2'], 'String');
      }
      if (data.hasOwnProperty('iso3')) {
        obj['iso3'] = ApiClient.convertToType(data['iso3'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
  
  var discriminatorValue = 'Country';


  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} iso2
   */
  exports.prototype['iso2'] = undefined;
  /**
   * @member {String} iso3
   */
  exports.prototype['iso3'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


