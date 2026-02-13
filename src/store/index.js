import { create } from 'zustand';
import axios from 'axios';

export const useSearchStore = create((set) => ({
  searchText: '',
  setSearchText: (text) => set({ searchText: text }),
  clearSearch: () => set({ searchText: '' }),
}));

export const useSortStore = create((set) => ({
  sortBy: '',
  setSortBy: (option) => set({ sortBy: option }),
}));

export const useCategoryStore = create((set) => ({
  categories: [],
  loading: false,

  fetchCategories: async () => {
    set({ loading: true });
    try {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const response = await axios.get('https://bookstore.eraasoft.pro/api/book?populate=*', config);
      set({ categories: response.data.data.categories });
    } catch (err) {
      console.error('Error fetching categories', err);
    } finally {
      set({ loading: false });
    }
  },
}));