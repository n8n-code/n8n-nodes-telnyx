import type { INodeProperties } from 'n8n-workflow';

export const whatsAppDetailReportsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Detail Reports"
					]
				}
			},
			"options": [
				{
					"name": "Get Requests",
					"value": "Get Requests",
					"action": "Get Requests",
					"description": "Fetch all previous requests for WhatsApp detail reports. WhatsApp detail reports are reports for pulling all WhatsApp records. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/whatsapp_detail_record_reports"
						}
					}
				},
				{
					"name": "Submit Request",
					"value": "Submit Request",
					"action": "Submit Request",
					"description": "Submit a request for new WhatsApp detail report. WhatsApp detail report pulls all raw WhatsApp data according to defined filters.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/whatsapp_detail_record_reports"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /whatsapp_detail_record_reports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Detail Reports"
					],
					"operation": [
						"Get Requests"
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
						"Whats App Detail Reports"
					],
					"operation": [
						"Get Requests"
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
						"Whats App Detail Reports"
					],
					"operation": [
						"Get Requests"
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
						"Whats App Detail Reports"
					],
					"operation": [
						"Get Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /whatsapp_detail_record_reports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Detail Reports"
					],
					"operation": [
						"Submit Request"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "End Date",
			"name": "end_date",
			"type": "string",
			"default": "2021-05-01T00:00:00-06:00",
			"routing": {
				"send": {
					"property": "end_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Detail Reports"
					],
					"operation": [
						"Submit Request"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Start Date",
			"name": "start_date",
			"type": "string",
			"default": "2021-05-01T00:00:00-06:00",
			"routing": {
				"send": {
					"property": "start_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Detail Reports"
					],
					"operation": [
						"Submit Request"
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
						"Whats App Detail Reports"
					],
					"operation": [
						"Submit Request"
					]
				}
			}
		},
];
