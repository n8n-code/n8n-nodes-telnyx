import type { INodeProperties } from 'n8n-workflow';

export const simCardsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					]
				}
			},
			"options": [
				{
					"name": "Bulk SIM Card Network Preferences",
					"value": "Bulk SIM Card Network Preferences",
					"action": "Bulk Network Preferences for SIM cards",
					"description": "This API allows dispatching the same operation described for the PUT sim_cards/:sim_card_id/network_preferences API for multiple SIM cards at once.<br/><br/>\nAlthough, a SIM card network preference may fail individually under any validation triggered as a consequence of its state. For example, a SIM can't have an in-progress OTA update for applying a Network Preference, so they'll fail when requested in this API. In that scenario, the specific error will be present in the response along with the successful definitions in the \"errors\" response node.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/actions/network_preferences/sim_cards"
						}
					}
				},
				{
					"name": "Sim Card Register",
					"value": "Sim Card Register",
					"action": "Register SIM cards",
					"description": "Register the SIM cards associated with the provided registration codes to the current user's account.<br/><br/>\nIf <code>sim_card_group_id</code> is provided, the SIM cards will be associated with that group. Otherwise, the default group for the current user will be used.<br/><br/>\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/actions/register/sim_cards"
						}
					}
				},
				{
					"name": "Sim Cards Get",
					"value": "Sim Cards Get",
					"action": "Get all SIM cards",
					"description": "Get all SIM cards belonging to the user that match the given filters.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sim_cards"
						}
					}
				},
				{
					"name": "Post Validate Registration Codes",
					"value": "Post Validate Registration Codes",
					"action": "Validate SIM cards registration codes",
					"description": "It validates whether SIM card registration codes are valid or not.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sim_cards/actions/validate_registration_codes"
						}
					}
				},
				{
					"name": "Sim Card Delete",
					"value": "Sim Card Delete",
					"action": "Deletes a SIM card",
					"description": "The SIM card will be decommissioned, removed from your account and you will stop being charged.<br />The SIM card won't be able to connect to the network after the deletion is completed, thus making it impossible to consume data.<br/>\nTransitioning to the disabled state may take a period of time.</br>\nUntil the transition is completed, the SIM card status will be disabling <code>disabling</code>.<br />In order to re-enable the SIM card, you will need to re-register it.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sim_cards/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Sim Card Get",
					"value": "Sim Card Get",
					"action": "Get SIM card",
					"description": "Returns the details regarding a specific SIM card.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sim_cards/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Sim Card Update",
					"value": "Sim Card Update",
					"action": "Update a SIM card",
					"description": "Updates a SIM card's group and tags",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sim_cards/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Sim Card Disable",
					"value": "Sim Card Disable",
					"action": "Request a SIM card disable",
					"description": "The SIM card won't be able to connect to the network after the disabling is completed, thus making it impossible to consume data.<br/>\nTransitioning to the disabled state may take a period of time.</br>\nUntil the transition is completed, the SIM card status will be <code>disabling</code>.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sim_cards/{{$parameter[\"id\"]}}/actions/disable"
						}
					}
				},
				{
					"name": "Sim Card Enable",
					"value": "Sim Card Enable",
					"action": "Request a SIM card enable",
					"description": "The SIM card will be able to connect to the network once the enabling is complete, thus making it possible to consume data.<br/>\nTo enable a SIM card, it must be associated with SIM card group.<br/>\nTransitioning to the enabled state may take a period of time. Until the transition is completed, the SIM card status will be <code>enabling</code>.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sim_cards/{{$parameter[\"id\"]}}/actions/enable"
						}
					}
				},
				{
					"name": "Sim Card Set Standby",
					"value": "Sim Card Set Standby",
					"action": "Request setting a SIM card to standby",
					"description": "The SIM card will be able to connect to the network once the process to set it to standby has been completed, thus making it possible to consume data.<br/>\nTo set a SIM card to standby, it must be associated with SIM card group.<br/>\nTransitioning to the standby state may take a period of time. Until the transition is completed, the SIM card status will be <code>setting_standby</code>.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sim_cards/{{$parameter[\"id\"]}}/actions/set_standby"
						}
					}
				},
				{
					"name": "SIM Card Network Preferences Delete",
					"value": "SIM Card Network Preferences Delete",
					"action": "DELETE network preferences",
					"description": "This API asynchronously removes the custom-defined network preferences settings. After this operation is done the Telnyx default settings, the same applied for an unaltered SIM card, will be in place.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sim_cards/{{$parameter[\"sim_card_id\"]}}/network_preferences"
						}
					}
				},
				{
					"name": "SIM Card Network Preferences Get",
					"value": "SIM Card Network Preferences Get",
					"action": "Get network preferences",
					"description": "It returns the network preferences currently applied in the SIM card.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sim_cards/{{$parameter[\"sim_card_id\"]}}/network_preferences"
						}
					}
				},
				{
					"name": "SIM Card Network Preferences Put",
					"value": "SIM Card Network Preferences Put",
					"action": "Set network preferences",
					"description": "This API allows setting or updating a SIM card network preference. <br/><br/>\nEvery SIM card has default network preferences defined on Telnyx. These preferences will determine how a SIMCard will connect to the network by considering a list of preferable operators.<br/><br/>\nThere can be multiple scenarios where an operator can be preferred over another, for example, when a specific mobile operator can provide better network latency or better pricing.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/sim_cards/{{$parameter[\"sim_card_id\"]}}/network_preferences"
						}
					}
				},
				{
					"name": "SIM Card Public IP Delete",
					"value": "SIM Card Public IP Delete",
					"action": "Delete SIM card public IP",
					"description": "This API asynchronously removes an existing public IP from a SIM card.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sim_cards/{{$parameter[\"sim_card_id\"]}}/public_ip"
						}
					}
				},
				{
					"name": "SIM Card Public IP Get",
					"value": "SIM Card Public IP Get",
					"action": "Get SIM card public IP definition",
					"description": "It returns the public IP requested for a SIM card.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sim_cards/{{$parameter[\"sim_card_id\"]}}/public_ip"
						}
					}
				},
				{
					"name": "SIM Card Public IP Post",
					"value": "SIM Card Public IP Post",
					"action": "Set SIM card public IP",
					"description": "This API will asynchronously map a random public IP to a SIM card, making it reachable on the public internet. <br/><br/>\n The request will return the resource as \"provisioning\" right away, and it'll eventually get \"provisioned\", meaning it completed the setup. <br/><br/>\n Setting up a public IP will generate charges, and we won't be able to provide the IP if the account doesn't have a balance. In that case, this operation will succeed, but its status will change to failed eventually, and the resource will be updated with the associated status. The IP resource will need to be deleted and re-created with our DELETE and POST APIs in this scenario.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sim_cards/{{$parameter[\"sim_card_id\"]}}/public_ip"
						}
					}
				},
				{
					"name": "Wireless Connectivity Logs Get",
					"value": "Wireless Connectivity Logs Get",
					"action": "List wireless connectivity logs",
					"description": "This API allows listing a paginated collection of Wireless Connectivity Logs associated with a SIM Card, for troubleshooting purposes.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sim_cards/{{$parameter[\"sim_card_id\"]}}/wireless_connectivity_logs"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PUT /actions/network_preferences/sim_cards",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Bulk SIM Card Network Preferences"
					]
				}
			}
		},
		{
			"displayName": "Mobile Operator Networks Preferences",
			"name": "mobile_operator_networks_preferences",
			"type": "json",
			"default": "[\n  {\n    \"mobile_operator_network_id\": \"6a09cdc3-8948-47f0-aa62-74ac943d6c58\",\n    \"priority\": 0\n  }\n]",
			"description": "A list of mobile operator networks and the priority that should be applied when the SIM is connecting to the network.",
			"routing": {
				"send": {
					"property": "mobile_operator_networks_preferences",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Bulk SIM Card Network Preferences"
					]
				}
			}
		},
		{
			"displayName": "Sim Card Ids",
			"name": "sim_card_ids",
			"type": "json",
			"default": "[\n  \"6b14e151-8493-4fa1-8664-1cc4e6d14158\",\n  \"6b14e151-8493-4fa1-8664-1cc4e6d14158\"\n]",
			"routing": {
				"send": {
					"property": "sim_card_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Bulk SIM Card Network Preferences"
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
						"SIM Cards"
					],
					"operation": [
						"Bulk SIM Card Network Preferences"
					]
				}
			}
		},
		{
			"displayName": "POST /actions/register/sim_cards",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Card Register"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Registration Codes",
			"name": "registration_codes",
			"type": "json",
			"default": "[\n  \"0000000001\",\n  \"0000000002\",\n  \"0000000003\"\n]",
			"routing": {
				"send": {
					"property": "registration_codes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Card Register"
					]
				}
			}
		},
		{
			"displayName": "Sim Card Group Id",
			"name": "sim_card_group_id",
			"type": "string",
			"default": "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
			"description": "The group SIMCardGroup identification. This attribute can be <code>null</code> when it's present in an associated resource.",
			"routing": {
				"send": {
					"property": "sim_card_group_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Card Register"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "standby",
			"description": "Status on which the SIM card will be set after being successful registered.",
			"options": [
				{
					"name": "Enabled",
					"value": "enabled"
				},
				{
					"name": "Disabled",
					"value": "disabled"
				},
				{
					"name": "Standby",
					"value": "standby"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Card Register"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  \"personal\",\n  \"customers\",\n  \"active-customers\"\n]",
			"description": "Searchable tags associated with the SIM card",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Card Register"
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
						"SIM Cards"
					],
					"operation": [
						"Sim Card Register"
					]
				}
			}
		},
		{
			"displayName": "GET /sim_cards",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Cards Get"
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
						"SIM Cards"
					],
					"operation": [
						"Sim Cards Get"
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
						"SIM Cards"
					],
					"operation": [
						"Sim Cards Get"
					]
				}
			}
		},
		{
			"displayName": "Include Sim Card Group",
			"name": "include_sim_card_group",
			"description": "It includes the associated SIM card group object in the response when present.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_sim_card_group",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Cards Get"
					]
				}
			}
		},
		{
			"displayName": "Filter Sim Card Group Id",
			"name": "filter%5Bsim_card_group_id%5D",
			"description": "A valid SIM card group ID.",
			"default": "47a1c2b0-cc7b-4ab1-bb98-b33fb0fc61b9",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[sim_card_group_id]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Cards Get"
					]
				}
			}
		},
		{
			"displayName": "Filter Tags",
			"name": "filter%5Btags%5D",
			"description": "A list of SIM card tags to filter on.<br/><br/>\nIf the SIM card contains <b><i>all</i></b> of the given <code>tags</code> they will be found.<br/><br/>\nFor example, if the SIM cards have the following tags: <ul>\n  <li><code>['customers', 'staff', 'test']</code>\n  <li><code>['test']</code></li>\n  <li><code>['customers']</code></li>\n</ul>\nSearching for <code>['customers', 'test']</code> returns only the first because it's the only one with both tags.<br/> Searching for <code>test</code> returns the first two SIMs, because both of them have such tag.<br/> Searching for <code>customers</code> returns the first and last SIMs.<br/>\n",
			"default": "[\n  \"personal\",\n  \"customers\",\n  \"active-customers\"\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[tags]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Cards Get"
					]
				}
			}
		},
		{
			"displayName": "Filter Iccid",
			"name": "filter%5Biccid%5D",
			"description": "A search string to partially match for the SIM card's ICCID.",
			"default": "89310410106543789301",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[iccid]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Cards Get"
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
						"SIM Cards"
					],
					"operation": [
						"Sim Cards Get"
					]
				}
			}
		},
		{
			"displayName": "POST /sim_cards/actions/validate_registration_codes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Post Validate Registration Codes"
					]
				}
			}
		},
		{
			"displayName": "Registration Codes",
			"name": "registration_codes",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "registration_codes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Post Validate Registration Codes"
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
						"SIM Cards"
					],
					"operation": [
						"Post Validate Registration Codes"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sim_cards/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Card Delete"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Identifies the resource.",
			"default": "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Card Delete"
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
						"SIM Cards"
					],
					"operation": [
						"Sim Card Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /sim_cards/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Card Get"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Identifies the resource.",
			"default": "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Card Get"
					]
				}
			}
		},
		{
			"displayName": "Include Sim Card Group",
			"name": "include_sim_card_group",
			"description": "It includes the associated SIM card group object in the response when present.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_sim_card_group",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Card Get"
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
						"SIM Cards"
					],
					"operation": [
						"Sim Card Get"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sim_cards/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Card Update"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Identifies the resource.",
			"default": "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Card Update"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "string",
			"default": "2018-02-02T22:25:27.521Z",
			"description": "ISO 8601 formatted date-time indicating when the resource was created.",
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
						"SIM Cards"
					],
					"operation": [
						"Sim Card Update"
					]
				}
			}
		},
		{
			"displayName": "Iccid",
			"name": "iccid",
			"type": "string",
			"default": "89310410106543789301",
			"description": "The ICCID is the identifier of the specific SIM card/chip. Each SIM is internationally identified by its integrated circuit card identifier (ICCID). ICCIDs are stored in the SIM card's memory and are also engraved or printed on the SIM card body during a process called personalization.\n",
			"routing": {
				"send": {
					"property": "iccid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Card Update"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
			"description": "Identifies the resource.",
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
						"SIM Cards"
					],
					"operation": [
						"Sim Card Update"
					]
				}
			}
		},
		{
			"displayName": "Imsi",
			"name": "imsi",
			"type": "string",
			"default": 81932214823362980,
			"description": "SIM cards are identified on their individual operator networks by a unique International Mobile Subscriber Identity (IMSI). <br/>\nMobile network operators connect mobile phone calls and communicate with their market SIM cards using their IMSIs. The IMSI is stored in the Subscriber  Identity Module (SIM) inside the device and is sent by the device to the appropriate network. It is used to acquire the details of the device in the Home  Location Register (HLR) or the Visitor Location Register (VLR).\n",
			"routing": {
				"send": {
					"property": "imsi",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Card Update"
					]
				}
			}
		},
		{
			"displayName": "Ipv 4",
			"name": "ipv4",
			"type": "string",
			"default": "192.168.0.0",
			"description": "The SIM's address in the currently connected network. This IPv4 address is usually obtained dynamically, so it may vary according to the location or new connections.\n",
			"routing": {
				"send": {
					"property": "ipv4",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Card Update"
					]
				}
			}
		},
		{
			"displayName": "Ipv 6",
			"name": "ipv6",
			"type": "string",
			"default": "2001:cdba:0000:0000:0000:0000:3257:9652",
			"description": "The SIM's address in the currently connected network. This IPv6 address is usually obtained dynamically, so it may vary according to the location or new connections.\n",
			"routing": {
				"send": {
					"property": "ipv6",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Card Update"
					]
				}
			}
		},
		{
			"displayName": "Msisdn",
			"name": "msisdn",
			"type": "string",
			"default": "+13109976224",
			"description": "Mobile Station International Subscriber Directory Number (MSISDN) is a number used to identify a mobile phone number internationally. <br/>\nMSISDN is defined by the E.164 numbering plan. It includes a country code and a National Destination Code which identifies the subscriber's operator.\n",
			"routing": {
				"send": {
					"property": "msisdn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Card Update"
					]
				}
			}
		},
		{
			"displayName": "Record Type",
			"name": "record_type",
			"type": "string",
			"default": "sim_card",
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
						"SIM Cards"
					],
					"operation": [
						"Sim Card Update"
					]
				}
			}
		},
		{
			"displayName": "Sim Card Group Id",
			"name": "sim_card_group_id",
			"type": "string",
			"default": "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
			"description": "The group SIMCardGroup identification. This attribute can be <code>null</code> when it's present in an associated resource.",
			"routing": {
				"send": {
					"property": "sim_card_group_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Card Update"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "enabled",
			"description": "The current status of the SIM card. It will be one of the following: <br/>\n<ul>\n <li><code>registering</code> - the card is being registered</li>\n <li><code>enabling</code> - the card is being enabled</li>\n <li><code>enabled</code> - the card is enabled and ready for use</li>\n <li><code>disabling</code> - the card is being disabled</li>\n <li><code>disabled</code> - the card has been disabled and cannot be used</li>\n <li><code>data_limit_exceeded</code> - the card has exceeded its data consumption limit</li>\n</ul>\nTransitioning between the enabled and disabled states may take a period of time.\n",
			"options": [
				{
					"name": "Registering",
					"value": "registering"
				},
				{
					"name": "Enabling",
					"value": "enabling"
				},
				{
					"name": "Enabled",
					"value": "enabled"
				},
				{
					"name": "Disabling",
					"value": "disabling"
				},
				{
					"name": "Disabled",
					"value": "disabled"
				},
				{
					"name": "Data Limit Exceeded",
					"value": "data_limit_exceeded"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Card Update"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  \"personal\",\n  \"customers\",\n  \"active-customers\"\n]",
			"description": "Searchable tags associated with the SIM card",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Card Update"
					]
				}
			}
		},
		{
			"displayName": "Updated At",
			"name": "updated_at",
			"type": "string",
			"default": "2018-02-02T22:25:27.521Z",
			"description": "ISO 8601 formatted date-time indicating when the resource was updated.",
			"routing": {
				"send": {
					"property": "updated_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Card Update"
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
						"SIM Cards"
					],
					"operation": [
						"Sim Card Update"
					]
				}
			}
		},
		{
			"displayName": "POST /sim_cards/{id}/actions/disable",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Card Disable"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Identifies the resource.",
			"default": "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Card Disable"
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
						"SIM Cards"
					],
					"operation": [
						"Sim Card Disable"
					]
				}
			}
		},
		{
			"displayName": "POST /sim_cards/{id}/actions/enable",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Card Enable"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Identifies the resource.",
			"default": "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Card Enable"
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
						"SIM Cards"
					],
					"operation": [
						"Sim Card Enable"
					]
				}
			}
		},
		{
			"displayName": "POST /sim_cards/{id}/actions/set_standby",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Card Set Standby"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Identifies the resource.",
			"default": "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Sim Card Set Standby"
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
						"SIM Cards"
					],
					"operation": [
						"Sim Card Set Standby"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sim_cards/{sim_card_id}/network_preferences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"SIM Card Network Preferences Delete"
					]
				}
			}
		},
		{
			"displayName": "Sim Card Id",
			"name": "sim_card_id",
			"required": true,
			"description": "Identifies a SIM card.",
			"default": "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"SIM Card Network Preferences Delete"
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
						"SIM Cards"
					],
					"operation": [
						"SIM Card Network Preferences Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /sim_cards/{sim_card_id}/network_preferences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"SIM Card Network Preferences Get"
					]
				}
			}
		},
		{
			"displayName": "Sim Card Id",
			"name": "sim_card_id",
			"required": true,
			"description": "Identifies a SIM card.",
			"default": "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"SIM Card Network Preferences Get"
					]
				}
			}
		},
		{
			"displayName": "Include Ota Updates",
			"name": "include_ota_updates",
			"description": "It includes the associated OTA update objects in the response when present.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_ota_updates",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"SIM Card Network Preferences Get"
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
						"SIM Cards"
					],
					"operation": [
						"SIM Card Network Preferences Get"
					]
				}
			}
		},
		{
			"displayName": "PUT /sim_cards/{sim_card_id}/network_preferences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"SIM Card Network Preferences Put"
					]
				}
			}
		},
		{
			"displayName": "Sim Card Id",
			"name": "sim_card_id",
			"required": true,
			"description": "Identifies a SIM card.",
			"default": "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"SIM Card Network Preferences Put"
					]
				}
			}
		},
		{
			"displayName": "Mobile Operator Networks Preferences",
			"name": "mobile_operator_networks_preferences",
			"type": "json",
			"default": "[\n  {\n    \"mobile_operator_network_id\": \"6a09cdc3-8948-47f0-aa62-74ac943d6c58\",\n    \"priority\": 0\n  }\n]",
			"description": "A list of mobile operator networks and the priority that should be applied when the SIM is connecting to the network.",
			"routing": {
				"send": {
					"property": "mobile_operator_networks_preferences",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"SIM Card Network Preferences Put"
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
						"SIM Cards"
					],
					"operation": [
						"SIM Card Network Preferences Put"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sim_cards/{sim_card_id}/public_ip",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"SIM Card Public IP Delete"
					]
				}
			}
		},
		{
			"displayName": "Sim Card Id",
			"name": "sim_card_id",
			"required": true,
			"description": "Identifies a SIM card.",
			"default": "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"SIM Card Public IP Delete"
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
						"SIM Cards"
					],
					"operation": [
						"SIM Card Public IP Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /sim_cards/{sim_card_id}/public_ip",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"SIM Card Public IP Get"
					]
				}
			}
		},
		{
			"displayName": "Sim Card Id",
			"name": "sim_card_id",
			"required": true,
			"description": "Identifies a SIM card.",
			"default": "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"SIM Card Public IP Get"
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
						"SIM Cards"
					],
					"operation": [
						"SIM Card Public IP Get"
					]
				}
			}
		},
		{
			"displayName": "POST /sim_cards/{sim_card_id}/public_ip",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"SIM Card Public IP Post"
					]
				}
			}
		},
		{
			"displayName": "Sim Card Id",
			"name": "sim_card_id",
			"required": true,
			"description": "Identifies a SIM card.",
			"default": "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"SIM Card Public IP Post"
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
						"SIM Cards"
					],
					"operation": [
						"SIM Card Public IP Post"
					]
				}
			}
		},
		{
			"displayName": "GET /sim_cards/{sim_card_id}/wireless_connectivity_logs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Wireless Connectivity Logs Get"
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
						"SIM Cards"
					],
					"operation": [
						"Wireless Connectivity Logs Get"
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
						"SIM Cards"
					],
					"operation": [
						"Wireless Connectivity Logs Get"
					]
				}
			}
		},
		{
			"displayName": "Sim Card Id",
			"name": "sim_card_id",
			"required": true,
			"description": "Identifies a SIM card.",
			"default": "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SIM Cards"
					],
					"operation": [
						"Wireless Connectivity Logs Get"
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
						"SIM Cards"
					],
					"operation": [
						"Wireless Connectivity Logs Get"
					]
				}
			}
		},
];
