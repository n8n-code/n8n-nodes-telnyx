import type { INodeProperties } from 'n8n-workflow';

export const detailRecordsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Detail Records"
					]
				}
			},
			"options": [
				{
					"name": "Detail Records Search",
					"value": "Detail Records Search",
					"action": "Search detail records",
					"description": "Search for any detail record across the Telnyx Platform",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/detail_records"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /detail_records",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Detail Records"
					],
					"operation": [
						"Detail Records Search"
					]
				}
			}
		},
		{
			"displayName": "Filter Record Type",
			"name": "filter%5Brecord_type%5D",
			"required": true,
			"description": "Filter by the given record type",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[record_type]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Detail Records"
					],
					"operation": [
						"Detail Records Search"
					]
				}
			}
		},
		{
			"displayName": "Filter Date Range",
			"name": "filter%5Bdate_range%5D",
			"description": "Filter by the given user-friendly date range",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[date_range]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Detail Records"
					],
					"operation": [
						"Detail Records Search"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"description": "Filter records",
			"default": "{}",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Detail Records"
					],
					"operation": [
						"Detail Records Search"
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
						"Detail Records"
					],
					"operation": [
						"Detail Records Search"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page%5Bsize%5D",
			"description": "Page size",
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
						"Detail Records"
					],
					"operation": [
						"Detail Records Search"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Specifies the sort order for results",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Detail Records"
					],
					"operation": [
						"Detail Records Search"
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
						"Detail Records"
					],
					"operation": [
						"Detail Records Search"
					]
				}
			}
		},
];
