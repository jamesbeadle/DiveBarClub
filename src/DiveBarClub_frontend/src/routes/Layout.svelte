<script lang="ts">
  import { browser } from "$app/environment";
  import "../app.css";

  $: (() => {
    if (!browser) {
      return;
    }
    const spinner = document.querySelector("body > #app-spinner");
    spinner?.remove();
  })();
</script>
  <div class="flex flex-col h-screen justify-between default-text">
    <main class="page-wrapper">
      <slot />
    </main>
  </div>

<style>
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
</style>
