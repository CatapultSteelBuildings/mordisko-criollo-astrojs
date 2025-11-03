<script lang="ts">
  export let variant: "primary" | "secondary" | "light-primary" | "light-secondary";
  export let label: string;
  export let type: "button" | "submit" | "reset" = "button";
  export let disabled: boolean = false;

  $: btnClass =
    variant === "primary"
      ? "bg-[var(--primary)] text-[var(--secondary)]"
      : variant === "secondary"
      ? "bg-[var(--secondary)] text-[var(--white)]"
      : variant === "light-primary"
      ? "bg-transparent text-[var(--primary)] border border-[var(--primary)]"
      : variant === "light-secondary"
      ? "bg-transparent text-[var(--secondary)] border border-[var(--secondary)]"
      : "bg-[var(--primary)] text-[var(--secondary)]";
</script>

<button {type} class={btnClass} {disabled}
  >{label}</button
>

<style>
  @reference "tailwindcss";
  button {
    @apply py-2 px-6 rounded-lg cursor-pointer transition-all duration-150 hover:shadow-lg active:translate-y-[1px];
  }
</style>
