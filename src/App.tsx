import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "react-query";

import { Home } from "./pages/home";
import { FormContextProvider } from "./others/contexts/form";
import { queryClient } from "./others/contexts/api";
import { NotFound } from "./pages/notFound";
import { CountryDetail } from "./pages/countryDetail";

export function App() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <FormContextProvider>
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
        </FormContextProvider>
      </QueryClientProvider>
    </React.Fragment>
  );
}
