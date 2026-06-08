import type { INodeProperties } from 'n8n-workflow';

export const otaUpdatesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"OTA Updates"
					]
				}
			},
			"options": [
				{
					"name": "OTA Updates List",
					"value": "OTA Updates List",
					"action": "List OTA updates",
					"description": "List OTA updates",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ota_updates"
						}
					}
				},
				{
					"name": "OTA Update GET",
					"value": "OTA Update GET",
					"action": "Get OTA update",
					"description": "This API returns the details of an Over the Air (OTA) update.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ota_updates/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /ota_updates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"OTA Updates"
					],
					"operation": [
						"OTA Updates List"
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
						"OTA Updates"
					],
					"operation": [
						"OTA Updates List"
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
						"OTA Updates"
					],
					"operation": [
						"OTA Updates List"
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
						"OTA Updates"
					],
					"operation": [
						"OTA Updates List"
					]
				}
			}
		},
		{
			"displayName": "Filter Sim Card Id",
			"name": "filter%5Bsim_card_id%5D",
			"description": "The SIM card identification UUID.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[sim_card_id]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"OTA Updates"
					],
					"operation": [
						"OTA Updates List"
					]
				}
			}
		},
		{
			"displayName": "Filter Type",
			"name": "filter%5Btype%5D",
			"description": "Filter by type.",
			"default": "sim_card_network_preferences",
			"type": "options",
			"options": [
				{
					"name": "Sim Card Network Preferences",
					"value": "sim_card_network_preferences"
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
						"OTA Updates"
					],
					"operation": [
						"OTA Updates List"
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
						"OTA Updates"
					],
					"operation": [
						"OTA Updates List"
					]
				}
			}
		},
		{
			"displayName": "GET /ota_updates/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"OTA Updates"
					],
					"operation": [
						"OTA Update GET"
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
						"OTA Updates"
					],
					"operation": [
						"OTA Update GET"
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
						"OTA Updates"
					],
					"operation": [
						"OTA Update GET"
					]
				}
			}
		},
];
