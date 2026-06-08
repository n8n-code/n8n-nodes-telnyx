import type { INodeProperties } from 'n8n-workflow';

export const debuggingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Debugging"
					]
				}
			},
			"options": [
				{
					"name": "List Call Events",
					"value": "List Call Events",
					"action": "List call events",
					"description": "Filters call events by given filter parameters. Events are ordered by `event_timestamp`. If filter for `call_leg_id` or `call_session_id` is not present, it only filters events from the last 24 hours.\n\n**Note**: Only one `filter[event_timestamp]` can be passed.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/call_events"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /call_events",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Debugging"
					],
					"operation": [
						"List Call Events"
					]
				}
			}
		},
		{
			"displayName": "Filter Call Leg Id",
			"name": "filter%5Bcall_leg_id%5D",
			"description": "The unique identifier of an individual call leg.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[call_leg_id]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Debugging"
					],
					"operation": [
						"List Call Events"
					]
				}
			}
		},
		{
			"displayName": "Filter Call Session Id",
			"name": "filter%5Bcall_session_id%5D",
			"description": "The unique identifier of the call control session. A session may include multiple call leg events.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[call_session_id]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Debugging"
					],
					"operation": [
						"List Call Events"
					]
				}
			}
		},
		{
			"displayName": "Filter Status",
			"name": "filter%5Bstatus%5D",
			"description": "Event status",
			"default": "delivered",
			"type": "options",
			"options": [
				{
					"name": "Delivered",
					"value": "delivered"
				},
				{
					"name": "Failed",
					"value": "failed"
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
						"Debugging"
					],
					"operation": [
						"List Call Events"
					]
				}
			}
		},
		{
			"displayName": "Filter Type",
			"name": "filter%5Btype%5D",
			"description": "Event type",
			"default": "webhook",
			"type": "options",
			"options": [
				{
					"name": "Command",
					"value": "command"
				},
				{
					"name": "Webhook",
					"value": "webhook"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[type]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Debugging"
					],
					"operation": [
						"List Call Events"
					]
				}
			}
		},
		{
			"displayName": "Filter Event Timestamp Gt",
			"name": "filter%5Bevent_timestamp%5D%5Bgt%5D",
			"description": "Event timestamp: greater than",
			"default": "2019-03-29T11:10:00Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[event_timestamp][gt]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Debugging"
					],
					"operation": [
						"List Call Events"
					]
				}
			}
		},
		{
			"displayName": "Filter Event Timestamp Gte",
			"name": "filter%5Bevent_timestamp%5D%5Bgte%5D",
			"description": "Event timestamp: greater than or equal",
			"default": "2019-03-29T11:10:00Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[event_timestamp][gte]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Debugging"
					],
					"operation": [
						"List Call Events"
					]
				}
			}
		},
		{
			"displayName": "Filter Event Timestamp Lt",
			"name": "filter%5Bevent_timestamp%5D%5Blt%5D",
			"description": "Event timestamp: lower than",
			"default": "2019-03-29T11:10:00Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[event_timestamp][lt]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Debugging"
					],
					"operation": [
						"List Call Events"
					]
				}
			}
		},
		{
			"displayName": "Filter Event Timestamp Lte",
			"name": "filter%5Bevent_timestamp%5D%5Blte%5D",
			"description": "Event timestamp: lower than or equal",
			"default": "2019-03-29T11:10:00Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[event_timestamp][lte]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Debugging"
					],
					"operation": [
						"List Call Events"
					]
				}
			}
		},
		{
			"displayName": "Filter Event Timestamp Eq",
			"name": "filter%5Bevent_timestamp%5D%5Beq%5D",
			"description": "Event timestamp: equal",
			"default": "2019-03-29T11:10:00Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[event_timestamp][eq]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Debugging"
					],
					"operation": [
						"List Call Events"
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
						"Debugging"
					],
					"operation": [
						"List Call Events"
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
						"Debugging"
					],
					"operation": [
						"List Call Events"
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
						"Debugging"
					],
					"operation": [
						"List Call Events"
					]
				}
			}
		},
];
