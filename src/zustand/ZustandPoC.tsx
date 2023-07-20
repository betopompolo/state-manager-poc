import { useMemo } from "react";
import { useZustandBookingFlow } from "./zustandBookingFlowStore";
import {
  BreadCrumb,
  SelectHCBView,
  SelectRegionView,
} from "./zustandBookingFlowViews";

export const ZustandPoC: React.FC = () => {
  const { getCurrentStep } = useZustandBookingFlow();

  const step = getCurrentStep();

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
