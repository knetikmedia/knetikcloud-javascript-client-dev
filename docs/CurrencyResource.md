# KnetikCloud.CurrencyResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | Whether the currency is active. Default true | [optional] 
**code** | **String** | The unique id code for the currency. Maximum 5 characters | 
**created_date** | **Number** | The unix timestamp in seconds the currency was added to the system | [optional] 
**default_currency** | **Boolean** | Whether this is the default currency. All real money wallets will be in this currency, and the &#39;factor&#39; on each currency is in relation to the default. There must be one default currency and the current will be changed if you set another as the default. Cannot be combined with virtual currency. Take extreme caution when changing | [optional] 
**factor** | **Number** | The decimal to multiply the default currency to localize to this one. Should be 1 for the default currency itself. | 
**icon** | **String** | The url for an icon of the currency | [optional] 
**name** | **String** | The name of the currency | 
**type** | **String** | The type of currency. Default &#39;real&#39; | [optional] 
**updated_date** | **Number** | The unix timestamp in seconds the currency was last updated in the system. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `real` (value: `"real"`)

* `virtual` (value: `"virtual"`)




