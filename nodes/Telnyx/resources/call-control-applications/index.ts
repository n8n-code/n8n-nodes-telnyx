import type { INodeProperties } from 'n8n-workflow';

export const callControlApplicationsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Call Control Applications"
					]
				}
			},
			"options": [
				{
					"name": "List Call Control Applications",
					"value": "List Call Control Applications",
					"action": "List call control applications",
					"description": "Return a list of call control applications.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/call_control_applications"
						}
					}
				},
				{
					"name": "Create Call Control Application",
					"value": "Create Call Control Application",
					"action": "Create a call control application",
					"description": "Create a call control application.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/call_control_applications"
						}
					}
				},
				{
					"name": "Delete Call Control Application",
					"value": "Delete Call Control Application",
					"action": "Delete a call control application",
					"description": "Deletes a call control application.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/call_control_applications/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Retrieve Call Control Application",
					"value": "Retrieve Call Control Application",
					"action": "Retrieve a call control application",
					"description": "Retrieves the details of an existing call control application.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/call_control_applications/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Call Control Application",
					"value": "Update Call Control Application",
					"action": "Update a call control application",
					"description": "Updates settings of an existing call control application.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/call_control_applications/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /call_control_applications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Control Applications"
					],
					"operation": [
						"List Call Control Applications"
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
						"Call Control Applications"
					],
					"operation": [
						"List Call Control Applications"
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
						"Call Control Applications"
					],
					"operation": [
						"List Call Control Applications"
					]
				}
			}
		},
		{
			"displayName": "Filter Application Name Contains",
			"name": "filter%5Bapplication_name%5D%5Bcontains%5D",
			"description": "If present, applications with <code>application_name</code> containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.",
			"default": "null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[application_name][contains]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Control Applications"
					],
					"operation": [
						"List Call Control Applications"
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
						"Call Control Applications"
					],
					"operation": [
						"List Call Control Applications"
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
						"Call Control Applications"
					],
					"operation": [
						"List Call Control Applications"
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
						"Call Control Applications"
					],
					"operation": [
						"List Call Control Applications"
					]
				}
			}
		},
		{
			"displayName": "POST /call_control_applications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Control Applications"
					],
					"operation": [
						"Create Call Control Application"
					]
				}
			}
		},
		{
			"displayName": "Active",
			"name": "active",
			"type": "boolean",
			"default": true,
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
						"Call Control Applications"
					],
					"operation": [
						"Create Call Control Application"
					]
				}
			}
		},
		{
			"displayName": "Anchorsite Override",
			"name": "anchorsite_override",
			"type": "options",
			"default": "\"Amsterdam, Netherlands\"",
			"description": "<code>Latency</code> directs Telnyx to route media through the site with the lowest round-trip time to the user's connection. Telnyx calculates this time using ICMP ping messages. This can be disabled by specifying a site to handle all media.\n",
			"options": [
				{
					"name": "Latency",
					"value": "\"Latency\""
				},
				{
					"name": "Chicago IL",
					"value": "\"Chicago, IL\""
				},
				{
					"name": "Ashburn VA",
					"value": "\"Ashburn, VA\""
				},
				{
					"name": "San Jose CA",
					"value": "\"San Jose, CA\""
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
						"Call Control Applications"
					],
					"operation": [
						"Create Call Control Application"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Application Name",
			"name": "application_name",
			"type": "string",
			"default": "call-router",
			"description": "A user-assigned name to help manage the application.",
			"routing": {
				"send": {
					"property": "application_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Control Applications"
					],
					"operation": [
						"Create Call Control Application"
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
						"Call Control Applications"
					],
					"operation": [
						"Create Call Control Application"
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
						"Call Control Applications"
					],
					"operation": [
						"Create Call Control Application"
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
						"Call Control Applications"
					],
					"operation": [
						"Create Call Control Application"
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
						"Call Control Applications"
					],
					"operation": [
						"Create Call Control Application"
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
						"Call Control Applications"
					],
					"operation": [
						"Create Call Control Application"
					]
				}
			}
		},
		{
			"displayName": "Webhook Api Version",
			"name": "webhook_api_version",
			"type": "options",
			"default": "1",
			"description": "Determines which webhook format will be used, Telnyx API v1 or v2.",
			"options": [
				{
					"name": "1",
					"value": "1"
				},
				{
					"name": "2",
					"value": "2"
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
						"Call Control Applications"
					],
					"operation": [
						"Create Call Control Application"
					]
				}
			}
		},
		{
			"displayName": "Webhook Event Failover Url",
			"name": "webhook_event_failover_url",
			"type": "string",
			"default": "https://failover.example.com",
			"description": "The failover URL where webhooks related to this connection will be sent if sending to the primary URL fails. Must include a scheme, such as 'https'.",
			"routing": {
				"send": {
					"property": "webhook_event_failover_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Control Applications"
					],
					"operation": [
						"Create Call Control Application"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Webhook Event Url",
			"name": "webhook_event_url",
			"type": "string",
			"default": "https://example.com",
			"description": "The URL where webhooks related to this connection will be sent. Must include a scheme, such as 'https'.",
			"routing": {
				"send": {
					"property": "webhook_event_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Control Applications"
					],
					"operation": [
						"Create Call Control Application"
					]
				}
			}
		},
		{
			"displayName": "Webhook Timeout Secs",
			"name": "webhook_timeout_secs",
			"type": "number",
			"default": 25,
			"description": "Specifies how many seconds to wait before timing out a webhook.",
			"routing": {
				"send": {
					"property": "webhook_timeout_secs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Control Applications"
					],
					"operation": [
						"Create Call Control Application"
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
						"Call Control Applications"
					],
					"operation": [
						"Create Call Control Application"
					]
				}
			}
		},
		{
			"displayName": "DELETE /call_control_applications/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Control Applications"
					],
					"operation": [
						"Delete Call Control Application"
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
						"Call Control Applications"
					],
					"operation": [
						"Delete Call Control Application"
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
						"Call Control Applications"
					],
					"operation": [
						"Delete Call Control Application"
					]
				}
			}
		},
		{
			"displayName": "GET /call_control_applications/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Control Applications"
					],
					"operation": [
						"Retrieve Call Control Application"
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
						"Call Control Applications"
					],
					"operation": [
						"Retrieve Call Control Application"
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
						"Call Control Applications"
					],
					"operation": [
						"Retrieve Call Control Application"
					]
				}
			}
		},
		{
			"displayName": "PATCH /call_control_applications/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Control Applications"
					],
					"operation": [
						"Update Call Control Application"
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
						"Call Control Applications"
					],
					"operation": [
						"Update Call Control Application"
					]
				}
			}
		},
		{
			"displayName": "Active",
			"name": "active",
			"type": "boolean",
			"default": true,
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
						"Call Control Applications"
					],
					"operation": [
						"Update Call Control Application"
					]
				}
			}
		},
		{
			"displayName": "Anchorsite Override",
			"name": "anchorsite_override",
			"type": "options",
			"default": "\"Amsterdam, Netherlands\"",
			"description": "<code>Latency</code> directs Telnyx to route media through the site with the lowest round-trip time to the user's connection. Telnyx calculates this time using ICMP ping messages. This can be disabled by specifying a site to handle all media.\n",
			"options": [
				{
					"name": "Latency",
					"value": "\"Latency\""
				},
				{
					"name": "Chicago IL",
					"value": "\"Chicago, IL\""
				},
				{
					"name": "Ashburn VA",
					"value": "\"Ashburn, VA\""
				},
				{
					"name": "San Jose CA",
					"value": "\"San Jose, CA\""
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
						"Call Control Applications"
					],
					"operation": [
						"Update Call Control Application"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Application Name",
			"name": "application_name",
			"type": "string",
			"default": "call-router",
			"description": "A user-assigned name to help manage the application.",
			"routing": {
				"send": {
					"property": "application_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Control Applications"
					],
					"operation": [
						"Update Call Control Application"
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
						"Call Control Applications"
					],
					"operation": [
						"Update Call Control Application"
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
						"Call Control Applications"
					],
					"operation": [
						"Update Call Control Application"
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
						"Call Control Applications"
					],
					"operation": [
						"Update Call Control Application"
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
						"Call Control Applications"
					],
					"operation": [
						"Update Call Control Application"
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
						"Call Control Applications"
					],
					"operation": [
						"Update Call Control Application"
					]
				}
			}
		},
		{
			"displayName": "Webhook Api Version",
			"name": "webhook_api_version",
			"type": "options",
			"default": "1",
			"description": "Determines which webhook format will be used, Telnyx API v1 or v2.",
			"options": [
				{
					"name": "1",
					"value": "1"
				},
				{
					"name": "2",
					"value": "2"
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
						"Call Control Applications"
					],
					"operation": [
						"Update Call Control Application"
					]
				}
			}
		},
		{
			"displayName": "Webhook Event Failover Url",
			"name": "webhook_event_failover_url",
			"type": "string",
			"default": "https://failover.example.com",
			"description": "The failover URL where webhooks related to this connection will be sent if sending to the primary URL fails. Must include a scheme, such as 'https'.",
			"routing": {
				"send": {
					"property": "webhook_event_failover_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Control Applications"
					],
					"operation": [
						"Update Call Control Application"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Webhook Event Url",
			"name": "webhook_event_url",
			"type": "string",
			"default": "https://example.com",
			"description": "The URL where webhooks related to this connection will be sent. Must include a scheme, such as 'https'.",
			"routing": {
				"send": {
					"property": "webhook_event_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Control Applications"
					],
					"operation": [
						"Update Call Control Application"
					]
				}
			}
		},
		{
			"displayName": "Webhook Timeout Secs",
			"name": "webhook_timeout_secs",
			"type": "number",
			"default": 25,
			"description": "Specifies how many seconds to wait before timing out a webhook.",
			"routing": {
				"send": {
					"property": "webhook_timeout_secs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Control Applications"
					],
					"operation": [
						"Update Call Control Application"
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
						"Call Control Applications"
					],
					"operation": [
						"Update Call Control Application"
					]
				}
			}
		},
];
