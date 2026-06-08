import type { INodeProperties } from 'n8n-workflow';

export const roomsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Rooms"
					]
				}
			},
			"options": [
				{
					"name": "List Rooms",
					"value": "List Rooms",
					"action": "View a list of rooms.",
					"description": "View a list of rooms.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rooms"
						}
					}
				},
				{
					"name": "Create Room",
					"value": "Create Room",
					"action": "Create a room.",
					"description": "Synchronously create a Room.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/rooms"
						}
					}
				},
				{
					"name": "Delete Room",
					"value": "Delete Room",
					"action": "Delete a room.",
					"description": "Synchronously delete a Room. Participants from that room will be kicked out, they won't be able to join that room anymore, and you won't be charged anymore for that room.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/rooms/{{$parameter[\"room_id\"]}}"
						}
					}
				},
				{
					"name": "View Room",
					"value": "View Room",
					"action": "View a room.",
					"description": "View a room.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rooms/{{$parameter[\"room_id\"]}}"
						}
					}
				},
				{
					"name": "Nested List Room Sessions",
					"value": "Nested List Room Sessions",
					"action": "View a list of room sessions.",
					"description": "View a list of room sessions.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rooms/{{$parameter[\"room_id\"]}}/sessions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /rooms",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rooms"
					],
					"operation": [
						"List Rooms"
					]
				}
			}
		},
		{
			"displayName": "Filter Date Created At Eq",
			"name": "filter%5Bdate_created_at%5D%5Beq%5D",
			"description": "ISO 8601 date for filtering rooms created on that date.",
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
						"Rooms"
					],
					"operation": [
						"List Rooms"
					]
				}
			}
		},
		{
			"displayName": "Filter Date Created At Gte",
			"name": "filter%5Bdate_created_at%5D%5Bgte%5D",
			"description": "ISO 8601 date for filtering rooms created after that date.",
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
						"Rooms"
					],
					"operation": [
						"List Rooms"
					]
				}
			}
		},
		{
			"displayName": "Filter Date Created At Lte",
			"name": "filter%5Bdate_created_at%5D%5Blte%5D",
			"description": "ISO 8601 date for filtering rooms created before that date.",
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
						"Rooms"
					],
					"operation": [
						"List Rooms"
					]
				}
			}
		},
		{
			"displayName": "Filter Date Updated At Eq",
			"name": "filter%5Bdate_updated_at%5D%5Beq%5D",
			"description": "ISO 8601 date for filtering rooms updated on that date.",
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
						"Rooms"
					],
					"operation": [
						"List Rooms"
					]
				}
			}
		},
		{
			"displayName": "Filter Date Updated At Gte",
			"name": "filter%5Bdate_updated_at%5D%5Bgte%5D",
			"description": "ISO 8601 date for filtering rooms updated after that date.",
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
						"Rooms"
					],
					"operation": [
						"List Rooms"
					]
				}
			}
		},
		{
			"displayName": "Filter Date Updated At Lte",
			"name": "filter%5Bdate_updated_at%5D%5Blte%5D",
			"description": "ISO 8601 date for filtering rooms updated before that date.",
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
						"Rooms"
					],
					"operation": [
						"List Rooms"
					]
				}
			}
		},
		{
			"displayName": "Filter Unique Name",
			"name": "filter%5Bunique_name%5D",
			"description": "Unique_name for filtering rooms.",
			"default": "my_video_room",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[unique_name]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rooms"
					],
					"operation": [
						"List Rooms"
					]
				}
			}
		},
		{
			"displayName": "Include Sessions",
			"name": "include_sessions",
			"description": "To decide if room sessions should be included in the response.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_sessions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rooms"
					],
					"operation": [
						"List Rooms"
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
						"Rooms"
					],
					"operation": [
						"List Rooms"
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
						"Rooms"
					],
					"operation": [
						"List Rooms"
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
						"Rooms"
					],
					"operation": [
						"List Rooms"
					]
				}
			}
		},
		{
			"displayName": "POST /rooms",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rooms"
					],
					"operation": [
						"Create Room"
					]
				}
			}
		},
		{
			"displayName": "Max Participants",
			"name": "max_participants",
			"type": "number",
			"default": 10,
			"description": "The maximum amount of participants allowed in a room. If new participants try to join after that limit is reached, their request will be rejected.",
			"routing": {
				"send": {
					"property": "max_participants",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rooms"
					],
					"operation": [
						"Create Room"
					]
				}
			}
		},
		{
			"displayName": "Unique Name",
			"name": "unique_name",
			"type": "string",
			"default": "My room",
			"description": "The unique (within the Telnyx account scope) name of the room.",
			"routing": {
				"send": {
					"property": "unique_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rooms"
					],
					"operation": [
						"Create Room"
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
						"Rooms"
					],
					"operation": [
						"Create Room"
					]
				}
			}
		},
		{
			"displayName": "DELETE /rooms/{room_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rooms"
					],
					"operation": [
						"Delete Room"
					]
				}
			}
		},
		{
			"displayName": "Room Id",
			"name": "room_id",
			"required": true,
			"description": "The unique identifier of a room.",
			"default": "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Rooms"
					],
					"operation": [
						"Delete Room"
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
						"Rooms"
					],
					"operation": [
						"Delete Room"
					]
				}
			}
		},
		{
			"displayName": "GET /rooms/{room_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rooms"
					],
					"operation": [
						"View Room"
					]
				}
			}
		},
		{
			"displayName": "Room Id",
			"name": "room_id",
			"required": true,
			"description": "The unique identifier of a room.",
			"default": "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Rooms"
					],
					"operation": [
						"View Room"
					]
				}
			}
		},
		{
			"displayName": "Include Sessions",
			"name": "include_sessions",
			"description": "To decide if room sessions should be included in the response.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_sessions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rooms"
					],
					"operation": [
						"View Room"
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
						"Rooms"
					],
					"operation": [
						"View Room"
					]
				}
			}
		},
		{
			"displayName": "GET /rooms/{room_id}/sessions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rooms"
					],
					"operation": [
						"Nested List Room Sessions"
					]
				}
			}
		},
		{
			"displayName": "Room Id",
			"name": "room_id",
			"required": true,
			"description": "The unique identifier of a room.",
			"default": "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Rooms"
					],
					"operation": [
						"Nested List Room Sessions"
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
						"Rooms"
					],
					"operation": [
						"Nested List Room Sessions"
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
						"Rooms"
					],
					"operation": [
						"Nested List Room Sessions"
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
						"Rooms"
					],
					"operation": [
						"Nested List Room Sessions"
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
						"Rooms"
					],
					"operation": [
						"Nested List Room Sessions"
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
						"Rooms"
					],
					"operation": [
						"Nested List Room Sessions"
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
						"Rooms"
					],
					"operation": [
						"Nested List Room Sessions"
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
						"Rooms"
					],
					"operation": [
						"Nested List Room Sessions"
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
						"Rooms"
					],
					"operation": [
						"Nested List Room Sessions"
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
						"Rooms"
					],
					"operation": [
						"Nested List Room Sessions"
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
						"Rooms"
					],
					"operation": [
						"Nested List Room Sessions"
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
						"Rooms"
					],
					"operation": [
						"Nested List Room Sessions"
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
						"Rooms"
					],
					"operation": [
						"Nested List Room Sessions"
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
						"Rooms"
					],
					"operation": [
						"Nested List Room Sessions"
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
						"Rooms"
					],
					"operation": [
						"Nested List Room Sessions"
					]
				}
			}
		},
];
