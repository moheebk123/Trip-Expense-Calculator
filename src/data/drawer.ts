import type { DrawerItemInterface } from "@/types";
import {
  House,
  MessageSquareMore,
  PlaneTakeoff,
  FileText,
  FileCheck,
  ShieldCheck,
} from "lucide-react";

export const drawerItems: DrawerItemInterface[] = [
  {
    id: 1,
    menuHeading: "General",
    menuItems: [
      {
        id: 1,
        title: "Home",
        url: "/",
        icon: House,
      },
      {
        id: 2,
        title: "Support",
        url: "/support",
        icon: MessageSquareMore,
      },
    ],
  },
  {
    id: 2,
    menuHeading: "Travel",
    menuItems: [
      {
        id: 2,
        title: "Trips",
        url: "/trips",
        icon: PlaneTakeoff,
      },
    ],
  },
  {
    id: 3,
    menuHeading: "Legal",
    menuItems: [
      {
        id: 1,
        title: "Privacy Policy",
        url: "/legal/privacy-policy",
        icon: FileText,
      },
      {
        id: 2,
        title: "Terms of Service",
        url: "/legal/terms-of-service",
        icon: FileCheck,
      },
      {
        id: 3,
        title: "Security Policy",
        url: "/legal/security-policy",
        icon: ShieldCheck,
      },
    ],
  },
];