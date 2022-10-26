export function assure(condition: string): asserts condition {
  if (!condition) throw new Error();
}

export function not(condition: unknown): condition is true {
  return !Boolean(condition);
}

export type UnionToObj<T extends string> = {
  [K in T]: K;
};
