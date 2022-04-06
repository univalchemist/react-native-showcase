export interface Property {
  id: string;
  state: string;
  address: string;
  since: string;
}

export type ScreenType =
  | "phone_number"
  | "property_address"
  | "contract_number";

export interface SearchOptionButton {
  copy: string;
  type: ScreenType;
  screenName:
    | "SearchByPhoneNumber"
    | "SearchByPropertyAddress"
    | "SearchByContractNumber";
}
