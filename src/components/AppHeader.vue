<template>
  <header class="shadow w-screen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-green-400 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <Icon class="mr-3" />
          <span class="font-semibold text-xl tracking-tight"
            >CryptoExchange</span
          >
        </div>
        <div
          class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto"
        >
          <div class="text-sm lg:flex-grow"></div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  name: "AppHeader",

  components: { Icon }
};
</script>
