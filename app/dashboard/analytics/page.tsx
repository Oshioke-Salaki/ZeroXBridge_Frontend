'use client'
import AnalyticsDashboard from "@/app/components/analytics";
import { useTheme } from "@/app/ThemeContext";


export default function AnalyticsPage() {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`flex flex-col items-center w-full h-full relative py-4 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      {/* to test out the connect state, please change isconnected to true */}
      <AnalyticsDashboard isDarkMode={isDarkMode} isConnected={false} />
    </div>
  );
}