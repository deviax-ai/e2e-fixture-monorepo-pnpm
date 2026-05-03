export interface Greeting {
  text: string;
  ts: number;
}

export function makeGreeting(name: string): Greeting {
  return { text: `Hello, ${name}!`, ts: Date.now() };
}
