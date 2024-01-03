"use client";
import { Button } from "@/shared/components/button";
import { useRouter } from "next/navigation";
import React from "react";

const HomeLoginButton: React.FC = (props) => {
  const router = useRouter();
  const navigateToLogin = () => {
    router.push("/login");
  };
  return (
    <Button size="sm" className="px-10 block" onClick={navigateToLogin}>
      Go to Login Page
    </Button>
  );
};

export default HomeLoginButton;
