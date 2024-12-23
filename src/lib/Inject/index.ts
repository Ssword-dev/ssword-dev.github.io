// Improved function with better type safety
export default (function injectGlobal<T>(
  this: any,
  attrName: string,
  attrVal: T
) {
  // Ensure the attribute doesn't already exist to avoid overwriting
  if (attrName in this) {
    console.warn(
      `Warning: ${attrName} already exists on globalThis. Overwriting it.`
    );
  }
  this[attrName] = attrVal;
}.bind(globalThis));
