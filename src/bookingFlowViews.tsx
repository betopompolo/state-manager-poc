import { useAtomValue, useSetAtom } from "jotai";
import React from "react";
import {
  bookingFlowRegionAtom,
  bookingFlowHCBAtom,
  bookingFlowHCBServiceAtom,
} from "./bookingFlowAtoms";
import { mockedRegions } from "./mocks";
import { Region, HCB } from "./models";

export const SelectRegionView: React.FC = () => {
  const selectRegion = useSetAtom(bookingFlowRegionAtom);

  const handleRegionClick = (region: Region) => () => {
    console.log("handleRegionClick", region.name);
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
  const selectedRegion = useAtomValue(bookingFlowRegionAtom);
  const selectHCB = useSetAtom(bookingFlowHCBAtom);

  const handleHcbClick = (hcb: HCB) => () => {
    console.log("handleHcbClick", hcb.name);
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
  const selectedRegion = useAtomValue(bookingFlowRegionAtom);
  const selectedHCB = useAtomValue(bookingFlowHCBAtom);
  const selectedHCBService = useAtomValue(bookingFlowHCBServiceAtom);

  const steps = [selectedRegion, selectedHCB, selectedHCBService].filter(
    (it) => it !== null
  );

  return steps.length ? (
    <p>{steps.map((step) => step?.name).join(" -> ")}</p>
  ) : (
    <></>
  );
};
