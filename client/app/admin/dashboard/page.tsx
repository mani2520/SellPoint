"use client";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import React from "react";

const page = () => {
  useAdminAuth();
  return (
    <div>
      <h1>Welcome to Admin Dashboard</h1>
    </div>
  );
};

export default page;
