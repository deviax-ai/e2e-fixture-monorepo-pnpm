import { makeGreeting } from "@app/shared";

export default function Home() {
  const greeting = makeGreeting("monorepo");
  return (
    <main>
      <h1>Monorepo Web</h1>
      <p>{greeting.text}</p>
      <p>
        <small>generated at {new Date(greeting.ts).toISOString()}</small>
      </p>
    </main>
  );
}
