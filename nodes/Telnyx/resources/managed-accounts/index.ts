import type { INodeProperties } from 'n8n-workflow';

export const managedAccountsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Managed Accounts"
					]
				}
			},
			"options": [
				{
					"name": "List Managed Accounts",
					"value": "List Managed Accounts",
					"action": "Lists accounts managed by the current user.",
					"description": "Lists the accounts managed by the current user. Users need to be explictly approved by Telnyx in order to become manager accounts.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/managed_accounts"
						}
					}
				},
				{
					"name": "Create Managed Account",
					"value": "Create Managed Account",
					"action": "Create a new managed account.",
					"description": "Create a new managed account owned by the authenticated user. You need to be explictly approved by Telnyx in order to become a manager account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/managed_accounts"
						}
					}
				},
				{
					"name": "Retrieve Managed Account",
					"value": "Retrieve Managed Account",
					"action": "Retrieve a managed account",
					"description": "Retrieves the details of a single managed account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/managed_accounts/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Disable Managed Account",
					"value": "Disable Managed Account",
					"action": "Disables a managed account",
					"description": "Disables a managed account, forbidding it to use Telnyx services, including sending or receiving phone calls and SMS messages. Ongoing phone calls will not be affected. The managed account and its sub-users will still be able to log in via the mission control portal.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/managed_accounts/{{$parameter[\"id\"]}}/actions/disable"
						}
					}
				},
				{
					"name": "Enable Managed Account",
					"value": "Enable Managed Account",
					"action": "Enables a managed account",
					"description": "Enables a managed account and its sub-users to use Telnyx services.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/managed_accounts/{{$parameter[\"id\"]}}/actions/enable"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /managed_accounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed Accounts"
					],
					"operation": [
						"List Managed Accounts"
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
						"Managed Accounts"
					],
					"operation": [
						"List Managed Accounts"
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
						"Managed Accounts"
					],
					"operation": [
						"List Managed Accounts"
					]
				}
			}
		},
		{
			"displayName": "Filter Email Contains",
			"name": "filter%5Bemail%5D%5Bcontains%5D",
			"description": "If present, email containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.",
			"default": "null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[email][contains]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed Accounts"
					],
					"operation": [
						"List Managed Accounts"
					]
				}
			}
		},
		{
			"displayName": "Filter Email Eq",
			"name": "filter%5Bemail%5D%5Beq%5D",
			"description": "If present, only returns results with the <code>email</code> matching exactly the value given.",
			"default": "null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[email][eq]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed Accounts"
					],
					"operation": [
						"List Managed Accounts"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the <code> -</code> prefix.<br/><br/>\nThat is: <ul>\n  <li>\n    <code>email</code>: sorts the result by the\n    <code>email</code> field in ascending order.\n  </li>\n\n  <li>\n    <code>-email</code>: sorts the result by the\n    <code>email</code> field in descending order.\n  </li>\n</ul> <br/> If not given, results are sorted by <code>created_at</code> in descending order.",
			"default": "email",
			"type": "options",
			"options": [
				{
					"name": "Created At",
					"value": "created_at"
				},
				{
					"name": "Email",
					"value": "email"
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
						"Managed Accounts"
					],
					"operation": [
						"List Managed Accounts"
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
						"Managed Accounts"
					],
					"operation": [
						"List Managed Accounts"
					]
				}
			}
		},
		{
			"displayName": "POST /managed_accounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed Accounts"
					],
					"operation": [
						"Create Managed Account"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Business Name",
			"name": "business_name",
			"type": "string",
			"default": "Larry's Cat Food Inc",
			"description": "The name of the business for which the new managed account is being created, that will be used as the managed accounts's organization's name.",
			"routing": {
				"send": {
					"property": "business_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed Accounts"
					],
					"operation": [
						"Create Managed Account"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "new_managed_account@customer.org",
			"description": "The email address for the managed account. If not provided, the email address will be generated based on the email address of the manager account.",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed Accounts"
					],
					"operation": [
						"Create Managed Account"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "3jVjLq!tMuWKyWx4NN*CvhnB",
			"description": "Password for the managed account. If a password is not supplied, the account will not be able to be signed into directly. (A password reset may still be performed later to enable sign-in via password.)",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Managed Accounts"
					],
					"operation": [
						"Create Managed Account"
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
						"Managed Accounts"
					],
					"operation": [
						"Create Managed Account"
					]
				}
			}
		},
		{
			"displayName": "GET /managed_accounts/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed Accounts"
					],
					"operation": [
						"Retrieve Managed Account"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Managed Account User ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed Accounts"
					],
					"operation": [
						"Retrieve Managed Account"
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
						"Managed Accounts"
					],
					"operation": [
						"Retrieve Managed Account"
					]
				}
			}
		},
		{
			"displayName": "POST /managed_accounts/{id}/actions/disable",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed Accounts"
					],
					"operation": [
						"Disable Managed Account"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Managed Account User ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed Accounts"
					],
					"operation": [
						"Disable Managed Account"
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
						"Managed Accounts"
					],
					"operation": [
						"Disable Managed Account"
					]
				}
			}
		},
		{
			"displayName": "POST /managed_accounts/{id}/actions/enable",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed Accounts"
					],
					"operation": [
						"Enable Managed Account"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Managed Account User ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Managed Accounts"
					],
					"operation": [
						"Enable Managed Account"
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
						"Managed Accounts"
					],
					"operation": [
						"Enable Managed Account"
					]
				}
			}
		},
];
