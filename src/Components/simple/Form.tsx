import { FC, ReactNode } from "react";
import { SuperElementProps } from "../../lib/types";

interface DropdownProps {
  name: string;
  onOpen: React.ChangeEventHandler<HTMLInputElement>;
  onClose: React.ChangeEventHandler<HTMLInputElement>;
}
export type DropdownMergedProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  DropdownProps;
export const Dropdown: FC<DropdownMergedProps> = ({
  onOpen,
  onClose,
  name,
  ...props
}) => {
  return (
    <input
      name={name}
      role="dropdown"
      type="checkbox"
      onChange={(evt) => {
        if (evt.target.checked) onOpen(evt);
        else onClose(evt);
      }}
      {...props}
    />
  );
};

interface DropdownLabelProps {
  /**
   * The name field of the input
   */
  fieldname: string;
  /** The markup (JSX) for the contents of the label */
  children: ReactNode;
}
export type DropdownLabelMergedProps = SuperElementProps<
  DropdownLabelProps,
  "label"
>;
export const DropdownLabel: FC<DropdownLabelMergedProps> = ({
  fieldname,
  children,
  ...props
}) => (
  <label
    htmlFor={fieldname}
    data-checkbox-label
    data-checkbox-label-target={fieldname}
    {...props}
  >
    {children}
  </label>
);
