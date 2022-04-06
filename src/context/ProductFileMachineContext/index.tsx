import { productFilesMachine } from "@/machines/productFilesMachine";
import { createContext, useContext } from "react";
import { InterpreterFrom } from "xstate";

export const ProductFilesContext = createContext({
  filesService: {} as InterpreterFrom<typeof productFilesMachine>,
});

export const ProductFilesContextProvider = ProductFilesContext.Provider;
export const useProductFilesContext = () => useContext(ProductFilesContext);
