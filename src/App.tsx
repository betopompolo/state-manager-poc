import "./App.css";
import { useBookingFlow } from "./bookingFlowStore";
import {
  BreadCrumb,
  SelectHCBView,
  SelectRegionView,
} from "./bookingFlowViews";

function App() {
  const { getCurrentStep } = useBookingFlow();

  const step = getCurrentStep();

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
          <h1>CurrentStep {step}</h1>
          <BreadCrumb />
        </div>

        {views[step]}
      </div>
    </>
  );
}

export default App;

const views = [<SelectRegionView />, <SelectHCBView />];
