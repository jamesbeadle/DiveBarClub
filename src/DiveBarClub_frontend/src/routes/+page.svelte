<script lang="ts">
  import Layout from "./Layout.svelte";
</script>

<Layout>
  
  <div class="min-h-screen flex flex-col md:flex-row items-center justify-around">
    <div class="max-w-md mb-8 md:mb-0">
      <img src="home.png" alt="Dive Bar Club" class="w-full rounded-lg shadow-lg">
      <p class="mt-8 text-gray-300 text-center text-3xl">Dive Bar Club</p>
    </div>
  
    <div class="max-w-md text-center md:text-right">
      <h2 class="text-2xl font-bold text-gray-300">Dive In</h2>
      <p class="mt-4 text-gray-600">Learn more about decentralised fantasy US sports on the Internet Computer blockchain.</p>
      <button class="mt-6 px-6 py-2 bg-blue-400 text-white font-semibold rounded-lg shadow-md hover:bg-blue-300 transition-colors">Whitepaper</button>
    </div>
  </div>
</Layout>
