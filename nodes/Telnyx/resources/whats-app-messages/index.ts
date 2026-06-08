import type { INodeProperties } from 'n8n-workflow';

export const whatsAppMessagesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Messages"
					]
				}
			},
			"options": [
				{
					"name": "Send Message",
					"value": "Send Message",
					"action": "Send Message",
					"description": "Send text messages, media/documents, and message templates to your customers.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/whatsapp_messages"
						}
					}
				},
				{
					"name": "Mark Message As Read",
					"value": "Mark Message As Read",
					"action": "Mark Message As Read",
					"description": "Mark a message as read.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/whatsapp_messages/{{$parameter[\"message_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /whatsapp_messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Messages"
					],
					"operation": [
						"Send Message"
					]
				}
			}
		},
		{
			"displayName": "Audio",
			"name": "audio",
			"type": "json",
			"default": "{\n  \"id\": \"f043afd0-f0ae-4b9c-ab3d-696fb4c8cd68\"\n}",
			"description": "The media object containing audio details.",
			"routing": {
				"send": {
					"property": "audio",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Messages"
					],
					"operation": [
						"Send Message"
					]
				}
			}
		},
		{
			"displayName": "Contacts",
			"name": "contacts",
			"type": "json",
			"default": "[\n  {\n    \"addresses\": [\n      {\n        \"city\": \"Menlo Park\",\n        \"country\": \"United States\",\n        \"country_code\": \"us\",\n        \"state\": \"CA\",\n        \"street\": \"1 Hacker Way\",\n        \"type\": \"HOME\",\n        \"zip\": \"94025\"\n      },\n      {\n        \"city\": \"Menlo Park\",\n        \"country\": \"United States\",\n        \"country_code\": \"us\",\n        \"state\": \"CA\",\n        \"street\": \"200 Jefferson Dr\",\n        \"type\": \"WORK\",\n        \"zip\": \"94025\"\n      }\n    ],\n    \"birthday\": \"2012-08-18\",\n    \"emails\": [\n      {\n        \"email\": \"test@fb.com\",\n        \"type\": \"WORK\"\n      },\n      {\n        \"email\": \"test@whatsapp.com\",\n        \"type\": \"WORK\"\n      }\n    ],\n    \"name\": {\n      \"first_name\": \"John\",\n      \"formatted_name\": \"John Smith\",\n      \"last_name\": \"Smith\"\n    },\n    \"org\": {\n      \"company\": \"WhatsApp\",\n      \"department\": \"Design\",\n      \"title\": \"Manager\"\n    },\n    \"phones\": [\n      {\n        \"phone\": \"+1 (940) 555-1234\",\n        \"type\": \"HOME\"\n      },\n      {\n        \"id\": \"16505551234\",\n        \"phone\": \"+1 (650) 555-1234\",\n        \"type\": \"WORK\"\n      }\n    ],\n    \"urls\": [\n      {\n        \"type\": \"WORK\",\n        \"url\": \"https://www.facebook.com\"\n      }\n    ]\n  }\n]",
			"description": "",
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
						"Whats App Messages"
					],
					"operation": [
						"Send Message"
					]
				}
			}
		},
		{
			"displayName": "Document",
			"name": "document",
			"type": "json",
			"default": "{\n  \"caption\": \"Very important document\",\n  \"filename\": \"example.pdf\",\n  \"id\": \"f043afd0-f0ae-4b9c-ab3d-696fb4c8cd68\"\n}",
			"description": "The media object containing a document reference",
			"routing": {
				"send": {
					"property": "document",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Messages"
					],
					"operation": [
						"Send Message"
					]
				}
			}
		},
		{
			"displayName": "Hsm",
			"name": "hsm",
			"type": "json",
			"default": "{\n  \"element_name\": \"hello_world\",\n  \"language\": {\n    \"code\": \"en\",\n    \"policy\": \"deterministic\"\n  },\n  \"localizable_params\": [\n    {\n      \"default\": \"1234\"\n    }\n  ],\n  \"namespace\": \"business_a_namespace\"\n}",
			"description": "The containing element for the message content — Indicates that the message is highly structured. Parameters contained within provide the structure.",
			"routing": {
				"send": {
					"property": "hsm",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Messages"
					],
					"operation": [
						"Send Message"
					]
				}
			}
		},
		{
			"displayName": "Image",
			"name": "image",
			"type": "json",
			"default": "{\n  \"caption\": \"My cool media!\",\n  \"id\": \"f043afd0-f0ae-4b9c-ab3d-696fb4c8cd68\"\n}",
			"description": "The media object containing an image",
			"routing": {
				"send": {
					"property": "image",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Messages"
					],
					"operation": [
						"Send Message"
					]
				}
			}
		},
		{
			"displayName": "Location",
			"name": "location",
			"type": "json",
			"default": "{\n  \"address\": \"<Location's Address>\",\n  \"latitude\": \"<Latitude>\",\n  \"longitude\": \"<Longitude>\",\n  \"name\": \"<Location Name>\"\n}",
			"routing": {
				"send": {
					"property": "location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Messages"
					],
					"operation": [
						"Send Message"
					]
				}
			}
		},
		{
			"displayName": "Preview Url",
			"name": "preview_url",
			"type": "boolean",
			"default": true,
			"description": "Specifying preview_url in the request is optional when not including a URL in your message.\nTo include a URL preview, set preview_url to true in the message body and make sure the URL begins with http:// or https://.",
			"routing": {
				"send": {
					"property": "preview_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Messages"
					],
					"operation": [
						"Send Message"
					]
				}
			}
		},
		{
			"displayName": "Template",
			"name": "template",
			"type": "json",
			"default": "{\n  \"components\": [\n    {\n      \"parameters\": [\n        {\n          \"currency\": {\n            \"amount_1000\": 100990,\n            \"currency_code\": \"USD\"\n          },\n          \"date_time\": {\n            \"component\": {\n              \"day_of_month\": 25,\n              \"day_of_week\": 5,\n              \"hour\": 15,\n              \"minute\": 33,\n              \"month\": 2,\n              \"year\": 1977\n            }\n          },\n          \"document\": {\n            \"caption\": \"Very important document\",\n            \"filename\": \"example.pdf\",\n            \"id\": \"f043afd0-f0ae-4b9c-ab3d-696fb4c8cd68\"\n          },\n          \"image\": {\n            \"caption\": \"My cool media!\",\n            \"id\": \"f043afd0-f0ae-4b9c-ab3d-696fb4c8cd68\"\n          },\n          \"video\": {\n            \"caption\": \"My cool media!\",\n            \"id\": \"f043afd0-f0ae-4b9c-ab3d-696fb4c8cd68\"\n          }\n        }\n      ]\n    }\n  ],\n  \"language\": {\n    \"code\": \"en\",\n    \"policy\": \"deterministic\"\n  }\n}",
			"routing": {
				"send": {
					"property": "template",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Messages"
					],
					"operation": [
						"Send Message"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "json",
			"default": "{\n  \"body\": \"<Message Text>\"\n}",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Messages"
					],
					"operation": [
						"Send Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "To",
			"name": "to",
			"type": "string",
			"default": "",
			"description": "The WhatsApp ID (phone number) returned from contacts endpoint.",
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
						"Whats App Messages"
					],
					"operation": [
						"Send Message"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "text",
			"description": "type of the message",
			"options": [
				{
					"name": "Audio",
					"value": "audio"
				},
				{
					"name": "Contacts",
					"value": "contacts"
				},
				{
					"name": "Document",
					"value": "document"
				},
				{
					"name": "Hsm",
					"value": "hsm"
				},
				{
					"name": "Image",
					"value": "image"
				},
				{
					"name": "Location",
					"value": "location"
				},
				{
					"name": "Template",
					"value": "template"
				},
				{
					"name": "Text",
					"value": "text"
				},
				{
					"name": "Video",
					"value": "video"
				},
				{
					"name": "Voice",
					"value": "voice"
				},
				{
					"name": "Unknown",
					"value": "unknown"
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
						"Whats App Messages"
					],
					"operation": [
						"Send Message"
					]
				}
			}
		},
		{
			"displayName": "Video",
			"name": "video",
			"type": "json",
			"default": "{\n  \"caption\": \"My cool media!\",\n  \"id\": \"f043afd0-f0ae-4b9c-ab3d-696fb4c8cd68\"\n}",
			"description": "The media object containing a video",
			"routing": {
				"send": {
					"property": "video",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Messages"
					],
					"operation": [
						"Send Message"
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
						"Whats App Messages"
					],
					"operation": [
						"Send Message"
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
						"Whats App Messages"
					],
					"operation": [
						"Send Message"
					]
				}
			}
		},
		{
			"displayName": "PATCH /whatsapp_messages/{message_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Messages"
					],
					"operation": [
						"Mark Message As Read"
					]
				}
			}
		},
		{
			"displayName": "Message Id",
			"name": "message_id",
			"required": true,
			"description": "Message ID from Webhook",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Messages"
					],
					"operation": [
						"Mark Message As Read"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Status",
			"name": "status",
			"type": "string",
			"default": "read",
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Whats App Messages"
					],
					"operation": [
						"Mark Message As Read"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Whatsapp User Id",
			"name": "whatsapp_user_id",
			"type": "string",
			"default": "15125551212",
			"description": "The user's WhatsApp ID.",
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
						"Whats App Messages"
					],
					"operation": [
						"Mark Message As Read"
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
						"Whats App Messages"
					],
					"operation": [
						"Mark Message As Read"
					]
				}
			}
		},
];
