import type { INodeProperties } from 'n8n-workflow';

export const whatsAppUsersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Users"
					]
				}
			},
			"options": [
				{
					"name": "Get User",
					"value": "Get User",
					"action": "Get User",
					"description": "Retrieve WhatsApp user information.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/whatsapp_users/{{$parameter[\"whatsapp_user_id\"]}}"
						}
					}
				},
				{
					"name": "Update Whats App Webhook",
					"value": "Update Whats App Webhook",
					"action": "Update WhatsApp User",
					"description": "Update webhook URL used for a given WhatsApp user.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/whatsapp_users/{{$parameter[\"whatsapp_user_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /whatsapp_users/{whatsapp_user_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Users"
					],
					"operation": [
						"Get User"
					]
				}
			}
		},
		{
			"displayName": "Whatsapp User Id",
			"name": "whatsapp_user_id",
			"required": true,
			"description": "User's WhatsApp ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Users"
					],
					"operation": [
						"Get User"
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
						"Whats App Users"
					],
					"operation": [
						"Get User"
					]
				}
			}
		},
		{
			"displayName": "PATCH /whatsapp_users/{whatsapp_user_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Users"
					],
					"operation": [
						"Update Whats App Webhook"
					]
				}
			}
		},
		{
			"displayName": "Whatsapp User Id",
			"name": "whatsapp_user_id",
			"required": true,
			"description": "User's WhatsApp ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Users"
					],
					"operation": [
						"Update Whats App Webhook"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Webhook Url",
			"name": "webhook_url",
			"type": "string",
			"default": "https://mywebhook.com/example/endpoint",
			"description": "The desired URL to set for your WhatsApp webhook endpoint.",
			"routing": {
				"send": {
					"property": "webhook_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Users"
					],
					"operation": [
						"Update Whats App Webhook"
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
						"Whats App Users"
					],
					"operation": [
						"Update Whats App Webhook"
					]
				}
			}
		},
];
