import type { INodeProperties } from 'n8n-workflow';

export const reportingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Reporting"
					]
				}
			},
			"options": [
				{
					"name": "Get Wdr Reports",
					"value": "Get Wdr Reports",
					"action": "Get all Wireless Detail Records (WDRs) Reports",
					"description": "Returns the WDR Reports that match the given parameters.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/wireless/detail_records_reports"
						}
					}
				},
				{
					"name": "Create Wdr Report",
					"value": "Create Wdr Report",
					"action": "Create a Wireless Detail Records (WDRs) Report",
					"description": "Asynchronously create a report containing Wireless Detail Records (WDRs) for the SIM cards that consumed wireless data in the given time period.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/wireless/detail_records_reports"
						}
					}
				},
				{
					"name": "Delete Wdr Report",
					"value": "Delete Wdr Report",
					"action": "Delete a Wireless Detail Record (WDR) Report",
					"description": "Deletes one specific WDR report",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/wireless/detail_records_reports/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Wdr Report",
					"value": "Get Wdr Report",
					"action": "Get a Wireless Detail Record (WDR) Report",
					"description": "Returns one specific WDR report",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/wireless/detail_records_reports/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /wireless/detail_records_reports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reporting"
					],
					"operation": [
						"Get Wdr Reports"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "page%5Bnumber%5D",
			"description": "The page number to load.",
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
						"Reporting"
					],
					"operation": [
						"Get Wdr Reports"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page%5Bsize%5D",
			"description": "The size of the page.",
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
						"Reporting"
					],
					"operation": [
						"Get Wdr Reports"
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
						"Reporting"
					],
					"operation": [
						"Get Wdr Reports"
					]
				}
			}
		},
		{
			"displayName": "POST /wireless/detail_records_reports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reporting"
					],
					"operation": [
						"Create Wdr Report"
					]
				}
			}
		},
		{
			"displayName": "End Time",
			"name": "end_time",
			"type": "string",
			"default": "2018-02-02T22:25:27.521Z",
			"description": "ISO 8601 formatted date-time indicating the end time.",
			"routing": {
				"send": {
					"property": "end_time",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reporting"
					],
					"operation": [
						"Create Wdr Report"
					]
				}
			}
		},
		{
			"displayName": "Start Time",
			"name": "start_time",
			"type": "string",
			"default": "2018-02-02T22:25:27.521Z",
			"description": "ISO 8601 formatted date-time indicating the start time.",
			"routing": {
				"send": {
					"property": "start_time",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reporting"
					],
					"operation": [
						"Create Wdr Report"
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
						"Reporting"
					],
					"operation": [
						"Create Wdr Report"
					]
				}
			}
		},
		{
			"displayName": "DELETE /wireless/detail_records_reports/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reporting"
					],
					"operation": [
						"Delete Wdr Report"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Identifies the resource.",
			"default": "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reporting"
					],
					"operation": [
						"Delete Wdr Report"
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
						"Reporting"
					],
					"operation": [
						"Delete Wdr Report"
					]
				}
			}
		},
		{
			"displayName": "GET /wireless/detail_records_reports/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reporting"
					],
					"operation": [
						"Get Wdr Report"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Identifies the resource.",
			"default": "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reporting"
					],
					"operation": [
						"Get Wdr Report"
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
						"Reporting"
					],
					"operation": [
						"Get Wdr Report"
					]
				}
			}
		},
];
