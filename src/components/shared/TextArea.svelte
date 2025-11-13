<script lang="ts">
  export let name: string;
  export let id: string;
  export let rows: number;
  export let placeholder: string;
  export let error: string = '';
  export let value: string;
  export let classes: string = '';
  export let validator: (() => any) | undefined = undefined;
  export let required: boolean = false;
</script>

<div class={`form-group ${classes}`.trim()}>
  <textarea
    {name}
    {id}
    {rows}
    {placeholder}
    bind:value
    onchange={validator}
    oninput={validator}
    onkeyup={validator}
    aria-label={placeholder}
    aria-invalid={error !== ''}
    aria-describedby={`${name}-error`}
    aria-required={required}></textarea>
  <p
    aria-live="polite"
    id={`${name}-error`}
    role="alert"
    aria-hidden={error === '' ? 'false' : 'true'}
    class="form-group__error">
    {error}
  </p>
</div>
