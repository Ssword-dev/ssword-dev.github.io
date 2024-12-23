import { mode, EnvMode } from "../env";

let raiser: (exception: Error) => void;

if (mode === EnvMode.Development) {
  raiser = (exception: Error): asserts exception => {
    throw exception; // Development mode: throw the exception
  };
} else if (mode === EnvMode.Production) {
  raiser = (exception: Error) => {
    console.warn(exception); // Production mode: log a warning instead (prevent crash)
  };
} else {
  throw new Error("Invalid environment mode");
}

// expose exports
export const raise = raiser;
export default raise;
