import type { INodeProperties } from 'n8n-workflow';

export const roomsClientTokensDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Rooms Client Tokens"
					]
				}
			},
			"options": [
				{
					"name": "Create Room Client Token",
					"value": "Create Room Client Token",
					"action": "Create Client Token to join a room.",
					"description": "Synchronously create an Client Token to join a Room. Client Token is necessary to join a Telnyx Room. Client Token will expire after `token_ttl_secs`, a Refresh Token is also provided to refresh a Client Token, the Refresh Token expires after `refresh_token_ttl_secs`.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/rooms/{{$parameter[\"room_id\"]}}/actions/generate_join_client_token"
						}
					}
				},
				{
					"name": "Refresh Room Client Token",
					"value": "Refresh Room Client Token",
					"action": "Refresh Client Token to join a room.",
					"description": "Synchronously refresh an Client Token to join a Room. Client Token is necessary to join a Telnyx Room. Client Token will expire after `token_ttl_secs`.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/rooms/{{$parameter[\"room_id\"]}}/actions/refresh_client_token"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /rooms/{room_id}/actions/generate_join_client_token",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rooms Client Tokens"
					],
					"operation": [
						"Create Room Client Token"
					]
				}
			}
		},
		{
			"displayName": "Room Id",
			"name": "room_id",
			"required": true,
			"description": "The unique identifier of a room.",
			"default": "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Rooms Client Tokens"
					],
					"operation": [
						"Create Room Client Token"
					]
				}
			}
		},
		{
			"displayName": "Refresh Token Ttl Secs",
			"name": "refresh_token_ttl_secs",
			"type": "number",
			"default": 3600,
			"description": "The time to live in seconds of the Refresh Token, after that time the Refresh Token is invalid and can't be used to refresh Client Token.",
			"routing": {
				"send": {
					"property": "refresh_token_ttl_secs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rooms Client Tokens"
					],
					"operation": [
						"Create Room Client Token"
					]
				}
			}
		},
		{
			"displayName": "Token Ttl Secs",
			"name": "token_ttl_secs",
			"type": "number",
			"default": 600,
			"description": "The time to live in seconds of the Client Token, after that time the Client Token is invalid and can't be used to join a Room.",
			"routing": {
				"send": {
					"property": "token_ttl_secs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rooms Client Tokens"
					],
					"operation": [
						"Create Room Client Token"
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
						"Rooms Client Tokens"
					],
					"operation": [
						"Create Room Client Token"
					]
				}
			}
		},
		{
			"displayName": "POST /rooms/{room_id}/actions/refresh_client_token",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rooms Client Tokens"
					],
					"operation": [
						"Refresh Room Client Token"
					]
				}
			}
		},
		{
			"displayName": "Room Id",
			"name": "room_id",
			"required": true,
			"description": "The unique identifier of a room.",
			"default": "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Rooms Client Tokens"
					],
					"operation": [
						"Refresh Room Client Token"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Refresh Token",
			"name": "refresh_token",
			"type": "string",
			"default": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0ZWxueXhfdGVsZXBob255IiwiZXhwIjoxNTkwMDEwMTQzLCJpYXQiOjE1ODc1OTA5NDMsImlzcyI6InRlbG55eF90ZWxlcGhvbnkiLCJqdGkiOiJiOGM3NDgzNy1kODllLTRhNjUtOWNmMi0zNGM3YTZmYTYwYzgiLCJuYmYiOjE1ODc1OTA5NDIsInN1YiI6IjVjN2FjN2QwLWRiNjUtNGYxMS05OGUxLWVlYzBkMWQ1YzZhZSIsInRlbF90b2tlbiI6InJqX1pra1pVT1pNeFpPZk9tTHBFVUIzc2lVN3U2UmpaRmVNOXMtZ2JfeENSNTZXRktGQUppTXlGMlQ2Q0JSbWxoX1N5MGlfbGZ5VDlBSThzRWlmOE1USUlzenl6U2xfYURuRzQ4YU81MHlhSEd1UlNZYlViU1ltOVdJaVEwZz09IiwidHlwIjoiYWNjZXNzIn0.gNEwzTow5MLLPLQENytca7pUN79PmPj6FyqZWW06ZeEmesxYpwKh0xRtA0TzLh6CDYIRHrI8seofOO0YFGDhpQ",
			"routing": {
				"send": {
					"property": "refresh_token",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rooms Client Tokens"
					],
					"operation": [
						"Refresh Room Client Token"
					]
				}
			}
		},
		{
			"displayName": "Token Ttl Secs",
			"name": "token_ttl_secs",
			"type": "number",
			"default": 600,
			"description": "The time to live in seconds of the Client Token, after that time the Client Token is invalid and can't be used to join a Room.",
			"routing": {
				"send": {
					"property": "token_ttl_secs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rooms Client Tokens"
					],
					"operation": [
						"Refresh Room Client Token"
					]
				}
			}
		},
];
