import type { INodeProperties } from 'n8n-workflow';

export const fqdnConnectionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"FQDN Connections"
					]
				}
			},
			"options": [
				{
					"name": "List Fqdn Connections",
					"value": "List Fqdn Connections",
					"action": "List FQDN connections",
					"description": "Returns a list of your FQDN connections.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/fqdn_connections"
						}
					}
				},
				{
					"name": "Create Fqdn Connection",
					"value": "Create Fqdn Connection",
					"action": "Create an FQDN connection",
					"description": "Creates a FQDN connection.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/fqdn_connections"
						}
					}
				},
				{
					"name": "Delete Fqdn Connection",
					"value": "Delete Fqdn Connection",
					"action": "Delete an FQDN connection",
					"description": "Deletes an FQDN connection.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/fqdn_connections/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Retrieve Fqdn Connection",
					"value": "Retrieve Fqdn Connection",
					"action": "Retrieve an FQDN connection",
					"description": "Retrieves the details of an existing FQDN connection.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/fqdn_connections/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Fqdn Connection",
					"value": "Update Fqdn Connection",
					"action": "Update an FQDN connection",
					"description": "Updates settings of an existing FQDN connection.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/fqdn_connections/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /fqdn_connections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"FQDN Connections"
					],
					"operation": [
						"List Fqdn Connections"
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
						"FQDN Connections"
					],
					"operation": [
						"List Fqdn Connections"
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
						"FQDN Connections"
					],
					"operation": [
						"List Fqdn Connections"
					]
				}
			}
		},
		{
			"displayName": "Filter Connection Name Contains",
			"name": "filter%5Bconnection_name%5D%5Bcontains%5D",
			"description": "If present, connections with <code>connection_name</code> containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.",
			"default": null,
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[connection_name][contains]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"FQDN Connections"
					],
					"operation": [
						"List Fqdn Connections"
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
						"FQDN Connections"
					],
					"operation": [
						"List Fqdn Connections"
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
						"FQDN Connections"
					],
					"operation": [
						"List Fqdn Connections"
					]
				}
			}
		},
		{
			"displayName": "POST /fqdn_connections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"FQDN Connections"
					],
					"operation": [
						"Create Fqdn Connection"
					]
				}
			}
		},
		{
			"displayName": "Active",
			"name": "active",
			"type": "boolean",
			"default": true,
			"description": "Defaults to true",
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
						"FQDN Connections"
					],
					"operation": [
						"Create Fqdn Connection"
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
						"FQDN Connections"
					],
					"operation": [
						"Create Fqdn Connection"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Connection Name",
			"name": "connection_name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "connection_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"FQDN Connections"
					],
					"operation": [
						"Create Fqdn Connection"
					]
				}
			}
		},
		{
			"displayName": "Default On Hold Comfort Noise Enabled",
			"name": "default_on_hold_comfort_noise_enabled",
			"type": "boolean",
			"default": true,
			"description": "When enabled, Telnyx will generate comfort noise when you place the call on hold. If disabled, you will need to generate comfort noise or on hold music to avoid RTP timeout.",
			"routing": {
				"send": {
					"property": "default_on_hold_comfort_noise_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"FQDN Connections"
					],
					"operation": [
						"Create Fqdn Connection"
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
						"FQDN Connections"
					],
					"operation": [
						"Create Fqdn Connection"
					]
				}
			}
		},
		{
			"displayName": "Encode Contact Header Enabled",
			"name": "encode_contact_header_enabled",
			"type": "boolean",
			"default": false,
			"description": "Encode the SIP contact header sent by Telnyx to avoid issues for NAT or ALG scenarios.",
			"routing": {
				"send": {
					"property": "encode_contact_header_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"FQDN Connections"
					],
					"operation": [
						"Create Fqdn Connection"
					]
				}
			}
		},
		{
			"displayName": "Encrypted Media",
			"name": "encrypted_media",
			"type": "options",
			"default": "SRTP",
			"description": "Enable use of SRTP or ZRTP for encryption. Valid values are those listed or null. Cannot be set to non-null if the transport_portocol is TLS.",
			"options": [
				{
					"name": "SRTP",
					"value": "SRTP"
				},
				{
					"name": "ZRTP",
					"value": "ZRTP"
				}
			],
			"routing": {
				"send": {
					"property": "encrypted_media",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"FQDN Connections"
					],
					"operation": [
						"Create Fqdn Connection"
					]
				}
			}
		},
		{
			"displayName": "Inbound",
			"name": "inbound",
			"type": "json",
			"default": "{\n  \"ani_number_format\": \"+E.164\",\n  \"channel_limit\": 10,\n  \"codecs\": [\n    \"G722\"\n  ],\n  \"default_routing_method\": \"sequential\",\n  \"dnis_number_format\": \"+e164\",\n  \"generate_ringback_tone\": true,\n  \"isup_headers_enabled\": true,\n  \"prack_enabled\": true,\n  \"privacy_zone_enabled\": true,\n  \"sip_compact_headers_enabled\": true,\n  \"sip_region\": \"US\",\n  \"sip_subdomain\": \"test\",\n  \"sip_subdomain_receive_settings\": \"only_my_connections\",\n  \"timeout_1xx_secs\": 10,\n  \"timeout_2xx_secs\": 20\n}",
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
						"FQDN Connections"
					],
					"operation": [
						"Create Fqdn Connection"
					]
				}
			}
		},
		{
			"displayName": "Onnet T 38 Passthrough Enabled",
			"name": "onnet_t38_passthrough_enabled",
			"type": "boolean",
			"default": false,
			"description": "Enable on-net T38 if you prefer the sender and receiver negotiating T38 directly if both are on the Telnyx network. If this is disabled, Telnyx will be able to use T38 on just one leg of the call depending on each leg's settings.",
			"routing": {
				"send": {
					"property": "onnet_t38_passthrough_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"FQDN Connections"
					],
					"operation": [
						"Create Fqdn Connection"
					]
				}
			}
		},
		{
			"displayName": "Rtcp Settings",
			"name": "rtcp_settings",
			"type": "json",
			"default": "{\n  \"capture_enabled\": true,\n  \"port\": \"rtcp-mux\",\n  \"report_frequency_secs\": 10\n}",
			"routing": {
				"send": {
					"property": "rtcp_settings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"FQDN Connections"
					],
					"operation": [
						"Create Fqdn Connection"
					]
				}
			}
		},
		{
			"displayName": "Transport Protocol",
			"name": "transport_protocol",
			"type": "options",
			"default": "UDP",
			"description": "One of UDP, TLS, or TCP. Applies only to connections with IP authentication or FQDN authentication.",
			"options": [
				{
					"name": "UDP",
					"value": "UDP"
				},
				{
					"name": "TCP",
					"value": "TCP"
				},
				{
					"name": "TLS",
					"value": "TLS"
				}
			],
			"routing": {
				"send": {
					"property": "transport_protocol",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"FQDN Connections"
					],
					"operation": [
						"Create Fqdn Connection"
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
						"FQDN Connections"
					],
					"operation": [
						"Create Fqdn Connection"
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
						"FQDN Connections"
					],
					"operation": [
						"Create Fqdn Connection"
					]
				}
			}
		},
		{
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
						"FQDN Connections"
					],
					"operation": [
						"Create Fqdn Connection"
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
						"FQDN Connections"
					],
					"operation": [
						"Create Fqdn Connection"
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
						"FQDN Connections"
					],
					"operation": [
						"Create Fqdn Connection"
					]
				}
			}
		},
		{
			"displayName": "DELETE /fqdn_connections/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"FQDN Connections"
					],
					"operation": [
						"Delete Fqdn Connection"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "FQDN Connection ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"FQDN Connections"
					],
					"operation": [
						"Delete Fqdn Connection"
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
						"FQDN Connections"
					],
					"operation": [
						"Delete Fqdn Connection"
					]
				}
			}
		},
		{
			"displayName": "GET /fqdn_connections/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"FQDN Connections"
					],
					"operation": [
						"Retrieve Fqdn Connection"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "FQDN Connection ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"FQDN Connections"
					],
					"operation": [
						"Retrieve Fqdn Connection"
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
						"FQDN Connections"
					],
					"operation": [
						"Retrieve Fqdn Connection"
					]
				}
			}
		},
		{
			"displayName": "PATCH /fqdn_connections/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"FQDN Connections"
					],
					"operation": [
						"Update Fqdn Connection"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "FQDN Connection ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"FQDN Connections"
					],
					"operation": [
						"Update Fqdn Connection"
					]
				}
			}
		},
		{
			"displayName": "Active",
			"name": "active",
			"type": "boolean",
			"default": true,
			"description": "Defaults to true",
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
						"FQDN Connections"
					],
					"operation": [
						"Update Fqdn Connection"
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
						"FQDN Connections"
					],
					"operation": [
						"Update Fqdn Connection"
					]
				}
			}
		},
		{
			"displayName": "Connection Name",
			"name": "connection_name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "connection_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"FQDN Connections"
					],
					"operation": [
						"Update Fqdn Connection"
					]
				}
			}
		},
		{
			"displayName": "Default On Hold Comfort Noise Enabled",
			"name": "default_on_hold_comfort_noise_enabled",
			"type": "boolean",
			"default": true,
			"description": "When enabled, Telnyx will generate comfort noise when you place the call on hold. If disabled, you will need to generate comfort noise or on hold music to avoid RTP timeout.",
			"routing": {
				"send": {
					"property": "default_on_hold_comfort_noise_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"FQDN Connections"
					],
					"operation": [
						"Update Fqdn Connection"
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
						"FQDN Connections"
					],
					"operation": [
						"Update Fqdn Connection"
					]
				}
			}
		},
		{
			"displayName": "Encode Contact Header Enabled",
			"name": "encode_contact_header_enabled",
			"type": "boolean",
			"default": false,
			"description": "Encode the SIP contact header sent by Telnyx to avoid issues for NAT or ALG scenarios.",
			"routing": {
				"send": {
					"property": "encode_contact_header_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"FQDN Connections"
					],
					"operation": [
						"Update Fqdn Connection"
					]
				}
			}
		},
		{
			"displayName": "Encrypted Media",
			"name": "encrypted_media",
			"type": "options",
			"default": "SRTP",
			"description": "Enable use of SRTP or ZRTP for encryption. Valid values are those listed or null. Cannot be set to non-null if the transport_portocol is TLS.",
			"options": [
				{
					"name": "SRTP",
					"value": "SRTP"
				},
				{
					"name": "ZRTP",
					"value": "ZRTP"
				}
			],
			"routing": {
				"send": {
					"property": "encrypted_media",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"FQDN Connections"
					],
					"operation": [
						"Update Fqdn Connection"
					]
				}
			}
		},
		{
			"displayName": "Inbound",
			"name": "inbound",
			"type": "json",
			"default": "{\n  \"ani_number_format\": \"+E.164\",\n  \"channel_limit\": 10,\n  \"codecs\": [\n    \"G722\"\n  ],\n  \"default_routing_method\": \"sequential\",\n  \"dnis_number_format\": \"+e164\",\n  \"generate_ringback_tone\": true,\n  \"isup_headers_enabled\": true,\n  \"prack_enabled\": true,\n  \"privacy_zone_enabled\": true,\n  \"sip_compact_headers_enabled\": true,\n  \"sip_region\": \"US\",\n  \"sip_subdomain\": \"test\",\n  \"sip_subdomain_receive_settings\": \"only_my_connections\",\n  \"timeout_1xx_secs\": 10,\n  \"timeout_2xx_secs\": 20\n}",
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
						"FQDN Connections"
					],
					"operation": [
						"Update Fqdn Connection"
					]
				}
			}
		},
		{
			"displayName": "Onnet T 38 Passthrough Enabled",
			"name": "onnet_t38_passthrough_enabled",
			"type": "boolean",
			"default": false,
			"description": "Enable on-net T38 if you prefer that the sender and receiver negotiate T38 directly when both are on the Telnyx network. If this is disabled, Telnyx will be able to use T38 on just one leg of the call according to each leg's settings.",
			"routing": {
				"send": {
					"property": "onnet_t38_passthrough_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"FQDN Connections"
					],
					"operation": [
						"Update Fqdn Connection"
					]
				}
			}
		},
		{
			"displayName": "Rtcp Settings",
			"name": "rtcp_settings",
			"type": "json",
			"default": "{\n  \"capture_enabled\": true,\n  \"port\": \"rtcp-mux\",\n  \"report_frequency_secs\": 10\n}",
			"routing": {
				"send": {
					"property": "rtcp_settings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"FQDN Connections"
					],
					"operation": [
						"Update Fqdn Connection"
					]
				}
			}
		},
		{
			"displayName": "Transport Protocol",
			"name": "transport_protocol",
			"type": "options",
			"default": "UDP",
			"description": "One of UDP, TLS, or TCP. Applies only to connections with IP authentication or FQDN authentication.",
			"options": [
				{
					"name": "UDP",
					"value": "UDP"
				},
				{
					"name": "TCP",
					"value": "TCP"
				},
				{
					"name": "TLS",
					"value": "TLS"
				}
			],
			"routing": {
				"send": {
					"property": "transport_protocol",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"FQDN Connections"
					],
					"operation": [
						"Update Fqdn Connection"
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
						"FQDN Connections"
					],
					"operation": [
						"Update Fqdn Connection"
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
						"FQDN Connections"
					],
					"operation": [
						"Update Fqdn Connection"
					]
				}
			}
		},
		{
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
						"FQDN Connections"
					],
					"operation": [
						"Update Fqdn Connection"
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
						"FQDN Connections"
					],
					"operation": [
						"Update Fqdn Connection"
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
						"FQDN Connections"
					],
					"operation": [
						"Update Fqdn Connection"
					]
				}
			}
		},
];
