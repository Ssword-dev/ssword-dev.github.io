import { FC, isValidElement, ReactNode } from "react";
import { browserName, BrowserName } from "./detect-browser";

export interface RendererProps {
  children?: ReactNode;
  target: BrowserName;
}

interface BrowserProps {
  children: ReactNode;
  strict?: boolean;
}
export interface NamespaceBrowser {
  "auto-config": any;
  Source: FC<BrowserProps>;
  Renderer: FC<RendererProps>;
  validateSourceChild<T extends ReactNode>(
    child: T,
    map: Map<string, ReactNode>
  ): T | null;
  processChild(child: ReactNode, map: Map<string, ReactNode>): ReactNode | null;
  prototype: NamespaceBrowser;
}
export const Browser: NamespaceBrowser = {
  "auto-config": {
    defaultStrictMode: true,
  },
  validateSourceChild(child: ReactNode, map: Map<string, ReactNode>) {
    if (!isValidElement(child)) {
      throw new Error("Children must be valid children");
    }
    if (child?.type === undefined || child.type != Browser.Renderer) {
      throw new Error("Children of Source must be `renderer`");
    }
    const props = child.props as RendererProps;
    if (map.has(props.target))
      throw new Error(`Duplicate entries for ${props.target}`);
    map.set(props.target, child);
    if (props.target == browserName) {
      return <>{child}</>;
    }
    return null;
  },
  Renderer({ children }) {
    return <>{children}</>;
  },
  processChild(
    child: ReactNode,
    map: Map<string, ReactNode>
  ): ReactNode | null {
    const validatedChild = Browser.validateSourceChild(child, map);
    if (validatedChild) {
      return <>{validatedChild}</>;
    }
    return null;
  },
  Source({ children, strict = Browser["auto-config"]["defaultStrictMode"] }) {
    const map: Map<string, ReactNode> = new Map();
    if (Array.isArray(children)) {
      for (const child of children) {
        const result = Browser.processChild(child, map);
        if (result) {
          return result;
        }
      }
      if (map.has("*")) return map.get("*") as ReactNode;
      if (strict) {
        throw new Error(
          "Fallback not provided (set strict to false to bypass this error)"
        );
      }
    } else {
      const result = Browser.processChild(children, map);
      if (result) {
        return result;
      }
      if (strict) {
        throw new Error("No matching target for Source component");
      }
    }
    return null as ReactNode;
  },
} as NamespaceBrowser;
Browser.prototype = Browser;
