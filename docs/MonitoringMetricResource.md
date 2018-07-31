# KnetikCloud.MonitoringMetricResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_sets** | [**[DimensionSet]**](DimensionSet.md) | The sets of dimensions that datapoints may be recorded with (each datapoint must have dimensions keys exactly matching one of these sets) | 
**high_resolution** | **Boolean** | Whether this metric is measured each second. If false, it is measured each minute. Multiple datapoints in the same period will be combined. Default: false | [optional] 
**id** | **String** | The id of the metric. Cannot be changed | 
**name** | **String** | The name of the metric, for display purposes. Will default if not provided | [optional] 
**unit** | **String** | The unit used by the metric | [optional] 


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




