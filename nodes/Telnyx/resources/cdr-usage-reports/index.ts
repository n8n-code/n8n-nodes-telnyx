import type { INodeProperties } from 'n8n-workflow';

export const cdrUsageReportsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"CDR Usage Reports"
					]
				}
			},
			"options": [
				{
					"name": "Get Usage Report Sync",
					"value": "Get Usage Report Sync",
					"action": "Get Usage Report Sync",
					"description": "Generate and fetch voice usage report synchronously. This endpoint will both generate and fetch the voice report over a specified time period. No polling is necessary but the response may take up to a couple of minutes. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/cdr_usage_reports/sync"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /reports/cdr_usage_reports/sync",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"CDR Usage Reports"
					],
					"operation": [
						"Get Usage Report Sync"
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
						"CDR Usage Reports"
					],
					"operation": [
						"Get Usage Report Sync"
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
						"CDR Usage Reports"
					],
					"operation": [
						"Get Usage Report Sync"
					]
				}
			}
		},
		{
			"displayName": "Aggregation Type",
			"name": "aggregation_type",
			"required": true,
			"default": "no_aggregation",
			"type": "options",
			"options": [
				{
					"name": "NO AGGREGATION",
					"value": "NO_AGGREGATION"
				},
				{
					"name": "CONNECTION",
					"value": "CONNECTION"
				},
				{
					"name": "TAG",
					"value": "TAG"
				},
				{
					"name": "BILLING GROUP",
					"value": "BILLING_GROUP"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "aggregation_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"CDR Usage Reports"
					],
					"operation": [
						"Get Usage Report Sync"
					]
				}
			}
		},
		{
			"displayName": "Product Breakdown",
			"name": "product_breakdown",
			"required": true,
			"default": "no_breakdown",
			"type": "options",
			"options": [
				{
					"name": "NO BREAKDOWN",
					"value": "NO_BREAKDOWN"
				},
				{
					"name": "DID VS TOLL FREE",
					"value": "DID_VS_TOLL_FREE"
				},
				{
					"name": "COUNTRY",
					"value": "COUNTRY"
				},
				{
					"name": "DID VS TOLL FREE PER COUNTRY",
					"value": "DID_VS_TOLL_FREE_PER_COUNTRY"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "product_breakdown",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"CDR Usage Reports"
					],
					"operation": [
						"Get Usage Report Sync"
					]
				}
			}
		},
		{
			"displayName": "Connections",
			"name": "connections",
			"default": "1234567890123",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "connections",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"CDR Usage Reports"
					],
					"operation": [
						"Get Usage Report Sync"
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
						"CDR Usage Reports"
					],
					"operation": [
						"Get Usage Report Sync"
					]
				}
			}
		},
];
