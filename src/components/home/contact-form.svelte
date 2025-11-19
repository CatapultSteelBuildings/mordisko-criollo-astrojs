<script lang="ts">
  /* Components */
  import Input from '@components/shared/Input.svelte';
  import TextArea from '@components/shared/TextArea.svelte';
  import Button from '@components/shared/Button.svelte';
  import ModalForms from '../shared/ModalForms.svelte';

  /* Interfaces */
  import type { ContactMessage } from '@interfaces/index';

  /* Validators */
  import { emailValidator, isValidColombianPhone } from '@validators/index';

  /* Utils */
  import { sendMessage } from '@utils/index';

  /* Types */
  import type { StateForm } from '@/core/types/StateForm.type';

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

  let stateForm = $state<StateForm>('init');

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

  const validateForm = () => {
    validateFullname();
    validateEmail();
    validatePhone();
    if (errors.fullname || errors.email || errors.phone) return false;
    return true;
  };

  const resetForm = () => {
    message = {
      fullname: '',
      email: '',
      phone: '',
      message: '',
    };
    errors = {
      fullname: '',
      email: '',
      phone: '',
      message: '',
    };
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log(validateForm());
    if (!validateForm()) return;
    stateForm = 'loading';
    sendMessage(message)
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
        email: 'Correo electrónico',
        phone: 'Teléfono Celular',
        message: 'Mensaje',
      };
    }
    return {
      fullname: 'Fullname',
      email: 'Email',
      phone: 'Cellphone',
      message: 'Message',
    };
  };
</script>

<form onsubmit={e => handleSubmit(e)} class={classes}>
  <Input
    name="fullname"
    type="text"
    placeholder={getPlaceholder(lang).fullname}
    validator={validateFullname}
    bind:value={message.fullname}
    error={errors.fullname} />
  <Input
    name="email"
    type="email"
    placeholder={getPlaceholder(lang).email}
    validator={validateEmail}
    bind:value={message.email}
    error={errors.email} />
  <Input
    name="phone"
    type="tel"
    placeholder={getPlaceholder(lang).phone}
    validator={validatePhone}
    bind:value={message.phone}
    error={errors.phone} />
  <TextArea
    name="message"
    id="message"
    rows={4}
    placeholder={getPlaceholder(lang).message}
    bind:value={message.message}></TextArea>
  <div class="flex w-full items-center justify-center">
    <Button
      variant="secondary"
      label={lang === 'es' ? 'Enviar' : 'Send'}
      type="submit" />
  </div>
</form>
<ModalForms {stateForm} lang={lang as 'es' | 'en'} />
