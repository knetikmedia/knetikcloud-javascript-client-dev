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
    instance = new KnetikCloud.TaxesApi();
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

  describe('TaxesApi', function() {
    describe('createCountryTax', function() {
      it('should call createCountryTax successfully', function(done) {
        //uncomment below and update the code to test createCountryTax
        //instance.createCountryTax(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createStateTax', function() {
      it('should call createStateTax successfully', function(done) {
        //uncomment below and update the code to test createStateTax
        //instance.createStateTax(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCountryTax', function() {
      it('should call deleteCountryTax successfully', function(done) {
        //uncomment below and update the code to test deleteCountryTax
        //instance.deleteCountryTax(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteStateTax', function() {
      it('should call deleteStateTax successfully', function(done) {
        //uncomment below and update the code to test deleteStateTax
        //instance.deleteStateTax(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCountryTax', function() {
      it('should call getCountryTax successfully', function(done) {
        //uncomment below and update the code to test getCountryTax
        //instance.getCountryTax(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCountryTaxes', function() {
      it('should call getCountryTaxes successfully', function(done) {
        //uncomment below and update the code to test getCountryTaxes
        //instance.getCountryTaxes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStateTax', function() {
      it('should call getStateTax successfully', function(done) {
        //uncomment below and update the code to test getStateTax
        //instance.getStateTax(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStateTaxesForCountries', function() {
      it('should call getStateTaxesForCountries successfully', function(done) {
        //uncomment below and update the code to test getStateTaxesForCountries
        //instance.getStateTaxesForCountries(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStateTaxesForCountry', function() {
      it('should call getStateTaxesForCountry successfully', function(done) {
        //uncomment below and update the code to test getStateTaxesForCountry
        //instance.getStateTaxesForCountry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCountryTax', function() {
      it('should call updateCountryTax successfully', function(done) {
        //uncomment below and update the code to test updateCountryTax
        //instance.updateCountryTax(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateStateTax', function() {
      it('should call updateStateTax successfully', function(done) {
        //uncomment below and update the code to test updateStateTax
        //instance.updateStateTax(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));