<script lang="ts">
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
  const digits = phone.replace(/\D/g, '');

  const clean = digits.startsWith('57') && digits.length > 10 
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
</script>

<section class="form">
  <h2>Escríbenos tus pedidos o sugerencias</h2>
  <form action="">
    <input
      type="text"
      placeholder="Nombre"
      onchange={validateFullname}
      onblur={validateFullname}
      bind:value={message.fullname}
      aria-invalid={errors.fullname !== ""}
      aria-describedby="contact-home-fullname-error"
    />
    <input
      type="email"
      placeholder="Email"
      onchange={validateEmail}
      onblur={validateEmail}
      bind:value={message.email}
      aria-invalid={errors.email !== ""}
      aria-describedby="contact-home-email-error"
    />
    <input
      type="tel"
      placeholder="Teléfono"
      onchange={validatePhone}
      onblur={validatePhone}
      bind:value={message.phone}
      aria-invalid={errors.phone !== ""}
      aria-describedby="contact-home-phone-error"
    />
    <textarea placeholder="Mensaje" bind:value={message.message}></textarea>
    <button type="submit">Enviar</button>
  </form>
</section>
