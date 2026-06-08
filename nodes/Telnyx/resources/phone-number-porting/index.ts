import type { INodeProperties } from 'n8n-workflow';

export const phoneNumberPortingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Phone Number Porting"
					]
				}
			},
			"options": [
				{
					"name": "Post Portability Check",
					"value": "Post Portability Check",
					"action": "Run a portability check",
					"description": "Runs a portability check, returning the results immediately.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/portability_checks"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /portability_checks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Phone Number Porting"
					],
					"operation": [
						"Post Portability Check"
					]
				}
			}
		},
		{
			"displayName": "Phone Numbers",
			"name": "phone_numbers",
			"type": "json",
			"default": "[\n  \"+13035550000\",\n  \"+13035550001\",\n  \"+13035550002\"\n]",
			"description": "The list of +E.164 formatted phone numbers to check for portability",
			"routing": {
				"send": {
					"property": "phone_numbers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Phone Number Porting"
					],
					"operation": [
						"Post Portability Check"
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
						"Phone Number Porting"
					],
					"operation": [
						"Post Portability Check"
					]
				}
			}
		},
];
