import {
  DatePicker,
  DateTimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import type { ReactNode } from "react";
import type { StringKeys } from "../../types/errorType";
import { formatDateTime } from "../../utils/formatDateTime";
import { Flex } from "../Input/Input.styled";
import {
  Btn,
  DatePickerBlock,
  DescriptionTitle,
  ItemContentBlock,
} from "./dateTime.style";
interface PickerType<T> {
  readonly fieldKey: StringKeys<T>;
  readonly title: ReactNode;
  readonly information: T;
  readonly onChange: (
    value: string,
    fieldKey: StringKeys<T>,
    extra?: Partial<T>,
  ) => void;
  readonly direction?: "row" | "column";
  readonly extra?: Partial<T>;
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
  direction = "column",
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
    <Flex $direction={direction} $gap="sm">
      <Flex
        style={{ width: direction === "row" ? "190px" : "100%" }}
        $justify="space-between"
      >
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
