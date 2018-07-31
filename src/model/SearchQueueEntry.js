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
    root.KnetikCloud.SearchQueueEntry = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SearchQueueEntry model module.
   * @module model/SearchQueueEntry
   * @version 3.0.11
   */

  /**
   * Constructs a new <code>SearchQueueEntry</code>.
   * @alias module:model/SearchQueueEntry
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>SearchQueueEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchQueueEntry} obj Optional instance to populate.
   * @return {module:model/SearchQueueEntry} The populated <code>SearchQueueEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('context_id')) {
        obj['context_id'] = ApiClient.convertToType(data['context_id'], 'String');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], Object);
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Number');
      }
      if (data.hasOwnProperty('entry_type')) {
        obj['entry_type'] = ApiClient.convertToType(data['entry_type'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('index')) {
        obj['index'] = ApiClient.convertToType(data['index'], 'String');
      }
      if (data.hasOwnProperty('page_num')) {
        obj['page_num'] = ApiClient.convertToType(data['page_num'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = ApiClient.convertToType(data['template'], 'String');
      }
      if (data.hasOwnProperty('template_index')) {
        obj['template_index'] = ApiClient.convertToType(data['template_index'], 'String');
      }
      if (data.hasOwnProperty('template_version_data')) {
        obj['template_version_data'] = ApiClient.convertToType(data['template_version_data'], Object);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
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
  
  var discriminatorValue = 'SearchQueueEntry';


  /**
   * @member {String} context_id
   */
  exports.prototype['context_id'] = undefined;
  /**
   * @member {Object} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {Number} date
   */
  exports.prototype['date'] = undefined;
  /**
   * @member {module:model/SearchQueueEntry.EntryTypeEnum} entry_type
   */
  exports.prototype['entry_type'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} index
   */
  exports.prototype['index'] = undefined;
  /**
   * @member {Number} page_num
   */
  exports.prototype['page_num'] = undefined;
  /**
   * @member {module:model/SearchQueueEntry.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} template
   */
  exports.prototype['template'] = undefined;
  /**
   * @member {String} template_index
   */
  exports.prototype['template_index'] = undefined;
  /**
   * @member {Object} template_version_data
   */
  exports.prototype['template_version_data'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;


  /**
   * Allowed values for the <code>entry_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EntryTypeEnum = {
    /**
     * value: "singleIndex"
     * @const
     */
    "singleIndex": "singleIndex",
    /**
     * value: "singleDelete"
     * @const
     */
    "singleDelete": "singleDelete",
    /**
     * value: "fullIndex"
     * @const
     */
    "fullIndex": "fullIndex",
    /**
     * value: "fullDelete"
     * @const
     */
    "fullDelete": "fullDelete"  };

  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "QUEUED"
     * @const
     */
    "QUEUED": "QUEUED",
    /**
     * value: "FAILED"
     * @const
     */
    "FAILED": "FAILED"  };


  return exports;
}));


