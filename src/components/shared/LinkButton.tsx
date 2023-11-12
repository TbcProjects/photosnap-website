import Link, { LinkProps } from "next/link";

import DirectionalArrow from "@components/icons/DirectionalArrow";

import { flex } from "styled-system/patterns";
import { button, type ButtonVariants } from "@lib/theme/components/buttons";
import { ReactNode } from "react";

type ButtonProps = LinkProps & ButtonVariants & { children: ReactNode };

const Button = ({ href, prefetch, visual, type, children }: ButtonProps) => {
  const ButtonVariant = (VariantType: typeof type) => {
    switch (VariantType) {
      case "primary":
        return <button className={button({ visual, type })}>{children}</button>;
      case "secondary":
        return (
          <button className={button({ visual, type })}>
            <div className={flex({ justify: "space-between" })}>
              {children}
              <DirectionalArrow
                color={visual === "transparent_dark" ? "#FFF" : "#000"}
                height="14"
                width="43"
              />
            </div>
          </button>
        );
    }
  };

  return (
    <Link href={href} prefetch={prefetch}>
      {ButtonVariant(type)}
    </Link>
  );
};

export default Button;
