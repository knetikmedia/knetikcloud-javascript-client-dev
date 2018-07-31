# KnetikCloud.QuestionTemplateResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_additional** | **Boolean** | Whether to allow additional properties beyond those specified or not | [optional] 
**answer_property** | [**PropertyDefinitionResource**](PropertyDefinitionResource.md) | A property definition for all answers. If included each answer must match this definition&#39;s type and be valid | [optional] 
**created_date** | **Number** | The date/time this resource was created in seconds since unix epoch | [optional] 
**id** | **String** | The id of the template | [optional] 
**name** | **String** | The name of the template | 
**properties** | [**[PropertyDefinitionResource]**](PropertyDefinitionResource.md) | The customized properties that are present | [optional] 
**question_property** | [**PropertyDefinitionResource**](PropertyDefinitionResource.md) | A property definition for the question itself. If included the answer must match this definition&#39;s type and be valid | [optional] 
**updated_date** | **Number** | The date/time this resource was last updated in seconds since unix epoch | [optional] 


