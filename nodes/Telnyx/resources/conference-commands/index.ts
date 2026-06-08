import type { INodeProperties } from 'n8n-workflow';

export const conferenceCommandsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					]
				}
			},
			"options": [
				{
					"name": "List Conferences",
					"value": "List Conferences",
					"action": "List conferences",
					"description": "Lists conferences. Conferences are created on demand, and will expire after all participants have left the conference or after 4 hours regardless of the number of active participants. Conferences are listed in descending order by `expires_at`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/conferences"
						}
					}
				},
				{
					"name": "Create Conference",
					"value": "Create Conference",
					"action": "Create conference",
					"description": "Create a conference from an existing call leg using a `call_control_id` and a conference name. Upon creating the conference, the call will be automatically bridged to the conference. Conferences will expire after all participants have left the conference or after 4 hours regardless of the number of active participants.\n\n**Expected Webhooks:**\n\n- `conference.created`\n- `conference.participant.joined`\n- `conference.participant.left`\n- `conference.ended`\n- `conference.recording.saved`\n- `conference.floor.changed`\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/conferences"
						}
					}
				},
				{
					"name": "List Conference Participants",
					"value": "List Conference Participants",
					"action": "List conference participants",
					"description": "Lists conference participants",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/conferences/{{$parameter[\"conference_id\"]}}/participants"
						}
					}
				},
				{
					"name": "Retrieve Conference",
					"value": "Retrieve Conference",
					"action": "Retrieve a conference",
					"description": "Retrieve an existing conference",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/conferences/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Conference Dial Participant In",
					"value": "Conference Dial Participant In",
					"action": "Dial a new participant into a conference",
					"description": "Dials a phone number and, when the call is answered, automatically joins them into the specified conference.\n\n**Expected Webhooks:**\n\n- `call.hangup`\n- `call.answered`\n- `conference.participant.joined`\n- `conference.participant.left`\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/conferences/{{$parameter[\"id\"]}}/actions/dial_participant"
						}
					}
				},
				{
					"name": "Conference Hold Participants",
					"value": "Conference Hold Participants",
					"action": "Hold conference participants",
					"description": "Hold a list of participants in a conference call",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/conferences/{{$parameter[\"id\"]}}/actions/hold"
						}
					}
				},
				{
					"name": "Conference Join",
					"value": "Conference Join",
					"action": "Join a conference",
					"description": "Join an existing call leg to a conference. Issue the Join Conference command with the conference ID in the path and the `call_control_id` of the leg you wish to join to the conference as an attribute.\n\n**Expected Webhooks:**\n\n- `conference.participant.joined`\n- `conference.participant.left`\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/conferences/{{$parameter[\"id\"]}}/actions/join"
						}
					}
				},
				{
					"name": "Conference Leave",
					"value": "Conference Leave",
					"action": "Leave a conference",
					"description": "Removes a call leg from a conference and moves it back to parked state. **Expected Webhooks:**\n\n- `conference.participant.left`\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/conferences/{{$parameter[\"id\"]}}/actions/leave"
						}
					}
				},
				{
					"name": "Conference Mute Participants",
					"value": "Conference Mute Participants",
					"action": "Mute conference participants",
					"description": "Mute a list of participants in a conference call",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/conferences/{{$parameter[\"id\"]}}/actions/mute"
						}
					}
				},
				{
					"name": "Conference Play Audio",
					"value": "Conference Play Audio",
					"action": "Play audio to conference participants",
					"description": "Play audio to all or some participants on a conference call.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/conferences/{{$parameter[\"id\"]}}/actions/play"
						}
					}
				},
				{
					"name": "Conference Start Recording",
					"value": "Conference Start Recording",
					"action": "Conference recording start",
					"description": "Start recording the conference. Recording will stop on conference end, or via the Stop Recording command.\n\n**Expected Webhooks:**\n\n- `conference.recording.saved`",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/conferences/{{$parameter[\"id\"]}}/actions/record_start"
						}
					}
				},
				{
					"name": "Conference Stop Recording",
					"value": "Conference Stop Recording",
					"action": "Conference recording stop",
					"description": "Stop recording the conference.\n\n**Expected Webhooks:**\n\n- `conference.recording.saved`\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/conferences/{{$parameter[\"id\"]}}/actions/record_stop"
						}
					}
				},
				{
					"name": "Conference Speak Text",
					"value": "Conference Speak Text",
					"action": "Speak text to conference participants",
					"description": "Convert text to speech and play it to all or some participants.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/conferences/{{$parameter[\"id\"]}}/actions/speak"
						}
					}
				},
				{
					"name": "Conference Stop Audio",
					"value": "Conference Stop Audio",
					"action": "Stop audio being played on the conference",
					"description": "Stop audio being played to all or some participants on a conference call.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/conferences/{{$parameter[\"id\"]}}/actions/stop"
						}
					}
				},
				{
					"name": "Conference Unhold Participants",
					"value": "Conference Unhold Participants",
					"action": "Unhold conference participants",
					"description": "Unhold a list of participants in a conference call",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/conferences/{{$parameter[\"id\"]}}/actions/unhold"
						}
					}
				},
				{
					"name": "Conference Unmute Participants",
					"value": "Conference Unmute Participants",
					"action": "Unmute conference participants",
					"description": "Unmute a list of participants in a conference call",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/conferences/{{$parameter[\"id\"]}}/actions/unmute"
						}
					}
				},
				{
					"name": "Conference Update",
					"value": "Conference Update",
					"action": "Update conference participant",
					"description": "Update conference participant supervisor_role",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/conferences/{{$parameter[\"id\"]}}/actions/update"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /conferences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"List Conferences"
					]
				}
			}
		},
		{
			"displayName": "Filter Name",
			"name": "filter%5Bname%5D",
			"description": "If present, conferences will be filtered to those with a matching `name` attribute. Matching is case-sensitive",
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
						"Conference Commands"
					],
					"operation": [
						"List Conferences"
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
						"Conference Commands"
					],
					"operation": [
						"List Conferences"
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
						"Conference Commands"
					],
					"operation": [
						"List Conferences"
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
						"Conference Commands"
					],
					"operation": [
						"List Conferences"
					]
				}
			}
		},
		{
			"displayName": "POST /conferences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Create Conference"
					]
				}
			}
		},
		{
			"displayName": "Beep Enabled",
			"name": "beep_enabled",
			"type": "options",
			"default": "on_exit",
			"description": "Whether a beep sound should be played when participants join and/or leave the conference.",
			"options": [
				{
					"name": "Always",
					"value": "always"
				},
				{
					"name": "Never",
					"value": "never"
				},
				{
					"name": "On Enter",
					"value": "on_enter"
				},
				{
					"name": "On Exit",
					"value": "on_exit"
				}
			],
			"routing": {
				"send": {
					"property": "beep_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Create Conference"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Call Control Id",
			"name": "call_control_id",
			"type": "string",
			"default": "v2:T02llQxIyaRkhfRKxgAP8nY511EhFLizdvdUKJiSw8d6A9BborherQczRrZvZakpWxBlpw48KyZQ==",
			"description": "Unique identifier and token for controlling the call",
			"routing": {
				"send": {
					"property": "call_control_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Create Conference"
					]
				}
			}
		},
		{
			"displayName": "Client State",
			"name": "client_state",
			"type": "string",
			"default": "aGF2ZSBhIG5pY2UgZGF5ID1d",
			"description": "Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.",
			"routing": {
				"send": {
					"property": "client_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Create Conference"
					]
				}
			}
		},
		{
			"displayName": "Comfort Noise",
			"name": "comfort_noise",
			"type": "boolean",
			"default": false,
			"description": "Toggle background comfort noise.",
			"routing": {
				"send": {
					"property": "comfort_noise",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Create Conference"
					]
				}
			}
		},
		{
			"displayName": "Command Id",
			"name": "command_id",
			"type": "string",
			"default": "891510ac-f3e4-11e8-af5b-de00688a4901",
			"description": "Use this field to avoid execution of duplicate commands. Telnyx will ignore subsequent commands with the same `command_id` as one that has already been executed.",
			"routing": {
				"send": {
					"property": "command_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Create Conference"
					]
				}
			}
		},
		{
			"displayName": "Duration Minutes",
			"name": "duration_minutes",
			"type": "number",
			"default": 5,
			"description": "Time length (minutes) after which the conference will end.",
			"routing": {
				"send": {
					"property": "duration_minutes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Create Conference"
					]
				}
			}
		},
		{
			"displayName": "Hold Audio Url",
			"name": "hold_audio_url",
			"type": "string",
			"default": "http://example.com/message.wav",
			"description": "The URL of a file to be played to participants joining the conference. The URL can point to either a WAV or MP3 file. hold_media_name and hold_audio_url cannot be used together in one request. Takes effect only when \"start_conference_on_create\" is set to \"false\".",
			"routing": {
				"send": {
					"property": "hold_audio_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Create Conference"
					]
				}
			}
		},
		{
			"displayName": "Hold Media Name",
			"name": "hold_media_name",
			"type": "string",
			"default": "my_media_uploaded_to_media_storage_api",
			"description": "The media_name of a file to be played to participants joining the conference. The media_name must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. The file must either be a WAV or MP3 file. Takes effect only when \"start_conference_on_create\" is set to \"false\".",
			"routing": {
				"send": {
					"property": "hold_media_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Create Conference"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Business",
			"description": "Name of the conference",
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
						"Conference Commands"
					],
					"operation": [
						"Create Conference"
					]
				}
			}
		},
		{
			"displayName": "Start Conference On Create",
			"name": "start_conference_on_create",
			"type": "boolean",
			"default": false,
			"description": "Whether the conference should be started on creation. If the conference isn't started all participants that join are automatically put on hold. Defaults to \"true\".",
			"routing": {
				"send": {
					"property": "start_conference_on_create",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Create Conference"
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
						"Conference Commands"
					],
					"operation": [
						"Create Conference"
					]
				}
			}
		},
		{
			"displayName": "GET /conferences/{conference_id}/participants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"List Conference Participants"
					]
				}
			}
		},
		{
			"displayName": "Conference Id",
			"name": "conference_id",
			"required": true,
			"description": "Uniquely identifies the conference by id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"List Conference Participants"
					]
				}
			}
		},
		{
			"displayName": "Filter Muted",
			"name": "filter%5Bmuted%5D",
			"description": "If present, participants will be filtered to those who are/are not muted",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[muted]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"List Conference Participants"
					]
				}
			}
		},
		{
			"displayName": "Filter On Hold",
			"name": "filter%5Bon_hold%5D",
			"description": "If present, participants will be filtered to those who are/are not put on hold",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[on_hold]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"List Conference Participants"
					]
				}
			}
		},
		{
			"displayName": "Filter Whispering",
			"name": "filter%5Bwhispering%5D",
			"description": "If present, participants will be filtered to those who are whispering or are not",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter[whispering]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"List Conference Participants"
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
						"Conference Commands"
					],
					"operation": [
						"List Conference Participants"
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
						"Conference Commands"
					],
					"operation": [
						"List Conference Participants"
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
						"Conference Commands"
					],
					"operation": [
						"List Conference Participants"
					]
				}
			}
		},
		{
			"displayName": "GET /conferences/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Retrieve Conference"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Uniquely identifies the conference by id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Retrieve Conference"
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
						"Conference Commands"
					],
					"operation": [
						"Retrieve Conference"
					]
				}
			}
		},
		{
			"displayName": "POST /conferences/{id}/actions/dial_participant",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Dial Participant In"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Uniquely identifies the conference by id or name",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Dial Participant In"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Call Control Id",
			"name": "call_control_id",
			"type": "string",
			"default": "v2:T02llQxIyaRkhfRKxgAP8nY511EhFLizdvdUKJiSw8d6A9BborherQczRrZvZakpWxBlpw48KyZQ==",
			"description": "Unique identifier and token for controlling the call",
			"routing": {
				"send": {
					"property": "call_control_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Dial Participant In"
					]
				}
			}
		},
		{
			"displayName": "Client State",
			"name": "client_state",
			"type": "string",
			"default": "aGF2ZSBhIG5pY2UgZGF5ID1d",
			"description": "Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.",
			"routing": {
				"send": {
					"property": "client_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Dial Participant In"
					]
				}
			}
		},
		{
			"displayName": "Command Id",
			"name": "command_id",
			"type": "string",
			"default": "891510ac-f3e4-11e8-af5b-de00688a4901",
			"description": "Use this field to avoid execution of duplicate commands. Telnyx will ignore subsequent commands with the same `command_id` as one that has already been executed.",
			"routing": {
				"send": {
					"property": "command_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Dial Participant In"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "From",
			"name": "from",
			"type": "string",
			"default": "+18005550101",
			"description": "The `from` number to be used as the caller id presented to the destination (`to` number).",
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
						"Conference Commands"
					],
					"operation": [
						"Conference Dial Participant In"
					]
				}
			}
		},
		{
			"displayName": "Hold",
			"name": "hold",
			"type": "boolean",
			"default": true,
			"description": "Whether the participant should be put on hold immediately after joining the conference.",
			"routing": {
				"send": {
					"property": "hold",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Dial Participant In"
					]
				}
			}
		},
		{
			"displayName": "Hold Audio Url",
			"name": "hold_audio_url",
			"type": "string",
			"default": "http://example.com/message.wav",
			"description": "The URL of a file to be played to the participant when they are put on hold after joining the conference. If media_name is also supplied, this is currently ignored. Takes effect only when \"start_conference_on_create\" is set to \"false\". This property takes effect only if \"hold\" is set to \"true\".",
			"routing": {
				"send": {
					"property": "hold_audio_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Dial Participant In"
					]
				}
			}
		},
		{
			"displayName": "Hold Media Name",
			"name": "hold_media_name",
			"type": "string",
			"default": "my_media_uploaded_to_media_storage_api",
			"description": "The media_name of a file to be played to the participant when they are put on hold after joining the conference. The media_name must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. The file must either be a WAV or MP3 file. Takes effect only when \"start_conference_on_create\" is set to \"false\". This property takes effect only if \"hold\" is set to \"true\".",
			"routing": {
				"send": {
					"property": "hold_media_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Dial Participant In"
					]
				}
			}
		},
		{
			"displayName": "Mute",
			"name": "mute",
			"type": "boolean",
			"default": false,
			"description": "Whether the participant should be muted immediately after joining the conference.",
			"routing": {
				"send": {
					"property": "mute",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Dial Participant In"
					]
				}
			}
		},
		{
			"displayName": "Start Conference On Enter",
			"name": "start_conference_on_enter",
			"type": "boolean",
			"default": true,
			"description": "Whether the conference should be started after the participant joins the conference.",
			"routing": {
				"send": {
					"property": "start_conference_on_enter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Dial Participant In"
					]
				}
			}
		},
		{
			"displayName": "Supervisor Role",
			"name": "supervisor_role",
			"type": "options",
			"default": "whisper",
			"description": "Sets the joining participant as a supervisor for the conference. A conference can have multiple supervisors. \"barge\" means the supervisor enters the conference as a normal participant. This is the same as \"none\". \"monitor\" means the supervisor is muted but can hear all participants. \"whisper\" means that only the specified \"whisper_call_control_ids\" can hear the supervisor. Defaults to \"none\".",
			"options": [
				{
					"name": "Barge",
					"value": "barge"
				},
				{
					"name": "Monitor",
					"value": "monitor"
				},
				{
					"name": "None",
					"value": "none"
				},
				{
					"name": "Whisper",
					"value": "whisper"
				}
			],
			"routing": {
				"send": {
					"property": "supervisor_role",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Dial Participant In"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "To",
			"name": "to",
			"type": "string",
			"default": "+18005550100 or sip:username@sip.telnyx.com",
			"description": "The DID or SIP URI to dial out and bridge to the given call.",
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
						"Conference Commands"
					],
					"operation": [
						"Conference Dial Participant In"
					]
				}
			}
		},
		{
			"displayName": "Whisper Call Control Ids",
			"name": "whisper_call_control_ids",
			"type": "json",
			"default": "[\n  \"v2:Sg1xxxQ_U3ixxxyXT_VDNI3xxxazZdg6Vxxxs4-GNYxxxVaJPOhFMRQ\",\n  \"v2:qqpb0mmvd-ovhhBr0BUQQn0fld5jIboaaX3-De0DkqXHzbf8d75xkw\"\n]",
			"description": "Array of unique call_control_ids the joining supervisor can whisper to. If none provided, the supervisor will join the conference as a monitoring participant only.",
			"routing": {
				"send": {
					"property": "whisper_call_control_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Dial Participant In"
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
						"Conference Commands"
					],
					"operation": [
						"Conference Dial Participant In"
					]
				}
			}
		},
		{
			"displayName": "POST /conferences/{id}/actions/hold",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Hold Participants"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Uniquely identifies the conference by id or name",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Hold Participants"
					]
				}
			}
		},
		{
			"displayName": "Audio Url",
			"name": "audio_url",
			"type": "string",
			"default": "http://example.com/message.wav",
			"description": "The URL of a file to be played to the participants when they are put on hold. media_name and audio_url cannot be used together in one request.",
			"routing": {
				"send": {
					"property": "audio_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Hold Participants"
					]
				}
			}
		},
		{
			"displayName": "Call Control Ids",
			"name": "call_control_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of unique identifiers and tokens for controlling the call. When empty all participants will be placed on hold.",
			"routing": {
				"send": {
					"property": "call_control_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Hold Participants"
					]
				}
			}
		},
		{
			"displayName": "Media Name",
			"name": "media_name",
			"type": "string",
			"default": "my_media_uploaded_to_media_storage_api",
			"description": "The media_name of a file to be played to the participants when they are put on hold. The media_name must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. The file must either be a WAV or MP3 file.",
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
						"Conference Commands"
					],
					"operation": [
						"Conference Hold Participants"
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
						"Conference Commands"
					],
					"operation": [
						"Conference Hold Participants"
					]
				}
			}
		},
		{
			"displayName": "POST /conferences/{id}/actions/join",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Join"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Uniquely identifies the conference by id or name",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Join"
					]
				}
			}
		},
		{
			"displayName": "Beep Enabled",
			"name": "beep_enabled",
			"type": "options",
			"default": "on_exit",
			"description": "Whether a beep sound should be played when the participant joins and/or leaves the conference. Can be used to override the conference-level setting.",
			"options": [
				{
					"name": "Always",
					"value": "always"
				},
				{
					"name": "Never",
					"value": "never"
				},
				{
					"name": "On Enter",
					"value": "on_enter"
				},
				{
					"name": "On Exit",
					"value": "on_exit"
				}
			],
			"routing": {
				"send": {
					"property": "beep_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Join"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Call Control Id",
			"name": "call_control_id",
			"type": "string",
			"default": "v2:T02llQxIyaRkhfRKxgAP8nY511EhFLizdvdUKJiSw8d6A9BborherQczRrZvZakpWxBlpw48KyZQ==",
			"description": "Unique identifier and token for controlling the call",
			"routing": {
				"send": {
					"property": "call_control_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Join"
					]
				}
			}
		},
		{
			"displayName": "Client State",
			"name": "client_state",
			"type": "string",
			"default": "aGF2ZSBhIG5pY2UgZGF5ID1d",
			"description": "Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.",
			"routing": {
				"send": {
					"property": "client_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Join"
					]
				}
			}
		},
		{
			"displayName": "Command Id",
			"name": "command_id",
			"type": "string",
			"default": "891510ac-f3e4-11e8-af5b-de00688a4901",
			"description": "Use this field to avoid execution of duplicate commands. Telnyx will ignore subsequent commands with the same `command_id` as one that has already been executed.",
			"routing": {
				"send": {
					"property": "command_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Join"
					]
				}
			}
		},
		{
			"displayName": "End Conference On Exit",
			"name": "end_conference_on_exit",
			"type": "boolean",
			"default": true,
			"description": "Whether the conference should end and all remaining participants be hung up after the participant leaves the conference. Defaults to \"false\".",
			"routing": {
				"send": {
					"property": "end_conference_on_exit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Join"
					]
				}
			}
		},
		{
			"displayName": "Hold",
			"name": "hold",
			"type": "boolean",
			"default": true,
			"description": "Whether the participant should be put on hold immediately after joining the conference. Defaults to \"false\".",
			"routing": {
				"send": {
					"property": "hold",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Join"
					]
				}
			}
		},
		{
			"displayName": "Hold Audio Url",
			"name": "hold_audio_url",
			"type": "string",
			"default": "http://example.com/message.wav",
			"description": "The URL of a file to be played to the participant when they are put on hold after joining the conference. hold_media_name and hold_audio_url cannot be used together in one request. Takes effect only when \"start_conference_on_create\" is set to \"false\". This property takes effect only if \"hold\" is set to \"true\".",
			"routing": {
				"send": {
					"property": "hold_audio_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Join"
					]
				}
			}
		},
		{
			"displayName": "Hold Media Name",
			"name": "hold_media_name",
			"type": "string",
			"default": "my_media_uploaded_to_media_storage_api",
			"description": "The media_name of a file to be played to the participant when they are put on hold after joining the conference. The media_name must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. The file must either be a WAV or MP3 file. Takes effect only when \"start_conference_on_create\" is set to \"false\". This property takes effect only if \"hold\" is set to \"true\".",
			"routing": {
				"send": {
					"property": "hold_media_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Join"
					]
				}
			}
		},
		{
			"displayName": "Mute",
			"name": "mute",
			"type": "boolean",
			"default": true,
			"description": "Whether the participant should be muted immediately after joining the conference. Defaults to \"false\".",
			"routing": {
				"send": {
					"property": "mute",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Join"
					]
				}
			}
		},
		{
			"displayName": "Soft End Conference On Exit",
			"name": "soft_end_conference_on_exit",
			"type": "boolean",
			"default": true,
			"description": "Whether the conference should end after the participant leaves the conference. NOTE this doesn't hang up the other participants. Defaults to \"false\".",
			"routing": {
				"send": {
					"property": "soft_end_conference_on_exit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Join"
					]
				}
			}
		},
		{
			"displayName": "Start Conference On Enter",
			"name": "start_conference_on_enter",
			"type": "boolean",
			"default": true,
			"description": "Whether the conference should be started after the participant joins the conference. Defaults to \"false\".",
			"routing": {
				"send": {
					"property": "start_conference_on_enter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Join"
					]
				}
			}
		},
		{
			"displayName": "Supervisor Role",
			"name": "supervisor_role",
			"type": "options",
			"default": "whisper",
			"description": "Sets the joining participant as a supervisor for the conference. A conference can have multiple supervisors. \"barge\" means the supervisor enters the conference as a normal participant. This is the same as \"none\". \"monitor\" means the supervisor is muted but can hear all participants. \"whisper\" means that only the specified \"whisper_call_control_ids\" can hear the supervisor. Defaults to \"none\".",
			"options": [
				{
					"name": "Barge",
					"value": "barge"
				},
				{
					"name": "Monitor",
					"value": "monitor"
				},
				{
					"name": "None",
					"value": "none"
				},
				{
					"name": "Whisper",
					"value": "whisper"
				}
			],
			"routing": {
				"send": {
					"property": "supervisor_role",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Join"
					]
				}
			}
		},
		{
			"displayName": "Whisper Call Control Ids",
			"name": "whisper_call_control_ids",
			"type": "json",
			"default": "[\n  \"v2:Sg1xxxQ_U3ixxxyXT_VDNI3xxxazZdg6Vxxxs4-GNYxxxVaJPOhFMRQ\",\n  \"v2:qqpb0mmvd-ovhhBr0BUQQn0fld5jIboaaX3-De0DkqXHzbf8d75xkw\"\n]",
			"description": "Array of unique call_control_ids the joining supervisor can whisper to. If none provided, the supervisor will join the conference as a monitoring participant only.",
			"routing": {
				"send": {
					"property": "whisper_call_control_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Join"
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
						"Conference Commands"
					],
					"operation": [
						"Conference Join"
					]
				}
			}
		},
		{
			"displayName": "POST /conferences/{id}/actions/leave",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Leave"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Uniquely identifies the conference by id or name",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Leave"
					]
				}
			}
		},
		{
			"displayName": "Beep Enabled",
			"name": "beep_enabled",
			"type": "options",
			"default": "on_exit",
			"description": "Whether a beep sound should be played when the participant leaves the conference. Can be used to override the conference-level setting.",
			"options": [
				{
					"name": "Always",
					"value": "always"
				},
				{
					"name": "Never",
					"value": "never"
				},
				{
					"name": "On Enter",
					"value": "on_enter"
				},
				{
					"name": "On Exit",
					"value": "on_exit"
				}
			],
			"routing": {
				"send": {
					"property": "beep_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Leave"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Call Control Id",
			"name": "call_control_id",
			"type": "string",
			"default": "f91269aa-61d1-417f-97b3-10e020e8bc47",
			"description": "Unique identifier and token for controlling the call",
			"routing": {
				"send": {
					"property": "call_control_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Leave"
					]
				}
			}
		},
		{
			"displayName": "Command Id",
			"name": "command_id",
			"type": "string",
			"default": "891510ac-f3e4-11e8-af5b-de00688a4901",
			"description": "Use this field to avoid execution of duplicate commands. Telnyx will ignore subsequent commands with the same `command_id` as one that has already been executed.",
			"routing": {
				"send": {
					"property": "command_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Leave"
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
						"Conference Commands"
					],
					"operation": [
						"Conference Leave"
					]
				}
			}
		},
		{
			"displayName": "POST /conferences/{id}/actions/mute",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Mute Participants"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Uniquely identifies the conference by id or name",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Mute Participants"
					]
				}
			}
		},
		{
			"displayName": "Call Control Ids",
			"name": "call_control_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Array of unique identifiers and tokens for controlling the call. When empty all participants will be muted.",
			"routing": {
				"send": {
					"property": "call_control_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Mute Participants"
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
						"Conference Commands"
					],
					"operation": [
						"Conference Mute Participants"
					]
				}
			}
		},
		{
			"displayName": "POST /conferences/{id}/actions/play",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Play Audio"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Uniquely identifies the conference by id or name",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Play Audio"
					]
				}
			}
		},
		{
			"displayName": "Audio Url",
			"name": "audio_url",
			"type": "string",
			"default": "http://example.com/message.wav",
			"description": "The URL of a file to be played back in the conference. media_name and audio_url cannot be used together in one request.",
			"routing": {
				"send": {
					"property": "audio_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Play Audio"
					]
				}
			}
		},
		{
			"displayName": "Call Control Ids",
			"name": "call_control_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of call control ids identifying participants the audio file should be played to. If not given, the audio file will be played to the entire conference.",
			"routing": {
				"send": {
					"property": "call_control_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Play Audio"
					]
				}
			}
		},
		{
			"displayName": "Loop",
			"name": "loop",
			"type": "string",
			"default": "",
			"description": "The number of times the audio file should be played. If supplied, the value must be an integer between 1 and 100, or the special string `infinity` for an endless loop.",
			"routing": {
				"send": {
					"property": "loop",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Play Audio"
					]
				}
			}
		},
		{
			"displayName": "Media Name",
			"name": "media_name",
			"type": "string",
			"default": "my_media_uploaded_to_media_storage_api",
			"description": "The media_name of a file to be played back in the conference. The media_name must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. The file must either be a WAV or MP3 file.",
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
						"Conference Commands"
					],
					"operation": [
						"Conference Play Audio"
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
						"Conference Commands"
					],
					"operation": [
						"Conference Play Audio"
					]
				}
			}
		},
		{
			"displayName": "POST /conferences/{id}/actions/record_start",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Start Recording"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Specifies the conference to record by id or name",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Start Recording"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Channels",
			"name": "channels",
			"type": "options",
			"default": "single",
			"description": "When `dual`, final audio file will be stereo recorded with the first leg on channel A, and the rest on channel B.",
			"options": [
				{
					"name": "Single",
					"value": "single"
				},
				{
					"name": "Dual",
					"value": "dual"
				}
			],
			"routing": {
				"send": {
					"property": "channels",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Start Recording"
					]
				}
			}
		},
		{
			"displayName": "Client State",
			"name": "client_state",
			"type": "string",
			"default": "aGF2ZSBhIG5pY2UgZGF5ID1d",
			"description": "Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.",
			"routing": {
				"send": {
					"property": "client_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Start Recording"
					]
				}
			}
		},
		{
			"displayName": "Command Id",
			"name": "command_id",
			"type": "string",
			"default": "891510ac-f3e4-11e8-af5b-de00688a4901",
			"description": "Use this field to avoid duplicate commands. Telnyx will ignore commands with the same `command_id`.",
			"routing": {
				"send": {
					"property": "command_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Start Recording"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Format",
			"name": "format",
			"type": "options",
			"default": "mp3",
			"description": "The audio file format used when storing the call recording. Can be either `mp3` or `wav`.",
			"options": [
				{
					"name": "Wav",
					"value": "wav"
				},
				{
					"name": "Mp 3",
					"value": "mp3"
				}
			],
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Start Recording"
					]
				}
			}
		},
		{
			"displayName": "Max Length",
			"name": "max_length",
			"type": "number",
			"default": 100,
			"description": "Defines the maximum length for the recording in seconds. Minimum value is 0. Maximum value is 14400. Default is 0 (infinite)",
			"routing": {
				"send": {
					"property": "max_length",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Start Recording"
					]
				}
			}
		},
		{
			"displayName": "Play Beep",
			"name": "play_beep",
			"type": "boolean",
			"default": true,
			"description": "If enabled, a beep sound will be played at the start of a recording.",
			"routing": {
				"send": {
					"property": "play_beep",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Start Recording"
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
						"Conference Commands"
					],
					"operation": [
						"Conference Start Recording"
					]
				}
			}
		},
		{
			"displayName": "POST /conferences/{id}/actions/record_stop",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Stop Recording"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Specifies the conference to stop the recording for by id or name",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Stop Recording"
					]
				}
			}
		},
		{
			"displayName": "Client State",
			"name": "client_state",
			"type": "string",
			"default": "aGF2ZSBhIG5pY2UgZGF5ID1d",
			"description": "Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.",
			"routing": {
				"send": {
					"property": "client_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Stop Recording"
					]
				}
			}
		},
		{
			"displayName": "Command Id",
			"name": "command_id",
			"type": "string",
			"default": "891510ac-f3e4-11e8-af5b-de00688a4901",
			"description": "Use this field to avoid duplicate commands. Telnyx will ignore commands with the same `command_id`.",
			"routing": {
				"send": {
					"property": "command_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Stop Recording"
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
						"Conference Commands"
					],
					"operation": [
						"Conference Stop Recording"
					]
				}
			}
		},
		{
			"displayName": "POST /conferences/{id}/actions/speak",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Speak Text"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Specifies the conference by id or name",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Speak Text"
					]
				}
			}
		},
		{
			"displayName": "Call Control Ids",
			"name": "call_control_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Call Control IDs of participants who will hear the spoken text. When empty all participants will hear the spoken text.",
			"routing": {
				"send": {
					"property": "call_control_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Speak Text"
					]
				}
			}
		},
		{
			"displayName": "Command Id",
			"name": "command_id",
			"type": "string",
			"default": "891510ac-f3e4-11e8-af5b-de00688a4901",
			"description": "Use this field to avoid execution of duplicate commands. Telnyx will ignore subsequent commands with the same `command_id` as one that has already been executed.",
			"routing": {
				"send": {
					"property": "command_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Speak Text"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Language",
			"name": "language",
			"type": "options",
			"default": "en-US",
			"description": "The language used to speak the text.",
			"options": [
				{
					"name": "Arb",
					"value": "arb"
				},
				{
					"name": "Cmn CN",
					"value": "cmn-CN"
				},
				{
					"name": "Cy GB",
					"value": "cy-GB"
				},
				{
					"name": "Da DK",
					"value": "da-DK"
				},
				{
					"name": "De DE",
					"value": "de-DE"
				},
				{
					"name": "En AU",
					"value": "en-AU"
				},
				{
					"name": "En GB",
					"value": "en-GB"
				},
				{
					"name": "En GB WLS",
					"value": "en-GB-WLS"
				},
				{
					"name": "En IN",
					"value": "en-IN"
				},
				{
					"name": "En US",
					"value": "en-US"
				},
				{
					"name": "Es ES",
					"value": "es-ES"
				},
				{
					"name": "Es MX",
					"value": "es-MX"
				},
				{
					"name": "Es US",
					"value": "es-US"
				},
				{
					"name": "Fr CA",
					"value": "fr-CA"
				},
				{
					"name": "Fr FR",
					"value": "fr-FR"
				},
				{
					"name": "Hi IN",
					"value": "hi-IN"
				},
				{
					"name": "Is IS",
					"value": "is-IS"
				},
				{
					"name": "It IT",
					"value": "it-IT"
				},
				{
					"name": "Ja JP",
					"value": "ja-JP"
				},
				{
					"name": "Ko KR",
					"value": "ko-KR"
				},
				{
					"name": "Nb NO",
					"value": "nb-NO"
				},
				{
					"name": "Nl NL",
					"value": "nl-NL"
				},
				{
					"name": "Pl PL",
					"value": "pl-PL"
				},
				{
					"name": "Pt BR",
					"value": "pt-BR"
				},
				{
					"name": "Pt PT",
					"value": "pt-PT"
				},
				{
					"name": "Ro RO",
					"value": "ro-RO"
				},
				{
					"name": "Ru RU",
					"value": "ru-RU"
				},
				{
					"name": "Sv SE",
					"value": "sv-SE"
				},
				{
					"name": "Tr TR",
					"value": "tr-TR"
				}
			],
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
						"Conference Commands"
					],
					"operation": [
						"Conference Speak Text"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Payload",
			"name": "payload",
			"type": "string",
			"default": "Say this to participants",
			"description": "The text or SSML to be converted into speech. There is a 5,000 character limit.",
			"routing": {
				"send": {
					"property": "payload",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Speak Text"
					]
				}
			}
		},
		{
			"displayName": "Payload Type",
			"name": "payload_type",
			"type": "options",
			"default": "ssml",
			"description": "The type of the provided payload. The payload can either be plain text, or Speech Synthesis Markup Language (SSML).",
			"options": [
				{
					"name": "Text",
					"value": "text"
				},
				{
					"name": "Ssml",
					"value": "ssml"
				}
			],
			"routing": {
				"send": {
					"property": "payload_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Speak Text"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Voice",
			"name": "voice",
			"type": "options",
			"default": "female",
			"description": "The gender of the voice used to speak the text.",
			"options": [
				{
					"name": "Male",
					"value": "male"
				},
				{
					"name": "Female",
					"value": "female"
				}
			],
			"routing": {
				"send": {
					"property": "voice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Speak Text"
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
						"Conference Commands"
					],
					"operation": [
						"Conference Speak Text"
					]
				}
			}
		},
		{
			"displayName": "POST /conferences/{id}/actions/stop",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Stop Audio"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Uniquely identifies the conference by id or name",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Stop Audio"
					]
				}
			}
		},
		{
			"displayName": "Call Control Ids",
			"name": "call_control_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of call control ids identifying participants the audio file should stop be played to. If not given, the audio will be stoped to the entire conference.",
			"routing": {
				"send": {
					"property": "call_control_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Stop Audio"
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
						"Conference Commands"
					],
					"operation": [
						"Conference Stop Audio"
					]
				}
			}
		},
		{
			"displayName": "POST /conferences/{id}/actions/unhold",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Unhold Participants"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Uniquely identifies the conference by id or name",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Unhold Participants"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Call Control Ids",
			"name": "call_control_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of unique identifiers and tokens for controlling the call. Enter each call control ID to be unheld.",
			"routing": {
				"send": {
					"property": "call_control_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Unhold Participants"
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
						"Conference Commands"
					],
					"operation": [
						"Conference Unhold Participants"
					]
				}
			}
		},
		{
			"displayName": "POST /conferences/{id}/actions/unmute",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Unmute Participants"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Uniquely identifies the conference by id or name",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Unmute Participants"
					]
				}
			}
		},
		{
			"displayName": "Call Control Ids",
			"name": "call_control_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of unique identifiers and tokens for controlling the call. Enter each call control ID to be unmuted. When empty all participants will be unmuted.",
			"routing": {
				"send": {
					"property": "call_control_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Unmute Participants"
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
						"Conference Commands"
					],
					"operation": [
						"Conference Unmute Participants"
					]
				}
			}
		},
		{
			"displayName": "POST /conferences/{id}/actions/update",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Update"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Uniquely identifies the conference by id or name",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Call Control Id",
			"name": "call_control_id",
			"type": "string",
			"default": "v2:T02llQxIyaRkhfRKxgAP8nY511EhFLizdvdUKJiSw8d6A9BborherQczRrZvZakpWxBlpw48KyZQ==",
			"description": "Unique identifier and token for controlling the call",
			"routing": {
				"send": {
					"property": "call_control_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Update"
					]
				}
			}
		},
		{
			"displayName": "Command Id",
			"name": "command_id",
			"type": "string",
			"default": "891510ac-f3e4-11e8-af5b-de00688a4901",
			"description": "Use this field to avoid execution of duplicate commands. Telnyx will ignore subsequent commands with the same `command_id` as one that has already been executed.",
			"routing": {
				"send": {
					"property": "command_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Supervisor Role",
			"name": "supervisor_role",
			"type": "options",
			"default": "whisper",
			"description": "Sets the participant as a supervisor for the conference. A conference can have multiple supervisors. \"barge\" means the supervisor enters the conference as a normal participant. This is the same as \"none\". \"monitor\" means the supervisor is muted but can hear all participants. \"whisper\" means that only the specified \"whisper_call_control_ids\" can hear the supervisor. Defaults to \"none\".",
			"options": [
				{
					"name": "Barge",
					"value": "barge"
				},
				{
					"name": "Monitor",
					"value": "monitor"
				},
				{
					"name": "None",
					"value": "none"
				},
				{
					"name": "Whisper",
					"value": "whisper"
				}
			],
			"routing": {
				"send": {
					"property": "supervisor_role",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Update"
					]
				}
			}
		},
		{
			"displayName": "Whisper Call Control Ids",
			"name": "whisper_call_control_ids",
			"type": "json",
			"default": "[\n  \"v2:Sg1xxxQ_U3ixxxyXT_VDNI3xxxazZdg6Vxxxs4-GNYxxxVaJPOhFMRQ\",\n  \"v2:qqpb0mmvd-ovhhBr0BUQQn0fld5jIboaaX3-De0DkqXHzbf8d75xkw\"\n]",
			"description": "Array of unique call_control_ids the supervisor can whisper to. If none provided, the supervisor will join the conference as a monitoring participant only.",
			"routing": {
				"send": {
					"property": "whisper_call_control_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conference Commands"
					],
					"operation": [
						"Conference Update"
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
						"Conference Commands"
					],
					"operation": [
						"Conference Update"
					]
				}
			}
		},
];
