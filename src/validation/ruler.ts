export type ValidatorFn<T> = (value: T[keyof T], title?: string) => string;

//驗證顯示工廠
function requiredString<T>(messageKey: string): ValidatorFn<T> {
  return (value) => {
    if (typeof value !== "string" || !value.trim()) {
      return messageKey;
    }
    return "";
  };
}

//長度工廠
function lengthString<T>(
  maxLength: number,
  messageKey: string,
): ValidatorFn<T> {
  return (value) => {
    if (typeof value === "string" && value.length > maxLength) {
      return messageKey;
    }
    return "";
  };
}

//長度規則
const LENGTH_RULES: Partial<Record<string, number>> = {
  email: 100,
  password: 40,
  userName: 20,
};

//必填通用規則表
export function getCommonValidators<T>(
  name: keyof T,
  title?: string,
): ValidatorFn<T>[] {
  const key = name as string;

  const map: Record<string, (title?: string) => ValidatorFn<T>[]> = {
    email: () => [requiredString<T>("請輸入email")],
    password: () => [
      requiredString<T>("請輸入密碼"),
      (v) => {
        const password = String(v ?? "");

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(password)) {
          return "密碼需包含英文大寫、小寫及數字";
        }

        return "";
      },
    ],
    userName: () => [requiredString<T>("請輸入使用者名稱")],
    // name: (title) => {
    //   const map: Record<string, ValidatorFn<T>[]> = {
    //     Material: [requiredString<T>("enter_product_name")],
    //     Factory: [requiredString<T>("please_enter_customerSite_name")],
    //     contact: [requiredString<T>("contact_enterName")],
    //     vendor: [requiredString<T>("enter_vendor_name")],
    //     prodType: [requiredString<T>("enter_product_type_name")],
    //   };
  };

  const factory = map[key];

  if (!factory) return [];

  return factory(title);
}

//長度驗證回傳值
export function getLengthValidator<T>(name: keyof T): ValidatorFn<T>[] {
  const maxLength = LENGTH_RULES[name as string];
  if (!maxLength) return [];

  return [lengthString<T>(maxLength, `不可超過${maxLength}個字元`)];
}
