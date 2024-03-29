import { useForm, Controller } from "react-hook-form";
import InputField from "@components/InputField";
import { formatPhoneNumber } from "@utils/formatPhoneNumber";
import SearchByTemplate from "../SearchByTemplate/SearchByTemplate";

interface FormFields {
  phoneNumber: string;
}

const SearchByPhoneNumber = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormFields>({
    mode: "onChange",
    defaultValues: {
      phoneNumber: "",
    },
  });

  const isPhoneNumberValid = (phonenumber: string) =>
    /^\d{3}-\d{3}-\d{4}$/.test(phonenumber);

  const fetchProperties = (data: FormFields) => {
    // TODO do something/pass to the template
  };

  const isFieldValid = () => isPhoneNumberValid(getValues("phoneNumber"));

  return (
    <SearchByTemplate
      type="phone_number"
      title="Search by phone number"
      isFieldValid={isFieldValid()}
      handleSubmit={handleSubmit(fetchProperties)}
      input={
        <Controller
          control={control}
          rules={{
            required: true,
            validate: isPhoneNumberValid,
          }}
          render={({ field: { onChange, value } }) => (
            <InputField
              title="Phone number"
              value={value}
              onChangeValue={(text: string) =>
                onChange(formatPhoneNumber(text))
              }
              keyboardType="phone-pad"
              shouldDisplayCheck={!!value}
              isFieldValid={!errors.phoneNumber}
              otherTextInputProps={{
                maxLength: 12,
              }}
            />
          )}
          name="phoneNumber"
        />
      }
    />
  );
};

export default SearchByPhoneNumber;
