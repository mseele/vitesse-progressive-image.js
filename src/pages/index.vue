<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const name = ref("");

const router = useRouter();
const go = () => {
  if (name.value) router.push(`/hi/${encodeURIComponent(name.value)}`);
};

const { t } = useI18n();
</script>

<template>
  <div>
    <p class="text-4xl">
      <carbon-campsite class="inline-block" />
    </p>
    <p>
      <a
        rel="noreferrer"
        href="https://github.com/antfu/vitesse"
        target="_blank"
      >
        Vitesse
      </a>
    </p>
    <p>
      <em class="text-sm opacity-75">{{ t("intro.desc") }}</em>
    </p>

    <div class="p-4 w-80 h-50 mx-auto overflow-hidden">
      <a
        href="https://images.unsplash.com/photo-1510279770292-4b34de9f5c23?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        class="progressive replace"
      >
        <img
          src="https://images.unsplash.com/photo-1510279770292-4b34de9f5c23?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=20&q=80"
          class="preview"
          alt="image"
        />
      </a>
    </div>

    <div class="py-4" />

    <input
      id="input"
      v-model="name"
      :placeholder="t('intro.whats-your-name')"
      :aria-label="t('intro.whats-your-name')"
      type="text"
      autocomplete="false"
      class="px-4 py-2 text-sm text-center bg-transparent border border-gray-200 rounded outline-none active:outline-none dark:border-gray-700"
      style="width: 250px"
      @keydown.enter="go"
    />
    <label class="hidden" for="input">{{ t("intro.whats-your-name") }}</label>

    <div>
      <button class="m-3 text-sm btn" :disabled="!name" @click="go">
        {{ t("button.go") }}
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
