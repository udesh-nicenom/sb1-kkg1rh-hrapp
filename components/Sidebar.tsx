"use client";

import { cn } from "@/lib/utils";
import {
  Users,
  Building2,
  Calendar,
  Laptop2,
  CheckSquare,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
    color: "text-sky-500",
  },
  {
    label: "Employees",
    icon: Users,
    href: "/employees",
    color: "text-violet-500",
  },
  {
    label: "Customers",
    icon: Building2,
    href: "/customers",
    color: "text-pink-700",
  },
  {
    label: "Leave Management",
    icon: Calendar,
    href: "/leaves",
    color: "text-orange-700",
  },
  {
    label: "Equipment",
    icon: Laptop2,
    href: "/equipment",
    color: "text-emerald-500",
  },
  {
    label: "Tasks",
    icon: CheckSquare,
    href: "/tasks",
    color: "text-green-700",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-background border-r">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <h1 className="text-2xl font-bold">HRFlow</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathname === route.href
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}