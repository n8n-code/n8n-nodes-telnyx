import type { INodeProperties } from 'n8n-workflow';

export const billingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Billing"
					]
				}
			},
			"options": [
				{
					"name": "Get User Balance",
					"value": "Get User Balance",
					"action": "Retrieve user balance details",
					"description": "Retrieve user balance details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/balance"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /balance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Billing"
					],
					"operation": [
						"Get User Balance"
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
						"Billing"
					],
					"operation": [
						"Get User Balance"
					]
				}
			}
		},
];
