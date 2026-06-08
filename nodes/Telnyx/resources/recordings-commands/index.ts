import type { INodeProperties } from 'n8n-workflow';

export const recordingsCommandsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Recordings Commands"
					]
				}
			},
			"options": [
				{
					"name": "List Recordings",
					"value": "List Recordings",
					"action": "List recordings",
					"description": "Lists recordings for the authenticated user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/recordings"
						}
					}
				},
				{
					"name": "Retrieve Recording",
					"value": "Retrieve Recording",
					"action": "Retrieve a recording",
					"description": "Retrieve a recording from the authenticated user's recordings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/recordings/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /recordings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Recordings Commands"
					],
					"operation": [
						"List Recordings"
					]
				}
			}
		},
		{
			"displayName": "Filter Conference Id",
			"name": "filter%5Bconference_id%5D",
			"description": "Return only recordings associated with a given conference",
			"default": "428c31b6-7af4-4bcb-b7f5-5013ef9657c1",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[conference_id]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Recordings Commands"
					],
					"operation": [
						"List Recordings"
					]
				}
			}
		},
		{
			"displayName": "Filter Created At Gte",
			"name": "filter%5Bcreated_at%5D%5Bgte%5D",
			"description": "Return only recordings created later than or at given ISO 8601 datetime",
			"default": "2019-03-29T11:10:00Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[created_at][gte]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Recordings Commands"
					],
					"operation": [
						"List Recordings"
					]
				}
			}
		},
		{
			"displayName": "Filter Created At Lte",
			"name": "filter%5Bcreated_at%5D%5Blte%5D",
			"description": "Return only recordings created earlier than or at given ISO 8601 datetime",
			"default": "2019-03-29T11:10:00Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[created_at][lte]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Recordings Commands"
					],
					"operation": [
						"List Recordings"
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
						"Recordings Commands"
					],
					"operation": [
						"List Recordings"
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
						"Recordings Commands"
					],
					"operation": [
						"List Recordings"
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
						"Recordings Commands"
					],
					"operation": [
						"List Recordings"
					]
				}
			}
		},
		{
			"displayName": "GET /recordings/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Recordings Commands"
					],
					"operation": [
						"Retrieve Recording"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Uniquely identifies the recording",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Recordings Commands"
					],
					"operation": [
						"Retrieve Recording"
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
						"Recordings Commands"
					],
					"operation": [
						"Retrieve Recording"
					]
				}
			}
		},
];
