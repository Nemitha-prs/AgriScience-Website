// Owner email allowlist
// Add owner emails here or via environment variable
const OWNER_EMAILS = process.env.ADMIN_OWNER_EMAILS
  ? process.env.ADMIN_OWNER_EMAILS.split(',').map((email) => email.trim().toLowerCase())
  : [];

export function isOwnerEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  return OWNER_EMAILS.includes(email.toLowerCase());
}

export function getOwnerEmails(): string[] {
  return [...OWNER_EMAILS];
}

