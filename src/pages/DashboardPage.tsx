import React from 'react';
import Sidebar from '@/components/layout/Sidebar'; // Custom Sidebar
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useNavigate } from 'react-router-dom';
import { Bell, LogOut, Settings, UserCircle } from 'lucide-react';

const DashboardPage = () => {
  console.log('DashboardPage loaded');
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("User logging out...");
    // Placeholder for logout logic
    navigate('/login');
  }

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar /> {/* Custom Sidebar */}
      <div className="flex-1 flex flex-col md:ml-64"> {/* Adjust ml for sidebar width */}
        {/* Top Navigation Menu */}
        <header className="bg-white dark:bg-gray-800 shadow-sm p-4 border-b dark:border-gray-700">
          <div className="container mx-auto flex justify-between items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/dashboard">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Overview
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/dashboard/feature-one"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Feature One
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Description of feature one.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                       <li><Link to="/dashboard/feature-two" title="Feature Two"><NavigationMenuLink>Sub Feature A</NavigationMenuLink></Link></li>
                       <li><Link to="/dashboard/feature-three" title="Feature Three"><NavigationMenuLink>Sub Feature B</NavigationMenuLink></Link></li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                   <Link to="/dashboard/settings">
                     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                       Settings
                     </NavigationMenuLink>
                   </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarImage src="https://source.unsplash.com/random/100x100/?portrait" alt="User Avatar" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
               <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Welcome!</CardTitle>
                <CardDescription>This is your main dashboard area.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  You are successfully logged in. Explore the features using the sidebar and top navigation.
                </p>
                <img src="https://source.unsplash.com/random/400x200/?analytics,graph" alt="Analytics graph" className="mt-4 rounded-md shadow-md" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
                <CardDescription>Overview of key metrics.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between"><span>Active Users:</span> <span className="font-bold">1,234</span></div>
                <div className="flex justify-between"><span>Sales Today:</span> <span className="font-bold">$5,678</span></div>
                <div className="flex justify-between"><span>Pending Tasks:</span> <span className="font-bold">12</span></div>
                 <Button className="mt-4 w-full">View Detailed Report</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates and notifications.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>User 'John Doe' completed a task.</li>
                  <li>New comment on 'Project Alpha'.</li>
                  <li>System maintenance scheduled for tomorrow.</li>
                </ul>
                <Button variant="link" className="mt-2 p-0">View all activity</Button>
              </CardContent>
            </Card>
          </div>

           <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Your Profile</h2>
            <Card className="max-w-md">
                <CardHeader className="flex flex-row items-center space-x-4">
                    <Avatar className="h-16 w-16">
                        <AvatarImage src="https://source.unsplash.com/random/100x100/?portrait" alt="User Avatar" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="text-xl">User Name</CardTitle>
                        <CardDescription>user@example.com</CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="space-y-3">
                   <p>Manage your account settings and preferences.</p>
                   <Button variant="secondary" onClick={() => navigate('/dashboard/profile-settings')}>
                       <Settings className="mr-2 h-4 w-4" /> Edit Profile
                   </Button>
                </CardContent>
            </Card>
           </section>

        </main>
      </div>
    </div>
  );
};

export default DashboardPage;