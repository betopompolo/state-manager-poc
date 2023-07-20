import { create } from "zustand";
import { Region, HCB, HCBService } from "../models";

export interface BookingFlowStore {
  region: Region | null;
  hcb: HCB | null;
  hcbService: HCBService | null;
  getCurrentStep: () => number;
  selectRegion: (region: Region) => void;
  selectHCB: (hcb: HCB) => void;
  selectHCBService: (hcbService: HCBService) => void;
}

export const useZustandBookingFlow = create<BookingFlowStore>((set, get) => ({
  hcb: null,
  region: null,
  hcbService: null,
  selectRegion: (region) => set({ region }),
  selectHCB: (hcb) => set({ hcb }),
  selectHCBService: (hcbService) => set({ hcbService }),
  getCurrentStep() {
    const { region, hcb, hcbService } = get();
    const steps = [region, hcb, hcbService];

    const firstNullStepIndex = steps.findIndex((step) => step === null);
    return firstNullStepIndex >= 0 ? firstNullStepIndex : steps.length - 1;
  },
}));
