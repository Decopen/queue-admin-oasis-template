
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Redirect to the HTML dashboard
    window.location.href = "/dashboard.html";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Queue Management System</h1>
        <p className="text-xl text-gray-600">Redirecting to dashboard...</p>
      </div>
    </div>
  );
};

export default Index;
