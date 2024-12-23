import React, { Component, ReactNode } from "react";
import { ReactElement } from "react";
interface $Prop<P>{
  node:ReactElement<P>
  noderef?:{ref:any}
};
export default class $<T extends ReactElement<any>> extends Component<$Prop<T>> {
  /**
   *
   */
  constructor(props: $Prop<T>) {
    super(props);
    if (this.props.noderef) this.props.noderef.ref = this;
  }
  static from<T extends ReactElement<any>>(reactNode: T): $<T> {
    return new $({ node: reactNode });
  }
  getProps() {
    return this.props.node.props;
  }
  getType() {
    return this.props.node.type;
  }
  getKey(): string | null {
    return this.props.node.key;
  }
  getStyles(): React.CSSProperties | undefined {
    return (this.props.node.props as React.HTMLProps<any>).style;
  }
  clone() {
    return React.cloneElement(this.props.node);
  }
  cloneWithProps(additionalProps: React.Attributes) {
    return React.cloneElement(this.props.node, {
      ...this.props.node.props,
      ...additionalProps,
    });
  }
  constructFrom({ children, ...props }: { children: ReactNode }) {
    const ComponentConstructor = this.getType();
    return <ComponentConstructor {...props}>{children}</ComponentConstructor>;
  }
  /**
   * @returns A cloned version of the wrappee
   */
  render() {
    return <>{this.props.node}</>;
  }
};