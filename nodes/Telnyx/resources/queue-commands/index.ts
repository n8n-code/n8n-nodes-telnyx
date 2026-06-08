import type { INodeProperties } from 'n8n-workflow';

export const queueCommandsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Queue Commands"
					]
				}
			},
			"options": [
				{
					"name": "Retrieve Call Queue",
					"value": "Retrieve Call Queue",
					"action": "Retrieve a call queue",
					"description": "Retrieve an existing call queue",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/queues/{{$parameter[\"queue_name\"]}}"
						}
					}
				},
				{
					"name": "List Queue Calls",
					"value": "List Queue Calls",
					"action": "Retrieve calls from a queue",
					"description": "Retrieve the list of calls in an existing queue",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/queues/{{$parameter[\"queue_name\"]}}/calls"
						}
					}
				},
				{
					"name": "Retrieve Call From Queue",
					"value": "Retrieve Call From Queue",
					"action": "Retrieve a call from a queue",
					"description": "Retrieve an existing call from an existing queue",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/queues/{{$parameter[\"queue_name\"]}}/calls/{{$parameter[\"call_control_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /queues/{queue_name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Queue Commands"
					],
					"operation": [
						"Retrieve Call Queue"
					]
				}
			}
		},
		{
			"displayName": "Queue Name",
			"name": "queue_name",
			"required": true,
			"description": "Uniquely identifies the queue by name",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Queue Commands"
					],
					"operation": [
						"Retrieve Call Queue"
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
						"Queue Commands"
					],
					"operation": [
						"Retrieve Call Queue"
					]
				}
			}
		},
		{
			"displayName": "GET /queues/{queue_name}/calls",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Queue Commands"
					],
					"operation": [
						"List Queue Calls"
					]
				}
			}
		},
		{
			"displayName": "Queue Name",
			"name": "queue_name",
			"required": true,
			"description": "Uniquely identifies the queue by name",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Queue Commands"
					],
					"operation": [
						"List Queue Calls"
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
						"Queue Commands"
					],
					"operation": [
						"List Queue Calls"
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
						"Queue Commands"
					],
					"operation": [
						"List Queue Calls"
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
						"Queue Commands"
					],
					"operation": [
						"List Queue Calls"
					]
				}
			}
		},
		{
			"displayName": "GET /queues/{queue_name}/calls/{call_control_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Queue Commands"
					],
					"operation": [
						"Retrieve Call From Queue"
					]
				}
			}
		},
		{
			"displayName": "Queue Name",
			"name": "queue_name",
			"required": true,
			"description": "Uniquely identifies the queue by name",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Queue Commands"
					],
					"operation": [
						"Retrieve Call From Queue"
					]
				}
			}
		},
		{
			"displayName": "Call Control Id",
			"name": "call_control_id",
			"required": true,
			"description": "Unique identifier and token for controlling the call",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Queue Commands"
					],
					"operation": [
						"Retrieve Call From Queue"
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
						"Queue Commands"
					],
					"operation": [
						"Retrieve Call From Queue"
					]
				}
			}
		},
];
