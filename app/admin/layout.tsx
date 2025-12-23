import { redirect } from 'next/navigation';
import { createSupabaseServerClient } from '@/lib/supabaseServer';
import { isOwnerEmail } from '@/lib/admin';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  try {
    const supabase = createSupabaseServerClient();
    const { data: { user }, error } = await supabase.auth.getUser();

    // If error getting user or no user, allow render (login page will handle itself)
    if (error || !user) {
      return <>{children}</>;
    }

    // If user exists but not owner, redirect
    if (!isOwnerEmail(user.email)) {
      redirect('/admin/login');
    }

    // User is owner, allow access
    return <>{children}</>;
  } catch (error) {
    // If any error occurs, render children (allows login page to work)
    return <>{children}</>;
  }
}
