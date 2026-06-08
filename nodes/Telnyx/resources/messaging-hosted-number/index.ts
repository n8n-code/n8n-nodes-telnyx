import type { INodeProperties } from 'n8n-workflow';

export const messagingHostedNumberDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Hosted Number"
					]
				}
			},
			"options": [
				{
					"name": "List Messaging Hosted Number Order",
					"value": "List Messaging Hosted Number Order",
					"action": "List messaging hosted number orders",
					"description": "List messaging hosted number orders",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/messaging_hosted_number_orders"
						}
					}
				},
				{
					"name": "Create Messaging Hosted Number Order",
					"value": "Create Messaging Hosted Number Order",
					"action": "Create a messaging hosted number order",
					"description": "Create a messaging hosted number order",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/messaging_hosted_number_orders"
						}
					}
				},
				{
					"name": "Retrieve Messaging Hosted Number Order",
					"value": "Retrieve Messaging Hosted Number Order",
					"action": "Retrieve a messaging hosted number order",
					"description": "Retrieve a messaging hosted number order",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/messaging_hosted_number_orders/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Upload File Messaging Hosted Number Order",
					"value": "Upload File Messaging Hosted Number Order",
					"action": "Upload file required for a messaging hosted number order",
					"description": "Upload file required for a messaging hosted number order",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/messaging_hosted_number_orders/{{$parameter[\"id\"]}}/actions/file_upload"
						}
					}
				},
				{
					"name": "Delete Messaging Hosted Number",
					"value": "Delete Messaging Hosted Number",
					"action": "Delete a messaging hosted number",
					"description": "Delete a messaging hosted number",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/messaging_hosted_numbers/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /messaging_hosted_number_orders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Hosted Number"
					],
					"operation": [
						"List Messaging Hosted Number Order"
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
						"Messaging Hosted Number"
					],
					"operation": [
						"List Messaging Hosted Number Order"
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
						"Messaging Hosted Number"
					],
					"operation": [
						"List Messaging Hosted Number Order"
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
						"Messaging Hosted Number"
					],
					"operation": [
						"List Messaging Hosted Number Order"
					]
				}
			}
		},
		{
			"displayName": "POST /messaging_hosted_number_orders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Hosted Number"
					],
					"operation": [
						"Create Messaging Hosted Number Order"
					]
				}
			}
		},
		{
			"displayName": "Messaging Profile Id",
			"name": "messaging_profile_id",
			"type": "string",
			"default": "",
			"description": "Automatically associate the number with this messaging profile ID when the order is complete.",
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
						"Messaging Hosted Number"
					],
					"operation": [
						"Create Messaging Hosted Number Order"
					]
				}
			}
		},
		{
			"displayName": "Phone Numbers",
			"name": "phone_numbers",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Phone numbers to be used for hosted messaging.",
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
						"Messaging Hosted Number"
					],
					"operation": [
						"Create Messaging Hosted Number Order"
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
						"Messaging Hosted Number"
					],
					"operation": [
						"Create Messaging Hosted Number Order"
					]
				}
			}
		},
		{
			"displayName": "GET /messaging_hosted_number_orders/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Hosted Number"
					],
					"operation": [
						"Retrieve Messaging Hosted Number Order"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Identifies the type of resource.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Hosted Number"
					],
					"operation": [
						"Retrieve Messaging Hosted Number Order"
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
						"Messaging Hosted Number"
					],
					"operation": [
						"Retrieve Messaging Hosted Number Order"
					]
				}
			}
		},
		{
			"displayName": "POST /messaging_hosted_number_orders/{id}/actions/file_upload",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Hosted Number"
					],
					"operation": [
						"Upload File Messaging Hosted Number Order"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Identifies the type of resource.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Hosted Number"
					],
					"operation": [
						"Upload File Messaging Hosted Number Order"
					]
				}
			}
		},
		{
			"displayName": "POST /messaging_hosted_number_orders/{id}/actions/file_upload<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Hosted Number"
					],
					"operation": [
						"Upload File Messaging Hosted Number Order"
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
						"Messaging Hosted Number"
					],
					"operation": [
						"Upload File Messaging Hosted Number Order"
					]
				}
			}
		},
		{
			"displayName": "DELETE /messaging_hosted_numbers/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Hosted Number"
					],
					"operation": [
						"Delete Messaging Hosted Number"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Identifies the type of resource.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging Hosted Number"
					],
					"operation": [
						"Delete Messaging Hosted Number"
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
						"Messaging Hosted Number"
					],
					"operation": [
						"Delete Messaging Hosted Number"
					]
				}
			}
		},
];
