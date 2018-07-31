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
    root.KnetikCloud.PaymentMethodTypeResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PaymentMethodTypeResource model module.
   * @module model/PaymentMethodTypeResource
   * @version 3.0.11
   */

  /**
   * Constructs a new <code>PaymentMethodTypeResource</code>.
   * @alias module:model/PaymentMethodTypeResource
   * @class
   * @param id {Number} The id of the payment method type
   * @param name {String} The name of the payment method type
   */
  var exports = function(id, name) {
    var _this = this;

    _this['id'] = id;

    _this['name'] = name;




  };

  /**
   * Constructs a <code>PaymentMethodTypeResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentMethodTypeResource} obj Optional instance to populate.
   * @return {module:model/PaymentMethodTypeResource} The populated <code>PaymentMethodTypeResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('invoice_processing_hours')) {
        obj['invoice_processing_hours'] = ApiClient.convertToType(data['invoice_processing_hours'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('supports_capture')) {
        obj['supports_capture'] = ApiClient.convertToType(data['supports_capture'], 'Boolean');
      }
      if (data.hasOwnProperty('supports_partial')) {
        obj['supports_partial'] = ApiClient.convertToType(data['supports_partial'], 'Boolean');
      }
      if (data.hasOwnProperty('supports_rebill')) {
        obj['supports_rebill'] = ApiClient.convertToType(data['supports_rebill'], 'Boolean');
      }
      if (data.hasOwnProperty('supports_refunds')) {
        obj['supports_refunds'] = ApiClient.convertToType(data['supports_refunds'], 'Boolean');
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
  
  var discriminatorValue = 'PaymentMethodTypeResource';


  /**
   * The id of the payment method type
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The maximum timelimit in hours for an invoice in the processing status while waiting on this payment method type. Defaults to the global config invoice.processing_expiration_hours if null
   * @member {Number} invoice_processing_hours
   */
  exports.prototype['invoice_processing_hours'] = undefined;
  /**
   * The name of the payment method type
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Whether the payment handler supports the authorize and capture flow
   * @member {Boolean} supports_capture
   */
  exports.prototype['supports_capture'] = undefined;
  /**
   * Whether the payment handler supports paying for part of an invoice, rather than the full grand_total
   * @member {Boolean} supports_partial
   */
  exports.prototype['supports_partial'] = undefined;
  /**
   * Whether the payment handler supports rebilling the method later (for saved payments or subscriptions)
   * @member {Boolean} supports_rebill
   */
  exports.prototype['supports_rebill'] = undefined;
  /**
   * Whether the payment handler supports refunding
   * @member {Boolean} supports_refunds
   */
  exports.prototype['supports_refunds'] = undefined;



  return exports;
}));

