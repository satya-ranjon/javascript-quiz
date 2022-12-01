import React from "react";
import { Outlet } from "react-router-dom";
import Videos from "../Videos";

export default function Home() {
  return (
    <>
      <Outlet />
      <Videos />
    </>
  );
}
