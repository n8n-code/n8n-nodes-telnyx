import type { INodeProperties } from 'n8n-workflow';

export const whatsAppContactsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Contacts"
					]
				}
			},
			"options": [
				{
					"name": "Check Contact",
					"value": "Check Contact",
					"action": "Check Contact",
					"description": "Verify that a phone number belongs to a valid WhatsApp account. You must ensure that the status is valid before you can message a user, and you'll get their WhatsApp ID to use for messaging.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/whatsapp_contacts"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /whatsapp_contacts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Contacts"
					],
					"operation": [
						"Check Contact"
					]
				}
			}
		},
		{
			"displayName": "Blocking",
			"name": "blocking",
			"type": "options",
			"default": "no_wait",
			"description": "Blocking determines whether the request should wait for the processing to complete (synchronous) or not (asynchronous).",
			"options": [
				{
					"name": "No Wait",
					"value": "no_wait"
				},
				{
					"name": "Wait",
					"value": "wait"
				}
			],
			"routing": {
				"send": {
					"property": "blocking",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Contacts"
					],
					"operation": [
						"Check Contact"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Contacts",
			"name": "contacts",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Array of contact phone numbers. The numbers can be in any standard telephone number format.",
			"routing": {
				"send": {
					"property": "contacts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Contacts"
					],
					"operation": [
						"Check Contact"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Whatsapp User Id",
			"name": "whatsapp_user_id",
			"type": "string",
			"default": "",
			"description": "The sender's WhatsApp ID.",
			"routing": {
				"send": {
					"property": "whatsapp_user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Contacts"
					],
					"operation": [
						"Check Contact"
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
						"Whats App Contacts"
					],
					"operation": [
						"Check Contact"
					]
				}
			}
		},
];
