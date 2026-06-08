import type { INodeProperties } from 'n8n-workflow';

export const numberBlocksBackgroundJobsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Number Blocks Background Jobs"
					]
				}
			},
			"options": [
				{
					"name": "List Phone Number Blocks Jobs",
					"value": "List Phone Number Blocks Jobs",
					"action": "Lists the phone number blocks jobs",
					"description": "Lists the phone number blocks jobs",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/phone_number_blocks/jobs"
						}
					}
				},
				{
					"name": "Create Phone Number Blocks Job Delete Phone Number Block",
					"value": "Create Phone Number Blocks Job Delete Phone Number Block",
					"action": "Deletes all numbers associated with a phone number block",
					"description": "Creates a new background job to delete all the phone numbers associated with the given block. We will only consider the phone number block as deleted after all phone numbers associated with it are removed, so multiple executions of this job may be necessary in case some of the phone numbers present errors during the deletion process.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/phone_number_blocks/jobs/delete_phone_number_block"
						}
					}
				},
				{
					"name": "Retrieve Phone Number Blocks Job",
					"value": "Retrieve Phone Number Blocks Job",
					"action": "Retrieves a phone number blocks job",
					"description": "Retrieves a phone number blocks job",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/phone_number_blocks/jobs/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /phone_number_blocks/jobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Blocks Background Jobs"
					],
					"operation": [
						"List Phone Number Blocks Jobs"
					]
				}
			}
		},
		{
			"displayName": "Filter Type",
			"name": "filter%5Btype%5D",
			"description": "Filter the phone number blocks jobs by type.",
			"default": "delete_phone_number_block",
			"type": "options",
			"options": [
				{
					"name": "Delete Phone Number Block",
					"value": "delete_phone_number_block"
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
						"Number Blocks Background Jobs"
					],
					"operation": [
						"List Phone Number Blocks Jobs"
					]
				}
			}
		},
		{
			"displayName": "Filter Status",
			"name": "filter%5Bstatus%5D",
			"description": "Filter the phone number blocks jobs by status.",
			"default": "in_progress",
			"type": "options",
			"options": [
				{
					"name": "Pending",
					"value": "pending"
				},
				{
					"name": "In Progress",
					"value": "in_progress"
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
						"Number Blocks Background Jobs"
					],
					"operation": [
						"List Phone Number Blocks Jobs"
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
						"Number Blocks Background Jobs"
					],
					"operation": [
						"List Phone Number Blocks Jobs"
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
						"Number Blocks Background Jobs"
					],
					"operation": [
						"List Phone Number Blocks Jobs"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Specifies the sort order for results. If not given, results are sorted by created_at in descending order.",
			"default": "created_at",
			"type": "options",
			"options": [
				{
					"name": "Created At",
					"value": "created_at"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Blocks Background Jobs"
					],
					"operation": [
						"List Phone Number Blocks Jobs"
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
						"Number Blocks Background Jobs"
					],
					"operation": [
						"List Phone Number Blocks Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /phone_number_blocks/jobs/delete_phone_number_block",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Blocks Background Jobs"
					],
					"operation": [
						"Create Phone Number Blocks Job Delete Phone Number Block"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Phone Number Block Id",
			"name": "phone_number_block_id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "phone_number_block_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Blocks Background Jobs"
					],
					"operation": [
						"Create Phone Number Blocks Job Delete Phone Number Block"
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
						"Number Blocks Background Jobs"
					],
					"operation": [
						"Create Phone Number Blocks Job Delete Phone Number Block"
					]
				}
			}
		},
		{
			"displayName": "GET /phone_number_blocks/jobs/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Blocks Background Jobs"
					],
					"operation": [
						"Retrieve Phone Number Blocks Job"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Identifies the Phone Number Blocks Job.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Blocks Background Jobs"
					],
					"operation": [
						"Retrieve Phone Number Blocks Job"
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
						"Number Blocks Background Jobs"
					],
					"operation": [
						"Retrieve Phone Number Blocks Job"
					]
				}
			}
		},
];
