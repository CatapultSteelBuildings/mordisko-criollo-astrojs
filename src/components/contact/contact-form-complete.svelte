<script lang="ts">
  import Input from '@components/shared/Input.svelte';
  import InputQuantity from '@components/shared/InputQuantity.svelte';
  import TextArea from '@components/shared/TextArea.svelte';
  import Button from '@components/shared/Button.svelte';

  const { lang = 'es', classes = '' } = $props();

  type ErrorField = keyof typeof errors;

  let message = $state({
    fullname: '',
    address: '',
    email: '',
    phone: '',
    message: '',
    hawaiian: 0,
    shreddedBeef: 0,
    shreddedChicken: 0,
    shreddedFlankSteak: 0,
  });

  let errors = $state({
    fullname: '',
    address: '',
    email: '',
    phone: '',
    message: '',
    hawaiian: '',
    shreddedBeef: '',
    shreddedChicken: '',
    shreddedFlankSteak: '',
  });

  const emailRegex = (email: string) => {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return email.trim().match(regex);
  };

  function isValidColombianPhone(phone: string) {
    const digits = phone.replace(/\D/g, '');

    const clean =
      digits.startsWith('57') && digits.length > 10
        ? digits.substring(2)
        : digits;

    if (clean.length < 7 || clean.length > 10) return false;

    if (clean.length === 10 && clean[0] === '3') {
      return true;
    }

    if ((clean.length === 7 || clean.length === 8) && clean[0] !== '3') {
      return true;
    }

    return false;
  }

  const validateFullname = () => {
    if (!message.fullname.trim()) {
      errors.fullname = 'El nombre es requerido';
    } else if (message.fullname.trim().length < 3) {
      errors.fullname = 'El nombre debe tener al menos 3 caracteres';
    } else {
      errors.fullname = '';
    }
  };

  const validateAddress = () => {
    if (!message.address.trim()) {
      errors.address = 'La dirección es requerida';
    } else if (message.address.trim().length < 3) {
      errors.address = 'La dirección debe ser válida';
    } else {
      errors.address = '';
    }
  };

  const validateEmail = () => {
    if (!message.email.trim()) {
      errors.email = 'El email es requerido';
    } else if (!emailRegex(message.email.trim())) {
      errors.email = 'El email es inválido';
    } else {
      errors.email = '';
    }
  };

  const validatePhone = () => {
    if (!message.phone.trim()) {
      errors.phone = 'El teléfono es requerido';
    } else if (!isValidColombianPhone(message.phone.trim())) {
      errors.phone = 'El teléfono es inválido';
    } else {
      errors.phone = '';
    }
  };

  const validateQuantities = (name: ErrorField, quantity: number) => {
    errors[name] = '';
    if (quantity < 0) {
      errors[name] = 'La cantidad debe ser mayor o igual a 0';
    }
    return errors[name];
  };

  const validateForm = () => {
    validateFullname();
    validateAddress();
    validateEmail();
    validatePhone();
    validateQuantities('hawaiian', message.hawaiian);
    validateQuantities('shreddedBeef', message.shreddedBeef);
    validateQuantities('shreddedChicken', message.shreddedChicken);
    validateQuantities('shreddedFlankSteak', message.shreddedFlankSteak);
    return (
      errors.fullname ||
      errors.address ||
      errors.email ||
      errors.phone ||
      errors.hawaiian ||
      errors.shreddedBeef ||
      errors.shreddedChicken ||
      errors.shreddedFlankSteak
    );
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log(message);
    if (!validateForm()) return;
  };

  const getPlaceholder = (lang: string) => {
    if (lang === 'es') {
      return {
        fullname: 'Nombre',
        address: 'Dirección',
        email: 'Correo electrónico',
        phone: 'Teléfono',
        message: 'Mensaje',
      };
    }
    return {
      fullname: 'Fullname',
      address: 'Address',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
    };
  };
</script>

<form
  class={`ContactFormComplete ${classes}`.trim()}
  onsubmit={e => handleSubmit(e)}>
  <Input
    name="fullname"
    type="text"
    classes="col-span-2"
    placeholder={getPlaceholder(lang).fullname}
    validator={validateFullname}
    bind:value={message.fullname}
    error={errors.fullname} />
  <Input
    name="email"
    type="email"
    classes="2xl:col-span-2"
    placeholder={getPlaceholder(lang).email}
    validator={validateEmail}
    bind:value={message.email}
    error={errors.email} />
  <Input
    name="phone"
    type="tel"
    classes="2xl:col-span-2"
    placeholder={getPlaceholder(lang).phone}
    validator={validatePhone}
    bind:value={message.phone}
    error={errors.phone} />
  <Input
    name="address"
    type="text"
    classes="col-span-2"
    placeholder={getPlaceholder(lang).address}
    validator={validateAddress}
    bind:value={message.address}
    error={errors.address} />
  <InputQuantity
    name="hawaiian"
    label="Hawaiana"
    validator={() => validateQuantities('hawaiian', message.hawaiian)}
    bind:value={message.hawaiian}
    error={errors.hawaiian} />
  <InputQuantity
    name="shreddedBeef"
    label="Carne Desmechada"
    validator={() => validateQuantities('shreddedBeef', message.shreddedBeef)}
    bind:value={message.shreddedBeef}
    error={errors.shreddedBeef} />
  <InputQuantity
    name="shreddedChicken"
    label="Pollo Desmechado"
    validator={() =>
      validateQuantities('shreddedChicken', message.shreddedChicken)}
    bind:value={message.shreddedChicken}
    error={errors.shreddedChicken} />
  <InputQuantity
    name="shreddedFlankSteak"
    label="Sobrebarriga"
    validator={() =>
      validateQuantities('shreddedFlankSteak', message.shreddedFlankSteak)}
    bind:value={message.shreddedFlankSteak}
    error={errors.shreddedFlankSteak} />
  <TextArea
    name="message"
    id="message"
    classes="col-span-2 2xl:col-span-4"
    rows={4}
    placeholder={getPlaceholder(lang).message}
    bind:value={message.message}></TextArea>
  <div
    class="col-span-2 flex w-full items-center justify-center 2xl:col-span-4">
    <Button
      variant="secondary"
      label={lang === 'es' ? 'Enviar' : 'Send'}
      type="submit" />
  </div>
</form>

<style>
  @reference "tailwindcss";
  .ContactFormComplete {
    @apply mx-auto w-full max-w-[360px] gap-x-3 md:max-w-[410px] lg:max-w-[460px] xl:grid xl:max-w-full xl:grid-cols-2 2xl:grid-cols-4;
  }
</style>
