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
    root.KnetikCloud.ReactivateSubscriptionRequest = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ReactivateSubscriptionRequest model module.
   * @module model/ReactivateSubscriptionRequest
   * @version 3.0.11
   */

  /**
   * Constructs a new <code>ReactivateSubscriptionRequest</code>.
   * @alias module:model/ReactivateSubscriptionRequest
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ReactivateSubscriptionRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReactivateSubscriptionRequest} obj Optional instance to populate.
   * @return {module:model/ReactivateSubscriptionRequest} The populated <code>ReactivateSubscriptionRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('inventory_id')) {
        obj['inventory_id'] = ApiClient.convertToType(data['inventory_id'], 'Number');
      }
      if (data.hasOwnProperty('reactivation_fee')) {
        obj['reactivation_fee'] = ApiClient.convertToType(data['reactivation_fee'], 'Boolean');
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
  
  var discriminatorValue = 'ReactivateSubscriptionRequest';


  /**
   * The inventory to reactivate. Only required if using the deprecated subscriptions service
   * @member {Number} inventory_id
   */
  exports.prototype['inventory_id'] = undefined;
  /**
   * Whether to add the additional reactivation fee in addition to the recurring fee
   * @member {Boolean} reactivation_fee
   */
  exports.prototype['reactivation_fee'] = undefined;



  return exports;
}));


