import type { INodeProperties } from 'n8n-workflow';

export const mdrDetailReportsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Detail Reports"
					]
				}
			},
			"options": [
				{
					"name": "Get Cdr Requests",
					"value": "Get Cdr Requests",
					"action": "Get Cdr Requests",
					"description": "Fetch all previous requests for messaging detail reports. Messaging detail reports are reports for pulling all messaging records. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/batch_mdr_reports"
						}
					}
				},
				{
					"name": "Submit Mdr Request",
					"value": "Submit Mdr Request",
					"action": "Submit Mdr Request",
					"description": "Submit a request for new messaging detail report. Messaging detail report pulls all raw messaging data according to defined filters.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/reports/batch_mdr_reports"
						}
					}
				},
				{
					"name": "GET Reports Mdrs",
					"value": "GET Reports Mdrs",
					"action": "GET Reports Mdrs",
					"description": "Fetch all Mdr records ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/mdrs"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /reports/batch_mdr_reports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Detail Reports"
					],
					"operation": [
						"Get Cdr Requests"
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
						"MDR Detail Reports"
					],
					"operation": [
						"Get Cdr Requests"
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
						"MDR Detail Reports"
					],
					"operation": [
						"Get Cdr Requests"
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
						"MDR Detail Reports"
					],
					"operation": [
						"Get Cdr Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/batch_mdr_reports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Detail Reports"
					],
					"operation": [
						"Submit Mdr Request"
					]
				}
			}
		},
		{
			"displayName": "Connections",
			"name": "connections",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "connections",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Detail Reports"
					],
					"operation": [
						"Submit Mdr Request"
					]
				}
			}
		},
		{
			"displayName": "Directions",
			"name": "directions",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "directions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Detail Reports"
					],
					"operation": [
						"Submit Mdr Request"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "End Date",
			"name": "end_date",
			"type": "string",
			"default": "2020-07-01T00:00:00-06:00",
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
						"MDR Detail Reports"
					],
					"operation": [
						"Submit Mdr Request"
					]
				}
			}
		},
		{
			"displayName": "Filters",
			"name": "filters",
			"type": "json",
			"default": "[\n  {\n    \"billing_group\": \"adfaa016-f921-4b6c-97bb-e4c1dad231c5\",\n    \"cld\": \"+13129457420\",\n    \"cli\": \"+13129457420\",\n    \"tags_list\": \"tag1\"\n  }\n]",
			"routing": {
				"send": {
					"property": "filters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Detail Reports"
					],
					"operation": [
						"Submit Mdr Request"
					]
				}
			}
		},
		{
			"displayName": "Include Message Body",
			"name": "include_message_body",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "include_message_body",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Detail Reports"
					],
					"operation": [
						"Submit Mdr Request"
					]
				}
			}
		},
		{
			"displayName": "Profiles",
			"name": "profiles",
			"type": "string",
			"default": "My profile",
			"routing": {
				"send": {
					"property": "profiles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Detail Reports"
					],
					"operation": [
						"Submit Mdr Request"
					]
				}
			}
		},
		{
			"displayName": "Record Types",
			"name": "record_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "record_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Detail Reports"
					],
					"operation": [
						"Submit Mdr Request"
					]
				}
			}
		},
		{
			"displayName": "Report Name",
			"name": "report_name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "report_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Detail Reports"
					],
					"operation": [
						"Submit Mdr Request"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Start Date",
			"name": "start_date",
			"type": "string",
			"default": "2020-07-01T00:00:00-06:00",
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
						"MDR Detail Reports"
					],
					"operation": [
						"Submit Mdr Request"
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
						"MDR Detail Reports"
					],
					"operation": [
						"Submit Mdr Request"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/mdrs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Detail Reports"
					],
					"operation": [
						"GET Reports Mdrs"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "start_date",
			"description": "Pagination start date",
			"default": "",
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
						"MDR Detail Reports"
					],
					"operation": [
						"GET Reports Mdrs"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "end_date",
			"description": "Pagination end date",
			"default": "",
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
						"MDR Detail Reports"
					],
					"operation": [
						"GET Reports Mdrs"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"description": "Message uuid",
			"default": "e093fbe0-5bde-11eb-ae93-0242ac130002",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Detail Reports"
					],
					"operation": [
						"GET Reports Mdrs"
					]
				}
			}
		},
		{
			"displayName": "Direction",
			"name": "direction",
			"description": "Direction (inbound or outbound)",
			"default": "INBOUND",
			"type": "options",
			"options": [
				{
					"name": "INBOUND",
					"value": "INBOUND"
				},
				{
					"name": "OUTBOUND",
					"value": "OUTBOUND"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "direction",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Detail Reports"
					],
					"operation": [
						"GET Reports Mdrs"
					]
				}
			}
		},
		{
			"displayName": "Profile",
			"name": "profile",
			"description": "Name of the profile",
			"default": "My profile",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "profile",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Detail Reports"
					],
					"operation": [
						"GET Reports Mdrs"
					]
				}
			}
		},
		{
			"displayName": "Cld",
			"name": "cld",
			"description": "Destination number",
			"default": "+15551237654",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cld",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Detail Reports"
					],
					"operation": [
						"GET Reports Mdrs"
					]
				}
			}
		},
		{
			"displayName": "Cli",
			"name": "cli",
			"description": "Origination number",
			"default": "+15551237654",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cli",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Detail Reports"
					],
					"operation": [
						"GET Reports Mdrs"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "Message status",
			"default": "DELIVERED",
			"type": "options",
			"options": [
				{
					"name": "GW TIMEOUT",
					"value": "GW_TIMEOUT"
				},
				{
					"name": "DELIVERED",
					"value": "DELIVERED"
				},
				{
					"name": "DLR UNCONFIRMED",
					"value": "DLR_UNCONFIRMED"
				},
				{
					"name": "DLR TIMEOUT",
					"value": "DLR_TIMEOUT"
				},
				{
					"name": "RECEIVED",
					"value": "RECEIVED"
				},
				{
					"name": "GW REJECT",
					"value": "GW_REJECT"
				},
				{
					"name": "FAILED",
					"value": "FAILED"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Detail Reports"
					],
					"operation": [
						"GET Reports Mdrs"
					]
				}
			}
		},
		{
			"displayName": "Message Type",
			"name": "message_type",
			"description": "Type of message",
			"default": "SMS",
			"type": "options",
			"options": [
				{
					"name": "SMS",
					"value": "SMS"
				},
				{
					"name": "MMS",
					"value": "MMS"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "message_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Detail Reports"
					],
					"operation": [
						"GET Reports Mdrs"
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
						"MDR Detail Reports"
					],
					"operation": [
						"GET Reports Mdrs"
					]
				}
			}
		},
];
