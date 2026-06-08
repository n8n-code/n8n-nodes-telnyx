import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { addressesDescription } from './resources/addresses';
import { authenticationProvidersDescription } from './resources/authentication-providers';
import { billingDescription } from './resources/billing';
import { billingGroupsDescription } from './resources/billing-groups';
import { bulkCredentialsDescription } from './resources/bulk-credentials';
import { callCommandsDescription } from './resources/call-commands';
import { callControlApplicationsDescription } from './resources/call-control-applications';
import { callInformationDescription } from './resources/call-information';
import { conferenceCommandsDescription } from './resources/conference-commands';
import { connectionsDescription } from './resources/connections';
import { credentialConnectionsDescription } from './resources/credential-connections';
import { debuggingDescription } from './resources/debugging';
import { detailRecordsDescription } from './resources/detail-records';
import { documentsDescription } from './resources/documents';
import { fqdnConnectionsDescription } from './resources/fqdn-connections';
import { fqdNsDescription } from './resources/fqd-ns';
import { ipConnectionsDescription } from './resources/ip-connections';
import { iPsDescription } from './resources/i-ps';
import { inventoryLevelDescription } from './resources/inventory-level';
import { mdrSearchBetaDescription } from './resources/mdr-search-beta';
import { managedAccountsDescription } from './resources/managed-accounts';
import { mediaStorageApiDescription } from './resources/media-storage-api';
import { messagesDescription } from './resources/messages';
import { messagingHostedNumberDescription } from './resources/messaging-hosted-number';
import { messagingProfilesDescription } from './resources/messaging-profiles';
import { messagingUrlDomainsDescription } from './resources/messaging-url-domains';
import { mobileOperatorNetworksDescription } from './resources/mobile-operator-networks';
import { notificationsDescription } from './resources/notifications';
import { numberLookupDescription } from './resources/number-lookup';
import { numberOrderDocumentsDescription } from './resources/number-order-documents';
import { numberOrdersDescription } from './resources/number-orders';
import { numberReservationsDescription } from './resources/number-reservations';
import { numberSearchDescription } from './resources/number-search';
import { otaUpdatesDescription } from './resources/ota-updates';
import { programmableFaxApplicationsDescription } from './resources/programmable-fax-applications';
import { programmableFaxCommandsDescription } from './resources/programmable-fax-commands';
import { simCardsDescription } from './resources/sim-cards';
import { reportsDescription } from './resources/reports';
import { numberBlockOrdersDescription } from './resources/number-block-orders';
import { inboundChannelsDescription } from './resources/inbound-channels';
import { numberBackgroundJobsDescription } from './resources/number-background-jobs';
import { numberBlocksBackgroundJobsDescription } from './resources/number-blocks-background-jobs';
import { numberConfigurationsDescription } from './resources/number-configurations';
import { numberPortoutDescription } from './resources/number-portout';
import { outboundVoiceProfilesDescription } from './resources/outbound-voice-profiles';
import { csvDownloadsDescription } from './resources/csv-downloads';
import { phoneNumberPortingDescription } from './resources/phone-number-porting';
import { portingOrderDescription } from './resources/porting-order';
import { privateWirelessGatewaysDescription } from './resources/private-wireless-gateways';
import { queueCommandsDescription } from './resources/queue-commands';
import { recordingsCommandsDescription } from './resources/recordings-commands';
import { mdrDetailReportsDescription } from './resources/mdr-detail-reports';
import { cdrUsageReportsDescription } from './resources/cdr-usage-reports';
import { mdrUsageReportsDescription } from './resources/mdr-usage-reports';
import { wdrDetailReportsDescription } from './resources/wdr-detail-reports';
import { accessTokensDescription } from './resources/access-tokens';
import { credentialsDescription } from './resources/credentials';
import { reportingDescription } from './resources/reporting';
import { requirementTypesDescription } from './resources/requirement-types';
import { requirementsDescription } from './resources/requirements';
import { roomParticipantsDescription } from './resources/room-participants';
import { roomSessionsDescription } from './resources/room-sessions';
import { roomsDescription } from './resources/rooms';
import { roomsClientTokensDescription } from './resources/rooms-client-tokens';
import { simCardGroupActionsDescription } from './resources/sim-card-group-actions';
import { simCardGroupsDescription } from './resources/sim-card-groups';
import { simCardOrdersDescription } from './resources/sim-card-orders';
import { shortCodesDescription } from './resources/short-codes';
import { teXmlApplicationsDescription } from './resources/te-xml-applications';
import { verifyDescription } from './resources/verify';
import { webhooksDescription } from './resources/webhooks';
import { whatsAppContactsDescription } from './resources/whats-app-contacts';
import { whatsAppDetailReportsDescription } from './resources/whats-app-detail-reports';
import { whatsAppMediaDescription } from './resources/whats-app-media';
import { whatsAppMessagesDescription } from './resources/whats-app-messages';
import { whatsAppUsageAggregationsDescription } from './resources/whats-app-usage-aggregations';
import { whatsAppUsersDescription } from './resources/whats-app-users';

export class Telnyx implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'telnyx',
		name: 'N8nDevTelnyx',
		icon: { light: 'file:./telnyx.svg', dark: 'file:./telnyx.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'SIP trunking, SMS, MMS, Call Control and Telephony Data Services',
		defaults: { name: 'telnyx' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevTelnyxApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Addresses",
					"value": "Addresses",
					"description": "Address operations"
				},
				{
					"name": "Authentication Providers",
					"value": "Authentication Providers",
					"description": "Authentication Provider operations"
				},
				{
					"name": "Billing",
					"value": "Billing",
					"description": "Billing operations"
				},
				{
					"name": "Billing Groups",
					"value": "Billing Groups",
					"description": "Billing groups operations"
				},
				{
					"name": "Bulk Credentials",
					"value": "Bulk Credentials",
					"description": "Bulk operations over Credentials"
				},
				{
					"name": "Call Commands",
					"value": "Call Commands",
					"description": "Call Control command operations"
				},
				{
					"name": "Call Control Applications",
					"value": "Call Control Applications",
					"description": "Call Control applications operations"
				},
				{
					"name": "Call Information",
					"value": "Call Information",
					"description": "Call information"
				},
				{
					"name": "Conference Commands",
					"value": "Conference Commands",
					"description": "Conference command operations"
				},
				{
					"name": "Connections",
					"value": "Connections",
					"description": "Connections operations"
				},
				{
					"name": "Credential Connections",
					"value": "Credential Connections",
					"description": "Credential connection operations"
				},
				{
					"name": "Debugging",
					"value": "Debugging",
					"description": "Call Control debugging"
				},
				{
					"name": "Detail Records",
					"value": "Detail Records",
					"description": "Detail Records operations"
				},
				{
					"name": "Documents",
					"value": "Documents",
					"description": "Documents"
				},
				{
					"name": "FQDN Connections",
					"value": "FQDN Connections",
					"description": "FQDN connection operations"
				},
				{
					"name": "FQD Ns",
					"value": "FQD Ns",
					"description": "FQDN operations"
				},
				{
					"name": "IP Connections",
					"value": "IP Connections",
					"description": "IP connection operations"
				},
				{
					"name": "I Ps",
					"value": "I Ps",
					"description": "IP operations"
				},
				{
					"name": "Inventory Level",
					"value": "Inventory Level",
					"description": "Inventory Level"
				},
				{
					"name": "MDR Search Beta",
					"value": "MDR Search Beta",
					"description": "Search messaging detail records"
				},
				{
					"name": "Managed Accounts",
					"value": "Managed Accounts",
					"description": "Managed Accounts operations"
				},
				{
					"name": "Media Storage API",
					"value": "Media Storage API",
					"description": "Media Storage operations"
				},
				{
					"name": "Messages",
					"value": "Messages",
					"description": "Messages"
				},
				{
					"name": "Messaging Hosted Number",
					"value": "Messaging Hosted Number",
					"description": "Manage your messaging hosted numbers"
				},
				{
					"name": "Messaging Profiles",
					"value": "Messaging Profiles",
					"description": "Messaging profiles"
				},
				{
					"name": "Messaging URL Domains",
					"value": "Messaging URL Domains",
					"description": "Messaging URL Domains"
				},
				{
					"name": "Mobile Operator Networks",
					"value": "Mobile Operator Networks",
					"description": "Mobile operator networks operations"
				},
				{
					"name": "Notifications",
					"value": "Notifications",
					"description": "Notification settings operations"
				},
				{
					"name": "Number Lookup",
					"value": "Number Lookup",
					"description": "Look up phone number data"
				},
				{
					"name": "Number Order Documents",
					"value": "Number Order Documents",
					"description": "Number order documents"
				},
				{
					"name": "Number Orders",
					"value": "Number Orders",
					"description": "Number orders"
				},
				{
					"name": "Number Reservations",
					"value": "Number Reservations",
					"description": "Number reservations"
				},
				{
					"name": "Number Search",
					"value": "Number Search",
					"description": "Number search"
				},
				{
					"name": "OTA Updates",
					"value": "OTA Updates",
					"description": "OTA updates operations"
				},
				{
					"name": "Programmable Fax Applications",
					"value": "Programmable Fax Applications",
					"description": "Fax Applications operations"
				},
				{
					"name": "Programmable Fax Commands",
					"value": "Programmable Fax Commands",
					"description": "Programmable fax command operations"
				},
				{
					"name": "SIM Cards",
					"value": "SIM Cards",
					"description": "SIM Cards operations"
				},
				{
					"name": "Reports",
					"value": "Reports",
					"description": ""
				},
				{
					"name": "Number Block Orders",
					"value": "Number Block Orders",
					"description": ""
				},
				{
					"name": "Inbound Channels",
					"value": "Inbound Channels",
					"description": "Inbound channels operations"
				},
				{
					"name": "Number Background Jobs",
					"value": "Number Background Jobs",
					"description": "Background jobs performed over a batch of phone numbers"
				},
				{
					"name": "Number Blocks Background Jobs",
					"value": "Number Blocks Background Jobs",
					"description": "Background jobs performed over a phone-numbers block's phone numbers"
				},
				{
					"name": "Number Configurations",
					"value": "Number Configurations",
					"description": "Configure your phone numbers"
				},
				{
					"name": "Number Portout",
					"value": "Number Portout",
					"description": "Number portout operations"
				},
				{
					"name": "Outbound Voice Profiles",
					"value": "Outbound Voice Profiles",
					"description": "Outbound voice profiles operations"
				},
				{
					"name": "CSV Downloads",
					"value": "CSV Downloads",
					"description": ""
				},
				{
					"name": "Phone Number Porting",
					"value": "Phone Number Porting",
					"description": "Determining portability of phone numbers"
				},
				{
					"name": "Porting Order",
					"value": "Porting Order",
					"description": "Porting Order operation"
				},
				{
					"name": "Private Wireless Gateways",
					"value": "Private Wireless Gateways",
					"description": "Private Wireless Gateways operations"
				},
				{
					"name": "Queue Commands",
					"value": "Queue Commands",
					"description": "Queue commands operations"
				},
				{
					"name": "Recordings Commands",
					"value": "Recordings Commands",
					"description": "Recordings commands operations"
				},
				{
					"name": "MDR Detail Reports",
					"value": "MDR Detail Reports",
					"description": ""
				},
				{
					"name": "CDR Usage Reports",
					"value": "CDR Usage Reports",
					"description": ""
				},
				{
					"name": "MDR Usage Reports",
					"value": "MDR Usage Reports",
					"description": ""
				},
				{
					"name": "WDR Detail Reports",
					"value": "WDR Detail Reports",
					"description": ""
				},
				{
					"name": "Access Tokens",
					"value": "Access Tokens",
					"description": "Access Tokens creation"
				},
				{
					"name": "Credentials",
					"value": "Credentials",
					"description": "Credentials operations"
				},
				{
					"name": "Reporting",
					"value": "Reporting",
					"description": "Wireless reporting operations"
				},
				{
					"name": "Requirement Types",
					"value": "Requirement Types",
					"description": "Types of requirements for international numbers and porting orders"
				},
				{
					"name": "Requirements",
					"value": "Requirements",
					"description": "Requirements for international numbers and porting orders"
				},
				{
					"name": "Room Participants",
					"value": "Room Participants",
					"description": "Rooms Participants operations."
				},
				{
					"name": "Room Sessions",
					"value": "Room Sessions",
					"description": "Rooms Sessions operations."
				},
				{
					"name": "Rooms",
					"value": "Rooms",
					"description": "Rooms operations."
				},
				{
					"name": "Rooms Client Tokens",
					"value": "Rooms Client Tokens",
					"description": "Rooms Client Tokens operations."
				},
				{
					"name": "SIM Card Group Actions",
					"value": "SIM Card Group Actions",
					"description": "SIM Card Group actions operations"
				},
				{
					"name": "SIM Card Groups",
					"value": "SIM Card Groups",
					"description": "SIM Card Groups operations"
				},
				{
					"name": "SIM Card Orders",
					"value": "SIM Card Orders",
					"description": "SIM Card Orders operations"
				},
				{
					"name": "Short Codes",
					"value": "Short Codes",
					"description": "Short codes"
				},
				{
					"name": "Te XML Applications",
					"value": "Te XML Applications",
					"description": "TeXML Applications operations"
				},
				{
					"name": "Verify",
					"value": "Verify",
					"description": "Two factor authentication API"
				},
				{
					"name": "Webhooks",
					"value": "Webhooks",
					"description": "Webhooks operations"
				},
				{
					"name": "Whats App Contacts",
					"value": "Whats App Contacts",
					"description": "WhatsApp contacts"
				},
				{
					"name": "Whats App Detail Reports",
					"value": "Whats App Detail Reports",
					"description": ""
				},
				{
					"name": "Whats App Media",
					"value": "Whats App Media",
					"description": "WhatsApp media files"
				},
				{
					"name": "Whats App Messages",
					"value": "Whats App Messages",
					"description": "WhatsApp messages"
				},
				{
					"name": "Whats App Usage Aggregations",
					"value": "Whats App Usage Aggregations",
					"description": ""
				},
				{
					"name": "Whats App Users",
					"value": "Whats App Users",
					"description": "WhatsApp user info"
				}
			],
			"default": ""
		},
		...addressesDescription,
		...authenticationProvidersDescription,
		...billingDescription,
		...billingGroupsDescription,
		...bulkCredentialsDescription,
		...callCommandsDescription,
		...callControlApplicationsDescription,
		...callInformationDescription,
		...conferenceCommandsDescription,
		...connectionsDescription,
		...credentialConnectionsDescription,
		...debuggingDescription,
		...detailRecordsDescription,
		...documentsDescription,
		...fqdnConnectionsDescription,
		...fqdNsDescription,
		...ipConnectionsDescription,
		...iPsDescription,
		...inventoryLevelDescription,
		...mdrSearchBetaDescription,
		...managedAccountsDescription,
		...mediaStorageApiDescription,
		...messagesDescription,
		...messagingHostedNumberDescription,
		...messagingProfilesDescription,
		...messagingUrlDomainsDescription,
		...mobileOperatorNetworksDescription,
		...notificationsDescription,
		...numberLookupDescription,
		...numberOrderDocumentsDescription,
		...numberOrdersDescription,
		...numberReservationsDescription,
		...numberSearchDescription,
		...otaUpdatesDescription,
		...programmableFaxApplicationsDescription,
		...programmableFaxCommandsDescription,
		...simCardsDescription,
		...reportsDescription,
		...numberBlockOrdersDescription,
		...inboundChannelsDescription,
		...numberBackgroundJobsDescription,
		...numberBlocksBackgroundJobsDescription,
		...numberConfigurationsDescription,
		...numberPortoutDescription,
		...outboundVoiceProfilesDescription,
		...csvDownloadsDescription,
		...phoneNumberPortingDescription,
		...portingOrderDescription,
		...privateWirelessGatewaysDescription,
		...queueCommandsDescription,
		...recordingsCommandsDescription,
		...mdrDetailReportsDescription,
		...cdrUsageReportsDescription,
		...mdrUsageReportsDescription,
		...wdrDetailReportsDescription,
		...accessTokensDescription,
		...credentialsDescription,
		...reportingDescription,
		...requirementTypesDescription,
		...requirementsDescription,
		...roomParticipantsDescription,
		...roomSessionsDescription,
		...roomsDescription,
		...roomsClientTokensDescription,
		...simCardGroupActionsDescription,
		...simCardGroupsDescription,
		...simCardOrdersDescription,
		...shortCodesDescription,
		...teXmlApplicationsDescription,
		...verifyDescription,
		...webhooksDescription,
		...whatsAppContactsDescription,
		...whatsAppDetailReportsDescription,
		...whatsAppMediaDescription,
		...whatsAppMessagesDescription,
		...whatsAppUsageAggregationsDescription,
		...whatsAppUsersDescription
		],
	};
}
