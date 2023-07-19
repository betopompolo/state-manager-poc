import { faker } from "@faker-js/faker";
import { HCB, HCBService, Region } from "./models";
import { ArrayUtils } from "./utils";

export const mockedHcbs: HCB[] = ArrayUtils.range(10).map(() => ({
  id: faker.string.uuid(),
  name: faker.company.name(),
  services: ArrayUtils.range(2).map<HCBService>(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.department(),
  })),
}));

export const mockedRegions: Region[] = ArrayUtils.range(5).map(() => ({
  id: faker.string.uuid(),
  name: faker.location.county(),
  hcbs: faker.helpers.shuffle(mockedHcbs, { inplace: false }).slice(0, 3),
}));
