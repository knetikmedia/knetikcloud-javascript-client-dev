# KnetikCloud.AvailableSettingResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advanced_option** | **Boolean** | Whether the setting is advanced. Default: false | [optional] 
**default_value** | **String** | The default value of the setting (must be in options array). Ex: easy | [optional] 
**description** | **String** | The description of the setting: Ex: Choose the difficulty level to show more or less complicated questions (for a trivia activity) | [optional] 
**key** | **String** | The unique ID for the setting: Ex: difficulty | 
**name** | **String** | The textual name of the setting: Ex: Difficulty Level | 
**options** | [**[SettingOption]**](SettingOption.md) | The set of options available for this setting, Ex: easy, medium, hard | [optional] 
**type** | **String** | The type of the setting value: Ex: TEXT | 


