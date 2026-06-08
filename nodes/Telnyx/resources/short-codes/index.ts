import type { INodeProperties } from 'n8n-workflow';

export const shortCodesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Short Codes"
					]
				}
			},
			"options": [
				{
					"name": "List Short Codes",
					"value": "List Short Codes",
					"action": "List short codes",
					"description": "List short codes",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/short_codes"
						}
					}
				},
				{
					"name": "Retrieve Short Code",
					"value": "Retrieve Short Code",
					"action": "Retrieve a short code",
					"description": "Retrieve a short code",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/short_codes/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Short Code",
					"value": "Update Short Code",
					"action": "Update short code",
					"description": "Update the settings for a specific short code. To unbind a short code from a profile, set the `messaging_profile_id` to `null` or an empty string.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/short_codes/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /short_codes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Short Codes"
					],
					"operation": [
						"List Short Codes"
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
						"Short Codes"
					],
					"operation": [
						"List Short Codes"
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
						"Short Codes"
					],
					"operation": [
						"List Short Codes"
					]
				}
			}
		},
		{
			"displayName": "Filter Messaging Profile Id",
			"name": "filter%5Bmessaging_profile_id%5D",
			"description": "Filter by Messaging Profile ID. Use the string `null` for phone numbers without assigned profiles. A synonym for the `/messaging_profiles/{id}/short_codes` endpoint when querying about an extant profile.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[messaging_profile_id]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Short Codes"
					],
					"operation": [
						"List Short Codes"
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
						"Short Codes"
					],
					"operation": [
						"List Short Codes"
					]
				}
			}
		},
		{
			"displayName": "GET /short_codes/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Short Codes"
					],
					"operation": [
						"Retrieve Short Code"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The id of the short code",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Short Codes"
					],
					"operation": [
						"Retrieve Short Code"
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
						"Short Codes"
					],
					"operation": [
						"Retrieve Short Code"
					]
				}
			}
		},
		{
			"displayName": "PATCH /short_codes/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Short Codes"
					],
					"operation": [
						"Update Short Code"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The id of the short code",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Short Codes"
					],
					"operation": [
						"Update Short Code"
					]
				}
			}
		},
		{
			"required": true,
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
						"Short Codes"
					],
					"operation": [
						"Update Short Code"
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
						"Short Codes"
					],
					"operation": [
						"Update Short Code"
					]
				}
			}
		},
];
