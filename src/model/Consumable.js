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
    define(['ApiClient', 'model/Behavior'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Behavior'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.Consumable = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Behavior);
  }
}(this, function(ApiClient, Behavior) {
  'use strict';




  /**
   * The Consumable model module.
   * @module model/Consumable
   * @version 3.0.11
   */

  /**
   * Constructs a new <code>Consumable</code>.
   * @alias module:model/Consumable
   * @class
   * @extends module:model/Behavior
   */
  var exports = function() {
    var _this = this;
    Behavior.call(_this);

  };

  /**
   * Constructs a <code>Consumable</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Consumable} obj Optional instance to populate.
   * @return {module:model/Consumable} The populated <code>Consumable</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      Behavior.constructFromObject(data, obj);
      if (data.hasOwnProperty('max_use')) {
        obj['max_use'] = ApiClient.convertToType(data['max_use'], 'Number');
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
  
  var discriminatorValue = 'consumable';
  Behavior.registerChild(exports, discriminatorValue);
  
  exports.prototype = Object.create(Behavior.prototype);
  exports.prototype.constructor = exports;


  /**
   * The maximum number of times an item can be used
   * @member {Number} max_use
   */
  exports.prototype['max_use'] = undefined;



  return exports;
}));

