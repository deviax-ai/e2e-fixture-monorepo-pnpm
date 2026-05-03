export const metadata = { title: "Monorepo Web", description: "pnpm workspace" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", maxWidth: 720, margin: "40px auto", padding: "0 16px" }}>
        {children}
      </body>
    </html>
  );
}
