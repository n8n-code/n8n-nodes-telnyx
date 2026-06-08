import type { INodeProperties } from 'n8n-workflow';

export const accessTokensDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Access Tokens"
					]
				}
			},
			"options": [
				{
					"name": "Create Telephony Credential Token",
					"value": "Create Telephony Credential Token",
					"action": "Create an Access Token.",
					"description": "Create an Access Token (JWT) for the credential.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/telephony_credentials/{{$parameter[\"id\"]}}/token"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /telephony_credentials/{id}/token",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Tokens"
					],
					"operation": [
						"Create Telephony Credential Token"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Identifies the resource.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Tokens"
					],
					"operation": [
						"Create Telephony Credential Token"
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
						"Access Tokens"
					],
					"operation": [
						"Create Telephony Credential Token"
					]
				}
			}
		},
];
