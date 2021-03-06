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
    root.KnetikCloud.BareChallengeActivityResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BareChallengeActivityResource model module.
   * @module model/BareChallengeActivityResource
   * @version 3.0.11
   */

  /**
   * Constructs a new <code>BareChallengeActivityResource</code>.
   * @alias module:model/BareChallengeActivityResource
   * @class
   * @param activityId {Number} The id of the activity
   * @param challengeId {Number} The id of the challenge
   */
  var exports = function(activityId, challengeId) {
    var _this = this;

    _this['activity_id'] = activityId;
    _this['challenge_id'] = challengeId;

  };

  /**
   * Constructs a <code>BareChallengeActivityResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BareChallengeActivityResource} obj Optional instance to populate.
   * @return {module:model/BareChallengeActivityResource} The populated <code>BareChallengeActivityResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('activity_id')) {
        obj['activity_id'] = ApiClient.convertToType(data['activity_id'], 'Number');
      }
      if (data.hasOwnProperty('challenge_id')) {
        obj['challenge_id'] = ApiClient.convertToType(data['challenge_id'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
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
  
  var discriminatorValue = 'BareChallengeActivityResource';


  /**
   * The id of the activity
   * @member {Number} activity_id
   */
  exports.prototype['activity_id'] = undefined;
  /**
   * The id of the challenge
   * @member {Number} challenge_id
   */
  exports.prototype['challenge_id'] = undefined;
  /**
   * The unique ID for this resource
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;



  return exports;
}));


