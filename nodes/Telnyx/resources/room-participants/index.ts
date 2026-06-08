import type { INodeProperties } from 'n8n-workflow';

export const roomParticipantsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Room Participants"
					]
				}
			},
			"options": [
				{
					"name": "List Room Participants",
					"value": "List Room Participants",
					"action": "View a list of room participants.",
					"description": "View a list of room participants.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/room_participants"
						}
					}
				},
				{
					"name": "View Room Participant",
					"value": "View Room Participant",
					"action": "View a room participant.",
					"description": "View a room participant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/room_participants/{{$parameter[\"room_participant_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /room_participants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Room Participants"
					],
					"operation": [
						"List Room Participants"
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
						"Room Participants"
					],
					"operation": [
						"List Room Participants"
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
						"Room Participants"
					],
					"operation": [
						"List Room Participants"
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
						"Room Participants"
					],
					"operation": [
						"List Room Participants"
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
						"Room Participants"
					],
					"operation": [
						"List Room Participants"
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
						"Room Participants"
					],
					"operation": [
						"List Room Participants"
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
						"Room Participants"
					],
					"operation": [
						"List Room Participants"
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
						"Room Participants"
					],
					"operation": [
						"List Room Participants"
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
						"Room Participants"
					],
					"operation": [
						"List Room Participants"
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
						"Room Participants"
					],
					"operation": [
						"List Room Participants"
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
						"Room Participants"
					],
					"operation": [
						"List Room Participants"
					]
				}
			}
		},
		{
			"displayName": "Filter Session Id",
			"name": "filter%5Bsession_id%5D",
			"description": "Session_id for filtering room participants.",
			"default": "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[session_id]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Room Participants"
					],
					"operation": [
						"List Room Participants"
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
						"Room Participants"
					],
					"operation": [
						"List Room Participants"
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
						"Room Participants"
					],
					"operation": [
						"List Room Participants"
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
						"Room Participants"
					],
					"operation": [
						"List Room Participants"
					]
				}
			}
		},
		{
			"displayName": "GET /room_participants/{room_participant_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Room Participants"
					],
					"operation": [
						"View Room Participant"
					]
				}
			}
		},
		{
			"displayName": "Room Participant Id",
			"name": "room_participant_id",
			"required": true,
			"description": "The unique identifier of a room participant.",
			"default": "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Room Participants"
					],
					"operation": [
						"View Room Participant"
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
						"Room Participants"
					],
					"operation": [
						"View Room Participant"
					]
				}
			}
		},
];
