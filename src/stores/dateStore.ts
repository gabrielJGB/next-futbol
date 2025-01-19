import { create } from 'zustand';

interface DateStore {
    storedDate: string;
    setStoredDate: (newDate: string) => void;
}

export const useDateStore = create<DateStore>((set) => ({
    storedDate: "Inicial",
    setStoredDate: (newDate: string) => set({ storedDate: newDate }),
}));
