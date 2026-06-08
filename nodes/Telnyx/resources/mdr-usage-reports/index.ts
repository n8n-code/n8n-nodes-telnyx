import type { INodeProperties } from 'n8n-workflow';

export const mdrUsageReportsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Usage Reports"
					]
				}
			},
			"options": [
				{
					"name": "Get Usage Reports",
					"value": "Get Usage Reports",
					"action": "Get Usage Reports",
					"description": "Fetch all messaging usage reports. Usage reports are aggregated messaging data for specified time period and breakdown",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/mdr_usage_reports"
						}
					}
				},
				{
					"name": "Submit Usage Report",
					"value": "Submit Usage Report",
					"action": "Submit Usage Report",
					"description": "Submit request for new new messaging usage report. This endpoint will pull and aggregate messaging data in specified time period. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/reports/mdr_usage_reports"
						}
					}
				},
				{
					"name": "Get Usage Report Sync 1",
					"value": "Get Usage Report Sync 1",
					"action": "Get Usage Report Sync 1",
					"description": "Generate and fetch messaging usage report synchronously. This endpoint will both generate and fetch the messaging report over a specified time period. No polling is necessary but the response may take up to a couple of minutes. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/mdr_usage_reports/sync"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /reports/mdr_usage_reports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Usage Reports"
					],
					"operation": [
						"Get Usage Reports"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "page%5Bnumber%5D",
			"description": "Page number",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page[number]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Usage Reports"
					],
					"operation": [
						"Get Usage Reports"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page%5Bsize%5D",
			"description": "Size of the page",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page[size]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Usage Reports"
					],
					"operation": [
						"Get Usage Reports"
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
						"MDR Usage Reports"
					],
					"operation": [
						"Get Usage Reports"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/mdr_usage_reports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Usage Reports"
					],
					"operation": [
						"Submit Usage Report"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/mdr_usage_reports<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Usage Reports"
					],
					"operation": [
						"Submit Usage Report"
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
						"MDR Usage Reports"
					],
					"operation": [
						"Submit Usage Report"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/mdr_usage_reports/sync",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Usage Reports"
					],
					"operation": [
						"Get Usage Report Sync 1"
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
						"MDR Usage Reports"
					],
					"operation": [
						"Get Usage Report Sync 1"
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
						"MDR Usage Reports"
					],
					"operation": [
						"Get Usage Report Sync 1"
					]
				}
			}
		},
		{
			"displayName": "Aggregation Type",
			"name": "aggregation_type",
			"required": true,
			"default": "profile",
			"type": "options",
			"options": [
				{
					"name": "NO AGGREGATION",
					"value": "NO_AGGREGATION"
				},
				{
					"name": "PROFILE",
					"value": "PROFILE"
				},
				{
					"name": "TAGS",
					"value": "TAGS"
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
						"MDR Usage Reports"
					],
					"operation": [
						"Get Usage Report Sync 1"
					]
				}
			}
		},
		{
			"displayName": "Profiles",
			"name": "profiles",
			"default": "\"My profile\"",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "profiles",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Usage Reports"
					],
					"operation": [
						"Get Usage Report Sync 1"
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
						"MDR Usage Reports"
					],
					"operation": [
						"Get Usage Report Sync 1"
					]
				}
			}
		},
];
