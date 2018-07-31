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
    define(['ApiClient', 'model/LeaderboardEntryResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LeaderboardEntryResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.LeaderboardResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.LeaderboardEntryResource);
  }
}(this, function(ApiClient, LeaderboardEntryResource) {
  'use strict';




  /**
   * The LeaderboardResource model module.
   * @module model/LeaderboardResource
   * @version 3.0.11
   */

  /**
   * Constructs a new <code>LeaderboardResource</code>.
   * @alias module:model/LeaderboardResource
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>LeaderboardResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LeaderboardResource} obj Optional instance to populate.
   * @return {module:model/LeaderboardResource} The populated <code>LeaderboardResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [LeaderboardEntryResource]);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('strategy')) {
        obj['strategy'] = ApiClient.convertToType(data['strategy'], 'String');
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
  
  var discriminatorValue = 'LeaderboardResource';


  /**
   * The paginated list of user results, in order from best to worst
   * @member {Array.<module:model/LeaderboardEntryResource>} entries
   */
  exports.prototype['entries'] = undefined;
  /**
   * The id of the leaderboard
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The name of the strategy that defines how entries are stored and compared
   * @member {String} strategy
   */
  exports.prototype['strategy'] = undefined;



  return exports;
}));

