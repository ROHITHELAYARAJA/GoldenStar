"use client";

import React from "react";
import GetStartedButton from "@/components/ui/get-started-button";

export default function GetStartedButtonDemo() {
  return (
    <div className="flex min-h-[240px] w-full items-center justify-center bg-background p-8">
      <GetStartedButton onClick={() => console.log("clicked")} />
    </div>
  );
}
