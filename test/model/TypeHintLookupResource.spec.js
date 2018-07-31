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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KnetikCloud);
  }
}(this, function(expect, KnetikCloud) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KnetikCloud.TypeHintLookupResource();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TypeHintLookupResource', function() {
    it('should create an instance of TypeHintLookupResource', function() {
      // uncomment below and update the code to test TypeHintLookupResource
      //var instane = new KnetikCloud.TypeHintLookupResource();
      //expect(instance).to.be.a(KnetikCloud.TypeHintLookupResource);
    });

    it('should have the property definition (base name: "definition")', function() {
      // uncomment below and update the code to test the property definition
      //var instane = new KnetikCloud.TypeHintLookupResource();
      //expect(instance).to.be();
    });

    it('should have the property lookupKey (base name: "lookup_key")', function() {
      // uncomment below and update the code to test the property lookupKey
      //var instane = new KnetikCloud.TypeHintLookupResource();
      //expect(instance).to.be();
    });

    it('should have the property requiredKeyType (base name: "required_key_type")', function() {
      // uncomment below and update the code to test the property requiredKeyType
      //var instane = new KnetikCloud.TypeHintLookupResource();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new KnetikCloud.TypeHintLookupResource();
      //expect(instance).to.be();
    });

    it('should have the property valueType (base name: "value_type")', function() {
      // uncomment below and update the code to test the property valueType
      //var instane = new KnetikCloud.TypeHintLookupResource();
      //expect(instance).to.be();
    });

  });

}));
