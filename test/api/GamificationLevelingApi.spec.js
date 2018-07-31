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
    instance = new KnetikCloud.GamificationLevelingApi();
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

  describe('GamificationLevelingApi', function() {
    describe('createLevel', function() {
      it('should call createLevel successfully', function(done) {
        //uncomment below and update the code to test createLevel
        //instance.createLevel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteLevel', function() {
      it('should call deleteLevel successfully', function(done) {
        //uncomment below and update the code to test deleteLevel
        //instance.deleteLevel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLevel', function() {
      it('should call getLevel successfully', function(done) {
        //uncomment below and update the code to test getLevel
        //instance.getLevel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLevelTriggers', function() {
      it('should call getLevelTriggers successfully', function(done) {
        //uncomment below and update the code to test getLevelTriggers
        //instance.getLevelTriggers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLevels', function() {
      it('should call getLevels successfully', function(done) {
        //uncomment below and update the code to test getLevels
        //instance.getLevels(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserLevel', function() {
      it('should call getUserLevel successfully', function(done) {
        //uncomment below and update the code to test getUserLevel
        //instance.getUserLevel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserLevels', function() {
      it('should call getUserLevels successfully', function(done) {
        //uncomment below and update the code to test getUserLevels
        //instance.getUserLevels(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('incrementProgress', function() {
      it('should call incrementProgress successfully', function(done) {
        //uncomment below and update the code to test incrementProgress
        //instance.incrementProgress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setProgress', function() {
      it('should call setProgress successfully', function(done) {
        //uncomment below and update the code to test setProgress
        //instance.setProgress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateLevel', function() {
      it('should call updateLevel successfully', function(done) {
        //uncomment below and update the code to test updateLevel
        //instance.updateLevel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
