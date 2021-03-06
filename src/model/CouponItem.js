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
    define(['ApiClient', 'model/Behavior', 'model/Property', 'model/Sku', 'model/StoreItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Behavior'), require('./Property'), require('./Sku'), require('./StoreItem'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.CouponItem = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Behavior, root.KnetikCloud.Property, root.KnetikCloud.Sku, root.KnetikCloud.StoreItem);
  }
}(this, function(ApiClient, Behavior, Property, Sku, StoreItem) {
  'use strict';




  /**
   * The CouponItem model module.
   * @module model/CouponItem
   * @version 3.0.11
   */

  /**
   * Constructs a new <code>CouponItem</code>.
   * @alias module:model/CouponItem
   * @class
   * @extends module:model/StoreItem
   * @param name {String} The name of the item
   * @param typeHint {String} The type of the item
   * @param skus {Array.<module:model/Sku>} The skus for the item. Each defines a unique configuration for the item to be purchased (Large-Blue, Small-Green, etc). These are what is ultimately selected in the store and added to the cart
   * @param vendorId {Number} The vendor who provides the item
   * @param couponTypeHint {module:model/CouponItem.CouponTypeHintEnum} The type of coupon
   * @param discountType {module:model/CouponItem.DiscountTypeEnum} The type of discount in terms of how it deducts price. Value based discount not available for coupon_cart type coupons
   * @param discountValue {Number} The amount the coupon will discount the item. If discount_type is 'value' this will be a flat amount of currency. If discount type is 'percentage' this will be a fraction (0.2 for 20% off) multiplied by the price of the matching item or items.
   */
  var exports = function(name, typeHint, skus, vendorId, couponTypeHint, discountType, discountValue) {
    var _this = this;
    StoreItem.call(_this, name, typeHint, skus, vendorId);
    _this['coupon_type_hint'] = couponTypeHint;


    _this['discount_type'] = discountType;
    _this['discount_value'] = discountValue;





  };

  /**
   * Constructs a <code>CouponItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CouponItem} obj Optional instance to populate.
   * @return {module:model/CouponItem} The populated <code>CouponItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      StoreItem.constructFromObject(data, obj);
      if (data.hasOwnProperty('coupon_type_hint')) {
        obj['coupon_type_hint'] = ApiClient.convertToType(data['coupon_type_hint'], 'String');
      }
      if (data.hasOwnProperty('discount_max')) {
        obj['discount_max'] = ApiClient.convertToType(data['discount_max'], 'Number');
      }
      if (data.hasOwnProperty('discount_min_cart_value')) {
        obj['discount_min_cart_value'] = ApiClient.convertToType(data['discount_min_cart_value'], 'Number');
      }
      if (data.hasOwnProperty('discount_type')) {
        obj['discount_type'] = ApiClient.convertToType(data['discount_type'], 'String');
      }
      if (data.hasOwnProperty('discount_value')) {
        obj['discount_value'] = ApiClient.convertToType(data['discount_value'], 'Number');
      }
      if (data.hasOwnProperty('exclusive')) {
        obj['exclusive'] = ApiClient.convertToType(data['exclusive'], 'Boolean');
      }
      if (data.hasOwnProperty('item_id')) {
        obj['item_id'] = ApiClient.convertToType(data['item_id'], 'Number');
      }
      if (data.hasOwnProperty('max_quantity')) {
        obj['max_quantity'] = ApiClient.convertToType(data['max_quantity'], 'Number');
      }
      if (data.hasOwnProperty('self_exclusive')) {
        obj['self_exclusive'] = ApiClient.convertToType(data['self_exclusive'], 'Boolean');
      }
      if (data.hasOwnProperty('valid_for_tags')) {
        obj['valid_for_tags'] = ApiClient.convertToType(data['valid_for_tags'], ['String']);
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
  
  var discriminatorValue = 'coupon_item';
  StoreItem.registerChild(exports, discriminatorValue);
  
  exports.prototype = Object.create(StoreItem.prototype);
  exports.prototype.constructor = exports;


  /**
   * The type of coupon
   * @member {module:model/CouponItem.CouponTypeHintEnum} coupon_type_hint
   */
  exports.prototype['coupon_type_hint'] = undefined;
  /**
   * The amount this coupon is maxed out at.  Applies if coupon_type_hint is coupon_cart
   * @member {Number} discount_max
   */
  exports.prototype['discount_max'] = undefined;
  /**
   * The minimium amount needed in the cart for the coupon to apply.  Applies if coupon_type_hint is coupon_cart
   * @member {Number} discount_min_cart_value
   */
  exports.prototype['discount_min_cart_value'] = undefined;
  /**
   * The type of discount in terms of how it deducts price. Value based discount not available for coupon_cart type coupons
   * @member {module:model/CouponItem.DiscountTypeEnum} discount_type
   */
  exports.prototype['discount_type'] = undefined;
  /**
   * The amount the coupon will discount the item. If discount_type is 'value' this will be a flat amount of currency. If discount type is 'percentage' this will be a fraction (0.2 for 20% off) multiplied by the price of the matching item or items.
   * @member {Number} discount_value
   */
  exports.prototype['discount_value'] = undefined;
  /**
   * Whether this coupon is exclusive or not (true means cannot be in same cart as another).  Default = false
   * @member {Boolean} exclusive
   */
  exports.prototype['exclusive'] = undefined;
  /**
   * The id of the item the coupon is applied to.  Applies if coupon_type_hint is coupon_single_item or coupon_voucher
   * @member {Number} item_id
   */
  exports.prototype['item_id'] = undefined;
  /**
   * The maximum quantity of items the coupon can apply to, null if no limit and minimum 1 otherwise.  Applies if coupon_type_hint is coupon_single_item or coupon_voucher
   * @member {Number} max_quantity
   */
  exports.prototype['max_quantity'] = undefined;
  /**
   * Whether this coupon is exclusive to itself or not (true means cannot add two of this same coupon to the same cart).  Default = false
   * @member {Boolean} self_exclusive
   */
  exports.prototype['self_exclusive'] = undefined;
  /**
   * A list of tags for a coupon.  The coupon can only apply to an item that has at least one of these tags.  Applies if coupon_type_hint is coupon_tag
   * @member {Array.<String>} valid_for_tags
   */
  exports.prototype['valid_for_tags'] = undefined;


  /**
   * Allowed values for the <code>coupon_type_hint</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CouponTypeHintEnum = {
    /**
     * value: "coupon_cart"
     * @const
     */
    "cart": "coupon_cart",
    /**
     * value: "coupon_single_item"
     * @const
     */
    "single_item": "coupon_single_item",
    /**
     * value: "coupon_voucher"
     * @const
     */
    "voucher": "coupon_voucher",
    /**
     * value: "coupon_vendor"
     * @const
     */
    "vendor": "coupon_vendor",
    /**
     * value: "coupon_tag"
     * @const
     */
    "tag": "coupon_tag"  };

  /**
   * Allowed values for the <code>discount_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DiscountTypeEnum = {
    /**
     * value: "value"
     * @const
     */
    "value": "value",
    /**
     * value: "percentage"
     * @const
     */
    "percentage": "percentage"  };


  return exports;
}));


