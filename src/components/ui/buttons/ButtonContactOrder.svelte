<script>
  import LogosWhatsappIcon from '@components/ui/icons/LogosWhatsappIcon.svelte';

  const { lang = 'es' } = $props();
</script>

<button class="flex items-center gap-2">
  <LogosWhatsappIcon class="h-10 w-10" />
  <span
    >{lang === 'es'
      ? 'Confirmar Pedido en WhatsApp'
      : 'Confirm via WhatsApp'}</span>
</button>

<style>
  @reference "tailwindcss";

  button {
    @apply rounded-lg border-2 border-(--whatsapp-dark-color) bg-(--whatsapp-color) px-4 py-2 font-semibold text-(--whatsapp-dark-color) transition-colors duration-300 hover:bg-(--whatsapp-dark-color) hover:text-(--white);
  }
</style>
