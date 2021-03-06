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
    root.KnetikCloud.SimpleWallet = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SimpleWallet model module.
   * @module model/SimpleWallet
   * @version 3.0.11
   */

  /**
   * Constructs a new <code>SimpleWallet</code>.
   * @alias module:model/SimpleWallet
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>SimpleWallet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SimpleWallet} obj Optional instance to populate.
   * @return {module:model/SimpleWallet} The populated <code>SimpleWallet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('balance')) {
        obj['balance'] = ApiClient.convertToType(data['balance'], 'Number');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('currency_name')) {
        obj['currency_name'] = ApiClient.convertToType(data['currency_name'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
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
  
  var discriminatorValue = 'SimpleWallet';


  /**
   * The current balance of the wallet
   * @member {Number} balance
   */
  exports.prototype['balance'] = undefined;
  /**
   * The ISO currency code for the wallet
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * The name of the currency stored in the wallet
   * @member {String} currency_name
   */
  exports.prototype['currency_name'] = undefined;
  /**
   * The unique ID of the wallet
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The ID of the user to whom the wallet belongs
   * @member {Number} user_id
   */
  exports.prototype['user_id'] = undefined;



  return exports;
}));


