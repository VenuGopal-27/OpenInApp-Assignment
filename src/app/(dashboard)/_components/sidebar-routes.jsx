"use client";

import { SidebarItem } from './sidebar-item';
// 

const Route = [
    { loc: "/dashboard.svg", label: "Dashboard", href: "/remPages" },
    { loc: "/upload.svg", label: "Upload", href: "/upload" },
    { loc: "/invoice.svg", label: "Invoice", href: "/invoice" },
    { loc: "/schedule.svg", label: "Schedule", href: "/schedule" },
    { loc: "/notification.svg", label: "Notification", href: "/notification" },
    { loc: "/setting.svg", label: "Setting", href: "/settings" },
];

export const SidebarRoutes = ({ isCollapsed }) => {
    return (
        <div className='flex flex-col w-full'>
            {Route.map((route) => (
                <div key={route.loc}>
                    <SidebarItem
                        loc={route.loc}
                        label={route.label}
                        href={route.href}
                        isCollapsed={isCollapsed} // Pass the isCollapsed prop
                    />
                    <div className='my-2' />
                </div>
            ))}
        </div>
    );
};
