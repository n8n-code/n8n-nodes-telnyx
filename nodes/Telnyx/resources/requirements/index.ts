import type { INodeProperties } from 'n8n-workflow';

export const requirementsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Requirements"
					]
				}
			},
			"options": [
				{
					"name": "List Requirements",
					"value": "List Requirements",
					"action": "List all requirements",
					"description": "List all requirements with filtering, sorting, and pagination",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/requirements"
						}
					}
				},
				{
					"name": "Doc Reqs Retrieve Document Requirements",
					"value": "Doc Reqs Retrieve Document Requirements",
					"action": "Retrieve a document requirement",
					"description": "Retrieve a document requirement record",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/requirements/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /requirements",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Requirements"
					],
					"operation": [
						"List Requirements"
					]
				}
			}
		},
		{
			"displayName": "Filter Country Code",
			"name": "filter%5Bcountry_code%5D",
			"description": "Filters results to those applying to a 2-character (ISO 3166-1 alpha-2) country code",
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
						"Requirements"
					],
					"operation": [
						"List Requirements"
					]
				}
			}
		},
		{
			"displayName": "Filter Phone Number Type",
			"name": "filter%5Bphone_number_type%5D",
			"description": "Filters results to those applying to a specific `phone_number_type`",
			"default": "local",
			"type": "options",
			"options": [
				{
					"name": "Local",
					"value": "local"
				},
				{
					"name": "National",
					"value": "national"
				},
				{
					"name": "Toll Free",
					"value": "toll-free"
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
						"Requirements"
					],
					"operation": [
						"List Requirements"
					]
				}
			}
		},
		{
			"displayName": "Filter Action",
			"name": "filter%5Baction%5D",
			"description": "Filters requirements to those applying to a specific action.",
			"default": "porting",
			"type": "options",
			"options": [
				{
					"name": "Ordering",
					"value": "ordering"
				},
				{
					"name": "Porting",
					"value": "porting"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[action]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Requirements"
					],
					"operation": [
						"List Requirements"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort%5B%5D",
			"description": "Specifies the sort order for results. If you want to sort by a field in ascending order, include it as a sort parameter. If you want to sort in descending order, prepend a `-` in front of the field name.",
			"default": "country_code",
			"type": "options",
			"options": [
				{
					"name": "Action",
					"value": "action"
				},
				{
					"name": "Country Code",
					"value": "country_code"
				},
				{
					"name": "Locality",
					"value": "locality"
				},
				{
					"name": "Phone Number Type",
					"value": "phone_number_type"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort[]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Requirements"
					],
					"operation": [
						"List Requirements"
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
						"Requirements"
					],
					"operation": [
						"List Requirements"
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
						"Requirements"
					],
					"operation": [
						"List Requirements"
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
						"Requirements"
					],
					"operation": [
						"List Requirements"
					]
				}
			}
		},
		{
			"displayName": "GET /requirements/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Requirements"
					],
					"operation": [
						"Doc Reqs Retrieve Document Requirements"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Uniquely identifies the requirement_type record",
			"default": "a9dad8d5-fdbd-49d7-aa23-39bb08a5ebaa",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Requirements"
					],
					"operation": [
						"Doc Reqs Retrieve Document Requirements"
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
						"Requirements"
					],
					"operation": [
						"Doc Reqs Retrieve Document Requirements"
					]
				}
			}
		},
];
