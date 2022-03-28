import { Property } from "./types";

export type MockApiCallStatus = "not_set" | "loading" | "error" | "success";

export const propertiesMock: Property[] = [
  {
    id: "1",
    state: "Burleson",
    address: "2531 Timber Rd, Burleson (TX)",
    since: "Since 17 May, 2020",
  },
  {
    id: "2",
    state: "New York",
    address: "28 Canal St, New York (NY)",
    since: "Since 2 Dec, 2012",
  },
];
