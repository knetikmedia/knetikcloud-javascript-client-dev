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
    define(['ApiClient', 'model/FileProperty', 'model/Property'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FileProperty'), require('./Property'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.FileGroupProperty = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.FileProperty, root.KnetikCloud.Property);
  }
}(this, function(ApiClient, FileProperty, Property) {
  'use strict';




  /**
   * The FileGroupProperty model module.
   * @module model/FileGroupProperty
   * @version 3.0.11
   */

  /**
   * Constructs a new <code>FileGroupProperty</code>.
   * @alias module:model/FileGroupProperty
   * @class
   * @extends module:model/Property
   * @param type {String} The type of the property. Used for polymorphic type recognition and thus must match an expected type with additional properties.
   */
  var exports = function(type) {
    var _this = this;
    Property.call(_this, type);

  };

  /**
   * Constructs a <code>FileGroupProperty</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FileGroupProperty} obj Optional instance to populate.
   * @return {module:model/FileGroupProperty} The populated <code>FileGroupProperty</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      Property.constructFromObject(data, obj);
      if (data.hasOwnProperty('files')) {
        obj['files'] = ApiClient.convertToType(data['files'], [FileProperty]);
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
  
  var discriminatorValue = 'file_group';
  Property.registerChild(exports, discriminatorValue);
  
  exports.prototype = Object.create(Property.prototype);
  exports.prototype.constructor = exports;


  /**
   * The list of files
   * @member {Array.<module:model/FileProperty>} files
   */
  exports.prototype['files'] = undefined;



  return exports;
}));

