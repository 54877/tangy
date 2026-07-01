import type { FormError } from "../types/errorType";
import type { ValidationRules } from "../validation/validateField";
import { validateForm } from "../validation/validateForm";

interface FormValidateProps<T extends object> {
  information: T;
  setErr: React.Dispatch<React.SetStateAction<FormError<T>>>;
  fields: (keyof T)[];
  rules?: ValidationRules<T>;
  fn: () => Promise<void>;
}

export function formValidate<T extends object>({
  information,
  fields,
  setErr,
  fn,
  rules,
}: FormValidateProps<T>) {
  const errors = validateForm<T>({
    values: information,
    fields: fields,
    rules: rules,
  });

  setErr(errors);
  if (Object.keys(errors).length === 0) {
    fn();
  }
}
