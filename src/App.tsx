import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "react-query";

import { Home } from "./pages/home";
import { queryClient } from "./others/contexts/api";
import { NotFoundPage } from "./pages/notFound";
import { TrackingContextProvider } from "./others/contexts/tracking";
import { CountryDetailPage } from "./pages/countryDetail/countryDetailPage";

export function App() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <TrackingContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<CountryDetailPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </TrackingContextProvider>
      </QueryClientProvider>
    </React.Fragment>
  );
}
