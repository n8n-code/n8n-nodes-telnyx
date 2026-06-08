import type { INodeProperties } from 'n8n-workflow';

export const outboundVoiceProfilesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					]
				}
			},
			"options": [
				{
					"name": "List Outbound Voice Profiles",
					"value": "List Outbound Voice Profiles",
					"action": "Get all outbound voice profiles",
					"description": "Get all outbound voice profiles belonging to the user that match the given filters.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/outbound_voice_profiles"
						}
					}
				},
				{
					"name": "Create Outbound Voice Profile",
					"value": "Create Outbound Voice Profile",
					"action": "Create an outbound voice profile",
					"description": "Create an outbound voice profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/outbound_voice_profiles"
						}
					}
				},
				{
					"name": "Delete Outbound Voice Profile",
					"value": "Delete Outbound Voice Profile",
					"action": "Delete an outbound voice profile",
					"description": "Deletes an existing outbound voice profile.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/outbound_voice_profiles/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Retrieve Outbound Voice Profile",
					"value": "Retrieve Outbound Voice Profile",
					"action": "Retrieve an outbound voice profile",
					"description": "Retrieves the details of an existing outbound voice profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/outbound_voice_profiles/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Outbound Voice Profile",
					"value": "Update Outbound Voice Profile",
					"action": "Updates an existing outbound voice profile.",
					"description": "Updates an existing outbound voice profile.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/outbound_voice_profiles/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /outbound_voice_profiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"List Outbound Voice Profiles"
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
						"Outbound Voice Profiles"
					],
					"operation": [
						"List Outbound Voice Profiles"
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
						"Outbound Voice Profiles"
					],
					"operation": [
						"List Outbound Voice Profiles"
					]
				}
			}
		},
		{
			"displayName": "Filter Name Contains",
			"name": "filter%5Bname%5D%5Bcontains%5D",
			"description": "Optional filter on outbound voice profile name.",
			"default": "office-profile",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[name][contains]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"List Outbound Voice Profiles"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the <code>-</code> prefix.<br/><br/>\nThat is: <ul>\n  <li>\n    <code>name</code>: sorts the result by the\n    <code>name</code> field in ascending order.\n  </li>\n\n  <li>\n    <code>-name</code>: sorts the result by the\n    <code>name</code> field in descending order.\n  </li>\n</ul> <br/>",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Enabled",
					"value": "enabled"
				},
				{
					"name": "Enabled",
					"value": "-enabled"
				},
				{
					"name": "Created At",
					"value": "created_at"
				},
				{
					"name": "Created At",
					"value": "-created_at"
				},
				{
					"name": "Name",
					"value": "name"
				},
				{
					"name": "Name",
					"value": "-name"
				},
				{
					"name": "Service Plan",
					"value": "service_plan"
				},
				{
					"name": "Service Plan",
					"value": "-service_plan"
				},
				{
					"name": "Traffic Type",
					"value": "traffic_type"
				},
				{
					"name": "Traffic Type",
					"value": "-traffic_type"
				},
				{
					"name": "Usage Payment Method",
					"value": "usage_payment_method"
				},
				{
					"name": "Usage Payment Method",
					"value": "-usage_payment_method"
				}
			],
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
						"Outbound Voice Profiles"
					],
					"operation": [
						"List Outbound Voice Profiles"
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
						"Outbound Voice Profiles"
					],
					"operation": [
						"List Outbound Voice Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /outbound_voice_profiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Create Outbound Voice Profile"
					]
				}
			}
		},
		{
			"displayName": "Billing Group Id",
			"name": "billing_group_id",
			"type": "string",
			"default": "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
			"description": "The ID of the billing group associated with the outbound proflile. Defaults to null (for no group assigned).",
			"routing": {
				"send": {
					"property": "billing_group_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Create Outbound Voice Profile"
					]
				}
			}
		},
		{
			"displayName": "Call Recording",
			"name": "call_recording",
			"type": "json",
			"default": "{\n  \"call_recording_caller_phone_numbers\": [\n    \"+19705555098\"\n  ],\n  \"call_recording_channels\": \"dual\",\n  \"call_recording_format\": \"mp3\",\n  \"call_recording_type\": \"by_caller_phone_number\"\n}",
			"routing": {
				"send": {
					"property": "call_recording",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Create Outbound Voice Profile"
					]
				}
			}
		},
		{
			"displayName": "Concurrent Call Limit",
			"name": "concurrent_call_limit",
			"type": "number",
			"default": 10,
			"description": "Must be no more than your global concurrent call limit. Null means no limit.",
			"routing": {
				"send": {
					"property": "concurrent_call_limit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Create Outbound Voice Profile"
					]
				}
			}
		},
		{
			"displayName": "Daily Spend Limit",
			"name": "daily_spend_limit",
			"type": "string",
			"default": "100.00",
			"description": "The maximum amount of usage charges, in USD, you want Telnyx to allow on this outbound voice profile in a day before disallowing new calls.",
			"routing": {
				"send": {
					"property": "daily_spend_limit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Create Outbound Voice Profile"
					]
				}
			}
		},
		{
			"displayName": "Daily Spend Limit Enabled",
			"name": "daily_spend_limit_enabled",
			"type": "boolean",
			"default": true,
			"description": "Specifies whether to enforce the daily_spend_limit on this outbound voice profile.",
			"routing": {
				"send": {
					"property": "daily_spend_limit_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Create Outbound Voice Profile"
					]
				}
			}
		},
		{
			"displayName": "Enabled",
			"name": "enabled",
			"type": "boolean",
			"default": true,
			"description": "Specifies whether the outbound voice profile can be used. Disabled profiles will result in outbound calls being blocked for the associated Connections.",
			"routing": {
				"send": {
					"property": "enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Create Outbound Voice Profile"
					]
				}
			}
		},
		{
			"displayName": "Max Destination Rate",
			"name": "max_destination_rate",
			"type": "number",
			"default": 0,
			"description": "Maximum rate (price per minute) for a Destination to be allowed when making outbound calls.",
			"routing": {
				"send": {
					"property": "max_destination_rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Create Outbound Voice Profile"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "office",
			"description": "A user-supplied name to help with organization.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Create Outbound Voice Profile"
					]
				}
			}
		},
		{
			"displayName": "Service Plan",
			"name": "service_plan",
			"type": "options",
			"default": "global",
			"description": "Indicates the coverage of the termination regions. International and Global are the same but International may only be used for high volume/short duration Outbound Voice Profiles.",
			"options": [
				{
					"name": "Us",
					"value": "us"
				},
				{
					"name": "International",
					"value": "international"
				},
				{
					"name": "Global",
					"value": "global"
				}
			],
			"routing": {
				"send": {
					"property": "service_plan",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Create Outbound Voice Profile"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  \"office-profile\"\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Create Outbound Voice Profile"
					]
				}
			}
		},
		{
			"displayName": "Traffic Type",
			"name": "traffic_type",
			"type": "options",
			"default": "conversational",
			"description": "Specifies the type of traffic allowed in this profile.",
			"options": [
				{
					"name": "Conversational",
					"value": "conversational"
				},
				{
					"name": "Short Duration",
					"value": "short_duration"
				}
			],
			"routing": {
				"send": {
					"property": "traffic_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Create Outbound Voice Profile"
					]
				}
			}
		},
		{
			"displayName": "Usage Payment Method",
			"name": "usage_payment_method",
			"type": "options",
			"default": "tariff",
			"description": "Setting for how costs for outbound profile are calculated.",
			"options": [
				{
					"name": "Tariff",
					"value": "tariff"
				},
				{
					"name": "Rate Deck",
					"value": "rate-deck"
				}
			],
			"routing": {
				"send": {
					"property": "usage_payment_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Create Outbound Voice Profile"
					]
				}
			}
		},
		{
			"displayName": "Whitelisted Destinations",
			"name": "whitelisted_destinations",
			"type": "json",
			"default": "[\n  \"US\",\n  \"BR\",\n  \"AU\"\n]",
			"description": "The list of destinations you want to be able to call using this outbound voice profile formatted in alpha2.",
			"routing": {
				"send": {
					"property": "whitelisted_destinations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Create Outbound Voice Profile"
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
						"Outbound Voice Profiles"
					],
					"operation": [
						"Create Outbound Voice Profile"
					]
				}
			}
		},
		{
			"displayName": "DELETE /outbound_voice_profiles/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Delete Outbound Voice Profile"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Identifies the resource.",
			"default": "1293384261075731499",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Delete Outbound Voice Profile"
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
						"Outbound Voice Profiles"
					],
					"operation": [
						"Delete Outbound Voice Profile"
					]
				}
			}
		},
		{
			"displayName": "GET /outbound_voice_profiles/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Retrieve Outbound Voice Profile"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Identifies the resource.",
			"default": "1293384261075731499",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Retrieve Outbound Voice Profile"
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
						"Outbound Voice Profiles"
					],
					"operation": [
						"Retrieve Outbound Voice Profile"
					]
				}
			}
		},
		{
			"displayName": "PATCH /outbound_voice_profiles/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Update Outbound Voice Profile"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Identifies the resource.",
			"default": "1293384261075731499",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Update Outbound Voice Profile"
					]
				}
			}
		},
		{
			"displayName": "Billing Group Id",
			"name": "billing_group_id",
			"type": "string",
			"default": "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
			"description": "The ID of the billing group associated with the outbound proflile. Defaults to null (for no group assigned).",
			"routing": {
				"send": {
					"property": "billing_group_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Update Outbound Voice Profile"
					]
				}
			}
		},
		{
			"displayName": "Call Recording",
			"name": "call_recording",
			"type": "json",
			"default": "{\n  \"call_recording_caller_phone_numbers\": [\n    \"+19705555098\"\n  ],\n  \"call_recording_channels\": \"dual\",\n  \"call_recording_format\": \"mp3\",\n  \"call_recording_type\": \"by_caller_phone_number\"\n}",
			"routing": {
				"send": {
					"property": "call_recording",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Update Outbound Voice Profile"
					]
				}
			}
		},
		{
			"displayName": "Concurrent Call Limit",
			"name": "concurrent_call_limit",
			"type": "number",
			"default": 10,
			"description": "Must be no more than your global concurrent call limit. Null means no limit.",
			"routing": {
				"send": {
					"property": "concurrent_call_limit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Update Outbound Voice Profile"
					]
				}
			}
		},
		{
			"displayName": "Daily Spend Limit",
			"name": "daily_spend_limit",
			"type": "string",
			"default": "100.00",
			"description": "The maximum amount of usage charges, in USD, you want Telnyx to allow on this outbound voice profile in a day before disallowing new calls.",
			"routing": {
				"send": {
					"property": "daily_spend_limit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Update Outbound Voice Profile"
					]
				}
			}
		},
		{
			"displayName": "Daily Spend Limit Enabled",
			"name": "daily_spend_limit_enabled",
			"type": "boolean",
			"default": true,
			"description": "Specifies whether to enforce the daily_spend_limit on this outbound voice profile.",
			"routing": {
				"send": {
					"property": "daily_spend_limit_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Update Outbound Voice Profile"
					]
				}
			}
		},
		{
			"displayName": "Enabled",
			"name": "enabled",
			"type": "boolean",
			"default": true,
			"description": "Specifies whether the outbound voice profile can be used. Disabled profiles will result in outbound calls being blocked for the associated Connections.",
			"routing": {
				"send": {
					"property": "enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Update Outbound Voice Profile"
					]
				}
			}
		},
		{
			"displayName": "Max Destination Rate",
			"name": "max_destination_rate",
			"type": "number",
			"default": 0,
			"description": "Maximum rate (price per minute) for a Destination to be allowed when making outbound calls.",
			"routing": {
				"send": {
					"property": "max_destination_rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Update Outbound Voice Profile"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "office",
			"description": "A user-supplied name to help with organization.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Update Outbound Voice Profile"
					]
				}
			}
		},
		{
			"displayName": "Service Plan",
			"name": "service_plan",
			"type": "options",
			"default": "global",
			"description": "Indicates the coverage of the termination regions. International and Global are the same but International may only be used for high volume/short duration Outbound Voice Profiles.",
			"options": [
				{
					"name": "Us",
					"value": "us"
				},
				{
					"name": "International",
					"value": "international"
				},
				{
					"name": "Global",
					"value": "global"
				}
			],
			"routing": {
				"send": {
					"property": "service_plan",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Update Outbound Voice Profile"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  \"office-profile\"\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Update Outbound Voice Profile"
					]
				}
			}
		},
		{
			"displayName": "Traffic Type",
			"name": "traffic_type",
			"type": "options",
			"default": "conversational",
			"description": "Specifies the type of traffic allowed in this profile.",
			"options": [
				{
					"name": "Conversational",
					"value": "conversational"
				},
				{
					"name": "Short Duration",
					"value": "short_duration"
				}
			],
			"routing": {
				"send": {
					"property": "traffic_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Update Outbound Voice Profile"
					]
				}
			}
		},
		{
			"displayName": "Usage Payment Method",
			"name": "usage_payment_method",
			"type": "options",
			"default": "tariff",
			"description": "Setting for how costs for outbound profile are calculated.",
			"options": [
				{
					"name": "Tariff",
					"value": "tariff"
				},
				{
					"name": "Rate Deck",
					"value": "rate-deck"
				}
			],
			"routing": {
				"send": {
					"property": "usage_payment_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Update Outbound Voice Profile"
					]
				}
			}
		},
		{
			"displayName": "Whitelisted Destinations",
			"name": "whitelisted_destinations",
			"type": "json",
			"default": "[\n  \"US\",\n  \"BR\",\n  \"AU\"\n]",
			"description": "The list of destinations you want to be able to call using this outbound voice profile formatted in alpha2.",
			"routing": {
				"send": {
					"property": "whitelisted_destinations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Outbound Voice Profiles"
					],
					"operation": [
						"Update Outbound Voice Profile"
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
						"Outbound Voice Profiles"
					],
					"operation": [
						"Update Outbound Voice Profile"
					]
				}
			}
		},
];
