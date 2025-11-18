<script lang="ts">
  import Check from '@components/ui/icons/check.svelte';
  import Cancel from '@components/ui/icons/cancel.svelte';
  import Spinner from '@components/ui/spinners/spinner.svelte';

  import type { StateForm } from '@types/StateForm.type';

  export let stateForm: StateForm = 'init';
  export let lang: 'es' | 'en' = 'es';
  const successMessage =
    lang === 'es'
      ? '¡Gracias por tu mensaje! Te contactaremos pronto.'
      : 'Thank you for your message! We will contact you soon.';
  const errorMessage =
    lang === 'es'
      ? 'Ha ocurrido un error. Por favor, inténtalo de nuevo.'
      : 'An error occurred. Please try again.';
</script>

{#if stateForm !== 'init'}
  <div class="ModalForm">
    <div class="ModalForm__container">
      {#if stateForm === 'loading'}
        <Spinner class="h-16 w-16" />
      {:else if stateForm === 'success'}
        <Check class="h-16 w-16 text-(--green)" />
        <p>{successMessage}</p>
      {:else if stateForm === 'error'}
        <Cancel class="h-16 w-16 text-(--red)" />
        <p>{errorMessage}</p>
      {/if}
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
</style>
