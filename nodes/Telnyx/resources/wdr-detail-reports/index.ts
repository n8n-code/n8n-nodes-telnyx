import type { INodeProperties } from 'n8n-workflow';

export const wdrDetailReportsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"WDR Detail Reports"
					]
				}
			},
			"options": [
				{
					"name": "Get Paginated Wdrs",
					"value": "Get Paginated Wdrs",
					"action": "Get Paginated Wdrs",
					"description": "Fetch all Wdr records ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/wdrs"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /reports/wdrs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"WDR Detail Reports"
					],
					"operation": [
						"Get Paginated Wdrs"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "start_date",
			"description": "Start date",
			"default": "2021-05-01T00:00:00Z",
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
						"WDR Detail Reports"
					],
					"operation": [
						"Get Paginated Wdrs"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "end_date",
			"description": "End date",
			"default": "2021-06-01T00:00:00Z",
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
						"WDR Detail Reports"
					],
					"operation": [
						"Get Paginated Wdrs"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"description": "WDR uuid",
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
						"WDR Detail Reports"
					],
					"operation": [
						"Get Paginated Wdrs"
					]
				}
			}
		},
		{
			"displayName": "Mcc",
			"name": "mcc",
			"description": "Mobile country code",
			"default": "204",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mcc",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"WDR Detail Reports"
					],
					"operation": [
						"Get Paginated Wdrs"
					]
				}
			}
		},
		{
			"displayName": "Mnc",
			"name": "mnc",
			"description": "Mobile network code",
			"default": "01",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mnc",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"WDR Detail Reports"
					],
					"operation": [
						"Get Paginated Wdrs"
					]
				}
			}
		},
		{
			"displayName": "Imsi",
			"name": "imsi",
			"description": "International mobile subscriber identity",
			"default": "123456",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "imsi",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"WDR Detail Reports"
					],
					"operation": [
						"Get Paginated Wdrs"
					]
				}
			}
		},
		{
			"displayName": "Sim Group Name",
			"name": "sim_group_name",
			"description": "Sim group name",
			"default": "sim name",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sim_group_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"WDR Detail Reports"
					],
					"operation": [
						"Get Paginated Wdrs"
					]
				}
			}
		},
		{
			"displayName": "Sim Group Id",
			"name": "sim_group_id",
			"description": "Sim group unique identifier",
			"default": "f05a189f-7c46-4531-ac56-1460dc465a42",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sim_group_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"WDR Detail Reports"
					],
					"operation": [
						"Get Paginated Wdrs"
					]
				}
			}
		},
		{
			"displayName": "Sim Card Id",
			"name": "sim_card_id",
			"description": "Sim card unique identifier",
			"default": "877f80a6-e5b2-4687-9a04-88076265720f",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sim_card_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"WDR Detail Reports"
					],
					"operation": [
						"Get Paginated Wdrs"
					]
				}
			}
		},
		{
			"displayName": "Phone Number",
			"name": "phone_number",
			"description": "Phone number",
			"default": "+12345678910",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "phone_number",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"WDR Detail Reports"
					],
					"operation": [
						"Get Paginated Wdrs"
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
						"WDR Detail Reports"
					],
					"operation": [
						"Get Paginated Wdrs"
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
						"WDR Detail Reports"
					],
					"operation": [
						"Get Paginated Wdrs"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Field used to order the data. If no field is specified, default value is 'created_at'",
			"default": "\"created_at\"",
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
						"WDR Detail Reports"
					],
					"operation": [
						"Get Paginated Wdrs"
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
						"WDR Detail Reports"
					],
					"operation": [
						"Get Paginated Wdrs"
					]
				}
			}
		},
];
