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
    root.KnetikCloud.UserAchievementResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserAchievementResource model module.
   * @module model/UserAchievementResource
   * @version 3.0.11
   */

  /**
   * Constructs a new <code>UserAchievementResource</code>.
   * @alias module:model/UserAchievementResource
   * @class
   * @param achievementName {String} The achievement being tracked.  If used for Leveling, this represents the tier name
   */
  var exports = function(achievementName) {
    var _this = this;


    _this['achievement_name'] = achievementName;



  };

  /**
   * Constructs a <code>UserAchievementResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserAchievementResource} obj Optional instance to populate.
   * @return {module:model/UserAchievementResource} The populated <code>UserAchievementResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('achieved')) {
        obj['achieved'] = ApiClient.convertToType(data['achieved'], 'Boolean');
      }
      if (data.hasOwnProperty('achievement_name')) {
        obj['achievement_name'] = ApiClient.convertToType(data['achievement_name'], 'String');
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('earned_date')) {
        obj['earned_date'] = ApiClient.convertToType(data['earned_date'], 'Number');
      }
      if (data.hasOwnProperty('updated_date')) {
        obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Number');
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
  
  var discriminatorValue = 'UserAchievementResource';


  /**
   * Flag indicating whether the user has earned the achievement
   * @member {Boolean} achieved
   */
  exports.prototype['achieved'] = undefined;
  /**
   * The achievement being tracked.  If used for Leveling, this represents the tier name
   * @member {String} achievement_name
   */
  exports.prototype['achievement_name'] = undefined;
  /**
   * The date/time this resource was created in seconds since unix epoch
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The date/time the achievement was earned as a unix timestamp in seconds
   * @member {Number} earned_date
   */
  exports.prototype['earned_date'] = undefined;
  /**
   * The date/time this resource was last updated in seconds since unix epoch
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;



  return exports;
}));


