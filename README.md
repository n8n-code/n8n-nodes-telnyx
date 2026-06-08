# @n8n-dev/n8n-nodes-telnyx

![telnyx Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-telnyx.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-telnyx)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing telnyx API integrations by hand.**

Every time you connect n8n to telnyx, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to telnyx took 5 minutes, not half a day?**

This node gives you **78+ resources** out of the box: **Addresses**, **Authentication Providers**, **Billing**, **Billing Groups**, **Bulk Credentials**, and 73 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-telnyx
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-telnyx`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **telnyx API** → paste your API key
3. Drag the **telnyx** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

| Resource | Operations |
|----------|------------|
| Addresses | GET List all addresses, POST Creates an address, POST Validate an address, DELETE Deletes an address, GET Retrieve an address |
| Authentication Providers | GET List all SSO authentication providers, POST Creates an authentication provider, DELETE Deletes an authentication provider, GET Retrieve an authentication provider, PATCH Update a authentication provider |
| Billing | GET Retrieve user balance details |
| Billing Groups | GET List all billing groups, POST Create a billing group, DELETE Delete a billing group, GET Retrieve a billing group, PATCH Update a billing group |
| Bulk Credentials | DELETE Delete several credentials, PATCH Update several credentials, POST Creates several credentials, POST Perform activate or deactivate action on all credentials filtered by the provided tag. |
| Call Commands | POST Dial, POST Answer call, POST Bridge calls, POST Enqueue call, POST Forking start, POST Forking stop, POST Gather stop, POST Gather using audio, POST Gather using speak, POST Hangup call, POST Remove call from a queue, POST Play audio URL, POST Stop audio playback, POST Record pause, POST Record resume, POST Recording start, POST Recording stop, POST SIP Refer a call, POST Reject a call, POST Send DTMF, POST Speak text, POST Transcription start, POST Transcription stop, POST Transfer call |
| Call Control Applications | GET List call control applications, POST Create a call control application, DELETE Delete a call control application, GET Retrieve a call control application, PATCH Update a call control application |
| Call Information | GET Retrieve a call status |
| Conference Commands | GET List conferences, POST Create conference, GET List conference participants, GET Retrieve a conference, POST Dial a new participant into a conference, POST Hold conference participants, POST Join a conference, POST Leave a conference, POST Mute conference participants, POST Play audio to conference participants, POST Conference recording start, POST Conference recording stop, POST Speak text to conference participants, POST Stop audio being played on the conference, POST Unhold conference participants, POST Unmute conference participants, POST Update conference participant |
| Connections | GET List connections, GET Retrieve a connection |
| Credential Connections | GET List credential connections, POST Create a credential connection, DELETE Delete a credential connection, GET Retrieve a credential connection, PATCH Update a credential connection |
| Debugging | GET List call events |
| Detail Records | GET Search detail records |
| Documents | GET List all document links, GET List all documents, POST Upload a document, DELETE Delete a document, GET Retrieve a document, PATCH Update a document, GET Download a document |
| FQDN Connections | GET List FQDN connections, POST Create an FQDN connection, DELETE Delete an FQDN connection, GET Retrieve an FQDN connection, PATCH Update an FQDN connection |
| FQD Ns | GET List FQDNs, POST Create an FQDN, DELETE Delete an FQDN, GET Retrieve an FQDN, PATCH Update an FQDN |
| IP Connections | GET List Ip connections, POST Create an Ip connection, DELETE Delete an Ip connection, GET Retrieve an Ip connection, PATCH Update an Ip connection |
| I Ps | GET List Ips, POST Create an Ip, DELETE Delete an Ip, GET Retrieve an Ip, PATCH Update an Ip |
| Inventory Level | GET Create an inventory coverage request |
| MDR Search Beta | GET Fetch messaging detail records., GET Fetch message body by id. |
| Managed Accounts | GET Lists accounts managed by the current user., POST Create a new managed account., GET Retrieve a managed account, POST Disables a managed account, POST Enables a managed account |
| Media Storage API | GET List uploaded media, POST Upload media, DELETE Deletes stored media, GET Retrieve stored media, PUT Update stored media, GET Download stored media |
| Messages | POST Send a message, POST Send a long code message, POST Send a message using number pool, POST Send a short code message, GET Retrieve a message |
| Messaging Hosted Number | GET List messaging hosted number orders, POST Create a messaging hosted number order, GET Retrieve a messaging hosted number order, POST Upload file required for a messaging hosted number order, DELETE Delete a messaging hosted number |
| Messaging Profiles | GET List messaging profile metrics, GET List messaging profiles, POST Create a messaging profile, DELETE Delete a messaging profile, GET Retrieve a messaging profile, PATCH Update a messaging profile, GET Retrieve messaging profile metrics, GET List phone numbers associated with a messaging profile, GET List short codes associated with a messaging profile |
| Messaging URL Domains | GET List messaging URL domains |
| Mobile Operator Networks | GET List mobile operator networks |
| Notifications | GET List notification channels, POST Create a notification channel, DELETE Delete a notification channel, GET Retrieve a notification channel, PATCH Update a notification channel, GET List all Notifications Events Conditions, GET List all Notifications Events, GET List all Notifications Profiles, POST Create a notification profile, DELETE Delete a notification profile, GET Retrieve a notification profile, PATCH Update a notification profile, GET List notification settings, POST Add a Notification Setting, DELETE Delete a notification setting, GET Retrieve a notification setting |
| Number Lookup | GET Lookup phone number data |
| Number Order Documents | GET List number order documents, POST Create a number order document, GET Retrieve a number order document, PATCH Update a number order document |
| Number Orders | GET Retrieve all comments, POST Create a comment, GET Retrieve a comment, PATCH Mark a comment as read, GET Retrieve a list of phone numbers associated to orders, GET Retrieve a number order phone number., PATCH Update a number order phone number., GET List number orders, POST Create a number order, GET Retrieve a number order, PATCH Update a number order, GET List sub number orders, GET Retrieve a sub number order, PATCH Update a sub number order |
| Number Reservations | GET List number reservations, POST Create a number reservation, GET Retrieve a number reservation, POST Extend a number reservation |
| Number Search | GET List available phone number blocks, GET List available phone numbers |
| OTA Updates | GET List OTA updates, GET Get OTA update |
| Programmable Fax Applications | GET List all Fax Applications, POST Creates a Fax Application, DELETE Deletes a Fax Application, GET Retrieve a Fax Application, PATCH Update a Fax Application |
| Programmable Fax Commands | GET View a list of faxes, POST Send a fax, DELETE Delete a fax, GET View a fax, POST Refresh a fax |
| SIM Cards | PUT Bulk Network Preferences for SIM cards, POST Register SIM cards, GET Get all SIM cards, POST Validate SIM cards registration codes, DELETE Deletes a SIM card, GET Get SIM card, PATCH Update a SIM card, POST Request a SIM card disable, POST Request a SIM card enable, POST Request setting a SIM card to standby, DELETE DELETE network preferences, GET Get network preferences, PUT Set network preferences, DELETE Delete SIM card public IP, GET Get SIM card public IP definition, POST Set SIM card public IP, GET List wireless connectivity logs |
| Reports | POST Create a ledger billing group report, GET Retrieve a ledger billing group report |
| Number Block Orders | GET List number block orders, POST Create a number block order, GET Retrieve a number block order |
| Inbound Channels | GET Retrieve your inbound channels, PATCH Update inbound channels |
| Number Background Jobs | GET Lists the phone numbers jobs, POST Delete a batch of numbers, POST Update the emergency settings from a batch of numbers, POST Update a batch of numbers, GET Retrieve a phone numbers job |
| Number Blocks Background Jobs | GET Lists the phone number blocks jobs, POST Deletes all numbers associated with a phone number block, GET Retrieves a phone number blocks job |
| Number Configurations | GET List phone numbers, GET List phone numbers with messaging settings, GET List phone numbers with voice settings, DELETE Delete a phone number, GET Retrieve a phone number, PATCH Update a phone number, POST Enable emergency for a phone number, GET Retrieve a phone number with messaging settings, PATCH Update a phone number with messaging settings, GET Retrieve a phone number with voice settings, PATCH Update a phone number with voice settings |
| Number Portout | GET Retrieve a list of portout requests, GET Retrieve a portout request, GET List all comments for a portout request, POST Create a comment on a portout request, PATCH Update Status |
| Outbound Voice Profiles | GET Get all outbound voice profiles, POST Create an outbound voice profile, DELETE Delete an outbound voice profile, GET Retrieve an outbound voice profile, PATCH Updates an existing outbound voice profile. |
| CSV Downloads | GET List CSV downloads, POST Create a CSV download, GET Retrieve a CSV download |
| Phone Number Porting | POST Run a portability check |
| Porting Order | GET List all porting orders, POST Create a porting order, GET List all exception types, DELETE Request cancellation, GET Retrieve a porting order, PATCH Edit a porting order, POST Activates every number on a porting order., POST Cancel this porting order, POST Confirms the porting order is ready to be actioned., GET List all porting activation jobs, GET Retrieve a porting activation job, GET List all comments of a porting order, POST Create a comment for a porting order, GET Download a porting order loa template, GET List all porting phone numbers |
| Private Wireless Gateways | GET Get all Private Wireless Gateways, POST Create a Private Wireless Gateway, DELETE Delete a Private Wireless Gateway, GET Get a Private Wireless Gateway |
| Queue Commands | GET Retrieve a call queue, GET Retrieve calls from a queue, GET Retrieve a call from a queue |
| Recordings Commands | GET List recordings, GET Retrieve a recording |
| MDR Detail Reports | GET Get Cdr Requests, POST Submit Mdr Request, GET GET Reports Mdrs |
| CDR Usage Reports | GET Get Usage Report Sync |
| MDR Usage Reports | GET Get Usage Reports, POST Submit Usage Report, GET Get Usage Report Sync 1 |
| WDR Detail Reports | GET Get Paginated Wdrs |
| Access Tokens | POST Create an Access Token. |
| Credentials | GET List all credentials, POST Create a credential, GET List all tags, DELETE Delete a credential, GET Get a credential, PATCH Update a credential, POST Perform activate or deactivate action on provided Credential |
| Reporting | GET Get all Wireless Detail Records (WDRs) Reports, POST Create a Wireless Detail Records (WDRs) Report, DELETE Delete a Wireless Detail Record (WDR) Report, GET Get a Wireless Detail Record (WDR) Report |
| Requirement Types | GET List all requirement types, GET Retrieve a requirement types |
| Requirements | GET List all requirements, GET Retrieve a document requirement |
| Room Participants | GET View a list of room participants., GET View a room participant. |
| Room Sessions | GET View a list of room sessions., GET View a room session., GET View a list of room participants. |
| Rooms | GET View a list of rooms., POST Create a room., DELETE Delete a room., GET View a room., GET View a list of room sessions. |
| Rooms Client Tokens | POST Create Client Token to join a room., POST Refresh Client Token to join a room. |
| SIM Card Group Actions | GET List SIM card group actions, GET Get SIM card group action details |
| SIM Card Groups | GET Get all SIM card groups, POST Create a SIM card group, DELETE Delete a SIM card group, GET Get SIM card group, PATCH Update a SIM card group, POST Request Private Wireless Gateway removal from SIM card group, POST Request Private Wireless Gateway assignment for SIM card group |
| SIM Card Orders | POST Preview SIM card orders, GET Get all SIM card orders, POST Create a SIM card order, GET Get a single SIM card order |
| Short Codes | GET List short codes, GET Retrieve a short code, PATCH Update short code |
| Te XML Applications | GET List all TeXML Applications, POST Creates a TeXML Application, DELETE Deletes a TeXML Application, GET Retrieve a TeXML Application, PATCH Update a TeXML Application |
| Verify | GET List verifications by phone number, POST Submit a verification code, POST Trigger a Call verification, POST Trigger a Flash call verification, POST Trigger a PSD2 verification, POST Trigger a SMS verification, POST Trigger a Whatsapp verification, GET Retrieve a verification, GET List all Verify profiles, POST Create a Verify profile, DELETE Delete a Verify profile, GET Retrieve a Verify profile, PATCH Update a Verify profile |
| Webhooks | GET List webhook deliveries, GET Find webhook_delivery details by ID |
| Whats App Contacts | POST Check Contact |
| Whats App Detail Reports | GET Get Requests, POST Submit Request |
| Whats App Media | POST Upload Media, DELETE Delete Media, GET Download Media |
| Whats App Messages | POST Send Message, PATCH Mark Message As Read |
| Whats App Usage Aggregations | GET Get Usage Aggregations Sync |
| Whats App Users | GET Get User, PATCH Update WhatsApp User |

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from telnyx docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official telnyx OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **telnyx** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the telnyx API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
