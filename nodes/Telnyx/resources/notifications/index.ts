import type { INodeProperties } from 'n8n-workflow';

export const notificationsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					]
				}
			},
			"options": [
				{
					"name": "List Notification Channels",
					"value": "List Notification Channels",
					"action": "List notification channels",
					"description": "List notification channels.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/notification_channels"
						}
					}
				},
				{
					"name": "Create Notification Channels",
					"value": "Create Notification Channels",
					"action": "Create a notification channel",
					"description": "Create a notification channel.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/notification_channels"
						}
					}
				},
				{
					"name": "Delete Notification Channel",
					"value": "Delete Notification Channel",
					"action": "Delete a notification channel",
					"description": "Delete a notification channel.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/notification_channels/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Retrieve Notification Channel",
					"value": "Retrieve Notification Channel",
					"action": "Retrieve a notification channel",
					"description": "Retrieve a notification channel.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/notification_channels/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Notification Channel",
					"value": "Update Notification Channel",
					"action": "Update a notification channel",
					"description": "Update a notification channel.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/notification_channels/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Find Notifications Events Conditions",
					"value": "Find Notifications Events Conditions",
					"action": "List all Notifications Events Conditions",
					"description": "Returns a list of your notifications events conditions.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/notification_event_conditions"
						}
					}
				},
				{
					"name": "Find Notifications Events",
					"value": "Find Notifications Events",
					"action": "List all Notifications Events",
					"description": "Returns a list of your notifications events.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/notification_events"
						}
					}
				},
				{
					"name": "Find Notifications Profiles",
					"value": "Find Notifications Profiles",
					"action": "List all Notifications Profiles",
					"description": "Returns a list of your notifications profiles.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/notification_profiles"
						}
					}
				},
				{
					"name": "Create Notification Profile",
					"value": "Create Notification Profile",
					"action": "Create a notification profile",
					"description": "Create a notification profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/notification_profiles"
						}
					}
				},
				{
					"name": "Delete Notification Profile",
					"value": "Delete Notification Profile",
					"action": "Delete a notification profile",
					"description": "Delete a notification profile.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/notification_profiles/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Retrieve Notification Profile",
					"value": "Retrieve Notification Profile",
					"action": "Retrieve a notification profile",
					"description": "Retrieve a notification profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/notification_profiles/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Notification Profile",
					"value": "Update Notification Profile",
					"action": "Update a notification profile",
					"description": "Update a notification profile.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/notification_profiles/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "List Notification Settings",
					"value": "List Notification Settings",
					"action": "List notification settings",
					"description": "List notification settings.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/notification_settings"
						}
					}
				},
				{
					"name": "Create Notification Setting",
					"value": "Create Notification Setting",
					"action": "Add a Notification Setting",
					"description": "Add a notification setting.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/notification_settings"
						}
					}
				},
				{
					"name": "Delete Notification Setting",
					"value": "Delete Notification Setting",
					"action": "Delete a notification setting",
					"description": "Delete a notification setting.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/notification_settings/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Retrieve Notification Setting",
					"value": "Retrieve Notification Setting",
					"action": "Retrieve a notification setting",
					"description": "Retrieve a notification setting.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/notification_settings/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /notification_channels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"List Notification Channels"
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
						"Notifications"
					],
					"operation": [
						"List Notification Channels"
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
						"Notifications"
					],
					"operation": [
						"List Notification Channels"
					]
				}
			}
		},
		{
			"displayName": "Filter Channel Type Id Eq",
			"name": "filter%5Bchannel_type_id%5D%5Beq%5D",
			"description": "Filter by the id of a channel type",
			"default": "webhook",
			"type": "options",
			"options": [
				{
					"name": "Webhook",
					"value": "webhook"
				},
				{
					"name": "Sms",
					"value": "sms"
				},
				{
					"name": "Email",
					"value": "email"
				},
				{
					"name": "Voice",
					"value": "voice"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[channel_type_id][eq]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"List Notification Channels"
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
						"Notifications"
					],
					"operation": [
						"List Notification Channels"
					]
				}
			}
		},
		{
			"displayName": "POST /notification_channels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Create Notification Channels"
					]
				}
			}
		},
		{
			"displayName": "Channel Destination",
			"name": "channel_destination",
			"type": "string",
			"default": "+13125550000",
			"description": "The destination associated with the channel type.",
			"routing": {
				"send": {
					"property": "channel_destination",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Create Notification Channels"
					]
				}
			}
		},
		{
			"displayName": "Channel Type Id",
			"name": "channel_type_id",
			"type": "options",
			"default": "sms",
			"description": "A Channel Type ID",
			"options": [
				{
					"name": "Sms",
					"value": "sms"
				},
				{
					"name": "Voice",
					"value": "voice"
				},
				{
					"name": "Email",
					"value": "email"
				},
				{
					"name": "Webhook",
					"value": "webhook"
				}
			],
			"routing": {
				"send": {
					"property": "channel_type_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Create Notification Channels"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "string",
			"default": "2019-10-15T10:07:15.527Z",
			"description": "ISO 8601 formatted date indicating when the resource was created.",
			"routing": {
				"send": {
					"property": "created_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Create Notification Channels"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "12455643-3cf1-4683-ad23-1cd32f7d5e0a",
			"description": "A UUID.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Create Notification Channels"
					]
				}
			}
		},
		{
			"displayName": "Notification Profile Id",
			"name": "notification_profile_id",
			"type": "string",
			"default": "12455643-3cf1-4683-ad23-1cd32f7d5e0a",
			"description": "A UUID reference to the associated Notification Profile.",
			"routing": {
				"send": {
					"property": "notification_profile_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Create Notification Channels"
					]
				}
			}
		},
		{
			"displayName": "Updated At",
			"name": "updated_at",
			"type": "string",
			"default": "2019-10-15T10:07:15.527Z",
			"description": "ISO 8601 formatted date indicating when the resource was updated.",
			"routing": {
				"send": {
					"property": "updated_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Create Notification Channels"
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
						"Notifications"
					],
					"operation": [
						"Create Notification Channels"
					]
				}
			}
		},
		{
			"displayName": "DELETE /notification_channels/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Delete Notification Channel"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The id of the resource.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Delete Notification Channel"
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
						"Notifications"
					],
					"operation": [
						"Delete Notification Channel"
					]
				}
			}
		},
		{
			"displayName": "GET /notification_channels/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Retrieve Notification Channel"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The id of the resource.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Retrieve Notification Channel"
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
						"Notifications"
					],
					"operation": [
						"Retrieve Notification Channel"
					]
				}
			}
		},
		{
			"displayName": "PATCH /notification_channels/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Update Notification Channel"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The id of the resource.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Update Notification Channel"
					]
				}
			}
		},
		{
			"displayName": "Channel Destination",
			"name": "channel_destination",
			"type": "string",
			"default": "+13125550000",
			"description": "The destination associated with the channel type.",
			"routing": {
				"send": {
					"property": "channel_destination",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Update Notification Channel"
					]
				}
			}
		},
		{
			"displayName": "Channel Type Id",
			"name": "channel_type_id",
			"type": "options",
			"default": "sms",
			"description": "A Channel Type ID",
			"options": [
				{
					"name": "Sms",
					"value": "sms"
				},
				{
					"name": "Voice",
					"value": "voice"
				},
				{
					"name": "Email",
					"value": "email"
				},
				{
					"name": "Webhook",
					"value": "webhook"
				}
			],
			"routing": {
				"send": {
					"property": "channel_type_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Update Notification Channel"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "string",
			"default": "2019-10-15T10:07:15.527Z",
			"description": "ISO 8601 formatted date indicating when the resource was created.",
			"routing": {
				"send": {
					"property": "created_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Update Notification Channel"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "12455643-3cf1-4683-ad23-1cd32f7d5e0a",
			"description": "A UUID.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Update Notification Channel"
					]
				}
			}
		},
		{
			"displayName": "Notification Profile Id",
			"name": "notification_profile_id",
			"type": "string",
			"default": "12455643-3cf1-4683-ad23-1cd32f7d5e0a",
			"description": "A UUID reference to the associated Notification Profile.",
			"routing": {
				"send": {
					"property": "notification_profile_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Update Notification Channel"
					]
				}
			}
		},
		{
			"displayName": "Updated At",
			"name": "updated_at",
			"type": "string",
			"default": "2019-10-15T10:07:15.527Z",
			"description": "ISO 8601 formatted date indicating when the resource was updated.",
			"routing": {
				"send": {
					"property": "updated_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Update Notification Channel"
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
						"Notifications"
					],
					"operation": [
						"Update Notification Channel"
					]
				}
			}
		},
		{
			"displayName": "GET /notification_event_conditions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Find Notifications Events Conditions"
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
						"Notifications"
					],
					"operation": [
						"Find Notifications Events Conditions"
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
						"Notifications"
					],
					"operation": [
						"Find Notifications Events Conditions"
					]
				}
			}
		},
		{
			"displayName": "Filter Associated Record Type Eq",
			"name": "filter%5Bassociated_record_type%5D%5Beq%5D",
			"description": "Filter by the associated record type",
			"default": "phone_number",
			"type": "options",
			"options": [
				{
					"name": "Account",
					"value": "account"
				},
				{
					"name": "Phone Number",
					"value": "phone_number"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[associated_record_type][eq]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Find Notifications Events Conditions"
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
						"Notifications"
					],
					"operation": [
						"Find Notifications Events Conditions"
					]
				}
			}
		},
		{
			"displayName": "GET /notification_events",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Find Notifications Events"
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
						"Notifications"
					],
					"operation": [
						"Find Notifications Events"
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
						"Notifications"
					],
					"operation": [
						"Find Notifications Events"
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
						"Notifications"
					],
					"operation": [
						"Find Notifications Events"
					]
				}
			}
		},
		{
			"displayName": "GET /notification_profiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Find Notifications Profiles"
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
						"Notifications"
					],
					"operation": [
						"Find Notifications Profiles"
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
						"Notifications"
					],
					"operation": [
						"Find Notifications Profiles"
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
						"Notifications"
					],
					"operation": [
						"Find Notifications Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /notification_profiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Create Notification Profile"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "string",
			"default": "2019-10-15T10:07:15.527Z",
			"description": "ISO 8601 formatted date indicating when the resource was created.",
			"routing": {
				"send": {
					"property": "created_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Create Notification Profile"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "12455643-3cf1-4683-ad23-1cd32f7d5e0a",
			"description": "A UUID.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Create Notification Profile"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "A human readable name.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Create Notification Profile"
					]
				}
			}
		},
		{
			"displayName": "Updated At",
			"name": "updated_at",
			"type": "string",
			"default": "2019-10-15T10:07:15.527Z",
			"description": "ISO 8601 formatted date indicating when the resource was updated.",
			"routing": {
				"send": {
					"property": "updated_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Create Notification Profile"
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
						"Notifications"
					],
					"operation": [
						"Create Notification Profile"
					]
				}
			}
		},
		{
			"displayName": "DELETE /notification_profiles/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Delete Notification Profile"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The id of the resource.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Delete Notification Profile"
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
						"Notifications"
					],
					"operation": [
						"Delete Notification Profile"
					]
				}
			}
		},
		{
			"displayName": "GET /notification_profiles/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Retrieve Notification Profile"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The id of the resource.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Retrieve Notification Profile"
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
						"Notifications"
					],
					"operation": [
						"Retrieve Notification Profile"
					]
				}
			}
		},
		{
			"displayName": "PATCH /notification_profiles/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Update Notification Profile"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The id of the resource.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Update Notification Profile"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "string",
			"default": "2019-10-15T10:07:15.527Z",
			"description": "ISO 8601 formatted date indicating when the resource was created.",
			"routing": {
				"send": {
					"property": "created_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Update Notification Profile"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "12455643-3cf1-4683-ad23-1cd32f7d5e0a",
			"description": "A UUID.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Update Notification Profile"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "A human readable name.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Update Notification Profile"
					]
				}
			}
		},
		{
			"displayName": "Updated At",
			"name": "updated_at",
			"type": "string",
			"default": "2019-10-15T10:07:15.527Z",
			"description": "ISO 8601 formatted date indicating when the resource was updated.",
			"routing": {
				"send": {
					"property": "updated_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Update Notification Profile"
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
						"Notifications"
					],
					"operation": [
						"Update Notification Profile"
					]
				}
			}
		},
		{
			"displayName": "GET /notification_settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"List Notification Settings"
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
						"Notifications"
					],
					"operation": [
						"List Notification Settings"
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
						"Notifications"
					],
					"operation": [
						"List Notification Settings"
					]
				}
			}
		},
		{
			"displayName": "Filter Notification Profile Id Eq",
			"name": "filter%5Bnotification_profile_id%5D%5Beq%5D",
			"description": "Filter by the id of a notification profile",
			"default": "12455643-3cf1-4683-ad23-1cd32f7d5e0a",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[notification_profile_id][eq]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"List Notification Settings"
					]
				}
			}
		},
		{
			"displayName": "Filter Notification Channel Eq",
			"name": "filter%5Bnotification_channel%5D%5Beq%5D",
			"description": "Filter by the id of a notification channel",
			"default": "12455643-3cf1-4683-ad23-1cd32f7d5e0a",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[notification_channel][eq]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"List Notification Settings"
					]
				}
			}
		},
		{
			"displayName": "Filter Notification Event Condition Id Eq",
			"name": "filter%5Bnotification_event_condition_id%5D%5Beq%5D",
			"description": "Filter by the id of a notification channel",
			"default": "12455643-3cf1-4683-ad23-1cd32f7d5e0a",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[notification_event_condition_id][eq]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"List Notification Settings"
					]
				}
			}
		},
		{
			"displayName": "Filter Associated Record Type Eq",
			"name": "filter%5Bassociated_record_type%5D%5Beq%5D",
			"description": "Filter by the associated record type",
			"default": "phone_number",
			"type": "options",
			"options": [
				{
					"name": "Account",
					"value": "account"
				},
				{
					"name": "Phone Number",
					"value": "phone_number"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[associated_record_type][eq]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"List Notification Settings"
					]
				}
			}
		},
		{
			"displayName": "Filter Status Eq",
			"name": "filter%5Bstatus%5D%5Beq%5D",
			"description": "The status of a notification setting",
			"default": "enable-received",
			"type": "options",
			"options": [
				{
					"name": "Enabled",
					"value": "enabled"
				},
				{
					"name": "Enable Received",
					"value": "enable-received"
				},
				{
					"name": "Enable Pending",
					"value": "enable-pending"
				},
				{
					"name": "Enable Submtited",
					"value": "enable-submtited"
				},
				{
					"name": "Delete Received",
					"value": "delete-received"
				},
				{
					"name": "Delete Pending",
					"value": "delete-pending"
				},
				{
					"name": "Delete Submitted",
					"value": "delete-submitted"
				},
				{
					"name": "Deleted",
					"value": "deleted"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[status][eq]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"List Notification Settings"
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
						"Notifications"
					],
					"operation": [
						"List Notification Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /notification_settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Create Notification Setting"
					]
				}
			}
		},
		{
			"displayName": "Associated Record Type",
			"name": "associated_record_type",
			"type": "string",
			"default": "phone_number",
			"routing": {
				"send": {
					"property": "associated_record_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Create Notification Setting"
					]
				}
			}
		},
		{
			"displayName": "Associated Record Type Value",
			"name": "associated_record_type_value",
			"type": "string",
			"default": "+13125550000",
			"routing": {
				"send": {
					"property": "associated_record_type_value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Create Notification Setting"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "string",
			"default": "2019-10-15T10:07:15.527Z",
			"description": "ISO 8601 formatted date indicating when the resource was created.",
			"routing": {
				"send": {
					"property": "created_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Create Notification Setting"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "8eb5b5f9-5893-423c-9f15-b487713d44d4",
			"description": "A UUID.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Create Notification Setting"
					]
				}
			}
		},
		{
			"displayName": "Notification Channel Id",
			"name": "notification_channel_id",
			"type": "string",
			"default": "12455643-3cf1-4683-ad23-1cd32f7d5e0a",
			"description": "A UUID reference to the associated Notification Channel.",
			"routing": {
				"send": {
					"property": "notification_channel_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Create Notification Setting"
					]
				}
			}
		},
		{
			"displayName": "Notification Event Condition Id",
			"name": "notification_event_condition_id",
			"type": "string",
			"default": "70c7c5cb-dce2-4124-accb-870d39dbe852",
			"description": "A UUID reference to the associated Notification Event Condition.",
			"routing": {
				"send": {
					"property": "notification_event_condition_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Create Notification Setting"
					]
				}
			}
		},
		{
			"displayName": "Notification Profile Id",
			"name": "notification_profile_id",
			"type": "string",
			"default": "12455643-3cf1-4683-ad23-1cd32f7d5e0a",
			"description": "A UUID reference to the associated Notification Profile.",
			"routing": {
				"send": {
					"property": "notification_profile_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Create Notification Setting"
					]
				}
			}
		},
		{
			"displayName": "Parameters",
			"name": "parameters",
			"type": "json",
			"default": "[\n  {\n    \"name\": \"phone_number\",\n    \"value\": \"+13125550000\"\n  }\n]",
			"routing": {
				"send": {
					"property": "parameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Create Notification Setting"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "enable-received",
			"description": "Most preferences apply immediately; however, other may needs to propagate.",
			"options": [
				{
					"name": "Enabled",
					"value": "enabled"
				},
				{
					"name": "Enable Received",
					"value": "enable-received"
				},
				{
					"name": "Enable Pending",
					"value": "enable-pending"
				},
				{
					"name": "Enable Submtited",
					"value": "enable-submtited"
				},
				{
					"name": "Delete Received",
					"value": "delete-received"
				},
				{
					"name": "Delete Pending",
					"value": "delete-pending"
				},
				{
					"name": "Delete Submitted",
					"value": "delete-submitted"
				},
				{
					"name": "Deleted",
					"value": "deleted"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Create Notification Setting"
					]
				}
			}
		},
		{
			"displayName": "Updated At",
			"name": "updated_at",
			"type": "string",
			"default": "2019-10-15T10:07:15.527Z",
			"description": "ISO 8601 formatted date indicating when the resource was updated.",
			"routing": {
				"send": {
					"property": "updated_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Create Notification Setting"
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
						"Notifications"
					],
					"operation": [
						"Create Notification Setting"
					]
				}
			}
		},
		{
			"displayName": "DELETE /notification_settings/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Delete Notification Setting"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The id of the resource.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Delete Notification Setting"
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
						"Notifications"
					],
					"operation": [
						"Delete Notification Setting"
					]
				}
			}
		},
		{
			"displayName": "GET /notification_settings/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Retrieve Notification Setting"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The id of the resource.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Notifications"
					],
					"operation": [
						"Retrieve Notification Setting"
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
						"Notifications"
					],
					"operation": [
						"Retrieve Notification Setting"
					]
				}
			}
		},
];
