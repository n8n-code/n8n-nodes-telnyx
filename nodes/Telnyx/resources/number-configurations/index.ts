import type { INodeProperties } from 'n8n-workflow';

export const numberConfigurationsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					]
				}
			},
			"options": [
				{
					"name": "List Phone Numbers",
					"value": "List Phone Numbers",
					"action": "List phone numbers",
					"description": "List phone numbers",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/phone_numbers"
						}
					}
				},
				{
					"name": "List Phone Numbers With Messaging Settings",
					"value": "List Phone Numbers With Messaging Settings",
					"action": "List phone numbers with messaging settings",
					"description": "List phone numbers with messaging settings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/phone_numbers/messaging"
						}
					}
				},
				{
					"name": "List Phone Numbers With Voice Settings",
					"value": "List Phone Numbers With Voice Settings",
					"action": "List phone numbers with voice settings",
					"description": "List phone numbers with voice settings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/phone_numbers/voice"
						}
					}
				},
				{
					"name": "Delete Phone Number",
					"value": "Delete Phone Number",
					"action": "Delete a phone number",
					"description": "Delete a phone number",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/phone_numbers/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Retrieve Phone Number",
					"value": "Retrieve Phone Number",
					"action": "Retrieve a phone number",
					"description": "Retrieve a phone number",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/phone_numbers/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Phone Number",
					"value": "Update Phone Number",
					"action": "Update a phone number",
					"description": "Update a phone number",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/phone_numbers/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Enable Emergency Phone Number",
					"value": "Enable Emergency Phone Number",
					"action": "Enable emergency for a phone number",
					"description": "Enable emergency for a phone number",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/phone_numbers/{{$parameter[\"id\"]}}/actions/enable_emergency"
						}
					}
				},
				{
					"name": "Retrieve Phone Number With Messaging Settings",
					"value": "Retrieve Phone Number With Messaging Settings",
					"action": "Retrieve a phone number with messaging settings",
					"description": "Retrieve a phone number with messaging settings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/phone_numbers/{{$parameter[\"id\"]}}/messaging"
						}
					}
				},
				{
					"name": "Update Phone Number With Messaging Settings",
					"value": "Update Phone Number With Messaging Settings",
					"action": "Update a phone number with messaging settings",
					"description": "Update a phone number with messaging settings",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/phone_numbers/{{$parameter[\"id\"]}}/messaging"
						}
					}
				},
				{
					"name": "Retrieve Phone Number With Voice Settings",
					"value": "Retrieve Phone Number With Voice Settings",
					"action": "Retrieve a phone number with voice settings",
					"description": "Retrieve a phone number with voice settings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/phone_numbers/{{$parameter[\"id\"]}}/voice"
						}
					}
				},
				{
					"name": "Update Phone Number With Voice Settings",
					"value": "Update Phone Number With Voice Settings",
					"action": "Update a phone number with voice settings",
					"description": "Update a phone number with voice settings",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/phone_numbers/{{$parameter[\"id\"]}}/voice"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /phone_numbers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"List Phone Numbers"
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
						"Number Configurations"
					],
					"operation": [
						"List Phone Numbers"
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
						"Number Configurations"
					],
					"operation": [
						"List Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter Tag",
			"name": "filter%5Btag%5D",
			"description": "Filter by phone number tags.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[tag]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"List Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter Phone Number",
			"name": "filter%5Bphone_number%5D",
			"description": "Filter by phone number. Requires at least three digits.\n             Non-numerical characters will result in no values being returned.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[phone_number]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"List Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter Status",
			"name": "filter%5Bstatus%5D",
			"description": "Filter by phone number status.",
			"default": "active",
			"type": "options",
			"options": [
				{
					"name": "Purchase Pending",
					"value": "purchase_pending"
				},
				{
					"name": "Purchase Failed",
					"value": "purchase_failed"
				},
				{
					"name": "Port Pending",
					"value": "port_pending"
				},
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Deleted",
					"value": "deleted"
				},
				{
					"name": "Port Failed",
					"value": "port_failed"
				},
				{
					"name": "Emergency Only",
					"value": "emergency_only"
				},
				{
					"name": "Ported Out",
					"value": "ported_out"
				},
				{
					"name": "Port Out Pending",
					"value": "port_out_pending"
				}
			],
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
						"Number Configurations"
					],
					"operation": [
						"List Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter Voice Connection Name Contains",
			"name": "filter%5Bvoice-connection_name%5D%5Bcontains%5D",
			"description": "Filter contains connection name. Requires at least three characters.",
			"default": "test",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[voice.connection_name][contains]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"List Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter Voice Connection Name Starts With",
			"name": "filter%5Bvoice-connection_name%5D%5Bstarts_with%5D",
			"description": "Filter starts with connection name. Requires at least three characters.",
			"default": "test",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[voice.connection_name][starts_with]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"List Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter Voice Connection Name Ends With",
			"name": "filter%5Bvoice-connection_name%5D%5Bends_with%5D",
			"description": "Filter ends with connection name. Requires at least three characters.",
			"default": "test",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[voice.connection_name][ends_with]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"List Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter Voice Connection Name Eq",
			"name": "filter%5Bvoice-connection_name%5D%5Beq%5D",
			"description": "Filter by connection name.",
			"default": "test",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[voice.connection_name][eq]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"List Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter Usage Payment Method",
			"name": "filter%5Busage_payment_method%5D",
			"description": "Filter by usage_payment_method.",
			"default": "channel",
			"type": "options",
			"options": [
				{
					"name": "Pay Per Minute",
					"value": "pay-per-minute"
				},
				{
					"name": "Channel",
					"value": "channel"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[usage_payment_method]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"List Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter Billing Group Id",
			"name": "filter%5Bbilling_group_id%5D",
			"description": "Filter by the billing_group_id associated with phone numbers. To filter to only phone numbers that have no billing group associated them, set the value of this filter to the string 'null'.",
			"default": "62e4bf2e-c278-4282-b524-488d9c9c43b2",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[billing_group_id]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"List Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter Emergency Address Id",
			"name": "filter%5Bemergency_address_id%5D",
			"description": "Filter by the emergency_address_id associated with phone numbers. To filter only phone numbers that have no emergency address associated with them, set the value of this filter to the string 'null'.",
			"default": "9102160989215728032",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[emergency_address_id]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"List Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter Customer Reference",
			"name": "filter%5Bcustomer_reference%5D",
			"description": "Filter numbers via the customer_reference set.",
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
						"Number Configurations"
					],
					"operation": [
						"List Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Specifies the sort order for results. If not given, results are sorted by created_at in descending order.",
			"default": "connection_name",
			"type": "options",
			"options": [
				{
					"name": "Purchased At",
					"value": "purchased_at"
				},
				{
					"name": "Phone Number",
					"value": "phone_number"
				},
				{
					"name": "Connection Name",
					"value": "connection_name"
				},
				{
					"name": "Usage Payment Method",
					"value": "usage_payment_method"
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
						"Number Configurations"
					],
					"operation": [
						"List Phone Numbers"
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
						"Number Configurations"
					],
					"operation": [
						"List Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "GET /phone_numbers/messaging",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"List Phone Numbers With Messaging Settings"
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
						"Number Configurations"
					],
					"operation": [
						"List Phone Numbers With Messaging Settings"
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
						"Number Configurations"
					],
					"operation": [
						"List Phone Numbers With Messaging Settings"
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
						"Number Configurations"
					],
					"operation": [
						"List Phone Numbers With Messaging Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /phone_numbers/voice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"List Phone Numbers With Voice Settings"
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
						"Number Configurations"
					],
					"operation": [
						"List Phone Numbers With Voice Settings"
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
						"Number Configurations"
					],
					"operation": [
						"List Phone Numbers With Voice Settings"
					]
				}
			}
		},
		{
			"displayName": "Filter Phone Number",
			"name": "filter%5Bphone_number%5D",
			"description": "Filter by phone number. Requires at least three digits.\n             Non-numerical characters will result in no values being returned.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[phone_number]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"List Phone Numbers With Voice Settings"
					]
				}
			}
		},
		{
			"displayName": "Filter Connection Name Contains",
			"name": "filter%5Bconnection_name%5D%5Bcontains%5D",
			"description": "Filter contains connection name. Requires at least three characters.",
			"default": "test",
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
						"Number Configurations"
					],
					"operation": [
						"List Phone Numbers With Voice Settings"
					]
				}
			}
		},
		{
			"displayName": "Filter Customer Reference",
			"name": "filter%5Bcustomer_reference%5D",
			"description": "Filter numbers via the customer_reference set.",
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
						"Number Configurations"
					],
					"operation": [
						"List Phone Numbers With Voice Settings"
					]
				}
			}
		},
		{
			"displayName": "Filter Usage Payment Method",
			"name": "filter%5Busage_payment_method%5D",
			"description": "Filter by usage_payment_method.",
			"default": "channel",
			"type": "options",
			"options": [
				{
					"name": "Pay Per Minute",
					"value": "pay-per-minute"
				},
				{
					"name": "Channel",
					"value": "channel"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[usage_payment_method]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"List Phone Numbers With Voice Settings"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Specifies the sort order for results. If not given, results are sorted by created_at in descending order.",
			"default": "connection_name",
			"type": "options",
			"options": [
				{
					"name": "Purchased At",
					"value": "purchased_at"
				},
				{
					"name": "Phone Number",
					"value": "phone_number"
				},
				{
					"name": "Connection Name",
					"value": "connection_name"
				},
				{
					"name": "Usage Payment Method",
					"value": "usage_payment_method"
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
						"Number Configurations"
					],
					"operation": [
						"List Phone Numbers With Voice Settings"
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
						"Number Configurations"
					],
					"operation": [
						"List Phone Numbers With Voice Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /phone_numbers/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"Delete Phone Number"
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
						"Number Configurations"
					],
					"operation": [
						"Delete Phone Number"
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
						"Number Configurations"
					],
					"operation": [
						"Delete Phone Number"
					]
				}
			}
		},
		{
			"displayName": "GET /phone_numbers/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"Retrieve Phone Number"
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
						"Number Configurations"
					],
					"operation": [
						"Retrieve Phone Number"
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
						"Number Configurations"
					],
					"operation": [
						"Retrieve Phone Number"
					]
				}
			}
		},
		{
			"displayName": "PATCH /phone_numbers/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"Update Phone Number"
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
						"Number Configurations"
					],
					"operation": [
						"Update Phone Number"
					]
				}
			}
		},
		{
			"displayName": "Billing Group Id",
			"name": "billing_group_id",
			"type": "string",
			"default": "",
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
						"Number Configurations"
					],
					"operation": [
						"Update Phone Number"
					]
				}
			}
		},
		{
			"displayName": "Connection Id",
			"name": "connection_id",
			"type": "string",
			"default": "",
			"description": "Identifies the connection associated with the phone number.",
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
						"Number Configurations"
					],
					"operation": [
						"Update Phone Number"
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
						"Number Configurations"
					],
					"operation": [
						"Update Phone Number"
					]
				}
			}
		},
		{
			"displayName": "External Pin",
			"name": "external_pin",
			"type": "string",
			"default": "",
			"description": "If someone attempts to port your phone number away from Telnyx and your phone number has an external PIN set, we will attempt to verify that you provided the correct external PIN to the winning carrier. Note that not all carriers cooperate with this security mechanism.",
			"routing": {
				"send": {
					"property": "external_pin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"Update Phone Number"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "Identifies the type of resource.",
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
						"Number Configurations"
					],
					"operation": [
						"Update Phone Number"
					]
				}
			}
		},
		{
			"displayName": "Number Level Routing",
			"name": "number_level_routing",
			"type": "options",
			"default": "enabled",
			"description": "Specifies whether the number can have overrides to the routing settings on itself (enabled) or if it uses the associated connection for all routing settings (disabled). Defaults to enabled but will be changed to disabled in the future. There are performance advantages to using disabled and setting all routing information at the connection level.",
			"options": [
				{
					"name": "Enabled",
					"value": "enabled"
				},
				{
					"name": "Disabled",
					"value": "disabled"
				}
			],
			"routing": {
				"send": {
					"property": "number_level_routing",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"Update Phone Number"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of user-assigned tags to help organize phone numbers.",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"Update Phone Number"
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
						"Number Configurations"
					],
					"operation": [
						"Update Phone Number"
					]
				}
			}
		},
		{
			"displayName": "POST /phone_numbers/{id}/actions/enable_emergency",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"Enable Emergency Phone Number"
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
						"Number Configurations"
					],
					"operation": [
						"Enable Emergency Phone Number"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Emergency Address Id",
			"name": "emergency_address_id",
			"type": "string",
			"default": "",
			"description": "Identifies the address to be used with emergency services.",
			"routing": {
				"send": {
					"property": "emergency_address_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"Enable Emergency Phone Number"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Emergency Enabled",
			"name": "emergency_enabled",
			"type": "boolean",
			"default": true,
			"description": "Indicates whether to enable emergency services on this number.",
			"routing": {
				"send": {
					"property": "emergency_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"Enable Emergency Phone Number"
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
						"Number Configurations"
					],
					"operation": [
						"Enable Emergency Phone Number"
					]
				}
			}
		},
		{
			"displayName": "GET /phone_numbers/{id}/messaging",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"Retrieve Phone Number With Messaging Settings"
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
						"Number Configurations"
					],
					"operation": [
						"Retrieve Phone Number With Messaging Settings"
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
						"Number Configurations"
					],
					"operation": [
						"Retrieve Phone Number With Messaging Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /phone_numbers/{id}/messaging",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"Update Phone Number With Messaging Settings"
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
						"Number Configurations"
					],
					"operation": [
						"Update Phone Number With Messaging Settings"
					]
				}
			}
		},
		{
			"displayName": "Messaging Product",
			"name": "messaging_product",
			"type": "string",
			"default": "P2P",
			"description": "The requested messaging product the number should be on",
			"routing": {
				"send": {
					"property": "messaging_product",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"Update Phone Number With Messaging Settings"
					]
				}
			}
		},
		{
			"displayName": "Messaging Profile Id",
			"name": "messaging_profile_id",
			"type": "string",
			"default": "",
			"description": "Unique identifier for a messaging profile.",
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
						"Number Configurations"
					],
					"operation": [
						"Update Phone Number With Messaging Settings"
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
						"Number Configurations"
					],
					"operation": [
						"Update Phone Number With Messaging Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /phone_numbers/{id}/voice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"Retrieve Phone Number With Voice Settings"
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
						"Number Configurations"
					],
					"operation": [
						"Retrieve Phone Number With Voice Settings"
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
						"Number Configurations"
					],
					"operation": [
						"Retrieve Phone Number With Voice Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /phone_numbers/{id}/voice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"Update Phone Number With Voice Settings"
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
						"Number Configurations"
					],
					"operation": [
						"Update Phone Number With Voice Settings"
					]
				}
			}
		},
		{
			"displayName": "Call Forwarding",
			"name": "call_forwarding",
			"type": "json",
			"default": "{\n  \"call_forwarding_enabled\": true,\n  \"forwarding_type\": \"always\",\n  \"forwards_to\": \"+13035559123\"\n}",
			"description": "The call forwarding settings for a phone number.",
			"routing": {
				"send": {
					"property": "call_forwarding",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"Update Phone Number With Voice Settings"
					]
				}
			}
		},
		{
			"displayName": "Call Recording",
			"name": "call_recording",
			"type": "json",
			"default": "{\n  \"inbound_call_recording_channels\": \"single\",\n  \"inbound_call_recording_enabled\": true,\n  \"inbound_call_recording_format\": \"wav\"\n}",
			"description": "The call recording settings for a phone number.",
			"routing": {
				"send": {
					"property": "call_recording",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"Update Phone Number With Voice Settings"
					]
				}
			}
		},
		{
			"displayName": "Cnam Listing",
			"name": "cnam_listing",
			"type": "json",
			"default": "{\n  \"cnam_listing_details\": \"example\",\n  \"cnam_listing_enabled\": true\n}",
			"description": "The CNAM listing settings for a phone number.",
			"routing": {
				"send": {
					"property": "cnam_listing",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"Update Phone Number With Voice Settings"
					]
				}
			}
		},
		{
			"displayName": "Media Features",
			"name": "media_features",
			"type": "json",
			"default": "{\n  \"accept_any_rtp_packets_enabled\": true,\n  \"media_handling_mode\": \"default\",\n  \"rtp_auto_adjust_enabled\": true,\n  \"t38_fax_gateway_enabled\": true\n}",
			"description": "The media features settings for a phone number.",
			"routing": {
				"send": {
					"property": "media_features",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"Update Phone Number With Voice Settings"
					]
				}
			}
		},
		{
			"displayName": "Tech Prefix Enabled",
			"name": "tech_prefix_enabled",
			"type": "boolean",
			"default": false,
			"description": "Controls whether a tech prefix is enabled for this phone number.",
			"routing": {
				"send": {
					"property": "tech_prefix_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"Update Phone Number With Voice Settings"
					]
				}
			}
		},
		{
			"displayName": "Translated Number",
			"name": "translated_number",
			"type": "string",
			"default": "",
			"description": "This field allows you to rewrite the destination number of an inbound call before the call is routed to you. The value of this field may be any alphanumeric value, and the value will replace the number originally dialed.",
			"routing": {
				"send": {
					"property": "translated_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"Update Phone Number With Voice Settings"
					]
				}
			}
		},
		{
			"displayName": "Usage Payment Method",
			"name": "usage_payment_method",
			"type": "options",
			"default": "pay-per-minute",
			"description": "Controls whether a number is billed per minute or uses your concurrent channels.",
			"options": [
				{
					"name": "Pay Per Minute",
					"value": "pay-per-minute"
				},
				{
					"name": "Channel",
					"value": "channel"
				}
			],
			"routing": {
				"send": {
					"property": "usage_payment_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Configurations"
					],
					"operation": [
						"Update Phone Number With Voice Settings"
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
						"Number Configurations"
					],
					"operation": [
						"Update Phone Number With Voice Settings"
					]
				}
			}
		},
];
