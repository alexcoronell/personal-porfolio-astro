<script lang="ts">
  import { nameValidator } from "../../core/utils/validators/name.validator";
  import { emailValidator } from "../../core/utils/validators/email.validator";
  import { messageValidator } from "../../core/utils/validators/message.validator";

  import { sendContactUsMessage } from "../../core/utils/sendContactMessage";

  /*  Types and Interfaces */
  import type { ContactForm } from "../../core/interfaces/ContactForm.interface";
  import type { InvalidField } from "../../core/interfaces/InvalidField.interface";

  /* Store */
  import { showModal, hideModal, requestStatus, currentLanguage } from "../../stores/store";
  import { onMount } from "svelte";

  /* Props */
  export let lang: string = "";

  /* Variables */
  const labelNames = {
    fullname: lang === "es" ? "Nombre completo" : "Fullname",
    email: lang === "es" ? "Email" : "Email",
    message: lang === "es" ? "Mensaje" : "Message",
  };

  const titleForm = lang === "es" ? "Envíame un mensaje" : "Send Me a Message";
  const btnLabel = lang === "es" ? "Send" : "Enviar";
  const placeHolder = ">_";

  const contactForm: ContactForm = {
    fullname: "",
    email: "",
    message: "",
    language: lang === "es" ? "es" : "en",
  };

  let fullnameInvalid: InvalidField = {
    invalid: false,
    message: "",
  };
  let emailInvalid: InvalidField = {
    invalid: false,
    message: "",
  };
  let messageInvalid: InvalidField = {
    invalid: false,
    message: "",
  };

  /* Functions */
  const validateName = (): void => {
    fullnameInvalid = nameValidator(contactForm.fullname);
  };

  const validateEmail = (): void => {
    emailInvalid = emailValidator(contactForm.email);
  };

  const validateMessage = (): void => {
    messageInvalid = messageValidator(contactForm.message);
  };

  const validateForm = (): boolean => {
    validateName();
    validateEmail();
    validateMessage();
    if (
      fullnameInvalid.invalid ||
      emailInvalid.invalid ||
      messageInvalid.invalid
    ) {
      return false;
    } else {
      return true;
    }
  };

  const cleanForm = () => {
    contactForm.fullname = "";
    contactForm.email = "";
    contactForm.message = "";
  };

  const onSubmit = () => {
    if (!validateForm()) return;
    requestStatus.set("loading");
    showModal();
    sendContactUsMessage(contactForm)
      .then(() => {
        requestStatus.set("success");
        cleanForm();
      })
      .catch(() => {
        requestStatus.set("error");
      })
      .finally(() => {
        setTimeout(() => {
          hideModal();
        }, 3000);
      });
  };

  onMount(() => {
    currentLanguage.set(lang);
  })
</script>

<div class="ContactForm">
  <h4 class="ContactForm__title">{titleForm}</h4>
  <form id="form" on:submit|preventDefault={() => onSubmit()}>
    <!-- Fullname -->
    <div class="form-group">
      <label for="fullname">{labelNames.fullname}</label>
      <input
        class={fullnameInvalid.invalid ? "invalid" : ""}
        type="text"
        name="fullname"
        id="fullname"
        placeholder={placeHolder}
        bind:value={contactForm.fullname}
        on:keyup={validateName}
        on:blur={validateName}
        on:change={validateName}
        on:input={validateName}
      />
      <div class="invalidMessage">{fullnameInvalid.message}</div>
    </div>

    <!-- Email -->
    <div class="form-group">
      <label for="email">{labelNames.email}</label>
      <input
        class={emailInvalid.invalid ? "invalid" : ""}
        type="email"
        name="email"
        id="email"
        placeholder={placeHolder}
        bind:value={contactForm.email}
        on:keyup={validateEmail}
        on:blur={validateEmail}
        on:change={validateEmail}
        on:input={validateEmail}
      />
      <div class="invalidMessage">{emailInvalid.message}</div>
    </div>

    <!-- Message -->
    <div class="form-group">
      <label for="message">{labelNames.message}</label>
      <textarea
        class={messageInvalid.invalid ? "invalid" : ""}
        name="message"
        id="message"
        rows={6}
        placeholder={placeHolder}
        bind:value={contactForm.message}
        on:keyup={validateMessage}
        on:blur={validateMessage}
        on:change={validateMessage}
        on:input={validateMessage}
      ></textarea>
      <div class="invalidMessage">{messageInvalid.message}</div>
    </div>

    <!-- Send button -->
    <div class="buttonArea">
      <button
        type="submit"
        id="btn-button"
        disabled={$requestStatus === "loading"}
        aria-label="Send the message"
        >{btnLabel}<span class="sr-only">Send the message</span></button
      >
    </div>
  </form>
</div>

<style lang="scss">
  .ContactForm {
    @apply bg-black w-full h-full pt-8 px-4;
    &__title {
      @apply py-4 text-center;
    }
    form {
      font-family: "Cutive Mono", monospace;
      .form-group {
        @apply flex flex-col mb-5 relative;
        label {
          @apply text-white;
        }
        input,
        textarea {
          @apply text-primary rounded-lg px-2 py-2 bg-transparent border border-primary/70 outline-0 transition-all duration-300 focus:border-primary focus:outline-none placeholder:text-primary/70;
        }
      }
      button {
        @apply w-full mt-3 text-center border border-primary/80 rounded-lg py-2 transition-all duration-300 hover:text-black hover:bg-primary disabled:cursor-not-allowed disabled:bg-primary/50 disabled:text-black;
      }
    }
    .invalidMessage {
      @apply absolute left-0 bottom-[-1.1rem] text-xs;
      color: #ef4444;
    }
    .invalid {
      border-color: #ef4444 !important;
      color: #ef4444 !important;
    }
    .invalid::placeholder {
      color: #ef4444 !important;
    }
  }
  input,
  textarea,
  button {
    @apply focus:outline-none;
  }
</style>
