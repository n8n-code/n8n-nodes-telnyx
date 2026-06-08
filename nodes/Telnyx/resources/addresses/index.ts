import type { INodeProperties } from 'n8n-workflow';

export const addressesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					]
				}
			},
			"options": [
				{
					"name": "Find Addresss",
					"value": "Find Addresss",
					"action": "List all addresses",
					"description": "Returns a list of your addresses.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/addresses"
						}
					}
				},
				{
					"name": "Create Address",
					"value": "Create Address",
					"action": "Creates an address",
					"description": "Creates an address.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/addresses"
						}
					}
				},
				{
					"name": "Validate Address",
					"value": "Validate Address",
					"action": "Validate an address",
					"description": "Validates an address for emergency services.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/addresses/actions/validate"
						}
					}
				},
				{
					"name": "Delete Address",
					"value": "Delete Address",
					"action": "Deletes an address",
					"description": "Deletes an existing address.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/addresses/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Address",
					"value": "Get Address",
					"action": "Retrieve an address",
					"description": "Retrieves the details of an existing address.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/addresses/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /addresses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Find Addresss"
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
						"Addresses"
					],
					"operation": [
						"Find Addresss"
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
						"Addresses"
					],
					"operation": [
						"Find Addresss"
					]
				}
			}
		},
		{
			"displayName": "Filter Customer Reference Eq",
			"name": "filter%5Bcustomer_reference%5D%5Beq%5D",
			"description": "Filter addresses via the customer reference set. Matching is not case-sensitive.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[customer_reference][eq]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Find Addresss"
					]
				}
			}
		},
		{
			"displayName": "Filter Customer Reference Contains",
			"name": "filter%5Bcustomer_reference%5D%5Bcontains%5D",
			"description": "If present, addresses with <code>customer_reference</code> containing the given value will be returned. Matching is not case-sensitive.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[customer_reference][contains]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Find Addresss"
					]
				}
			}
		},
		{
			"displayName": "Filter Used As Emergency",
			"name": "filter%5Bused_as_emergency%5D",
			"description": "If set as 'true', only addresses used as the emergency address for at least one active phone-number will be returned. When set to 'false', the opposite happens: only addresses not used as the emergency address from phone-numbers will be returned.",
			"default": "null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[used_as_emergency]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Find Addresss"
					]
				}
			}
		},
		{
			"displayName": "Filter Street Address Contains",
			"name": "filter%5Bstreet_address%5D%5Bcontains%5D",
			"description": "If present, addresses with <code>street_address</code> containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.",
			"default": "null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[street_address][contains]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Find Addresss"
					]
				}
			}
		},
		{
			"displayName": "Filter Address Book Eq",
			"name": "filter%5Baddress_book%5D%5Beq%5D",
			"description": "If present, only returns results with the <code>address_book</code> flag set to the given value.",
			"default": "null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[address_book][eq]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Find Addresss"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the <code> -</code> prefix.<br/><br/>\nThat is: <ul>\n  <li>\n    <code>street_address</code>: sorts the result by the\n    <code>street_address</code> field in ascending order.\n  </li>\n\n  <li>\n    <code>-street_address</code>: sorts the result by the\n    <code>street_address</code> field in descending order.\n  </li>\n</ul> <br/> If not given, results are sorted by <code>created_at</code> in descending order.",
			"default": "street_address",
			"type": "options",
			"options": [
				{
					"name": "Created At",
					"value": "created_at"
				},
				{
					"name": "First Name",
					"value": "first_name"
				},
				{
					"name": "Last Name",
					"value": "last_name"
				},
				{
					"name": "Business Name",
					"value": "business_name"
				},
				{
					"name": "Street Address",
					"value": "street_address"
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
						"Addresses"
					],
					"operation": [
						"Find Addresss"
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
						"Addresses"
					],
					"operation": [
						"Find Addresss"
					]
				}
			}
		},
		{
			"displayName": "POST /addresses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Create Address"
					]
				}
			}
		},
		{
			"displayName": "Address Book",
			"name": "address_book",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether or not the address should be considered part of your list of addresses that appear for regular use.",
			"routing": {
				"send": {
					"property": "address_book",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Create Address"
					]
				}
			}
		},
		{
			"displayName": "Administrative Area",
			"name": "administrative_area",
			"type": "string",
			"default": "IL",
			"description": "The locality of the address. For US addresses, this corresponds to the state of the address.",
			"routing": {
				"send": {
					"property": "administrative_area",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Create Address"
					]
				}
			}
		},
		{
			"displayName": "Borough",
			"name": "borough",
			"type": "string",
			"default": "Guadalajara",
			"description": "The borough of the address. This field is not used for addresses in the US but is used for some international addresses.",
			"routing": {
				"send": {
					"property": "borough",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Create Address"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Business Name",
			"name": "business_name",
			"type": "string",
			"default": "Toy-O'Kon",
			"description": "The business name associated with the address. An address must have either a first last name or a business name.",
			"routing": {
				"send": {
					"property": "business_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Create Address"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Country Code",
			"name": "country_code",
			"type": "string",
			"default": "US",
			"description": "The two-character (ISO 3166-1 alpha-2) country code of the address.",
			"routing": {
				"send": {
					"property": "country_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Create Address"
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
						"Addresses"
					],
					"operation": [
						"Create Address"
					]
				}
			}
		},
		{
			"displayName": "Extended Address",
			"name": "extended_address",
			"type": "string",
			"default": "#504",
			"description": "Additional street address information about the address such as, but not limited to, unit number or apartment number.",
			"routing": {
				"send": {
					"property": "extended_address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Create Address"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "First Name",
			"name": "first_name",
			"type": "string",
			"default": "Alfred",
			"description": "The first name associated with the address. An address must have either a first last name or a business name.",
			"routing": {
				"send": {
					"property": "first_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Create Address"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Last Name",
			"name": "last_name",
			"type": "string",
			"default": "Foster",
			"description": "The last name associated with the address. An address must have either a first last name or a business name.",
			"routing": {
				"send": {
					"property": "last_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Create Address"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Locality",
			"name": "locality",
			"type": "string",
			"default": "Chicago",
			"description": "The locality of the address. For US addresses, this corresponds to the city of the address.",
			"routing": {
				"send": {
					"property": "locality",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Create Address"
					]
				}
			}
		},
		{
			"displayName": "Neighborhood",
			"name": "neighborhood",
			"type": "string",
			"default": "Ciudad de los deportes",
			"description": "The neighborhood of the address. This field is not used for addresses in the US but is used for some international addresses.",
			"routing": {
				"send": {
					"property": "neighborhood",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Create Address"
					]
				}
			}
		},
		{
			"displayName": "Phone Number",
			"name": "phone_number",
			"type": "string",
			"default": "+12125559000",
			"description": "The phone number associated with the address.",
			"routing": {
				"send": {
					"property": "phone_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Create Address"
					]
				}
			}
		},
		{
			"displayName": "Postal Code",
			"name": "postal_code",
			"type": "string",
			"default": "60654",
			"description": "The postal code of the address.",
			"routing": {
				"send": {
					"property": "postal_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Create Address"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Street Address",
			"name": "street_address",
			"type": "string",
			"default": "311 W Superior Street",
			"description": "The primary street address information about the address.",
			"routing": {
				"send": {
					"property": "street_address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Create Address"
					]
				}
			}
		},
		{
			"displayName": "Validate Address",
			"name": "validate_address",
			"type": "boolean",
			"default": true,
			"description": "Indicates whether or not the address should be validated for emergency use upon creation or not. This should be left with the default value of `true` unless you have used the `/addresses/actions/validate` endpoint to validate the address separately prior to creation. If an address is not validated for emergency use upon creation and it is not valid, it will not be able to be used for emergency services.",
			"routing": {
				"send": {
					"property": "validate_address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Create Address"
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
						"Addresses"
					],
					"operation": [
						"Create Address"
					]
				}
			}
		},
		{
			"displayName": "POST /addresses/actions/validate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Validate Address"
					]
				}
			}
		},
		{
			"displayName": "Administrative Area",
			"name": "administrative_area",
			"type": "string",
			"default": "IL",
			"description": "The locality of the address. For US addresses, this corresponds to the state of the address.",
			"routing": {
				"send": {
					"property": "administrative_area",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Validate Address"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Country Code",
			"name": "country_code",
			"type": "string",
			"default": "US",
			"description": "The two-character (ISO 3166-1 alpha-2) country code of the address.",
			"routing": {
				"send": {
					"property": "country_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Validate Address"
					]
				}
			}
		},
		{
			"displayName": "Extended Address",
			"name": "extended_address",
			"type": "string",
			"default": "#504",
			"description": "Additional street address information about the address such as, but not limited to, unit number or apartment number.",
			"routing": {
				"send": {
					"property": "extended_address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Validate Address"
					]
				}
			}
		},
		{
			"displayName": "Locality",
			"name": "locality",
			"type": "string",
			"default": "Chicago",
			"description": "The locality of the address. For US addresses, this corresponds to the city of the address.",
			"routing": {
				"send": {
					"property": "locality",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Validate Address"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Postal Code",
			"name": "postal_code",
			"type": "string",
			"default": "60654",
			"description": "The postal code of the address.",
			"routing": {
				"send": {
					"property": "postal_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Validate Address"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Street Address",
			"name": "street_address",
			"type": "string",
			"default": "311 W Superior Street",
			"description": "The primary street address information about the address.",
			"routing": {
				"send": {
					"property": "street_address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Validate Address"
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
						"Addresses"
					],
					"operation": [
						"Validate Address"
					]
				}
			}
		},
		{
			"displayName": "DELETE /addresses/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Delete Address"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "address ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Delete Address"
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
						"Addresses"
					],
					"operation": [
						"Delete Address"
					]
				}
			}
		},
		{
			"displayName": "GET /addresses/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Get Address"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "address ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Get Address"
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
						"Addresses"
					],
					"operation": [
						"Get Address"
					]
				}
			}
		},
];
