import { Autocomplete } from "@mui/material";
import type { ReactNode } from "react";
import type { FormError } from "../../types/errorType";
import { DescriptionTitle } from "../dateTime/dateTime.style";
import { Flex, Input } from "../Input/Input.styled";
import { SpanType } from "../../styles/components/span";
import type { OptionItem } from "../../types/select";

type StringArrayKeys<T> = {
  [K in keyof T]: T[K] extends string[] ? K : never;
}[keyof T];

interface MultiSelectDropdownProps<T extends object, L extends OptionItem> {
  readonly title: ReactNode;
  readonly fieldKey: StringArrayKeys<T>;
  readonly information: T;
  readonly onChange: (value: string[], fieldKey: StringArrayKeys<T>) => void;
  readonly options: readonly L[];
  readonly labelKey: keyof L;
  readonly valueKey: keyof L;
  readonly err?: FormError<T>;
  readonly required?: boolean;
  readonly maxSelected?: number;
  readonly placeholder?: string;
}

export default function MultiSelectDropdown<
  T extends object,
  L extends OptionItem,
>({
  title,
  fieldKey,
  information,
  onChange,
  options,
  labelKey,
  valueKey,
  err,
  required = false,
  maxSelected,
  placeholder = "請選擇標籤",
}: MultiSelectDropdownProps<T, L>) {
  const value = (information[fieldKey] as string[] | undefined) ?? [];
  const error = err?.[fieldKey];
  const selectedOptions = options.filter((option) =>
    value.includes(String(option[valueKey])),
  );

  return (
    <Flex $direction="column" $gap="sm" $justify="center" $align="flex-start">
      <DescriptionTitle required={required}>{title}</DescriptionTitle>
      <Autocomplete<L, true, false, false>
        multiple
        disableCloseOnSelect
        options={[...options]}
        value={selectedOptions}
        getOptionLabel={(option) => String(option[labelKey])}
        isOptionEqualToValue={(option, selected) =>
          String(option[valueKey]) === String(selected[valueKey])
        }
        onChange={(_, nextOptions) =>
          onChange(nextOptions.map((option) => String(option[valueKey])), fieldKey)
        }
        getOptionDisabled={(option) =>
          maxSelected !== undefined &&
          value.length >= maxSelected &&
          !value.includes(String(option[valueKey]))
        }
        fullWidth
        renderInput={(params) => (
          <Input
            {...params}
            variant="outlined"
            size="small"
            placeholder={value.length === 0 ? placeholder : ""}
            helperText={error ?? ""}
            $isError={!!error}
          />
        )}
      />
      {maxSelected !== undefined && (
        <SpanType $size="xs" $shade={600}>
          已選 {value.length}/{maxSelected} 個標籤
        </SpanType>
      )}
    </Flex>
  );
}
