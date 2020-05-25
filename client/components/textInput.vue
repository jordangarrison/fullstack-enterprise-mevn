<template>
  <div class="mb-3">
    <input
      type="text"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      @blur="$emit('blur')"
      @change="$emit('input', $event.target.value)"
      @focus="$emit('focus')"
      @input="$emit('input', $event.target.value)"
      class="w-full bg-brown-lightest p-3 focus:outline-none text-xs text-brown px-2"
    />
    <span v-if="error" class="text-xs text-red">{{ error }}</span>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    placeholder: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    value: {
      type: String,
      required: false,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    error: {
      type: String,
      required: false
    }
  }
}
</script>
