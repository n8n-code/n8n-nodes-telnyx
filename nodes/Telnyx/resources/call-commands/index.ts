import type { INodeProperties } from 'n8n-workflow';

export const callCommandsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					]
				}
			},
			"options": [
				{
					"name": "Call Dial",
					"value": "Call Dial",
					"action": "Dial",
					"description": "Dial a number or SIP URI from a given connection. A successful response will include a `call_leg_id` which can be used to correlate the command with subsequent webhooks.\n\n**Expected Webhooks:**\n\n- `call.initiated`\n- `call.answered` or `call.hangup`\n- `call.machine.detection.ended` if `answering_machine_detection` was requested\n- `call.machine.greeting.ended` if `answering_machine_detection` was set to `detect_beep`, `greeting_end` or `detect_words`",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/calls"
						}
					}
				},
				{
					"name": "Call Answer",
					"value": "Call Answer",
					"action": "Answer call",
					"description": "Answer an incoming call. You must issue this command before executing subsequent commands on an incoming call.\n\n**Expected Webhooks:**\n\n- `call.answered`\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/calls/{{$parameter[\"call_control_id\"]}}/actions/answer"
						}
					}
				},
				{
					"name": "Call Bridge",
					"value": "Call Bridge",
					"action": "Bridge calls",
					"description": "Bridge two call control calls.\n\n**Expected Webhooks:**\n\n- `call.bridged` for Leg A\n- `call.bridged` for Leg B\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/calls/{{$parameter[\"call_control_id\"]}}/actions/bridge"
						}
					}
				},
				{
					"name": "Call Enqueue",
					"value": "Call Enqueue",
					"action": "Enqueue call",
					"description": "Put the call in a queue.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/calls/{{$parameter[\"call_control_id\"]}}/actions/enqueue"
						}
					}
				},
				{
					"name": "Call Fork Start",
					"value": "Call Fork Start",
					"action": "Forking start",
					"description": "Call forking allows you to stream the media from a call to a specific target in realtime. \nThis stream can be used to enable realtime audio analysis to support a \nvariety of use cases, including fraud detection, or the creation of AI-generated audio responses. \nRequests must specify either the `target` attribute or the `rx` and `tx` attributes.\n\n**Expected Webhooks:**\n\n- `call.fork.started`\n- `call.fork.stopped`\n\n**Simple Telnyx RTP Encapsulation Protocol (STREP)**\n\n*Note: This header/encapsulation is not used when the `rx` and `tx`\nparameters have been specified; it only applies when media is forked\nusing the `target` attribute.*\n\nIf the destination for forked media is specified using the \"target\"\nattribute, the RTP will be encapsulated in an extra Telnyx protocol,\nwhich adds a 24 byte header to the RTP payload in each packet. The STREP\nheader includes the Call Control `call_leg_id` for stream\nidentification, along with bits that represent the direction (inbound or\noutbound) of the media. This 24-byte header sits between the UDP header\nand the RTP header.\n\nThe STREP header makes it possible to fork RTP for multiple calls (or\ntwo RTP streams for the same call) to the same IP:port, where the\nstreams can be demultiplexed by your application using the information\nin the header. Of course, it's still possible to ignore this header\ncompletely, for example, if sending forked media for different calls to\ndifferent ports or IP addresses. In this case, simply strip 24 bytes\n(or use the second byte to find the header length) from the received UDP\npayload to get the RTP (RTP header and payload).\n\n```\nSTREP Specification\n\n  0                   1                   2                   3\n  0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n |1 1|Version|L|D|    HeaderLen  |  reserved (2 bytes)           |\n +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n |       reserved (4 bytes, for UDP ports or anything else)      |\n +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n |               The call_leg_id                                 |\n |                   from Call Control                           |\n |                       (128 bits / 16 bytes)                   |\n |                           (this is binary data)               |\n +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\n 11\n   Static bits 11, always set to 11 to easily distinguish forked media\n   from RTP (10) and T.38 media (usually 00) and SIP (which begins\n   with a capital letter, so begins with bits 01). This is a magic number.\n\n Version\n   Four bits to indicate the version number of the protocol, starting at 0001.\n\n L\n   One bit to represent the leg of the call (A or B).\n   0 represents the A (first) leg of the call.\n   1 represents the B (second) leg of the call.\n\n D\n   One bit to represent the direction of this RTP stream.\n   0 represents media received by Telnyx.\n   1 represents media transmitted by Telnyx.\n\n HeaderLen (1 byte)\n   The length of the header in bytes.\n   Note that this value does not include the length of the payload. The total\n   size of the RTP can be calculated by subtracting the HeaderLen from the UDP\n   length (minus 8 for the UDP header).\n   In version 1, this value will always be 24.\n\n Reserved (6 bytes)\n   Reserved for future use and to make sure that the header is a multiple of 32 bits\n\n Call Leg ID\n   A 128-bit identifier for the call leg.\n   This is the call_leg_id from Call Control.\n```\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/calls/{{$parameter[\"call_control_id\"]}}/actions/fork_start"
						}
					}
				},
				{
					"name": "Call Fork Stop",
					"value": "Call Fork Stop",
					"action": "Forking stop",
					"description": "Stop forking a call.\n\n**Expected Webhooks:**\n\n- `call.fork.stopped`\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/calls/{{$parameter[\"call_control_id\"]}}/actions/fork_stop"
						}
					}
				},
				{
					"name": "Call Gather Stop",
					"value": "Call Gather Stop",
					"action": "Gather stop",
					"description": "Stop current gather.\n\n**Expected Webhooks:**\n\n- `call.gather.ended`\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/calls/{{$parameter[\"call_control_id\"]}}/actions/gather_stop"
						}
					}
				},
				{
					"name": "Call Gather Using Audio",
					"value": "Call Gather Using Audio",
					"action": "Gather using audio",
					"description": "Play an audio file on the call until the required DTMF signals are gathered to build interactive menus.\n\nYou can pass a list of valid digits along with an 'invalid_audio_url', which will be played back at the beginning of each prompt. Playback will be interrupted when a DTMF signal is received. The [Answer](/docs/api/v2/call-control/Call-Commands#CallControlAnswer) command must be issued before the `gather_using_audio` command.\n\n**Expected Webhooks:**\n\n- `call.playback.started`\n- `call.playback.ended`\n- `call.dtmf.received` (you may receive many of these webhooks)\n- `call.gather.ended`\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/calls/{{$parameter[\"call_control_id\"]}}/actions/gather_using_audio"
						}
					}
				},
				{
					"name": "Call Gather Using Speak",
					"value": "Call Gather Using Speak",
					"action": "Gather using speak",
					"description": "Convert text to speech and play it on the call until the required DTMF signals are gathered to build interactive menus.\n\nYou can pass a list of valid digits along with an 'invalid_payload', which will be played back at the beginning of each prompt. Speech will be interrupted when a DTMF signal is received. The [Answer](/docs/api/v2/call-control/Call-Commands#CallControlAnswer) command must be issued before the `gather_using_speak` command.\n\n**Expected Webhooks:**\n\n- `call.dtmf.received` (you may receive many of these webhooks)\n- `call.gather.ended`\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/calls/{{$parameter[\"call_control_id\"]}}/actions/gather_using_speak"
						}
					}
				},
				{
					"name": "Call Hangup",
					"value": "Call Hangup",
					"action": "Hangup call",
					"description": "Hang up the call.\n\n**Expected Webhooks:**\n\n- `call.hangup`\n- `call.recording.saved`\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/calls/{{$parameter[\"call_control_id\"]}}/actions/hangup"
						}
					}
				},
				{
					"name": "Leave Queue",
					"value": "Leave Queue",
					"action": "Remove call from a queue",
					"description": "Removes the call from a queue.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/calls/{{$parameter[\"call_control_id\"]}}/actions/leave_queue"
						}
					}
				},
				{
					"name": "Call Playback Start",
					"value": "Call Playback Start",
					"action": "Play audio URL",
					"description": "Play an audio file on the call. If multiple play audio commands are issued consecutively,\nthe audio files will be placed in a queue awaiting playback.\n\n*Notes:*\n\n- When `overlay` is enabled, `target_legs` is limited to `self`.\n- A customer cannot Play Audio with `overlay=true` unless there is a Play Audio with `overlay=false` actively playing.\n\n**Expected Webhooks:**\n\n- `call.playback.started`\n- `call.playback.ended`\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/calls/{{$parameter[\"call_control_id\"]}}/actions/playback_start"
						}
					}
				},
				{
					"name": "Call Playback Stop",
					"value": "Call Playback Stop",
					"action": "Stop audio playback",
					"description": "Stop audio being played on the call.\n\n**Expected Webhooks:**\n\n- `call.playback.ended` or `call.speak.ended`\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/calls/{{$parameter[\"call_control_id\"]}}/actions/playback_stop"
						}
					}
				},
				{
					"name": "Call Record Pause",
					"value": "Call Record Pause",
					"action": "Record pause",
					"description": "Pause recording the call. Recording can be resumed via Resume recording command.\n\n**Expected Webhooks:**\n\nThere are no webhooks associated with this command.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/calls/{{$parameter[\"call_control_id\"]}}/actions/record_pause"
						}
					}
				},
				{
					"name": "Call Record Resume",
					"value": "Call Record Resume",
					"action": "Record resume",
					"description": "Resume recording the call.\n\n**Expected Webhooks:**\n\nThere are no webhooks associated with this command.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/calls/{{$parameter[\"call_control_id\"]}}/actions/record_resume"
						}
					}
				},
				{
					"name": "Call Record Start",
					"value": "Call Record Start",
					"action": "Recording start",
					"description": "Start recording the call. Recording will stop on call hang-up, or can be initiated via the Stop Recording command.\n\n**Expected Webhooks:**\n\n- `call.recording.saved`\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/calls/{{$parameter[\"call_control_id\"]}}/actions/record_start"
						}
					}
				},
				{
					"name": "Call Record Stop",
					"value": "Call Record Stop",
					"action": "Recording stop",
					"description": "Stop recording the call.\n\n**Expected Webhooks:**\n\n- `call.recording.saved`\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/calls/{{$parameter[\"call_control_id\"]}}/actions/record_stop"
						}
					}
				},
				{
					"name": "Call Refer",
					"value": "Call Refer",
					"action": "SIP Refer a call",
					"description": "Initiate a SIP Refer on a Call Control call. You can initiate a SIP Refer at any point in the duration of a call.\n\n**Expected Webhooks:**\n\n- `call.refer.started`\n- `call.refer.completed`\n- `call.refer.failed`\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/calls/{{$parameter[\"call_control_id\"]}}/actions/refer"
						}
					}
				},
				{
					"name": "Call Reject",
					"value": "Call Reject",
					"action": "Reject a call",
					"description": "Reject an incoming call.\n\n**Expected Webhooks:**\n\n- `call.hangup`\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/calls/{{$parameter[\"call_control_id\"]}}/actions/reject"
						}
					}
				},
				{
					"name": "Call Send DTMF",
					"value": "Call Send DTMF",
					"action": "Send DTMF",
					"description": "Sends DTMF tones from this leg. DTMF tones will be heard by the other end of the call.\n\n**Expected Webhooks:**\n\nThere are no webhooks associated with this command.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/calls/{{$parameter[\"call_control_id\"]}}/actions/send_dtmf"
						}
					}
				},
				{
					"name": "Call Speak",
					"value": "Call Speak",
					"action": "Speak text",
					"description": "Convert text to speech and play it back on the call. If multiple speak text commands are issued consecutively, the audio files will be placed in a queue awaiting playback.\n\n**Expected Webhooks:**\n\n- `call.speak.started`\n- `call.speak.ended`\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/calls/{{$parameter[\"call_control_id\"]}}/actions/speak"
						}
					}
				},
				{
					"name": "Call Transcription Start",
					"value": "Call Transcription Start",
					"action": "Transcription start",
					"description": "Start real-time transcription. Transcription will stop on call hang-up, or can be initiated via the Transcription stop command.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/calls/{{$parameter[\"call_control_id\"]}}/actions/transcription_start"
						}
					}
				},
				{
					"name": "Call Transcription Stop",
					"value": "Call Transcription Stop",
					"action": "Transcription stop",
					"description": "Stop real-time transcription.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/calls/{{$parameter[\"call_control_id\"]}}/actions/transcription_stop"
						}
					}
				},
				{
					"name": "Call Transfer",
					"value": "Call Transfer",
					"action": "Transfer call",
					"description": "Transfer a call to a new destination. If the transfer is unsuccessful, a `call.hangup` webhook for the other call (Leg B) will be sent indicating that the transfer could not be completed. The original call will remain active and may be issued additional commands, potentially transfering the call to an alternate destination.\n\n**Expected Webhooks:**\n\n- `call.initiated`\n- `call.bridged` to Leg B\n- `call.answered` or `call.hangup`\n- `call.machine.detection.ended` if `answering_machine_detection` was requested\n- `call.machine.greeting.ended` if `answering_machine_detection` was set to `detect_beep`, `greeting_end` or `detect_words`",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/calls/{{$parameter[\"call_control_id\"]}}/actions/transfer"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /calls",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Dial"
					]
				}
			}
		},
		{
			"displayName": "Answering Machine Detection",
			"name": "answering_machine_detection",
			"type": "options",
			"default": "disabled",
			"description": "Enables Answering Machine Detection. When a call is answered, Telnyx runs real-time detection to determine if it was picked up by a human or a machine and sends an `call.machine.detection.ended` webhook with the analysis result. If 'greeting_end' or 'detect_words' is used and a 'machine' is detected, you will receive another 'call.machine.greeting.ended' webhook when the answering machine greeting ends with a beep or silence. If `detect_beep` is used, you will only receive 'call.machine.greeting.ended' if a beep is detected.",
			"options": [
				{
					"name": "Detect",
					"value": "detect"
				},
				{
					"name": "Detect Beep",
					"value": "detect_beep"
				},
				{
					"name": "Detect Words",
					"value": "detect_words"
				},
				{
					"name": "Greeting End",
					"value": "greeting_end"
				},
				{
					"name": "Disabled",
					"value": "disabled"
				}
			],
			"routing": {
				"send": {
					"property": "answering_machine_detection",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Dial"
					]
				}
			}
		},
		{
			"displayName": "Answering Machine Detection Config",
			"name": "answering_machine_detection_config",
			"type": "json",
			"default": "{\n  \"after_greeting_silence_millis\": 1000,\n  \"between_words_silence_millis\": 100,\n  \"greeting_duration_millis\": 1500,\n  \"greeting_silence_duration_millis\": 2000,\n  \"greeting_total_analysis_time_millis\": 7500,\n  \"initial_silence_millis\": 1800,\n  \"maximum_number_of_words\": 3,\n  \"maximum_word_length_millis\": 2000,\n  \"silence_threshold\": 512,\n  \"total_analysis_time_millis\": 5000\n}",
			"description": "Optional configuration parameters to modify 'answering_machine_detection' performance.",
			"routing": {
				"send": {
					"property": "answering_machine_detection_config",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Dial"
					]
				}
			}
		},
		{
			"displayName": "Audio Url",
			"name": "audio_url",
			"type": "string",
			"default": "http://example.com/message.wav",
			"description": "The URL of a file to be played back to the callee when the call is answered. The URL can point to either a WAV or MP3 file. media_name and audio_url cannot be used together in one request.",
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
						"Call Commands"
					],
					"operation": [
						"Call Dial"
					]
				}
			}
		},
		{
			"displayName": "Billing Group Id",
			"name": "billing_group_id",
			"type": "string",
			"default": "f5586561-8ff0-4291-a0ac-84fe544797bd",
			"description": "Use this field to set the Billing Group ID for the call. Must be a valid and existing Billing Group ID.",
			"routing": {
				"send": {
					"property": "billing_group_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Dial"
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
						"Call Commands"
					],
					"operation": [
						"Call Dial"
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
						"Call Commands"
					],
					"operation": [
						"Call Dial"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Connection Id",
			"name": "connection_id",
			"type": "string",
			"default": "",
			"description": "The ID of the Call Control App (formerly ID of the connection) to be used when dialing the destination.",
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
						"Call Commands"
					],
					"operation": [
						"Call Dial"
					]
				}
			}
		},
		{
			"displayName": "Custom Headers",
			"name": "custom_headers",
			"type": "json",
			"default": "[\n  {\n    \"name\": \"head_1\",\n    \"value\": \"val_1\"\n  },\n  {\n    \"name\": \"head_2\",\n    \"value\": \"val_2\"\n  }\n]",
			"description": "Custom headers to be added to the SIP INVITE.",
			"routing": {
				"send": {
					"property": "custom_headers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Dial"
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
			"description": "The `from` number to be used as the caller id presented to the destination (`to` number). The number should be in +E164 format. This attribute will default to the `from` number of the original call if omitted.",
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
						"Call Commands"
					],
					"operation": [
						"Call Dial"
					]
				}
			}
		},
		{
			"displayName": "From Display Name",
			"name": "from_display_name",
			"type": "string",
			"default": "Company Name",
			"description": "The `from_display_name` string to be used as the caller id name (SIP From Display Name) presented to the destination (`to` number). The string should have a maximum of 128 characters, containing only letters, numbers, spaces, and -_~!.+ special characters. If ommited, the display name will be the same as the number in the `from` field.",
			"routing": {
				"send": {
					"property": "from_display_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Dial"
					]
				}
			}
		},
		{
			"displayName": "Link To",
			"name": "link_to",
			"type": "string",
			"default": "ilditnZK_eVysupV21KzmzN_sM29ygfauQojpm4BgFtfX5hXAcjotg==",
			"description": "Use another call's control id for sharing the same call session id",
			"routing": {
				"send": {
					"property": "link_to",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Dial"
					]
				}
			}
		},
		{
			"displayName": "Media Name",
			"name": "media_name",
			"type": "string",
			"default": "my_media_uploaded_to_media_storage_api",
			"description": "The media_name of a file to be played back to the callee when the call is answered. The media_name must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. The file must either be a WAV or MP3 file.",
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
						"Call Commands"
					],
					"operation": [
						"Call Dial"
					]
				}
			}
		},
		{
			"displayName": "Sip Auth Password",
			"name": "sip_auth_password",
			"type": "string",
			"default": "",
			"description": "SIP Authentication password used for SIP challenges.",
			"routing": {
				"send": {
					"property": "sip_auth_password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Dial"
					]
				}
			}
		},
		{
			"displayName": "Sip Auth Username",
			"name": "sip_auth_username",
			"type": "string",
			"default": "",
			"description": "SIP Authentication username used for SIP challenges.",
			"routing": {
				"send": {
					"property": "sip_auth_username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Dial"
					]
				}
			}
		},
		{
			"displayName": "Time Limit Secs",
			"name": "time_limit_secs",
			"type": "number",
			"default": 600,
			"description": "Sets the maximum duration of a Call Control Leg in seconds. If the time limit is reached, the call will hangup and a `call.hangup` webhook with a `hangup_cause` of `time_limit` will be sent. For example, by setting a time limit of 120 seconds, a Call Leg will be automatically terminated two minutes after being answered. The default time limit is 14400 seconds or 4 hours and this is also the maximum allowed call length.",
			"routing": {
				"send": {
					"property": "time_limit_secs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Dial"
					]
				}
			}
		},
		{
			"displayName": "Timeout Secs",
			"name": "timeout_secs",
			"type": "number",
			"default": 60,
			"description": "The number of seconds that Telnyx will wait for the call to be answered by the destination to which it is being called. If the timeout is reached before an answer is received, the call will hangup and a `call.hangup` webhook with a `hangup_cause` of `timeout` will be sent. Minimum value is 5 seconds. Maximum value is 120 seconds.",
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
						"Call Commands"
					],
					"operation": [
						"Call Dial"
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
			"description": "The DID or SIP URI to dial out to.",
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
						"Call Commands"
					],
					"operation": [
						"Call Dial"
					]
				}
			}
		},
		{
			"displayName": "Webhook Url",
			"name": "webhook_url",
			"type": "string",
			"default": "https://www.example.com/server-b/",
			"description": "Use this field to override the URL for which Telnyx will send subsequent webhooks to for this call.",
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
						"Call Commands"
					],
					"operation": [
						"Call Dial"
					]
				}
			}
		},
		{
			"displayName": "Webhook Url Method",
			"name": "webhook_url_method",
			"type": "options",
			"default": "GET",
			"description": "HTTP request type used for `webhook_url`.",
			"options": [
				{
					"name": "POST",
					"value": "POST"
				},
				{
					"name": "GET",
					"value": "GET"
				}
			],
			"routing": {
				"send": {
					"property": "webhook_url_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Dial"
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
						"Call Commands"
					],
					"operation": [
						"Call Dial"
					]
				}
			}
		},
		{
			"displayName": "POST /calls/{call_control_id}/actions/answer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Answer"
					]
				}
			}
		},
		{
			"displayName": "Call Control Id",
			"name": "call_control_id",
			"required": true,
			"description": "Unique identifier and token for controlling the call",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Answer"
					]
				}
			}
		},
		{
			"displayName": "Billing Group Id",
			"name": "billing_group_id",
			"type": "string",
			"default": "f5586561-8ff0-4291-a0ac-84fe544797bd",
			"description": "Use this field to set the Billing Group ID for the call. Must be a valid and existing Billing Group ID.",
			"routing": {
				"send": {
					"property": "billing_group_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Answer"
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
						"Call Commands"
					],
					"operation": [
						"Call Answer"
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
						"Call Commands"
					],
					"operation": [
						"Call Answer"
					]
				}
			}
		},
		{
			"displayName": "Webhook Url",
			"name": "webhook_url",
			"type": "string",
			"default": "https://www.example.com/server-b/",
			"description": "Use this field to override the URL for which Telnyx will send subsequent webhooks to for this call.",
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
						"Call Commands"
					],
					"operation": [
						"Call Answer"
					]
				}
			}
		},
		{
			"displayName": "Webhook Url Method",
			"name": "webhook_url_method",
			"type": "options",
			"default": "GET",
			"description": "HTTP request type used for `webhook_url`.",
			"options": [
				{
					"name": "POST",
					"value": "POST"
				},
				{
					"name": "GET",
					"value": "GET"
				}
			],
			"routing": {
				"send": {
					"property": "webhook_url_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Answer"
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
						"Call Commands"
					],
					"operation": [
						"Call Answer"
					]
				}
			}
		},
		{
			"displayName": "POST /calls/{call_control_id}/actions/bridge",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Bridge"
					]
				}
			}
		},
		{
			"displayName": "Call Control Id",
			"name": "call_control_id",
			"required": true,
			"description": "Unique identifier and token for controlling the call",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Bridge"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Call Control Id",
			"name": "call_control_id",
			"type": "string",
			"default": "v2:T02llQxIyaRkhfRKxgAP8nY511EhFLizdvdUKJiSw8d6A9BborherQ",
			"description": "The Call Control ID of the call you want to bridge with.",
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
						"Call Commands"
					],
					"operation": [
						"Call Bridge"
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
						"Call Commands"
					],
					"operation": [
						"Call Bridge"
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
						"Call Commands"
					],
					"operation": [
						"Call Bridge"
					]
				}
			}
		},
		{
			"displayName": "Park After Unbridge",
			"name": "park_after_unbridge",
			"type": "string",
			"default": "self",
			"description": "Specifies behavior after the bridge ends (i.e. the opposite leg either hangs up or is transferred). If supplied with the value `self`, the current leg will be parked after unbridge. If not set, the default behavior is to hang up the leg.",
			"routing": {
				"send": {
					"property": "park_after_unbridge",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Bridge"
					]
				}
			}
		},
		{
			"displayName": "Queue",
			"name": "queue",
			"type": "string",
			"default": "support",
			"description": "The name of the queue you want to bridge with, can't be used together with call_control_id parameter. Bridging with a queue means bridging with the first call in the queue. The call will always be removed from the queue regardless of whether bridging succeeds. Returns an error when the queue is empty.",
			"routing": {
				"send": {
					"property": "queue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Bridge"
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
						"Call Commands"
					],
					"operation": [
						"Call Bridge"
					]
				}
			}
		},
		{
			"displayName": "POST /calls/{call_control_id}/actions/enqueue",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Enqueue"
					]
				}
			}
		},
		{
			"displayName": "Call Control Id",
			"name": "call_control_id",
			"required": true,
			"description": "Unique identifier and token for controlling the call",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Enqueue"
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
						"Call Commands"
					],
					"operation": [
						"Call Enqueue"
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
						"Call Commands"
					],
					"operation": [
						"Call Enqueue"
					]
				}
			}
		},
		{
			"displayName": "Max Size",
			"name": "max_size",
			"type": "number",
			"default": 200,
			"description": "The maximum number of calls allowed in the queue at a given time. Can't be modified for an existing queue.",
			"routing": {
				"send": {
					"property": "max_size",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Enqueue"
					]
				}
			}
		},
		{
			"displayName": "Max Wait Time Secs",
			"name": "max_wait_time_secs",
			"type": "number",
			"default": 600,
			"description": "The number of seconds after which the call will be removed from the queue.",
			"routing": {
				"send": {
					"property": "max_wait_time_secs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Enqueue"
					]
				}
			}
		},
		{
			"displayName": "Queue Name",
			"name": "queue_name",
			"type": "string",
			"default": "tier_1_support",
			"description": "The name of the queue the call should be put in. If a queue with a given name doesn't exist yet it will be created.",
			"routing": {
				"send": {
					"property": "queue_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Enqueue"
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
						"Call Commands"
					],
					"operation": [
						"Call Enqueue"
					]
				}
			}
		},
		{
			"displayName": "POST /calls/{call_control_id}/actions/fork_start",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Fork Start"
					]
				}
			}
		},
		{
			"displayName": "Call Control Id",
			"name": "call_control_id",
			"required": true,
			"description": "Unique identifier and token for controlling the call",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Fork Start"
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
						"Call Commands"
					],
					"operation": [
						"Call Fork Start"
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
						"Call Commands"
					],
					"operation": [
						"Call Fork Start"
					]
				}
			}
		},
		{
			"displayName": "Rx",
			"name": "rx",
			"type": "string",
			"default": "192.0.2.1:9000",
			"description": "The network target, <udp:ip_address:port>, where the call's incoming RTP media packets should be forwarded.",
			"routing": {
				"send": {
					"property": "rx",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Fork Start"
					]
				}
			}
		},
		{
			"displayName": "Stream Type",
			"name": "stream_type",
			"type": "options",
			"default": "decrypted",
			"description": "Optionally specify a media type to stream. If `decrpyted` selected, Telnyx will decrypt incoming SIP media before forking to the target. `rx` and `tx` are required fields if `decrypted` selected.",
			"options": [
				{
					"name": "Raw",
					"value": "raw"
				},
				{
					"name": "Decrypted",
					"value": "decrypted"
				}
			],
			"routing": {
				"send": {
					"property": "stream_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Fork Start"
					]
				}
			}
		},
		{
			"displayName": "Target",
			"name": "target",
			"type": "string",
			"default": "udp:192.0.2.1:9000",
			"description": "The network target, <udp:ip_address:port>, where the call's RTP media packets should be forwarded. Both incoming and outgoing media packets will be delivered to the specified target, and information about the stream will be included in the encapsulation protocol header, including the direction (0 = inbound; 1 = outbound), leg (0 = A-leg; 1 = B-leg), and call_leg_id.",
			"routing": {
				"send": {
					"property": "target",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Fork Start"
					]
				}
			}
		},
		{
			"displayName": "Tx",
			"name": "tx",
			"type": "string",
			"default": "192.0.2.1:9001",
			"description": "The network target, <udp:ip_address:port>, where the call's outgoing RTP media packets should be forwarded.",
			"routing": {
				"send": {
					"property": "tx",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Fork Start"
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
						"Call Commands"
					],
					"operation": [
						"Call Fork Start"
					]
				}
			}
		},
		{
			"displayName": "POST /calls/{call_control_id}/actions/fork_stop",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Fork Stop"
					]
				}
			}
		},
		{
			"displayName": "Call Control Id",
			"name": "call_control_id",
			"required": true,
			"description": "Unique identifier and token for controlling the call",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Fork Stop"
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
						"Call Commands"
					],
					"operation": [
						"Call Fork Stop"
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
						"Call Commands"
					],
					"operation": [
						"Call Fork Stop"
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
						"Call Commands"
					],
					"operation": [
						"Call Fork Stop"
					]
				}
			}
		},
		{
			"displayName": "POST /calls/{call_control_id}/actions/gather_stop",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Gather Stop"
					]
				}
			}
		},
		{
			"displayName": "Call Control Id",
			"name": "call_control_id",
			"required": true,
			"description": "Unique identifier and token for controlling the call",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Gather Stop"
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
						"Call Commands"
					],
					"operation": [
						"Call Gather Stop"
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
						"Call Commands"
					],
					"operation": [
						"Call Gather Stop"
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
						"Call Commands"
					],
					"operation": [
						"Call Gather Stop"
					]
				}
			}
		},
		{
			"displayName": "POST /calls/{call_control_id}/actions/gather_using_audio",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Audio"
					]
				}
			}
		},
		{
			"displayName": "Call Control Id",
			"name": "call_control_id",
			"required": true,
			"description": "Unique identifier and token for controlling the call",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Audio"
					]
				}
			}
		},
		{
			"displayName": "Audio Url",
			"name": "audio_url",
			"type": "string",
			"default": "http://example.com/message.wav",
			"description": "The URL of a file to be played back at the beginning of each prompt. The URL can point to either a WAV or MP3 file. media_name and audio_url cannot be used together in one request.",
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
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Audio"
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
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Audio"
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
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Audio"
					]
				}
			}
		},
		{
			"displayName": "Inter Digit Timeout Millis",
			"name": "inter_digit_timeout_millis",
			"type": "number",
			"default": 10000,
			"description": "The number of milliseconds to wait for input between digits.",
			"routing": {
				"send": {
					"property": "inter_digit_timeout_millis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Audio"
					]
				}
			}
		},
		{
			"displayName": "Invalid Audio Url",
			"name": "invalid_audio_url",
			"type": "string",
			"default": "http://example.com/invalid.wav",
			"description": "The URL of a file to play when digits don't match the `valid_digits` parameter or the number of digits is not between `min` and `max`. The URL can point to either a WAV or MP3 file. invalid_media_name and invalid_audio_url cannot be used together in one request.",
			"routing": {
				"send": {
					"property": "invalid_audio_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Audio"
					]
				}
			}
		},
		{
			"displayName": "Invalid Media Name",
			"name": "invalid_media_name",
			"type": "string",
			"default": "my_media_uploaded_to_media_storage_api",
			"description": "The media_name of a file to be played back when digits don't match the `valid_digits` parameter or the number of digits is not between `min` and `max`. The media_name must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. The file must either be a WAV or MP3 file.",
			"routing": {
				"send": {
					"property": "invalid_media_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Audio"
					]
				}
			}
		},
		{
			"displayName": "Maximum Digits",
			"name": "maximum_digits",
			"type": "number",
			"default": 10,
			"description": "The maximum number of digits to fetch. This parameter has a maximum value of 128.",
			"routing": {
				"send": {
					"property": "maximum_digits",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Audio"
					]
				}
			}
		},
		{
			"displayName": "Maximum Tries",
			"name": "maximum_tries",
			"type": "number",
			"default": 3,
			"description": "The maximum number of times the file should be played if there is no input from the user on the call.",
			"routing": {
				"send": {
					"property": "maximum_tries",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Audio"
					]
				}
			}
		},
		{
			"displayName": "Media Name",
			"name": "media_name",
			"type": "string",
			"default": "my_media_uploaded_to_media_storage_api",
			"description": "The media_name of a file to be played back at the beginning of each prompt. The media_name must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. The file must either be a WAV or MP3 file.",
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
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Audio"
					]
				}
			}
		},
		{
			"displayName": "Minimum Digits",
			"name": "minimum_digits",
			"type": "number",
			"default": 1,
			"description": "The minimum number of digits to fetch. This parameter has a minimum value of 1.",
			"routing": {
				"send": {
					"property": "minimum_digits",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Audio"
					]
				}
			}
		},
		{
			"displayName": "Terminating Digit",
			"name": "terminating_digit",
			"type": "string",
			"default": "#",
			"description": "The digit used to terminate input if fewer than `maximum_digits` digits have been gathered.",
			"routing": {
				"send": {
					"property": "terminating_digit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Audio"
					]
				}
			}
		},
		{
			"displayName": "Timeout Millis",
			"name": "timeout_millis",
			"type": "number",
			"default": 60000,
			"description": "The number of milliseconds to wait for a DTMF response after file playback ends before a replaying the sound file.",
			"routing": {
				"send": {
					"property": "timeout_millis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Audio"
					]
				}
			}
		},
		{
			"displayName": "Valid Digits",
			"name": "valid_digits",
			"type": "string",
			"default": "123",
			"description": "A list of all digits accepted as valid.",
			"routing": {
				"send": {
					"property": "valid_digits",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Audio"
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
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Audio"
					]
				}
			}
		},
		{
			"displayName": "POST /calls/{call_control_id}/actions/gather_using_speak",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Speak"
					]
				}
			}
		},
		{
			"displayName": "Call Control Id",
			"name": "call_control_id",
			"required": true,
			"description": "Unique identifier and token for controlling the call",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Speak"
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
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Speak"
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
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Speak"
					]
				}
			}
		},
		{
			"displayName": "Inter Digit Timeout Millis",
			"name": "inter_digit_timeout_millis",
			"type": "number",
			"default": 10000,
			"description": "The number of milliseconds to wait for input between digits.",
			"routing": {
				"send": {
					"property": "inter_digit_timeout_millis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Speak"
					]
				}
			}
		},
		{
			"displayName": "Invalid Payload",
			"name": "invalid_payload",
			"type": "string",
			"default": "Say this on the call",
			"description": "The text or SSML to be converted into speech when digits don't match the `valid_digits` parameter or the number of digits is not between `min` and `max`. There is a 5,000 character limit.",
			"routing": {
				"send": {
					"property": "invalid_payload",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Speak"
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
			"description": "The language you want spoken.",
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
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Speak"
					]
				}
			}
		},
		{
			"displayName": "Maximum Digits",
			"name": "maximum_digits",
			"type": "number",
			"default": 10,
			"description": "The maximum number of digits to fetch. This parameter has a maximum value of 128.",
			"routing": {
				"send": {
					"property": "maximum_digits",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Speak"
					]
				}
			}
		},
		{
			"displayName": "Maximum Tries",
			"name": "maximum_tries",
			"type": "number",
			"default": 3,
			"description": "The maximum number of times that a file should be played back if there is no input from the user on the call.",
			"routing": {
				"send": {
					"property": "maximum_tries",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Speak"
					]
				}
			}
		},
		{
			"displayName": "Minimum Digits",
			"name": "minimum_digits",
			"type": "number",
			"default": 1,
			"description": "The minimum number of digits to fetch. This parameter has a minimum value of 1.",
			"routing": {
				"send": {
					"property": "minimum_digits",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Speak"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Payload",
			"name": "payload",
			"type": "string",
			"default": "Say this on the call",
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
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Speak"
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
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Speak"
					]
				}
			}
		},
		{
			"displayName": "Service Level",
			"name": "service_level",
			"type": "options",
			"default": "premium",
			"description": "This parameter impacts speech quality, language options and payload types. When using `basic`, only the `en-US` language and payload type `text` are allowed.",
			"options": [
				{
					"name": "Basic",
					"value": "basic"
				},
				{
					"name": "Premium",
					"value": "premium"
				}
			],
			"routing": {
				"send": {
					"property": "service_level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Speak"
					]
				}
			}
		},
		{
			"displayName": "Terminating Digit",
			"name": "terminating_digit",
			"type": "string",
			"default": "#",
			"description": "The digit used to terminate input if fewer than `maximum_digits` digits have been gathered.",
			"routing": {
				"send": {
					"property": "terminating_digit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Speak"
					]
				}
			}
		},
		{
			"displayName": "Timeout Millis",
			"name": "timeout_millis",
			"type": "number",
			"default": 60000,
			"description": "The number of milliseconds to wait for a DTMF response after speak ends before a replaying the sound file.",
			"routing": {
				"send": {
					"property": "timeout_millis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Speak"
					]
				}
			}
		},
		{
			"displayName": "Valid Digits",
			"name": "valid_digits",
			"type": "string",
			"default": "123",
			"description": "A list of all digits accepted as valid.",
			"routing": {
				"send": {
					"property": "valid_digits",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Speak"
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
			"description": "The gender of the voice used to speak back the text.",
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
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Speak"
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
						"Call Commands"
					],
					"operation": [
						"Call Gather Using Speak"
					]
				}
			}
		},
		{
			"displayName": "POST /calls/{call_control_id}/actions/hangup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Hangup"
					]
				}
			}
		},
		{
			"displayName": "Call Control Id",
			"name": "call_control_id",
			"required": true,
			"description": "Unique identifier and token for controlling the call",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Hangup"
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
						"Call Commands"
					],
					"operation": [
						"Call Hangup"
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
						"Call Commands"
					],
					"operation": [
						"Call Hangup"
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
						"Call Commands"
					],
					"operation": [
						"Call Hangup"
					]
				}
			}
		},
		{
			"displayName": "POST /calls/{call_control_id}/actions/leave_queue",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Leave Queue"
					]
				}
			}
		},
		{
			"displayName": "Call Control Id",
			"name": "call_control_id",
			"required": true,
			"description": "Unique identifier and token for controlling the call",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Leave Queue"
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
						"Call Commands"
					],
					"operation": [
						"Leave Queue"
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
						"Call Commands"
					],
					"operation": [
						"Leave Queue"
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
						"Call Commands"
					],
					"operation": [
						"Leave Queue"
					]
				}
			}
		},
		{
			"displayName": "POST /calls/{call_control_id}/actions/playback_start",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Playback Start"
					]
				}
			}
		},
		{
			"displayName": "Call Control Id",
			"name": "call_control_id",
			"required": true,
			"description": "Unique identifier and token for controlling the call",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Playback Start"
					]
				}
			}
		},
		{
			"displayName": "Audio Url",
			"name": "audio_url",
			"type": "string",
			"default": "http://example.com/message.wav",
			"description": "The URL of a file to be played back on the call. The URL can point to either a WAV or MP3 file. media_name and audio_url cannot be used together in one request.",
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
						"Call Commands"
					],
					"operation": [
						"Call Playback Start"
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
						"Call Commands"
					],
					"operation": [
						"Call Playback Start"
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
						"Call Commands"
					],
					"operation": [
						"Call Playback Start"
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
						"Call Commands"
					],
					"operation": [
						"Call Playback Start"
					]
				}
			}
		},
		{
			"displayName": "Media Name",
			"name": "media_name",
			"type": "string",
			"default": "my_media_uploaded_to_media_storage_api",
			"description": "The media_name of a file to be played back on the call. The media_name must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. The file must either be a WAV or MP3 file.",
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
						"Call Commands"
					],
					"operation": [
						"Call Playback Start"
					]
				}
			}
		},
		{
			"displayName": "Overlay",
			"name": "overlay",
			"type": "boolean",
			"default": true,
			"description": "When enabled, audio will be mixed on top of any other audio that is actively being played back. Note that `overlay: true` will only work if there is another audio file already being played on the call.",
			"routing": {
				"send": {
					"property": "overlay",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Playback Start"
					]
				}
			}
		},
		{
			"displayName": "Stop",
			"name": "stop",
			"type": "string",
			"default": "current",
			"description": "When specified, it stops the current audio being played.  Specify `current` to stop the current audio being played, and to play the next file in the queue. Specify `all` to stop the current audio file being played and to also clear all audio files from the queue.",
			"routing": {
				"send": {
					"property": "stop",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Playback Start"
					]
				}
			}
		},
		{
			"displayName": "Target Legs",
			"name": "target_legs",
			"type": "string",
			"default": "self",
			"description": "Specifies the leg or legs on which audio will be played. If supplied, the value must be either `self`, `opposite` or `both`.",
			"routing": {
				"send": {
					"property": "target_legs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Playback Start"
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
						"Call Commands"
					],
					"operation": [
						"Call Playback Start"
					]
				}
			}
		},
		{
			"displayName": "POST /calls/{call_control_id}/actions/playback_stop",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Playback Stop"
					]
				}
			}
		},
		{
			"displayName": "Call Control Id",
			"name": "call_control_id",
			"required": true,
			"description": "Unique identifier and token for controlling the call",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Playback Stop"
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
						"Call Commands"
					],
					"operation": [
						"Call Playback Stop"
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
						"Call Commands"
					],
					"operation": [
						"Call Playback Stop"
					]
				}
			}
		},
		{
			"displayName": "Stop",
			"name": "stop",
			"type": "string",
			"default": "current",
			"description": "Use `current` to stop only the current audio or `all` to stop all audios in the queue.",
			"routing": {
				"send": {
					"property": "stop",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Playback Stop"
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
						"Call Commands"
					],
					"operation": [
						"Call Playback Stop"
					]
				}
			}
		},
		{
			"displayName": "POST /calls/{call_control_id}/actions/record_pause",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Record Pause"
					]
				}
			}
		},
		{
			"displayName": "Call Control Id",
			"name": "call_control_id",
			"required": true,
			"description": "Unique identifier and token for controlling the call",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Record Pause"
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
						"Call Commands"
					],
					"operation": [
						"Call Record Pause"
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
						"Call Commands"
					],
					"operation": [
						"Call Record Pause"
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
						"Call Commands"
					],
					"operation": [
						"Call Record Pause"
					]
				}
			}
		},
		{
			"displayName": "POST /calls/{call_control_id}/actions/record_resume",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Record Resume"
					]
				}
			}
		},
		{
			"displayName": "Call Control Id",
			"name": "call_control_id",
			"required": true,
			"description": "Unique identifier and token for controlling the call",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Record Resume"
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
						"Call Commands"
					],
					"operation": [
						"Call Record Resume"
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
						"Call Commands"
					],
					"operation": [
						"Call Record Resume"
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
						"Call Commands"
					],
					"operation": [
						"Call Record Resume"
					]
				}
			}
		},
		{
			"displayName": "POST /calls/{call_control_id}/actions/record_start",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Record Start"
					]
				}
			}
		},
		{
			"displayName": "Call Control Id",
			"name": "call_control_id",
			"required": true,
			"description": "Unique identifier and token for controlling the call",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Record Start"
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
						"Call Commands"
					],
					"operation": [
						"Call Record Start"
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
						"Call Commands"
					],
					"operation": [
						"Call Record Start"
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
						"Call Commands"
					],
					"operation": [
						"Call Record Start"
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
						"Call Commands"
					],
					"operation": [
						"Call Record Start"
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
						"Call Commands"
					],
					"operation": [
						"Call Record Start"
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
						"Call Commands"
					],
					"operation": [
						"Call Record Start"
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
						"Call Commands"
					],
					"operation": [
						"Call Record Start"
					]
				}
			}
		},
		{
			"displayName": "POST /calls/{call_control_id}/actions/record_stop",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Record Stop"
					]
				}
			}
		},
		{
			"displayName": "Call Control Id",
			"name": "call_control_id",
			"required": true,
			"description": "Unique identifier and token for controlling the call",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Record Stop"
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
						"Call Commands"
					],
					"operation": [
						"Call Record Stop"
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
						"Call Commands"
					],
					"operation": [
						"Call Record Stop"
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
						"Call Commands"
					],
					"operation": [
						"Call Record Stop"
					]
				}
			}
		},
		{
			"displayName": "POST /calls/{call_control_id}/actions/refer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Refer"
					]
				}
			}
		},
		{
			"displayName": "Call Control Id",
			"name": "call_control_id",
			"required": true,
			"description": "Unique identifier and token for controlling the call",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Refer"
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
						"Call Commands"
					],
					"operation": [
						"Call Refer"
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
						"Call Commands"
					],
					"operation": [
						"Call Refer"
					]
				}
			}
		},
		{
			"displayName": "Custom Headers",
			"name": "custom_headers",
			"type": "json",
			"default": "[\n  {\n    \"name\": \"head_1\",\n    \"value\": \"val_1\"\n  },\n  {\n    \"name\": \"head_2\",\n    \"value\": \"val_2\"\n  }\n]",
			"description": "Custom headers to be added to the SIP INVITE.",
			"routing": {
				"send": {
					"property": "custom_headers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Refer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Sip Address",
			"name": "sip_address",
			"type": "string",
			"default": "sip:username@sip.non-telnyx-address.com",
			"description": "The SIP URI to which the call will be referred to.",
			"routing": {
				"send": {
					"property": "sip_address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Refer"
					]
				}
			}
		},
		{
			"displayName": "Sip Auth Password",
			"name": "sip_auth_password",
			"type": "string",
			"default": "",
			"description": "SIP Authentication password used for SIP challenges.",
			"routing": {
				"send": {
					"property": "sip_auth_password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Refer"
					]
				}
			}
		},
		{
			"displayName": "Sip Auth Username",
			"name": "sip_auth_username",
			"type": "string",
			"default": "",
			"description": "SIP Authentication username used for SIP challenges.",
			"routing": {
				"send": {
					"property": "sip_auth_username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Refer"
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
						"Call Commands"
					],
					"operation": [
						"Call Refer"
					]
				}
			}
		},
		{
			"displayName": "POST /calls/{call_control_id}/actions/reject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Reject"
					]
				}
			}
		},
		{
			"displayName": "Call Control Id",
			"name": "call_control_id",
			"required": true,
			"description": "Unique identifier and token for controlling the call",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Reject"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Cause",
			"name": "cause",
			"type": "options",
			"default": "USER_BUSY",
			"description": "Cause for call rejection.",
			"options": [
				{
					"name": "CALL REJECTED",
					"value": "CALL_REJECTED"
				},
				{
					"name": "USER BUSY",
					"value": "USER_BUSY"
				}
			],
			"routing": {
				"send": {
					"property": "cause",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Reject"
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
						"Call Commands"
					],
					"operation": [
						"Call Reject"
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
						"Call Commands"
					],
					"operation": [
						"Call Reject"
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
						"Call Commands"
					],
					"operation": [
						"Call Reject"
					]
				}
			}
		},
		{
			"displayName": "POST /calls/{call_control_id}/actions/send_dtmf",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Send DTMF"
					]
				}
			}
		},
		{
			"displayName": "Call Control Id",
			"name": "call_control_id",
			"required": true,
			"description": "Unique identifier and token for controlling the call",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Send DTMF"
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
						"Call Commands"
					],
					"operation": [
						"Call Send DTMF"
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
						"Call Commands"
					],
					"operation": [
						"Call Send DTMF"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Digits",
			"name": "digits",
			"type": "string",
			"default": "1www2WABCDw9",
			"description": "DTMF digits to send. Valid digits are 0-9, A-D, *, and #. Pauses can be added using w (0.5s) and W (1s).",
			"routing": {
				"send": {
					"property": "digits",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Send DTMF"
					]
				}
			}
		},
		{
			"displayName": "Duration Millis",
			"name": "duration_millis",
			"type": "number",
			"default": 500,
			"description": "Specifies for how many milliseconds each digit will be played in the audio stream. Ranges from 100 to 500ms",
			"routing": {
				"send": {
					"property": "duration_millis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Send DTMF"
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
						"Call Commands"
					],
					"operation": [
						"Call Send DTMF"
					]
				}
			}
		},
		{
			"displayName": "POST /calls/{call_control_id}/actions/speak",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Speak"
					]
				}
			}
		},
		{
			"displayName": "Call Control Id",
			"name": "call_control_id",
			"required": true,
			"description": "Unique identifier and token for controlling the call",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Speak"
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
						"Call Commands"
					],
					"operation": [
						"Call Speak"
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
						"Call Commands"
					],
					"operation": [
						"Call Speak"
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
			"description": "The language you want spoken.",
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
						"Call Commands"
					],
					"operation": [
						"Call Speak"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Payload",
			"name": "payload",
			"type": "string",
			"default": "Say this on the call",
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
						"Call Commands"
					],
					"operation": [
						"Call Speak"
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
						"Call Commands"
					],
					"operation": [
						"Call Speak"
					]
				}
			}
		},
		{
			"displayName": "Service Level",
			"name": "service_level",
			"type": "options",
			"default": "premium",
			"description": "This parameter impacts speech quality, language options and payload types. When using `basic`, only the `en-US` language and payload type `text` are allowed.",
			"options": [
				{
					"name": "Basic",
					"value": "basic"
				},
				{
					"name": "Premium",
					"value": "premium"
				}
			],
			"routing": {
				"send": {
					"property": "service_level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Speak"
					]
				}
			}
		},
		{
			"displayName": "Stop",
			"name": "stop",
			"type": "string",
			"default": "current",
			"description": "When specified, it stops the current audio being played.  Specify `current` to stop the current audio being played, and to play the next file in the queue. Specify `all` to stop the current audio file being played and to also clear all audio files from the queue.",
			"routing": {
				"send": {
					"property": "stop",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Speak"
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
			"description": "The gender of the voice used to speak back the text.",
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
						"Call Commands"
					],
					"operation": [
						"Call Speak"
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
						"Call Commands"
					],
					"operation": [
						"Call Speak"
					]
				}
			}
		},
		{
			"displayName": "POST /calls/{call_control_id}/actions/transcription_start",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Transcription Start"
					]
				}
			}
		},
		{
			"displayName": "Call Control Id",
			"name": "call_control_id",
			"required": true,
			"description": "Unique identifier and token for controlling the call",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Transcription Start"
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
						"Call Commands"
					],
					"operation": [
						"Call Transcription Start"
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
						"Call Commands"
					],
					"operation": [
						"Call Transcription Start"
					]
				}
			}
		},
		{
			"displayName": "Language",
			"name": "language",
			"type": "options",
			"default": "en",
			"description": "Language to use for speech recognition",
			"options": [
				{
					"name": "De",
					"value": "de"
				},
				{
					"name": "En",
					"value": "en"
				},
				{
					"name": "Es",
					"value": "es"
				},
				{
					"name": "Fr",
					"value": "fr"
				},
				{
					"name": "It",
					"value": "it"
				},
				{
					"name": "Pl",
					"value": "pl"
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
						"Call Commands"
					],
					"operation": [
						"Call Transcription Start"
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
						"Call Commands"
					],
					"operation": [
						"Call Transcription Start"
					]
				}
			}
		},
		{
			"displayName": "POST /calls/{call_control_id}/actions/transcription_stop",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Transcription Stop"
					]
				}
			}
		},
		{
			"displayName": "Call Control Id",
			"name": "call_control_id",
			"required": true,
			"description": "Unique identifier and token for controlling the call",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Transcription Stop"
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
						"Call Commands"
					],
					"operation": [
						"Call Transcription Stop"
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
						"Call Commands"
					],
					"operation": [
						"Call Transcription Stop"
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
						"Call Commands"
					],
					"operation": [
						"Call Transcription Stop"
					]
				}
			}
		},
		{
			"displayName": "POST /calls/{call_control_id}/actions/transfer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Transfer"
					]
				}
			}
		},
		{
			"displayName": "Call Control Id",
			"name": "call_control_id",
			"required": true,
			"description": "Unique identifier and token for controlling the call",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Transfer"
					]
				}
			}
		},
		{
			"displayName": "Answering Machine Detection",
			"name": "answering_machine_detection",
			"type": "options",
			"default": "disabled",
			"description": "Enables Answering Machine Detection. When a call is answered, Telnyx runs real-time detection to determine if it was picked up by a human or a machine and sends an `call.machine.detection.ended` webhook with the analysis result. If 'greeting_end' or 'detect_words' is used and a 'machine' is detected, you will receive another 'call.machine.greeting.ended' webhook when the answering machine greeting ends with a beep or silence. If `detect_beep` is used, you will only receive 'call.machine.greeting.ended' if a beep is detected.",
			"options": [
				{
					"name": "Detect",
					"value": "detect"
				},
				{
					"name": "Detect Beep",
					"value": "detect_beep"
				},
				{
					"name": "Detect Words",
					"value": "detect_words"
				},
				{
					"name": "Greeting End",
					"value": "greeting_end"
				},
				{
					"name": "Disabled",
					"value": "disabled"
				}
			],
			"routing": {
				"send": {
					"property": "answering_machine_detection",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Transfer"
					]
				}
			}
		},
		{
			"displayName": "Answering Machine Detection Config",
			"name": "answering_machine_detection_config",
			"type": "json",
			"default": "{\n  \"after_greeting_silence_millis\": 1000,\n  \"between_words_silence_millis\": 100,\n  \"greeting_duration_millis\": 1500,\n  \"greeting_silence_duration_millis\": 2000,\n  \"greeting_total_analysis_time_millis\": 7500,\n  \"initial_silence_millis\": 1800,\n  \"maximum_number_of_words\": 3,\n  \"maximum_word_length_millis\": 2000,\n  \"silence_threshold\": 512,\n  \"total_analysis_time_millis\": 5000\n}",
			"description": "Optional configuration parameters to modify 'answering_machine_detection' performance.",
			"routing": {
				"send": {
					"property": "answering_machine_detection_config",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Transfer"
					]
				}
			}
		},
		{
			"displayName": "Audio Url",
			"name": "audio_url",
			"type": "string",
			"default": "http://example.com/message.wav",
			"description": "The URL of a file to be played back when the transfer destination answers before bridging the call. The URL can point to either a WAV or MP3 file. media_name and audio_url cannot be used together in one request.",
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
						"Call Commands"
					],
					"operation": [
						"Call Transfer"
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
						"Call Commands"
					],
					"operation": [
						"Call Transfer"
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
						"Call Commands"
					],
					"operation": [
						"Call Transfer"
					]
				}
			}
		},
		{
			"displayName": "Custom Headers",
			"name": "custom_headers",
			"type": "json",
			"default": "[\n  {\n    \"name\": \"head_1\",\n    \"value\": \"val_1\"\n  },\n  {\n    \"name\": \"head_2\",\n    \"value\": \"val_2\"\n  }\n]",
			"description": "Custom headers to be added to the SIP INVITE.",
			"routing": {
				"send": {
					"property": "custom_headers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Transfer"
					]
				}
			}
		},
		{
			"displayName": "From",
			"name": "from",
			"type": "string",
			"default": "+18005550101",
			"description": "The `from` number to be used as the caller id presented to the destination (`to` number). The number should be in +E164 format. This attribute will default to the `from` number of the original call if omitted.",
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
						"Call Commands"
					],
					"operation": [
						"Call Transfer"
					]
				}
			}
		},
		{
			"displayName": "From Display Name",
			"name": "from_display_name",
			"type": "string",
			"default": "Company Name",
			"description": "The `from_display_name` string to be used as the caller id name (SIP From Display Name) presented to the destination (`to` number). The string should have a maximum of 128 characters, containing only letters, numbers, spaces, and -_~!.+ special characters. If ommited, the display name will be the same as the number in the `from` field.",
			"routing": {
				"send": {
					"property": "from_display_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Transfer"
					]
				}
			}
		},
		{
			"displayName": "Media Name",
			"name": "media_name",
			"type": "string",
			"default": "my_media_uploaded_to_media_storage_api",
			"description": "The media_name of a file to be played back when the transfer destination answers before bridging the call. The media_name must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. The file must either be a WAV or MP3 file.",
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
						"Call Commands"
					],
					"operation": [
						"Call Transfer"
					]
				}
			}
		},
		{
			"displayName": "Sip Auth Password",
			"name": "sip_auth_password",
			"type": "string",
			"default": "password",
			"description": "SIP Authentication password used for SIP challenges.",
			"routing": {
				"send": {
					"property": "sip_auth_password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Transfer"
					]
				}
			}
		},
		{
			"displayName": "Sip Auth Username",
			"name": "sip_auth_username",
			"type": "string",
			"default": "username",
			"description": "SIP Authentication username used for SIP challenges.",
			"routing": {
				"send": {
					"property": "sip_auth_username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Transfer"
					]
				}
			}
		},
		{
			"displayName": "Target Leg Client State",
			"name": "target_leg_client_state",
			"type": "string",
			"default": "aGF2ZSBhIG5pY2UgZGF5ID1d",
			"description": "Use this field to add state to every subsequent webhook for the new leg. It must be a valid Base-64 encoded string.",
			"routing": {
				"send": {
					"property": "target_leg_client_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Transfer"
					]
				}
			}
		},
		{
			"displayName": "Time Limit Secs",
			"name": "time_limit_secs",
			"type": "number",
			"default": 600,
			"description": "Sets the maximum duration of a Call Control Leg in seconds. If the time limit is reached, the call will hangup and a `call.hangup` webhook with a `hangup_cause` of `time_limit` will be sent. For example, by setting a time limit of 120 seconds, a Call Leg will be automatically terminated two minutes after being answered. The default time limit is 14400 seconds or 4 hours and this is also the maximum allowed call length.",
			"routing": {
				"send": {
					"property": "time_limit_secs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Transfer"
					]
				}
			}
		},
		{
			"displayName": "Timeout Secs",
			"name": "timeout_secs",
			"type": "number",
			"default": 60,
			"description": "The number of seconds that Telnyx will wait for the call to be answered by the destination to which it is being transferred. If the timeout is reached before an answer is received, the call will hangup and a `call.hangup` webhook with a `hangup_cause` of `timeout` will be sent. Minimum value is 5 seconds. Maximum value is 120 seconds.",
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
						"Call Commands"
					],
					"operation": [
						"Call Transfer"
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
						"Call Commands"
					],
					"operation": [
						"Call Transfer"
					]
				}
			}
		},
		{
			"displayName": "Webhook Url",
			"name": "webhook_url",
			"type": "string",
			"default": "https://www.example.com/server-b/",
			"description": "Use this field to override the URL for which Telnyx will send subsequent webhooks to for this call.",
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
						"Call Commands"
					],
					"operation": [
						"Call Transfer"
					]
				}
			}
		},
		{
			"displayName": "Webhook Url Method",
			"name": "webhook_url_method",
			"type": "options",
			"default": "GET",
			"description": "HTTP request type used for `webhook_url`.",
			"options": [
				{
					"name": "POST",
					"value": "POST"
				},
				{
					"name": "GET",
					"value": "GET"
				}
			],
			"routing": {
				"send": {
					"property": "webhook_url_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Call Commands"
					],
					"operation": [
						"Call Transfer"
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
						"Call Commands"
					],
					"operation": [
						"Call Transfer"
					]
				}
			}
		},
];
