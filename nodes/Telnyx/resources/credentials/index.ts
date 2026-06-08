import type { INodeProperties } from 'n8n-workflow';

export const credentialsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Credentials"
					]
				}
			},
			"options": [
				{
					"name": "Find Telephony Credentials",
					"value": "Find Telephony Credentials",
					"action": "List all credentials",
					"description": "List all On-demand Credentials.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/telephony_credentials"
						}
					}
				},
				{
					"name": "Create Telephony Credential",
					"value": "Create Telephony Credential",
					"action": "Create a credential",
					"description": "Create a credential.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/telephony_credentials"
						}
					}
				},
				{
					"name": "List Tags",
					"value": "List Tags",
					"action": "List all tags",
					"description": "Returns a list of tags used on Credentials",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/telephony_credentials/tags"
						}
					}
				},
				{
					"name": "Delete Telephony Credential",
					"value": "Delete Telephony Credential",
					"action": "Delete a credential",
					"description": "Delete an existing credential.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/telephony_credentials/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Telephony Credential",
					"value": "Get Telephony Credential",
					"action": "Get a credential",
					"description": "Get the details of an existing On-demand Credential.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/telephony_credentials/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Telephony Credential",
					"value": "Update Telephony Credential",
					"action": "Update a credential",
					"description": "Update an existing credential.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/telephony_credentials/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Telephony Credential Action",
					"value": "Telephony Credential Action",
					"action": "Perform activate or deactivate action on provided Credential",
					"description": "Perform activate or deactivate action on provided Credential. Activate action will change the status to active, making it possible to connect calls with the credential. Deactivate action will change the status to inactive, making it impossible to connect calls with the credential.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/telephony_credentials/{{$parameter[\"id\"]}}/actions/{{$parameter[\"action\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /telephony_credentials",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Credentials"
					],
					"operation": [
						"Find Telephony Credentials"
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
						"Credentials"
					],
					"operation": [
						"Find Telephony Credentials"
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
						"Credentials"
					],
					"operation": [
						"Find Telephony Credentials"
					]
				}
			}
		},
		{
			"displayName": "Filter Tag",
			"name": "filter%5Btag%5D",
			"description": "Filter by tag",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[tag]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Credentials"
					],
					"operation": [
						"Find Telephony Credentials"
					]
				}
			}
		},
		{
			"displayName": "Filter Name",
			"name": "filter%5Bname%5D",
			"description": "Filter by name",
			"default": "",
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
						"Credentials"
					],
					"operation": [
						"Find Telephony Credentials"
					]
				}
			}
		},
		{
			"displayName": "Filter Status",
			"name": "filter%5Bstatus%5D",
			"description": "Filter by status",
			"default": "",
			"type": "string",
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
						"Credentials"
					],
					"operation": [
						"Find Telephony Credentials"
					]
				}
			}
		},
		{
			"displayName": "Filter Resource Id",
			"name": "filter%5Bresource_id%5D",
			"description": "Filter by resource_id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[resource_id]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Credentials"
					],
					"operation": [
						"Find Telephony Credentials"
					]
				}
			}
		},
		{
			"displayName": "Filter Sip Username",
			"name": "filter%5Bsip_username%5D",
			"description": "Filter by sip_username",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[sip_username]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Credentials"
					],
					"operation": [
						"Find Telephony Credentials"
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
						"Credentials"
					],
					"operation": [
						"Find Telephony Credentials"
					]
				}
			}
		},
		{
			"displayName": "POST /telephony_credentials",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Credentials"
					],
					"operation": [
						"Create Telephony Credential"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Connection Id",
			"name": "connection_id",
			"type": "string",
			"default": "1234567890",
			"description": "Identifies the Credential Connection this credential is associated with.",
			"routing": {
				"send": {
					"property": "connection_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Credentials"
					],
					"operation": [
						"Create Telephony Credential"
					]
				}
			}
		},
		{
			"displayName": "Expires At",
			"name": "expires_at",
			"type": "string",
			"default": "2018-02-02T22:25:27.521Z",
			"description": "ISO-8601 formatted date indicating when the credential will expire.",
			"routing": {
				"send": {
					"property": "expires_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Credentials"
					],
					"operation": [
						"Create Telephony Credential"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
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
						"Credentials"
					],
					"operation": [
						"Create Telephony Credential"
					]
				}
			}
		},
		{
			"displayName": "Tag",
			"name": "tag",
			"type": "string",
			"default": "some_tag",
			"description": "Tags a credential to filter for bulk operations. A single tag can hold at maximum 1000 credentials.",
			"routing": {
				"send": {
					"property": "tag",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Credentials"
					],
					"operation": [
						"Create Telephony Credential"
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
						"Credentials"
					],
					"operation": [
						"Create Telephony Credential"
					]
				}
			}
		},
		{
			"displayName": "GET /telephony_credentials/tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Credentials"
					],
					"operation": [
						"List Tags"
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
						"Credentials"
					],
					"operation": [
						"List Tags"
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
						"Credentials"
					],
					"operation": [
						"List Tags"
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
						"Credentials"
					],
					"operation": [
						"List Tags"
					]
				}
			}
		},
		{
			"displayName": "DELETE /telephony_credentials/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Credentials"
					],
					"operation": [
						"Delete Telephony Credential"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Identifies the resource.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Credentials"
					],
					"operation": [
						"Delete Telephony Credential"
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
						"Credentials"
					],
					"operation": [
						"Delete Telephony Credential"
					]
				}
			}
		},
		{
			"displayName": "GET /telephony_credentials/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Credentials"
					],
					"operation": [
						"Get Telephony Credential"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Identifies the resource.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Credentials"
					],
					"operation": [
						"Get Telephony Credential"
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
						"Credentials"
					],
					"operation": [
						"Get Telephony Credential"
					]
				}
			}
		},
		{
			"displayName": "PATCH /telephony_credentials/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Credentials"
					],
					"operation": [
						"Update Telephony Credential"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Identifies the resource.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Credentials"
					],
					"operation": [
						"Update Telephony Credential"
					]
				}
			}
		},
		{
			"displayName": "Connection Id",
			"name": "connection_id",
			"type": "string",
			"default": "987654321",
			"description": "Identifies the Credential Connection this credential is associated with.",
			"routing": {
				"send": {
					"property": "connection_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Credentials"
					],
					"operation": [
						"Update Telephony Credential"
					]
				}
			}
		},
		{
			"displayName": "Expires At",
			"name": "expires_at",
			"type": "string",
			"default": "2018-02-02T22:25:27.521Z",
			"description": "ISO-8601 formatted date indicating when the credential will expire.",
			"routing": {
				"send": {
					"property": "expires_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Credentials"
					],
					"operation": [
						"Update Telephony Credential"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
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
						"Credentials"
					],
					"operation": [
						"Update Telephony Credential"
					]
				}
			}
		},
		{
			"displayName": "Tag",
			"name": "tag",
			"type": "string",
			"default": "some_tag",
			"description": "Tags a credential to filter for bulk operations. A single tag can hold at maximum 1000 credentials.",
			"routing": {
				"send": {
					"property": "tag",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Credentials"
					],
					"operation": [
						"Update Telephony Credential"
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
						"Credentials"
					],
					"operation": [
						"Update Telephony Credential"
					]
				}
			}
		},
		{
			"displayName": "POST /telephony_credentials/{id}/actions/{action}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Credentials"
					],
					"operation": [
						"Telephony Credential Action"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Identifies the resource.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Credentials"
					],
					"operation": [
						"Telephony Credential Action"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "action",
			"required": true,
			"description": "Identifies the action to be taken.",
			"default": "activate",
			"type": "options",
			"options": [
				{
					"name": "Activate",
					"value": "activate"
				},
				{
					"name": "Deactivate",
					"value": "deactivate"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Credentials"
					],
					"operation": [
						"Telephony Credential Action"
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
						"Credentials"
					],
					"operation": [
						"Telephony Credential Action"
					]
				}
			}
		},
];
