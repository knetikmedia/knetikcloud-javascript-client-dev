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
    root.KnetikCloud.PayBySavedMethodRequest = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PayBySavedMethodRequest model module.
   * @module model/PayBySavedMethodRequest
   * @version 3.0.11
   */

  /**
   * Constructs a new <code>PayBySavedMethodRequest</code>.
   * @alias module:model/PayBySavedMethodRequest
   * @class
   * @param paymentMethod {Number} The id of the payment method to use. Must belong to the caller, be public or have PAYMENTS_ADMIN permission
   */
  var exports = function(paymentMethod) {
    var _this = this;

    _this['payment_method'] = paymentMethod;

  };

  /**
   * Constructs a <code>PayBySavedMethodRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PayBySavedMethodRequest} obj Optional instance to populate.
   * @return {module:model/PayBySavedMethodRequest} The populated <code>PayBySavedMethodRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('payment_method')) {
        obj['payment_method'] = ApiClient.convertToType(data['payment_method'], 'Number');
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
  
  var discriminatorValue = 'PayBySavedMethodRequest';


  /**
   * The id of the payment method to use. Must belong to the caller, be public or have PAYMENTS_ADMIN permission
   * @member {Number} payment_method
   */
  exports.prototype['payment_method'] = undefined;
  /**
   * The id of a user to bill. Must have PAYMENTS_ADMIN permission
   * @member {Number} user_id
   */
  exports.prototype['user_id'] = undefined;



  return exports;
}));

