<script lang="ts">
  import ButtonContactOrder from '../ui/buttons/ButtonContactOrder.svelte';
  import type { OrderMessage } from '@/core/interfaces';
  import { generateOrderWhatsapp } from '@/core/utils/index';
  export let lang: 'es' | 'en' = 'es';
  export let isOpenOrderModal: boolean;
  export let order: OrderMessage;
  export let resetForm: () => void;
  export let modalActions: () => void;
  const action = () => {
    const linkWhatsapp = generateOrderWhatsapp(order);
    window.open(linkWhatsapp, '_blank');
    resetForm();
    modalActions();
  };
</script>

{#if isOpenOrderModal}
  <div
    class="ContactOrderModal"
    role="dialog"
    aria-modal="true"
    aria-labelledby="contact-order-modal">
    <div class="ContactOrderModal__container">
      <h4 class="ContactOrderModal__title" id="contact-order-modal">
        {lang === 'es' ? 'Pedido' : 'Order'}
      </h4>
      <p>{lang === 'es' ? 'Nombre' : 'Fullname'}: {order.fullname}</p>
      <p>{lang === 'es' ? 'Dirección' : 'Address'}: {order.address}</p>
      {#if order.email}
        <p>{lang === 'es' ? 'Correo' : 'Email'}: {order.email}</p>
      {/if}
      <p>{lang === 'es' ? 'Teléfono' : 'Phone'}: {order.phone}</p>
      <hr />
      <p class="font-bold underline">
        {lang === 'es' ? 'Detalles' : 'Details'}
      </p>
      <ul>
        {#each order.details as detail (detail.code)}
          <li>{detail.name}: {detail.quantity}</li>
        {/each}
      </ul>
      <hr />
      <p>{lang === 'es' ? 'Mensaje' : 'Message'}: {order.message}</p>
      <div class="ContactOrderModal__buttons">
        <ButtonContactOrder
          titleAccessibility={lang === 'es'
            ? 'Confirmar Pedido y enviar por WhatsApp'
            : 'Confirm and send order to WhatsApp'}
          {lang}
          {action} />
        <button
          onclick={() => (isOpenOrderModal = false)}
          aria-label={lang === 'es'
            ? 'Cancelar y cerrar el pedido'
            : 'Cancel and close the order'}
          >{lang === 'es' ? 'Cancelar' : 'Cancel'}</button>
      </div>
    </div>
  </div>
{/if}

<style>
  @reference "tailwindcss";
  .ContactOrderModal {
    @apply fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 backdrop-blur-sm;
  }
  .ContactOrderModal__container {
    @apply mx-auto flex min-h-[300px] w-full max-w-[600px] flex-col items-center justify-center gap-3 rounded-lg bg-(--primary)/90 p-6 shadow-(--secondary)/20 shadow-2xl;
  }

  .ContactOrderModal__container p {
    @apply mb-0 w-full text-left text-(--secondary);
  }

  .ContactOrderModal__container ul {
    @apply w-full list-inside list-disc pl-3;
  }

  .ContactOrderModal__buttons {
    @apply flex w-full flex-col items-center justify-center gap-3 pt-3;
  }
</style>
