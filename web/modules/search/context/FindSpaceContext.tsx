import { createContext } from "react";
// context api with the default value
const FindSpaceContext = createContext<{
  showFindSpaceModal: boolean;
  setShowFindSpaceModal: Function;
  selectedSpace: any;
  setSelectedSpace: Function;
}>({
  showFindSpaceModal: false,
  setShowFindSpaceModal: (findSpaceToggle) => {},
  selectedSpace: {},
  setSelectedSpace: (space: any) => {},
});

export default FindSpaceContext;
