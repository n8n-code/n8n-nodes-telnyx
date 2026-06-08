import type { INodeProperties } from 'n8n-workflow';

export const authenticationProvidersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Providers"
					]
				}
			},
			"options": [
				{
					"name": "Find Authentication Providers",
					"value": "Find Authentication Providers",
					"action": "List all SSO authentication providers",
					"description": "Returns a list of your SSO authentication providers.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/authentication_providers"
						}
					}
				},
				{
					"name": "Create Authentication Provider",
					"value": "Create Authentication Provider",
					"action": "Creates an authentication provider",
					"description": "Creates an authentication provider.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/authentication_providers"
						}
					}
				},
				{
					"name": "Delete Authentication Provider",
					"value": "Delete Authentication Provider",
					"action": "Deletes an authentication provider",
					"description": "Deletes an existing authentication provider.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/authentication_providers/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Authentication Provider",
					"value": "Get Authentication Provider",
					"action": "Retrieve an authentication provider",
					"description": "Retrieves the details of an existing authentication provider.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/authentication_providers/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Authentication Provider",
					"value": "Update Authentication Provider",
					"action": "Update a authentication provider",
					"description": "Updates settings of an existing authentication provider.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/authentication_providers/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /authentication_providers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Providers"
					],
					"operation": [
						"Find Authentication Providers"
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
						"Authentication Providers"
					],
					"operation": [
						"Find Authentication Providers"
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
						"Authentication Providers"
					],
					"operation": [
						"Find Authentication Providers"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the <code> -</code> prefix.<br/><br/>\nThat is: <ul>\n  <li>\n    <code>name</code>: sorts the result by the\n    <code>name</code> field in ascending order.\n  </li>\n\n  <li>\n    <code>-name</code>: sorts the result by the\n    <code>name</code> field in descending order.\n  </li>\n</ul> <br/> If not given, results are sorted by <code>created_at</code> in descending order.",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				},
				{
					"name": "Name",
					"value": "-name"
				},
				{
					"name": "Short Name",
					"value": "short_name"
				},
				{
					"name": "Short Name",
					"value": "-short_name"
				},
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Active",
					"value": "-active"
				},
				{
					"name": "Created At",
					"value": "created_at"
				},
				{
					"name": "Created At",
					"value": "-created_at"
				},
				{
					"name": "Updated At",
					"value": "updated_at"
				},
				{
					"name": "Updated At",
					"value": "-updated_at"
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
						"Authentication Providers"
					],
					"operation": [
						"Find Authentication Providers"
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
						"Authentication Providers"
					],
					"operation": [
						"Find Authentication Providers"
					]
				}
			}
		},
		{
			"displayName": "POST /authentication_providers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Providers"
					],
					"operation": [
						"Create Authentication Provider"
					]
				}
			}
		},
		{
			"displayName": "Active",
			"name": "active",
			"type": "boolean",
			"default": true,
			"description": "The active status of the authentication provider",
			"routing": {
				"send": {
					"property": "active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Providers"
					],
					"operation": [
						"Create Authentication Provider"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Okta",
			"description": "The name associated with the authentication provider.",
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
						"Authentication Providers"
					],
					"operation": [
						"Create Authentication Provider"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Settings",
			"name": "settings",
			"type": "json",
			"default": "{\n  \"idp_cert_fingerprint\": \"13:38:C7:BB:C9:FF:4A:70:38:3A:E3:D9:5C:CD:DB:2E:50:1E:80:A7\",\n  \"idp_cert_fingerprint_algorithm\": \"sha256\",\n  \"idp_entity_id\": \"https://myorg.myidp.com/saml/metadata\",\n  \"idp_sso_target_url\": \"https://myorg.myidp.com/trust/saml2/http-post/sso\"\n}",
			"description": "The settings associated with the authentication provider.",
			"routing": {
				"send": {
					"property": "settings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Providers"
					],
					"operation": [
						"Create Authentication Provider"
					]
				}
			}
		},
		{
			"displayName": "Settings Url",
			"name": "settings_url",
			"type": "string",
			"default": "https://myorg.myidp.com/saml/metadata",
			"description": "The URL for the identity provider metadata file to populate the settings automatically. If the settings attribute is provided, that will be used instead.",
			"routing": {
				"send": {
					"property": "settings_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Providers"
					],
					"operation": [
						"Create Authentication Provider"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Short Name",
			"name": "short_name",
			"type": "string",
			"default": "myorg",
			"description": "The short name associated with the authentication provider. This must be unique and URL-friendly, as it's going to be part of the login URL.",
			"routing": {
				"send": {
					"property": "short_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Providers"
					],
					"operation": [
						"Create Authentication Provider"
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
						"Authentication Providers"
					],
					"operation": [
						"Create Authentication Provider"
					]
				}
			}
		},
		{
			"displayName": "DELETE /authentication_providers/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Providers"
					],
					"operation": [
						"Delete Authentication Provider"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "authentication provider ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Providers"
					],
					"operation": [
						"Delete Authentication Provider"
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
						"Authentication Providers"
					],
					"operation": [
						"Delete Authentication Provider"
					]
				}
			}
		},
		{
			"displayName": "GET /authentication_providers/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Providers"
					],
					"operation": [
						"Get Authentication Provider"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "authentication provider ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Providers"
					],
					"operation": [
						"Get Authentication Provider"
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
						"Authentication Providers"
					],
					"operation": [
						"Get Authentication Provider"
					]
				}
			}
		},
		{
			"displayName": "PATCH /authentication_providers/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Providers"
					],
					"operation": [
						"Update Authentication Provider"
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
						"Authentication Providers"
					],
					"operation": [
						"Update Authentication Provider"
					]
				}
			}
		},
		{
			"displayName": "Active",
			"name": "active",
			"type": "boolean",
			"default": true,
			"description": "The active status of the authentication provider",
			"routing": {
				"send": {
					"property": "active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Providers"
					],
					"operation": [
						"Update Authentication Provider"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Okta",
			"description": "The name associated with the authentication provider.",
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
						"Authentication Providers"
					],
					"operation": [
						"Update Authentication Provider"
					]
				}
			}
		},
		{
			"displayName": "Settings",
			"name": "settings",
			"type": "json",
			"default": "{\n  \"idp_cert_fingerprint\": \"13:38:C7:BB:C9:FF:4A:70:38:3A:E3:D9:5C:CD:DB:2E:50:1E:80:A7\",\n  \"idp_cert_fingerprint_algorithm\": \"sha256\",\n  \"idp_entity_id\": \"https://myorg.myidp.com/saml/metadata\",\n  \"idp_sso_target_url\": \"https://myorg.myidp.com/trust/saml2/http-post/sso\"\n}",
			"description": "The settings associated with the authentication provider.",
			"routing": {
				"send": {
					"property": "settings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Providers"
					],
					"operation": [
						"Update Authentication Provider"
					]
				}
			}
		},
		{
			"displayName": "Settings Url",
			"name": "settings_url",
			"type": "string",
			"default": "https://myorg.myidp.com/saml/metadata",
			"description": "The URL for the identity provider metadata file to populate the settings automatically. If the settings attribute is provided, that will be used instead.",
			"routing": {
				"send": {
					"property": "settings_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Providers"
					],
					"operation": [
						"Update Authentication Provider"
					]
				}
			}
		},
		{
			"displayName": "Short Name",
			"name": "short_name",
			"type": "string",
			"default": "myorg",
			"description": "The short name associated with the authentication provider. This must be unique and URL-friendly, as it's going to be part of the login URL.",
			"routing": {
				"send": {
					"property": "short_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Providers"
					],
					"operation": [
						"Update Authentication Provider"
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
						"Authentication Providers"
					],
					"operation": [
						"Update Authentication Provider"
					]
				}
			}
		},
];
