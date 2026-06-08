import type { INodeProperties } from 'n8n-workflow';

export const connectionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Connections"
					]
				}
			},
			"options": [
				{
					"name": "List Connections",
					"value": "List Connections",
					"action": "List connections",
					"description": "Returns a list of your connections irrespective of type.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/connections"
						}
					}
				},
				{
					"name": "Retrieve Connection",
					"value": "Retrieve Connection",
					"action": "Retrieve a connection",
					"description": "Retrieves the high-level details of an existing connection. To retrieve specific authentication information, use the endpoint for the specific connection type.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/connections/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /connections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections"
					],
					"operation": [
						"List Connections"
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
						"Connections"
					],
					"operation": [
						"List Connections"
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
						"Connections"
					],
					"operation": [
						"List Connections"
					]
				}
			}
		},
		{
			"displayName": "Filter Connection Name Contains",
			"name": "filter%5Bconnection_name%5D%5Bcontains%5D",
			"description": "If present, connections with <code>connection_name</code> containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.",
			"default": null,
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[connection_name][contains]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Connections"
					],
					"operation": [
						"List Connections"
					]
				}
			}
		},
		{
			"displayName": "Filter Outbound Voice Profile Id",
			"name": "filter%5Boutbound_voice_profile_id%5D",
			"description": "Identifies the associated outbound voice profile.",
			"default": "1293384261075731499",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[outbound_voice_profile_id]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Connections"
					],
					"operation": [
						"List Connections"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the <code> -</code> prefix.<br/><br/>\nThat is: <ul>\n  <li>\n    <code>connection_name</code>: sorts the result by the\n    <code>connection_name</code> field in ascending order.\n  </li>\n\n  <li>\n    <code>-connection_name</code>: sorts the result by the\n    <code>connection_name</code> field in descending order.\n  </li>\n</ul> <br/> If not given, results are sorted by <code>created_at</code> in descending order.",
			"default": "connection_name",
			"type": "options",
			"options": [
				{
					"name": "Created At",
					"value": "created_at"
				},
				{
					"name": "Connection Name",
					"value": "connection_name"
				},
				{
					"name": "Active",
					"value": "active"
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
						"Connections"
					],
					"operation": [
						"List Connections"
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
						"Connections"
					],
					"operation": [
						"List Connections"
					]
				}
			}
		},
		{
			"displayName": "GET /connections/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections"
					],
					"operation": [
						"Retrieve Connection"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "IP Connection ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections"
					],
					"operation": [
						"Retrieve Connection"
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
						"Connections"
					],
					"operation": [
						"Retrieve Connection"
					]
				}
			}
		},
];
