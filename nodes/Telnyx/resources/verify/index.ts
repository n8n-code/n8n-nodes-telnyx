import type { INodeProperties } from 'n8n-workflow';

export const verifyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					]
				}
			},
			"options": [
				{
					"name": "List Verifications",
					"value": "List Verifications",
					"action": "List verifications by phone number",
					"description": "List verifications by phone number",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/verifications/by_phone_number/{{$parameter[\"phone_number\"]}}"
						}
					}
				},
				{
					"name": "Verify Verification Code",
					"value": "Verify Verification Code",
					"action": "Submit a verification code",
					"description": "Submit a verification code",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/verifications/by_phone_number/{{$parameter[\"phone_number\"]}}/actions/verify"
						}
					}
				},
				{
					"name": "Create Verification Call",
					"value": "Create Verification Call",
					"action": "Trigger a Call verification",
					"description": "Trigger a Call verification",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/verifications/call"
						}
					}
				},
				{
					"name": "Create Verification Flashcall",
					"value": "Create Verification Flashcall",
					"action": "Trigger a Flash call verification",
					"description": "Trigger a Flash call verification",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/verifications/flashcall"
						}
					}
				},
				{
					"name": "Create Verification PSD 2",
					"value": "Create Verification PSD 2",
					"action": "Trigger a PSD2 verification",
					"description": "Trigger a PSD2 verification",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/verifications/psd2"
						}
					}
				},
				{
					"name": "Create Verification SMS",
					"value": "Create Verification SMS",
					"action": "Trigger a SMS verification",
					"description": "Trigger a SMS verification",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/verifications/sms"
						}
					}
				},
				{
					"name": "Create Verification Whatsapp",
					"value": "Create Verification Whatsapp",
					"action": "Trigger a Whatsapp verification",
					"description": "Trigger a Whatsapp verification",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/verifications/whatsapp"
						}
					}
				},
				{
					"name": "Retrieve Verification",
					"value": "Retrieve Verification",
					"action": "Retrieve a verification",
					"description": "Retrieve a verification",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/verifications/{{$parameter[\"verification_id\"]}}"
						}
					}
				},
				{
					"name": "List Verify Profiles",
					"value": "List Verify Profiles",
					"action": "List all Verify profiles",
					"description": "Gets a paginated list of Verify profiles.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/verify_profiles"
						}
					}
				},
				{
					"name": "Create Verify Profile",
					"value": "Create Verify Profile",
					"action": "Create a Verify profile",
					"description": "Creates a new Verify profile to associate verifications with.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/verify_profiles"
						}
					}
				},
				{
					"name": "Delete Verify Profile",
					"value": "Delete Verify Profile",
					"action": "Delete a Verify profile",
					"description": "Delete a Verify profile",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/verify_profiles/{{$parameter[\"verify_profile_id\"]}}"
						}
					}
				},
				{
					"name": "Retrieve Verify Profile",
					"value": "Retrieve Verify Profile",
					"action": "Retrieve a Verify profile",
					"description": "Gets a single Verify profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/verify_profiles/{{$parameter[\"verify_profile_id\"]}}"
						}
					}
				},
				{
					"name": "Update Verify Profile",
					"value": "Update Verify Profile",
					"action": "Update a Verify profile",
					"description": "Update a Verify profile",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/verify_profiles/{{$parameter[\"verify_profile_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /verifications/by_phone_number/{phone_number}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"List Verifications"
					]
				}
			}
		},
		{
			"displayName": "Phone Number",
			"name": "phone_number",
			"required": true,
			"description": "The phone number associated with the verifications to retrieve.",
			"default": "+13035551234",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"List Verifications"
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
						"Verify"
					],
					"operation": [
						"List Verifications"
					]
				}
			}
		},
		{
			"displayName": "POST /verifications/by_phone_number/{phone_number}/actions/verify",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Verify Verification Code"
					]
				}
			}
		},
		{
			"displayName": "Phone Number",
			"name": "phone_number",
			"required": true,
			"description": "The phone number associated with the verification code being verified.",
			"default": "+13035551234",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Verify Verification Code"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Code",
			"name": "code",
			"type": "string",
			"default": "17686",
			"description": "This is the code the user submits for verification.",
			"routing": {
				"send": {
					"property": "code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Verify Verification Code"
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
						"Verify"
					],
					"operation": [
						"Verify Verification Code"
					]
				}
			}
		},
		{
			"displayName": "POST /verifications/call",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verification Call"
					]
				}
			}
		},
		{
			"displayName": "Call Timeout Secs",
			"name": "call_timeout_secs",
			"type": "number",
			"default": 30,
			"description": "Must be less than the profile's default_verification_timeout_secs or timeout_secs, whichever is lesser.",
			"routing": {
				"send": {
					"property": "call_timeout_secs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verification Call"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Phone Number",
			"name": "phone_number",
			"type": "string",
			"default": "+13035551234",
			"description": "+E164 formatted phone number.",
			"routing": {
				"send": {
					"property": "phone_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verification Call"
					]
				}
			}
		},
		{
			"displayName": "Timeout Secs",
			"name": "timeout_secs",
			"type": "number",
			"default": 300,
			"description": "The number of seconds the verification code is valid for.",
			"routing": {
				"send": {
					"property": "timeout_secs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verification Call"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Verify Profile Id",
			"name": "verify_profile_id",
			"type": "string",
			"default": "12ade33a-21c0-473b-b055-b3c836e1c292",
			"description": "The identifier of the associated Verify profile.",
			"routing": {
				"send": {
					"property": "verify_profile_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verification Call"
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
						"Verify"
					],
					"operation": [
						"Create Verification Call"
					]
				}
			}
		},
		{
			"displayName": "POST /verifications/flashcall",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verification Flashcall"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Phone Number",
			"name": "phone_number",
			"type": "string",
			"default": "+13035551234",
			"description": "+E164 formatted phone number.",
			"routing": {
				"send": {
					"property": "phone_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verification Flashcall"
					]
				}
			}
		},
		{
			"displayName": "Timeout Secs",
			"name": "timeout_secs",
			"type": "number",
			"default": 300,
			"description": "The number of seconds the verification code is valid for.",
			"routing": {
				"send": {
					"property": "timeout_secs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verification Flashcall"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Verify Profile Id",
			"name": "verify_profile_id",
			"type": "string",
			"default": "12ade33a-21c0-473b-b055-b3c836e1c292",
			"description": "The identifier of the associated Verify profile.",
			"routing": {
				"send": {
					"property": "verify_profile_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verification Flashcall"
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
						"Verify"
					],
					"operation": [
						"Create Verification Flashcall"
					]
				}
			}
		},
		{
			"displayName": "POST /verifications/psd2",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verification PSD 2"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Amount",
			"name": "amount",
			"type": "string",
			"default": "99.99",
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
						"Verify"
					],
					"operation": [
						"Create Verification PSD 2"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Currency",
			"name": "currency",
			"type": "options",
			"default": "USD",
			"description": "The supported currencies.",
			"options": [
				{
					"name": "USD",
					"value": "USD"
				},
				{
					"name": "EUR",
					"value": "EUR"
				},
				{
					"name": "GBP",
					"value": "GBP"
				},
				{
					"name": "AUD",
					"value": "AUD"
				},
				{
					"name": "CAD",
					"value": "CAD"
				}
			],
			"routing": {
				"send": {
					"property": "currency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verification PSD 2"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Payee",
			"name": "payee",
			"type": "string",
			"default": "Acme Corp Inc. LTD",
			"routing": {
				"send": {
					"property": "payee",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verification PSD 2"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Phone Number",
			"name": "phone_number",
			"type": "string",
			"default": "+13035551234",
			"description": "+E164 formatted phone number.",
			"routing": {
				"send": {
					"property": "phone_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verification PSD 2"
					]
				}
			}
		},
		{
			"displayName": "Timeout Secs",
			"name": "timeout_secs",
			"type": "number",
			"default": 300,
			"description": "The number of seconds the verification code is valid for.",
			"routing": {
				"send": {
					"property": "timeout_secs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verification PSD 2"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Verify Profile Id",
			"name": "verify_profile_id",
			"type": "string",
			"default": "12ade33a-21c0-473b-b055-b3c836e1c292",
			"description": "The identifier of the associated Verify profile.",
			"routing": {
				"send": {
					"property": "verify_profile_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verification PSD 2"
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
						"Verify"
					],
					"operation": [
						"Create Verification PSD 2"
					]
				}
			}
		},
		{
			"displayName": "POST /verifications/sms",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verification SMS"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Phone Number",
			"name": "phone_number",
			"type": "string",
			"default": "+13035551234",
			"description": "+E164 formatted phone number.",
			"routing": {
				"send": {
					"property": "phone_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verification SMS"
					]
				}
			}
		},
		{
			"displayName": "Timeout Secs",
			"name": "timeout_secs",
			"type": "number",
			"default": 300,
			"description": "The number of seconds the verification code is valid for.",
			"routing": {
				"send": {
					"property": "timeout_secs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verification SMS"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Verify Profile Id",
			"name": "verify_profile_id",
			"type": "string",
			"default": "12ade33a-21c0-473b-b055-b3c836e1c292",
			"description": "The identifier of the associated Verify profile.",
			"routing": {
				"send": {
					"property": "verify_profile_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verification SMS"
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
						"Verify"
					],
					"operation": [
						"Create Verification SMS"
					]
				}
			}
		},
		{
			"displayName": "POST /verifications/whatsapp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verification Whatsapp"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Phone Number",
			"name": "phone_number",
			"type": "string",
			"default": "+13035551234",
			"description": "+E164 formatted phone number.",
			"routing": {
				"send": {
					"property": "phone_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verification Whatsapp"
					]
				}
			}
		},
		{
			"displayName": "Timeout Secs",
			"name": "timeout_secs",
			"type": "number",
			"default": 300,
			"description": "The number of seconds the verification code is valid for.",
			"routing": {
				"send": {
					"property": "timeout_secs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verification Whatsapp"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Verify Profile Id",
			"name": "verify_profile_id",
			"type": "string",
			"default": "12ade33a-21c0-473b-b055-b3c836e1c292",
			"description": "The identifier of the associated Verify profile.",
			"routing": {
				"send": {
					"property": "verify_profile_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verification Whatsapp"
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
						"Verify"
					],
					"operation": [
						"Create Verification Whatsapp"
					]
				}
			}
		},
		{
			"displayName": "GET /verifications/{verification_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Retrieve Verification"
					]
				}
			}
		},
		{
			"displayName": "Verification Id",
			"name": "verification_id",
			"required": true,
			"description": "The identifier of the verification to retrieve.",
			"default": "12ade33a-21c0-473b-b055-b3c836e1c292",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Retrieve Verification"
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
						"Verify"
					],
					"operation": [
						"Retrieve Verification"
					]
				}
			}
		},
		{
			"displayName": "GET /verify_profiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"List Verify Profiles"
					]
				}
			}
		},
		{
			"displayName": "Filter Name",
			"name": "filter%5Bname%5D",
			"description": "Optional filter for profile names.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[name]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"List Verify Profiles"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page%5Bsize%5D",
			"default": 25,
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
						"Verify"
					],
					"operation": [
						"List Verify Profiles"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "page%5Bnumber%5D",
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
						"Verify"
					],
					"operation": [
						"List Verify Profiles"
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
						"Verify"
					],
					"operation": [
						"List Verify Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /verify_profiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verify Profile"
					]
				}
			}
		},
		{
			"displayName": "Call",
			"name": "call",
			"type": "json",
			"default": "{\n  \"default_call_timeout_secs\": 30,\n  \"default_verification_timeout_secs\": 300,\n  \"speech_template\": \"Hello, this is the Acme Inc verification code you requested: {code}.\"\n}",
			"routing": {
				"send": {
					"property": "call",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verify Profile"
					]
				}
			}
		},
		{
			"displayName": "Flashcall",
			"name": "flashcall",
			"type": "json",
			"default": "{\n  \"default_verification_timeout_secs\": 300\n}",
			"routing": {
				"send": {
					"property": "flashcall",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verify Profile"
					]
				}
			}
		},
		{
			"displayName": "Language",
			"name": "language",
			"type": "string",
			"default": "en-US",
			"routing": {
				"send": {
					"property": "language",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verify Profile"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Test Profile",
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
						"Verify"
					],
					"operation": [
						"Create Verify Profile"
					]
				}
			}
		},
		{
			"displayName": "Psd 2",
			"name": "psd2",
			"type": "json",
			"default": "{\n  \"default_verification_timeout_secs\": 300\n}",
			"routing": {
				"send": {
					"property": "psd2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verify Profile"
					]
				}
			}
		},
		{
			"displayName": "Sms",
			"name": "sms",
			"type": "json",
			"default": "{\n  \"default_verification_timeout_secs\": 300,\n  \"messaging_enabled\": true,\n  \"messaging_template\": \"Hello, this is the Acme Inc verification code you requested: {code}.\",\n  \"rcs_enabled\": true,\n  \"vsms_enabled\": true\n}",
			"routing": {
				"send": {
					"property": "sms",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verify Profile"
					]
				}
			}
		},
		{
			"displayName": "Webhook Failover Url",
			"name": "webhook_failover_url",
			"type": "string",
			"default": "http://example.com/webhook/failover",
			"routing": {
				"send": {
					"property": "webhook_failover_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verify Profile"
					]
				}
			}
		},
		{
			"displayName": "Webhook Url",
			"name": "webhook_url",
			"type": "string",
			"default": "http://example.com/webhook",
			"routing": {
				"send": {
					"property": "webhook_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verify Profile"
					]
				}
			}
		},
		{
			"displayName": "Whatsapp",
			"name": "whatsapp",
			"type": "json",
			"default": "{\n  \"app_name\": \"Example Secure App\",\n  \"default_verification_timeout_secs\": 300\n}",
			"routing": {
				"send": {
					"property": "whatsapp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Create Verify Profile"
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
						"Verify"
					],
					"operation": [
						"Create Verify Profile"
					]
				}
			}
		},
		{
			"displayName": "DELETE /verify_profiles/{verify_profile_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Delete Verify Profile"
					]
				}
			}
		},
		{
			"displayName": "Verify Profile Id",
			"name": "verify_profile_id",
			"required": true,
			"description": "The identifier of the Verify profile to delete.",
			"default": "12ade33a-21c0-473b-b055-b3c836e1c292",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Delete Verify Profile"
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
						"Verify"
					],
					"operation": [
						"Delete Verify Profile"
					]
				}
			}
		},
		{
			"displayName": "GET /verify_profiles/{verify_profile_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Retrieve Verify Profile"
					]
				}
			}
		},
		{
			"displayName": "Verify Profile Id",
			"name": "verify_profile_id",
			"required": true,
			"description": "The identifier of the Verify profile to retrieve.",
			"default": "12ade33a-21c0-473b-b055-b3c836e1c292",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Retrieve Verify Profile"
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
						"Verify"
					],
					"operation": [
						"Retrieve Verify Profile"
					]
				}
			}
		},
		{
			"displayName": "PATCH /verify_profiles/{verify_profile_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Update Verify Profile"
					]
				}
			}
		},
		{
			"displayName": "Verify Profile Id",
			"name": "verify_profile_id",
			"required": true,
			"description": "The identifier of the Verify profile to update.",
			"default": "12ade33a-21c0-473b-b055-b3c836e1c292",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Update Verify Profile"
					]
				}
			}
		},
		{
			"displayName": "Call",
			"name": "call",
			"type": "json",
			"default": "{\n  \"default_call_timeout_secs\": 30,\n  \"default_verification_timeout_secs\": 300,\n  \"speech_template\": \"Hello, this is the Acme Inc verification code you requested: {code}.\"\n}",
			"routing": {
				"send": {
					"property": "call",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Update Verify Profile"
					]
				}
			}
		},
		{
			"displayName": "Flashcall",
			"name": "flashcall",
			"type": "json",
			"default": "{\n  \"default_verification_timeout_secs\": 300\n}",
			"routing": {
				"send": {
					"property": "flashcall",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Update Verify Profile"
					]
				}
			}
		},
		{
			"displayName": "Language",
			"name": "language",
			"type": "string",
			"default": "en-US",
			"routing": {
				"send": {
					"property": "language",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Update Verify Profile"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Test Profile",
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
						"Verify"
					],
					"operation": [
						"Update Verify Profile"
					]
				}
			}
		},
		{
			"displayName": "Psd 2",
			"name": "psd2",
			"type": "json",
			"default": "{\n  \"default_verification_timeout_secs\": 300\n}",
			"routing": {
				"send": {
					"property": "psd2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Update Verify Profile"
					]
				}
			}
		},
		{
			"displayName": "Sms",
			"name": "sms",
			"type": "json",
			"default": "{\n  \"default_verification_timeout_secs\": 300,\n  \"messaging_enabled\": true,\n  \"messaging_template\": \"Hello, this is the Acme Inc verification code you requested: {code}.\",\n  \"rcs_enabled\": true,\n  \"vsms_enabled\": true\n}",
			"routing": {
				"send": {
					"property": "sms",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Update Verify Profile"
					]
				}
			}
		},
		{
			"displayName": "Webhook Failover Url",
			"name": "webhook_failover_url",
			"type": "string",
			"default": "http://example.com/webhook/failover",
			"routing": {
				"send": {
					"property": "webhook_failover_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Update Verify Profile"
					]
				}
			}
		},
		{
			"displayName": "Webhook Url",
			"name": "webhook_url",
			"type": "string",
			"default": "http://example.com/webhook",
			"routing": {
				"send": {
					"property": "webhook_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Update Verify Profile"
					]
				}
			}
		},
		{
			"displayName": "Whatsapp",
			"name": "whatsapp",
			"type": "json",
			"default": "{\n  \"app_name\": \"Example Secure App\",\n  \"default_verification_timeout_secs\": 300\n}",
			"routing": {
				"send": {
					"property": "whatsapp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify"
					],
					"operation": [
						"Update Verify Profile"
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
						"Verify"
					],
					"operation": [
						"Update Verify Profile"
					]
				}
			}
		},
];
