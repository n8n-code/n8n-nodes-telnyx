import type { INodeProperties } from 'n8n-workflow';

export const numberBlockOrdersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Number Block Orders"
					]
				}
			},
			"options": [
				{
					"name": "List Number Block Orders",
					"value": "List Number Block Orders",
					"action": "List number block orders",
					"description": "Get a paginated list of number block orders.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/number_block_orders"
						}
					}
				},
				{
					"name": "Create Number Block Order",
					"value": "Create Number Block Order",
					"action": "Create a number block order",
					"description": "Creates a phone number block order.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/number_block_orders"
						}
					}
				},
				{
					"name": "Retrieve Number Block Order",
					"value": "Retrieve Number Block Order",
					"action": "Retrieve a number block order",
					"description": "Get an existing phone number block order.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/number_block_orders/{{$parameter[\"number_block_order_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /number_block_orders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Block Orders"
					],
					"operation": [
						"List Number Block Orders"
					]
				}
			}
		},
		{
			"displayName": "Filter Status",
			"name": "filter%5Bstatus%5D",
			"description": "Filter number block orders by status.",
			"default": "pending",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[status]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Block Orders"
					],
					"operation": [
						"List Number Block Orders"
					]
				}
			}
		},
		{
			"displayName": "Filter Created At Gt",
			"name": "filter%5Bcreated_at%5D%5Bgt%5D",
			"description": "Filter number block orders later than this value.",
			"default": "2018-01-01T00:00:00.000000Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[created_at][gt]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Block Orders"
					],
					"operation": [
						"List Number Block Orders"
					]
				}
			}
		},
		{
			"displayName": "Filter Created At Lt",
			"name": "filter%5Bcreated_at%5D%5Blt%5D",
			"description": "Filter number block orders earlier than this value.",
			"default": "2018-01-01T00:00:00.000000Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[created_at][lt]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Block Orders"
					],
					"operation": [
						"List Number Block Orders"
					]
				}
			}
		},
		{
			"displayName": "Filter Phone Numbers Starting Number",
			"name": "filter%5Bphone_numbers-starting_number%5D",
			"description": "Filter number block  orders having these phone numbers.",
			"default": "+19705555000",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[phone_numbers.starting_number]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Block Orders"
					],
					"operation": [
						"List Number Block Orders"
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
						"Number Block Orders"
					],
					"operation": [
						"List Number Block Orders"
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
						"Number Block Orders"
					],
					"operation": [
						"List Number Block Orders"
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
						"Number Block Orders"
					],
					"operation": [
						"List Number Block Orders"
					]
				}
			}
		},
		{
			"displayName": "POST /number_block_orders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Block Orders"
					],
					"operation": [
						"Create Number Block Order"
					]
				}
			}
		},
		{
			"displayName": "Connection Id",
			"name": "connection_id",
			"type": "string",
			"default": "346789098765567",
			"description": "Identifies the connection associated with this phone number.",
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
						"Number Block Orders"
					],
					"operation": [
						"Create Number Block Order"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "string",
			"default": "2018-01-01T00:00:00.000000Z",
			"description": "An ISO 8901 datetime string denoting when the number order was created.",
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
						"Number Block Orders"
					],
					"operation": [
						"Create Number Block Order"
					]
				}
			}
		},
		{
			"displayName": "Customer Reference",
			"name": "customer_reference",
			"type": "string",
			"default": "MY REF 001",
			"description": "A customer reference string for customer look ups.",
			"routing": {
				"send": {
					"property": "customer_reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Block Orders"
					],
					"operation": [
						"Create Number Block Order"
					]
				}
			}
		},
		{
			"displayName": "Errors",
			"name": "errors",
			"type": "string",
			"default": "Number is already on hold",
			"description": "Errors the reservation could happen upon",
			"routing": {
				"send": {
					"property": "errors",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Block Orders"
					],
					"operation": [
						"Create Number Block Order"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "12ade33a-21c0-473b-b055-b3c836e1c292",
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
						"Number Block Orders"
					],
					"operation": [
						"Create Number Block Order"
					]
				}
			}
		},
		{
			"displayName": "Messaging Profile Id",
			"name": "messaging_profile_id",
			"type": "string",
			"default": "abc85f64-5717-4562-b3fc-2c9600",
			"description": "Identifies the messaging profile associated with the phone number.",
			"routing": {
				"send": {
					"property": "messaging_profile_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Block Orders"
					],
					"operation": [
						"Create Number Block Order"
					]
				}
			}
		},
		{
			"displayName": "Phone Numbers Count",
			"name": "phone_numbers_count",
			"type": "number",
			"default": 10,
			"description": "The count of phone numbers in the number order.",
			"routing": {
				"send": {
					"property": "phone_numbers_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Block Orders"
					],
					"operation": [
						"Create Number Block Order"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Range",
			"name": "range",
			"type": "number",
			"default": 10,
			"description": "The phone number range included in the block.",
			"routing": {
				"send": {
					"property": "range",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Block Orders"
					],
					"operation": [
						"Create Number Block Order"
					]
				}
			}
		},
		{
			"displayName": "Record Type",
			"name": "record_type",
			"type": "string",
			"default": "number_block_order",
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
						"Number Block Orders"
					],
					"operation": [
						"Create Number Block Order"
					]
				}
			}
		},
		{
			"displayName": "Requirements Met",
			"name": "requirements_met",
			"type": "boolean",
			"default": true,
			"description": "True if all requirements are met for every phone number, false otherwise.",
			"routing": {
				"send": {
					"property": "requirements_met",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Block Orders"
					],
					"operation": [
						"Create Number Block Order"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Starting Number",
			"name": "starting_number",
			"type": "string",
			"default": "+19705555000",
			"description": "Starting phone number block",
			"routing": {
				"send": {
					"property": "starting_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Block Orders"
					],
					"operation": [
						"Create Number Block Order"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "pending",
			"description": "The status of the order.",
			"options": [
				{
					"name": "Pending",
					"value": "pending"
				},
				{
					"name": "Success",
					"value": "success"
				},
				{
					"name": "Failure",
					"value": "failure"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Block Orders"
					],
					"operation": [
						"Create Number Block Order"
					]
				}
			}
		},
		{
			"displayName": "Updated At",
			"name": "updated_at",
			"type": "string",
			"default": "2018-01-01T00:00:00.000000Z",
			"description": "An ISO 8901 datetime string for when the number order was updated.",
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
						"Number Block Orders"
					],
					"operation": [
						"Create Number Block Order"
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
						"Number Block Orders"
					],
					"operation": [
						"Create Number Block Order"
					]
				}
			}
		},
		{
			"displayName": "GET /number_block_orders/{number_block_order_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Block Orders"
					],
					"operation": [
						"Retrieve Number Block Order"
					]
				}
			}
		},
		{
			"displayName": "Number Block Order Id",
			"name": "number_block_order_id",
			"required": true,
			"description": "The number block order ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Block Orders"
					],
					"operation": [
						"Retrieve Number Block Order"
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
						"Number Block Orders"
					],
					"operation": [
						"Retrieve Number Block Order"
					]
				}
			}
		},
];
