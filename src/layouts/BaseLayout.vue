<template>
  <main class="flex h-screen bg-primary">
    <section class="flex-1 flex justify-center items-center px-5">
      <div class="text-black max-w-[500px] w-full">
        <slot></slot>
      </div>
    </section>
    <section class="flex-1">
      <img class="h-full w-full object-cover" src="../assets/img/static-map.png" alt="" />
    </section>
  </main>
</template>
