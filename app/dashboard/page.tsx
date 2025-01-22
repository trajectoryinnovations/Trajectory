"use client";

import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { User, Calendar, Activity, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import Servicerequest from "@/components/UserAsk";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAccess = async () => {
      if (status === "unauthenticated") {
        router.push("/login");
        return;
      }

      // try {
      //   // Get MAC address using navigator.networkInformation
      //   const networkInfo = await (navigator as any).network?.getNetworkInformation();
      //   const macAddress = networkInfo?.mac;

      //   if (!macAddress) {
      //     throw new Error("Could not retrieve MAC address");
      //   }

      //   const response = await fetch("/api/auth/mac", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify({ macAddress }),
      //   });

      //   const data = await response.json();

      //   if (!data.allowed) {
      //     await signOut({ redirect: true, callbackUrl: "/login" });
      //     return;
      //   }
      // } catch (error) {
      //   console.error("Access check failed:", error);
      //   await signOut({ redirect: true, callbackUrl: "/login" });
      //   return;
      // }

      setLoading(false);
    };

    checkAccess();
  }, [status, router]);

  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: "/login" });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header with Logout */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Welcome back</p>
                <p className="font-semibold">{session?.user?.name}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Last Login</p>
                <p className="font-semibold">Today, 9:30 AM</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Activity className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Account Status</p>
                <p className="font-semibold">Active</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Settings className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Role</p>
                <p className="font-semibold">{session?.user?.role || 'User'}</p>
              </div>
            </div>
          </div>
        </motion.div> */}

        {/* Add more dashboard content here */}
      </div>
      <Servicerequest />
    </div>
  );
}