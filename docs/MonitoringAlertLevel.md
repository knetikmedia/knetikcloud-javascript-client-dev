# KnetikCloud.MonitoringAlertLevel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comparison_operator** | **String** | The operator to compare values to the threshold levels. The period&#39;s value is the left hand side. When true, the alert is triggered | 
**datapoints_to_alert** | **Number** | How many periods out of the evaluation_periods must match the test before the alert is triggered. Minimum 1 | 
**evaluation_periods** | **Number** | The number of periods to evaluate each time. Period multiplied by evaluation_periods cannot be greater than 86,400 seconds (1 day) | 
**missing_data_policy** | **String** | How to handle periods with no datapoints, when there are fewer periods with data than the evaluation_periods. Default: missing | [optional] 
**name** | **String** | The name of the alert level | 
**period** | **Number** | The number of seconds to take each datapoint from. If multiple points fall in a period, they are combined according to the aggregation type selected. Value must be a multiple of 60 unless the metric is high_resolution, in which case 10 and 30 are allowed as well. Period multiplied by evaluation_periods cannot be greater than 86,400 seconds (1 day) | 
**threshold** | **Number** | The value each period will be compared to | 


<a name="ComparisonOperatorEnum"></a>
## Enum: ComparisonOperatorEnum


* `greater_than` (value: `"greater_than"`)

* `less_than` (value: `"less_than"`)

* `greater_or_equal` (value: `"greater_or_equal"`)

* `less_or_equal` (value: `"less_or_equal"`)




<a name="MissingDataPolicyEnum"></a>
## Enum: MissingDataPolicyEnum


* `breaching` (value: `"breaching"`)

* `notBreaching` (value: `"notBreaching"`)

* `ignore` (value: `"ignore"`)

* `missing` (value: `"missing"`)




