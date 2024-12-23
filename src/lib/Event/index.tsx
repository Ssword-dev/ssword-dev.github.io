import { FC } from "react";

type AAttr = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export const prevent: React.MouseEventHandler<HTMLAnchorElement> = (evt) => {
  evt.preventDefault();
};

const NULLCB: React.MouseEventHandler<HTMLAnchorElement> = () => {};

export const preventFactory = (
  cb: React.MouseEventHandler<HTMLAnchorElement>
): React.MouseEventHandler<HTMLAnchorElement> => {
  return (evt) => {
    prevent(evt); // Prevent default behavior
    cb(evt); // Call the provided callback
  };
};

export const Prevent: FC<AAttr> = ({
  children,
  onClick,
  onAuxClick,
  ...props
}) => {
  const clickHandler = preventFactory(onClick || NULLCB);
  const auxClickHandler = preventFactory(onAuxClick || NULLCB);

  return (
    <a onClick={clickHandler} onAuxClick={auxClickHandler} {...props}>
      {children}
    </a>
  );
};
