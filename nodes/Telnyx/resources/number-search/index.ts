import type { INodeProperties } from 'n8n-workflow';

export const numberSearchDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Number Search"
					]
				}
			},
			"options": [
				{
					"name": "List Available Phone Number Blocks",
					"value": "List Available Phone Number Blocks",
					"action": "List available phone number blocks",
					"description": "List available phone number blocks",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/available_phone_number_blocks"
						}
					}
				},
				{
					"name": "List Available Phone Numbers",
					"value": "List Available Phone Numbers",
					"action": "List available phone numbers",
					"description": "List available phone numbers",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/available_phone_numbers"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /available_phone_number_blocks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Search"
					],
					"operation": [
						"List Available Phone Number Blocks"
					]
				}
			}
		},
		{
			"displayName": "Filter Phone Number Starts With",
			"name": "filter%5Bphone_number%5D%5Bstarts_with%5D",
			"description": "Filter number blocks that start with a pattern (meant to be used after `national_destination_code` filter has been set).",
			"default": "201",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[phone_number][starts_with]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Search"
					],
					"operation": [
						"List Available Phone Number Blocks"
					]
				}
			}
		},
		{
			"displayName": "Filter Phone Number Ends With",
			"name": "filter%5Bphone_number%5D%5Bends_with%5D",
			"description": "Filter numbers ending with a pattern.",
			"default": "8000",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[phone_number][ends_with]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Search"
					],
					"operation": [
						"List Available Phone Number Blocks"
					]
				}
			}
		},
		{
			"displayName": "Filter Phone Number Contains",
			"name": "filter%5Bphone_number%5D%5Bcontains%5D",
			"description": "Filter numbers containing a pattern.",
			"default": "456",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[phone_number][contains]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Search"
					],
					"operation": [
						"List Available Phone Number Blocks"
					]
				}
			}
		},
		{
			"displayName": "Filter Locality",
			"name": "filter%5Blocality%5D",
			"description": "Filter phone numbers by city.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[locality]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Search"
					],
					"operation": [
						"List Available Phone Number Blocks"
					]
				}
			}
		},
		{
			"displayName": "Filter Administrative Area",
			"name": "filter%5Badministrative_area%5D",
			"description": "Filter phone numbers by US state/CA province.",
			"default": "IL",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[administrative_area]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Search"
					],
					"operation": [
						"List Available Phone Number Blocks"
					]
				}
			}
		},
		{
			"displayName": "Filter Country Code",
			"name": "filter%5Bcountry_code%5D",
			"description": "Filter phone numbers by ISO alpha-2 country code.",
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
						"Number Search"
					],
					"operation": [
						"List Available Phone Number Blocks"
					]
				}
			}
		},
		{
			"displayName": "Filter National Destination Code",
			"name": "filter%5Bnational_destination_code%5D",
			"description": "Filter by the national destination code of the number. This filter is only applicable to North American numbers.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[national_destination_code]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Search"
					],
					"operation": [
						"List Available Phone Number Blocks"
					]
				}
			}
		},
		{
			"displayName": "Filter Rate Center",
			"name": "filter%5Brate_center%5D",
			"description": "Filter phone numbers by NANP rate center. This filter is only applicable to North American numbers.",
			"default": "CHICAGO HEIGHTS",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[rate_center]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Search"
					],
					"operation": [
						"List Available Phone Number Blocks"
					]
				}
			}
		},
		{
			"displayName": "Filter Number Type",
			"name": "filter%5Bnumber_type%5D",
			"description": "Filter phone numbers by number type.",
			"default": "toll-free",
			"type": "options",
			"options": [
				{
					"name": "Toll Free",
					"value": "toll-free"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[number_type]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Search"
					],
					"operation": [
						"List Available Phone Number Blocks"
					]
				}
			}
		},
		{
			"displayName": "Filter Features",
			"name": "filter%5Bfeatures%5D",
			"description": "Filter if the phone number should be used for voice, fax, mms, sms, emergency.",
			"default": "\"voice,sms\"",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[features]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Search"
					],
					"operation": [
						"List Available Phone Number Blocks"
					]
				}
			}
		},
		{
			"displayName": "Filter Minimum Block Size",
			"name": "filter%5Bminimum_block_size%5D",
			"description": "Filter number blocks by minimum blocks size",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[minimum_block_size]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Search"
					],
					"operation": [
						"List Available Phone Number Blocks"
					]
				}
			}
		},
		{
			"displayName": "Filter Limit",
			"name": "filter%5Blimit%5D",
			"description": "Limits the number of results.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[limit]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Search"
					],
					"operation": [
						"List Available Phone Number Blocks"
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
						"Number Search"
					],
					"operation": [
						"List Available Phone Number Blocks"
					]
				}
			}
		},
		{
			"displayName": "GET /available_phone_numbers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Search"
					],
					"operation": [
						"List Available Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter Phone Number Starts With",
			"name": "filter%5Bphone_number%5D%5Bstarts_with%5D",
			"description": "Filter numbers starting with a pattern (meant to be used after `national_destination_code` filter has been set).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[phone_number][starts_with]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Search"
					],
					"operation": [
						"List Available Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter Phone Number Ends With",
			"name": "filter%5Bphone_number%5D%5Bends_with%5D",
			"description": "Filter numbers ending with a pattern.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[phone_number][ends_with]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Search"
					],
					"operation": [
						"List Available Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter Phone Number Contains",
			"name": "filter%5Bphone_number%5D%5Bcontains%5D",
			"description": "Filter numbers containing a pattern.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[phone_number][contains]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Search"
					],
					"operation": [
						"List Available Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter Locality",
			"name": "filter%5Blocality%5D",
			"description": "Filter phone numbers by city.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[locality]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Search"
					],
					"operation": [
						"List Available Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter Administrative Area",
			"name": "filter%5Badministrative_area%5D",
			"description": "Filter phone numbers by US state/CA province.",
			"default": "IL",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[administrative_area]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Search"
					],
					"operation": [
						"List Available Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter Country Code",
			"name": "filter%5Bcountry_code%5D",
			"description": "Filter phone numbers by ISO alpha-2 country code.",
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
						"Number Search"
					],
					"operation": [
						"List Available Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter National Destination Code",
			"name": "filter%5Bnational_destination_code%5D",
			"description": "Filter by the national destination code of the number. This filter is only applicable to North American numbers.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[national_destination_code]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Search"
					],
					"operation": [
						"List Available Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter Rate Center",
			"name": "filter%5Brate_center%5D",
			"description": "Filter phone numbers by NANP rate center. This filter is only applicable to North American numbers.",
			"default": "CHICAGO HEIGHTS",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[rate_center]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Search"
					],
					"operation": [
						"List Available Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter Number Type",
			"name": "filter%5Bnumber_type%5D",
			"description": "Filter phone numbers by number type.",
			"default": "local",
			"type": "options",
			"options": [
				{
					"name": "Toll Free",
					"value": "toll-free"
				},
				{
					"name": "National",
					"value": "national"
				},
				{
					"name": "Mobile",
					"value": "mobile"
				},
				{
					"name": "Local",
					"value": "local"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[number_type]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Search"
					],
					"operation": [
						"List Available Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter Features",
			"name": "filter%5Bfeatures%5D",
			"description": "Filter if the phone number should be used for voice, fax, mms, sms, emergency.",
			"default": "\"voice,sms\"",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[features]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Search"
					],
					"operation": [
						"List Available Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter Limit",
			"name": "filter%5Blimit%5D",
			"description": "Limits the number of results.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[limit]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Search"
					],
					"operation": [
						"List Available Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter Best Effort",
			"name": "filter%5Bbest_effort%5D",
			"description": "Filter to determine if best effort results should be included.",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[best_effort]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Search"
					],
					"operation": [
						"List Available Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter Quickship",
			"name": "filter%5Bquickship%5D",
			"description": "Filter to exclude phone numbers that need additional time after to purchase to receive phone calls.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[quickship]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Search"
					],
					"operation": [
						"List Available Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter Reservable",
			"name": "filter%5Breservable%5D",
			"description": "Filter to exclude phone numbers that cannot be reserved before purchase.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[reservable]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Search"
					],
					"operation": [
						"List Available Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter Exclude Held Numbers",
			"name": "filter%5Bexclude_held_numbers%5D",
			"description": "Filter to exclude phone numbers that are currently on hold for your account.",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[exclude_held_numbers]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Search"
					],
					"operation": [
						"List Available Phone Numbers"
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
						"Number Search"
					],
					"operation": [
						"List Available Phone Numbers"
					]
				}
			}
		},
];
