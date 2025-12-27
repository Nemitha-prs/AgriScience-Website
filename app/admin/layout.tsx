// Admin layout - middleware handles authentication
// This layout just renders children, protection is done in middleware.ts
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
