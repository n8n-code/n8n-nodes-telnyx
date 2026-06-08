import type { INodeProperties } from 'n8n-workflow';

export const numberLookupDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Number Lookup"
					]
				}
			},
			"options": [
				{
					"name": "Number Lookup",
					"value": "Number Lookup",
					"action": "Lookup phone number data",
					"description": "Returns information about the provided phone number.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/number_lookup/{{$parameter[\"phone_number\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /number_lookup/{phone_number}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Lookup"
					],
					"operation": [
						"Number Lookup"
					]
				}
			}
		},
		{
			"displayName": "Phone Number",
			"name": "phone_number",
			"required": true,
			"description": "The phone number to be looked up",
			"default": "+18665552368",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Lookup"
					],
					"operation": [
						"Number Lookup"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Specifies the type of number lookup to be performed",
			"default": "carrier",
			"type": "options",
			"options": [
				{
					"name": "Carrier",
					"value": "carrier"
				},
				{
					"name": "Caller Name",
					"value": "caller-name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Lookup"
					],
					"operation": [
						"Number Lookup"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearerauth",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for BearerAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Lookup"
					],
					"operation": [
						"Number Lookup"
					]
				}
			}
		},
];
