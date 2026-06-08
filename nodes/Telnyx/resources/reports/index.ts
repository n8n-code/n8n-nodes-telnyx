import type { INodeProperties } from 'n8n-workflow';

export const reportsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					]
				}
			},
			"options": [
				{
					"name": "Create Ledger Billing Group Report",
					"value": "Create Ledger Billing Group Report",
					"action": "Create a ledger billing group report",
					"description": "Create a ledger billing group report",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/ledger_billing_group_reports"
						}
					}
				},
				{
					"name": "Retrieve Ledger Billing Group Report",
					"value": "Retrieve Ledger Billing Group Report",
					"action": "Retrieve a ledger billing group report",
					"description": "Retrieve a ledger billing group report",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ledger_billing_group_reports/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /ledger_billing_group_reports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					],
					"operation": [
						"Create Ledger Billing Group Report"
					]
				}
			}
		},
		{
			"displayName": "Month",
			"name": "month",
			"type": "number",
			"default": 10,
			"description": "Month of the ledger billing group report",
			"routing": {
				"send": {
					"property": "month",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					],
					"operation": [
						"Create Ledger Billing Group Report"
					]
				}
			}
		},
		{
			"displayName": "Year",
			"name": "year",
			"type": "number",
			"default": 2019,
			"description": "Year of the ledger billing group report",
			"routing": {
				"send": {
					"property": "year",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					],
					"operation": [
						"Create Ledger Billing Group Report"
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
						"Reports"
					],
					"operation": [
						"Create Ledger Billing Group Report"
					]
				}
			}
		},
		{
			"displayName": "GET /ledger_billing_group_reports/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					],
					"operation": [
						"Retrieve Ledger Billing Group Report"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The id of the ledger billing group report",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports"
					],
					"operation": [
						"Retrieve Ledger Billing Group Report"
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
						"Reports"
					],
					"operation": [
						"Retrieve Ledger Billing Group Report"
					]
				}
			}
		},
];
