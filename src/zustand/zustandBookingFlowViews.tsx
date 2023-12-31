import React from "react";
import { mockedRegions } from "../mocks";
import { Region, HCB } from "../models";
import { useZustandBookingFlow } from "./zustandBookingFlowStore";

export const SelectRegionView: React.FC = () => {
  const selectRegion = useZustandBookingFlow((state) => state.selectRegion);

  const handleRegionClick = (region: Region) => () => {
    selectRegion(region);
  };

  return (
    <>
      {mockedRegions.map((region) => (
        <button id={region.id} onClick={handleRegionClick(region)}>
          {region.name}
        </button>
      ))}
    </>
  );
};

export const SelectHCBView: React.FC = () => {
  const selectHCB = useZustandBookingFlow((state) => state.selectHCB);
  const selectedRegion = useZustandBookingFlow((state) => state.region);

  const handleHcbClick = (hcb: HCB) => () => {
    selectHCB(hcb);
  };

  if (selectedRegion === null) {
    return <p>No region selected!</p>;
  }

  return (
    <>
      {selectedRegion.hcbs.map((hcb) => (
        <button id={hcb.id} onClick={handleHcbClick(hcb)}>
          {hcb.name}
        </button>
      ))}
    </>
  );
};

export const BreadCrumb: React.FC = () => {
  const {
    hcb: selectedHCB,
    region: selectedRegion,
    hcbService: selectedHCBService,
  } = useZustandBookingFlow();

  const steps = [selectedRegion, selectedHCB, selectedHCBService].filter(
    (it) => it !== null
  );

  return steps.length ? (
    <p>{steps.map((step) => step?.name).join(" -> ")}</p>
  ) : (
    <></>
  );
};
