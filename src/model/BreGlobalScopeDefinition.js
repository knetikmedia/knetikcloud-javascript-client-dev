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
    root.KnetikCloud.BreGlobalScopeDefinition = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BreGlobalScopeDefinition model module.
   * @module model/BreGlobalScopeDefinition
   * @version 3.0.11
   */

  /**
   * Constructs a new <code>BreGlobalScopeDefinition</code>.
   * @alias module:model/BreGlobalScopeDefinition
   * @class
   * @param name {String} The name of the scoping parameter. This is used as the unique identifier of this scope
   * @param type {String} The variable type of this scoping parameter. See Bre Variables endpoint for list
   */
  var exports = function(name, type) {
    var _this = this;

    _this['name'] = name;
    _this['type'] = type;
  };

  /**
   * Constructs a <code>BreGlobalScopeDefinition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BreGlobalScopeDefinition} obj Optional instance to populate.
   * @return {module:model/BreGlobalScopeDefinition} The populated <code>BreGlobalScopeDefinition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
  
  var discriminatorValue = 'BreGlobalScopeDefinition';


  /**
   * The name of the scoping parameter. This is used as the unique identifier of this scope
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The variable type of this scoping parameter. See Bre Variables endpoint for list
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));

