<template>
  <div class="grid">
    <div class="grid-palette">
      <palette></palette>
    </div>
    <div class="grid-main">
      <div class="screen16 gap">
        <div
          v-for="(item, index) in items"
          :key="index"
          :class="getClass(item)"
          v-on:mousemove="maybeSetColor(index)"
          v-on:click="setColor(index)"
        ></div>
      </div>
    </div>

    <div class="grid-preview">
      <div class="screen16">
        <div
          v-for="(item, index) in items"
          :key="`p${index}`"
          :class="getClass(item)"
        ></div>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';
import Palette from '../components/Palette.vue';
import Color from '../mixin/Color';

export default {
  name: 'screen16',
  mixins: [
    Color,
  ],
  data() {
    return {
      items: [],
      mouseIsDown: false,
    };
  },
  components: {
    Palette,
  },
  mounted() {
    const items = [];
    let current = [];
    if (this.$route.params.current) {
      current = this.$route.params.current.split('');
    }
    for (let i = 0; i < 256; i++) {
      items[i] = current[i] || 0;
    }
    Vue.set(this, 'items', items);

    document.addEventListener('mousedown', (evt) => {
      Vue.set(this, 'mouseIsDown', true);
      evt.preventDefault();
    });
    document.addEventListener('mouseup', () => {
      Vue.set(this, 'mouseIsDown', false);
    });
  },
  computed: {
    ...mapGetters([
      'currentColor',
    ]),
  },
  methods: {
    maybeSetColor(index) {
      if (this.mouseIsDown) {
        this.setColor(index);
      }
    },
    setColor(index) {
      if (this.items[index] === this.currentColor) {
        return;
      }
      Vue.set(this.items, index, this.currentColor);

      const current = this.items.join('');
      if (this.$route.params.current === current) {
        return;
      }
      const route = {
        name: 'screen16',
        params: {
          current,
        },
      };
      this.$router.push(route);
    },
  },
};
</script>

<style lang="scss">
  .screen16 {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    margin: 0 auto;

    &.gap {
      grid-gap: 5px;
    }

    > div {
      padding-bottom: 100%;
      cursor: pointer;
    }
  }
</style>
