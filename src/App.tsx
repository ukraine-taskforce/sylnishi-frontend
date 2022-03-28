import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "react-query";

import { Home } from "./pages/home";
import { queryClient } from "./others/contexts/api";
import { NotFound } from "./pages/notFound";
import { CountryDetail } from "./pages/countryDetail";
import { TrackingContextProvider } from "./others/contexts/tracking";

export function App() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <TrackingContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ua" element={<CountryDetail id="ua" />} />
              <Route path="/pl" element={<CountryDetail id="pl" />} />
              <Route path="/cz" element={<CountryDetail id="cz" />} />
              <Route path="/de" element={<CountryDetail id="de" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TrackingContextProvider>
      </QueryClientProvider>
    </React.Fragment>
  );
}
