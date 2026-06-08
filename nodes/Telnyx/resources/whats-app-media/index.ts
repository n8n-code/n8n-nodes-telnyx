import type { INodeProperties } from 'n8n-workflow';

export const whatsAppMediaDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Media"
					]
				}
			},
			"options": [
				{
					"name": "Upload Media",
					"value": "Upload Media",
					"action": "Upload Media",
					"description": "Upload media. Accepted media types include image/jpeg, image/png, video/mp4, video/3gpp, audio/aac, audio/ogg.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/whatsapp_media"
						}
					}
				},
				{
					"name": "DELETE Whatsapp Media",
					"value": "DELETE Whatsapp Media",
					"action": "Delete Media",
					"description": "Delete uploaded media.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/whatsapp_media/{{$parameter[\"whatsapp_user_id\"]}}/{{$parameter[\"media_id\"]}}"
						}
					}
				},
				{
					"name": "GET Whatsapp Media",
					"value": "GET Whatsapp Media",
					"action": "Download Media",
					"description": "Retrieve uploaded media. Media is typically available for 30 days after uploading.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/whatsapp_media/{{$parameter[\"whatsapp_user_id\"]}}/{{$parameter[\"media_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /whatsapp_media",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Media"
					],
					"operation": [
						"Upload Media"
					]
				}
			}
		},
		{
			"displayName": "POST /whatsapp_media<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Media"
					],
					"operation": [
						"Upload Media"
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
						"Whats App Media"
					],
					"operation": [
						"Upload Media"
					]
				}
			}
		},
		{
			"displayName": "DELETE /whatsapp_media/{whatsapp_user_id}/{media_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Media"
					],
					"operation": [
						"DELETE Whatsapp Media"
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
						"Whats App Media"
					],
					"operation": [
						"DELETE Whatsapp Media"
					]
				}
			}
		},
		{
			"displayName": "Media Id",
			"name": "media_id",
			"required": true,
			"description": "WhatsApp's Media ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Media"
					],
					"operation": [
						"DELETE Whatsapp Media"
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
						"Whats App Media"
					],
					"operation": [
						"DELETE Whatsapp Media"
					]
				}
			}
		},
		{
			"displayName": "GET /whatsapp_media/{whatsapp_user_id}/{media_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Media"
					],
					"operation": [
						"GET Whatsapp Media"
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
						"Whats App Media"
					],
					"operation": [
						"GET Whatsapp Media"
					]
				}
			}
		},
		{
			"displayName": "Media Id",
			"name": "media_id",
			"required": true,
			"description": "WhatsApp's Media ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Media"
					],
					"operation": [
						"GET Whatsapp Media"
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
						"Whats App Media"
					],
					"operation": [
						"GET Whatsapp Media"
					]
				}
			}
		},
];
