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
    root.KnetikCloud.TopicSubscriber = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TopicSubscriber model module.
   * @module model/TopicSubscriber
   * @version 3.0.11
   */

  /**
   * Constructs a new <code>TopicSubscriber</code>.
   * @alias module:model/TopicSubscriber
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>TopicSubscriber</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TopicSubscriber} obj Optional instance to populate.
   * @return {module:model/TopicSubscriber} The populated <code>TopicSubscriber</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('disabled')) {
        obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('join_date')) {
        obj['join_date'] = ApiClient.convertToType(data['join_date'], 'Number');
      }
      if (data.hasOwnProperty('mobile_number')) {
        obj['mobile_number'] = ApiClient.convertToType(data['mobile_number'], 'String');
      }
      if (data.hasOwnProperty('topic_id')) {
        obj['topic_id'] = ApiClient.convertToType(data['topic_id'], 'String');
      }
      if (data.hasOwnProperty('topic_subscriber_map')) {
        obj['topic_subscriber_map'] = ApiClient.convertToType(data['topic_subscriber_map'], Object);
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
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
  
  var discriminatorValue = 'TopicSubscriber';


  /**
   * @member {Boolean} disabled
   */
  exports.prototype['disabled'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {Number} join_date
   */
  exports.prototype['join_date'] = undefined;
  /**
   * @member {String} mobile_number
   */
  exports.prototype['mobile_number'] = undefined;
  /**
   * @member {String} topic_id
   */
  exports.prototype['topic_id'] = undefined;
  /**
   * @member {Object} topic_subscriber_map
   */
  exports.prototype['topic_subscriber_map'] = undefined;
  /**
   * @member {Number} user_id
   */
  exports.prototype['user_id'] = undefined;
  /**
   * @member {String} username
   */
  exports.prototype['username'] = undefined;



  return exports;
}));


