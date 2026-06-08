import type { INodeProperties } from 'n8n-workflow';

export const webhooksDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					]
				}
			},
			"options": [
				{
					"name": "Get Webhook Deliveries",
					"value": "Get Webhook Deliveries",
					"action": "List webhook deliveries",
					"description": "Lists webhook_deliveries for the authenticated user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/webhook_deliveries"
						}
					}
				},
				{
					"name": "Get Webhook Delivery",
					"value": "Get Webhook Delivery",
					"action": "Find webhook_delivery details by ID",
					"description": "Provides webhook_delivery debug data, such as timestamps, delivery status and attempts.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/webhook_deliveries/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /webhook_deliveries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Get Webhook Deliveries"
					]
				}
			}
		},
		{
			"displayName": "Filter Status Eq",
			"name": "filter%5Bstatus%5D%5Beq%5D",
			"description": "Return only webhook_deliveries matching the given `status`",
			"default": "delivered",
			"type": "options",
			"options": [
				{
					"name": "Delivered",
					"value": "delivered"
				},
				{
					"name": "Failed",
					"value": "failed"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[status][eq]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Get Webhook Deliveries"
					]
				}
			}
		},
		{
			"displayName": "Filter Webhook Contains",
			"name": "filter%5Bwebhook%5D%5Bcontains%5D",
			"description": "Return only webhook deliveries whose `webhook` component contains the given text",
			"default": "call.initiated",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[webhook][contains]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Get Webhook Deliveries"
					]
				}
			}
		},
		{
			"displayName": "Filter Attempts Contains",
			"name": "filter%5Battempts%5D%5Bcontains%5D",
			"description": "Return only webhook_deliveries whose `attempts` component contains the given text",
			"default": "https://fallback.example.com/webhooks",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[attempts][contains]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Get Webhook Deliveries"
					]
				}
			}
		},
		{
			"displayName": "Filter Started At Gte",
			"name": "filter%5Bstarted_at%5D%5Bgte%5D",
			"description": "Return only webhook_deliveries whose delivery started later than or at given ISO 8601 datetime",
			"default": "2019-03-29T11:10:00Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[started_at][gte]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Get Webhook Deliveries"
					]
				}
			}
		},
		{
			"displayName": "Filter Started At Lte",
			"name": "filter%5Bstarted_at%5D%5Blte%5D",
			"description": "Return only webhook_deliveries whose delivery started earlier than or at given ISO 8601 datetime",
			"default": "2019-03-29T11:10:00Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[started_at][lte]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Get Webhook Deliveries"
					]
				}
			}
		},
		{
			"displayName": "Filter Finished At Gte",
			"name": "filter%5Bfinished_at%5D%5Bgte%5D",
			"description": "Return only webhook_deliveries whose delivery finished later than or at given ISO 8601 datetime",
			"default": "2019-03-29T11:10:00Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[finished_at][gte]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Get Webhook Deliveries"
					]
				}
			}
		},
		{
			"displayName": "Filter Finished At Lte",
			"name": "filter%5Bfinished_at%5D%5Blte%5D",
			"description": "Return only webhook_deliveries whose delivery finished earlier than or at given ISO 8601 datetime",
			"default": "2019-03-29T11:10:00Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[finished_at][lte]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Get Webhook Deliveries"
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
						"Webhooks"
					],
					"operation": [
						"Get Webhook Deliveries"
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
						"Webhooks"
					],
					"operation": [
						"Get Webhook Deliveries"
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
						"Webhooks"
					],
					"operation": [
						"Get Webhook Deliveries"
					]
				}
			}
		},
		{
			"displayName": "GET /webhook_deliveries/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Get Webhook Delivery"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Uniquely identifies the webhook_delivery.",
			"default": "C9C0797E-901D-4349-A33C-C2C8F31A92C2",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Get Webhook Delivery"
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
						"Webhooks"
					],
					"operation": [
						"Get Webhook Delivery"
					]
				}
			}
		},
];
