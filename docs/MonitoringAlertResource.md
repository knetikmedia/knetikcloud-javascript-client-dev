# KnetikCloud.MonitoringAlertResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation** | **String** | The way to to combine multiple datapoints within the same period | 
**dimensions** | **{String: String}** | Dimensions to filter datapoints. Only datapoints with the same dimensions will be included. Datapoints with more or fewer dimensions also not included | [optional] 
**enabled** | **Boolean** | Whether the alert is live and should be evaluated. Default: true | [optional] 
**id** | **String** | The id of the alert. Cannot be changed | 
**levels** | [**[MonitoringAlertLevel]**](MonitoringAlertLevel.md) | The levels of alert to raise. Minimum 1 and maximum 10 entries. The alert level will be the one with the last one in the list that is passed its threshold | 
**metric** | [**SimpleReferenceResourcestring**](SimpleReferenceResourcestring.md) | The id of the metric the alert is monitoring | 
**name** | **String** | The name of the alert, for display purposes | 
**unit** | **String** | The unit for the evaluation. Should be compatible with the unit of the metric | 


<a name="AggregationEnum"></a>
## Enum: AggregationEnum


* `minimum` (value: `"minimum"`)

* `maximum` (value: `"maximum"`)

* `sum` (value: `"sum"`)

* `average` (value: `"average"`)

* `count` (value: `"count"`)




<a name="UnitEnum"></a>
## Enum: UnitEnum


* `Seconds` (value: `"Seconds"`)

* `Microseconds` (value: `"Microseconds"`)

* `Milliseconds` (value: `"Milliseconds"`)

* `Bytes` (value: `"Bytes"`)

* `Kilobytes` (value: `"Kilobytes"`)

* `Megabytes` (value: `"Megabytes"`)

* `Gigabytes` (value: `"Gigabytes"`)

* `Terabytes` (value: `"Terabytes"`)

* `Bits` (value: `"Bits"`)

* `Kilobits` (value: `"Kilobits"`)

* `Megabits` (value: `"Megabits"`)

* `Gigabits` (value: `"Gigabits"`)

* `Terabits` (value: `"Terabits"`)

* `Percent` (value: `"Percent"`)

* `Count` (value: `"Count"`)

* `BytesSecond` (value: `"BytesSecond"`)

* `KilobytesSecond` (value: `"KilobytesSecond"`)

* `MegabytesSecond` (value: `"MegabytesSecond"`)

* `GigabytesSecond` (value: `"GigabytesSecond"`)

* `TerabytesSecond` (value: `"TerabytesSecond"`)

* `BitsSecond` (value: `"BitsSecond"`)

* `KilobitsSecond` (value: `"KilobitsSecond"`)

* `MegabitsSecond` (value: `"MegabitsSecond"`)

* `GigabitsSecond` (value: `"GigabitsSecond"`)

* `TerabitsSecond` (value: `"TerabitsSecond"`)

* `CountSecond` (value: `"CountSecond"`)

* `None` (value: `"None"`)




