import type { INodeProperties } from 'n8n-workflow';

export const simCardGroupActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Group Actions"
					]
				}
			},
			"options": [
				{
					"name": "Sim Card Group Actions Get",
					"value": "Sim Card Group Actions Get",
					"action": "List SIM card group actions",
					"description": "This API allows listing a paginated collection a SIM card group actions. It allows to explore a collection of existing asynchronous operation using specific filters.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sim_card_group_actions"
						}
					}
				},
				{
					"name": "Sim Card Group Action Get",
					"value": "Sim Card Group Action Get",
					"action": "Get SIM card group action details",
					"description": "This API allows fetching detailed information about a SIM card group action resource to make follow-ups in an existing asynchronous operation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sim_card_group_actions/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sim_card_group_actions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Group Actions"
					],
					"operation": [
						"Sim Card Group Actions Get"
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
						"SIM Card Group Actions"
					],
					"operation": [
						"Sim Card Group Actions Get"
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
						"SIM Card Group Actions"
					],
					"operation": [
						"Sim Card Group Actions Get"
					]
				}
			}
		},
		{
			"displayName": "Filter Sim Card Group Id",
			"name": "filter%5Bsim_card_group_id%5D",
			"description": "A valid SIM card group ID.",
			"default": "47a1c2b0-cc7b-4ab1-bb98-b33fb0fc61b9",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[sim_card_group_id]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Group Actions"
					],
					"operation": [
						"Sim Card Group Actions Get"
					]
				}
			}
		},
		{
			"displayName": "Filter Status",
			"name": "filter%5Bstatus%5D",
			"description": "Filter by a specific status of the resource's lifecycle.",
			"default": "in-progress",
			"type": "options",
			"options": [
				{
					"name": "In Progress",
					"value": "in-progress"
				},
				{
					"name": "Completed",
					"value": "completed"
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
						"SIM Card Group Actions"
					],
					"operation": [
						"Sim Card Group Actions Get"
					]
				}
			}
		},
		{
			"displayName": "Filter Type",
			"name": "filter%5Btype%5D",
			"description": "Filter by action type.",
			"default": "set_private_wireless_gateway",
			"type": "options",
			"options": [
				{
					"name": "Set Private Wireless Gateway",
					"value": "set_private_wireless_gateway"
				},
				{
					"name": "Remove Private Wireless Gateway",
					"value": "remove_private_wireless_gateway"
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
						"SIM Card Group Actions"
					],
					"operation": [
						"Sim Card Group Actions Get"
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
						"SIM Card Group Actions"
					],
					"operation": [
						"Sim Card Group Actions Get"
					]
				}
			}
		},
		{
			"displayName": "GET /sim_card_group_actions/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Group Actions"
					],
					"operation": [
						"Sim Card Group Action Get"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Identifies the resource.",
			"default": "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Group Actions"
					],
					"operation": [
						"Sim Card Group Action Get"
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
						"SIM Card Group Actions"
					],
					"operation": [
						"Sim Card Group Action Get"
					]
				}
			}
		},
];
