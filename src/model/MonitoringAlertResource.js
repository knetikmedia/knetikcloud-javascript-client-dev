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
    define(['ApiClient', 'model/MonitoringAlertLevel', 'model/SimpleReferenceResourcestring'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MonitoringAlertLevel'), require('./SimpleReferenceResourcestring'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.MonitoringAlertResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.MonitoringAlertLevel, root.KnetikCloud.SimpleReferenceResourcestring);
  }
}(this, function(ApiClient, MonitoringAlertLevel, SimpleReferenceResourcestring) {
  'use strict';




  /**
   * The MonitoringAlertResource model module.
   * @module model/MonitoringAlertResource
   * @version 3.0.11
   */

  /**
   * Constructs a new <code>MonitoringAlertResource</code>.
   * @alias module:model/MonitoringAlertResource
   * @class
   * @param aggregation {module:model/MonitoringAlertResource.AggregationEnum} The way to to combine multiple datapoints within the same period
   * @param id {String} The id of the alert. Cannot be changed
   * @param levels {Array.<module:model/MonitoringAlertLevel>} The levels of alert to raise. Minimum 1 and maximum 10 entries. The alert level will be the one with the last one in the list that is passed its threshold
   * @param metric {module:model/SimpleReferenceResourcestring} The id of the metric the alert is monitoring
   * @param name {String} The name of the alert, for display purposes
   * @param unit {module:model/MonitoringAlertResource.UnitEnum} The unit for the evaluation. Should be compatible with the unit of the metric
   */
  var exports = function(aggregation, id, levels, metric, name, unit) {
    var _this = this;

    _this['aggregation'] = aggregation;


    _this['id'] = id;
    _this['levels'] = levels;
    _this['metric'] = metric;
    _this['name'] = name;
    _this['unit'] = unit;
  };

  /**
   * Constructs a <code>MonitoringAlertResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MonitoringAlertResource} obj Optional instance to populate.
   * @return {module:model/MonitoringAlertResource} The populated <code>MonitoringAlertResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('aggregation')) {
        obj['aggregation'] = ApiClient.convertToType(data['aggregation'], 'String');
      }
      if (data.hasOwnProperty('dimensions')) {
        obj['dimensions'] = ApiClient.convertToType(data['dimensions'], {'String': 'String'});
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('levels')) {
        obj['levels'] = ApiClient.convertToType(data['levels'], [MonitoringAlertLevel]);
      }
      if (data.hasOwnProperty('metric')) {
        obj['metric'] = SimpleReferenceResourcestring.constructFromObject(data['metric']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('unit')) {
        obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
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
  
  var discriminatorValue = 'MonitoringAlertResource';


  /**
   * The way to to combine multiple datapoints within the same period
   * @member {module:model/MonitoringAlertResource.AggregationEnum} aggregation
   */
  exports.prototype['aggregation'] = undefined;
  /**
   * Dimensions to filter datapoints. Only datapoints with the same dimensions will be included. Datapoints with more or fewer dimensions also not included
   * @member {Object.<String, String>} dimensions
   */
  exports.prototype['dimensions'] = undefined;
  /**
   * Whether the alert is live and should be evaluated. Default: true
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;
  /**
   * The id of the alert. Cannot be changed
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The levels of alert to raise. Minimum 1 and maximum 10 entries. The alert level will be the one with the last one in the list that is passed its threshold
   * @member {Array.<module:model/MonitoringAlertLevel>} levels
   */
  exports.prototype['levels'] = undefined;
  /**
   * The id of the metric the alert is monitoring
   * @member {module:model/SimpleReferenceResourcestring} metric
   */
  exports.prototype['metric'] = undefined;
  /**
   * The name of the alert, for display purposes
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The unit for the evaluation. Should be compatible with the unit of the metric
   * @member {module:model/MonitoringAlertResource.UnitEnum} unit
   */
  exports.prototype['unit'] = undefined;


  /**
   * Allowed values for the <code>aggregation</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AggregationEnum = {
    /**
     * value: "minimum"
     * @const
     */
    "minimum": "minimum",
    /**
     * value: "maximum"
     * @const
     */
    "maximum": "maximum",
    /**
     * value: "sum"
     * @const
     */
    "sum": "sum",
    /**
     * value: "average"
     * @const
     */
    "average": "average",
    /**
     * value: "count"
     * @const
     */
    "count": "count"  };

  /**
   * Allowed values for the <code>unit</code> property.
   * @enum {String}
   * @readonly
   */
  exports.UnitEnum = {
    /**
     * value: "Seconds"
     * @const
     */
    "Seconds": "Seconds",
    /**
     * value: "Microseconds"
     * @const
     */
    "Microseconds": "Microseconds",
    /**
     * value: "Milliseconds"
     * @const
     */
    "Milliseconds": "Milliseconds",
    /**
     * value: "Bytes"
     * @const
     */
    "Bytes": "Bytes",
    /**
     * value: "Kilobytes"
     * @const
     */
    "Kilobytes": "Kilobytes",
    /**
     * value: "Megabytes"
     * @const
     */
    "Megabytes": "Megabytes",
    /**
     * value: "Gigabytes"
     * @const
     */
    "Gigabytes": "Gigabytes",
    /**
     * value: "Terabytes"
     * @const
     */
    "Terabytes": "Terabytes",
    /**
     * value: "Bits"
     * @const
     */
    "Bits": "Bits",
    /**
     * value: "Kilobits"
     * @const
     */
    "Kilobits": "Kilobits",
    /**
     * value: "Megabits"
     * @const
     */
    "Megabits": "Megabits",
    /**
     * value: "Gigabits"
     * @const
     */
    "Gigabits": "Gigabits",
    /**
     * value: "Terabits"
     * @const
     */
    "Terabits": "Terabits",
    /**
     * value: "Percent"
     * @const
     */
    "Percent": "Percent",
    /**
     * value: "Count"
     * @const
     */
    "Count": "Count",
    /**
     * value: "BytesSecond"
     * @const
     */
    "BytesSecond": "BytesSecond",
    /**
     * value: "KilobytesSecond"
     * @const
     */
    "KilobytesSecond": "KilobytesSecond",
    /**
     * value: "MegabytesSecond"
     * @const
     */
    "MegabytesSecond": "MegabytesSecond",
    /**
     * value: "GigabytesSecond"
     * @const
     */
    "GigabytesSecond": "GigabytesSecond",
    /**
     * value: "TerabytesSecond"
     * @const
     */
    "TerabytesSecond": "TerabytesSecond",
    /**
     * value: "BitsSecond"
     * @const
     */
    "BitsSecond": "BitsSecond",
    /**
     * value: "KilobitsSecond"
     * @const
     */
    "KilobitsSecond": "KilobitsSecond",
    /**
     * value: "MegabitsSecond"
     * @const
     */
    "MegabitsSecond": "MegabitsSecond",
    /**
     * value: "GigabitsSecond"
     * @const
     */
    "GigabitsSecond": "GigabitsSecond",
    /**
     * value: "TerabitsSecond"
     * @const
     */
    "TerabitsSecond": "TerabitsSecond",
    /**
     * value: "CountSecond"
     * @const
     */
    "CountSecond": "CountSecond",
    /**
     * value: "None"
     * @const
     */
    "None": "None"  };


  return exports;
}));

