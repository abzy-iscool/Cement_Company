<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <img
        class="rounded-full transition-transform transform hover:scale-125"
        src="~/assets/img/hero-1.png"
        alt="Starship starts the engine"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        Building Tomorrow, Today.
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Empower your projects with precision and strength as you embark on a journey to elevate your base game, forging foundations that not only withstand the test of time but set the stage for innovation and excellence in every endeavor
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          href="https://www.taifamining.co.tz/"
          target="_blank"
          rel="noopener"
          >Parent Company</LandingLink
        >
      </div>
    </div>
  </main>
</template>
