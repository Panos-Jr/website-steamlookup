import { createFileRoute } from '@tanstack/react-router'
import {
  CONTACT_EMAIL,
  ExternalLink,
  GOOGLE_PERMISSIONS_URL,
  LegalPage,
  type LegalSection,
} from '../components/LegalPage'

export const Route = createFileRoute('/privacy')({
  head: () => ({
    meta: [
      { title: 'Privacy Policy · SteamLookup' },
      { name: 'description', content: 'How the SteamLookup desktop application accesses, uses, and protects your data.' },
    ],
  }),
  component: PrivacyPage,
})

const sections: LegalSection[] = [
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    blocks: [
      {
        type: 'p',
        content:
          'We do not collect, store, or transmit any personal information to our servers. SteamLookup runs entirely on your local machine. All data, including your Google authentication tokens and game save files, stays on your computer or goes directly to your personal Google Drive account.',
      },
      { type: 'p', content: 'Specifically, the App:' },
      {
        type: 'list',
        items: [
          'Reads game metadata (App IDs, titles, DRM information) from publicly available APIs such as the Steam Store API and PCGamingWiki.',
          'Reads your local Steam installation to detect installed games and their save file locations.',
          'If you choose to enable Google Drive sync, accesses your Google Drive only for files created by this App.',
        ],
      },
    ],
  },
  {
    id: 'google-drive-access',
    title: 'Google Drive Access',
    blocks: [
      {
        type: 'p',
        content: 'If you authorize SteamLookup to access your Google Drive, the App requests the following OAuth scope:',
      },
      { type: 'code', content: 'https://www.googleapis.com/auth/drive.file' },
      { type: 'heading', content: 'What this scope allows' },
      {
        type: 'p',
        content:
          'The App can view, create, edit, and delete only the files that SteamLookup itself creates in your Google Drive. It cannot see, read, modify, or delete any other files in your Drive, even if they belong to you.',
      },
      { type: 'heading', content: 'What the App actually does with this access' },
      {
        type: 'list',
        items: [
          <>Creates a folder named <code>SteamLookup_Saves</code> in your Google Drive.</>,
          'Uploads compressed archives of your game save files into subfolders (one per game, named by Steam App ID).',
          'Optionally downloads those archives back to your local machine when newer versions exist and you have enabled automatic downloads.',
        ],
      },
      { type: 'heading', content: 'What the App never does' },
      {
        type: 'list',
        tone: 'negative',
        items: [
          'Access, read, modify, or delete any other Google Drive files.',
          'Share, transfer, or disclose your Google Drive data to any third party.',
          "Send your Google data to any server other than Google's own APIs.",
          'Use your Google data for advertising, analytics, or profiling.',
          'Access your Google account data outside of Google Drive (no Gmail, no Calendar, no Contacts, etc.).',
        ],
      },
    ],
  },
  {
    id: 'google-api-compliance',
    title: 'Google API Services User Data Policy Compliance',
    blocks: [
      {
        type: 'p',
        content: (
          <>
            SteamLookup's use of information received from Google APIs adheres to
            the <ExternalLink href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</ExternalLink>,
            including the Limited Use requirements.
          </>
        ),
      },
      { type: 'p', content: 'In particular, SteamLookup:' },
      {
        type: 'list',
        items: [
          'Uses Google user data only to provide the save-sync feature described above.',
          "Does not transfer Google user data to third parties except as necessary to provide or improve the App's single purpose.",
          'Does not use Google user data for serving advertisements.',
          'Does not allow humans to read your Google Drive content.',
        ],
      },
    ],
  },
  {
    id: 'storage-and-security',
    title: 'Data Storage and Security',
    blocks: [
      { type: 'heading', content: 'Locally stored data' },
      {
        type: 'p',
        content: (
          <>
            When you authorize the App, your OAuth refresh token is saved to a file named <code>token.json</code> inside
            your Windows user profile at:
          </>
        ),
      },
      { type: 'code', content: '%LOCALAPPDATA%\\SteamLookup\\token.json' },
      {
        type: 'p',
        content:
          "This file is protected by your Windows user account permissions. The App uses the refresh token solely to obtain short-lived access tokens from Google; these are never sent anywhere except Google's OAuth servers.",
      },
      { type: 'heading', content: 'Data in Google Drive' },
      {
        type: 'p',
        content: "Save file archives are stored in your own Google Drive account and are governed by Google's Privacy Policy.",
      },
      { type: 'heading', content: 'No telemetry' },
      { type: 'p', content: 'The App does not include analytics, crash reporting, or telemetry of any kind.' },
    ],
  },
  {
    id: 'retention-and-deletion',
    title: 'Data Retention and Deletion',
    blocks: [
      {
        type: 'p',
        content: (
          <>
            You can revoke SteamLookup's access to your Google Drive at any time by
            visiting <ExternalLink href={GOOGLE_PERMISSIONS_URL}>myaccount.google.com/permissions</ExternalLink> and
            removing SteamLookup from the list of connected apps.
          </>
        ),
      },
      { type: 'p', content: 'To delete all locally stored data, simply delete the folder:' },
      { type: 'code', content: '%LOCALAPPDATA%\\SteamLookup\\' },
      {
        type: 'p',
        content: (
          <>
            To delete save archives stored in your Google Drive, open the folder named <code>SteamLookup_Saves</code> and
            delete it. Revoking access does not automatically delete files the App already created.
          </>
        ),
      },
    ],
  },
  {
    id: 'childrens-privacy',
    title: "Children's Privacy",
    blocks: [
      {
        type: 'p',
        content:
          'SteamLookup is not directed at children under the age of 13. We do not knowingly collect information from children.',
      },
    ],
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    blocks: [
      {
        type: 'p',
        content:
          'We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised "Last updated" date. Continued use of the App after changes constitutes acceptance of the updated policy.',
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    blocks: [
      {
        type: 'p',
        content: "For questions or concerns about this Privacy Policy or the App's data practices, contact:",
      },
      {
        type: 'p',
        content: <a href={`mailto:${CONTACT_EMAIL}`} className="legal-link">{CONTACT_EMAIL}</a>,
      },
    ],
  },
]

function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      lastUpdated="9 October 2026"
      intro={
        <>
          SteamLookup is a desktop application that helps users identify DRM information for Steam games and
          optionally sync game save files to their own Google Drive account. This Privacy Policy explains what data
          we access, how we use it, and how we protect it.
        </>
      }
      sections={sections}
    />
  )
}
