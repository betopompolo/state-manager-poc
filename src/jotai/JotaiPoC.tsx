import { useMemo } from "react";
import {
  BreadCrumb,
  SelectHCBView,
  SelectRegionView,
} from "./jotaiBookingFlowViews";
import { useAtomValue } from "jotai";
import { bookingFlowStepAtom } from "./bookingFlowAtoms";

export const JotaiPoC: React.FC = () => {
  const step = useAtomValue(bookingFlowStepAtom);

  const title = useMemo(() => {
    const titles: Record<number, string> = {
      0: "Select region",
      1: "Select HCB",
    };

    return titles[step] ?? "Done!";
  }, [step]);

  return (
    <div>
      <h1>{title}</h1>
      <BreadCrumb />
      {views[step]}
    </div>
  );
};

const views = [<SelectRegionView />, <SelectHCBView />];
