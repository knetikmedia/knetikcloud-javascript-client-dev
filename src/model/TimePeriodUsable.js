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
    root.KnetikCloud.TimePeriodUsable = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Behavior);
  }
}(this, function(ApiClient, Behavior) {
  'use strict';




  /**
   * The TimePeriodUsable model module.
   * @module model/TimePeriodUsable
   * @version 3.0.11
   */

  /**
   * Constructs a new <code>TimePeriodUsable</code>.
   * @alias module:model/TimePeriodUsable
   * @class
   * @extends module:model/Behavior
   */
  var exports = function() {
    var _this = this;
    Behavior.call(_this);



  };

  /**
   * Constructs a <code>TimePeriodUsable</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TimePeriodUsable} obj Optional instance to populate.
   * @return {module:model/TimePeriodUsable} The populated <code>TimePeriodUsable</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      Behavior.constructFromObject(data, obj);
      if (data.hasOwnProperty('max_use')) {
        obj['max_use'] = ApiClient.convertToType(data['max_use'], 'Number');
      }
      if (data.hasOwnProperty('time_length')) {
        obj['time_length'] = ApiClient.convertToType(data['time_length'], 'Number');
      }
      if (data.hasOwnProperty('unit_of_time')) {
        obj['unit_of_time'] = ApiClient.convertToType(data['unit_of_time'], 'String');
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
  
  var discriminatorValue = 'time_period_usable';
  Behavior.registerChild(exports, discriminatorValue);
  
  exports.prototype = Object.create(Behavior.prototype);
  exports.prototype.constructor = exports;


  /**
   * The amount of times it can be used
   * @member {Number} max_use
   */
  exports.prototype['max_use'] = undefined;
  /**
   * The length of time
   * @member {Number} time_length
   */
  exports.prototype['time_length'] = undefined;
  /**
   * The unit of time
   * @member {String} unit_of_time
   */
  exports.prototype['unit_of_time'] = undefined;



  return exports;
}));

