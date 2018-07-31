# KnetikCloud.UserBaseResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avatar_url** | **String** | The url of the user&#39;s avatar image | [optional] 
**display_name** | **String** | The chosen display name of the user, defaults to username if not present | [optional] 
**email** | **String** | The user&#39;s email address (private). May be required and/or unique depending on system configuration (both on by default). Must match standard email requirements if provided (RFC 2822) | 
**fullname** | **String** | The user&#39;s full name (private) | [optional] 
**id** | **Number** | The id of the user | [optional] 
**last_activity** | **Number** | The date the user last interacted with the API (private) | [optional] 
**last_updated** | **Number** | The date the user&#39;s info was last updated as a unix timestamp | [optional] 
**member_since** | **Number** | The user&#39;s date of registration as a unix timestamp | [optional] 
**username** | **String** | The login username for the user (private). May be set to match email if system does not require usernames separately. | 


