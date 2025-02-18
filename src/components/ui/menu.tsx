"use client";

import {
  Menu as MenuRoot,
  MenuButton as MenuTrigger,
  MenuList as MenuContent,
  MenuItem as ChakraMenuItem,
  MenuDivider as MenuSeparator,
  Portal,
} from "@chakra-ui/react";
import * as React from "react";
import { LuChevronRight } from "react-icons/lu";

/** ✅ Ensure `MenuContent` properly accepts children */
interface MenuContentProps extends React.ComponentProps<typeof MenuContent> {
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement>;
  children: React.ReactNode;
}

export const MenuContentWrapper = React.forwardRef<HTMLDivElement, MenuContentProps>(
  function MenuContentWrapper({ portalled = true, portalRef, children, ...rest }, ref) {
    return (
      <Portal disabled={!portalled} container={portalRef}>
        <MenuContent ref={ref} {...rest}>
          {children}
        </MenuContent>
      </Portal>
    );
  }
);

/** ✅ Ensure `MenuItem` properly supports `value` */
interface MenuItemProps extends React.ComponentProps<typeof ChakraMenuItem> {
  value: string;
  children: React.ReactNode;
}

export const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(
  function MenuItem({ value, children, ...props }, ref) {
    return (
      <ChakraMenuItem ref={ref} data-value={value} {...props}>
        {children}
      </ChakraMenuItem>
    );
  }
);

export { MenuRoot, MenuTrigger, MenuContentWrapper as MenuContent, MenuItem, MenuSeparator };
