import { useForm, Controller } from "react-hook-form";
import InputField from "@components/InputField";
import SearchByTemplate from "../SearchByTemplate/SearchByTemplate";

interface FormFields {
  address: string;
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
      address: "",
    },
  });

  const fetchProperties = (data: FormFields) => {
    // TODO do something/pass to the template
  };

  const isAddressValid = (address: string) => !!address.length;

  const isFieldValid = () => isAddressValid(getValues().address);

  return (
    <SearchByTemplate
      type="property_address"
      title="Search by address"
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
              title="Address"
              value={value}
              onChangeValue={onChange}
              isFieldValid={!errors.address}
            />
          )}
          name="address"
        />
      }
    />
  );
};

export default SearchByPropertyAddress;
