<template>
  <div class="container my-16 width-full mx-auto">
    <div class="max-w-xs mx-auto">
      <h1 class="text-center text-xxl text-gold">Register</h1>
      <div class="w-full bg-white shadow mt-5 rounded-sm p-6">
        <text-input
          name="name"
          v-model="model.name"
          v-validate="'required'"
          :value="model.name"
          :error="errors.first('name')"
          placeholder="Enter Your Name"
        />
        <text-input
          name="email"
          v-model="model.email"
          v-validate="'required|email'"
          :value="model.email"
          :error="errors.first('email')"
          placeholder="Enter Your Email"
        />
        <text-input
          name="password"
          type="password"
          v-model="model.password"
          v-validate="'required|min:8'"
          :value="model.password"
          :error="errors.first('password')"
          placeholder="Enter Your password"
        />
        <button
          class="w-full mt-3 py-3 bg-emerald text-sm text-white rounded-sm focus:outline-none hover:bg-emerald-light"
          @click="register"
        >
          Sign Up!
        </button>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import { POST_REGISTER } from '@store/auth/actions'
export default {
  data: () => ({
    model: {
      name: '',
      email: '',
      password: ''
    }
  }),
  methods: {
    register() {
      this.$validator.validate().then((isValid) => {
        if (!isValid) return
        this.$store.dispatch(POST_REGISTER, this.model)
      })
    }
  }
}
</script>
