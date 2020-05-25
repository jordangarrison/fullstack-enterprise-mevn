<template>
  <div>
    <div class="h-2 w-full bg-gold-light"></div>
    <div class="h-12 w-full flex items-center justify-between px-6">
      <router-link class="text-gold hover:text-gold-dark" to="/"
        >MEVN</router-link
      >
      <div>
        <router-link
          class="text-brown no-underline hover:text-brown-darkest"
          to="/auth/login"
          >Sign In</router-link
        >
        <router-link
          class="text-brown no-underline border-2 px-3 py-2 hover:text-brown-darkest hover:border-brown-darkest rounded-full border-brown ml-3"
          to="/auth/register"
          >Join Now</router-link
        >
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
