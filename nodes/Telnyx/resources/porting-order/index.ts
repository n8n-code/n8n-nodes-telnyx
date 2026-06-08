import type { INodeProperties } from 'n8n-workflow';

export const portingOrderDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					]
				}
			},
			"options": [
				{
					"name": "List Porting Orders",
					"value": "List Porting Orders",
					"action": "List all porting orders",
					"description": "Returns a list of your porting order.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/porting_orders"
						}
					}
				},
				{
					"name": "Create Porting Order",
					"value": "Create Porting Order",
					"action": "Create a porting order",
					"description": "Creates a new porting order object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/porting_orders"
						}
					}
				},
				{
					"name": "List Porting Orders Exception Types",
					"value": "List Porting Orders Exception Types",
					"action": "List all exception types",
					"description": "Returns a list of all possible exception types for a porting order.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/porting_orders/exception_types"
						}
					}
				},
				{
					"name": "Delete Porting Order",
					"value": "Delete Porting Order",
					"action": "Request cancellation",
					"description": "Request the cancellation of a porting order.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/porting_orders/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Porting Order",
					"value": "Get Porting Order",
					"action": "Retrieve a porting order",
					"description": "Retrieves the details of an existing porting order.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/porting_orders/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Porting Order",
					"value": "Update Porting Order",
					"action": "Edit a porting order",
					"description": "Edits the details of an existing porting order.\n\nAny or all of a porting order’s attributes may be included in the resource object included in a PATCH request.\n\nIf a request does not include all of the attributes for a resource, the system will interpret the missing attributes as if they were included with their current values. To explicitly set something to null, it must be included in the request with a null value.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/porting_orders/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Activate Porting Order",
					"value": "Activate Porting Order",
					"action": "Activates every number on a porting order.",
					"description": "Activate every numbers of a porting order asynchronously.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/porting_orders/{{$parameter[\"id\"]}}/actions/activate"
						}
					}
				},
				{
					"name": "Cancel Porting Order",
					"value": "Cancel Porting Order",
					"action": "Cancel this porting order",
					"description": "Cancel this porting order",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/porting_orders/{{$parameter[\"id\"]}}/actions/cancel"
						}
					}
				},
				{
					"name": "Confirm Porting Order",
					"value": "Confirm Porting Order",
					"action": "Confirms the porting order is ready to be actioned.",
					"description": "Confirm your porting order.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/porting_orders/{{$parameter[\"id\"]}}/actions/confirm"
						}
					}
				},
				{
					"name": "List Porting Orders Activation Jobs",
					"value": "List Porting Orders Activation Jobs",
					"action": "List all porting activation jobs",
					"description": "Returns a list of your porting activation jobs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/porting_orders/{{$parameter[\"id\"]}}/activation_jobs"
						}
					}
				},
				{
					"name": "Get Porting Orders Activation Job",
					"value": "Get Porting Orders Activation Job",
					"action": "Retrieve a porting activation job",
					"description": "Returns a porting activation job.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/porting_orders/{{$parameter[\"id\"]}}/activation_jobs/{{$parameter[\"activationJobId\"]}}"
						}
					}
				},
				{
					"name": "List Porting Orders Comments",
					"value": "List Porting Orders Comments",
					"action": "List all comments of a porting order",
					"description": "Returns a list of all comments of a porting order.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/porting_orders/{{$parameter[\"id\"]}}/comments"
						}
					}
				},
				{
					"name": "Create Porting Order Comment",
					"value": "Create Porting Order Comment",
					"action": "Create a comment for a porting order",
					"description": "Creates a new comment for a porting order.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/porting_orders/{{$parameter[\"id\"]}}/comments"
						}
					}
				},
				{
					"name": "Get Porting Order LOA Template",
					"value": "Get Porting Order LOA Template",
					"action": "Download a porting order loa template",
					"description": "Download a porting order loa template",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/porting_orders/{{$parameter[\"id\"]}}/loa_template"
						}
					}
				},
				{
					"name": "GET Porting Phone Numbers",
					"value": "GET Porting Phone Numbers",
					"action": "List all porting phone numbers",
					"description": "Returns a list of your porting phone numbers.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/porting_phone_numbers"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /porting_orders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"List Porting Orders"
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
						"Porting Order"
					],
					"operation": [
						"List Porting Orders"
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
						"Porting Order"
					],
					"operation": [
						"List Porting Orders"
					]
				}
			}
		},
		{
			"displayName": "Include Phone Numbers",
			"name": "include_phone_numbers",
			"description": "Include the first 50 phone number objects in the results",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_phone_numbers",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"List Porting Orders"
					]
				}
			}
		},
		{
			"displayName": "Filter Status",
			"name": "filter%5Bstatus%5D",
			"description": "Filter results by status",
			"default": "{\n  \"details\": [\n    {\n      \"code\": \"ENTITY_NAME_MISMATCH\",\n      \"description\": \"Entity name does not match that on the CSR\"\n    }\n  ],\n  \"value\": \"ported\"\n}",
			"type": "json",
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
						"Porting Order"
					],
					"operation": [
						"List Porting Orders"
					]
				}
			}
		},
		{
			"displayName": "Filter Customer Reference",
			"name": "filter%5Bcustomer_reference%5D",
			"description": "Filter results by user reference",
			"default": "123abc",
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
						"Porting Order"
					],
					"operation": [
						"List Porting Orders"
					]
				}
			}
		},
		{
			"displayName": "Filter Phone Numbers Country Code",
			"name": "filter%5Bphone_numbers%5D%5Bcountry_code%5D",
			"description": "Filter results by country ISO 3166-1 alpha-2 code",
			"default": "US",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[phone_numbers][country_code]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"List Porting Orders"
					]
				}
			}
		},
		{
			"displayName": "Filter Phone Numbers Carrier Name",
			"name": "filter%5Bphone_numbers%5D%5Bcarrier_name%5D",
			"description": "Filter results by old service provider",
			"default": "Telnyx",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[phone_numbers][carrier_name]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"List Porting Orders"
					]
				}
			}
		},
		{
			"displayName": "Filter Misc Type",
			"name": "filter%5Bmisc%5D%5Btype%5D",
			"description": "Filter results by porting order type",
			"default": "full",
			"type": "options",
			"options": [
				{
					"name": "Full",
					"value": "full"
				},
				{
					"name": "Partial",
					"value": "partial"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[misc][type]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"List Porting Orders"
					]
				}
			}
		},
		{
			"displayName": "Filter End User Admin Entity Name",
			"name": "filter%5Bend_user%5D%5Badmin%5D%5Bentity_name%5D",
			"description": "Filter results by person or company name",
			"default": "Porter McPortersen",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[end_user][admin][entity_name]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"List Porting Orders"
					]
				}
			}
		},
		{
			"displayName": "Filter End User Admin Auth Person Name",
			"name": "filter%5Bend_user%5D%5Badmin%5D%5Bauth_person_name%5D",
			"description": "Filter results by authorized person",
			"default": "Admin McPortersen",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[end_user][admin][auth_person_name]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"List Porting Orders"
					]
				}
			}
		},
		{
			"displayName": "Filter Activation Settings Fast Port Eligible",
			"name": "filter%5Bactivation_settings%5D%5Bfast_port_eligible%5D",
			"description": "Filter results by fast port eligible",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[activation_settings][fast_port_eligible]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"List Porting Orders"
					]
				}
			}
		},
		{
			"displayName": "Filter Activation Settings Foc Datetime Requested Gt",
			"name": "filter%5Bactivation_settings%5D%5Bfoc_datetime_requested%5D%5Bgt%5D",
			"description": "Filter results by foc date later than this value",
			"default": "2021-03-25T10:00:00.000Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[activation_settings][foc_datetime_requested][gt]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"List Porting Orders"
					]
				}
			}
		},
		{
			"displayName": "Filter Activation Settings Foc Datetime Requested Lt",
			"name": "filter%5Bactivation_settings%5D%5Bfoc_datetime_requested%5D%5Blt%5D",
			"description": "Filter results by foc date earlier than this value",
			"default": "2021-03-25T10:00:00.000Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[activation_settings][foc_datetime_requested][lt]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"List Porting Orders"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Specifies the sort order for results. If not given, results are sorted by created_at in descending order.",
			"default": "created_at",
			"type": "options",
			"options": [
				{
					"name": "Created At",
					"value": "created_at"
				},
				{
					"name": "Created At",
					"value": "-created_at"
				},
				{
					"name": "Activation Settings Foc Datetime Requested",
					"value": "activation_settings.foc_datetime_requested"
				},
				{
					"name": "Activation Settings Foc Datetime Requested",
					"value": "-activation_settings.foc_datetime_requested"
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
						"Porting Order"
					],
					"operation": [
						"List Porting Orders"
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
						"Porting Order"
					],
					"operation": [
						"List Porting Orders"
					]
				}
			}
		},
		{
			"displayName": "POST /porting_orders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"Create Porting Order"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Phone Numbers",
			"name": "phone_numbers",
			"type": "json",
			"default": "[\n  \"+13035550000\",\n  \"+13035550001\",\n  \"+13035550002\"\n]",
			"description": "The list of +E.164 formatted phone numbers",
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
						"Porting Order"
					],
					"operation": [
						"Create Porting Order"
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
						"Porting Order"
					],
					"operation": [
						"Create Porting Order"
					]
				}
			}
		},
		{
			"displayName": "GET /porting_orders/exception_types",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"List Porting Orders Exception Types"
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
						"Porting Order"
					],
					"operation": [
						"List Porting Orders Exception Types"
					]
				}
			}
		},
		{
			"displayName": "DELETE /porting_orders/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"Delete Porting Order"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Porting Order id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"Delete Porting Order"
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
						"Porting Order"
					],
					"operation": [
						"Delete Porting Order"
					]
				}
			}
		},
		{
			"displayName": "GET /porting_orders/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"Get Porting Order"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Porting Order id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"Get Porting Order"
					]
				}
			}
		},
		{
			"displayName": "Include Phone Numbers",
			"name": "include_phone_numbers",
			"description": "Include the first 50 phone number objects in the results",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_phone_numbers",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"Get Porting Order"
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
						"Porting Order"
					],
					"operation": [
						"Get Porting Order"
					]
				}
			}
		},
		{
			"displayName": "PATCH /porting_orders/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"Update Porting Order"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Porting Order id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"Update Porting Order"
					]
				}
			}
		},
		{
			"displayName": "Activation Settings",
			"name": "activation_settings",
			"type": "json",
			"default": "{\n  \"foc_datetime_requested\": \"2021-03-19T10:07:15.527Z\"\n}",
			"routing": {
				"send": {
					"property": "activation_settings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"Update Porting Order"
					]
				}
			}
		},
		{
			"displayName": "Customer Reference",
			"name": "customer_reference",
			"type": "string",
			"default": "",
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
						"Porting Order"
					],
					"operation": [
						"Update Porting Order"
					]
				}
			}
		},
		{
			"displayName": "End User",
			"name": "end_user",
			"type": "json",
			"default": "{\n  \"admin\": {\n    \"account_number\": \"123abc\",\n    \"auth_person_name\": \"Porter McPortersen II\",\n    \"billing_phone_number\": 13035551234,\n    \"business_identifier\": \"abc123\",\n    \"entity_name\": \"Porter McPortersen\",\n    \"pin_passcode\": 1234,\n    \"tax_identifier\": \"1234abcd\"\n  },\n  \"location\": {\n    \"administrative_area\": \"IL\",\n    \"country_code\": \"US\",\n    \"extended_address\": \"Suite 504\",\n    \"locality\": \"Chicago\",\n    \"postal_code\": 60654,\n    \"street_address\": \"311 W. Superior St\"\n  }\n}",
			"routing": {
				"send": {
					"property": "end_user",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"Update Porting Order"
					]
				}
			}
		},
		{
			"displayName": "Misc",
			"name": "misc",
			"type": "json",
			"default": "{\n  \"remaining_numbers_action\": \"disconnect\",\n  \"type\": \"full\"\n}",
			"routing": {
				"send": {
					"property": "misc",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"Update Porting Order"
					]
				}
			}
		},
		{
			"displayName": "Phone Number Configuration",
			"name": "phone_number_configuration",
			"type": "json",
			"default": "{\n  \"connection_id\": \"f1486bae-f067-460c-ad43-73a92848f902\",\n  \"emergency_address_id\": \"f1486bae-f067-460c-ad43-73a92848f902\",\n  \"messaging_profile_id\": \"f1486bae-f067-460c-ad43-73a92848f901\",\n  \"tags\": [\n    \"abc\",\n    \"123\"\n  ]\n}",
			"routing": {
				"send": {
					"property": "phone_number_configuration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"Update Porting Order"
					]
				}
			}
		},
		{
			"displayName": "Requirements",
			"name": "requirements",
			"type": "json",
			"default": "[\n  {\n    \"field_value\": \"9787fb5f-cbe5-4de4-b765-3303774ee9fe\",\n    \"requirement_type_id\": \"59b0762a-b274-4f76-ac32-4d5cf0272e66\"\n  }\n]",
			"description": "List of requirements for porting numbers.",
			"routing": {
				"send": {
					"property": "requirements",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"Update Porting Order"
					]
				}
			}
		},
		{
			"displayName": "User Feedback",
			"name": "user_feedback",
			"type": "json",
			"default": "{\n  \"user_comment\": \"I loved my experience porting numbers with Telnyx\",\n  \"user_rating\": 5\n}",
			"routing": {
				"send": {
					"property": "user_feedback",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"Update Porting Order"
					]
				}
			}
		},
		{
			"displayName": "Webhook Url",
			"name": "webhook_url",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "webhook_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"Update Porting Order"
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
						"Porting Order"
					],
					"operation": [
						"Update Porting Order"
					]
				}
			}
		},
		{
			"displayName": "POST /porting_orders/{id}/actions/activate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"Activate Porting Order"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Porting Order id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"Activate Porting Order"
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
						"Porting Order"
					],
					"operation": [
						"Activate Porting Order"
					]
				}
			}
		},
		{
			"displayName": "POST /porting_orders/{id}/actions/cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"Cancel Porting Order"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Porting Order id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"Cancel Porting Order"
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
						"Porting Order"
					],
					"operation": [
						"Cancel Porting Order"
					]
				}
			}
		},
		{
			"displayName": "POST /porting_orders/{id}/actions/confirm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"Confirm Porting Order"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Porting Order id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"Confirm Porting Order"
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
						"Porting Order"
					],
					"operation": [
						"Confirm Porting Order"
					]
				}
			}
		},
		{
			"displayName": "GET /porting_orders/{id}/activation_jobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"List Porting Orders Activation Jobs"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Porting Order id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"List Porting Orders Activation Jobs"
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
						"Porting Order"
					],
					"operation": [
						"List Porting Orders Activation Jobs"
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
						"Porting Order"
					],
					"operation": [
						"List Porting Orders Activation Jobs"
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
						"Porting Order"
					],
					"operation": [
						"List Porting Orders Activation Jobs"
					]
				}
			}
		},
		{
			"displayName": "GET /porting_orders/{id}/activation_jobs/{activationJobId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"Get Porting Orders Activation Job"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Porting Order id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"Get Porting Orders Activation Job"
					]
				}
			}
		},
		{
			"displayName": "Activation Job Id",
			"name": "activationJobId",
			"required": true,
			"description": "Activation Job Identifier",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"Get Porting Orders Activation Job"
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
						"Porting Order"
					],
					"operation": [
						"Get Porting Orders Activation Job"
					]
				}
			}
		},
		{
			"displayName": "GET /porting_orders/{id}/comments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"List Porting Orders Comments"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Porting Order id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"List Porting Orders Comments"
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
						"Porting Order"
					],
					"operation": [
						"List Porting Orders Comments"
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
						"Porting Order"
					],
					"operation": [
						"List Porting Orders Comments"
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
						"Porting Order"
					],
					"operation": [
						"List Porting Orders Comments"
					]
				}
			}
		},
		{
			"displayName": "POST /porting_orders/{id}/comments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"Create Porting Order Comment"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Porting Order id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"Create Porting Order Comment"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": "Please, let me know when the port completes",
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
						"Porting Order"
					],
					"operation": [
						"Create Porting Order Comment"
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
						"Porting Order"
					],
					"operation": [
						"Create Porting Order Comment"
					]
				}
			}
		},
		{
			"displayName": "GET /porting_orders/{id}/loa_template",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"Get Porting Order LOA Template"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Porting Order id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"Get Porting Order LOA Template"
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
						"Porting Order"
					],
					"operation": [
						"Get Porting Order LOA Template"
					]
				}
			}
		},
		{
			"displayName": "GET /porting_phone_numbers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"GET Porting Phone Numbers"
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
						"Porting Order"
					],
					"operation": [
						"GET Porting Phone Numbers"
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
						"Porting Order"
					],
					"operation": [
						"GET Porting Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter Porting Order Id",
			"name": "filter%5Bporting_order_id%5D",
			"description": "Filter results by porting order id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[porting_order_id]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"GET Porting Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter Phone Number",
			"name": "filter%5Bphone_number%5D",
			"description": "Filter results by phone number",
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
						"Porting Order"
					],
					"operation": [
						"GET Porting Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter Activation Status",
			"name": "filter%5Bactivation_status%5D",
			"description": "Filter results by activation status",
			"default": "Active",
			"type": "options",
			"options": [
				{
					"name": "New",
					"value": "New"
				},
				{
					"name": "Pending",
					"value": "Pending"
				},
				{
					"name": "Conflict",
					"value": "Conflict"
				},
				{
					"name": "Cancel Pending",
					"value": "Cancel Pending"
				},
				{
					"name": "Failed",
					"value": "Failed"
				},
				{
					"name": "Concurred",
					"value": "Concurred"
				},
				{
					"name": "Activate RDY",
					"value": "Activate RDY"
				},
				{
					"name": "Disconnect Pending",
					"value": "Disconnect Pending"
				},
				{
					"name": "Concurrence Sent",
					"value": "Concurrence Sent"
				},
				{
					"name": "Old",
					"value": "Old"
				},
				{
					"name": "Sending",
					"value": "Sending"
				},
				{
					"name": "Active",
					"value": "Active"
				},
				{
					"name": "Canceled",
					"value": "Canceled"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[activation_status]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"GET Porting Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter Portability Status",
			"name": "filter%5Bportability_status%5D",
			"description": "Filter results by portability status",
			"default": "confirmed",
			"type": "options",
			"options": [
				{
					"name": "Pending",
					"value": "pending"
				},
				{
					"name": "Confirmed",
					"value": "confirmed"
				},
				{
					"name": "Provisional",
					"value": "provisional"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[portability_status]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Porting Order"
					],
					"operation": [
						"GET Porting Phone Numbers"
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
						"Porting Order"
					],
					"operation": [
						"GET Porting Phone Numbers"
					]
				}
			}
		},
];
