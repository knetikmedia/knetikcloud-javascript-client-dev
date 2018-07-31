# KnetikCloud.ActivityUserResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **Boolean** | Whether this user is the &#39;host&#39; of the occurrence and has increased access to settings/etc (default: false) | [optional] 
**id** | **Number** | The id of the activity user entry | [optional] 
**joined_date** | **Number** | The date this user last joined the occurrence, unix timestamp in seconds | [optional] 
**left_date** | **Number** | The date this user last left the occurrence, unix timestamp in seconds. Null if still present | [optional] 
**metric** | [**MetricResource**](MetricResource.md) | The metric for the user&#39;s results, after the game is over | [optional] 
**status** | **String** | The current status of the user in the occurrence (default: present) | [optional] 
**user** | [**SimpleUserResource**](SimpleUserResource.md) | The user | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `present` (value: `"present"`)

* `ready` (value: `"ready"`)

* `left` (value: `"left"`)

* `surrendered` (value: `"surrendered"`)

* `disconnected` (value: `"disconnected"`)




