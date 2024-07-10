import create from 'zustand';

const useStore = create(set => ({
  selectedCountry: 'United States',
  setSelectedCountry: (country) => set({ selectedCountry: country }),
}));

export default useStore;
