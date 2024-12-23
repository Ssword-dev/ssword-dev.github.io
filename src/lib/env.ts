export const enum  EnvMode{
    Production = "production",
    Development = "development"
}
export const mode: EnvMode = (import.meta.env.MODE as EnvMode) ?? EnvMode.Development;  // Type casting if you're confident about the value
export const env = import.meta.env ?? undefined;
export const isViteEnv = env !== undefined