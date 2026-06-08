import type { INodeProperties } from 'n8n-workflow';

export const iPsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"I Ps"
					]
				}
			},
			"options": [
				{
					"name": "List Ips",
					"value": "List Ips",
					"action": "List Ips",
					"description": "Get all IPs belonging to the user that match the given filters.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ips"
						}
					}
				},
				{
					"name": "Create Ip",
					"value": "Create Ip",
					"action": "Create an Ip",
					"description": "Create a new IP object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/ips"
						}
					}
				},
				{
					"name": "Delete Ip",
					"value": "Delete Ip",
					"action": "Delete an Ip",
					"description": "Delete an IP.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/ips/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Retrieve Ip",
					"value": "Retrieve Ip",
					"action": "Retrieve an Ip",
					"description": "Return the details regarding a specific IP.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ips/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Ip",
					"value": "Update Ip",
					"action": "Update an Ip",
					"description": "Update the details of a specific IP.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/ips/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /ips",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"I Ps"
					],
					"operation": [
						"List Ips"
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
						"I Ps"
					],
					"operation": [
						"List Ips"
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
						"I Ps"
					],
					"operation": [
						"List Ips"
					]
				}
			}
		},
		{
			"displayName": "Filter Connection Id",
			"name": "filter%5Bconnection_id%5D",
			"description": "ID of the IP Connection to which this IP should be attached.",
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
						"I Ps"
					],
					"operation": [
						"List Ips"
					]
				}
			}
		},
		{
			"displayName": "Filter Ip Address",
			"name": "filter%5Bip_address%5D",
			"description": "IP adddress represented by this resource.",
			"default": "192.168.0.0",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[ip_address]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"I Ps"
					],
					"operation": [
						"List Ips"
					]
				}
			}
		},
		{
			"displayName": "Filter Port",
			"name": "filter%5Bport%5D",
			"description": "Port to use when connecting to this IP.",
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
						"I Ps"
					],
					"operation": [
						"List Ips"
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
						"I Ps"
					],
					"operation": [
						"List Ips"
					]
				}
			}
		},
		{
			"displayName": "POST /ips",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"I Ps"
					],
					"operation": [
						"Create Ip"
					]
				}
			}
		},
		{
			"displayName": "Connection Id",
			"name": "connection_id",
			"type": "string",
			"default": "",
			"description": "ID of the IP Connection to which this IP should be attached.",
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
						"I Ps"
					],
					"operation": [
						"Create Ip"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ip Address",
			"name": "ip_address",
			"type": "string",
			"default": "192.168.0.0",
			"description": "IP adddress represented by this resource.",
			"routing": {
				"send": {
					"property": "ip_address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"I Ps"
					],
					"operation": [
						"Create Ip"
					]
				}
			}
		},
		{
			"displayName": "Port",
			"name": "port",
			"type": "number",
			"default": 5060,
			"description": "Port to use when connecting to this IP.",
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
						"I Ps"
					],
					"operation": [
						"Create Ip"
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
						"I Ps"
					],
					"operation": [
						"Create Ip"
					]
				}
			}
		},
		{
			"displayName": "DELETE /ips/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"I Ps"
					],
					"operation": [
						"Delete Ip"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Identifies the type of resource.",
			"default": "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"I Ps"
					],
					"operation": [
						"Delete Ip"
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
						"I Ps"
					],
					"operation": [
						"Delete Ip"
					]
				}
			}
		},
		{
			"displayName": "GET /ips/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"I Ps"
					],
					"operation": [
						"Retrieve Ip"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Identifies the type of resource.",
			"default": "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"I Ps"
					],
					"operation": [
						"Retrieve Ip"
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
						"I Ps"
					],
					"operation": [
						"Retrieve Ip"
					]
				}
			}
		},
		{
			"displayName": "PATCH /ips/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"I Ps"
					],
					"operation": [
						"Update Ip"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Identifies the type of resource.",
			"default": "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"I Ps"
					],
					"operation": [
						"Update Ip"
					]
				}
			}
		},
		{
			"displayName": "Connection Id",
			"name": "connection_id",
			"type": "string",
			"default": "",
			"description": "ID of the IP Connection to which this IP should be attached.",
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
						"I Ps"
					],
					"operation": [
						"Update Ip"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ip Address",
			"name": "ip_address",
			"type": "string",
			"default": "192.168.0.0",
			"description": "IP adddress represented by this resource.",
			"routing": {
				"send": {
					"property": "ip_address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"I Ps"
					],
					"operation": [
						"Update Ip"
					]
				}
			}
		},
		{
			"displayName": "Port",
			"name": "port",
			"type": "number",
			"default": 5060,
			"description": "Port to use when connecting to this IP.",
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
						"I Ps"
					],
					"operation": [
						"Update Ip"
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
						"I Ps"
					],
					"operation": [
						"Update Ip"
					]
				}
			}
		},
];
