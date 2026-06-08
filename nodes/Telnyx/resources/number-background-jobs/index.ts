import type { INodeProperties } from 'n8n-workflow';

export const numberBackgroundJobsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Number Background Jobs"
					]
				}
			},
			"options": [
				{
					"name": "List Phone Numbers Jobs",
					"value": "List Phone Numbers Jobs",
					"action": "Lists the phone numbers jobs",
					"description": "Lists the phone numbers jobs",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/phone_numbers/jobs"
						}
					}
				},
				{
					"name": "Create Phone Numbers Job Delete Phone Numbers",
					"value": "Create Phone Numbers Job Delete Phone Numbers",
					"action": "Delete a batch of numbers",
					"description": "Creates a new background job to delete a batch of numbers. At most one thousand numbers can be updated per API call.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/phone_numbers/jobs/delete_phone_numbers"
						}
					}
				},
				{
					"name": "Create Phone Numbers Job Update Emergency Settings",
					"value": "Create Phone Numbers Job Update Emergency Settings",
					"action": "Update the emergency settings from a batch of numbers",
					"description": "Creates a background job to update the emergency settings of a collection of phone numbers. At most one thousand numbers can be updated per API call.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/phone_numbers/jobs/update_emergency_settings"
						}
					}
				},
				{
					"name": "Create Phone Numbers Job Update Phone Number",
					"value": "Create Phone Numbers Job Update Phone Number",
					"action": "Update a batch of numbers",
					"description": "Creates a new background job to update a batch of numbers. At most one thousand numbers can be updated per API call. At least one of the updateable fields must be submitted.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/phone_numbers/jobs/update_phone_numbers"
						}
					}
				},
				{
					"name": "Retrieve Phone Numbers Job",
					"value": "Retrieve Phone Numbers Job",
					"action": "Retrieve a phone numbers job",
					"description": "Retrieve a phone numbers job",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/phone_numbers/jobs/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /phone_numbers/jobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Background Jobs"
					],
					"operation": [
						"List Phone Numbers Jobs"
					]
				}
			}
		},
		{
			"displayName": "Filter Type",
			"name": "filter%5Btype%5D",
			"description": "Filter the phone number jobs by type.",
			"default": "update_emergency_settings",
			"type": "options",
			"options": [
				{
					"name": "Update Emergency Settings",
					"value": "update_emergency_settings"
				},
				{
					"name": "Delete Phone Numbers",
					"value": "delete_phone_numbers"
				},
				{
					"name": "Update Phone Numbers",
					"value": "update_phone_numbers"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[type]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Background Jobs"
					],
					"operation": [
						"List Phone Numbers Jobs"
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
						"Number Background Jobs"
					],
					"operation": [
						"List Phone Numbers Jobs"
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
						"Number Background Jobs"
					],
					"operation": [
						"List Phone Numbers Jobs"
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
						"Number Background Jobs"
					],
					"operation": [
						"List Phone Numbers Jobs"
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
						"Number Background Jobs"
					],
					"operation": [
						"List Phone Numbers Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /phone_numbers/jobs/delete_phone_numbers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Background Jobs"
					],
					"operation": [
						"Create Phone Numbers Job Delete Phone Numbers"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Phone Numbers",
			"name": "phone_numbers",
			"type": "json",
			"default": "[\n  null\n]",
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
						"Number Background Jobs"
					],
					"operation": [
						"Create Phone Numbers Job Delete Phone Numbers"
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
						"Number Background Jobs"
					],
					"operation": [
						"Create Phone Numbers Job Delete Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "POST /phone_numbers/jobs/update_emergency_settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Background Jobs"
					],
					"operation": [
						"Create Phone Numbers Job Update Emergency Settings"
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
						"Number Background Jobs"
					],
					"operation": [
						"Create Phone Numbers Job Update Emergency Settings"
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
						"Number Background Jobs"
					],
					"operation": [
						"Create Phone Numbers Job Update Emergency Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Phone Numbers",
			"name": "phone_numbers",
			"type": "json",
			"default": "[\n  null\n]",
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
						"Number Background Jobs"
					],
					"operation": [
						"Create Phone Numbers Job Update Emergency Settings"
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
						"Number Background Jobs"
					],
					"operation": [
						"Create Phone Numbers Job Update Emergency Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /phone_numbers/jobs/update_phone_numbers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Background Jobs"
					],
					"operation": [
						"Create Phone Numbers Job Update Phone Number"
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
						"Number Background Jobs"
					],
					"operation": [
						"Create Phone Numbers Job Update Phone Number"
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
						"Number Background Jobs"
					],
					"operation": [
						"Create Phone Numbers Job Update Phone Number"
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
						"Number Background Jobs"
					],
					"operation": [
						"Create Phone Numbers Job Update Phone Number"
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
						"Number Background Jobs"
					],
					"operation": [
						"Create Phone Numbers Job Update Phone Number"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Phone Numbers",
			"name": "phone_numbers",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Array of phone number ids and/or phone numbers in E164 format to update",
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
						"Number Background Jobs"
					],
					"operation": [
						"Create Phone Numbers Job Update Phone Number"
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
						"Number Background Jobs"
					],
					"operation": [
						"Create Phone Numbers Job Update Phone Number"
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
						"Number Background Jobs"
					],
					"operation": [
						"Create Phone Numbers Job Update Phone Number"
					]
				}
			}
		},
		{
			"displayName": "GET /phone_numbers/jobs/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Background Jobs"
					],
					"operation": [
						"Retrieve Phone Numbers Job"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Identifies the Phone Numbers Job.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Background Jobs"
					],
					"operation": [
						"Retrieve Phone Numbers Job"
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
						"Number Background Jobs"
					],
					"operation": [
						"Retrieve Phone Numbers Job"
					]
				}
			}
		},
];
