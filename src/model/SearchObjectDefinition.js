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
    define(['ApiClient', 'model/SearchReferenceMapping'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SearchReferenceMapping'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.SearchObjectDefinition = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.SearchReferenceMapping);
  }
}(this, function(ApiClient, SearchReferenceMapping) {
  'use strict';




  /**
   * The SearchObjectDefinition model module.
   * @module model/SearchObjectDefinition
   * @version 3.0.11
   */

  /**
   * Constructs a new <code>SearchObjectDefinition</code>.
   * @alias module:model/SearchObjectDefinition
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>SearchObjectDefinition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchObjectDefinition} obj Optional instance to populate.
   * @return {module:model/SearchObjectDefinition} The populated <code>SearchObjectDefinition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data_supplier_url')) {
        obj['data_supplier_url'] = ApiClient.convertToType(data['data_supplier_url'], 'String');
      }
      if (data.hasOwnProperty('id_field')) {
        obj['id_field'] = ApiClient.convertToType(data['id_field'], 'String');
      }
      if (data.hasOwnProperty('mappings')) {
        obj['mappings'] = ApiClient.convertToType(data['mappings'], [SearchReferenceMapping]);
      }
      if (data.hasOwnProperty('template_field')) {
        obj['template_field'] = ApiClient.convertToType(data['template_field'], 'String');
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
  
  var discriminatorValue = 'SearchObjectDefinition';


  /**
   * The relative URL of the service that will provide the initial data to index. Assumed to be compliant with KnetikCloud pagination standards. Ex: /locations.
   * @member {String} data_supplier_url
   */
  exports.prototype['data_supplier_url'] = undefined;
  /**
   * The name of the field representing the unique identifier of the document. Ex: UserResource -> id
   * @member {String} id_field
   */
  exports.prototype['id_field'] = undefined;
  /**
   * Describe how nested resources should be mapped to documents if needed. Search service will copy the already indexed dependant documents and use them to replace the listed fields at runtime. Ex: comment.user is a user document
   * @member {Array.<module:model/SearchReferenceMapping>} mappings
   */
  exports.prototype['mappings'] = undefined;
  /**
   * The name of the property that holds the template ID for custom objects. (ex: template or template_id)
   * @member {String} template_field
   */
  exports.prototype['template_field'] = undefined;
  /**
   * The name of the index where the documents will be stored. Be convention, the name of the resource w/o suffix. Ex: UserResource -> users
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


