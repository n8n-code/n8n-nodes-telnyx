import type { INodeProperties } from 'n8n-workflow';

export const numberOrderDocumentsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Number Order Documents"
					]
				}
			},
			"options": [
				{
					"name": "List Number Order Documents",
					"value": "List Number Order Documents",
					"action": "List number order documents",
					"description": "Gets a paginated list of number order documents.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/number_order_documents"
						}
					}
				},
				{
					"name": "Create Number Order Document",
					"value": "Create Number Order Document",
					"action": "Create a number order document",
					"description": "Upload a phone number order document.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/number_order_documents"
						}
					}
				},
				{
					"name": "Retrieve Number Order Document",
					"value": "Retrieve Number Order Document",
					"action": "Retrieve a number order document",
					"description": "Gets a single number order document.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/number_order_documents/{{$parameter[\"number_order_document_id\"]}}"
						}
					}
				},
				{
					"name": "Update Number Order Document",
					"value": "Update Number Order Document",
					"action": "Update a number order document",
					"description": "Updates a number order document.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/number_order_documents/{{$parameter[\"number_order_document_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /number_order_documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Order Documents"
					],
					"operation": [
						"List Number Order Documents"
					]
				}
			}
		},
		{
			"displayName": "Filter Requirement Id",
			"name": "filter%5Brequirement_id%5D",
			"description": "Filter number order documents by `requirement_id`.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[requirement_id]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Order Documents"
					],
					"operation": [
						"List Number Order Documents"
					]
				}
			}
		},
		{
			"displayName": "Filter Created At Gt",
			"name": "filter%5Bcreated_at%5D%5Bgt%5D",
			"description": "Filter number order documents after this datetime.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[created_at][gt]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Order Documents"
					],
					"operation": [
						"List Number Order Documents"
					]
				}
			}
		},
		{
			"displayName": "Filter Created At Lt",
			"name": "filter%5Bcreated_at%5D%5Blt%5D",
			"description": "Filter number order documents from before this datetime.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[created_at][lt]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Order Documents"
					],
					"operation": [
						"List Number Order Documents"
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
						"Number Order Documents"
					],
					"operation": [
						"List Number Order Documents"
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
						"Number Order Documents"
					],
					"operation": [
						"List Number Order Documents"
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
						"Number Order Documents"
					],
					"operation": [
						"List Number Order Documents"
					]
				}
			}
		},
		{
			"displayName": "POST /number_order_documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Order Documents"
					],
					"operation": [
						"Create Number Order Document"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "string",
			"default": "2018-01-01T00:00:00.000000Z",
			"description": "An ISO 8901 datetime string denoting when the number order document was uploaded.",
			"routing": {
				"send": {
					"property": "created_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Order Documents"
					],
					"operation": [
						"Create Number Order Document"
					]
				}
			}
		},
		{
			"displayName": "Customer Reference",
			"name": "customer_reference",
			"type": "string",
			"default": "MY REF 001",
			"description": "A customer reference string for customer look ups.",
			"routing": {
				"send": {
					"property": "customer_reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Order Documents"
					],
					"operation": [
						"Create Number Order Document"
					]
				}
			}
		},
		{
			"displayName": "File Id",
			"name": "file_id",
			"type": "string",
			"default": "1e3c5822-0362-4702-8e46-5a129f0d3976",
			"description": "The id of the file to associate as a number order document.",
			"routing": {
				"send": {
					"property": "file_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Order Documents"
					],
					"operation": [
						"Create Number Order Document"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "387d1e31-a218-4375-8151-103f2d5e2d2c",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Order Documents"
					],
					"operation": [
						"Create Number Order Document"
					]
				}
			}
		},
		{
			"displayName": "Record Type",
			"name": "record_type",
			"type": "string",
			"default": "number_order_document",
			"routing": {
				"send": {
					"property": "record_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Order Documents"
					],
					"operation": [
						"Create Number Order Document"
					]
				}
			}
		},
		{
			"displayName": "Requirement Type",
			"name": "requirement_type",
			"type": "options",
			"default": "address_proof",
			"options": [
				{
					"name": "Address Proof",
					"value": "address_proof"
				},
				{
					"name": "Identification",
					"value": "identification"
				},
				{
					"name": "Reg Form",
					"value": "reg_form"
				}
			],
			"routing": {
				"send": {
					"property": "requirement_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Order Documents"
					],
					"operation": [
						"Create Number Order Document"
					]
				}
			}
		},
		{
			"displayName": "Requirements Id",
			"name": "requirements_id",
			"type": "string",
			"default": "36aaf27d-986b-493c-bd1b-de16af2e4292",
			"description": "Unique id for a requirement.",
			"routing": {
				"send": {
					"property": "requirements_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Order Documents"
					],
					"operation": [
						"Create Number Order Document"
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
						"Number Order Documents"
					],
					"operation": [
						"Create Number Order Document"
					]
				}
			}
		},
		{
			"displayName": "GET /number_order_documents/{number_order_document_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Order Documents"
					],
					"operation": [
						"Retrieve Number Order Document"
					]
				}
			}
		},
		{
			"displayName": "Number Order Document Id",
			"name": "number_order_document_id",
			"required": true,
			"description": "The number order document ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Order Documents"
					],
					"operation": [
						"Retrieve Number Order Document"
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
						"Number Order Documents"
					],
					"operation": [
						"Retrieve Number Order Document"
					]
				}
			}
		},
		{
			"displayName": "PATCH /number_order_documents/{number_order_document_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Order Documents"
					],
					"operation": [
						"Update Number Order Document"
					]
				}
			}
		},
		{
			"displayName": "Number Order Document Id",
			"name": "number_order_document_id",
			"required": true,
			"description": "The number order document ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Number Order Documents"
					],
					"operation": [
						"Update Number Order Document"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "string",
			"default": "2018-01-01T00:00:00.000000Z",
			"description": "An ISO 8901 datetime string denoting when the number order document was uploaded.",
			"routing": {
				"send": {
					"property": "created_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Order Documents"
					],
					"operation": [
						"Update Number Order Document"
					]
				}
			}
		},
		{
			"displayName": "Customer Reference",
			"name": "customer_reference",
			"type": "string",
			"default": "MY REF 001",
			"description": "A customer reference string for customer look ups.",
			"routing": {
				"send": {
					"property": "customer_reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Order Documents"
					],
					"operation": [
						"Update Number Order Document"
					]
				}
			}
		},
		{
			"displayName": "File Id",
			"name": "file_id",
			"type": "string",
			"default": "1e3c5822-0362-4702-8e46-5a129f0d3976",
			"description": "The id of the file to associate as a number order document.",
			"routing": {
				"send": {
					"property": "file_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Order Documents"
					],
					"operation": [
						"Update Number Order Document"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "387d1e31-a218-4375-8151-103f2d5e2d2c",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Order Documents"
					],
					"operation": [
						"Update Number Order Document"
					]
				}
			}
		},
		{
			"displayName": "Record Type",
			"name": "record_type",
			"type": "string",
			"default": "number_order_document",
			"routing": {
				"send": {
					"property": "record_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Order Documents"
					],
					"operation": [
						"Update Number Order Document"
					]
				}
			}
		},
		{
			"displayName": "Requirement Type",
			"name": "requirement_type",
			"type": "options",
			"default": "address_proof",
			"options": [
				{
					"name": "Address Proof",
					"value": "address_proof"
				},
				{
					"name": "Identification",
					"value": "identification"
				},
				{
					"name": "Reg Form",
					"value": "reg_form"
				}
			],
			"routing": {
				"send": {
					"property": "requirement_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Order Documents"
					],
					"operation": [
						"Update Number Order Document"
					]
				}
			}
		},
		{
			"displayName": "Requirements Id",
			"name": "requirements_id",
			"type": "string",
			"default": "36aaf27d-986b-493c-bd1b-de16af2e4292",
			"description": "Unique id for a requirement.",
			"routing": {
				"send": {
					"property": "requirements_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Number Order Documents"
					],
					"operation": [
						"Update Number Order Document"
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
						"Number Order Documents"
					],
					"operation": [
						"Update Number Order Document"
					]
				}
			}
		},
];
