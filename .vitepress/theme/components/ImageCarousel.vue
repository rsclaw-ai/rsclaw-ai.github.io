<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{
  images: string[]
  captions?: string[]
  interval?: number
}>(), {
  captions: () => [],
  interval: 4000
})

const current = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

function goTo(index: number) {
  current.value = index
  resetTimer()
}

function next() {
  current.value = (current.value + 1) % props.images.length
}

function prev() {
  current.value = (current.value - 1 + props.images.length) % props.images.length
}

function resetTimer() {
  if (timer) clearInterval(timer)
  timer = setInterval(next, props.interval)
}

onMounted(() => {
  resetTimer()
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div class="carousel-wrapper">
    <div class="carousel">
      <!-- Slides -->
      <div class="carousel-track">
        <div
          v-for="(img, i) in images"
          :key="i"
          class="carousel-slide"
          :class="{ active: i === current }"
        >
          <img :src="img" :alt="captions[i] || `Screenshot ${i + 1}`" />
        </div>
      </div>

      <!-- Arrow buttons -->
      <button class="carousel-btn prev" @click="prev" aria-label="Previous">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button class="carousel-btn next" @click="next" aria-label="Next">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <!-- Dots -->
      <div class="carousel-dots">
        <button
          v-for="(_, i) in images"
          :key="i"
          class="dot"
          :class="{ active: i === current }"
          @click="goTo(i)"
          :aria-label="`Go to slide ${i + 1}`"
        />
      </div>
    </div>

    <!-- Caption -->
    <p v-if="captions[current]" class="carousel-caption">{{ captions[current] }}</p>
  </div>
</template>

<style scoped>
.carousel-wrapper {
  max-width: 960px;
  margin: 0 auto 2rem;
}

.carousel {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow:
    0 4px 32px var(--vp-c-shadow-1, rgba(0, 0, 0, 0.1)),
    0 0 0 1px rgba(232, 89, 12, 0.2);
  background: var(--vp-c-bg-soft);
  /* No fixed aspect-ratio — height follows the image naturally */
}

.carousel-track {
  position: relative;
  width: 100%;
  /* Height is driven by the active image */
  min-height: 80px;
}

/* Non-active slides sit out of flow so they don't push height */
.carousel-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.6s ease;
  pointer-events: none;
}

.carousel-slide.active {
  /* Back to normal flow so the wrapper sizes to this image */
  position: relative;
  opacity: 1;
  pointer-events: auto;
}

.carousel-slide img {
  width: 100%;
  height: auto;        /* natural height — no cropping */
  display: block;
  border-radius: 10px;
}

/* Arrow buttons — centered vertically relative to the image */
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(6px);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.25s, background 0.25s;
}

.carousel:hover .carousel-btn {
  opacity: 1;
}

.carousel-btn:hover {
  background: rgba(232, 89, 12, 0.75);
}

.carousel-btn.prev {
  left: 14px;
}

.carousel-btn.next {
  right: 14px;
}

/* Dots — placed over the bottom of the image */
.carousel-dots {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 3;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.35);
  border: none;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
  padding: 0;
}

.dot.active {
  background: #e8590c;
  transform: scale(1.25);
}

.dot:hover:not(.active) {
  background: rgba(255, 255, 255, 0.6);
}

/* Caption */
.carousel-caption {
  text-align: center;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  margin-top: 0.75rem;
}

/* Responsive */
@media (max-width: 768px) {
  .carousel-btn {
    width: 32px;
    height: 32px;
    opacity: 1;
  }

  .carousel-btn svg {
    width: 16px;
    height: 16px;
  }
}
</style>
