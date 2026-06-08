import type { INodeProperties } from 'n8n-workflow';

export const callInformationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Call Information"
					]
				}
			},
			"options": [
				{
					"name": "Retrieve Call Status",
					"value": "Retrieve Call Status",
					"action": "Retrieve a call status",
					"description": "Returns the status of a call (data is available 10 minutes after call ended).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/calls/{{$parameter[\"call_control_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /calls/{call_control_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Information"
					],
					"operation": [
						"Retrieve Call Status"
					]
				}
			}
		},
		{
			"displayName": "Call Control Id",
			"name": "call_control_id",
			"required": true,
			"description": "Unique identifier and token for controlling the call",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Information"
					],
					"operation": [
						"Retrieve Call Status"
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
						"Call Information"
					],
					"operation": [
						"Retrieve Call Status"
					]
				}
			}
		},
];
