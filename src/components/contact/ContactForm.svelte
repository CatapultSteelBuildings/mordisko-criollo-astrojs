<script lang="ts">
  /* Components */
  import Input from '@components/shared/Input.svelte';
  import TextArea from '@components/shared/TextArea.svelte';

  /* Interfaces */
  import type { ContactMessage } from '@/core/interfaces';

  /* Utils */
  import { sendContactMessage } from '@/core/utils';

  /* Validators */
  import { emailValidator, isValidColombianPhone } from '@/core/validators';

  const { lang = 'es', classes = '' } = $props();

  let message = $state<ContactMessage>({
    fullname: '',
    email: '',
    phone: '',
    message: '',
  });

  let errors = $state({
    fullname: '',
    email: '',
    phone: '',
    message: '',
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

  const validateEmail = () => {
    if (
      message.email.trim().length > 0 &&
      !emailValidator(message.email.trim())
    ) {
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

  const validateForm = () => {
    validateFullname();
    validateEmail();
    validatePhone();
    if (errors.fullname || errors.email || errors.phone) {
      return false;
    }
    return true;
  };

  const resetForm = () => {
    message.fullname = '';
    message.email = '';
    message.phone = '';
    message.message = '';
    errors = {
      fullname: '',
      email: '',
      phone: '',
      message: '',
    };
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (!validateForm()) return;

    sendContactMessage(message)
      .then(() => {
        alert('Message sent successfully');
        resetForm();
      })
      .catch(() => {
        alert('Error sending message');
      });
  };

  const getPlaceholder = (lang: string) => {
    if (lang === 'es') {
      return {
        fullname: 'Nombre',
        email: 'Correo electrónico (opcional)',
        phone: 'Número de WhatsApp',
        message: 'Mensaje',
      };
    }
    return {
      fullname: 'Fullname',
      email: 'Email (optional)',
      phone: 'WhatsApp Number',
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
    classes="col-span-2 2xl:col-span-4"
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

  <TextArea
    name="message"
    id="message"
    classes="col-span-2 2xl:col-span-4"
    rows={8}
    placeholder={getPlaceholder(lang).message}
    bind:value={message.message}></TextArea>
  <div
    class="col-span-2 flex w-full items-center justify-center 2xl:col-span-4">
    <button type="submit" class="btn btn-secondary">Enviar</button>
  </div>
</form>

<style>
  @reference "tailwindcss";
  .ContactFormComplete {
    @apply mx-auto w-full max-w-[360px] gap-x-3 md:max-w-[410px] lg:max-w-[460px] xl:grid xl:h-auto xl:max-w-full xl:grid-cols-2 xl:gap-y-0 2xl:grid-cols-4;
  }
</style>
