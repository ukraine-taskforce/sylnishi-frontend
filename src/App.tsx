import { queryClient } from "@contexts/api";
import { CountryDetailPage } from "@pages/landing/CountryDetail/CountryDetailPage";
import { CountrySelectionPage } from "@pages/landing/CountrySelection/CountrySelectionPage";
import { NotFoundPage } from "@pages/shared/NotFound/NotFoundPage";
import React from "react";
import { QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";



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
