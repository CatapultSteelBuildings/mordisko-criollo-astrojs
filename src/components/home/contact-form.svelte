<script lang="ts">
  import Input from "@components/shared/Input.svelte";
  import TextArea from "@components/shared/TextArea.svelte";
  import Button from "@components/shared/Button.svelte";

  const { lang = "es", classes = "" } = $props();

  let message = $state({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  let errors = $state({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const emailRegex = (email: string) => {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return email.trim().match(regex);
  };

  function isValidColombianPhone(phone: string) {
    const digits = phone.replace(/\D/g, "");

    const clean =
      digits.startsWith("57") && digits.length > 10
        ? digits.substring(2)
        : digits;

    if (clean.length < 7 || clean.length > 10) return false;

    if (clean.length === 10 && clean[0] === "3") {
      return true;
    }

    if ((clean.length === 7 || clean.length === 8) && clean[0] !== "3") {
      return true;
    }

    return false;
  }

  const validateFullname = () => {
    if (!message.fullname.trim()) {
      errors.fullname = "El nombre es requerido";
    } else if (message.fullname.trim().length < 3) {
      errors.fullname = "El nombre debe tener al menos 3 caracteres";
    } else {
      errors.fullname = "";
    }
  };

  const validateEmail = () => {
    if (!message.email.trim()) {
      errors.email = "El email es requerido";
    } else if (!emailRegex(message.email.trim())) {
      errors.email = "El email es inválido";
    } else {
      errors.email = "";
    }
  };

  const validatePhone = () => {
    if (!message.phone.trim()) {
      errors.phone = "El teléfono es requerido";
    } else if (!isValidColombianPhone(message.phone.trim())) {
      errors.phone = "El teléfono es inválido";
    } else {
      errors.phone = "";
    }
  };

  const validateForm = () => {
    validateFullname();
    validateEmail();
    validatePhone();
    return errors.fullname || errors.email || errors.phone;
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log(message);
    if (!validateForm()) return;
  };

  const getPlaceholder = (lang: string) => {
    if (lang === "es") {
      return {
        fullname: "Nombre",
        email: "Correo electrónico",
        phone: "Teléfono",
        message: "Mensaje",
      };
    }
    return {
      fullname: "Fullname",
      email: "Email",
      phone: "Phone",
      message: "Message",
    };
  };
</script>

<form onsubmit={(e) => handleSubmit(e)} class={classes}>
  <Input
    name="fullname"
    type="text"
    placeholder={getPlaceholder(lang).fullname}
    validator={validateFullname}
    bind:value={message.fullname}
    error={errors.fullname}
  />
  <Input
    name="email"
    type="email"
    placeholder={getPlaceholder(lang).email}
    validator={validateEmail}
    bind:value={message.email}
    error={errors.email}
  />
  <Input
    name="phone"
    type="tel"
    placeholder={getPlaceholder(lang).phone}
    validator={validatePhone}
    bind:value={message.phone}
    error={errors.phone}
  />
  <TextArea
    name="message"
    id="message"
    rows={4}
    placeholder={getPlaceholder(lang).message}
    bind:value={message.message}
  ></TextArea>
  <div class="w-full flex items-center justify-center">
    <Button
      variant="secondary"
      label={lang === "es" ? "Enviar" : "Send"}
      type="submit"
    />
  </div>
</form>
