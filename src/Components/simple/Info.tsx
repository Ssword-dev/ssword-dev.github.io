import { FC, ReactNode } from "react";

interface InfoProps {
  description: string;
  children: ReactNode;
  dotted?: boolean;
}

export const Info: FC<InfoProps> = ({
  children,
  description,
  dotted = false,
}) => (
  <>
    <abbr
      title={description}
      style={{
        textDecoration: dotted ? "underline dotted" : "none",
      }}
      role="tooltip"
    >
      {children}
    </abbr>
  </>
);
