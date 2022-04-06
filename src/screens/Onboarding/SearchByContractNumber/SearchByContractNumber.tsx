import { useForm, Controller } from "react-hook-form";
import InputField from "@components/InputField";
import SearchByTemplate from "../SearchByTemplate/SearchByTemplate";

interface FormFields {
  contractNumber: string;
}

const SearchByPropertyAddress = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormFields>({
    mode: "onChange",
    defaultValues: {
      contractNumber: "",
    },
  });

  const fetchProperties = (data: FormFields) => {
    // TODO do something/pass to the template
  };

  const isContractNumberValid = (contractNumber: string) =>
    !!contractNumber.length;

  const isFieldValid = () => isContractNumberValid(getValues().contractNumber);

  return (
    <SearchByTemplate
      type="contract_number"
      title="Search by contract number"
      isFieldValid={isFieldValid()}
      handleSubmit={handleSubmit(fetchProperties)}
      input={
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <InputField
              title="Contract number"
              value={value}
              onChangeValue={onChange}
              isFieldValid={!errors.contractNumber}
            />
          )}
          name="contractNumber"
        />
      }
    />
  );
};

export default SearchByPropertyAddress;
