import { get } from "svelte/store";
import type { InvalidField } from "@interfaces/InvalidField.interface";
import { currentLanguage } from "../../../stores/store";

export const nameValidator = (value: string): InvalidField => {
  const name = value.trim();
  const lang = get(currentLanguage);
  if (name === "") {
    const message =
      lang === "es"
        ? "El nombre es requerido"
        : "The fullname field is required";
    return {
      invalid: true,
      message,
    };
  } else if (name.length < 3) {
    const message =
      lang === "es"
        ? "Debe tener al menos 3 caracteres"
        : "Minimum length: 3 characters";
    return {
      invalid: true,
      message,
    };
  } else {
    return {
      invalid: false,
      message: "",
    };
  }
};
