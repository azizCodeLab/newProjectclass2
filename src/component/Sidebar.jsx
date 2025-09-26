import React from "react";
import {
  LayoutDashboard,
  BarChart3,
  Box,
  Users,
  ShoppingCart,
  Megaphone,
  Layers,
  FileText,
  Bell,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "Overview", icon: LayoutDashboard, path:"/dashboard/" },
    { name: "About", icon: BarChart3, active: true, path:"/dashboard/about" },
    { name: "Products", icon: Box, path:"/dashboard/product" },
    { name: "Setting", icon: Users,path:"/dashboard/setting" },
    { name: "Orders", icon: ShoppingCart, badge: 8 },
    { name: "Marketing", icon: Megaphone },
    { name: "Inventory", icon: Layers },
    { name: "Reports", icon: FileText },
    { name: "Notifications", icon: Bell, badge: 4 },
    { name: "Settings", icon: Settings },
  ];

  return (
    <div className="h-screen w-64 bg-slate-900 text-gray-200 flex flex-col py-6">
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer
              ${
                item.active
                  ? "bg-slate-800 text-white"
                  : "hover:bg-slate-800 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-3">
               <Link to={item.path}>
                <Icon size={18} />
                <span className="text-sm font-medium">{item.name}</span>
               </Link>
              </div>
              {item.badge && (
                <span className="bg-red-500 text-xs text-white font-semibold px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
