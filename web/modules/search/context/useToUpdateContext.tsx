import { createContext, useState } from "react";

// this hook is used to set the default value of the context api
const useToUpdateContext = () => {
  // pass this value to the context provider
  // selectedSpace returns selectedspace from search api
  // findSpace, toggle the findSpace Modal
  const [selectedSpace, setSelectedSpace] = useState<{districtName: string}>();
  const [showFindSpaceModal, setShowFindSpaceModal] = useState<boolean>();

  return {
    showFindSpaceModal,
    setShowFindSpaceModal,
    selectedSpace,
    setSelectedSpace,
  };
};

export default useToUpdateContext;
