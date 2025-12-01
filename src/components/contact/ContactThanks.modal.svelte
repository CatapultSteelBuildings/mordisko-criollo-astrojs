<script lang="ts">
  import Check from '@components/ui/icons/check.svelte';

  export let lang: 'es' | 'en' = 'es';
  export let isOpenThanksModal: boolean = false;
  const successMessage =
    lang === 'es'
      ? '¡Gracias por tu pedido! Te contactaremos pronto.'
      : 'Thank you for your order! We will contact you soon.';
</script>

{#if isOpenThanksModal}
  <div class="ModalForm">
    <div class="ModalForm__container">
      <Check class="h-16 w-16 text-(--green)" />
      <p>{successMessage}</p>
      <button onclick={() => (isOpenThanksModal = false)}
        >{lang === 'es' ? 'Cerrar' : 'Close'}</button>
    </div>
  </div>
{/if}

<style>
  @reference "tailwindcss";
  .ModalForm {
    @apply fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 backdrop-blur-sm;
  }
  .ModalForm__container {
    @apply mx-auto flex min-h-[300px] w-full max-w-[450px] flex-col items-center justify-center gap-3 rounded-lg bg-(--primary)/90 p-6 shadow-(--secondary)/20 shadow-2xl;
  }

  .ModalForm__container p {
    @apply text-center text-(--secondary);
  }

  .ModalForm__container button {
    @apply cursor-pointer rounded-lg border-2 border-(--secondary) bg-(--primary) px-4 py-2 font-semibold text-(--secondary) transition-colors duration-300 hover:bg-(--secondary) hover:text-(--white);
  }
</style>
