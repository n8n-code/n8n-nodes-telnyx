import type { INodeProperties } from 'n8n-workflow';

export const mdrSearchBetaDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Search Beta"
					]
				}
			},
			"options": [
				{
					"name": "Get Paginated Mdrs",
					"value": "Get Paginated Mdrs",
					"action": "Fetch messaging detail records.",
					"description": "Fetch all Mdr records ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/message_detail_records"
						}
					}
				},
				{
					"name": "Get Mdr Message Body",
					"value": "Get Mdr Message Body",
					"action": "Fetch message body by id.",
					"description": "Fetch Mdr message body ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/message_detail_records/{{$parameter[\"id\"]}}/message_body"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /message_detail_records",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Search Beta"
					],
					"operation": [
						"Get Paginated Mdrs"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "start_date",
			"required": true,
			"description": "Start date",
			"default": "2020-07-01T00:00:00-06:00",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "start_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Search Beta"
					],
					"operation": [
						"Get Paginated Mdrs"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "end_date",
			"required": true,
			"description": "End date",
			"default": "2020-07-01T00:00:00-06:00",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "end_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Search Beta"
					],
					"operation": [
						"Get Paginated Mdrs"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"description": "Message uuid",
			"default": "e093fbe0-5bde-11eb-ae93-0242ac130002",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Search Beta"
					],
					"operation": [
						"Get Paginated Mdrs"
					]
				}
			}
		},
		{
			"displayName": "Direction",
			"name": "direction",
			"default": "INBOUND",
			"type": "options",
			"options": [
				{
					"name": "INBOUND",
					"value": "INBOUND"
				},
				{
					"name": "OUTBOUND",
					"value": "OUTBOUND"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "direction",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Search Beta"
					],
					"operation": [
						"Get Paginated Mdrs"
					]
				}
			}
		},
		{
			"displayName": "Outbound Profile Id",
			"name": "outbound_profile_id",
			"description": "Configured profile id. New profiles can be created and configured on Telnyx portal",
			"default": "30ef55db-c4a2-4c4a-9804-a68077973d07",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "outbound_profile_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Search Beta"
					],
					"operation": [
						"Get Paginated Mdrs"
					]
				}
			}
		},
		{
			"displayName": "Cld",
			"name": "cld",
			"description": "Destination number",
			"default": "+15551237654",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cld",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Search Beta"
					],
					"operation": [
						"Get Paginated Mdrs"
					]
				}
			}
		},
		{
			"displayName": "Cli",
			"name": "cli",
			"description": "Origination number",
			"default": "+15551237654",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cli",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Search Beta"
					],
					"operation": [
						"Get Paginated Mdrs"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "Message status",
			"default": "DELIVERED",
			"type": "options",
			"options": [
				{
					"name": "GW TIMEOUT",
					"value": "GW_TIMEOUT"
				},
				{
					"name": "DELIVERED",
					"value": "DELIVERED"
				},
				{
					"name": "DLR UNCONFIRMED",
					"value": "DLR_UNCONFIRMED"
				},
				{
					"name": "DLR TIMEOUT",
					"value": "DLR_TIMEOUT"
				},
				{
					"name": "RECEIVED",
					"value": "RECEIVED"
				},
				{
					"name": "GW REJECT",
					"value": "GW_REJECT"
				},
				{
					"name": "FAILED",
					"value": "FAILED"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Search Beta"
					],
					"operation": [
						"Get Paginated Mdrs"
					]
				}
			}
		},
		{
			"displayName": "Message Type",
			"name": "message_type",
			"description": "type of the message",
			"default": "text",
			"type": "options",
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
					"type": "query",
					"property": "message_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Search Beta"
					],
					"operation": [
						"Get Paginated Mdrs"
					]
				}
			}
		},
		{
			"displayName": "Country Iso",
			"name": "country_iso",
			"description": "Destination number ISO country code",
			"default": "US",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "country_iso",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Search Beta"
					],
					"operation": [
						"Get Paginated Mdrs"
					]
				}
			}
		},
		{
			"displayName": "Error",
			"name": "error",
			"description": "Reported error code",
			"default": "40001",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "error",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Search Beta"
					],
					"operation": [
						"Get Paginated Mdrs"
					]
				}
			}
		},
		{
			"displayName": "Normalized Carrier",
			"name": "normalized_carrier",
			"description": "Carrier",
			"default": "Verizon",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "normalized_carrier",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Search Beta"
					],
					"operation": [
						"Get Paginated Mdrs"
					]
				}
			}
		},
		{
			"displayName": "Tag",
			"name": "tag",
			"description": "Specified tag",
			"default": "Tag1",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tag",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Search Beta"
					],
					"operation": [
						"Get Paginated Mdrs"
					]
				}
			}
		},
		{
			"displayName": "Mcc",
			"name": "mcc",
			"description": "Mobile country code",
			"default": "204",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mcc",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Search Beta"
					],
					"operation": [
						"Get Paginated Mdrs"
					]
				}
			}
		},
		{
			"displayName": "Mnc",
			"name": "mnc",
			"description": "Mobile network code",
			"default": "01",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mnc",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Search Beta"
					],
					"operation": [
						"Get Paginated Mdrs"
					]
				}
			}
		},
		{
			"displayName": "Product",
			"name": "product",
			"description": "Used product",
			"default": "LONG_CODE",
			"type": "options",
			"options": [
				{
					"name": "LONG CODE",
					"value": "LONG_CODE"
				},
				{
					"name": "SHORT CODE",
					"value": "SHORT_CODE"
				},
				{
					"name": "SHORT CODE FTEU",
					"value": "SHORT_CODE_FTEU"
				},
				{
					"name": "TOLL FREE",
					"value": "TOLL_FREE"
				},
				{
					"name": "ALPHANUMERIC ID",
					"value": "ALPHANUMERIC_ID"
				},
				{
					"name": "RCS",
					"value": "RCS"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "product",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Search Beta"
					],
					"operation": [
						"Get Paginated Mdrs"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "page%5Bnumber%5D",
			"description": "Page number",
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
						"MDR Search Beta"
					],
					"operation": [
						"Get Paginated Mdrs"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page%5Bsize%5D",
			"description": "Size of the page",
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
						"MDR Search Beta"
					],
					"operation": [
						"Get Paginated Mdrs"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Field used to order the data. If no field is specified, default value is 'created_at'",
			"default": "\"created_at\"",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Search Beta"
					],
					"operation": [
						"Get Paginated Mdrs"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearerauth",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for bearerAuth",
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
						"MDR Search Beta"
					],
					"operation": [
						"Get Paginated Mdrs"
					]
				}
			}
		},
		{
			"displayName": "GET /message_detail_records/{id}/message_body",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Search Beta"
					],
					"operation": [
						"Get Mdr Message Body"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Message unique identifier",
			"default": "ee5d9b20-15db-4b86-a5d7-9c32bfa7b47e",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"MDR Search Beta"
					],
					"operation": [
						"Get Mdr Message Body"
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
						"MDR Search Beta"
					],
					"operation": [
						"Get Mdr Message Body"
					]
				}
			}
		},
];
