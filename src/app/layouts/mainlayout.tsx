"use client";

import { useState } from "react";
import Loading from "../components/common/Loading";
import { loadingContext } from "../context/loadingContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);
  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    return <Loading />;
  } else {
    const client = new QueryClient();
    return (
      <QueryClientProvider client={client}>
        <loadingContext.Provider value={{ loading, setLoading }}>
          {children}
        </loadingContext.Provider>
      </QueryClientProvider>
    );
  }
}
