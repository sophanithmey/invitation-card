'use server';

export async function verifyAdminPassword(password: string): Promise<boolean> {
  // Use environment variable if set, otherwise fallback to default for demo purposes.
  // Since this is a server action, the password is never exposed to the client bundle.
  const correctPassword = process.env.ADMIN_PASSWORD || 'admin123';
  return password === correctPassword;
}
