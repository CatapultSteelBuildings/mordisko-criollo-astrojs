<script lang="ts">
  /* Components */
  import Input from '@components/shared/Input.svelte';
  import InputQuantity from '@components/shared/InputQuantity.svelte';
  import TextArea from '@components/shared/TextArea.svelte';
  import Button from '@components/shared/Button.svelte';
  import ModalForms from '../shared/ModalForms.svelte';

  /* Interfaces */
  import type { OrderMessage, OrderItem } from '@/core/interfaces';

  import { empanadaSpanish } from '@/core/data/products.data.es';
  import { empanadaEnglish } from '@/core/data/products.data.en';

  /* Validators */
  import { emailValidator, isValidColombianPhone } from '@/core/validators';

  /* Utils */
  import { sendOrder } from '@/core/utils/send-order.util';

  /* Types */
  import type { StateForm } from '@/core/types/StateForm.type';

  const { lang = 'es', classes = '' } = $props();

  const products = lang === 'es' ? empanadaSpanish : empanadaEnglish;

  type ErrorField = keyof typeof errors;

  type DetailField = keyof typeof details;

  let stateForm = $state<StateForm>('init');

  let details = $state(
    products.reduce(
      (acc, item) => {
        acc[item.code] = {
          code: item.code,
          name: item.title,
          quantity: 0,
          unitPrice: item.price,
        };
        return acc;
      },
      {} as Record<string, OrderItem>
    )
  );

  let message = $state<OrderMessage>({
    fullname: '',
    address: '',
    email: '',
    phone: '',
    message: '',
    details: Object.values(details),
  });

  const initialDetailErrors: Record<string, string> = {};
  for (const code of products) {
    initialDetailErrors[code.code] = '';
  }

  let errors = $state({
    fullname: '',
    address: '',
    email: '',
    phone: '',
    message: '',
    details: initialDetailErrors,
  });
  const validateFullname = () => {
    if (!message.fullname.trim()) {
      errors.fullname =
        lang === 'es' ? 'El nombre es requerido' : 'Fullname is required';
    } else if (message.fullname.trim().length < 3) {
      errors.fullname =
        lang === 'es'
          ? 'El nombre debe tener al menos 3 caracteres'
          : 'Fullname must have at least 3 characters';
    } else {
      errors.fullname = '';
    }
  };

  const validateAddress = () => {
    if (!message.address.trim()) {
      errors.address =
        lang === 'es' ? 'La dirección es requerida' : 'Address is required';
    } else if (message.address.trim().length < 3) {
      errors.address =
        lang === 'es'
          ? 'La dirección debe ser válida'
          : 'Address must be valid';
    } else {
      errors.address = '';
    }
  };

  const validateEmail = () => {
    if (!message.email.trim()) {
      errors.email =
        lang === 'es' ? 'El email es requerido' : 'Email is required';
    } else if (!emailValidator(message.email.trim())) {
      errors.email =
        lang === 'es' ? 'El email es inválido' : 'Email is invalid';
    } else {
      errors.email = '';
    }
  };

  const validatePhone = () => {
    if (!message.phone.trim()) {
      errors.phone =
        lang === 'es' ? 'El teléfono es requerido' : 'Phone is required';
    } else if (!isValidColombianPhone(message.phone)) {
      errors.phone =
        lang === 'es' ? 'El teléfono es inválido' : 'Phone is invalid';
    } else {
      errors.phone = '';
    }
  };

  const incrementQuantity = (name: DetailField) => {
    details[name].quantity++;
    validateQuantities(name as ErrorField, details[name].quantity);
  };

  const decrementQuantity = (name: DetailField) => {
    const quantity = details[name].quantity;
    if (quantity == 0) {
      return;
    }
    details[name].quantity--;
    validateQuantities(name as ErrorField, details[name].quantity);
  };

  const validateQuantities = (name: ErrorField, quantity: number) => {
    errors.details[name] = '';
    if (isNaN(quantity)) {
      errors.details[name] =
        lang === 'es' ? 'Debe ser un número' : 'Must be a number';
    }
    if (quantity < 0) {
      errors.details[name] =
        lang === 'es'
          ? 'Debe ser mayor o igual a 0'
          : 'Must be greater than or equal to 0';
    }
    return errors.details[name];
  };

  const validateDetails = (): boolean => {
    for (const detail of Object.values(details)) {
      validateQuantities(detail.code as ErrorField, detail.quantity);
      if (detail.quantity < 0 || isNaN(detail.quantity)) {
        return true;
      }
    }
    return false;
  };

  const validateForm = () => {
    validateFullname();
    validateAddress();
    validateEmail();
    validatePhone();
    validateDetails();
    if (
      errors.fullname ||
      errors.address ||
      errors.email ||
      errors.phone ||
      validateDetails()
    ) {
      return false;
    }
    return true;
  };

  const resetForm = () => {
    Object.values(details).forEach(detail => {
      detail.quantity = 0;
    });
    message.fullname = '';
    message.email = '';
    message.phone = '';
    message.message = '';
    message.address = '';
    errors = {
      fullname: '',
      email: '',
      address: '',
      phone: '',
      message: '',
      details: initialDetailErrors,
    };
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log(message);
    if (!validateForm()) return;
    stateForm = 'loading';
    sendOrder(message)
      .then(() => {
        setTimeout(() => {
          stateForm = 'success';
          resetForm();
        }, 3000);
      })
      .catch(() => {
        setTimeout(() => {
          stateForm = 'error';
        }, 3000);
      })
      .finally(() => {
        setTimeout(() => {
          stateForm = 'init';
        }, 6000);
      });
  };

  const getPlaceholder = (lang: string) => {
    if (lang === 'es') {
      return {
        fullname: 'Nombre',
        address: 'Dirección',
        email: 'Correo electrónico',
        phone: 'Teléfono',
        message: 'Mensaje',
        hawaiian: 'Hawaiiana',
        shreddedBeef: 'Carne Desmechada',
        shreddedChicken: 'Pollo Desmechado',
        flankSteak: 'Sobrebarriga',
      };
    }
    return {
      fullname: 'Fullname',
      address: 'Address',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      hawaiian: 'Hawaiian',
      shreddedBeef: 'Shredded Beef',
      shreddedChicken: 'Shredded Chicken',
      flankSteak: 'Flank Steak',
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
  {#each Object.values(message.details) as detail (detail.code)}
    <InputQuantity
      name={detail.code}
      label={detail.name}
      increment={() => incrementQuantity(detail.code)}
      decrement={() => decrementQuantity(detail.code)}
      validator={() =>
        validateQuantities(detail.code as ErrorField, detail.quantity)}
      bind:value={detail.quantity}
      error={errors.details[detail.code]} />
  {/each}
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
<ModalForms {stateForm} lang={lang as 'es' | 'en'} />

<style>
  @reference "tailwindcss";
  .ContactFormComplete {
    @apply mx-auto w-full max-w-[360px] gap-x-3 md:max-w-[410px] lg:max-w-[460px] xl:grid xl:max-w-full xl:grid-cols-2 2xl:grid-cols-4;
  }
</style>
