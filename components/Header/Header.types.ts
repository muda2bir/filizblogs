import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons/lib";

export type HeaderProps = {
  dropdown: boolean;
  setDropdown: Dispatch<SetStateAction<boolean>>;
  search: boolean;
  setSearch: Dispatch<SetStateAction<boolean>>;
};
