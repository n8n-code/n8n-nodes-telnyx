import type { INodeProperties } from 'n8n-workflow';

export const numberReservationsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Number Reservations"
					]
				}
			},
			"options": [
				{
					"name": "List Number Reservations",
					"value": "List Number Reservations",
					"action": "List number reservations",
					"description": "Gets a paginated list of phone number reservations.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/number_reservations"
						}
					}
				},
				{
					"name": "Create Number Reservation",
					"value": "Create Number Reservation",
					"action": "Create a number reservation",
					"description": "Creates a Phone Number Reservation for multiple numbers.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/number_reservations"
						}
					}
				},
				{
					"name": "Retrieve Number Reservation",
					"value": "Retrieve Number Reservation",
					"action": "Retrieve a number reservation",
					"description": "Gets a single phone number reservation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/number_reservations/{{$parameter[\"number_reservation_id\"]}}"
						}
					}
				},
				{
					"name": "Extend Number Reservation Expiry Time",
					"value": "Extend Number Reservation Expiry Time",
					"action": "Extend a number reservation",
					"description": "Extends reservation expiry time on all phone numbers.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/number_reservations/{{$parameter[\"number_reservation_id\"]}}/actions/extend"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /number_reservations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Reservations"
					],
					"operation": [
						"List Number Reservations"
					]
				}
			}
		},
		{
			"displayName": "Filter Status",
			"name": "filter%5Bstatus%5D",
			"description": "Filter number reservations by status.",
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
						"Number Reservations"
					],
					"operation": [
						"List Number Reservations"
					]
				}
			}
		},
		{
			"displayName": "Filter Created At Gt",
			"name": "filter%5Bcreated_at%5D%5Bgt%5D",
			"description": "Filter number reservations later than this value.",
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
						"Number Reservations"
					],
					"operation": [
						"List Number Reservations"
					]
				}
			}
		},
		{
			"displayName": "Filter Created At Lt",
			"name": "filter%5Bcreated_at%5D%5Blt%5D",
			"description": "Filter number reservations earlier than this value.",
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
						"Number Reservations"
					],
					"operation": [
						"List Number Reservations"
					]
				}
			}
		},
		{
			"displayName": "Filter Phone Numbers Phone Number",
			"name": "filter%5Bphone_numbers-phone_number%5D",
			"description": "Filter number reservations having these phone numbers.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[phone_numbers.phone_number]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Reservations"
					],
					"operation": [
						"List Number Reservations"
					]
				}
			}
		},
		{
			"displayName": "Filter Customer Reference",
			"name": "filter%5Bcustomer_reference%5D",
			"description": "Filter number reservations via the customer reference set.",
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
						"Number Reservations"
					],
					"operation": [
						"List Number Reservations"
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
						"Number Reservations"
					],
					"operation": [
						"List Number Reservations"
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
						"Number Reservations"
					],
					"operation": [
						"List Number Reservations"
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
						"Number Reservations"
					],
					"operation": [
						"List Number Reservations"
					]
				}
			}
		},
		{
			"displayName": "POST /number_reservations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Reservations"
					],
					"operation": [
						"Create Number Reservation"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "string",
			"default": "2018-01-01T00:00:00.000000Z",
			"description": "An ISO 8901 datetime string denoting when the numbers reservation was created.",
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
						"Number Reservations"
					],
					"operation": [
						"Create Number Reservation"
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
						"Number Reservations"
					],
					"operation": [
						"Create Number Reservation"
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
						"Number Reservations"
					],
					"operation": [
						"Create Number Reservation"
					]
				}
			}
		},
		{
			"displayName": "Phone Numbers",
			"name": "phone_numbers",
			"type": "json",
			"default": "[\n  {\n    \"created_at\": \"2018-01-01T00:00:00.000000Z\",\n    \"expired_at\": \"2018-01-01T00:00:00.000000Z\",\n    \"id\": \"12ade33a-21c0-473b-b055-b3c836e1c292\",\n    \"phone_number\": \"+19705555098\",\n    \"record_type\": \"reserved_phone_number\",\n    \"status\": \"pending\",\n    \"updated_at\": \"2018-01-01T00:00:00.000000Z\"\n  }\n]",
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
						"Number Reservations"
					],
					"operation": [
						"Create Number Reservation"
					]
				}
			}
		},
		{
			"displayName": "Record Type",
			"name": "record_type",
			"type": "string",
			"default": "number_reservation",
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
						"Number Reservations"
					],
					"operation": [
						"Create Number Reservation"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "pending",
			"description": "The status of the entire reservation.",
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
						"Number Reservations"
					],
					"operation": [
						"Create Number Reservation"
					]
				}
			}
		},
		{
			"displayName": "Updated At",
			"name": "updated_at",
			"type": "string",
			"default": "2018-01-01T00:00:00.000000Z",
			"description": "An ISO 8901 datetime string for when the number reservation was updated.",
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
						"Number Reservations"
					],
					"operation": [
						"Create Number Reservation"
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
						"Number Reservations"
					],
					"operation": [
						"Create Number Reservation"
					]
				}
			}
		},
		{
			"displayName": "GET /number_reservations/{number_reservation_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Reservations"
					],
					"operation": [
						"Retrieve Number Reservation"
					]
				}
			}
		},
		{
			"displayName": "Number Reservation Id",
			"name": "number_reservation_id",
			"required": true,
			"description": "The number reservation ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Reservations"
					],
					"operation": [
						"Retrieve Number Reservation"
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
						"Number Reservations"
					],
					"operation": [
						"Retrieve Number Reservation"
					]
				}
			}
		},
		{
			"displayName": "POST /number_reservations/{number_reservation_id}/actions/extend",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Reservations"
					],
					"operation": [
						"Extend Number Reservation Expiry Time"
					]
				}
			}
		},
		{
			"displayName": "Number Reservation Id",
			"name": "number_reservation_id",
			"required": true,
			"description": "The number reservation ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Reservations"
					],
					"operation": [
						"Extend Number Reservation Expiry Time"
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
						"Number Reservations"
					],
					"operation": [
						"Extend Number Reservation Expiry Time"
					]
				}
			}
		},
];
