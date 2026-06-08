import type { INodeProperties } from 'n8n-workflow';

export const programmableFaxApplicationsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Programmable Fax Applications"
					]
				}
			},
			"options": [
				{
					"name": "List Fax Applications",
					"value": "List Fax Applications",
					"action": "List all Fax Applications",
					"description": "This endpoint returns a list of your Fax Applications inside the 'data' attribute of the response. You can adjust which applications are listed by using filters. Fax Applications are used to configure how you send and receive faxes using the Programmable Fax API with Telnyx.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/fax_applications"
						}
					}
				},
				{
					"name": "Create Fax Application",
					"value": "Create Fax Application",
					"action": "Creates a Fax Application",
					"description": "Creates a new Fax Application based on the parameters sent in the request. The application name and webhook URL are required. Once created, you can assign phone numbers to your application using the `/phone_numbers` endpoint.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/fax_applications"
						}
					}
				},
				{
					"name": "Delete Fax Application",
					"value": "Delete Fax Application",
					"action": "Deletes a Fax Application",
					"description": "Permanently deletes a Fax Application. Deletion may be prevented if the application is in use by phone numbers.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/fax_applications/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Fax Application",
					"value": "Get Fax Application",
					"action": "Retrieve a Fax Application",
					"description": "Return the details of an existing Fax Application inside the 'data' attribute of the response.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/fax_applications/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Fax Application",
					"value": "Update Fax Application",
					"action": "Update a Fax Application",
					"description": "Updates settings of an existing Fax Application based on the parameters of the request.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/fax_applications/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /fax_applications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Programmable Fax Applications"
					],
					"operation": [
						"List Fax Applications"
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
						"Programmable Fax Applications"
					],
					"operation": [
						"List Fax Applications"
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
						"Programmable Fax Applications"
					],
					"operation": [
						"List Fax Applications"
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
						"Programmable Fax Applications"
					],
					"operation": [
						"List Fax Applications"
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
						"Programmable Fax Applications"
					],
					"operation": [
						"List Fax Applications"
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
						"Programmable Fax Applications"
					],
					"operation": [
						"List Fax Applications"
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
						"Programmable Fax Applications"
					],
					"operation": [
						"List Fax Applications"
					]
				}
			}
		},
		{
			"displayName": "POST /fax_applications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Programmable Fax Applications"
					],
					"operation": [
						"Create Fax Application"
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
						"Programmable Fax Applications"
					],
					"operation": [
						"Create Fax Application"
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
						"Programmable Fax Applications"
					],
					"operation": [
						"Create Fax Application"
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
						"Programmable Fax Applications"
					],
					"operation": [
						"Create Fax Application"
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
						"Programmable Fax Applications"
					],
					"operation": [
						"Create Fax Application"
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
						"Programmable Fax Applications"
					],
					"operation": [
						"Create Fax Application"
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
						"Programmable Fax Applications"
					],
					"operation": [
						"Create Fax Application"
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
						"Programmable Fax Applications"
					],
					"operation": [
						"Create Fax Application"
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
						"Programmable Fax Applications"
					],
					"operation": [
						"Create Fax Application"
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
						"Programmable Fax Applications"
					],
					"operation": [
						"Create Fax Application"
					]
				}
			}
		},
		{
			"displayName": "DELETE /fax_applications/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Programmable Fax Applications"
					],
					"operation": [
						"Delete Fax Application"
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
						"Programmable Fax Applications"
					],
					"operation": [
						"Delete Fax Application"
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
						"Programmable Fax Applications"
					],
					"operation": [
						"Delete Fax Application"
					]
				}
			}
		},
		{
			"displayName": "GET /fax_applications/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Programmable Fax Applications"
					],
					"operation": [
						"Get Fax Application"
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
						"Programmable Fax Applications"
					],
					"operation": [
						"Get Fax Application"
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
						"Programmable Fax Applications"
					],
					"operation": [
						"Get Fax Application"
					]
				}
			}
		},
		{
			"displayName": "PATCH /fax_applications/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Programmable Fax Applications"
					],
					"operation": [
						"Update Fax Application"
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
						"Programmable Fax Applications"
					],
					"operation": [
						"Update Fax Application"
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
						"Programmable Fax Applications"
					],
					"operation": [
						"Update Fax Application"
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
						"Programmable Fax Applications"
					],
					"operation": [
						"Update Fax Application"
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
						"Programmable Fax Applications"
					],
					"operation": [
						"Update Fax Application"
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
						"Programmable Fax Applications"
					],
					"operation": [
						"Update Fax Application"
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
						"Programmable Fax Applications"
					],
					"operation": [
						"Update Fax Application"
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
						"Programmable Fax Applications"
					],
					"operation": [
						"Update Fax Application"
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
						"Programmable Fax Applications"
					],
					"operation": [
						"Update Fax Application"
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
						"Programmable Fax Applications"
					],
					"operation": [
						"Update Fax Application"
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
						"Programmable Fax Applications"
					],
					"operation": [
						"Update Fax Application"
					]
				}
			}
		},
];
