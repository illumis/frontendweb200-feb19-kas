export type NameDecorator = (x: string) => string;

export function formatName(first: string, last: string, fn: NameDecorator = identity): string {
  const fullName = `${last}, ${first}`;
  return fn(fullName);
}

// Note how this is used on line 4 even though its an named !!!Anon!!! function
// - Suspect this is only possible due to const nature or because its not actually invoked
// - normally not possible
const identity: NameDecorator = (n) => n;

// ----------------------------------------------------
