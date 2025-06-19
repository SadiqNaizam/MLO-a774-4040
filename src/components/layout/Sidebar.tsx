import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Assuming react-router-dom for navigation links
import { cn } from '@/lib/utils'; // For conditional class names
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button, buttonVariants } from "@/components/ui/button"; // For consistent link styling
import { Home, Settings, BarChart2, Users, ShieldAlert } from 'lucide-react'; // Example icons

// Define props for the Sidebar, e.g., navigation items
interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
  disabled?: boolean;
}

interface SidebarProps {
  navItems?: NavItem[]; // Optional: pass navigation items as props
  className?: string;
}

// Default navigation items if not provided
const defaultNavItems: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart2 },
  { href: "/dashboard/users", label: "User Management", icon: Users },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
  { href: "/dashboard/security", label: "Security Log", icon: ShieldAlert, disabled: true },
];


const Sidebar: React.FC<SidebarProps> = ({ navItems = defaultNavItems, className }) => {
  console.log("Rendering Sidebar");
  const location = useLocation(); // To highlight active link

  return (
    <aside className={cn("hidden md:flex md:flex-col md:w-64 border-r bg-background space-y-4 py-4 fixed h-full", className)}>
      <div className="px-3 py-2">
        <Link to="/dashboard" className="flex items-center pl-2 mb-4">
            {/* Placeholder for a logo or app name */}
            <img src="/placeholder.svg" alt="Logo" className="h-8 w-8 mr-2" />
            <h2 className="text-lg font-semibold tracking-tight">App Dashboard</h2>
        </Link>
      </div>
      <Separator />
      <ScrollArea className="flex-1 px-3 py-2">
        <nav className="grid items-start gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href || (item.href !== "/dashboard" && location.pathname.startsWith(item.href));
            return (
              <Link
                key={item.label}
                to={item.href}
                className={cn(
                  buttonVariants({ variant: isActive ? 'default' : 'ghost', size: 'sm' }),
                  'w-full justify-start',
                  item.disabled && 'cursor-not-allowed opacity-50'
                )}
                aria-disabled={item.disabled}
                onClick={(e) => item.disabled && e.preventDefault()}
              >
                <Icon className="mr-2 h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </ScrollArea>
      <Separator />
      <div className="px-3 py-2 mt-auto">
        {/* Optional: Footer content within sidebar, e.g., user profile snippet or logout */}
        <Button variant="outline" size="sm" className="w-full justify-start">
            {/* Placeholder for user profile or logout */}
            Profile / Logout
        </Button>
      </div>
    </aside>
  );
}
export default Sidebar;