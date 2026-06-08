import type { INodeProperties } from 'n8n-workflow';

export const simCardGroupsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Groups"
					]
				}
			},
			"options": [
				{
					"name": "Sim Card Groups Get All",
					"value": "Sim Card Groups Get All",
					"action": "Get all SIM card groups",
					"description": "Get all SIM card groups belonging to the user that match the given filters.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sim_card_groups"
						}
					}
				},
				{
					"name": "Sim Card Groups Post",
					"value": "Sim Card Groups Post",
					"action": "Create a SIM card group",
					"description": "Creates a new SIM card group object",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sim_card_groups"
						}
					}
				},
				{
					"name": "Sim Card Group Delete",
					"value": "Sim Card Group Delete",
					"action": "Delete a SIM card group",
					"description": "Permanently deletes a SIM card group",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sim_card_groups/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Sim Card Groups Get",
					"value": "Sim Card Groups Get",
					"action": "Get SIM card group",
					"description": "Returns the details regarding a specific SIM card group",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sim_card_groups/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Sim Card Group Update",
					"value": "Sim Card Group Update",
					"action": "Update a SIM card group",
					"description": "Updates a SIM card group",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sim_card_groups/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Remove SIM Card Group Private Wireless Gateway",
					"value": "Remove SIM Card Group Private Wireless Gateway",
					"action": "Request Private Wireless Gateway removal from SIM card group",
					"description": "This action will asynchronously remove an existing Private Wireless Gateway definition from a SIM card group. Completing this operation defines that all SIM cards in the SIM card group will get their traffic handled by Telnyx's default mobile network configuration.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sim_card_groups/{{$parameter[\"id\"]}}/actions/remove_private_wireless_gateway"
						}
					}
				},
				{
					"name": "Set SIM Card Group Private Wireless Gateway",
					"value": "Set SIM Card Group Private Wireless Gateway",
					"action": "Request Private Wireless Gateway assignment for SIM card group",
					"description": "This action will asynchronously assign a provisioned Private Wireless Gateway to the SIM card group. Completing this operation defines that all SIM cards in the SIM card group will get their traffic controlled by the associated Private Wireless Gateway. This operation will also imply that new SIM cards assigned to a group will inherit its network definitions. If it's moved to a different group that doesn't have a Private Wireless Gateway, it'll use Telnyx's default mobile network configuration.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sim_card_groups/{{$parameter[\"id\"]}}/actions/set_private_wireless_gateway"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sim_card_groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Groups"
					],
					"operation": [
						"Sim Card Groups Get All"
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
						"SIM Card Groups"
					],
					"operation": [
						"Sim Card Groups Get All"
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
						"SIM Card Groups"
					],
					"operation": [
						"Sim Card Groups Get All"
					]
				}
			}
		},
		{
			"displayName": "Filter Name",
			"name": "filter%5Bname%5D",
			"description": "A valid SIM card group name.",
			"default": "My Test Group",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[name]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Groups"
					],
					"operation": [
						"Sim Card Groups Get All"
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
						"SIM Card Groups"
					],
					"operation": [
						"Sim Card Groups Get All"
					]
				}
			}
		},
		{
			"displayName": "POST /sim_card_groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Groups"
					],
					"operation": [
						"Sim Card Groups Post"
					]
				}
			}
		},
		{
			"displayName": "Data Limit",
			"name": "data_limit",
			"type": "number",
			"default": 2048,
			"description": "Upper limit on the amount of data the SIM cards, within the group, can use.",
			"routing": {
				"send": {
					"property": "data_limit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Groups"
					],
					"operation": [
						"Sim Card Groups Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "My Test Group",
			"description": "A user friendly name for the SIM card group.",
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
						"SIM Card Groups"
					],
					"operation": [
						"Sim Card Groups Post"
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
						"SIM Card Groups"
					],
					"operation": [
						"Sim Card Groups Post"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sim_card_groups/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Groups"
					],
					"operation": [
						"Sim Card Group Delete"
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
						"SIM Card Groups"
					],
					"operation": [
						"Sim Card Group Delete"
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
						"SIM Card Groups"
					],
					"operation": [
						"Sim Card Group Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /sim_card_groups/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Groups"
					],
					"operation": [
						"Sim Card Groups Get"
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
						"SIM Card Groups"
					],
					"operation": [
						"Sim Card Groups Get"
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
						"SIM Card Groups"
					],
					"operation": [
						"Sim Card Groups Get"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sim_card_groups/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Groups"
					],
					"operation": [
						"Sim Card Group Update"
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
						"SIM Card Groups"
					],
					"operation": [
						"Sim Card Group Update"
					]
				}
			}
		},
		{
			"displayName": "Data Limit",
			"name": "data_limit",
			"type": "number",
			"default": 2048,
			"description": "Upper limit on the amount of data the SIM cards, within the group, can use.",
			"routing": {
				"send": {
					"property": "data_limit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Groups"
					],
					"operation": [
						"Sim Card Group Update"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "My Test Group",
			"description": "A user friendly name for the SIM card group.",
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
						"SIM Card Groups"
					],
					"operation": [
						"Sim Card Group Update"
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
						"SIM Card Groups"
					],
					"operation": [
						"Sim Card Group Update"
					]
				}
			}
		},
		{
			"displayName": "POST /sim_card_groups/{id}/actions/remove_private_wireless_gateway",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Groups"
					],
					"operation": [
						"Remove SIM Card Group Private Wireless Gateway"
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
						"SIM Card Groups"
					],
					"operation": [
						"Remove SIM Card Group Private Wireless Gateway"
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
						"SIM Card Groups"
					],
					"operation": [
						"Remove SIM Card Group Private Wireless Gateway"
					]
				}
			}
		},
		{
			"displayName": "POST /sim_card_groups/{id}/actions/set_private_wireless_gateway",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Groups"
					],
					"operation": [
						"Set SIM Card Group Private Wireless Gateway"
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
						"SIM Card Groups"
					],
					"operation": [
						"Set SIM Card Group Private Wireless Gateway"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Private Wireless Gateway Id",
			"name": "private_wireless_gateway_id",
			"type": "string",
			"default": "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
			"description": "The identification of the related Private Wireless Gateway resource.",
			"routing": {
				"send": {
					"property": "private_wireless_gateway_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Card Groups"
					],
					"operation": [
						"Set SIM Card Group Private Wireless Gateway"
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
						"SIM Card Groups"
					],
					"operation": [
						"Set SIM Card Group Private Wireless Gateway"
					]
				}
			}
		},
];
