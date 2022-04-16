import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "react-query";

import { CountrySelectionPage } from "./pages/landing/CountrySelection/CountrySelectionPage";
import { queryClient } from "./contexts/api";
import { NotFoundPage } from "./pages/shared/NotFound/NotFoundPage";
import { CountryDetailPage } from "./pages/landing/CountryDetail/CountryDetailPage";

export function App() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CountrySelectionPage />} />
            <Route path="/:id" element={<CountryDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </React.Fragment>
  );
}
