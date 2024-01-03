"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";

const DashboardPage: React.FC = (props) => {
  const { user } = useUser();
  return (
    <div>
      <h1 className="text-3xl">Dashboard page</h1>
      <p>
        {JSON.stringify({
          email: user?.emailAddresses,
          name: user?.fullName,
        })}
      </p>
      {user?.imageUrl && <img width={50} src={user?.imageUrl} alt="User" />}
    </div>
  );
};

export default DashboardPage;
