import { getCommonValidators, type ValidatorFn } from "./ruler";

export type ValidationRules<T> = Partial<Record<keyof T, ValidatorFn<T>[]>>;

export type ValidateFieldParams<T> = {
  name: keyof T;
  value: T[keyof T];
  title?: string;
  rules?: ValidationRules<T>;
};

// 欄位驗證
export function validateField<T>({
  name,
  value,
  title,
  rules,
}: ValidateFieldParams<T>): string[] {
  const errors: string[] = [];

  const commonValidators = getCommonValidators<T>(name, title);
  const extraValidators = rules?.[name] ?? [];

  const allValidators = [...commonValidators, ...extraValidators];

  for (const validate of allValidators) {
    const error = validate(value, title);
    if (error) errors.push(error);
  }

  return errors;
}
