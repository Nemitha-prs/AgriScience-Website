// This layout overrides the parent admin layout for the login page
// No auth checks needed here - middleware handles protection
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

