import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "react-query";

import { Home } from "./pages/home";
import { queryClient } from "./others/contexts/api";
import { NotFoundPage } from "./pages/notFound";
import { CountryDetailPage } from "./pages/countryDetail/countryDetailPage";
import { SylnishiContextProvider } from "./others/contexts/sylnishiContext";

export function App() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <SylnishiContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<CountryDetailPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </SylnishiContextProvider>
      </QueryClientProvider>
    </React.Fragment>
  );
}
