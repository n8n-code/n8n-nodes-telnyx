import type { INodeProperties } from 'n8n-workflow';

export const fqdNsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"FQD Ns"
					]
				}
			},
			"options": [
				{
					"name": "List Fqdns",
					"value": "List Fqdns",
					"action": "List FQDNs",
					"description": "Get all FQDNs belonging to the user that match the given filters.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/fqdns"
						}
					}
				},
				{
					"name": "Create Fqdn",
					"value": "Create Fqdn",
					"action": "Create an FQDN",
					"description": "Create a new FQDN object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/fqdns"
						}
					}
				},
				{
					"name": "Delete Fqdn",
					"value": "Delete Fqdn",
					"action": "Delete an FQDN",
					"description": "Delete an FQDN.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/fqdns/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Retrieve Fqdn",
					"value": "Retrieve Fqdn",
					"action": "Retrieve an FQDN",
					"description": "Return the details regarding a specific FQDN.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/fqdns/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Fqdn",
					"value": "Update Fqdn",
					"action": "Update an FQDN",
					"description": "Update the details of a specific FQDN.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/fqdns/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /fqdns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"FQD Ns"
					],
					"operation": [
						"List Fqdns"
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
						"FQD Ns"
					],
					"operation": [
						"List Fqdns"
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
						"FQD Ns"
					],
					"operation": [
						"List Fqdns"
					]
				}
			}
		},
		{
			"displayName": "Filter Connection Id",
			"name": "filter%5Bconnection_id%5D",
			"description": "ID of the FQDN connection to which the FQDN belongs.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[connection_id]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"FQD Ns"
					],
					"operation": [
						"List Fqdns"
					]
				}
			}
		},
		{
			"displayName": "Filter Fqdn",
			"name": "filter%5Bfqdn%5D",
			"description": "FQDN represented by the resource.",
			"default": "example.com",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[fqdn]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"FQD Ns"
					],
					"operation": [
						"List Fqdns"
					]
				}
			}
		},
		{
			"displayName": "Filter Port",
			"name": "filter%5Bport%5D",
			"description": "Port to use when connecting to the FQDN.",
			"default": 5060,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[port]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"FQD Ns"
					],
					"operation": [
						"List Fqdns"
					]
				}
			}
		},
		{
			"displayName": "Filter Dns Record Type",
			"name": "filter%5Bdns_record_type%5D",
			"description": "DNS record type used by the FQDN.",
			"default": "a",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[dns_record_type]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"FQD Ns"
					],
					"operation": [
						"List Fqdns"
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
						"FQD Ns"
					],
					"operation": [
						"List Fqdns"
					]
				}
			}
		},
		{
			"displayName": "POST /fqdns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"FQD Ns"
					],
					"operation": [
						"Create Fqdn"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Connection Id",
			"name": "connection_id",
			"type": "string",
			"default": "",
			"description": "ID of the FQDN connection to which this IP should be attached.",
			"routing": {
				"send": {
					"property": "connection_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"FQD Ns"
					],
					"operation": [
						"Create Fqdn"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Dns Record Type",
			"name": "dns_record_type",
			"type": "string",
			"default": "a",
			"description": "The DNS record type for the FQDN. For cases where a port is not set, the DNS record type must be 'srv'. For cases where a port is set, the DNS record type must be 'a'. If the DNS record type is 'a' and a port is not specified, 5060 will be used.",
			"routing": {
				"send": {
					"property": "dns_record_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"FQD Ns"
					],
					"operation": [
						"Create Fqdn"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Fqdn",
			"name": "fqdn",
			"type": "string",
			"default": "example.com",
			"description": "FQDN represented by this resource.",
			"routing": {
				"send": {
					"property": "fqdn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"FQD Ns"
					],
					"operation": [
						"Create Fqdn"
					]
				}
			}
		},
		{
			"displayName": "Port",
			"name": "port",
			"type": "number",
			"default": 5060,
			"description": "Port to use when connecting to this FQDN.",
			"routing": {
				"send": {
					"property": "port",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"FQD Ns"
					],
					"operation": [
						"Create Fqdn"
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
						"FQD Ns"
					],
					"operation": [
						"Create Fqdn"
					]
				}
			}
		},
		{
			"displayName": "DELETE /fqdns/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"FQD Ns"
					],
					"operation": [
						"Delete Fqdn"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Identifies the resource.",
			"default": "1517907029795014409",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"FQD Ns"
					],
					"operation": [
						"Delete Fqdn"
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
						"FQD Ns"
					],
					"operation": [
						"Delete Fqdn"
					]
				}
			}
		},
		{
			"displayName": "GET /fqdns/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"FQD Ns"
					],
					"operation": [
						"Retrieve Fqdn"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Identifies the resource.",
			"default": "1517907029795014409",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"FQD Ns"
					],
					"operation": [
						"Retrieve Fqdn"
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
						"FQD Ns"
					],
					"operation": [
						"Retrieve Fqdn"
					]
				}
			}
		},
		{
			"displayName": "PATCH /fqdns/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"FQD Ns"
					],
					"operation": [
						"Update Fqdn"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Identifies the resource.",
			"default": "1517907029795014409",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"FQD Ns"
					],
					"operation": [
						"Update Fqdn"
					]
				}
			}
		},
		{
			"displayName": "Connection Id",
			"name": "connection_id",
			"type": "string",
			"default": "",
			"description": "ID of the FQDN connection to which this IP should be attached.",
			"routing": {
				"send": {
					"property": "connection_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"FQD Ns"
					],
					"operation": [
						"Update Fqdn"
					]
				}
			}
		},
		{
			"displayName": "Dns Record Type",
			"name": "dns_record_type",
			"type": "string",
			"default": "a",
			"description": "The DNS record type for the FQDN. For cases where a port is not set, the DNS record type must be 'srv'. For cases where a port is set, the DNS record type must be 'a'. If the DNS record type is 'a' and a port is not specified, 5060 will be used.",
			"routing": {
				"send": {
					"property": "dns_record_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"FQD Ns"
					],
					"operation": [
						"Update Fqdn"
					]
				}
			}
		},
		{
			"displayName": "Fqdn",
			"name": "fqdn",
			"type": "string",
			"default": "example.com",
			"description": "FQDN represented by this resource.",
			"routing": {
				"send": {
					"property": "fqdn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"FQD Ns"
					],
					"operation": [
						"Update Fqdn"
					]
				}
			}
		},
		{
			"displayName": "Port",
			"name": "port",
			"type": "number",
			"default": 5060,
			"description": "Port to use when connecting to this FQDN.",
			"routing": {
				"send": {
					"property": "port",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"FQD Ns"
					],
					"operation": [
						"Update Fqdn"
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
						"FQD Ns"
					],
					"operation": [
						"Update Fqdn"
					]
				}
			}
		},
];
