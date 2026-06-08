import type { INodeProperties } from 'n8n-workflow';

export const messagingUrlDomainsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging URL Domains"
					]
				}
			},
			"options": [
				{
					"name": "List Messaging Url Domains",
					"value": "List Messaging Url Domains",
					"action": "List messaging URL domains",
					"description": "List messaging URL domains",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/messaging_url_domains"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /messaging_url_domains",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging URL Domains"
					],
					"operation": [
						"List Messaging Url Domains"
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
						"Messaging URL Domains"
					],
					"operation": [
						"List Messaging Url Domains"
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
						"Messaging URL Domains"
					],
					"operation": [
						"List Messaging Url Domains"
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
						"Messaging URL Domains"
					],
					"operation": [
						"List Messaging Url Domains"
					]
				}
			}
		},
];
