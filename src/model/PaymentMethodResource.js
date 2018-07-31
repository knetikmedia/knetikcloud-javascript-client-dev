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
    define(['ApiClient', 'model/PaymentMethodTypeResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentMethodTypeResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.PaymentMethodResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.PaymentMethodTypeResource);
  }
}(this, function(ApiClient, PaymentMethodTypeResource) {
  'use strict';




  /**
   * The PaymentMethodResource model module.
   * @module model/PaymentMethodResource
   * @version 3.0.11
   */

  /**
   * Constructs a new <code>PaymentMethodResource</code>.
   * @alias module:model/PaymentMethodResource
   * @class
   * @param name {String} The user friendly name of the resource
   * @param paymentMethodType {module:model/PaymentMethodTypeResource} The type of payment method. Must be a pre-existing value
   */
  var exports = function(name, paymentMethodType) {
    var _this = this;









    _this['name'] = name;
    _this['payment_method_type'] = paymentMethodType;







  };

  /**
   * Constructs a <code>PaymentMethodResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentMethodResource} obj Optional instance to populate.
   * @return {module:model/PaymentMethodResource} The populated <code>PaymentMethodResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('default')) {
        obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
      }
      if (data.hasOwnProperty('disabled')) {
        obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
      }
      if (data.hasOwnProperty('expiration_date')) {
        obj['expiration_date'] = ApiClient.convertToType(data['expiration_date'], 'Number');
      }
      if (data.hasOwnProperty('expiration_month')) {
        obj['expiration_month'] = ApiClient.convertToType(data['expiration_month'], 'Number');
      }
      if (data.hasOwnProperty('expiration_year')) {
        obj['expiration_year'] = ApiClient.convertToType(data['expiration_year'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('last4')) {
        obj['last4'] = ApiClient.convertToType(data['last4'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('payment_method_type')) {
        obj['payment_method_type'] = PaymentMethodTypeResource.constructFromObject(data['payment_method_type']);
      }
      if (data.hasOwnProperty('payment_type')) {
        obj['payment_type'] = ApiClient.convertToType(data['payment_type'], 'String');
      }
      if (data.hasOwnProperty('sort')) {
        obj['sort'] = ApiClient.convertToType(data['sort'], 'Number');
      }
      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
      if (data.hasOwnProperty('unique_key')) {
        obj['unique_key'] = ApiClient.convertToType(data['unique_key'], 'String');
      }
      if (data.hasOwnProperty('updated_date')) {
        obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Number');
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
      }
      if (data.hasOwnProperty('verified')) {
        obj['verified'] = ApiClient.convertToType(data['verified'], 'Boolean');
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
  
  var discriminatorValue = 'PaymentMethodResource';


  /**
   * The date/time this resource was created in seconds since unix epoch
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * @member {Boolean} default
   */
  exports.prototype['default'] = undefined;
  /**
   * Whether this payment method is disabled or not
   * @member {Boolean} disabled
   */
  exports.prototype['disabled'] = undefined;
  /**
   * The expiration date for the payment method, expressed as seconds since epoch. Typically used for credit card payment methods
   * @member {Number} expiration_date
   */
  exports.prototype['expiration_date'] = undefined;
  /**
   * The expiration month (1 - 12) for the payment method. Typically used for credit card payment methods
   * @member {Number} expiration_month
   */
  exports.prototype['expiration_month'] = undefined;
  /**
   * The expiration year for the payment method. Typically used for credit card payment methods
   * @member {Number} expiration_year
   */
  exports.prototype['expiration_year'] = undefined;
  /**
   * The unique ID of the resource
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The last 4 digits of the account number for the payment method. Typically used for credit card payment methods
   * @member {String} last4
   */
  exports.prototype['last4'] = undefined;
  /**
   * The user friendly name of the resource
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The type of payment method. Must be a pre-existing value
   * @member {module:model/PaymentMethodTypeResource} payment_method_type
   */
  exports.prototype['payment_method_type'] = undefined;
  /**
   * The generic payment type. Default is card
   * @member {module:model/PaymentMethodResource.PaymentTypeEnum} payment_type
   */
  exports.prototype['payment_type'] = undefined;
  /**
   * The sort value for the payment method
   * @member {Number} sort
   */
  exports.prototype['sort'] = undefined;
  /**
   * The unique token for the payment method
   * @member {String} token
   */
  exports.prototype['token'] = undefined;
  /**
   * An optional unique identifier
   * @member {String} unique_key
   */
  exports.prototype['unique_key'] = undefined;
  /**
   * The date/time this resource was last updated in seconds since unix epoch
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;
  /**
   * The user's id. If null, indicates a shared payment method that any user can use (i.e., 'wallet')
   * @member {Number} user_id
   */
  exports.prototype['user_id'] = undefined;
  /**
   * @member {Boolean} verified
   */
  exports.prototype['verified'] = undefined;


  /**
   * Allowed values for the <code>payment_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PaymentTypeEnum = {
    /**
     * value: "card"
     * @const
     */
    "card": "card",
    /**
     * value: "bank_account"
     * @const
     */
    "bank_account": "bank_account"  };


  return exports;
}));


