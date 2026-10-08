import { Link, createFileRoute } from '@tanstack/react-router'
import {
  CONTACT_EMAIL,
  ExternalLink,
  GOOGLE_PERMISSIONS_URL,
  LegalPage,
  type LegalSection,
} from '../components/LegalPage'

export const Route = createFileRoute('/terms')({
  head: () => ({
    meta: [
      { title: 'Terms of Service · SteamLookup' },
      { name: 'description', content: 'The terms that govern your use of the SteamLookup desktop application.' },
    ],
  }),
  component: TermsPage,
})

const sections: LegalSection[] = [
  {
    id: 'description',
    title: 'Description of Service',
    blocks: [
      { type: 'p', content: 'SteamLookup is a desktop application that:' },
      {
        type: 'list',
        items: [
          'Helps identify DRM information for Steam games using publicly available data sources.',
          'Assists with managing game manifests and license configuration through third-party Steam tools.',
          "Optionally syncs game save files to the user's own Google Drive account.",
        ],
      },
      { type: 'p', content: 'The App is provided free of charge.' },
    ],
  },
  {
    id: 'eligibility',
    title: 'Eligibility',
    blocks: [
      { type: 'p', content: 'You must be at least 13 years old to use the App. By using the App, you represent that you meet this requirement.' },
    ],
  },
  {
    id: 'responsibilities',
    title: 'Your Responsibilities',
    blocks: [
      { type: 'p', content: 'You agree that you will:' },
      {
        type: 'list',
        items: [
          'Use the App only for lawful purposes and in compliance with all applicable laws in your jurisdiction.',
          'Not use the App to violate any license agreements, terms of service, or copyright protections.',
          'Not resell the App without express written permission.',
          'Keep your Google account credentials and OAuth tokens secure.',
          'Maintain your own backups of game save files. The App is not a substitute for reliable backups.',
        ],
      },
    ],
  },
  {
    id: 'google-drive',
    title: 'Google Drive Integration',
    blocks: [
      {
        type: 'p',
        content: (
          <>
            If you use the Google Drive sync feature, you also agree to be bound by Google's Terms of Service. You
            authorize SteamLookup to access Google Drive files it creates on your behalf, as described in
            our <Link to="/privacy" className="legal-link">Privacy Policy</Link>.
          </>
        ),
      },
      {
        type: 'p',
        content: (
          <>
            You can revoke this authorization at any time
            at <ExternalLink href={GOOGLE_PERMISSIONS_URL}>myaccount.google.com/permissions</ExternalLink>.
          </>
        ),
      },
    ],
  },
  {
    id: 'no-warranty',
    title: 'No Warranty',
    blocks: [
      {
        type: 'caps',
        content:
          'The App is provided "as is" and "as available", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and non-infringement.',
      },
      { type: 'p', content: 'We do not warrant that:' },
      {
        type: 'list',
        items: [
          'The App will be uninterrupted, error-free, or free of harmful components.',
          'Any data, including game save files, will be preserved, correctly synced, or recoverable.',
          'Save file paths or DRM information provided by third-party sources (such as PCGamingWiki) will be accurate or current.',
        ],
      },
    ],
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    blocks: [
      {
        type: 'caps',
        content:
          'To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of data, loss of game progress, loss of profits, or loss of goodwill, arising out of or in connection with your use of the App.',
      },
      { type: 'p', content: 'In particular, we are not responsible for:' },
      {
        type: 'list',
        items: [
          'Lost, corrupted, or overwritten game save files.',
          'Any consequences of using third-party Steam tools referenced by the App.',
          'Account actions taken by Valve, Google, or any other platform as a result of your use of the App.',
        ],
      },
    ],
  },
  {
    id: 'third-party',
    title: 'Third-Party Services',
    blocks: [
      {
        type: 'p',
        content:
          "The App interacts with third-party services including but not limited to Valve's Steam platform, Google Drive, PCGamingWiki, and various game download sites. Your use of those services is governed by their own terms and privacy policies. We are not responsible for their content, availability, or practices.",
      },
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    blocks: [
      {
        type: 'p',
        content:
          'SteamLookup is distributed as a compiled binary only. The source code is not publicly available. Third-party trademarks, including Steam, Valve, Google, and Drive, belong to their respective owners. SteamLookup is not affiliated with, endorsed by, or sponsored by Valve Corporation or Google LLC.',
      },
    ],
  },
  {
    id: 'termination',
    title: 'Termination',
    blocks: [
      {
        type: 'p',
        content:
          'We may update, modify, or discontinue the App at any time without notice. You may stop using the App at any time by uninstalling it and deleting the folder:',
      },
      { type: 'code', content: '%LOCALAPPDATA%\\SteamLookup\\' },
    ],
  },
  {
    id: 'changes',
    title: 'Changes to These Terms',
    blocks: [
      {
        type: 'p',
        content:
          'We may update these Terms from time to time. Changes will be posted on this page with a revised "Last updated" date. Continued use of the App after changes constitutes acceptance of the updated Terms.',
      },
    ],
  },
  {
    id: 'governing-law',
    title: 'Governing Law',
    blocks: [
      {
        type: 'p',
        content:
          'These Terms are governed by the laws of your country of residence, without regard to its conflict of law principles.',
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    blocks: [
      { type: 'p', content: 'For questions about these Terms, contact:' },
      {
        type: 'p',
        content: <a href={`mailto:${CONTACT_EMAIL}`} className="legal-link">{CONTACT_EMAIL}</a>,
      },
    ],
  },
]

function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      lastUpdated="9 October 2026"
      intro={
        <>
          These Terms of Service ("Terms") govern your use of SteamLookup ("the App"). By downloading, installing,
          or using the App, you agree to be bound by these Terms. If you do not agree, do not use the App.
        </>
      }
      sections={sections}
    />
  )
}
