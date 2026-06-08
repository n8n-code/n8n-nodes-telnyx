import type { INodeProperties } from 'n8n-workflow';

export const messagingProfilesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Profiles"
					]
				}
			},
			"options": [
				{
					"name": "List Messaging Profile Metrics",
					"value": "List Messaging Profile Metrics",
					"action": "List messaging profile metrics",
					"description": "List messaging profile metrics",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/messaging_profile_metrics"
						}
					}
				},
				{
					"name": "List Messaging Profiles",
					"value": "List Messaging Profiles",
					"action": "List messaging profiles",
					"description": "List messaging profiles",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/messaging_profiles"
						}
					}
				},
				{
					"name": "Create Messaging Profile",
					"value": "Create Messaging Profile",
					"action": "Create a messaging profile",
					"description": "Create a messaging profile",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/messaging_profiles"
						}
					}
				},
				{
					"name": "Delete Messaging Profile",
					"value": "Delete Messaging Profile",
					"action": "Delete a messaging profile",
					"description": "Delete a messaging profile",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/messaging_profiles/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Retrieve Messaging Profile",
					"value": "Retrieve Messaging Profile",
					"action": "Retrieve a messaging profile",
					"description": "Retrieve a messaging profile",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/messaging_profiles/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Messaging Profile",
					"value": "Update Messaging Profile",
					"action": "Update a messaging profile",
					"description": "Update a messaging profile",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/messaging_profiles/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Retrieve Messaging Profile Detailed Metrics",
					"value": "Retrieve Messaging Profile Detailed Metrics",
					"action": "Retrieve messaging profile metrics",
					"description": "Retrieve messaging profile metrics",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/messaging_profiles/{{$parameter[\"id\"]}}/metrics"
						}
					}
				},
				{
					"name": "List Messaging Profile Phone Numbers",
					"value": "List Messaging Profile Phone Numbers",
					"action": "List phone numbers associated with a messaging profile",
					"description": "List phone numbers associated with a messaging profile",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/messaging_profiles/{{$parameter[\"id\"]}}/phone_numbers"
						}
					}
				},
				{
					"name": "List Messaging Profile Short Codes",
					"value": "List Messaging Profile Short Codes",
					"action": "List short codes associated with a messaging profile",
					"description": "List short codes associated with a messaging profile",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/messaging_profiles/{{$parameter[\"id\"]}}/short_codes"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /messaging_profile_metrics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Profiles"
					],
					"operation": [
						"List Messaging Profile Metrics"
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
						"Messaging Profiles"
					],
					"operation": [
						"List Messaging Profile Metrics"
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
						"Messaging Profiles"
					],
					"operation": [
						"List Messaging Profile Metrics"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"description": "The id of the messaging profile(s) to retrieve",
			"default": "",
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
						"Messaging Profiles"
					],
					"operation": [
						"List Messaging Profile Metrics"
					]
				}
			}
		},
		{
			"displayName": "Time Frame",
			"name": "time_frame",
			"description": "The timeframe for which you'd like to retrieve metrics.",
			"default": "24h",
			"type": "options",
			"options": [
				{
					"name": "1 H",
					"value": "1h"
				},
				{
					"name": "3 H",
					"value": "3h"
				},
				{
					"name": "24 H",
					"value": "24h"
				},
				{
					"name": "3 D",
					"value": "3d"
				},
				{
					"name": "7 D",
					"value": "7d"
				},
				{
					"name": "30 D",
					"value": "30d"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "time_frame",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Profiles"
					],
					"operation": [
						"List Messaging Profile Metrics"
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
						"Messaging Profiles"
					],
					"operation": [
						"List Messaging Profile Metrics"
					]
				}
			}
		},
		{
			"displayName": "GET /messaging_profiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Profiles"
					],
					"operation": [
						"List Messaging Profiles"
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
						"Messaging Profiles"
					],
					"operation": [
						"List Messaging Profiles"
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
						"Messaging Profiles"
					],
					"operation": [
						"List Messaging Profiles"
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
						"Messaging Profiles"
					],
					"operation": [
						"List Messaging Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /messaging_profiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Profiles"
					],
					"operation": [
						"Create Messaging Profile"
					]
				}
			}
		},
		{
			"displayName": "Enabled",
			"name": "enabled",
			"type": "boolean",
			"default": true,
			"description": "Specifies whether the messaging profile is enabled or not.",
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
						"Messaging Profiles"
					],
					"operation": [
						"Create Messaging Profile"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "A user friendly name for the messaging profile.",
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
						"Messaging Profiles"
					],
					"operation": [
						"Create Messaging Profile"
					]
				}
			}
		},
		{
			"displayName": "Number Pool Settings",
			"name": "number_pool_settings",
			"type": "json",
			"default": "{\n  \"geomatch\": false,\n  \"long_code_weight\": 1,\n  \"skip_unhealthy\": true,\n  \"sticky_sender\": false,\n  \"toll_free_weight\": 10\n}",
			"description": "Number Pool allows you to send messages from a pool of numbers of different types, assigning\nweights to each type. The pool consists of all the long code and toll free numbers\nassigned to the messaging profile.\n\nTo disable this feature, set the object field to `null`.\n",
			"routing": {
				"send": {
					"property": "number_pool_settings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Profiles"
					],
					"operation": [
						"Create Messaging Profile"
					]
				}
			}
		},
		{
			"displayName": "Url Shortener Settings",
			"name": "url_shortener_settings",
			"type": "json",
			"default": "{\n  \"domain\": \"example.ex\",\n  \"prefix\": \"\",\n  \"replace_blacklist_only\": true,\n  \"send_webhooks\": false\n}",
			"description": "The URL shortener feature allows automatic replacement of URLs that were generated using\na public URL shortener service. Some examples include bit.do, bit.ly, goo.gl, ht.ly,\nis.gd, ow.ly, rebrand.ly, t.co, tiny.cc, and tinyurl.com. Such URLs are replaced with\nwith links generated by Telnyx. The use of custom links can improve branding and message\ndeliverability.\n\nTo disable this feature, set the object field to `null`.\n",
			"routing": {
				"send": {
					"property": "url_shortener_settings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Profiles"
					],
					"operation": [
						"Create Messaging Profile"
					]
				}
			}
		},
		{
			"displayName": "Webhook Api Version",
			"name": "webhook_api_version",
			"type": "options",
			"default": "2",
			"description": "Determines which webhook format will be used, Telnyx API v1, v2, or a legacy 2010-04-01 format.",
			"options": [
				{
					"name": "1",
					"value": "1"
				},
				{
					"name": "2",
					"value": "2"
				},
				{
					"name": "2010 04 01",
					"value": "2010-04-01"
				}
			],
			"routing": {
				"send": {
					"property": "webhook_api_version",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Profiles"
					],
					"operation": [
						"Create Messaging Profile"
					]
				}
			}
		},
		{
			"displayName": "Webhook Failover Url",
			"name": "webhook_failover_url",
			"type": "string",
			"default": "",
			"description": "The failover URL where webhooks related to this messaging profile will be sent if sending to the primary URL fails.",
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
						"Messaging Profiles"
					],
					"operation": [
						"Create Messaging Profile"
					]
				}
			}
		},
		{
			"displayName": "Webhook Url",
			"name": "webhook_url",
			"type": "string",
			"default": "",
			"description": "The URL where webhooks related to this messaging profile will be sent.",
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
						"Messaging Profiles"
					],
					"operation": [
						"Create Messaging Profile"
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
						"Messaging Profiles"
					],
					"operation": [
						"Create Messaging Profile"
					]
				}
			}
		},
		{
			"displayName": "DELETE /messaging_profiles/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Profiles"
					],
					"operation": [
						"Delete Messaging Profile"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The id of the messaging profile to retrieve",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Profiles"
					],
					"operation": [
						"Delete Messaging Profile"
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
						"Messaging Profiles"
					],
					"operation": [
						"Delete Messaging Profile"
					]
				}
			}
		},
		{
			"displayName": "GET /messaging_profiles/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Profiles"
					],
					"operation": [
						"Retrieve Messaging Profile"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The id of the messaging profile to retrieve",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Profiles"
					],
					"operation": [
						"Retrieve Messaging Profile"
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
						"Messaging Profiles"
					],
					"operation": [
						"Retrieve Messaging Profile"
					]
				}
			}
		},
		{
			"displayName": "PATCH /messaging_profiles/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Profiles"
					],
					"operation": [
						"Update Messaging Profile"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The id of the messaging profile to retrieve",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Profiles"
					],
					"operation": [
						"Update Messaging Profile"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "string",
			"default": "",
			"description": "ISO 8601 formatted date indicating when the resource was created.",
			"routing": {
				"send": {
					"property": "created_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Profiles"
					],
					"operation": [
						"Update Messaging Profile"
					]
				}
			}
		},
		{
			"displayName": "Enabled",
			"name": "enabled",
			"type": "boolean",
			"default": true,
			"description": "Specifies whether the messaging profile is enabled or not.",
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
						"Messaging Profiles"
					],
					"operation": [
						"Update Messaging Profile"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "Identifies the type of resource.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Profiles"
					],
					"operation": [
						"Update Messaging Profile"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "A user friendly name for the messaging profile.",
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
						"Messaging Profiles"
					],
					"operation": [
						"Update Messaging Profile"
					]
				}
			}
		},
		{
			"displayName": "Number Pool Settings",
			"name": "number_pool_settings",
			"type": "json",
			"default": "{\n  \"geomatch\": false,\n  \"long_code_weight\": 1,\n  \"skip_unhealthy\": true,\n  \"sticky_sender\": false,\n  \"toll_free_weight\": 10\n}",
			"description": "Number Pool allows you to send messages from a pool of numbers of different types, assigning\nweights to each type. The pool consists of all the long code and toll free numbers\nassigned to the messaging profile.\n\nTo disable this feature, set the object field to `null`.\n",
			"routing": {
				"send": {
					"property": "number_pool_settings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Profiles"
					],
					"operation": [
						"Update Messaging Profile"
					]
				}
			}
		},
		{
			"displayName": "Record Type",
			"name": "record_type",
			"type": "options",
			"default": "messaging_profile",
			"description": "Identifies the type of the resource.",
			"options": [
				{
					"name": "Messaging Profile",
					"value": "messaging_profile"
				}
			],
			"routing": {
				"send": {
					"property": "record_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Profiles"
					],
					"operation": [
						"Update Messaging Profile"
					]
				}
			}
		},
		{
			"displayName": "Updated At",
			"name": "updated_at",
			"type": "string",
			"default": "",
			"description": "ISO 8601 formatted date indicating when the resource was updated.",
			"routing": {
				"send": {
					"property": "updated_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Profiles"
					],
					"operation": [
						"Update Messaging Profile"
					]
				}
			}
		},
		{
			"displayName": "Url Shortener Settings",
			"name": "url_shortener_settings",
			"type": "json",
			"default": "{\n  \"domain\": \"example.ex\",\n  \"prefix\": \"\",\n  \"replace_blacklist_only\": true,\n  \"send_webhooks\": false\n}",
			"description": "The URL shortener feature allows automatic replacement of URLs that were generated using\na public URL shortener service. Some examples include bit.do, bit.ly, goo.gl, ht.ly,\nis.gd, ow.ly, rebrand.ly, t.co, tiny.cc, and tinyurl.com. Such URLs are replaced with\nwith links generated by Telnyx. The use of custom links can improve branding and message\ndeliverability.\n\nTo disable this feature, set the object field to `null`.\n",
			"routing": {
				"send": {
					"property": "url_shortener_settings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Profiles"
					],
					"operation": [
						"Update Messaging Profile"
					]
				}
			}
		},
		{
			"displayName": "V 1 Secret",
			"name": "v1_secret",
			"type": "string",
			"default": "",
			"description": "Secret used to authenticate with v1 endpoints.",
			"routing": {
				"send": {
					"property": "v1_secret",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Profiles"
					],
					"operation": [
						"Update Messaging Profile"
					]
				}
			}
		},
		{
			"displayName": "Webhook Api Version",
			"name": "webhook_api_version",
			"type": "options",
			"default": "1",
			"description": "Determines which webhook format will be used, Telnyx API v1, v2, or a legacy 2010-04-01 format.",
			"options": [
				{
					"name": "1",
					"value": "1"
				},
				{
					"name": "2",
					"value": "2"
				},
				{
					"name": "2010 04 01",
					"value": "2010-04-01"
				}
			],
			"routing": {
				"send": {
					"property": "webhook_api_version",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Profiles"
					],
					"operation": [
						"Update Messaging Profile"
					]
				}
			}
		},
		{
			"displayName": "Webhook Failover Url",
			"name": "webhook_failover_url",
			"type": "string",
			"default": "",
			"description": "The failover URL where webhooks related to this messaging profile will be sent if sending to the primary URL fails.",
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
						"Messaging Profiles"
					],
					"operation": [
						"Update Messaging Profile"
					]
				}
			}
		},
		{
			"displayName": "Webhook Url",
			"name": "webhook_url",
			"type": "string",
			"default": "",
			"description": "The URL where webhooks related to this messaging profile will be sent.",
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
						"Messaging Profiles"
					],
					"operation": [
						"Update Messaging Profile"
					]
				}
			}
		},
		{
			"displayName": "Whitelisted Destinations",
			"name": "whitelisted_destinations",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Destinations to which the messaging profile is allowed to send. If set to `null`, all destinations will be allowed. Setting a value of `[\"*\"]` has the equivalent effect. The elements in the list must be valid ISO 3166-1 alpha-2 country codes.",
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
						"Messaging Profiles"
					],
					"operation": [
						"Update Messaging Profile"
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
						"Messaging Profiles"
					],
					"operation": [
						"Update Messaging Profile"
					]
				}
			}
		},
		{
			"displayName": "GET /messaging_profiles/{id}/metrics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Profiles"
					],
					"operation": [
						"Retrieve Messaging Profile Detailed Metrics"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The id of the messaging profile to retrieve",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Profiles"
					],
					"operation": [
						"Retrieve Messaging Profile Detailed Metrics"
					]
				}
			}
		},
		{
			"displayName": "Time Frame",
			"name": "time_frame",
			"description": "The timeframe for which you'd like to retrieve metrics.",
			"default": "24h",
			"type": "options",
			"options": [
				{
					"name": "1 H",
					"value": "1h"
				},
				{
					"name": "3 H",
					"value": "3h"
				},
				{
					"name": "24 H",
					"value": "24h"
				},
				{
					"name": "3 D",
					"value": "3d"
				},
				{
					"name": "7 D",
					"value": "7d"
				},
				{
					"name": "30 D",
					"value": "30d"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "time_frame",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Profiles"
					],
					"operation": [
						"Retrieve Messaging Profile Detailed Metrics"
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
						"Messaging Profiles"
					],
					"operation": [
						"Retrieve Messaging Profile Detailed Metrics"
					]
				}
			}
		},
		{
			"displayName": "GET /messaging_profiles/{id}/phone_numbers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Profiles"
					],
					"operation": [
						"List Messaging Profile Phone Numbers"
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
						"Messaging Profiles"
					],
					"operation": [
						"List Messaging Profile Phone Numbers"
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
						"Messaging Profiles"
					],
					"operation": [
						"List Messaging Profile Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The id of the messaging profile to retrieve",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Profiles"
					],
					"operation": [
						"List Messaging Profile Phone Numbers"
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
						"Messaging Profiles"
					],
					"operation": [
						"List Messaging Profile Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "GET /messaging_profiles/{id}/short_codes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Profiles"
					],
					"operation": [
						"List Messaging Profile Short Codes"
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
						"Messaging Profiles"
					],
					"operation": [
						"List Messaging Profile Short Codes"
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
						"Messaging Profiles"
					],
					"operation": [
						"List Messaging Profile Short Codes"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The id of the messaging profile to retrieve",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Profiles"
					],
					"operation": [
						"List Messaging Profile Short Codes"
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
						"Messaging Profiles"
					],
					"operation": [
						"List Messaging Profile Short Codes"
					]
				}
			}
		},
];
