import React, { createContext, useContext, useState, ReactNode } from 'react';

// Types
interface Person {
  id: string;
  name: string;
  imageUrl: string;
}

interface ClothingItem {
  id: string;
  name: string;
  imageUrl: string;
  category: 'tops' | 'bottoms' | 'dresses' | 'outerwear';
}

interface AppContextType {
  selectedPerson: Person | null;
  selectedClothing: ClothingItem | null;
  resultImage: string | null;
  setSelectedPerson: (person: Person | null) => void;
  setSelectedClothing: (clothing: ClothingItem | null) => void;
  setResultImage: (imageUrl: string | null) => void;
  resetSelections: () => void;
}

// Create context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [selectedClothing, setSelectedClothing] = useState<ClothingItem | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);

  const resetSelections = () => {
    setSelectedPerson(null);
    setSelectedClothing(null);
    setResultImage(null);
  };

  const value = {
    selectedPerson,
    selectedClothing,
    resultImage,
    setSelectedPerson,
    setSelectedClothing,
    setResultImage,
    resetSelections,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};