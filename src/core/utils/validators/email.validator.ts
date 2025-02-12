import { get } from "svelte/store";
import type { InvalidField } from "@interfaces/InvalidField.interface";
import { currentLanguage } from "../../../stores/store";
const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

export const emailValidator = (value: string): InvalidField => {
    const email = value.trim();
    const lang = get(currentLanguage);
    if (email === "") {
        const message =
            lang === "es"
                ? "El email es requerido"
                : "The email field is required";
        return {
            invalid: true,
            message,
        };
    } else if (!emailRegex.test(email)) {
        const message =
            lang === "es"
                ? "El email no es válido"
                : "The email is not valid";
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