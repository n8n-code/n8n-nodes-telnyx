import type { INodeProperties } from 'n8n-workflow';

export const requirementTypesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Requirement Types"
					]
				}
			},
			"options": [
				{
					"name": "Doc Reqs List Requirement Types",
					"value": "Doc Reqs List Requirement Types",
					"action": "List all requirement types",
					"description": "List all requirement types ordered by created_at descending",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/requirement_types"
						}
					}
				},
				{
					"name": "Doc Reqs Retrieve Requirement Type",
					"value": "Doc Reqs Retrieve Requirement Type",
					"action": "Retrieve a requirement types",
					"description": "Retrieve a requirement type by id",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/requirement_types/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /requirement_types",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Requirement Types"
					],
					"operation": [
						"Doc Reqs List Requirement Types"
					]
				}
			}
		},
		{
			"displayName": "Filter Name Contains",
			"name": "filter%5Bname%5D%5Bcontains%5D",
			"description": "Filters requirement types to those whose name contains a certain string.",
			"default": "utility bill",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[name][contains]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Requirement Types"
					],
					"operation": [
						"Doc Reqs List Requirement Types"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort%5B%5D",
			"description": "Specifies the sort order for results. If you want to sort by a field in ascending order, include it as a sort parameter. If you want to sort in descending order, prepend a `-` in front of the field name.",
			"default": "country_code",
			"type": "options",
			"options": [
				{
					"name": "Created At",
					"value": "created_at"
				},
				{
					"name": "Name",
					"value": "name"
				},
				{
					"name": "Updated At",
					"value": "updated_at"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort[]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Requirement Types"
					],
					"operation": [
						"Doc Reqs List Requirement Types"
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
						"Requirement Types"
					],
					"operation": [
						"Doc Reqs List Requirement Types"
					]
				}
			}
		},
		{
			"displayName": "GET /requirement_types/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Requirement Types"
					],
					"operation": [
						"Doc Reqs Retrieve Requirement Type"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Uniquely identifies the requirement_type record",
			"default": "a38c217a-8019-48f8-bff6-0fdd9939075b",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Requirement Types"
					],
					"operation": [
						"Doc Reqs Retrieve Requirement Type"
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
						"Requirement Types"
					],
					"operation": [
						"Doc Reqs Retrieve Requirement Type"
					]
				}
			}
		},
];
