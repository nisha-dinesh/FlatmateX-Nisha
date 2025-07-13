import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ResultsGrid from './components/ResultsGrid';
import Footer from './components/Footer';
import { flatsData } from './data/mockData';
import { useSearch } from './hooks/useSearch';

function App() {
  const { searchValue, filteredData, handleSearchChange, handleReset } = useSearch(flatsData);

  return (
    <div className="min-h-screen bg-body-bg text-text-color font-sans">
      <div className="max-w-4xl mx-auto py-6 md:py-10 px-4 md:px-6">
        <Header />
        <SearchBar 
          searchValue={searchValue}
          onSearchChange={handleSearchChange}
          onReset={handleReset}
        />
        <ResultsGrid flats={filteredData} />
        <Footer />
      </div>
    </div>
  );
}

export default App;