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
    instance = new KnetikCloud.SubscriptionPlanResource();
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

  describe('SubscriptionPlanResource', function() {
    it('should create an instance of SubscriptionPlanResource', function() {
      // uncomment below and update the code to test SubscriptionPlanResource
      //var instane = new KnetikCloud.SubscriptionPlanResource();
      //expect(instance).to.be.a(KnetikCloud.SubscriptionPlanResource);
    });

    it('should have the property additionalProperties (base name: "additional_properties")', function() {
      // uncomment below and update the code to test the property additionalProperties
      //var instane = new KnetikCloud.SubscriptionPlanResource();
      //expect(instance).to.be();
    });

    it('should have the property billingCycleLength (base name: "billing_cycle_length")', function() {
      // uncomment below and update the code to test the property billingCycleLength
      //var instane = new KnetikCloud.SubscriptionPlanResource();
      //expect(instance).to.be();
    });

    it('should have the property billingCycleUnit (base name: "billing_cycle_unit")', function() {
      // uncomment below and update the code to test the property billingCycleUnit
      //var instane = new KnetikCloud.SubscriptionPlanResource();
      //expect(instance).to.be();
    });

    it('should have the property consolidated (base name: "consolidated")', function() {
      // uncomment below and update the code to test the property consolidated
      //var instane = new KnetikCloud.SubscriptionPlanResource();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currency_code")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new KnetikCloud.SubscriptionPlanResource();
      //expect(instance).to.be();
    });

    it('should have the property endDate (base name: "end_date")', function() {
      // uncomment below and update the code to test the property endDate
      //var instane = new KnetikCloud.SubscriptionPlanResource();
      //expect(instance).to.be();
    });

    it('should have the property firstBillingCycleLength (base name: "first_billing_cycle_length")', function() {
      // uncomment below and update the code to test the property firstBillingCycleLength
      //var instane = new KnetikCloud.SubscriptionPlanResource();
      //expect(instance).to.be();
    });

    it('should have the property firstBillingCycleUnit (base name: "first_billing_cycle_unit")', function() {
      // uncomment below and update the code to test the property firstBillingCycleUnit
      //var instane = new KnetikCloud.SubscriptionPlanResource();
      //expect(instance).to.be();
    });

    it('should have the property gracePeriod (base name: "grace_period")', function() {
      // uncomment below and update the code to test the property gracePeriod
      //var instane = new KnetikCloud.SubscriptionPlanResource();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KnetikCloud.SubscriptionPlanResource();
      //expect(instance).to.be();
    });

    it('should have the property initialFee (base name: "initial_fee")', function() {
      // uncomment below and update the code to test the property initialFee
      //var instane = new KnetikCloud.SubscriptionPlanResource();
      //expect(instance).to.be();
    });

    it('should have the property initialSku (base name: "initial_sku")', function() {
      // uncomment below and update the code to test the property initialSku
      //var instane = new KnetikCloud.SubscriptionPlanResource();
      //expect(instance).to.be();
    });

    it('should have the property latePaymentFee (base name: "late_payment_fee")', function() {
      // uncomment below and update the code to test the property latePaymentFee
      //var instane = new KnetikCloud.SubscriptionPlanResource();
      //expect(instance).to.be();
    });

    it('should have the property latePaymentSku (base name: "late_payment_sku")', function() {
      // uncomment below and update the code to test the property latePaymentSku
      //var instane = new KnetikCloud.SubscriptionPlanResource();
      //expect(instance).to.be();
    });

    it('should have the property locked (base name: "locked")', function() {
      // uncomment below and update the code to test the property locked
      //var instane = new KnetikCloud.SubscriptionPlanResource();
      //expect(instance).to.be();
    });

    it('should have the property maxBillAttempts (base name: "max_bill_attempts")', function() {
      // uncomment below and update the code to test the property maxBillAttempts
      //var instane = new KnetikCloud.SubscriptionPlanResource();
      //expect(instance).to.be();
    });

    it('should have the property maxCycles (base name: "max_cycles")', function() {
      // uncomment below and update the code to test the property maxCycles
      //var instane = new KnetikCloud.SubscriptionPlanResource();
      //expect(instance).to.be();
    });

    it('should have the property migrateToPlan (base name: "migrate_to_plan")', function() {
      // uncomment below and update the code to test the property migrateToPlan
      //var instane = new KnetikCloud.SubscriptionPlanResource();
      //expect(instance).to.be();
    });

    it('should have the property minCycles (base name: "min_cycles")', function() {
      // uncomment below and update the code to test the property minCycles
      //var instane = new KnetikCloud.SubscriptionPlanResource();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KnetikCloud.SubscriptionPlanResource();
      //expect(instance).to.be();
    });

    it('should have the property published (base name: "published")', function() {
      // uncomment below and update the code to test the property published
      //var instane = new KnetikCloud.SubscriptionPlanResource();
      //expect(instance).to.be();
    });

    it('should have the property reactivationFee (base name: "reactivation_fee")', function() {
      // uncomment below and update the code to test the property reactivationFee
      //var instane = new KnetikCloud.SubscriptionPlanResource();
      //expect(instance).to.be();
    });

    it('should have the property reactivationSku (base name: "reactivation_sku")', function() {
      // uncomment below and update the code to test the property reactivationSku
      //var instane = new KnetikCloud.SubscriptionPlanResource();
      //expect(instance).to.be();
    });

    it('should have the property recurringFee (base name: "recurring_fee")', function() {
      // uncomment below and update the code to test the property recurringFee
      //var instane = new KnetikCloud.SubscriptionPlanResource();
      //expect(instance).to.be();
    });

    it('should have the property recurringSku (base name: "recurring_sku")', function() {
      // uncomment below and update the code to test the property recurringSku
      //var instane = new KnetikCloud.SubscriptionPlanResource();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "start_date")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new KnetikCloud.SubscriptionPlanResource();
      //expect(instance).to.be();
    });

  });

}));
