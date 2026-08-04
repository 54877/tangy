import type { StringKeys } from "../../types/errorType";
import {
  LocalizationProvider,
  DateTimePicker,
  DatePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { formatDateTime } from "../../utils/formatDateTime";
import dayjs from "dayjs";
import {
  Btn,
  DatePickerBlock,
  DescriptionTitle,
  ItemContentBlock,
} from "./dateTime.style";
import { Flex } from "../Input/Input.styled";
interface PickerType<T> {
  readonly fieldKey: StringKeys<T>;
  readonly title: string;
  readonly information: T;
  readonly extra?: Partial<T>;
  readonly onChange: (
    value: string,
    fieldKey: StringKeys<T>,
    extra?: Partial<T>,
  ) => void;
  readonly disabled?: boolean;
  readonly type?: "day" | "time";
  readonly now?: boolean;
  readonly required?: boolean;
}

export function DateTime<T>({
  disabled,
  information,
  extra,
  fieldKey,
  type = "day",
  onChange,
  title,
  required = false,
  now = false,
}: PickerType<T>) {
  const dateUi = () => {
    return (
      <>
        {type === "time" && (
          <DateTimePicker
            format="YYYY/MM/DD HH:mm"
            disabled={disabled}
            value={
              information[fieldKey]
                ? dayjs(information[fieldKey] as string)
                : null
            }
            onChange={(date) =>
              onChange(
                formatDateTime(date, "YYYY-MM-DD HH:mm"),
                fieldKey,
                extra,
              )
            }
          />
        )}

        {type === "day" && (
          <DatePicker
            format="YYYY/MM/DD"
            disabled={disabled}
            value={
              information[fieldKey]
                ? dayjs(information[fieldKey] as string)
                : null
            }
            onChange={(date) => onChange(formatDateTime(date), fieldKey, extra)}
          />
        )}
      </>
    );
  };

  const btn = disabled ? (
    <Btn
      sx={{
        minWidth: "0",
        cursor: "unset",
      }}
    >
      now
    </Btn>
  ) : (
    <Btn
      sx={{
        minWidth: "0",
        cursor: "pointer",
      }}
      onClick={() =>
        onChange(formatDateTime(dayjs(), "YYYY-MM-DD HH:mm"), fieldKey, extra)
      }
    >
      now
    </Btn>
  );

  return (
    <Flex $direction="column" $gap="sm" $align="flex-start">
      <Flex $justify="space-between">
        <DescriptionTitle required={required}>{title}</DescriptionTitle>
      </Flex>

      <ItemContentBlock>
        <DatePickerBlock height="40px">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {dateUi()}
          </LocalizationProvider>
        </DatePickerBlock>

        {now && btn}
      </ItemContentBlock>
    </Flex>
  );
}
