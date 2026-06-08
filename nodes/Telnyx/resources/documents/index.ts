import type { INodeProperties } from 'n8n-workflow';

export const documentsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					]
				}
			},
			"options": [
				{
					"name": "List Document Links",
					"value": "List Document Links",
					"action": "List all document links",
					"description": "List all documents links ordered by created_at descending.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/document_links"
						}
					}
				},
				{
					"name": "List Documents",
					"value": "List Documents",
					"action": "List all documents",
					"description": "List all documents ordered by created_at descending.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/documents"
						}
					}
				},
				{
					"name": "Create Document",
					"value": "Create Document",
					"action": "Upload a document",
					"description": "Upload a document.<br /><br />Uploaded files must be linked to a service within 30 minutes or they will be automatically deleted.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/documents"
						}
					}
				},
				{
					"name": "Delete Document",
					"value": "Delete Document",
					"action": "Delete a document",
					"description": "Delete a document.<br /><br />A document can only be deleted if it's not linked to a service. If it is linked to a service, it must be unlinked prior to deleting.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/documents/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Retrieve Document",
					"value": "Retrieve Document",
					"action": "Retrieve a document",
					"description": "Retrieve a document.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/documents/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Document",
					"value": "Update Document",
					"action": "Update a document",
					"description": "Update a document.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/documents/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Download Doc Service Document",
					"value": "Download Doc Service Document",
					"action": "Download a document",
					"description": "Download a document.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/documents/{{$parameter[\"id\"]}}/download"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /document_links",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					],
					"operation": [
						"List Document Links"
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
						"Documents"
					],
					"operation": [
						"List Document Links"
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
						"Documents"
					],
					"operation": [
						"List Document Links"
					]
				}
			}
		},
		{
			"displayName": "Filter Document Id",
			"name": "filter%5Bdocument_id%5D",
			"description": "Identifies the associated document to filter on.",
			"default": "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[document_id]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					],
					"operation": [
						"List Document Links"
					]
				}
			}
		},
		{
			"displayName": "Filter Linked Record Type",
			"name": "filter%5Blinked_record_type%5D",
			"description": "The `linked_record_type` of the document to filter on.",
			"default": "porting_order",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[linked_record_type]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					],
					"operation": [
						"List Document Links"
					]
				}
			}
		},
		{
			"displayName": "Filter Linked Resource Id",
			"name": "filter%5Blinked_resource_id%5D",
			"description": "The `linked_resource_id` of the document to filter on.",
			"default": "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[linked_resource_id]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					],
					"operation": [
						"List Document Links"
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
						"Documents"
					],
					"operation": [
						"List Document Links"
					]
				}
			}
		},
		{
			"displayName": "GET /documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					],
					"operation": [
						"List Documents"
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
						"Documents"
					],
					"operation": [
						"List Documents"
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
						"Documents"
					],
					"operation": [
						"List Documents"
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
						"Documents"
					],
					"operation": [
						"List Documents"
					]
				}
			}
		},
		{
			"displayName": "POST /documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					],
					"operation": [
						"Create Document"
					]
				}
			}
		},
		{
			"displayName": "POST /documents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					],
					"operation": [
						"Create Document"
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
						"Documents"
					],
					"operation": [
						"Create Document"
					]
				}
			}
		},
		{
			"displayName": "DELETE /documents/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					],
					"operation": [
						"Delete Document"
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
						"Documents"
					],
					"operation": [
						"Delete Document"
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
						"Documents"
					],
					"operation": [
						"Delete Document"
					]
				}
			}
		},
		{
			"displayName": "GET /documents/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					],
					"operation": [
						"Retrieve Document"
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
						"Documents"
					],
					"operation": [
						"Retrieve Document"
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
						"Documents"
					],
					"operation": [
						"Retrieve Document"
					]
				}
			}
		},
		{
			"displayName": "PATCH /documents/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					],
					"operation": [
						"Update Document"
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
						"Documents"
					],
					"operation": [
						"Update Document"
					]
				}
			}
		},
		{
			"displayName": "PATCH /documents/{id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					],
					"operation": [
						"Update Document"
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
						"Documents"
					],
					"operation": [
						"Update Document"
					]
				}
			}
		},
		{
			"displayName": "GET /documents/{id}/download",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					],
					"operation": [
						"Download Doc Service Document"
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
						"Documents"
					],
					"operation": [
						"Download Doc Service Document"
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
						"Documents"
					],
					"operation": [
						"Download Doc Service Document"
					]
				}
			}
		},
];
