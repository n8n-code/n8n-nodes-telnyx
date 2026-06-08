import type { INodeProperties } from 'n8n-workflow';

export const inventoryLevelDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Inventory Level"
					]
				}
			},
			"options": [
				{
					"name": "Create Inventory Coverage Request",
					"value": "Create Inventory Coverage Request",
					"action": "Create an inventory coverage request",
					"description": "Creates an inventory coverage request. If locality, npa or national_destination_code is used in groupBy, and no region or locality filters are used, the whole paginated set is returned.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/inventory_coverage"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /inventory_coverage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Inventory Level"
					],
					"operation": [
						"Create Inventory Coverage Request"
					]
				}
			}
		},
		{
			"displayName": "Filter Npa",
			"name": "filter%5Bnpa%5D",
			"description": "Filter by npa",
			"default": 318,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[npa]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inventory Level"
					],
					"operation": [
						"Create Inventory Coverage Request"
					]
				}
			}
		},
		{
			"displayName": "Filter Nxx",
			"name": "filter%5Bnxx%5D",
			"description": "Filter by nxx",
			"default": 202,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[nxx]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inventory Level"
					],
					"operation": [
						"Create Inventory Coverage Request"
					]
				}
			}
		},
		{
			"displayName": "Filter Administrative Area",
			"name": "filter%5Badministrative_area%5D",
			"description": "Filter by administrative area",
			"default": "LA",
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
						"Inventory Level"
					],
					"operation": [
						"Create Inventory Coverage Request"
					]
				}
			}
		},
		{
			"displayName": "Filter Number Type",
			"name": "filter%5Bnumber_type%5D",
			"description": "Filter by number type",
			"default": "did",
			"type": "options",
			"options": [
				{
					"name": "Did",
					"value": "did"
				},
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
						"Inventory Level"
					],
					"operation": [
						"Create Inventory Coverage Request"
					]
				}
			}
		},
		{
			"displayName": "Filter Phone Number Type",
			"name": "filter%5Bphone_number_type%5D",
			"description": "Filter by phone number type",
			"default": "local",
			"type": "options",
			"options": [
				{
					"name": "Local",
					"value": "local"
				},
				{
					"name": "Toll Free",
					"value": "toll_free"
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
					"name": "Landline",
					"value": "landline"
				},
				{
					"name": "Shared Cost",
					"value": "shared_cost"
				}
			],
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
						"Inventory Level"
					],
					"operation": [
						"Create Inventory Coverage Request"
					]
				}
			}
		},
		{
			"displayName": "Filter Country Code",
			"name": "filter%5Bcountry_code%5D",
			"description": "Filter by country. Defaults to US",
			"default": "US",
			"type": "options",
			"options": [
				{
					"name": "US",
					"value": "US"
				},
				{
					"name": "CA",
					"value": "CA"
				},
				{
					"name": "GB",
					"value": "GB"
				}
			],
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
						"Inventory Level"
					],
					"operation": [
						"Create Inventory Coverage Request"
					]
				}
			}
		},
		{
			"displayName": "Filter Count",
			"name": "filter%5Bcount%5D",
			"description": "Include count in the result",
			"default": "true",
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[count]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inventory Level"
					],
					"operation": [
						"Create Inventory Coverage Request"
					]
				}
			}
		},
		{
			"displayName": "Filter Group By",
			"name": "filter%5BgroupBy%5D",
			"required": true,
			"description": "Filter to group results",
			"default": "nxx",
			"type": "options",
			"options": [
				{
					"name": "Rate Center",
					"value": "rate_center"
				},
				{
					"name": "Locality",
					"value": "locality"
				},
				{
					"name": "Npa",
					"value": "npa"
				},
				{
					"name": "National Destination Code",
					"value": "national_destination_code"
				},
				{
					"name": "Nxx",
					"value": "nxx"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[groupBy]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inventory Level"
					],
					"operation": [
						"Create Inventory Coverage Request"
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
						"Inventory Level"
					],
					"operation": [
						"Create Inventory Coverage Request"
					]
				}
			}
		},
];
