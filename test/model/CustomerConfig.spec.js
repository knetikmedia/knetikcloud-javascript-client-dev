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
    instance = new KnetikCloud.CustomerConfig();
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

  describe('CustomerConfig', function() {
    it('should create an instance of CustomerConfig', function() {
      // uncomment below and update the code to test CustomerConfig
      //var instane = new KnetikCloud.CustomerConfig();
      //expect(instance).to.be.a(KnetikCloud.CustomerConfig);
    });

    it('should have the property aliases (base name: "aliases")', function() {
      // uncomment below and update the code to test the property aliases
      //var instane = new KnetikCloud.CustomerConfig();
      //expect(instance).to.be();
    });

    it('should have the property database (base name: "database")', function() {
      // uncomment below and update the code to test the property database
      //var instane = new KnetikCloud.CustomerConfig();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KnetikCloud.CustomerConfig();
      //expect(instance).to.be();
    });

    it('should have the property s3Config (base name: "s3_config")', function() {
      // uncomment below and update the code to test the property s3Config
      //var instane = new KnetikCloud.CustomerConfig();
      //expect(instance).to.be();
    });

    it('should have the property searchEnabled (base name: "search_enabled")', function() {
      // uncomment below and update the code to test the property searchEnabled
      //var instane = new KnetikCloud.CustomerConfig();
      //expect(instance).to.be();
    });

  });

}));
