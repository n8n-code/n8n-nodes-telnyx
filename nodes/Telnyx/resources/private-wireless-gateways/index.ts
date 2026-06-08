import type { INodeProperties } from 'n8n-workflow';

export const privateWirelessGatewaysDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Private Wireless Gateways"
					]
				}
			},
			"options": [
				{
					"name": "Get Private Wireless Gateways",
					"value": "Get Private Wireless Gateways",
					"action": "Get all Private Wireless Gateways",
					"description": "Get all Private Wireless Gateways belonging to the user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/private_wireless_gateways"
						}
					}
				},
				{
					"name": "Create Private Wireless Gateway",
					"value": "Create Private Wireless Gateway",
					"action": "Create a Private Wireless Gateway",
					"description": "Asynchronously create a Private Wireless Gateway for SIM cards for a previously created network.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/private_wireless_gateways"
						}
					}
				},
				{
					"name": "Delete Private Wireless Gateway",
					"value": "Delete Private Wireless Gateway",
					"action": "Delete a Private Wireless Gateway",
					"description": "Deletes the Private Wireless Gateway.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/private_wireless_gateways/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Private Wireless Gateway",
					"value": "Get Private Wireless Gateway",
					"action": "Get a Private Wireless Gateway",
					"description": "Retrieve information about a Private Wireless Gateway.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/private_wireless_gateways/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /private_wireless_gateways",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Private Wireless Gateways"
					],
					"operation": [
						"Get Private Wireless Gateways"
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
						"Private Wireless Gateways"
					],
					"operation": [
						"Get Private Wireless Gateways"
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
						"Private Wireless Gateways"
					],
					"operation": [
						"Get Private Wireless Gateways"
					]
				}
			}
		},
		{
			"displayName": "Filter Name",
			"name": "filter%5Bname%5D",
			"description": "The name of the Private Wireless Gateway.",
			"default": "my private gateway",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[name]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Private Wireless Gateways"
					],
					"operation": [
						"Get Private Wireless Gateways"
					]
				}
			}
		},
		{
			"displayName": "Filter Ip Range",
			"name": "filter%5Bip_range%5D",
			"description": "The IP address range of the Private Wireless Gateway.",
			"default": "192.168.0.0/24",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[ip_range]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Private Wireless Gateways"
					],
					"operation": [
						"Get Private Wireless Gateways"
					]
				}
			}
		},
		{
			"displayName": "Filter Region Code",
			"name": "filter%5Bregion_code%5D",
			"description": "The name of the region where the Private Wireless Gateway is deployed.",
			"default": "ashburn-va",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[region_code]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Private Wireless Gateways"
					],
					"operation": [
						"Get Private Wireless Gateways"
					]
				}
			}
		},
		{
			"displayName": "Filter Created At",
			"name": "filter%5Bcreated_at%5D",
			"description": "Private Wireless Gateway resource creation date.",
			"default": "2018-02-02T22:25:27.521Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[created_at]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Private Wireless Gateways"
					],
					"operation": [
						"Get Private Wireless Gateways"
					]
				}
			}
		},
		{
			"displayName": "Filter Updated At",
			"name": "filter%5Bupdated_at%5D",
			"description": "When the Private Wireless Gateway was last updated.",
			"default": "2018-02-02T22:25:27.521Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[updated_at]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Private Wireless Gateways"
					],
					"operation": [
						"Get Private Wireless Gateways"
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
						"Private Wireless Gateways"
					],
					"operation": [
						"Get Private Wireless Gateways"
					]
				}
			}
		},
		{
			"displayName": "POST /private_wireless_gateways",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Private Wireless Gateways"
					],
					"operation": [
						"Create Private Wireless Gateway"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "My private wireless gateway",
			"description": "The private wireless gateway name.",
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
						"Private Wireless Gateways"
					],
					"operation": [
						"Create Private Wireless Gateway"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Network Id",
			"name": "network_id",
			"type": "string",
			"default": "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
			"description": "The identification of the related network resource.",
			"routing": {
				"send": {
					"property": "network_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Private Wireless Gateways"
					],
					"operation": [
						"Create Private Wireless Gateway"
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
						"Private Wireless Gateways"
					],
					"operation": [
						"Create Private Wireless Gateway"
					]
				}
			}
		},
		{
			"displayName": "DELETE /private_wireless_gateways/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Private Wireless Gateways"
					],
					"operation": [
						"Delete Private Wireless Gateway"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Identifies the resource.",
			"default": "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Private Wireless Gateways"
					],
					"operation": [
						"Delete Private Wireless Gateway"
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
						"Private Wireless Gateways"
					],
					"operation": [
						"Delete Private Wireless Gateway"
					]
				}
			}
		},
		{
			"displayName": "GET /private_wireless_gateways/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Private Wireless Gateways"
					],
					"operation": [
						"Get Private Wireless Gateway"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Identifies the resource.",
			"default": "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Private Wireless Gateways"
					],
					"operation": [
						"Get Private Wireless Gateway"
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
						"Private Wireless Gateways"
					],
					"operation": [
						"Get Private Wireless Gateway"
					]
				}
			}
		},
];
