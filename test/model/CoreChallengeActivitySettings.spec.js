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
    instance = new KnetikCloud.CoreChallengeActivitySettings();
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

  describe('CoreChallengeActivitySettings', function() {
    it('should create an instance of CoreChallengeActivitySettings', function() {
      // uncomment below and update the code to test CoreChallengeActivitySettings
      //var instane = new KnetikCloud.CoreChallengeActivitySettings();
      //expect(instance).to.be.a(KnetikCloud.CoreChallengeActivitySettings);
    });

    it('should have the property bootInPlay (base name: "boot_in_play")', function() {
      // uncomment below and update the code to test the property bootInPlay
      //var instane = new KnetikCloud.CoreChallengeActivitySettings();
      //expect(instance).to.be();
    });

    it('should have the property customLaunchAddress (base name: "custom_launch_address")', function() {
      // uncomment below and update the code to test the property customLaunchAddress
      //var instane = new KnetikCloud.CoreChallengeActivitySettings();
      //expect(instance).to.be();
    });

    it('should have the property customLaunchAddressAllowed (base name: "custom_launch_address_allowed")', function() {
      // uncomment below and update the code to test the property customLaunchAddressAllowed
      //var instane = new KnetikCloud.CoreChallengeActivitySettings();
      //expect(instance).to.be();
    });

    it('should have the property hostOption (base name: "host_option")', function() {
      // uncomment below and update the code to test the property hostOption
      //var instane = new KnetikCloud.CoreChallengeActivitySettings();
      //expect(instance).to.be();
    });

    it('should have the property hostStatusControl (base name: "host_status_control")', function() {
      // uncomment below and update the code to test the property hostStatusControl
      //var instane = new KnetikCloud.CoreChallengeActivitySettings();
      //expect(instance).to.be();
    });

    it('should have the property joinInPlay (base name: "join_in_play")', function() {
      // uncomment below and update the code to test the property joinInPlay
      //var instane = new KnetikCloud.CoreChallengeActivitySettings();
      //expect(instance).to.be();
    });

    it('should have the property leaveInPlay (base name: "leave_in_play")', function() {
      // uncomment below and update the code to test the property leaveInPlay
      //var instane = new KnetikCloud.CoreChallengeActivitySettings();
      //expect(instance).to.be();
    });

    it('should have the property maxPlayers (base name: "max_players")', function() {
      // uncomment below and update the code to test the property maxPlayers
      //var instane = new KnetikCloud.CoreChallengeActivitySettings();
      //expect(instance).to.be();
    });

    it('should have the property minPlayers (base name: "min_players")', function() {
      // uncomment below and update the code to test the property minPlayers
      //var instane = new KnetikCloud.CoreChallengeActivitySettings();
      //expect(instance).to.be();
    });

    it('should have the property resultsTrust (base name: "results_trust")', function() {
      // uncomment below and update the code to test the property resultsTrust
      //var instane = new KnetikCloud.CoreChallengeActivitySettings();
      //expect(instance).to.be();
    });

  });

}));
