import type { INodeProperties } from 'n8n-workflow';

export const roomSessionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Room Sessions"
					]
				}
			},
			"options": [
				{
					"name": "List Room Sessions",
					"value": "List Room Sessions",
					"action": "View a list of room sessions.",
					"description": "View a list of room sessions.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/room_sessions"
						}
					}
				},
				{
					"name": "View Room Session",
					"value": "View Room Session",
					"action": "View a room session.",
					"description": "View a room session.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/room_sessions/{{$parameter[\"room_session_id\"]}}"
						}
					}
				},
				{
					"name": "Nested List Room Participants",
					"value": "Nested List Room Participants",
					"action": "View a list of room participants.",
					"description": "View a list of room participants.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/room_sessions/{{$parameter[\"room_session_id\"]}}/participants"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /room_sessions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Room Sessions"
					],
					"operation": [
						"List Room Sessions"
					]
				}
			}
		},
		{
			"displayName": "Filter Date Created At Eq",
			"name": "filter%5Bdate_created_at%5D%5Beq%5D",
			"description": "ISO 8601 date for filtering room sessions created on that date.",
			"default": "2021-04-25",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[date_created_at][eq]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Room Sessions"
					],
					"operation": [
						"List Room Sessions"
					]
				}
			}
		},
		{
			"displayName": "Filter Date Created At Gte",
			"name": "filter%5Bdate_created_at%5D%5Bgte%5D",
			"description": "ISO 8601 date for filtering room sessions created after that date.",
			"default": "2021-04-25",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[date_created_at][gte]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Room Sessions"
					],
					"operation": [
						"List Room Sessions"
					]
				}
			}
		},
		{
			"displayName": "Filter Date Created At Lte",
			"name": "filter%5Bdate_created_at%5D%5Blte%5D",
			"description": "ISO 8601 date for filtering room sessions created before that date.",
			"default": "2021-04-25",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[date_created_at][lte]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Room Sessions"
					],
					"operation": [
						"List Room Sessions"
					]
				}
			}
		},
		{
			"displayName": "Filter Date Updated At Eq",
			"name": "filter%5Bdate_updated_at%5D%5Beq%5D",
			"description": "ISO 8601 date for filtering room sessions updated on that date.",
			"default": "2021-04-25",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[date_updated_at][eq]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Room Sessions"
					],
					"operation": [
						"List Room Sessions"
					]
				}
			}
		},
		{
			"displayName": "Filter Date Updated At Gte",
			"name": "filter%5Bdate_updated_at%5D%5Bgte%5D",
			"description": "ISO 8601 date for filtering room sessions updated after that date.",
			"default": "2021-04-25",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[date_updated_at][gte]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Room Sessions"
					],
					"operation": [
						"List Room Sessions"
					]
				}
			}
		},
		{
			"displayName": "Filter Date Updated At Lte",
			"name": "filter%5Bdate_updated_at%5D%5Blte%5D",
			"description": "ISO 8601 date for filtering room sessions updated before that date.",
			"default": "2021-04-25",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[date_updated_at][lte]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Room Sessions"
					],
					"operation": [
						"List Room Sessions"
					]
				}
			}
		},
		{
			"displayName": "Filter Date Ended At Eq",
			"name": "filter%5Bdate_ended_at%5D%5Beq%5D",
			"description": "ISO 8601 date for filtering room sessions ended on that date.",
			"default": "2021-04-25",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[date_ended_at][eq]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Room Sessions"
					],
					"operation": [
						"List Room Sessions"
					]
				}
			}
		},
		{
			"displayName": "Filter Date Ended At Gte",
			"name": "filter%5Bdate_ended_at%5D%5Bgte%5D",
			"description": "ISO 8601 date for filtering room sessions ended after that date.",
			"default": "2021-04-25",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[date_ended_at][gte]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Room Sessions"
					],
					"operation": [
						"List Room Sessions"
					]
				}
			}
		},
		{
			"displayName": "Filter Date Ended At Lte",
			"name": "filter%5Bdate_ended_at%5D%5Blte%5D",
			"description": "ISO 8601 date for filtering room sessions ended before that date.",
			"default": "2021-04-25",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[date_ended_at][lte]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Room Sessions"
					],
					"operation": [
						"List Room Sessions"
					]
				}
			}
		},
		{
			"displayName": "Filter Room Id",
			"name": "filter%5Broom_id%5D",
			"description": "Room_id for filtering room sessions.",
			"default": "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[room_id]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Room Sessions"
					],
					"operation": [
						"List Room Sessions"
					]
				}
			}
		},
		{
			"displayName": "Filter Active",
			"name": "filter%5Bactive%5D",
			"description": "Filter active or inactive room sessions.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[active]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Room Sessions"
					],
					"operation": [
						"List Room Sessions"
					]
				}
			}
		},
		{
			"displayName": "Include Participants",
			"name": "include_participants",
			"description": "To decide if room participants should be included in the response.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_participants",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Room Sessions"
					],
					"operation": [
						"List Room Sessions"
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
						"Room Sessions"
					],
					"operation": [
						"List Room Sessions"
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
						"Room Sessions"
					],
					"operation": [
						"List Room Sessions"
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
						"Room Sessions"
					],
					"operation": [
						"List Room Sessions"
					]
				}
			}
		},
		{
			"displayName": "GET /room_sessions/{room_session_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Room Sessions"
					],
					"operation": [
						"View Room Session"
					]
				}
			}
		},
		{
			"displayName": "Room Session Id",
			"name": "room_session_id",
			"required": true,
			"description": "The unique identifier of a room session.",
			"default": "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Room Sessions"
					],
					"operation": [
						"View Room Session"
					]
				}
			}
		},
		{
			"displayName": "Include Participants",
			"name": "include_participants",
			"description": "To decide if room participants should be included in the response.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_participants",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Room Sessions"
					],
					"operation": [
						"View Room Session"
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
						"Room Sessions"
					],
					"operation": [
						"View Room Session"
					]
				}
			}
		},
		{
			"displayName": "GET /room_sessions/{room_session_id}/participants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Room Sessions"
					],
					"operation": [
						"Nested List Room Participants"
					]
				}
			}
		},
		{
			"displayName": "Room Session Id",
			"name": "room_session_id",
			"required": true,
			"description": "The unique identifier of a room session.",
			"default": "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Room Sessions"
					],
					"operation": [
						"Nested List Room Participants"
					]
				}
			}
		},
		{
			"displayName": "Filter Date Joined At Eq",
			"name": "filter%5Bdate_joined_at%5D%5Beq%5D",
			"description": "ISO 8601 date for filtering room participants that joined on that date.",
			"default": "2021-04-25",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[date_joined_at][eq]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Room Sessions"
					],
					"operation": [
						"Nested List Room Participants"
					]
				}
			}
		},
		{
			"displayName": "Filter Date Joined At Gte",
			"name": "filter%5Bdate_joined_at%5D%5Bgte%5D",
			"description": "ISO 8601 date for filtering room participants that joined after that date.",
			"default": "2021-04-25",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[date_joined_at][gte]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Room Sessions"
					],
					"operation": [
						"Nested List Room Participants"
					]
				}
			}
		},
		{
			"displayName": "Filter Date Joined At Lte",
			"name": "filter%5Bdate_joined_at%5D%5Blte%5D",
			"description": "ISO 8601 date for filtering room participants that joined before that date.",
			"default": "2021-04-25",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[date_joined_at][lte]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Room Sessions"
					],
					"operation": [
						"Nested List Room Participants"
					]
				}
			}
		},
		{
			"displayName": "Filter Date Updated At Eq",
			"name": "filter%5Bdate_updated_at%5D%5Beq%5D",
			"description": "ISO 8601 date for filtering room participants updated on that date.",
			"default": "2021-04-25",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[date_updated_at][eq]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Room Sessions"
					],
					"operation": [
						"Nested List Room Participants"
					]
				}
			}
		},
		{
			"displayName": "Filter Date Updated At Gte",
			"name": "filter%5Bdate_updated_at%5D%5Bgte%5D",
			"description": "ISO 8601 date for filtering room participants updated after that date.",
			"default": "2021-04-25",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[date_updated_at][gte]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Room Sessions"
					],
					"operation": [
						"Nested List Room Participants"
					]
				}
			}
		},
		{
			"displayName": "Filter Date Updated At Lte",
			"name": "filter%5Bdate_updated_at%5D%5Blte%5D",
			"description": "ISO 8601 date for filtering room participants updated before that date.",
			"default": "2021-04-25",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[date_updated_at][lte]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Room Sessions"
					],
					"operation": [
						"Nested List Room Participants"
					]
				}
			}
		},
		{
			"displayName": "Filter Date Left At Eq",
			"name": "filter%5Bdate_left_at%5D%5Beq%5D",
			"description": "ISO 8601 date for filtering room participants that left on that date.",
			"default": "2021-04-25",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[date_left_at][eq]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Room Sessions"
					],
					"operation": [
						"Nested List Room Participants"
					]
				}
			}
		},
		{
			"displayName": "Filter Date Left At Gte",
			"name": "filter%5Bdate_left_at%5D%5Bgte%5D",
			"description": "ISO 8601 date for filtering room participants that left after that date.",
			"default": "2021-04-25",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[date_left_at][gte]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Room Sessions"
					],
					"operation": [
						"Nested List Room Participants"
					]
				}
			}
		},
		{
			"displayName": "Filter Date Left At Lte",
			"name": "filter%5Bdate_left_at%5D%5Blte%5D",
			"description": "ISO 8601 date for filtering room participants that left before that date.",
			"default": "2021-04-25",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[date_left_at][lte]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Room Sessions"
					],
					"operation": [
						"Nested List Room Participants"
					]
				}
			}
		},
		{
			"displayName": "Filter Context",
			"name": "filter%5Bcontext%5D",
			"description": "Filter room participants based on the context.",
			"default": "Alice",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[context]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Room Sessions"
					],
					"operation": [
						"Nested List Room Participants"
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
						"Room Sessions"
					],
					"operation": [
						"Nested List Room Participants"
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
						"Room Sessions"
					],
					"operation": [
						"Nested List Room Participants"
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
						"Room Sessions"
					],
					"operation": [
						"Nested List Room Participants"
					]
				}
			}
		},
];
