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
    instance = new KnetikCloud.UsersInventoryApi();
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

  describe('UsersInventoryApi', function() {
    describe('addItemToUserInventory', function() {
      it('should call addItemToUserInventory successfully', function(done) {
        //uncomment below and update the code to test addItemToUserInventory
        //instance.addItemToUserInventory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('checkUserEntitlementItem', function() {
      it('should call checkUserEntitlementItem successfully', function(done) {
        //uncomment below and update the code to test checkUserEntitlementItem
        //instance.checkUserEntitlementItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createEntitlementItem', function() {
      it('should call createEntitlementItem successfully', function(done) {
        //uncomment below and update the code to test createEntitlementItem
        //instance.createEntitlementItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createEntitlementTemplate', function() {
      it('should call createEntitlementTemplate successfully', function(done) {
        //uncomment below and update the code to test createEntitlementTemplate
        //instance.createEntitlementTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteEntitlementItem', function() {
      it('should call deleteEntitlementItem successfully', function(done) {
        //uncomment below and update the code to test deleteEntitlementItem
        //instance.deleteEntitlementItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteEntitlementTemplate', function() {
      it('should call deleteEntitlementTemplate successfully', function(done) {
        //uncomment below and update the code to test deleteEntitlementTemplate
        //instance.deleteEntitlementTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEntitlementItem', function() {
      it('should call getEntitlementItem successfully', function(done) {
        //uncomment below and update the code to test getEntitlementItem
        //instance.getEntitlementItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEntitlementItems', function() {
      it('should call getEntitlementItems successfully', function(done) {
        //uncomment below and update the code to test getEntitlementItems
        //instance.getEntitlementItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEntitlementTemplate', function() {
      it('should call getEntitlementTemplate successfully', function(done) {
        //uncomment below and update the code to test getEntitlementTemplate
        //instance.getEntitlementTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEntitlementTemplates', function() {
      it('should call getEntitlementTemplates successfully', function(done) {
        //uncomment below and update the code to test getEntitlementTemplates
        //instance.getEntitlementTemplates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserInventories', function() {
      it('should call getUserInventories successfully', function(done) {
        //uncomment below and update the code to test getUserInventories
        //instance.getUserInventories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserInventory', function() {
      it('should call getUserInventory successfully', function(done) {
        //uncomment below and update the code to test getUserInventory
        //instance.getUserInventory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserInventoryLog', function() {
      it('should call getUserInventoryLog successfully', function(done) {
        //uncomment below and update the code to test getUserInventoryLog
        //instance.getUserInventoryLog(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUsersInventory', function() {
      it('should call getUsersInventory successfully', function(done) {
        //uncomment below and update the code to test getUsersInventory
        //instance.getUsersInventory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('grantUserEntitlement', function() {
      it('should call grantUserEntitlement successfully', function(done) {
        //uncomment below and update the code to test grantUserEntitlement
        //instance.grantUserEntitlement(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateEntitlementItem', function() {
      it('should call updateEntitlementItem successfully', function(done) {
        //uncomment below and update the code to test updateEntitlementItem
        //instance.updateEntitlementItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateEntitlementTemplate', function() {
      it('should call updateEntitlementTemplate successfully', function(done) {
        //uncomment below and update the code to test updateEntitlementTemplate
        //instance.updateEntitlementTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateUserInventoryBehaviorData', function() {
      it('should call updateUserInventoryBehaviorData successfully', function(done) {
        //uncomment below and update the code to test updateUserInventoryBehaviorData
        //instance.updateUserInventoryBehaviorData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateUserInventoryExpires', function() {
      it('should call updateUserInventoryExpires successfully', function(done) {
        //uncomment below and update the code to test updateUserInventoryExpires
        //instance.updateUserInventoryExpires(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateUserInventoryStatus', function() {
      it('should call updateUserInventoryStatus successfully', function(done) {
        //uncomment below and update the code to test updateUserInventoryStatus
        //instance.updateUserInventoryStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('useUserEntitlementItem', function() {
      it('should call useUserEntitlementItem successfully', function(done) {
        //uncomment below and update the code to test useUserEntitlementItem
        //instance.useUserEntitlementItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
