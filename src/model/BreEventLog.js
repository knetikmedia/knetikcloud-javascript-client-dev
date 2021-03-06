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
    define(['ApiClient', 'model/BreRuleLog'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BreRuleLog'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.BreEventLog = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.BreRuleLog);
  }
}(this, function(ApiClient, BreRuleLog) {
  'use strict';




  /**
   * The BreEventLog model module.
   * @module model/BreEventLog
   * @version 3.0.11
   */

  /**
   * Constructs a new <code>BreEventLog</code>.
   * @alias module:model/BreEventLog
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>BreEventLog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BreEventLog} obj Optional instance to populate.
   * @return {module:model/BreEventLog} The populated <code>BreEventLog</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('age')) {
        obj['age'] = ApiClient.convertToType(data['age'], 'Number');
      }
      if (data.hasOwnProperty('customer')) {
        obj['customer'] = ApiClient.convertToType(data['customer'], 'String');
      }
      if (data.hasOwnProperty('event_expansion_duration')) {
        obj['event_expansion_duration'] = ApiClient.convertToType(data['event_expansion_duration'], 'Number');
      }
      if (data.hasOwnProperty('event_id')) {
        obj['event_id'] = ApiClient.convertToType(data['event_id'], 'String');
      }
      if (data.hasOwnProperty('event_logging_duration')) {
        obj['event_logging_duration'] = ApiClient.convertToType(data['event_logging_duration'], 'Number');
      }
      if (data.hasOwnProperty('event_name')) {
        obj['event_name'] = ApiClient.convertToType(data['event_name'], 'String');
      }
      if (data.hasOwnProperty('event_received_date')) {
        obj['event_received_date'] = ApiClient.convertToType(data['event_received_date'], 'Number');
      }
      if (data.hasOwnProperty('event_start_date')) {
        obj['event_start_date'] = ApiClient.convertToType(data['event_start_date'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('parameters')) {
        obj['parameters'] = ApiClient.convertToType(data['parameters'], Object);
      }
      if (data.hasOwnProperty('rules')) {
        obj['rules'] = ApiClient.convertToType(data['rules'], [BreRuleLog]);
      }
      if (data.hasOwnProperty('runtime')) {
        obj['runtime'] = ApiClient.convertToType(data['runtime'], 'Number');
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
  
  var discriminatorValue = 'BreEventLog';


  /**
   * The difference between received and handlded in ms
   * @member {Number} age
   */
  exports.prototype['age'] = undefined;
  /**
   * The customer
   * @member {String} customer
   */
  exports.prototype['customer'] = undefined;
  /**
   * The time it took to expand the event parameters
   * @member {Number} event_expansion_duration
   */
  exports.prototype['event_expansion_duration'] = undefined;
  /**
   * The event id
   * @member {String} event_id
   */
  exports.prototype['event_id'] = undefined;
  /**
   * The time it took to log the event in IO
   * @member {Number} event_logging_duration
   */
  exports.prototype['event_logging_duration'] = undefined;
  /**
   * The event name
   * @member {String} event_name
   */
  exports.prototype['event_name'] = undefined;
  /**
   * The date the event was fired
   * @member {Number} event_received_date
   */
  exports.prototype['event_received_date'] = undefined;
  /**
   * The date the event was handled
   * @member {Number} event_start_date
   */
  exports.prototype['event_start_date'] = undefined;
  /**
   * The id
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The event paramters
   * @member {Object} parameters
   */
  exports.prototype['parameters'] = undefined;
  /**
   * The rules
   * @member {Array.<module:model/BreRuleLog>} rules
   */
  exports.prototype['rules'] = undefined;
  /**
   * The time it took to run all the rules for that event
   * @member {Number} runtime
   */
  exports.prototype['runtime'] = undefined;



  return exports;
}));


