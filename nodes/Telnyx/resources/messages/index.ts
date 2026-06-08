import type { INodeProperties } from 'n8n-workflow';

export const messagesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					]
				}
			},
			"options": [
				{
					"name": "Create Message",
					"value": "Create Message",
					"action": "Send a message",
					"description": "Send a message with a Phone Number, Alphanumeric Sender ID, Short Code or Number Pool.\n\nThis endpoint allows you to send a message with any messaging resource.\nCurrent messaging resources include: long-code, short-code, number-pool, and\nalphanumeric-sender-id.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/messages"
						}
					}
				},
				{
					"name": "Create Long Code Message",
					"value": "Create Long Code Message",
					"action": "Send a long code message",
					"description": "Send a long code message",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/messages/long_code"
						}
					}
				},
				{
					"name": "Create Number Pool Message",
					"value": "Create Number Pool Message",
					"action": "Send a message using number pool",
					"description": "Send a message using number pool",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/messages/number_pool"
						}
					}
				},
				{
					"name": "Create Short Code Message",
					"value": "Create Short Code Message",
					"action": "Send a short code message",
					"description": "Send a short code message",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/messages/short_code"
						}
					}
				},
				{
					"name": "Retrieve Message",
					"value": "Retrieve Message",
					"action": "Retrieve a message",
					"description": "Note: This API endpoint can only retrieve messages that are no older than 10 days since their creation. If you require messages older than this, please generate an [MDR report.](https://developers.telnyx.com/docs/api/v1/reports/MDR-Reports)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/messages/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Message"
					]
				}
			}
		},
		{
			"displayName": "Auto Detect",
			"name": "auto_detect",
			"type": "boolean",
			"default": false,
			"description": "Automatically detect if an SMS message is unusually long and exceeds a recommended limit of message parts.",
			"routing": {
				"send": {
					"property": "auto_detect",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Message"
					]
				}
			}
		},
		{
			"displayName": "From",
			"name": "from",
			"type": "string",
			"default": "",
			"description": "Sending address (+E.164 formatted phone number, alphanumeric sender ID, or short code).\n\n**Required if sending with a phone number, short code, or alphanumeric sender ID.**\n",
			"routing": {
				"send": {
					"property": "from",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Message"
					]
				}
			}
		},
		{
			"displayName": "Media Urls",
			"name": "media_urls",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of media URLs. The total media size must be less than 1 MB.\n\n**Required for MMS**",
			"routing": {
				"send": {
					"property": "media_urls",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Message"
					]
				}
			}
		},
		{
			"displayName": "Messaging Profile Id",
			"name": "messaging_profile_id",
			"type": "string",
			"default": "",
			"description": "Unique identifier for a messaging profile.\n\n**Required if sending via number pool or with an alphanumeric sender ID.**\n",
			"routing": {
				"send": {
					"property": "messaging_profile_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Message"
					]
				}
			}
		},
		{
			"displayName": "Subject",
			"name": "subject",
			"type": "string",
			"default": "",
			"description": "Subject of multimedia message",
			"routing": {
				"send": {
					"property": "subject",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Message"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "string",
			"default": "",
			"description": "Message body (i.e., content) as a non-empty string.\n\n**Required for SMS**",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "To",
			"name": "to",
			"type": "string",
			"default": "+E.164",
			"description": "Receiving address (+E.164 formatted phone number or short code).",
			"routing": {
				"send": {
					"property": "to",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Message"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "SMS",
			"description": "The protocol for sending the message, either SMS or MMS.",
			"options": [
				{
					"name": "SMS",
					"value": "SMS"
				},
				{
					"name": "MMS",
					"value": "MMS"
				}
			],
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Message"
					]
				}
			}
		},
		{
			"displayName": "Use Profile Webhooks",
			"name": "use_profile_webhooks",
			"type": "boolean",
			"default": true,
			"description": "If the profile this number is associated with has webhooks, use them for delivery notifications. If webhooks are also specified on the message itself, they will be attempted first, then those on the profile.",
			"routing": {
				"send": {
					"property": "use_profile_webhooks",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Message"
					]
				}
			}
		},
		{
			"displayName": "Webhook Failover Url",
			"name": "webhook_failover_url",
			"type": "string",
			"default": "",
			"description": "The failover URL where webhooks related to this message will be sent if sending to the primary URL fails.",
			"routing": {
				"send": {
					"property": "webhook_failover_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Message"
					]
				}
			}
		},
		{
			"displayName": "Webhook Url",
			"name": "webhook_url",
			"type": "string",
			"default": "",
			"description": "The URL where webhooks related to this message will be sent.",
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
						"Messages"
					],
					"operation": [
						"Create Message"
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
						"Messages"
					],
					"operation": [
						"Create Message"
					]
				}
			}
		},
		{
			"displayName": "POST /messages/long_code",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Long Code Message"
					]
				}
			}
		},
		{
			"displayName": "Auto Detect",
			"name": "auto_detect",
			"type": "boolean",
			"default": false,
			"description": "Automatically detect if an SMS message is unusually long and exceeds a recommended limit of message parts.",
			"routing": {
				"send": {
					"property": "auto_detect",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Long Code Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "From",
			"name": "from",
			"type": "string",
			"default": "",
			"description": "Phone number, in +E.164 format, used to send the message.",
			"routing": {
				"send": {
					"property": "from",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Long Code Message"
					]
				}
			}
		},
		{
			"displayName": "Media Urls",
			"name": "media_urls",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of media URLs. The total media size must be less than 1 MB.\n\n**Required for MMS**",
			"routing": {
				"send": {
					"property": "media_urls",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Long Code Message"
					]
				}
			}
		},
		{
			"displayName": "Subject",
			"name": "subject",
			"type": "string",
			"default": "",
			"description": "Subject of multimedia message",
			"routing": {
				"send": {
					"property": "subject",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Long Code Message"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "string",
			"default": "",
			"description": "Message body (i.e., content) as a non-empty string.\n\n**Required for SMS**",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Long Code Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "To",
			"name": "to",
			"type": "string",
			"default": "+E.164",
			"description": "Receiving address (+E.164 formatted phone number or short code).",
			"routing": {
				"send": {
					"property": "to",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Long Code Message"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "SMS",
			"description": "The protocol for sending the message, either SMS or MMS.",
			"options": [
				{
					"name": "SMS",
					"value": "SMS"
				},
				{
					"name": "MMS",
					"value": "MMS"
				}
			],
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Long Code Message"
					]
				}
			}
		},
		{
			"displayName": "Use Profile Webhooks",
			"name": "use_profile_webhooks",
			"type": "boolean",
			"default": true,
			"description": "If the profile this number is associated with has webhooks, use them for delivery notifications. If webhooks are also specified on the message itself, they will be attempted first, then those on the profile.",
			"routing": {
				"send": {
					"property": "use_profile_webhooks",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Long Code Message"
					]
				}
			}
		},
		{
			"displayName": "Webhook Failover Url",
			"name": "webhook_failover_url",
			"type": "string",
			"default": "",
			"description": "The failover URL where webhooks related to this message will be sent if sending to the primary URL fails.",
			"routing": {
				"send": {
					"property": "webhook_failover_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Long Code Message"
					]
				}
			}
		},
		{
			"displayName": "Webhook Url",
			"name": "webhook_url",
			"type": "string",
			"default": "",
			"description": "The URL where webhooks related to this message will be sent.",
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
						"Messages"
					],
					"operation": [
						"Create Long Code Message"
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
						"Messages"
					],
					"operation": [
						"Create Long Code Message"
					]
				}
			}
		},
		{
			"displayName": "POST /messages/number_pool",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Number Pool Message"
					]
				}
			}
		},
		{
			"displayName": "Auto Detect",
			"name": "auto_detect",
			"type": "boolean",
			"default": false,
			"description": "Automatically detect if an SMS message is unusually long and exceeds a recommended limit of message parts.",
			"routing": {
				"send": {
					"property": "auto_detect",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Number Pool Message"
					]
				}
			}
		},
		{
			"displayName": "Media Urls",
			"name": "media_urls",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of media URLs. The total media size must be less than 1 MB.\n\n**Required for MMS**",
			"routing": {
				"send": {
					"property": "media_urls",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Number Pool Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Messaging Profile Id",
			"name": "messaging_profile_id",
			"type": "string",
			"default": "",
			"description": "Unique identifier for a messaging profile.",
			"routing": {
				"send": {
					"property": "messaging_profile_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Number Pool Message"
					]
				}
			}
		},
		{
			"displayName": "Subject",
			"name": "subject",
			"type": "string",
			"default": "",
			"description": "Subject of multimedia message",
			"routing": {
				"send": {
					"property": "subject",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Number Pool Message"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "string",
			"default": "",
			"description": "Message body (i.e., content) as a non-empty string.\n\n**Required for SMS**",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Number Pool Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "To",
			"name": "to",
			"type": "string",
			"default": "+E.164",
			"description": "Receiving address (+E.164 formatted phone number or short code).",
			"routing": {
				"send": {
					"property": "to",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Number Pool Message"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "SMS",
			"description": "The protocol for sending the message, either SMS or MMS.",
			"options": [
				{
					"name": "SMS",
					"value": "SMS"
				},
				{
					"name": "MMS",
					"value": "MMS"
				}
			],
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Number Pool Message"
					]
				}
			}
		},
		{
			"displayName": "Use Profile Webhooks",
			"name": "use_profile_webhooks",
			"type": "boolean",
			"default": true,
			"description": "If the profile this number is associated with has webhooks, use them for delivery notifications. If webhooks are also specified on the message itself, they will be attempted first, then those on the profile.",
			"routing": {
				"send": {
					"property": "use_profile_webhooks",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Number Pool Message"
					]
				}
			}
		},
		{
			"displayName": "Webhook Failover Url",
			"name": "webhook_failover_url",
			"type": "string",
			"default": "",
			"description": "The failover URL where webhooks related to this message will be sent if sending to the primary URL fails.",
			"routing": {
				"send": {
					"property": "webhook_failover_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Number Pool Message"
					]
				}
			}
		},
		{
			"displayName": "Webhook Url",
			"name": "webhook_url",
			"type": "string",
			"default": "",
			"description": "The URL where webhooks related to this message will be sent.",
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
						"Messages"
					],
					"operation": [
						"Create Number Pool Message"
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
						"Messages"
					],
					"operation": [
						"Create Number Pool Message"
					]
				}
			}
		},
		{
			"displayName": "POST /messages/short_code",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Short Code Message"
					]
				}
			}
		},
		{
			"displayName": "Auto Detect",
			"name": "auto_detect",
			"type": "boolean",
			"default": false,
			"description": "Automatically detect if an SMS message is unusually long and exceeds a recommended limit of message parts.",
			"routing": {
				"send": {
					"property": "auto_detect",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Short Code Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "From",
			"name": "from",
			"type": "string",
			"default": "",
			"description": "Phone number, in +E.164 format, used to send the message.",
			"routing": {
				"send": {
					"property": "from",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Short Code Message"
					]
				}
			}
		},
		{
			"displayName": "Media Urls",
			"name": "media_urls",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of media URLs. The total media size must be less than 1 MB.\n\n**Required for MMS**",
			"routing": {
				"send": {
					"property": "media_urls",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Short Code Message"
					]
				}
			}
		},
		{
			"displayName": "Subject",
			"name": "subject",
			"type": "string",
			"default": "",
			"description": "Subject of multimedia message",
			"routing": {
				"send": {
					"property": "subject",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Short Code Message"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "string",
			"default": "",
			"description": "Message body (i.e., content) as a non-empty string.\n\n**Required for SMS**",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Short Code Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "To",
			"name": "to",
			"type": "string",
			"default": "+E.164",
			"description": "Receiving address (+E.164 formatted phone number or short code).",
			"routing": {
				"send": {
					"property": "to",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Short Code Message"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "SMS",
			"description": "The protocol for sending the message, either SMS or MMS.",
			"options": [
				{
					"name": "SMS",
					"value": "SMS"
				},
				{
					"name": "MMS",
					"value": "MMS"
				}
			],
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Short Code Message"
					]
				}
			}
		},
		{
			"displayName": "Use Profile Webhooks",
			"name": "use_profile_webhooks",
			"type": "boolean",
			"default": true,
			"description": "If the profile this number is associated with has webhooks, use them for delivery notifications. If webhooks are also specified on the message itself, they will be attempted first, then those on the profile.",
			"routing": {
				"send": {
					"property": "use_profile_webhooks",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Short Code Message"
					]
				}
			}
		},
		{
			"displayName": "Webhook Failover Url",
			"name": "webhook_failover_url",
			"type": "string",
			"default": "",
			"description": "The failover URL where webhooks related to this message will be sent if sending to the primary URL fails.",
			"routing": {
				"send": {
					"property": "webhook_failover_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Create Short Code Message"
					]
				}
			}
		},
		{
			"displayName": "Webhook Url",
			"name": "webhook_url",
			"type": "string",
			"default": "",
			"description": "The URL where webhooks related to this message will be sent.",
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
						"Messages"
					],
					"operation": [
						"Create Short Code Message"
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
						"Messages"
					],
					"operation": [
						"Create Short Code Message"
					]
				}
			}
		},
		{
			"displayName": "GET /messages/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Retrieve Message"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The id of the message",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages"
					],
					"operation": [
						"Retrieve Message"
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
						"Messages"
					],
					"operation": [
						"Retrieve Message"
					]
				}
			}
		},
];
