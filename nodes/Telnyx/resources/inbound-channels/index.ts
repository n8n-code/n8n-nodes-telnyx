import type { INodeProperties } from 'n8n-workflow';

export const inboundChannelsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Inbound Channels"
					]
				}
			},
			"options": [
				{
					"name": "List Outbound Channels",
					"value": "List Outbound Channels",
					"action": "Retrieve your inbound channels",
					"description": "Returns the inbound channels for your account. Inbound channels allows you to use Channel Billing for calls to your Telnyx phone numbers. Please check the Telnyx Support Articles section for full information and examples of how to utilize Channel Billing.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/phone_numbers/inbound_channels"
						}
					}
				},
				{
					"name": "Update Outbound Channels",
					"value": "Update Outbound Channels",
					"action": "Update inbound channels",
					"description": "Update the inbound channels for the account",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/phone_numbers/inbound_channels"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /phone_numbers/inbound_channels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Inbound Channels"
					],
					"operation": [
						"List Outbound Channels"
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
						"Inbound Channels"
					],
					"operation": [
						"List Outbound Channels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /phone_numbers/inbound_channels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Inbound Channels"
					],
					"operation": [
						"Update Outbound Channels"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Channels",
			"name": "channels",
			"type": "number",
			"default": 7,
			"description": "The new number of concurrent channels for the account",
			"routing": {
				"send": {
					"property": "channels",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inbound Channels"
					],
					"operation": [
						"Update Outbound Channels"
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
						"Inbound Channels"
					],
					"operation": [
						"Update Outbound Channels"
					]
				}
			}
		},
];
