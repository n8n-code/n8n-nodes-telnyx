import type { INodeProperties } from 'n8n-workflow';

export const csvDownloadsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"CSV Downloads"
					]
				}
			},
			"options": [
				{
					"name": "List Csv Downloads",
					"value": "List Csv Downloads",
					"action": "List CSV downloads",
					"description": "List CSV downloads",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/phone_numbers/csv_downloads"
						}
					}
				},
				{
					"name": "Create Csv Download",
					"value": "Create Csv Download",
					"action": "Create a CSV download",
					"description": "Create a CSV download",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/phone_numbers/csv_downloads"
						}
					}
				},
				{
					"name": "Retrieve Csv Download",
					"value": "Retrieve Csv Download",
					"action": "Retrieve a CSV download",
					"description": "Retrieve a CSV download",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/phone_numbers/csv_downloads/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /phone_numbers/csv_downloads",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"CSV Downloads"
					],
					"operation": [
						"List Csv Downloads"
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
						"CSV Downloads"
					],
					"operation": [
						"List Csv Downloads"
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
						"CSV Downloads"
					],
					"operation": [
						"List Csv Downloads"
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
						"CSV Downloads"
					],
					"operation": [
						"List Csv Downloads"
					]
				}
			}
		},
		{
			"displayName": "POST /phone_numbers/csv_downloads",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"CSV Downloads"
					],
					"operation": [
						"Create Csv Download"
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
						"CSV Downloads"
					],
					"operation": [
						"Create Csv Download"
					]
				}
			}
		},
		{
			"displayName": "GET /phone_numbers/csv_downloads/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"CSV Downloads"
					],
					"operation": [
						"Retrieve Csv Download"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Identifies the CSV download.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"CSV Downloads"
					],
					"operation": [
						"Retrieve Csv Download"
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
						"CSV Downloads"
					],
					"operation": [
						"Retrieve Csv Download"
					]
				}
			}
		},
];
