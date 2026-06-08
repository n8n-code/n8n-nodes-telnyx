import type { INodeProperties } from 'n8n-workflow';

export const numberOrdersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					]
				}
			},
			"options": [
				{
					"name": "List Comments",
					"value": "List Comments",
					"action": "Retrieve all comments",
					"description": "Retrieve all comments",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/comments"
						}
					}
				},
				{
					"name": "Create Comment",
					"value": "Create Comment",
					"action": "Create a comment",
					"description": "Create a comment",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/comments"
						}
					}
				},
				{
					"name": "Retrieve Comment",
					"value": "Retrieve Comment",
					"action": "Retrieve a comment",
					"description": "Retrieve a comment",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/comments/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Mark Comment Read",
					"value": "Mark Comment Read",
					"action": "Mark a comment as read",
					"description": "Mark a comment as read",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/comments/{{$parameter[\"id\"]}}/read"
						}
					}
				},
				{
					"name": "Retrieve Number Order Phone Numbers",
					"value": "Retrieve Number Order Phone Numbers",
					"action": "Retrieve a list of phone numbers associated to orders",
					"description": "Get a list of phone numbers associated to orders.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/number_order_phone_numbers"
						}
					}
				},
				{
					"name": "Retrieve Number Order Phone Number",
					"value": "Retrieve Number Order Phone Number",
					"action": "Retrieve a number order phone number.",
					"description": "Get an existing number order phone number.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/number_order_phone_numbers/{{$parameter[\"number_order_phone_number_id\"]}}"
						}
					}
				},
				{
					"name": "Update Number Order Phone Number",
					"value": "Update Number Order Phone Number",
					"action": "Update a number order phone number.",
					"description": "Updates a number order phone number.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/number_order_phone_numbers/{{$parameter[\"number_order_phone_number_id\"]}}"
						}
					}
				},
				{
					"name": "List Number Orders",
					"value": "List Number Orders",
					"action": "List number orders",
					"description": "Get a paginated list of number orders.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/number_orders"
						}
					}
				},
				{
					"name": "Create Number Order",
					"value": "Create Number Order",
					"action": "Create a number order",
					"description": "Creates a phone number order.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/number_orders"
						}
					}
				},
				{
					"name": "Retrieve Number Order",
					"value": "Retrieve Number Order",
					"action": "Retrieve a number order",
					"description": "Get an existing phone number order.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/number_orders/{{$parameter[\"number_order_id\"]}}"
						}
					}
				},
				{
					"name": "Update Number Order",
					"value": "Update Number Order",
					"action": "Update a number order",
					"description": "Updates a phone number order.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/number_orders/{{$parameter[\"number_order_id\"]}}"
						}
					}
				},
				{
					"name": "List Sub Number Orders",
					"value": "List Sub Number Orders",
					"action": "List sub number orders",
					"description": "Get a paginated list of sub number orders.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sub_number_orders"
						}
					}
				},
				{
					"name": "Retrieve Sub Number Order",
					"value": "Retrieve Sub Number Order",
					"action": "Retrieve a sub number order",
					"description": "Get an existing sub number order.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sub_number_orders/{{$parameter[\"sub_number_order_id\"]}}"
						}
					}
				},
				{
					"name": "Update Sub Number Order",
					"value": "Update Sub Number Order",
					"action": "Update a sub number order",
					"description": "Updates a sub number order.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sub_number_orders/{{$parameter[\"sub_number_order_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /comments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"List Comments"
					]
				}
			}
		},
		{
			"displayName": "Filter Comment Record Type",
			"name": "filter%5Bcomment_record_type%5D",
			"required": true,
			"description": "Record type that the comment relates to i.e number_order, sub_number_order or number_order_phone_number",
			"default": "sub_number_order",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[comment_record_type]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"List Comments"
					]
				}
			}
		},
		{
			"displayName": "Filter Comment Record Id",
			"name": "filter%5Bcomment_record_id%5D",
			"required": true,
			"description": "ID of the record the comments relate to",
			"default": "8ffb3622-7c6b-4ccc-b65f-7a3dc0099576",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[comment_record_id]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"List Comments"
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
						"Number Orders"
					],
					"operation": [
						"List Comments"
					]
				}
			}
		},
		{
			"displayName": "POST /comments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"Create Comment"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": "Hi there, ....",
			"routing": {
				"send": {
					"property": "body",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"Create Comment"
					]
				}
			}
		},
		{
			"displayName": "Comment Record Id",
			"name": "comment_record_id",
			"type": "string",
			"default": "8ffb3622-7c6b-4ccc-b65f-7a3dc0099576",
			"routing": {
				"send": {
					"property": "comment_record_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"Create Comment"
					]
				}
			}
		},
		{
			"displayName": "Comment Record Type",
			"name": "comment_record_type",
			"type": "options",
			"default": "sub_number_order",
			"options": [
				{
					"name": "Number Order",
					"value": "number_order"
				},
				{
					"name": "Sub Number Order",
					"value": "sub_number_order"
				},
				{
					"name": "Number Order Phone Number",
					"value": "number_order_phone_number"
				}
			],
			"routing": {
				"send": {
					"property": "comment_record_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"Create Comment"
					]
				}
			}
		},
		{
			"displayName": "Commenter",
			"name": "commenter",
			"type": "string",
			"default": "user@company.com",
			"routing": {
				"send": {
					"property": "commenter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"Create Comment"
					]
				}
			}
		},
		{
			"displayName": "Commenter Type",
			"name": "commenter_type",
			"type": "options",
			"default": "user",
			"options": [
				{
					"name": "Admin",
					"value": "admin"
				},
				{
					"name": "User",
					"value": "user"
				}
			],
			"routing": {
				"send": {
					"property": "commenter_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"Create Comment"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "string",
			"default": "2018-01-01T00:00:00.000000Z",
			"description": "An ISO 8901 datetime string denoting when the comment was created.",
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
						"Number Orders"
					],
					"operation": [
						"Create Comment"
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
						"Number Orders"
					],
					"operation": [
						"Create Comment"
					]
				}
			}
		},
		{
			"displayName": "Read At",
			"name": "read_at",
			"type": "string",
			"default": null,
			"description": "An ISO 8901 datetime string for when the comment was read.",
			"routing": {
				"send": {
					"property": "read_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"Create Comment"
					]
				}
			}
		},
		{
			"displayName": "Updated At",
			"name": "updated_at",
			"type": "string",
			"default": "2018-01-01T00:00:00.000000Z",
			"description": "An ISO 8901 datetime string for when the comment was updated.",
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
						"Number Orders"
					],
					"operation": [
						"Create Comment"
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
						"Number Orders"
					],
					"operation": [
						"Create Comment"
					]
				}
			}
		},
		{
			"displayName": "GET /comments/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"Retrieve Comment"
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
						"Number Orders"
					],
					"operation": [
						"Retrieve Comment"
					]
				}
			}
		},
		{
			"displayName": "PATCH /comments/{id}/read",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"Mark Comment Read"
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
						"Number Orders"
					],
					"operation": [
						"Mark Comment Read"
					]
				}
			}
		},
		{
			"displayName": "GET /number_order_phone_numbers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"Retrieve Number Order Phone Numbers"
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
						"Number Orders"
					],
					"operation": [
						"Retrieve Number Order Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "GET /number_order_phone_numbers/{number_order_phone_number_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"Retrieve Number Order Phone Number"
					]
				}
			}
		},
		{
			"displayName": "Number Order Phone Number Id",
			"name": "number_order_phone_number_id",
			"required": true,
			"description": "The number order phone number ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"Retrieve Number Order Phone Number"
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
						"Number Orders"
					],
					"operation": [
						"Retrieve Number Order Phone Number"
					]
				}
			}
		},
		{
			"displayName": "PATCH /number_order_phone_numbers/{number_order_phone_number_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"Update Number Order Phone Number"
					]
				}
			}
		},
		{
			"displayName": "Number Order Phone Number Id",
			"name": "number_order_phone_number_id",
			"required": true,
			"description": "The number order phone number ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"Update Number Order Phone Number"
					]
				}
			}
		},
		{
			"displayName": "Regulatory Requirements",
			"name": "regulatory_requirements",
			"type": "json",
			"default": "[\n  {\n    \"field_value\": \"45f45a04-b4be-4592-95b1-9306b9db2b21\",\n    \"requirement_id\": \"8ffb3622-7c6b-4ccc-b65f-7a3dc0099576\"\n  }\n]",
			"routing": {
				"send": {
					"property": "regulatory_requirements",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"Update Number Order Phone Number"
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
						"Number Orders"
					],
					"operation": [
						"Update Number Order Phone Number"
					]
				}
			}
		},
		{
			"displayName": "GET /number_orders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"List Number Orders"
					]
				}
			}
		},
		{
			"displayName": "Filter Status",
			"name": "filter%5Bstatus%5D",
			"description": "Filter number orders by status.",
			"default": "",
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
						"Number Orders"
					],
					"operation": [
						"List Number Orders"
					]
				}
			}
		},
		{
			"displayName": "Filter Created At Gt",
			"name": "filter%5Bcreated_at%5D%5Bgt%5D",
			"description": "Filter number orders later than this value.",
			"default": "",
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
						"Number Orders"
					],
					"operation": [
						"List Number Orders"
					]
				}
			}
		},
		{
			"displayName": "Filter Created At Lt",
			"name": "filter%5Bcreated_at%5D%5Blt%5D",
			"description": "Filter number orders earlier than this value.",
			"default": "",
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
						"Number Orders"
					],
					"operation": [
						"List Number Orders"
					]
				}
			}
		},
		{
			"displayName": "Filter Phone Numbers Count",
			"name": "filter%5Bphone_numbers_count%5D",
			"description": "Filter number order with this amount of numbers",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[phone_numbers_count]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"List Number Orders"
					]
				}
			}
		},
		{
			"displayName": "Filter Customer Reference",
			"name": "filter%5Bcustomer_reference%5D",
			"description": "Filter number orders via the customer reference set.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[customer_reference]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"List Number Orders"
					]
				}
			}
		},
		{
			"displayName": "Filter Requirements Met",
			"name": "filter%5Brequirements_met%5D",
			"description": "Filter number orders by requirements met.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[requirements_met]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"List Number Orders"
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
						"Number Orders"
					],
					"operation": [
						"List Number Orders"
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
						"Number Orders"
					],
					"operation": [
						"List Number Orders"
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
						"Number Orders"
					],
					"operation": [
						"List Number Orders"
					]
				}
			}
		},
		{
			"displayName": "POST /number_orders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"Create Number Order"
					]
				}
			}
		},
		{
			"displayName": "Billing Group Id",
			"name": "billing_group_id",
			"type": "string",
			"default": "abc85f64-5717-4562-b3fc-2c9600",
			"description": "Identifies the billing group associated with the phone number.",
			"routing": {
				"send": {
					"property": "billing_group_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"Create Number Order"
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
						"Number Orders"
					],
					"operation": [
						"Create Number Order"
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
						"Number Orders"
					],
					"operation": [
						"Create Number Order"
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
						"Number Orders"
					],
					"operation": [
						"Create Number Order"
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
						"Number Orders"
					],
					"operation": [
						"Create Number Order"
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
						"Number Orders"
					],
					"operation": [
						"Create Number Order"
					]
				}
			}
		},
		{
			"displayName": "Phone Numbers",
			"name": "phone_numbers",
			"type": "json",
			"default": "[\n  {\n    \"id\": \"dc8e4d67-33a0-4cbb-af74-7b58f05bd494\",\n    \"phone_number\": \"+19705555098\",\n    \"record_type\": \"number_order_phone_number\",\n    \"regulatory_group_id\": \"dc8e4d67-33a0-4cbb-af74-7b58f05bd494\",\n    \"regulatory_requirements\": [\n      {\n        \"field_type\": \"address\",\n        \"field_value\": \"45f45a04-b4be-4592-95b1-9306b9db2b21\",\n        \"record_type\": \"phone_number_regulatory_requirement\",\n        \"requirement_id\": \"8ffb3622-7c6b-4ccc-b65f-7a3dc0099576\"\n      }\n    ],\n    \"requirements_met\": true,\n    \"status\": \"success\"\n  }\n]",
			"routing": {
				"send": {
					"property": "phone_numbers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"Create Number Order"
					]
				}
			}
		},
		{
			"displayName": "Phone Numbers Count",
			"name": "phone_numbers_count",
			"type": "number",
			"default": 1,
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
						"Number Orders"
					],
					"operation": [
						"Create Number Order"
					]
				}
			}
		},
		{
			"displayName": "Record Type",
			"name": "record_type",
			"type": "string",
			"default": "number_order",
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
						"Number Orders"
					],
					"operation": [
						"Create Number Order"
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
						"Number Orders"
					],
					"operation": [
						"Create Number Order"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "success",
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
						"Number Orders"
					],
					"operation": [
						"Create Number Order"
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
						"Number Orders"
					],
					"operation": [
						"Create Number Order"
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
						"Number Orders"
					],
					"operation": [
						"Create Number Order"
					]
				}
			}
		},
		{
			"displayName": "GET /number_orders/{number_order_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"Retrieve Number Order"
					]
				}
			}
		},
		{
			"displayName": "Number Order Id",
			"name": "number_order_id",
			"required": true,
			"description": "The number order ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"Retrieve Number Order"
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
						"Number Orders"
					],
					"operation": [
						"Retrieve Number Order"
					]
				}
			}
		},
		{
			"displayName": "PATCH /number_orders/{number_order_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"Update Number Order"
					]
				}
			}
		},
		{
			"displayName": "Number Order Id",
			"name": "number_order_id",
			"required": true,
			"description": "The number order ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"Update Number Order"
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
						"Number Orders"
					],
					"operation": [
						"Update Number Order"
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
						"Number Orders"
					],
					"operation": [
						"Update Number Order"
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
						"Number Orders"
					],
					"operation": [
						"Update Number Order"
					]
				}
			}
		},
		{
			"displayName": "Phone Numbers",
			"name": "phone_numbers",
			"type": "json",
			"default": "[\n  {\n    \"id\": \"dc8e4d67-33a0-4cbb-af74-7b58f05bd494\",\n    \"phone_number\": \"+19705555098\",\n    \"record_type\": \"number_order_phone_number\",\n    \"regulatory_group_id\": \"dc8e4d67-33a0-4cbb-af74-7b58f05bd494\",\n    \"regulatory_requirements\": [\n      {\n        \"field_type\": \"address\",\n        \"field_value\": \"45f45a04-b4be-4592-95b1-9306b9db2b21\",\n        \"record_type\": \"phone_number_regulatory_requirement\",\n        \"requirement_id\": \"8ffb3622-7c6b-4ccc-b65f-7a3dc0099576\"\n      }\n    ],\n    \"requirements_met\": true,\n    \"status\": \"success\"\n  }\n]",
			"routing": {
				"send": {
					"property": "phone_numbers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"Update Number Order"
					]
				}
			}
		},
		{
			"displayName": "Phone Numbers Count",
			"name": "phone_numbers_count",
			"type": "number",
			"default": 1,
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
						"Number Orders"
					],
					"operation": [
						"Update Number Order"
					]
				}
			}
		},
		{
			"displayName": "Record Type",
			"name": "record_type",
			"type": "string",
			"default": "number_order",
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
						"Number Orders"
					],
					"operation": [
						"Update Number Order"
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
						"Number Orders"
					],
					"operation": [
						"Update Number Order"
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
						"Number Orders"
					],
					"operation": [
						"Update Number Order"
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
						"Number Orders"
					],
					"operation": [
						"Update Number Order"
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
						"Number Orders"
					],
					"operation": [
						"Update Number Order"
					]
				}
			}
		},
		{
			"displayName": "GET /sub_number_orders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"List Sub Number Orders"
					]
				}
			}
		},
		{
			"displayName": "Filter User Id",
			"name": "filter%5Buser_id%5D",
			"description": "User ID of the user who owns the sub number order",
			"default": "d70873cd-7c98-401a-81b6-b1ae08246995",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[user_id]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"List Sub Number Orders"
					]
				}
			}
		},
		{
			"displayName": "Filter Order Request Id",
			"name": "filter%5Border_request_id%5D",
			"description": "ID of the number order the sub number order belongs to",
			"default": "12ade33a-21c0-473b-b055-b3c836e1c293",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[order_request_id]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"List Sub Number Orders"
					]
				}
			}
		},
		{
			"displayName": "Filter Country Code",
			"name": "filter%5Bcountry_code%5D",
			"description": "ISO alpha-2 country code.",
			"default": "US",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[country_code]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"List Sub Number Orders"
					]
				}
			}
		},
		{
			"displayName": "Filter Phone Number Type",
			"name": "filter%5Bphone_number_type%5D",
			"description": "Phone Number Type",
			"default": "local",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[phone_number_type]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"List Sub Number Orders"
					]
				}
			}
		},
		{
			"displayName": "Filter Phone Numbers Count",
			"name": "filter%5Bphone_numbers_count%5D",
			"description": "Amount of numbers in the sub number order",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[phone_numbers_count]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"List Sub Number Orders"
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
						"Number Orders"
					],
					"operation": [
						"List Sub Number Orders"
					]
				}
			}
		},
		{
			"displayName": "GET /sub_number_orders/{sub_number_order_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"Retrieve Sub Number Order"
					]
				}
			}
		},
		{
			"displayName": "Sub Number Order Id",
			"name": "sub_number_order_id",
			"required": true,
			"description": "The sub number order ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"Retrieve Sub Number Order"
					]
				}
			}
		},
		{
			"displayName": "Filter Include Phone Numbers",
			"name": "filter%5Binclude_phone_numbers%5D",
			"description": "Include the first 50 phone number objects in the results",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[include_phone_numbers]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"Retrieve Sub Number Order"
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
						"Number Orders"
					],
					"operation": [
						"Retrieve Sub Number Order"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sub_number_orders/{sub_number_order_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"Update Sub Number Order"
					]
				}
			}
		},
		{
			"displayName": "Sub Number Order Id",
			"name": "sub_number_order_id",
			"required": true,
			"description": "The sub number order ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"Update Sub Number Order"
					]
				}
			}
		},
		{
			"displayName": "Regulatory Requirements",
			"name": "regulatory_requirements",
			"type": "json",
			"default": "[\n  {\n    \"field_value\": \"45f45a04-b4be-4592-95b1-9306b9db2b21\",\n    \"requirement_id\": \"8ffb3622-7c6b-4ccc-b65f-7a3dc0099576\"\n  }\n]",
			"routing": {
				"send": {
					"property": "regulatory_requirements",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Orders"
					],
					"operation": [
						"Update Sub Number Order"
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
						"Number Orders"
					],
					"operation": [
						"Update Sub Number Order"
					]
				}
			}
		},
];
