import { atom } from "jotai";
import { Region, HCB, HCBService } from "./models";

export const bookingFlowRegionAtom = atom<Region | null>(null);
export const bookingFlowHCBAtom = atom<HCB | null>(null);
export const bookingFlowHCBServiceAtom = atom<HCBService | null>(null);
export const bookingFlowStepAtom = atom((get) => {
  const steps = [
    get(bookingFlowRegionAtom),
    get(bookingFlowHCBAtom),
    get(bookingFlowHCBServiceAtom),
  ];

  const firstNullStepIndex = steps.findIndex((step) => step === null);
  return firstNullStepIndex >= 0 ? firstNullStepIndex : steps.length - 1;
});
