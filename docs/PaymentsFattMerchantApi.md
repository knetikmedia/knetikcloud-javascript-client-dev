# KnetikCloud.PaymentsFattMerchantApi

All URIs are relative to *https://devsandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrUpdateFattMerchantPaymentMethod**](PaymentsFattMerchantApi.md#createOrUpdateFattMerchantPaymentMethod) | **PUT** /payment/provider/fattmerchant/payment-methods | Create or update a FattMerchant payment method for a user


<a name="createOrUpdateFattMerchantPaymentMethod"></a>
# **createOrUpdateFattMerchantPaymentMethod**
> PaymentMethodResource createOrUpdateFattMerchantPaymentMethod(opts)

Create or update a FattMerchant payment method for a user

Stores customer information and creates a payment method that can be used to pay invoices through the payments endpoints. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; FATTMERCHANT_ADMIN or owner

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');
var defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_client_credentials_grant
var oauth2_client_credentials_grant = defaultClient.authentications['oauth2_client_credentials_grant'];
oauth2_client_credentials_grant.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: oauth2_password_grant
var oauth2_password_grant = defaultClient.authentications['oauth2_password_grant'];
oauth2_password_grant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikCloud.PaymentsFattMerchantApi();

var opts = { 
  'request': new KnetikCloud.FattMerchantPaymentMethodRequest() // FattMerchantPaymentMethodRequest | Request containing payment method information for user
};
apiInstance.createOrUpdateFattMerchantPaymentMethod(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**FattMerchantPaymentMethodRequest**](FattMerchantPaymentMethodRequest.md)| Request containing payment method information for user | [optional] 

### Return type

[**PaymentMethodResource**](PaymentMethodResource.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

