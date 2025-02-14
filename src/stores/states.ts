import { create } from 'zustand';

interface States {
    showCalendar: boolean;
    toggleShowCalendar: () => void;
    hideCalendar: () => void;
    sofaEvents: any;
    setSofaEvents: (events: any) => void;
}

export const useStates = create<States>((set) => ({

    showCalendar: false,
    toggleShowCalendar: () => set(state => ({ showCalendar: !state.showCalendar })),
    hideCalendar: () => set(state => ({ showCalendar: false })),
    sofaEvents: [],
    setSofaEvents: (events: any) => set({ sofaEvents: events })

}));
