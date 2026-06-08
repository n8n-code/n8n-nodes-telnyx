import type { INodeProperties } from 'n8n-workflow';

export const numberPortoutDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Number Portout"
					]
				}
			},
			"options": [
				{
					"name": "List Portout Request",
					"value": "List Portout Request",
					"action": "Retrieve a list of portout requests",
					"description": "Returns the portout requests according to filters",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/portouts"
						}
					}
				},
				{
					"name": "Find Portout Request",
					"value": "Find Portout Request",
					"action": "Retrieve a portout request",
					"description": "Returns the portout request based on the ID provided",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/portouts/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Find Portout Comments",
					"value": "Find Portout Comments",
					"action": "List all comments for a portout request",
					"description": "Returns a list of comments for a portout request.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/portouts/{{$parameter[\"id\"]}}/comments"
						}
					}
				},
				{
					"name": "Post Port Request Comment",
					"value": "Post Port Request Comment",
					"action": "Create a comment on a portout request",
					"description": "Creates a comment on a portout request.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/portouts/{{$parameter[\"id\"]}}/comments"
						}
					}
				},
				{
					"name": "Update Portout Request",
					"value": "Update Portout Request",
					"action": "Update Status",
					"description": "Authorize or reject portout request",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/portouts/{{$parameter[\"id\"]}}/{{$parameter[\"status\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /portouts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Portout"
					],
					"operation": [
						"List Portout Request"
					]
				}
			}
		},
		{
			"displayName": "Filter Carrier Name",
			"name": "filter%5Bcarrier_name%5D",
			"description": "Filter by new carrier name.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[carrier_name]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Portout"
					],
					"operation": [
						"List Portout Request"
					]
				}
			}
		},
		{
			"displayName": "Filter Spid",
			"name": "filter%5Bspid%5D",
			"description": "Filter by new carrier spid.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[spid]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Portout"
					],
					"operation": [
						"List Portout Request"
					]
				}
			}
		},
		{
			"displayName": "Filter Status",
			"name": "filter%5Bstatus%5D",
			"description": "Filter by portout status.",
			"default": "pending",
			"type": "options",
			"options": [
				{
					"name": "Pending",
					"value": "pending"
				},
				{
					"name": "Authorized",
					"value": "authorized"
				},
				{
					"name": "Ported",
					"value": "ported"
				},
				{
					"name": "Rejected",
					"value": "rejected"
				},
				{
					"name": "Rejected Pending",
					"value": "rejected-pending"
				},
				{
					"name": "Canceled",
					"value": "canceled"
				}
			],
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
						"Number Portout"
					],
					"operation": [
						"List Portout Request"
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
						"Number Portout"
					],
					"operation": [
						"List Portout Request"
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
						"Number Portout"
					],
					"operation": [
						"List Portout Request"
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
						"Number Portout"
					],
					"operation": [
						"List Portout Request"
					]
				}
			}
		},
		{
			"displayName": "GET /portouts/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Portout"
					],
					"operation": [
						"Find Portout Request"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Portout id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Portout"
					],
					"operation": [
						"Find Portout Request"
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
						"Number Portout"
					],
					"operation": [
						"Find Portout Request"
					]
				}
			}
		},
		{
			"displayName": "GET /portouts/{id}/comments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Portout"
					],
					"operation": [
						"Find Portout Comments"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Portout id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Portout"
					],
					"operation": [
						"Find Portout Comments"
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
						"Number Portout"
					],
					"operation": [
						"Find Portout Comments"
					]
				}
			}
		},
		{
			"displayName": "POST /portouts/{id}/comments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Portout"
					],
					"operation": [
						"Post Port Request Comment"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Portout id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Portout"
					],
					"operation": [
						"Post Port Request Comment"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": "",
			"description": "Comment to post on this portout request",
			"routing": {
				"send": {
					"property": "body",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Portout"
					],
					"operation": [
						"Post Port Request Comment"
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
						"Number Portout"
					],
					"operation": [
						"Post Port Request Comment"
					]
				}
			}
		},
		{
			"displayName": "PATCH /portouts/{id}/{status}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Portout"
					],
					"operation": [
						"Update Portout Request"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Portout id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Portout"
					],
					"operation": [
						"Update Portout Request"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"required": true,
			"description": "Updated portout status",
			"default": "authorized",
			"type": "options",
			"options": [
				{
					"name": "Authorized",
					"value": "authorized"
				},
				{
					"name": "Rejected",
					"value": "rejected"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Number Portout"
					],
					"operation": [
						"Update Portout Request"
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
						"Number Portout"
					],
					"operation": [
						"Update Portout Request"
					]
				}
			}
		},
];
