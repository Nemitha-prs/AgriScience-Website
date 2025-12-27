/**
 * Environment Variable Validation
 * Validates required environment variables at startup with clear error messages
 * Only runs on server-side, non-intrusive
 */

const requiredEnvVars = [
  {
    name: 'ADMIN_EMAIL',
    description: 'Admin email for authentication',
    required: true,
  },
  {
    name: 'ADMIN_PASSWORD',
    description: 'Admin password for authentication',
    required: true,
  },
  {
    name: 'JWT_SECRET',
    description: 'JWT secret for token signing',
    required: true,
  },
];

const optionalEnvVars = [
  {
    name: 'RESEND_API_KEY',
    description: 'Resend API key for email functionality',
    required: false,
  },
  {
    name: 'NEXT_PUBLIC_SITE_URL',
    description: 'Public site URL for SEO and metadata',
    required: false,
  },
];

/**
 * Validate environment variables
 * Only runs on server-side, logs clear error messages if validation fails
 */
export function validateEnvironmentVariables(): { valid: boolean; errors: string[] } {
  // Only validate on server-side
  if (typeof window !== 'undefined') {
    return { valid: true, errors: [] };
  }

  const errors: string[] = [];

  // Check required variables
  for (const envVar of requiredEnvVars) {
    const value = process.env[envVar.name];
    if (!value || value.trim() === '') {
      errors.push(
        `Missing required environment variable: ${envVar.name} - ${envVar.description}`
      );
    }
  }

  // Warn about optional but recommended variables
  for (const envVar of optionalEnvVars) {
    const value = process.env[envVar.name];
    if (!value || value.trim() === '') {
      console.warn(
        `Optional environment variable not set: ${envVar.name} - ${envVar.description}`
      );
    }
  }

  if (errors.length > 0) {
    console.error('❌ Environment Variable Validation Failed:');
    errors.forEach((error) => console.error(`  - ${error}`));
    console.error('\nPlease add the missing variables to your .env.local file.');
  } else {
    console.log('✅ Environment variables validated successfully');
  }

  return { valid: errors.length === 0, errors };
}

// Auto-validate on module load (server-side only)
if (typeof window === 'undefined') {
  validateEnvironmentVariables();
}

