import type { INodeProperties } from 'n8n-workflow';

export const billingGroupsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Billing Groups"
					]
				}
			},
			"options": [
				{
					"name": "List Billing Groups",
					"value": "List Billing Groups",
					"action": "List all billing groups",
					"description": "List all billing groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/billing_groups"
						}
					}
				},
				{
					"name": "Create Billing Group",
					"value": "Create Billing Group",
					"action": "Create a billing group",
					"description": "Create a billing group",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/billing_groups"
						}
					}
				},
				{
					"name": "Delete Billing Group",
					"value": "Delete Billing Group",
					"action": "Delete a billing group",
					"description": "Delete a billing group",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/billing_groups/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Retrieve Billing Group",
					"value": "Retrieve Billing Group",
					"action": "Retrieve a billing group",
					"description": "Retrieve a billing group",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/billing_groups/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Billing Group",
					"value": "Update Billing Group",
					"action": "Update a billing group",
					"description": "Update a billing group",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/billing_groups/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /billing_groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Billing Groups"
					],
					"operation": [
						"List Billing Groups"
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
						"Billing Groups"
					],
					"operation": [
						"List Billing Groups"
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
						"Billing Groups"
					],
					"operation": [
						"List Billing Groups"
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
						"Billing Groups"
					],
					"operation": [
						"List Billing Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /billing_groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Billing Groups"
					],
					"operation": [
						"Create Billing Group"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "A name for the billing group",
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
						"Billing Groups"
					],
					"operation": [
						"Create Billing Group"
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
						"Billing Groups"
					],
					"operation": [
						"Create Billing Group"
					]
				}
			}
		},
		{
			"displayName": "DELETE /billing_groups/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Billing Groups"
					],
					"operation": [
						"Delete Billing Group"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The id of the billing group",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Billing Groups"
					],
					"operation": [
						"Delete Billing Group"
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
						"Billing Groups"
					],
					"operation": [
						"Delete Billing Group"
					]
				}
			}
		},
		{
			"displayName": "GET /billing_groups/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Billing Groups"
					],
					"operation": [
						"Retrieve Billing Group"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The id of the billing group",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Billing Groups"
					],
					"operation": [
						"Retrieve Billing Group"
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
						"Billing Groups"
					],
					"operation": [
						"Retrieve Billing Group"
					]
				}
			}
		},
		{
			"displayName": "PATCH /billing_groups/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Billing Groups"
					],
					"operation": [
						"Update Billing Group"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The id of the billing group",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Billing Groups"
					],
					"operation": [
						"Update Billing Group"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "A name for the billing group",
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
						"Billing Groups"
					],
					"operation": [
						"Update Billing Group"
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
						"Billing Groups"
					],
					"operation": [
						"Update Billing Group"
					]
				}
			}
		},
];
