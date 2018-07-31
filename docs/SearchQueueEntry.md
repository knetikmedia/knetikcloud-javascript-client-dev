# KnetikCloud.SearchQueueEntry

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_id** | **String** |  | [optional] 
**data** | **Object** |  | [optional] 
**date** | **Number** |  | [optional] 
**entry_type** | **String** |  | [optional] 
**id** | **String** |  | [optional] 
**index** | **String** |  | [optional] 
**page_num** | **Number** |  | [optional] 
**status** | **String** |  | [optional] 
**template** | **String** |  | [optional] 
**template_index** | **String** |  | [optional] 
**template_version_data** | **Object** |  | [optional] 
**type** | **String** |  | [optional] 


<a name="EntryTypeEnum"></a>
## Enum: EntryTypeEnum


* `singleIndex` (value: `"singleIndex"`)

* `singleDelete` (value: `"singleDelete"`)

* `fullIndex` (value: `"fullIndex"`)

* `fullDelete` (value: `"fullDelete"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `QUEUED` (value: `"QUEUED"`)

* `FAILED` (value: `"FAILED"`)




