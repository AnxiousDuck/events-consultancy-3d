<script>
  export let heroHead, heroText, heroImg
  import GradientBg from "./GradientBg.svelte"
</script>

<div class=" md:p-8 p-4 bg-white">

  <div class="flex justify-center items-center flex-col md:flex-row-reverse">

    <img src="{heroImg}" class=" object-cover md:w-3/4 w-full h-48 md:h-52 rounded-lg shadow-2xl " />

    <div class=" flex flex-col align-center justify-center md:w-1/2 md:pt-0 pt-4 md:p-2 ">
      <h1 class="lg:text-2xl text-3xl font-bold text-indigo-600 ">{heroHead}</h1>
      <p class="pt-2">{heroText}</p>
      <!-- <button class="btn btn-primary">Get Started</button> -->
    </div>
  </div>
</div>
<div class="divider"></div>  