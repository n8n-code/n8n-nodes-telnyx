import type { INodeProperties } from 'n8n-workflow';

export const bulkCredentialsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Bulk Credentials"
					]
				}
			},
			"options": [
				{
					"name": "Delete Bulk Telephony Credential",
					"value": "Delete Bulk Telephony Credential",
					"action": "Delete several credentials",
					"description": "Delete several credentials in bulk.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/actions/bulk/telephony_credentials"
						}
					}
				},
				{
					"name": "Update Bulk Telephony Credential",
					"value": "Update Bulk Telephony Credential",
					"action": "Update several credentials",
					"description": "Update several credentials in bulk.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/actions/bulk/telephony_credentials"
						}
					}
				},
				{
					"name": "Create Bulk Telephony Credential",
					"value": "Create Bulk Telephony Credential",
					"action": "Creates several credentials",
					"description": "Creates several credentials in bulk.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/actions/bulk/telephony_credentials"
						}
					}
				},
				{
					"name": "Bulk Credential Action",
					"value": "Bulk Credential Action",
					"action": "Perform activate or deactivate action on all credentials filtered by the provided tag.",
					"description": "Perform activate or deactivate action on all credentials filtered by the provided tag. Activate action will change the status to active, making it possible to connect calls with the credential. Deactivate action will change the status to inactive, making it impossible to connect calls with the credential.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/actions/{{$parameter[\"action\"]}}/telephony_credentials"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /actions/bulk/telephony_credentials",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bulk Credentials"
					],
					"operation": [
						"Delete Bulk Telephony Credential"
					]
				}
			}
		},
		{
			"displayName": "Filter Tag",
			"name": "filter%5Btag%5D",
			"required": true,
			"description": "Filter by tag, required by bulk operations.",
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
						"Bulk Credentials"
					],
					"operation": [
						"Delete Bulk Telephony Credential"
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
						"Bulk Credentials"
					],
					"operation": [
						"Delete Bulk Telephony Credential"
					]
				}
			}
		},
		{
			"displayName": "PATCH /actions/bulk/telephony_credentials",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bulk Credentials"
					],
					"operation": [
						"Update Bulk Telephony Credential"
					]
				}
			}
		},
		{
			"displayName": "Filter Tag",
			"name": "filter%5Btag%5D",
			"required": true,
			"description": "Filter by tag, required by bulk operations.",
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
						"Bulk Credentials"
					],
					"operation": [
						"Update Bulk Telephony Credential"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"type": "number",
			"default": 100,
			"description": "Amount of credentials to be created. A single tag can hold at maximum 1000 credentials",
			"routing": {
				"send": {
					"property": "amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bulk Credentials"
					],
					"operation": [
						"Update Bulk Telephony Credential"
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
			"description": "Identifies the connection this credential is associated with.",
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
						"Bulk Credentials"
					],
					"operation": [
						"Update Bulk Telephony Credential"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Default Credentials",
			"description": "A default name for all credentials.",
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
						"Bulk Credentials"
					],
					"operation": [
						"Update Bulk Telephony Credential"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tag",
			"name": "tag",
			"type": "string",
			"default": "My Credentials",
			"description": "Tags a credential for bulk operations. A single tag can hold at maximum 1000 credentials.",
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
						"Bulk Credentials"
					],
					"operation": [
						"Update Bulk Telephony Credential"
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
						"Bulk Credentials"
					],
					"operation": [
						"Update Bulk Telephony Credential"
					]
				}
			}
		},
		{
			"displayName": "POST /actions/bulk/telephony_credentials",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bulk Credentials"
					],
					"operation": [
						"Create Bulk Telephony Credential"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"type": "number",
			"default": 100,
			"description": "Amount of credentials to be created. A single tag can hold at maximum 1000 credentials",
			"routing": {
				"send": {
					"property": "amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bulk Credentials"
					],
					"operation": [
						"Create Bulk Telephony Credential"
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
			"description": "Identifies the connection this credential is associated with.",
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
						"Bulk Credentials"
					],
					"operation": [
						"Create Bulk Telephony Credential"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Default Credentials",
			"description": "A default name for all credentials.",
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
						"Bulk Credentials"
					],
					"operation": [
						"Create Bulk Telephony Credential"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tag",
			"name": "tag",
			"type": "string",
			"default": "My Credentials",
			"description": "Tags a credential for bulk operations. A single tag can hold at maximum 1000 credentials.",
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
						"Bulk Credentials"
					],
					"operation": [
						"Create Bulk Telephony Credential"
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
						"Bulk Credentials"
					],
					"operation": [
						"Create Bulk Telephony Credential"
					]
				}
			}
		},
		{
			"displayName": "POST /actions/{action}/telephony_credentials",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bulk Credentials"
					],
					"operation": [
						"Bulk Credential Action"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "action",
			"required": true,
			"description": "Identifies the action to be taken. Activate will change the status to active. Deactivate will change the status to inactive.",
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
						"Bulk Credentials"
					],
					"operation": [
						"Bulk Credential Action"
					]
				}
			}
		},
		{
			"displayName": "Filter Tag",
			"name": "filter%5Btag%5D",
			"required": true,
			"description": "Filter by tag, required by bulk operations.",
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
						"Bulk Credentials"
					],
					"operation": [
						"Bulk Credential Action"
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
						"Bulk Credentials"
					],
					"operation": [
						"Bulk Credential Action"
					]
				}
			}
		},
];
