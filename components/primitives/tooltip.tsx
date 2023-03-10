// Based off https://github.com/radix-ui/design-system/blob/master/components/Tooltip.tsx
import React from "react";
import { styled } from "lib/theme";
import { theme } from "lib/theme";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { Box } from "./box";

type TooltipPrimitiveProps = React.ComponentProps<typeof TooltipPrimitive.Root>;
type TooltipProps = TooltipPrimitiveProps &
  React.ComponentProps<typeof TooltipPrimitive.Content> & {
    children: React.ReactElement;
    content: React.ReactNode;
    multiline?: boolean;
  };

const StyledContent = styled(TooltipPrimitive.Content, {
  backgroundColor: theme.colors.ghostBg,
  borderRadius: "4px",
  padding: "5px 10px",
  cursor: "pointer",

  variants: {
    multiline: {
      true: {
        maxWidth: 250,
        paddingBottom: 7,
      },
    },
  },
});

export function Tooltip({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  delayDuration = 100,
  disableHoverableContent,
  multiline,
  ...props
}: TooltipProps) {
  const rootProps = { open, defaultOpen, onOpenChange, delayDuration, disableHoverableContent };
  return (
    <TooltipPrimitive.Root {...rootProps}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <StyledContent
          className="small"
          side="top"
          align="center"
          sideOffset={5}
          {...props}
          multiline={multiline}
        >
          <p>{content}</p>
          <Box css={{ color: theme.colors.ghostBg }}>
            <TooltipPrimitive.Arrow width={11} height={5} style={{ fill: "currentColor" }} />
          </Box>
        </StyledContent>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
}

export default Tooltip;
