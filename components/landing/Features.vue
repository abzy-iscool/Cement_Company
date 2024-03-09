<script setup>
const features = [
  {
    title: "Safety Standards",
    description:
      "At our cement company, safety isn't just a priority; it's a core value embedded in every aspect of our operations, where stringent safety standards are upheld rigorously to ensure the well-being of our employees, partners, and communities.",
    icon: "bx:bxs-band-aid",
  },
  {
    title: "Sustainability Practices",
    description:
      "Driven by a profound commitment to environmental stewardship, our cement company integrates sustainable practices seamlessly into our operations, from eco-conscious manufacturing processes to the development of innovative, green cement solutions that minimize our carbon footprint and contribute to a greener tomorrow.",
    icon: "bx:bxs-leaf",
  },
  {
    title: "Industry Affiliation",
    description:
      "Proudly affiliated with esteemed industry associations and organizations, our cement company stands at the forefront of excellence, leveraging our partnerships to stay abreast of emerging trends, uphold best practices, and continually elevate standards within the construction materials sector.",
    icon: "bx:bxs-buildings",
  },
  {
    title: "Expert Team",
    description:
      "Behind our cement company's success stands an exceptional team of industry experts, comprised of seasoned professionals, engineers, and innovators who bring a wealth of experience, expertise, and unwavering dedication to every project, ensuring unparalleled quality, reliability, and client satisfaction.",
    icon: "bx:bxs-group",
  },
];
</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      Discover the Concrete Difference.
    </h2>
    <p class="text-lg mt-4 text-slate-600">
      Welcome to [Company Name], where you can truly discover the concrete difference. We pride ourselves on not just delivering cement, but providing solutions that lay the foundation for enduring structures and lasting impressions. Our commitment to innovation and quality ensures that every mix we produce stands the test of time, enabling you to build with confidence. With a focus on sustainability and cutting-edge technology, we offer more than just materials—we offer peace of mind. Explore the difference with us and witness how our dedication to excellence transforms ordinary projects into extraordinary achievements.
    </p>
  </div>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of features" class="flex gap-4 items-start">
      <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white" :name="item.icon" />
      </div>
      <div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
