export type DOMEventListener<E extends keyof HTMLElementEventMap> = (
  this: HTMLElement,
  evt: HTMLElementEventMap[E]
) => any;
export default class $<T> {
  private item: T;
  private constructor(item: T) {
    this.item = item;
  }
  static from<TT>(item: TT): $<TT> {
    return new $(item);
  }
  static getElementFromSelector(inst: $<any>) {
    if (inst.isString()) {
      try {
        const domItem = document.querySelector(inst.item);
        if (!domItem) {
          throw new Error("Element Not Found");
        }
        return domItem;
      } catch (err) {
        throw err;
      }
    } else {
      throw new Error("Item wrapped by $ (inst.item) must be a string!");
    }
  }
  isString() {
    return typeof this.item === "string";
  }
  toDOMElement(): HTMLElement {
    let domItem;
    if (this.item instanceof HTMLElement) {
      domItem = this.item;
    } else if (typeof this.isString()) {
      domItem = $.getElementFromSelector(this);
    } else throw new Error("Invalid item type,expected string | HTMLElement");
    return domItem;
  }
  getComputedStyle() {
    return window.getComputedStyle(this.toDOMElement());
  }
  hide() {
    const domItem = this.toDOMElement();
    domItem.style.display = "none";
    return this;
  }
  clone(): $<HTMLElement> {
    return $.from(this.toDOMElement().cloneNode(true)) as $<HTMLElement>;
  }
  on<E extends keyof HTMLElementEventMap>(
    evt: E,
    callback:DOMEventListener<E>
  ) {
    const domItem = this.toDOMElement();
    domItem.addEventListener(evt,callback);
    return this;
  };
};
