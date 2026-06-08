import type { INodeProperties } from 'n8n-workflow';

export const simCardOrdersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Orders"
					]
				}
			},
			"options": [
				{
					"name": "Sim Card Orders Preview",
					"value": "Sim Card Orders Preview",
					"action": "Preview SIM card orders",
					"description": "Preview SIM card order purchases.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sim_card_order_preview"
						}
					}
				},
				{
					"name": "Sim Card Orders Get",
					"value": "Sim Card Orders Get",
					"action": "Get all SIM card orders",
					"description": "Get all SIM card orders according to filters.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sim_card_orders"
						}
					}
				},
				{
					"name": "Sim Card Orders Post",
					"value": "Sim Card Orders Post",
					"action": "Create a SIM card order",
					"description": "Creates a new order for SIM cards.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sim_card_orders"
						}
					}
				},
				{
					"name": "Sim Card Order Get",
					"value": "Sim Card Order Get",
					"action": "Get a single SIM card order",
					"description": "Get a single SIM card order by its ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sim_card_orders/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /sim_card_order_preview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Orders"
					],
					"operation": [
						"Sim Card Orders Preview"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Address Id",
			"name": "address_id",
			"type": "string",
			"default": "1293384261075731499",
			"description": "Uniquely identifies the address for the order.",
			"routing": {
				"send": {
					"property": "address_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Orders"
					],
					"operation": [
						"Sim Card Orders Preview"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Quantity",
			"name": "quantity",
			"type": "number",
			"default": 21,
			"description": "The amount of SIM cards that the user would like to purchase in the SIM card order.",
			"routing": {
				"send": {
					"property": "quantity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Orders"
					],
					"operation": [
						"Sim Card Orders Preview"
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
						"SIM Card Orders"
					],
					"operation": [
						"Sim Card Orders Preview"
					]
				}
			}
		},
		{
			"displayName": "GET /sim_card_orders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Orders"
					],
					"operation": [
						"Sim Card Orders Get"
					]
				}
			}
		},
		{
			"displayName": "Filter Created At",
			"name": "filter%5Bcreated_at%5D",
			"description": "Filter by ISO 8601 formatted date-time string matching resource creation date-time.",
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
						"SIM Card Orders"
					],
					"operation": [
						"Sim Card Orders Get"
					]
				}
			}
		},
		{
			"displayName": "Filter Updated At",
			"name": "filter%5Bupdated_at%5D",
			"description": "Filter by ISO 8601 formatted date-time string matching resource last update date-time.",
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
						"SIM Card Orders"
					],
					"operation": [
						"Sim Card Orders Get"
					]
				}
			}
		},
		{
			"displayName": "Filter Quantity",
			"name": "filter%5Bquantity%5D",
			"description": "Filter orders by how many SIM cards were ordered.",
			"default": 21,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[quantity]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Orders"
					],
					"operation": [
						"Sim Card Orders Get"
					]
				}
			}
		},
		{
			"displayName": "Filter Cost Amount",
			"name": "filter%5Bcost-amount%5D",
			"description": "The total monetary amount of the order.",
			"default": "2.53",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[cost.amount]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Orders"
					],
					"operation": [
						"Sim Card Orders Get"
					]
				}
			}
		},
		{
			"displayName": "Filter Cost Currency",
			"name": "filter%5Bcost-currency%5D",
			"description": "Filter by ISO 4217 currency string.",
			"default": "USD",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[cost.currency]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Orders"
					],
					"operation": [
						"Sim Card Orders Get"
					]
				}
			}
		},
		{
			"displayName": "Filter Address Id",
			"name": "filter%5Baddress-id%5D",
			"description": "Uniquely identifies the address for the order.",
			"default": "1293384261075731499",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[address.id]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Orders"
					],
					"operation": [
						"Sim Card Orders Get"
					]
				}
			}
		},
		{
			"displayName": "Filter Address Street Address",
			"name": "filter%5Baddress-street_address%5D",
			"description": "Returns entries with matching name of the street where the address is located.",
			"default": "311 W Superior St",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[address.street_address]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Orders"
					],
					"operation": [
						"Sim Card Orders Get"
					]
				}
			}
		},
		{
			"displayName": "Filter Address Extended Address",
			"name": "filter%5Baddress-extended_address%5D",
			"description": "Returns entries with matching name of the supplemental field for address information.",
			"default": "Suite 504",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[address.extended_address]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Orders"
					],
					"operation": [
						"Sim Card Orders Get"
					]
				}
			}
		},
		{
			"displayName": "Filter Address Locality",
			"name": "filter%5Baddress-locality%5D",
			"description": "Filter by the name of the city where the address is located.",
			"default": "Chicago",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[address.locality]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Orders"
					],
					"operation": [
						"Sim Card Orders Get"
					]
				}
			}
		},
		{
			"displayName": "Filter Address Administrative Area",
			"name": "filter%5Baddress-administrative_area%5D",
			"description": "Filter by state or province where the address is located.",
			"default": "IL",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[address.administrative_area]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Orders"
					],
					"operation": [
						"Sim Card Orders Get"
					]
				}
			}
		},
		{
			"displayName": "Filter Address Country Code",
			"name": "filter%5Baddress-country_code%5D",
			"description": "Filter by the mobile operator two-character (ISO 3166-1 alpha-2) origin country code.",
			"default": "US",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[address.country_code]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Orders"
					],
					"operation": [
						"Sim Card Orders Get"
					]
				}
			}
		},
		{
			"displayName": "Filter Address Postal Code",
			"name": "filter%5Baddress-postal_code%5D",
			"description": "Filter by postal code for the address.",
			"default": "60654",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[address.postal_code]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Orders"
					],
					"operation": [
						"Sim Card Orders Get"
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
						"SIM Card Orders"
					],
					"operation": [
						"Sim Card Orders Get"
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
						"SIM Card Orders"
					],
					"operation": [
						"Sim Card Orders Get"
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
						"SIM Card Orders"
					],
					"operation": [
						"Sim Card Orders Get"
					]
				}
			}
		},
		{
			"displayName": "POST /sim_card_orders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Orders"
					],
					"operation": [
						"Sim Card Orders Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Address Id",
			"name": "address_id",
			"type": "string",
			"default": "1293384261075731499",
			"description": "Uniquely identifies the address for the order.",
			"routing": {
				"send": {
					"property": "address_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Orders"
					],
					"operation": [
						"Sim Card Orders Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Quantity",
			"name": "quantity",
			"type": "number",
			"default": 23,
			"description": "The amount of SIM cards to order.",
			"routing": {
				"send": {
					"property": "quantity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Orders"
					],
					"operation": [
						"Sim Card Orders Post"
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
						"SIM Card Orders"
					],
					"operation": [
						"Sim Card Orders Post"
					]
				}
			}
		},
		{
			"displayName": "GET /sim_card_orders/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Orders"
					],
					"operation": [
						"Sim Card Order Get"
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
						"SIM Card Orders"
					],
					"operation": [
						"Sim Card Order Get"
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
						"SIM Card Orders"
					],
					"operation": [
						"Sim Card Order Get"
					]
				}
			}
		},
];
