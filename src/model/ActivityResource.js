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
    define(['ApiClient', 'model/ActivityEntitlementResource', 'model/AvailableSettingResource', 'model/CoreActivitySettings', 'model/Property', 'model/RewardSetResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ActivityEntitlementResource'), require('./AvailableSettingResource'), require('./CoreActivitySettings'), require('./Property'), require('./RewardSetResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.ActivityResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.ActivityEntitlementResource, root.KnetikCloud.AvailableSettingResource, root.KnetikCloud.CoreActivitySettings, root.KnetikCloud.Property, root.KnetikCloud.RewardSetResource);
  }
}(this, function(ApiClient, ActivityEntitlementResource, AvailableSettingResource, CoreActivitySettings, Property, RewardSetResource) {
  'use strict';




  /**
   * The ActivityResource model module.
   * @module model/ActivityResource
   * @version 3.0.11
   */

  /**
   * Constructs a new <code>ActivityResource</code>.
   * Represents an activity that can be parameterized and tracked through metrics (scores, etc)
   * @alias module:model/ActivityResource
   * @class
   * @param name {String} The user friendly name of that resource
   */
  var exports = function(name) {
    var _this = this;









    _this['name'] = name;








  };

  /**
   * Constructs a <code>ActivityResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActivityResource} obj Optional instance to populate.
   * @return {module:model/ActivityResource} The populated <code>ActivityResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('additional_properties')) {
        obj['additional_properties'] = ApiClient.convertToType(data['additional_properties'], {'String': Property});
      }
      if (data.hasOwnProperty('core_settings')) {
        obj['core_settings'] = CoreActivitySettings.constructFromObject(data['core_settings']);
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('entitlements')) {
        obj['entitlements'] = ApiClient.convertToType(data['entitlements'], [ActivityEntitlementResource]);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('launch')) {
        obj['launch'] = ApiClient.convertToType(data['launch'], 'String');
      }
      if (data.hasOwnProperty('leaderboard_strategy')) {
        obj['leaderboard_strategy'] = ApiClient.convertToType(data['leaderboard_strategy'], 'String');
      }
      if (data.hasOwnProperty('long_description')) {
        obj['long_description'] = ApiClient.convertToType(data['long_description'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('reward_set')) {
        obj['reward_set'] = RewardSetResource.constructFromObject(data['reward_set']);
      }
      if (data.hasOwnProperty('settings')) {
        obj['settings'] = ApiClient.convertToType(data['settings'], [AvailableSettingResource]);
      }
      if (data.hasOwnProperty('short_description')) {
        obj['short_description'] = ApiClient.convertToType(data['short_description'], 'String');
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = ApiClient.convertToType(data['template'], 'Boolean');
      }
      if (data.hasOwnProperty('template_id')) {
        obj['template_id'] = ApiClient.convertToType(data['template_id'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('unique_key')) {
        obj['unique_key'] = ApiClient.convertToType(data['unique_key'], 'String');
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
  
  var discriminatorValue = 'ActivityResource';


  /**
   * A map of additional properties keyed on the property name. Used to further describe an activity. While settings will vary from one activity occurrence (a game) to another, additional properties are shared by all the occurrences of this activity. Ex: Activity Logo, Disclaimer, Greeting, etc. Validated against template if one exists for activities
   * @member {Object.<String, module:model/Property>} additional_properties
   */
  exports.prototype['additional_properties'] = undefined;
  /**
   * Defines core settings about the activity that affect how it can be created/played by users.
   * @member {module:model/CoreActivitySettings} core_settings
   */
  exports.prototype['core_settings'] = undefined;
  /**
   * The date/time this resource was created in seconds since unix epoch
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The list of items that can be used for entitlement (wager amounts/etc)
   * @member {Array.<module:model/ActivityEntitlementResource>} entitlements
   */
  exports.prototype['entitlements'] = undefined;
  /**
   * The unique ID for that resource
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Details about how to launch the activity
   * @member {String} launch
   */
  exports.prototype['launch'] = undefined;
  /**
   * The strategy for calculating the leaderboard. No strategy means no leaderboard for the top level context. Value MUST come from the list of available strategies from the Leaderboard Service
   * @member {String} leaderboard_strategy
   */
  exports.prototype['leaderboard_strategy'] = undefined;
  /**
   * The user friendly name of that resource. Defaults to blank string
   * @member {String} long_description
   */
  exports.prototype['long_description'] = undefined;
  /**
   * The user friendly name of that resource
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The rewards to give at the end of each occurence of the activity. When creating/updating only id is used. Reward set must be pre-existing
   * @member {module:model/RewardSetResource} reward_set
   */
  exports.prototype['reward_set'] = undefined;
  /**
   * Define what parameters are required/available to start and run an activity. For example: Difficulty, Number of Questions, Character name, Avatar, Duration, etc. Not populated when getting listing
   * @member {Array.<module:model/AvailableSettingResource>} settings
   */
  exports.prototype['settings'] = undefined;
  /**
   * The user friendly name of that resource. Defaults to blank string
   * @member {String} short_description
   */
  exports.prototype['short_description'] = undefined;
  /**
   * Whether this activity is a template for other activities. Default: false
   * @member {Boolean} template
   */
  exports.prototype['template'] = undefined;
  /**
   * An activity template this activity is validated against (private). May be null and no validation of additional_properties will be done
   * @member {String} template_id
   */
  exports.prototype['template_id'] = undefined;
  /**
   * The type of the activity
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The unique key (for static reference in code) of the activity
   * @member {String} unique_key
   */
  exports.prototype['unique_key'] = undefined;
  /**
   * The date/time this resource was last updated in seconds since unix epoch
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;



  return exports;
}));


