import type { INodeProperties } from 'n8n-workflow';

export const whatsAppUsageAggregationsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Usage Aggregations"
					]
				}
			},
			"options": [
				{
					"name": "Get Usage Aggregations Sync",
					"value": "Get Usage Aggregations Sync",
					"action": "Get Usage Aggregations Sync",
					"description": "Generate and fetch WhatsApp usage aggregations synchronously. This endpoint will both generate and fetch the WhatsApp aggregations over a specified time period. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/whatsapp_usage_aggregations"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /whatsapp_usage_aggregations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Usage Aggregations"
					],
					"operation": [
						"Get Usage Aggregations Sync"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "start_date",
			"default": "2020-07-01T00:00:00-06:00",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "start_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Usage Aggregations"
					],
					"operation": [
						"Get Usage Aggregations Sync"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "end_date",
			"default": "2020-07-01T00:00:00-06:00",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "end_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Usage Aggregations"
					],
					"operation": [
						"Get Usage Aggregations Sync"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearerauth",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for bearerAuth",
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
						"Whats App Usage Aggregations"
					],
					"operation": [
						"Get Usage Aggregations Sync"
					]
				}
			}
		},
];
