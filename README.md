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
| Addresses | Get list all addresses, Post creates an address, Post validate an address, Deletes an address, Get retrieve an address |
| Authentication Providers | Get list all sso authentication providers, Post creates an authentication provider, Deletes an authentication provider, Get retrieve an authentication provider, Patch update a authentication provider |
| Billing | Get retrieve user balance details |
| Billing Groups | Get list all billing groups, Post create a billing group, Delete a billing group, Get retrieve a billing group, Patch update a billing group |
| Bulk Credentials | Delete several credentials, Patch update several credentials, Post creates several credentials, Post perform activate or deactivate action on all credentials filtered by the provided tag |
| Call Commands | Post dial, Post answer call, Post bridge calls, Post enqueue call, Post forking start, Post forking stop, Post gather stop, Post gather using audio, Post gather using speak, Post hangup call, Post remove call from a queue, Post play audio url, Post stop audio playback, Post record pause, Post record resume, Post recording start, Post recording stop, Post sip refer a call, Post reject a call, Post send dtmf, Post speak text, Post transcription start, Post transcription stop, Post transfer call |
| Call Control Applications | Get list call control applications, Post create a call control application, Delete a call control application, Get retrieve a call control application, Patch update a call control application |
| Call Information | Get retrieve a call status |
| Conference Commands | Get list conferences, Post create conference, Get list conference participants, Get retrieve a conference, Post dial a new participant into a conference, Post hold conference participants, Post join a conference, Post leave a conference, Post mute conference participants, Post play audio to conference participants, Post conference recording start, Post conference recording stop, Post speak text to conference participants, Post stop audio being played on the conference, Post unhold conference participants, Post unmute conference participants, Post update conference participant |
| Connections | Get list connections, Get retrieve a connection |
| Credential Connections | Get list credential connections, Post create a credential connection, Delete a credential connection, Get retrieve a credential connection, Patch update a credential connection |
| Debugging | Get list call events |
| Detail Records | Get search detail records |
| Documents | Get list all document links, Get list all documents, Post upload a document, Delete a document, Get retrieve a document, Patch update a document, Get download a document |
| FQDN Connections | Get list fqdn connections, Post create an fqdn connection, Delete an fqdn connection, Get retrieve an fqdn connection, Patch update an fqdn connection |
| FQD Ns | Get list fqdns, Post create an fqdn, Delete an fqdn, Get retrieve an fqdn, Patch update an fqdn |
| IP Connections | Get list ip connections, Post create an ip connection, Delete an ip connection, Get retrieve an ip connection, Patch update an ip connection |
| I Ps | Get list ips, Post create an ip, Delete an ip, Get retrieve an ip, Patch update an ip |
| Inventory Level | Get create an inventory coverage request |
| MDR Search Beta | Get fetch messaging detail records, Get fetch message body by id |
| Managed Accounts | Get lists accounts managed by the current user, Post create a new managed account, Get retrieve a managed account, Post disables a managed account, Post enables a managed account |
| Media Storage API | Get list uploaded media, Post upload media, Deletes stored media, Get retrieve stored media, Put update stored media, Get download stored media |
| Messages | Post send a message, Post send a long code message, Post send a message using number pool, Post send a short code message, Get retrieve a message |
| Messaging Hosted Number | Get list messaging hosted number orders, Post create a messaging hosted number order, Get retrieve a messaging hosted number order, Post upload file required for a messaging hosted number order, Delete a messaging hosted number |
| Messaging Profiles | Get list messaging profile metrics, Get list messaging profiles, Post create a messaging profile, Delete a messaging profile, Get retrieve a messaging profile, Patch update a messaging profile, Get retrieve messaging profile metrics, Get list phone numbers associated with a messaging profile, Get list short codes associated with a messaging profile |
| Messaging URL Domains | Get list messaging url domains |
| Mobile Operator Networks | Get list mobile operator networks |
| Notifications | Get list notification channels, Post create a notification channel, Delete a notification channel, Get retrieve a notification channel, Patch update a notification channel, Get list all notifications events conditions, Get list all notifications events, Get list all notifications profiles, Post create a notification profile, Delete a notification profile, Get retrieve a notification profile, Patch update a notification profile, Get list notification settings, Post add a notification setting, Delete a notification setting, Get retrieve a notification setting |
| Number Lookup | Get lookup phone number data |
| Number Order Documents | Get list number order documents, Post create a number order document, Get retrieve a number order document, Patch update a number order document |
| Number Orders | Get retrieve all comments, Post create a comment, Get retrieve a comment, Patch mark a comment as read, Get retrieve a list of phone numbers associated to orders, Get retrieve a number order phone number, Patch update a number order phone number, Get list number orders, Post create a number order, Get retrieve a number order, Patch update a number order, Get list sub number orders, Get retrieve a sub number order, Patch update a sub number order |
| Number Reservations | Get list number reservations, Post create a number reservation, Get retrieve a number reservation, Post extend a number reservation |
| Number Search | Get list available phone number blocks, Get list available phone numbers |
| OTA Updates | Get list ota updates, Get ota update |
| Programmable Fax Applications | Get list all fax applications, Post creates a fax application, Deletes a fax application, Get retrieve a fax application, Patch update a fax application |
| Programmable Fax Commands | Get view a list of faxes, Post send a fax, Delete a fax, Get view a fax, Post refresh a fax |
| SIM Cards | Put bulk network preferences for sim cards, Post register sim cards, Get all sim cards, Post validate sim cards registration codes, Deletes a sim card, Get sim card, Patch update a sim card, Post request a sim card disable, Post request a sim card enable, Post request setting a sim card to standby, Delete network preferences, Get network preferences, Put set network preferences, Delete sim card public ip, Get sim card public ip definition, Post set sim card public ip, Get list wireless connectivity logs |
| Reports | Post create a ledger billing group report, Get retrieve a ledger billing group report |
| Number Block Orders | Get list number block orders, Post create a number block order, Get retrieve a number block order |
| Inbound Channels | Get retrieve your inbound channels, Patch update inbound channels |
| Number Background Jobs | Get lists the phone numbers jobs, Post delete a batch of numbers, Post update the emergency settings from a batch of numbers, Post update a batch of numbers, Get retrieve a phone numbers job |
| Number Blocks Background Jobs | Get lists the phone number blocks jobs, Post deletes all numbers associated with a phone number block, Get retrieves a phone number blocks job |
| Number Configurations | Get list phone numbers, Get list phone numbers with messaging settings, Get list phone numbers with voice settings, Delete a phone number, Get retrieve a phone number, Patch update a phone number, Post enable emergency for a phone number, Get retrieve a phone number with messaging settings, Patch update a phone number with messaging settings, Get retrieve a phone number with voice settings, Patch update a phone number with voice settings |
| Number Portout | Get retrieve a list of portout requests, Get retrieve a portout request, Get list all comments for a portout request, Post create a comment on a portout request, Patch update status |
| Outbound Voice Profiles | Get all outbound voice profiles, Post create an outbound voice profile, Delete an outbound voice profile, Get retrieve an outbound voice profile, Patch updates an existing outbound voice profile |
| CSV Downloads | Get list csv downloads, Post create a csv download, Get retrieve a csv download |
| Phone Number Porting | Post run a portability check |
| Porting Order | Get list all porting orders, Post create a porting order, Get list all exception types, Delete request cancellation, Get retrieve a porting order, Patch edit a porting order, Post activates every number on a porting order, Post cancel this porting order, Post confirms the porting order is ready to be actioned, Get list all porting activation jobs, Get retrieve a porting activation job, Get list all comments of a porting order, Post create a comment for a porting order, Get download a porting order loa template, Get list all porting phone numbers |
| Private Wireless Gateways | Get all private wireless gateways, Post create a private wireless gateway, Delete a private wireless gateway, Get a private wireless gateway |
| Queue Commands | Get retrieve a call queue, Get retrieve calls from a queue, Get retrieve a call from a queue |
| Recordings Commands | Get list recordings, Get retrieve a recording |
| MDR Detail Reports | Get cdr requests, Post submit mdr request, Get reports mdrs |
| CDR Usage Reports | Get usage report sync |
| MDR Usage Reports | Get usage reports, Post submit usage report, Get usage report sync 1 |
| WDR Detail Reports | Get paginated wdrs |
| Access Tokens | Post create an access token |
| Credentials | Get list all credentials, Post create a credential, Get list all tags, Delete a credential, Get a credential, Patch update a credential, Post perform activate or deactivate action on provided credential |
| Reporting | Get all wireless detail records wdrs reports, Post create a wireless detail records wdrs report, Delete a wireless detail record wdr report, Get a wireless detail record wdr report |
| Requirement Types | Get list all requirement types, Get retrieve a requirement types |
| Requirements | Get list all requirements, Get retrieve a document requirement |
| Room Participants | Get view a list of room participants, Get view a room participant |
| Room Sessions | Get view a list of room sessions, Get view a room session, Get view a list of room participants |
| Rooms | Get view a list of rooms, Post create a room, Delete a room, Get view a room, Get view a list of room sessions |
| Rooms Client Tokens | Post create client token to join a room, Post refresh client token to join a room |
| SIM Card Group Actions | Get list sim card group actions, Get sim card group action details |
| SIM Card Groups | Get all sim card groups, Post create a sim card group, Delete a sim card group, Get sim card group, Patch update a sim card group, Post request private wireless gateway removal from sim card group, Post request private wireless gateway assignment for sim card group |
| SIM Card Orders | Post preview sim card orders, Get all sim card orders, Post create a sim card order, Get a single sim card order |
| Short Codes | Get list short codes, Get retrieve a short code, Patch update short code |
| Te XML Applications | Get list all texml applications, Post creates a texml application, Deletes a texml application, Get retrieve a texml application, Patch update a texml application |
| Verify | Get list verifications by phone number, Post submit a verification code, Post trigger a call verification, Post trigger a flash call verification, Post trigger a psd2 verification, Post trigger a sms verification, Post trigger a whatsapp verification, Get retrieve a verification, Get list all verify profiles, Post create a verify profile, Delete a verify profile, Get retrieve a verify profile, Patch update a verify profile |
| Webhooks | Get list webhook deliveries, Get find webhookdelivery details by id |
| Whats App Contacts | Post check contact |
| Whats App Detail Reports | Get requests, Post submit request |
| Whats App Media | Post upload media, Delete media, Get download media |
| Whats App Messages | Post send message, Patch mark message as read |
| Whats App Usage Aggregations | Get usage aggregations sync |
| Whats App Users | Get user, Patch update whatsapp user |

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
