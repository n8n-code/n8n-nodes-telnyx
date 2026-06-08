import type { INodeProperties } from 'n8n-workflow';

export const mediaStorageApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Media Storage API"
					]
				}
			},
			"options": [
				{
					"name": "List Media",
					"value": "List Media",
					"action": "List uploaded media",
					"description": "Returns a list of stored media files.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/media"
						}
					}
				},
				{
					"name": "Create Media",
					"value": "Create Media",
					"action": "Upload media",
					"description": "Upload media file to Telnyx so it can be used with other Telnyx services",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/media"
						}
					}
				},
				{
					"name": "Delete Media",
					"value": "Delete Media",
					"action": "Deletes stored media",
					"description": "Deletes a stored media file.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/media/{{$parameter[\"media_name\"]}}"
						}
					}
				},
				{
					"name": "Get Media",
					"value": "Get Media",
					"action": "Retrieve stored media",
					"description": "Returns the information about a stored media file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/media/{{$parameter[\"media_name\"]}}"
						}
					}
				},
				{
					"name": "Update Media",
					"value": "Update Media",
					"action": "Update stored media",
					"description": "Updates a stored media file.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/media/{{$parameter[\"media_name\"]}}"
						}
					}
				},
				{
					"name": "Download Media",
					"value": "Download Media",
					"action": "Download stored media",
					"description": "Downloads a stored media file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/media/{{$parameter[\"media_name\"]}}/download"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /media",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Media Storage API"
					],
					"operation": [
						"List Media"
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
						"Media Storage API"
					],
					"operation": [
						"List Media"
					]
				}
			}
		},
		{
			"displayName": "POST /media",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Media Storage API"
					],
					"operation": [
						"Create Media"
					]
				}
			}
		},
		{
			"displayName": "Media Name",
			"name": "media_name",
			"type": "string",
			"default": "my_file",
			"description": "The unique identifier of a file.",
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
						"Media Storage API"
					],
					"operation": [
						"Create Media"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Media Url",
			"name": "media_url",
			"type": "string",
			"default": "http://www.example.com/audio.mp3",
			"description": "The URL where the media to be stored in Telnyx network is currently hosted. The maximum allowed size is 20 MB.",
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
						"Media Storage API"
					],
					"operation": [
						"Create Media"
					]
				}
			}
		},
		{
			"displayName": "Ttl Secs",
			"name": "ttl_secs",
			"type": "number",
			"default": 86400,
			"description": "The number of seconds after which the media resource will be deleted, defaults to 2 days.",
			"routing": {
				"send": {
					"property": "ttl_secs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Media Storage API"
					],
					"operation": [
						"Create Media"
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
						"Media Storage API"
					],
					"operation": [
						"Create Media"
					]
				}
			}
		},
		{
			"displayName": "DELETE /media/{media_name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Media Storage API"
					],
					"operation": [
						"Delete Media"
					]
				}
			}
		},
		{
			"displayName": "Media Name",
			"name": "media_name",
			"required": true,
			"description": "Uniquely identifies a media resource.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Media Storage API"
					],
					"operation": [
						"Delete Media"
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
						"Media Storage API"
					],
					"operation": [
						"Delete Media"
					]
				}
			}
		},
		{
			"displayName": "GET /media/{media_name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Media Storage API"
					],
					"operation": [
						"Get Media"
					]
				}
			}
		},
		{
			"displayName": "Media Name",
			"name": "media_name",
			"required": true,
			"description": "Uniquely identifies a media resource.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Media Storage API"
					],
					"operation": [
						"Get Media"
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
						"Media Storage API"
					],
					"operation": [
						"Get Media"
					]
				}
			}
		},
		{
			"displayName": "PUT /media/{media_name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Media Storage API"
					],
					"operation": [
						"Update Media"
					]
				}
			}
		},
		{
			"displayName": "Media Name",
			"name": "media_name",
			"required": true,
			"description": "Uniquely identifies a media resource.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Media Storage API"
					],
					"operation": [
						"Update Media"
					]
				}
			}
		},
		{
			"displayName": "Media Url",
			"name": "media_url",
			"type": "string",
			"default": "http://www.example.com/audio.mp3",
			"description": "The URL where the media to be stored in Telnyx network is currently hosted. The maximum allowed size is 20 MB.",
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
						"Media Storage API"
					],
					"operation": [
						"Update Media"
					]
				}
			}
		},
		{
			"displayName": "Ttl Secs",
			"name": "ttl_secs",
			"type": "number",
			"default": 86400,
			"description": "The number of seconds after which the media resource will be deleted, defaults to 2 days.",
			"routing": {
				"send": {
					"property": "ttl_secs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Media Storage API"
					],
					"operation": [
						"Update Media"
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
						"Media Storage API"
					],
					"operation": [
						"Update Media"
					]
				}
			}
		},
		{
			"displayName": "GET /media/{media_name}/download",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Media Storage API"
					],
					"operation": [
						"Download Media"
					]
				}
			}
		},
		{
			"displayName": "Media Name",
			"name": "media_name",
			"required": true,
			"description": "Uniquely identifies a media resource.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Media Storage API"
					],
					"operation": [
						"Download Media"
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
						"Media Storage API"
					],
					"operation": [
						"Download Media"
					]
				}
			}
		},
];
