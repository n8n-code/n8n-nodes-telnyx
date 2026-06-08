import type { INodeProperties } from 'n8n-workflow';

export const teXmlApplicationsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					]
				}
			},
			"options": [
				{
					"name": "Find Texml Applications",
					"value": "Find Texml Applications",
					"action": "List all TeXML Applications",
					"description": "Returns a list of your TeXML Applications.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/texml_applications"
						}
					}
				},
				{
					"name": "Create Texml Application",
					"value": "Create Texml Application",
					"action": "Creates a TeXML Application",
					"description": "Creates a TeXML Application.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/texml_applications"
						}
					}
				},
				{
					"name": "Delete Texml Application",
					"value": "Delete Texml Application",
					"action": "Deletes a TeXML Application",
					"description": "Deletes a TeXML Application.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/texml_applications/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Texml Application",
					"value": "Get Texml Application",
					"action": "Retrieve a TeXML Application",
					"description": "Retrieves the details of an existing TeXML Application.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/texml_applications/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Texml Application",
					"value": "Update Texml Application",
					"action": "Update a TeXML Application",
					"description": "Updates settings of an existing TeXML Application.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/texml_applications/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /texml_applications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Find Texml Applications"
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
						"Te XML Applications"
					],
					"operation": [
						"Find Texml Applications"
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
						"Te XML Applications"
					],
					"operation": [
						"Find Texml Applications"
					]
				}
			}
		},
		{
			"displayName": "Filter Friendly Name Contains",
			"name": "filter%5Bfriendly_name%5D%5Bcontains%5D",
			"description": "If present, applications with <code>friendly_name</code> containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.",
			"default": "null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[friendly_name][contains]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Find Texml Applications"
					]
				}
			}
		},
		{
			"displayName": "Filter Outbound Voice Profile Id",
			"name": "filter%5Boutbound_voice_profile_id%5D",
			"description": "Identifies the associated outbound voice profile.",
			"default": "1293384261075731499",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[outbound_voice_profile_id]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Find Texml Applications"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the <code> -</code> prefix.<br/><br/>\nThat is: <ul>\n  <li>\n    <code>connection_name</code>: sorts the result by the\n    <code>connection_name</code> field in ascending order.\n  </li>\n\n  <li>\n    <code>-connection_name</code>: sorts the result by the\n    <code>connection_name</code> field in descending order.\n  </li>\n</ul> <br/> If not given, results are sorted by <code>created_at</code> in descending order.",
			"default": "connection_name",
			"type": "options",
			"options": [
				{
					"name": "Created At",
					"value": "created_at"
				},
				{
					"name": "Connection Name",
					"value": "connection_name"
				},
				{
					"name": "Active",
					"value": "active"
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
						"Te XML Applications"
					],
					"operation": [
						"Find Texml Applications"
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
						"Te XML Applications"
					],
					"operation": [
						"Find Texml Applications"
					]
				}
			}
		},
		{
			"displayName": "POST /texml_applications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Create Texml Application"
					]
				}
			}
		},
		{
			"displayName": "Active",
			"name": "active",
			"type": "boolean",
			"default": false,
			"description": "Specifies whether the connection can be used.",
			"routing": {
				"send": {
					"property": "active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Create Texml Application"
					]
				}
			}
		},
		{
			"displayName": "Anchorsite Override",
			"name": "anchorsite_override",
			"type": "options",
			"default": "Amsterdam, Netherlands",
			"description": "`Latency` directs Telnyx to route media through the site with the lowest round-trip time to the user's connection. Telnyx calculates this time using ICMP ping messages. This can be disabled by specifying a site to handle all media.",
			"options": [
				{
					"name": "Latency",
					"value": "Latency"
				},
				{
					"name": "Chicago IL",
					"value": "Chicago, IL"
				},
				{
					"name": "Ashburn VA",
					"value": "Ashburn, VA"
				},
				{
					"name": "San Jose CA",
					"value": "San Jose, CA"
				},
				{
					"name": "Sydney Australia",
					"value": "Sydney, Australia"
				},
				{
					"name": "Amsterdam Netherlands",
					"value": "Amsterdam, Netherlands"
				},
				{
					"name": "London UK",
					"value": "London, UK"
				},
				{
					"name": "Toronto Canada",
					"value": "Toronto, Canada"
				},
				{
					"name": "Vancouver Canada",
					"value": "Vancouver, Canada"
				},
				{
					"name": "Frankfurt Germany",
					"value": "Frankfurt, Germany"
				}
			],
			"routing": {
				"send": {
					"property": "anchorsite_override",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Create Texml Application"
					]
				}
			}
		},
		{
			"displayName": "Dtmf Type",
			"name": "dtmf_type",
			"type": "options",
			"default": "Inband",
			"description": "Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF digits sent to Telnyx will be accepted in all formats.",
			"options": [
				{
					"name": "RFC 2833",
					"value": "RFC 2833"
				},
				{
					"name": "Inband",
					"value": "Inband"
				},
				{
					"name": "SIP INFO",
					"value": "SIP INFO"
				}
			],
			"routing": {
				"send": {
					"property": "dtmf_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Create Texml Application"
					]
				}
			}
		},
		{
			"displayName": "First Command Timeout",
			"name": "first_command_timeout",
			"type": "boolean",
			"default": true,
			"description": "Specifies whether calls to phone numbers associated with this connection should hangup after timing out.",
			"routing": {
				"send": {
					"property": "first_command_timeout",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Create Texml Application"
					]
				}
			}
		},
		{
			"displayName": "First Command Timeout Secs",
			"name": "first_command_timeout_secs",
			"type": "number",
			"default": 10,
			"description": "Specifies how many seconds to wait before timing out a dial command.",
			"routing": {
				"send": {
					"property": "first_command_timeout_secs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Create Texml Application"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Friendly Name",
			"name": "friendly_name",
			"type": "string",
			"default": "call-router",
			"description": "A user-assigned name to help manage the application.",
			"routing": {
				"send": {
					"property": "friendly_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Create Texml Application"
					]
				}
			}
		},
		{
			"displayName": "Inbound",
			"name": "inbound",
			"type": "json",
			"default": "{\n  \"channel_limit\": 10,\n  \"sip_subdomain\": \"example\",\n  \"sip_subdomain_receive_settings\": \"only_my_connections\"\n}",
			"routing": {
				"send": {
					"property": "inbound",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Create Texml Application"
					]
				}
			}
		},
		{
			"displayName": "Outbound",
			"name": "outbound",
			"type": "json",
			"default": "{\n  \"channel_limit\": 10,\n  \"outbound_voice_profile_id\": \"1293384261075731499\"\n}",
			"routing": {
				"send": {
					"property": "outbound",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Create Texml Application"
					]
				}
			}
		},
		{
			"displayName": "Status Callback",
			"name": "status_callback",
			"type": "string",
			"default": "https://example.com",
			"description": "URL for Telnyx to send requests to containing information about call progress events.",
			"routing": {
				"send": {
					"property": "status_callback",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Create Texml Application"
					]
				}
			}
		},
		{
			"displayName": "Status Callback Method",
			"name": "status_callback_method",
			"type": "options",
			"default": "get",
			"description": "HTTP request method Telnyx should use when requesting the status_callback URL.",
			"options": [
				{
					"name": "Get",
					"value": "get"
				},
				{
					"name": "Post",
					"value": "post"
				}
			],
			"routing": {
				"send": {
					"property": "status_callback_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Create Texml Application"
					]
				}
			}
		},
		{
			"displayName": "Voice Fallback Url",
			"name": "voice_fallback_url",
			"type": "string",
			"default": "https://fallback.example.com",
			"description": "URL to which Telnyx will deliver your XML Translator webhooks if we get an error response from your voice_url.",
			"routing": {
				"send": {
					"property": "voice_fallback_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Create Texml Application"
					]
				}
			}
		},
		{
			"displayName": "Voice Method",
			"name": "voice_method",
			"type": "options",
			"default": "get",
			"description": "HTTP request method Telnyx will use to interact with your XML Translator webhooks. Either 'get' or 'post'.",
			"options": [
				{
					"name": "Get",
					"value": "get"
				},
				{
					"name": "Post",
					"value": "post"
				}
			],
			"routing": {
				"send": {
					"property": "voice_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Create Texml Application"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Voice Url",
			"name": "voice_url",
			"type": "string",
			"default": "https://example.com",
			"description": "URL to which Telnyx will deliver your XML Translator webhooks.",
			"routing": {
				"send": {
					"property": "voice_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Create Texml Application"
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
						"Te XML Applications"
					],
					"operation": [
						"Create Texml Application"
					]
				}
			}
		},
		{
			"displayName": "DELETE /texml_applications/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Delete Texml Application"
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
						"Te XML Applications"
					],
					"operation": [
						"Delete Texml Application"
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
						"Te XML Applications"
					],
					"operation": [
						"Delete Texml Application"
					]
				}
			}
		},
		{
			"displayName": "GET /texml_applications/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Get Texml Application"
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
						"Te XML Applications"
					],
					"operation": [
						"Get Texml Application"
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
						"Te XML Applications"
					],
					"operation": [
						"Get Texml Application"
					]
				}
			}
		},
		{
			"displayName": "PATCH /texml_applications/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Update Texml Application"
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
						"Te XML Applications"
					],
					"operation": [
						"Update Texml Application"
					]
				}
			}
		},
		{
			"displayName": "Active",
			"name": "active",
			"type": "boolean",
			"default": false,
			"description": "Specifies whether the connection can be used.",
			"routing": {
				"send": {
					"property": "active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Update Texml Application"
					]
				}
			}
		},
		{
			"displayName": "Anchorsite Override",
			"name": "anchorsite_override",
			"type": "options",
			"default": "Amsterdam, Netherlands",
			"description": "`Latency` directs Telnyx to route media through the site with the lowest round-trip time to the user's connection. Telnyx calculates this time using ICMP ping messages. This can be disabled by specifying a site to handle all media.",
			"options": [
				{
					"name": "Latency",
					"value": "Latency"
				},
				{
					"name": "Chicago IL",
					"value": "Chicago, IL"
				},
				{
					"name": "Ashburn VA",
					"value": "Ashburn, VA"
				},
				{
					"name": "San Jose CA",
					"value": "San Jose, CA"
				},
				{
					"name": "Sydney Australia",
					"value": "Sydney, Australia"
				},
				{
					"name": "Amsterdam Netherlands",
					"value": "Amsterdam, Netherlands"
				},
				{
					"name": "London UK",
					"value": "London, UK"
				},
				{
					"name": "Toronto Canada",
					"value": "Toronto, Canada"
				},
				{
					"name": "Vancouver Canada",
					"value": "Vancouver, Canada"
				},
				{
					"name": "Frankfurt Germany",
					"value": "Frankfurt, Germany"
				}
			],
			"routing": {
				"send": {
					"property": "anchorsite_override",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Update Texml Application"
					]
				}
			}
		},
		{
			"displayName": "Dtmf Type",
			"name": "dtmf_type",
			"type": "options",
			"default": "Inband",
			"description": "Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF digits sent to Telnyx will be accepted in all formats.",
			"options": [
				{
					"name": "RFC 2833",
					"value": "RFC 2833"
				},
				{
					"name": "Inband",
					"value": "Inband"
				},
				{
					"name": "SIP INFO",
					"value": "SIP INFO"
				}
			],
			"routing": {
				"send": {
					"property": "dtmf_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Update Texml Application"
					]
				}
			}
		},
		{
			"displayName": "First Command Timeout",
			"name": "first_command_timeout",
			"type": "boolean",
			"default": true,
			"description": "Specifies whether calls to phone numbers associated with this connection should hangup after timing out.",
			"routing": {
				"send": {
					"property": "first_command_timeout",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Update Texml Application"
					]
				}
			}
		},
		{
			"displayName": "First Command Timeout Secs",
			"name": "first_command_timeout_secs",
			"type": "number",
			"default": 10,
			"description": "Specifies how many seconds to wait before timing out a dial command.",
			"routing": {
				"send": {
					"property": "first_command_timeout_secs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Update Texml Application"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Friendly Name",
			"name": "friendly_name",
			"type": "string",
			"default": "call-router",
			"description": "A user-assigned name to help manage the application.",
			"routing": {
				"send": {
					"property": "friendly_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Update Texml Application"
					]
				}
			}
		},
		{
			"displayName": "Inbound",
			"name": "inbound",
			"type": "json",
			"default": "{\n  \"channel_limit\": 10,\n  \"sip_subdomain\": \"example\",\n  \"sip_subdomain_receive_settings\": \"only_my_connections\"\n}",
			"routing": {
				"send": {
					"property": "inbound",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Update Texml Application"
					]
				}
			}
		},
		{
			"displayName": "Outbound",
			"name": "outbound",
			"type": "json",
			"default": "{\n  \"channel_limit\": 10,\n  \"outbound_voice_profile_id\": \"1293384261075731499\"\n}",
			"routing": {
				"send": {
					"property": "outbound",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Update Texml Application"
					]
				}
			}
		},
		{
			"displayName": "Status Callback",
			"name": "status_callback",
			"type": "string",
			"default": "https://example.com",
			"description": "URL for Telnyx to send requests to containing information about call progress events.",
			"routing": {
				"send": {
					"property": "status_callback",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Update Texml Application"
					]
				}
			}
		},
		{
			"displayName": "Status Callback Method",
			"name": "status_callback_method",
			"type": "options",
			"default": "get",
			"description": "HTTP request method Telnyx should use when requesting the status_callback URL.",
			"options": [
				{
					"name": "Get",
					"value": "get"
				},
				{
					"name": "Post",
					"value": "post"
				}
			],
			"routing": {
				"send": {
					"property": "status_callback_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Update Texml Application"
					]
				}
			}
		},
		{
			"displayName": "Voice Fallback Url",
			"name": "voice_fallback_url",
			"type": "string",
			"default": "https://fallback.example.com",
			"description": "URL to which Telnyx will deliver your XML Translator webhooks if we get an error response from your voice_url.",
			"routing": {
				"send": {
					"property": "voice_fallback_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Update Texml Application"
					]
				}
			}
		},
		{
			"displayName": "Voice Method",
			"name": "voice_method",
			"type": "options",
			"default": "get",
			"description": "HTTP request method Telnyx will use to interact with your XML Translator webhooks. Either 'get' or 'post'.",
			"options": [
				{
					"name": "Get",
					"value": "get"
				},
				{
					"name": "Post",
					"value": "post"
				}
			],
			"routing": {
				"send": {
					"property": "voice_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Update Texml Application"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Voice Url",
			"name": "voice_url",
			"type": "string",
			"default": "https://example.com",
			"description": "URL to which Telnyx will deliver your XML Translator webhooks.",
			"routing": {
				"send": {
					"property": "voice_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Te XML Applications"
					],
					"operation": [
						"Update Texml Application"
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
						"Te XML Applications"
					],
					"operation": [
						"Update Texml Application"
					]
				}
			}
		},
];
