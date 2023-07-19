export interface Region {
  id: string;
  name: string;
  hcbs: HCB[];
}

export interface HCB {
  id: string;
  name: string;
  services: HCBService[];
}

export interface HCBService {
  id: string;
  name: string;
  finishingTouch?: HCBServiceFinishingTouch;
}

export interface HCBServiceFinishingTouch {
  name: string;
}
