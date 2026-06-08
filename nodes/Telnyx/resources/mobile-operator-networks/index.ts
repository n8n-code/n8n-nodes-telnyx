import type { INodeProperties } from 'n8n-workflow';

export const mobileOperatorNetworksDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Mobile Operator Networks"
					]
				}
			},
			"options": [
				{
					"name": "Mobile Operator Networks Get",
					"value": "Mobile Operator Networks Get",
					"action": "List mobile operator networks",
					"description": "Telnyx has a set of GSM mobile operators partners that are available through our mobile network roaming. This resource is entirely managed by Telnyx and may change over time. That means that this resource won't allow any write operations for it. Still, it's available so it can be used as a support resource that can be related to other resources or become a configuration option.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/mobile_operator_networks"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /mobile_operator_networks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mobile Operator Networks"
					],
					"operation": [
						"Mobile Operator Networks Get"
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
						"Mobile Operator Networks"
					],
					"operation": [
						"Mobile Operator Networks Get"
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
						"Mobile Operator Networks"
					],
					"operation": [
						"Mobile Operator Networks Get"
					]
				}
			}
		},
		{
			"displayName": "Filter Name Starts With",
			"name": "filter%5Bname%5D%5Bstarts_with%5D",
			"description": "Filter by name starting with.",
			"default": "AT",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[name][starts_with]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mobile Operator Networks"
					],
					"operation": [
						"Mobile Operator Networks Get"
					]
				}
			}
		},
		{
			"displayName": "Filter Name Contains",
			"name": "filter%5Bname%5D%5Bcontains%5D",
			"description": "Filter by name containing match.",
			"default": "T&T",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[name][contains]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mobile Operator Networks"
					],
					"operation": [
						"Mobile Operator Networks Get"
					]
				}
			}
		},
		{
			"displayName": "Filter Name Ends With",
			"name": "filter%5Bname%5D%5Bends_with%5D",
			"description": "Filter by name ending with.",
			"default": "T",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[name][ends_with]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mobile Operator Networks"
					],
					"operation": [
						"Mobile Operator Networks Get"
					]
				}
			}
		},
		{
			"displayName": "Filter Country Code",
			"name": "filter%5Bcountry_code%5D",
			"description": "Filter by exact country_code.",
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
						"Mobile Operator Networks"
					],
					"operation": [
						"Mobile Operator Networks Get"
					]
				}
			}
		},
		{
			"displayName": "Filter Mcc",
			"name": "filter%5Bmcc%5D",
			"description": "Filter by exact MCC.",
			"default": "310",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[mcc]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mobile Operator Networks"
					],
					"operation": [
						"Mobile Operator Networks Get"
					]
				}
			}
		},
		{
			"displayName": "Filter Mnc",
			"name": "filter%5Bmnc%5D",
			"description": "Filter by exact MNC.",
			"default": "410",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[mnc]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mobile Operator Networks"
					],
					"operation": [
						"Mobile Operator Networks Get"
					]
				}
			}
		},
		{
			"displayName": "Filter Tadig",
			"name": "filter%5Btadig%5D",
			"description": "Filter by exact TADIG.",
			"default": "USACG",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[tadig]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mobile Operator Networks"
					],
					"operation": [
						"Mobile Operator Networks Get"
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
						"Mobile Operator Networks"
					],
					"operation": [
						"Mobile Operator Networks Get"
					]
				}
			}
		},
];
