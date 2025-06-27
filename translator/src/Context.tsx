import { createContext, useContext, useState } from 'react';
import React from 'react';
import type { ReactNode } from 'react';
import ComingThisWeek from './Component/ThisWeek/ComingThisWeek';


export interface ContentItem {
  id: string | number;
  name?: string;
  title?: string;
  genre?: string;
  desc?: string;
  age?: string;
  quality?: string,
  periodicity?: string,
  image?: string, 
  clip?: string,
  vid?: string
}

interface ContentRegistry {
  topten: string[];
  news: string[];
  games: string[];
  firstRow: string[];
}

interface ContentContextType {
  contentRegistry: ContentRegistry;
  registerContent: (page: keyof ContentRegistry, items: ContentItem[]) => void;
}

const ContentContext = createContext<ContentContextType>({
  contentRegistry: {
    topten: [],
    news: [],
    games: [],
    firstRow: []
  },
  registerContent: () => {},
});

export const ContentProvider = ({ children }: { children: React.ReactNode }) => {
  const [contentRegistry, setContentRegistry] = useState({
    topten: [],
    news: [],
    games: [],
    MyList:[],
    tvShow:[],
    Watch:[],
    firstRow:[]
  });

  const registerContent = (page: keyof ContentRegistry, items: ContentItem[]) => {
    setContentRegistry(prev => ({
      ...prev,
      [page]: items,
    }));
  };

  return (
    <ContentContext.Provider value={{ contentRegistry, registerContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
