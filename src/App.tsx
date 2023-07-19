import { useAtomValue } from "jotai";
import "./App.css";
import { bookingFlowStepAtom } from "./bookingFlowAtoms";
import {
  BreadCrumb,
  SelectHCBView,
  SelectRegionView,
} from "./bookingFlowViews";

function App() {
  const bookingFlowCurrentStep = useAtomValue(bookingFlowStepAtom);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: 8,
        }}
      >
        <div>
          <h1>CurrentStep {bookingFlowCurrentStep}</h1>
          <BreadCrumb />
        </div>

        {views[bookingFlowCurrentStep]}
      </div>
    </>
  );
}

export default App;

const views = [<SelectRegionView />, <SelectHCBView />];
