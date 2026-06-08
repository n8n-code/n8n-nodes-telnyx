import type { INodeProperties } from 'n8n-workflow';

export const programmableFaxCommandsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Programmable Fax Commands"
					]
				}
			},
			"options": [
				{
					"name": "List Faxes",
					"value": "List Faxes",
					"action": "View a list of faxes",
					"description": "View a list of faxes",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/faxes"
						}
					}
				},
				{
					"name": "Send Fax",
					"value": "Send Fax",
					"action": "Send a fax",
					"description": "Send a fax",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/faxes"
						}
					}
				},
				{
					"name": "Delete Fax",
					"value": "Delete Fax",
					"action": "Delete a fax",
					"description": "Delete a fax",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/faxes/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "View Fax",
					"value": "View Fax",
					"action": "View a fax",
					"description": "View a fax",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/faxes/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Refresh Fax",
					"value": "Refresh Fax",
					"action": "Refresh a fax",
					"description": "Refreshes the inbound fax's media_url when it has expired",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/faxes/{{$parameter[\"id\"]}}/actions/refresh"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /faxes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Programmable Fax Commands"
					],
					"operation": [
						"List Faxes"
					]
				}
			}
		},
		{
			"displayName": "Filter Created At Gte",
			"name": "filter%5Bcreated_at%5D%5Bgte%5D",
			"description": "ISO 8601 date time for filtering faxes created after or on that date",
			"default": "2020-02-02T22:25:27.521992Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[created_at][gte]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Programmable Fax Commands"
					],
					"operation": [
						"List Faxes"
					]
				}
			}
		},
		{
			"displayName": "Filter Created At Gt",
			"name": "filter%5Bcreated_at%5D%5Bgt%5D",
			"description": "ISO 8601 date time for filtering faxes created after that date",
			"default": "2020-02-02T22:25:27.521992Z",
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
						"Programmable Fax Commands"
					],
					"operation": [
						"List Faxes"
					]
				}
			}
		},
		{
			"displayName": "Filter Created At Lte",
			"name": "filter%5Bcreated_at%5D%5Blte%5D",
			"description": "ISO 8601 formatted date time for filtering faxes created on or before that date",
			"default": "2020-02-02T22:25:27.521992Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[created_at][lte]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Programmable Fax Commands"
					],
					"operation": [
						"List Faxes"
					]
				}
			}
		},
		{
			"displayName": "Filter Created At Lt",
			"name": "filter%5Bcreated_at%5D%5Blt%5D",
			"description": "ISO 8601 formatted date time for filtering faxes created before that date",
			"default": "2020-02-02T22:25:27.521992Z",
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
						"Programmable Fax Commands"
					],
					"operation": [
						"List Faxes"
					]
				}
			}
		},
		{
			"displayName": "Filter Direction Eq",
			"name": "filter%5Bdirection%5D%5Beq%5D",
			"description": "The direction, inbound or outbound, for filtering faxes sent from this account",
			"default": "inbound",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[direction][eq]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Programmable Fax Commands"
					],
					"operation": [
						"List Faxes"
					]
				}
			}
		},
		{
			"displayName": "Filter From Eq",
			"name": "filter%5Bfrom%5D%5Beq%5D",
			"description": "The phone number, in E.164 format for filtering faxes sent from this number",
			"default": "+13127367276",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[from][eq]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Programmable Fax Commands"
					],
					"operation": [
						"List Faxes"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page%5Bsize%5D",
			"description": "Number of fax resourcxes for the single page returned",
			"default": 2,
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
						"Programmable Fax Commands"
					],
					"operation": [
						"List Faxes"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "page%5Bnumber%5D",
			"description": "Number of the page to be retrieved",
			"default": 2,
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
						"Programmable Fax Commands"
					],
					"operation": [
						"List Faxes"
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
						"Programmable Fax Commands"
					],
					"operation": [
						"List Faxes"
					]
				}
			}
		},
		{
			"displayName": "POST /faxes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Programmable Fax Commands"
					],
					"operation": [
						"Send Fax"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Connection Id",
			"name": "connection_id",
			"type": "string",
			"default": "234423",
			"description": "The connection ID to send the fax with.",
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
						"Programmable Fax Commands"
					],
					"operation": [
						"Send Fax"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "From",
			"name": "from",
			"type": "string",
			"default": "+13125790015",
			"description": "The phone number, in E.164 format, the fax will be sent from.",
			"routing": {
				"send": {
					"property": "from",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Programmable Fax Commands"
					],
					"operation": [
						"Send Fax"
					]
				}
			}
		},
		{
			"displayName": "Media Name",
			"name": "media_name",
			"type": "string",
			"default": "my_media_uploaded_to_media_storage_api",
			"description": "The media_name of a file to be used for the fax's media. The media_name must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. media_url and media_name can't be submitted together.",
			"routing": {
				"send": {
					"property": "media_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Programmable Fax Commands"
					],
					"operation": [
						"Send Fax"
					]
				}
			}
		},
		{
			"displayName": "Media Url",
			"name": "media_url",
			"type": "string",
			"default": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
			"description": "The URL to the PDF used for the fax's media. media_url and media_name can't be submitted together.",
			"routing": {
				"send": {
					"property": "media_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Programmable Fax Commands"
					],
					"operation": [
						"Send Fax"
					]
				}
			}
		},
		{
			"displayName": "Quality",
			"name": "quality",
			"type": "string",
			"default": "high",
			"description": "The quality of the fax. Can be normal, high, very_high.",
			"routing": {
				"send": {
					"property": "quality",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Programmable Fax Commands"
					],
					"operation": [
						"Send Fax"
					]
				}
			}
		},
		{
			"displayName": "Store Media",
			"name": "store_media",
			"type": "boolean",
			"default": false,
			"description": "Should fax media be stored on temporary URL. It does not support media_name, they can't be submitted together.",
			"routing": {
				"send": {
					"property": "store_media",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Programmable Fax Commands"
					],
					"operation": [
						"Send Fax"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "To",
			"name": "to",
			"type": "string",
			"default": "+13127367276",
			"description": "The phone number, in E.164 format, the fax will be sent to or SIP URI.",
			"routing": {
				"send": {
					"property": "to",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Programmable Fax Commands"
					],
					"operation": [
						"Send Fax"
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
						"Programmable Fax Commands"
					],
					"operation": [
						"Send Fax"
					]
				}
			}
		},
		{
			"displayName": "DELETE /faxes/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Programmable Fax Commands"
					],
					"operation": [
						"Delete Fax"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The unique identifier of a fax.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Programmable Fax Commands"
					],
					"operation": [
						"Delete Fax"
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
						"Programmable Fax Commands"
					],
					"operation": [
						"Delete Fax"
					]
				}
			}
		},
		{
			"displayName": "GET /faxes/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Programmable Fax Commands"
					],
					"operation": [
						"View Fax"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The unique identifier of a fax.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Programmable Fax Commands"
					],
					"operation": [
						"View Fax"
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
						"Programmable Fax Commands"
					],
					"operation": [
						"View Fax"
					]
				}
			}
		},
		{
			"displayName": "POST /faxes/{id}/actions/refresh",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Programmable Fax Commands"
					],
					"operation": [
						"Refresh Fax"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The unique identifier of a fax.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Programmable Fax Commands"
					],
					"operation": [
						"Refresh Fax"
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
						"Programmable Fax Commands"
					],
					"operation": [
						"Refresh Fax"
					]
				}
			}
		},
];
