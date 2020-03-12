<template>
  <div class="palette">
    <div
      v-for="item in palette"
      :class="getClasses(item)"
      :key="item"
      v-on:click="setCurrentColor(item)"
    ></div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Color from '../mixin/Color';

export default {
  name: 'palette',
  mixins: [
    Color,
  ],
  data() {
    return {
      palette: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'],
    };
  },
  computed: {
    ...mapGetters([
      'currentColor',
    ]),
  },
  methods: {
    setCurrentColor(item) {
      this.$store.commit('setCurrentColor', item);
    },
    getClasses(item) {
      const cls = this.getClass(item);
      if (item === this.currentColor) {
        return `current ${cls}`;
      }
      return cls;
    },
  },
};
</script>

<style lang="scss">
  .palette {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 5px;
    @media only screen and (min-width: 578px) {
      grid-template-columns: repeat(2, 1fr);
    }

    > div {
      padding-bottom: 100%;
      border-radius: 2px;
      cursor: pointer;
      border: 1px solid transparent;
      opacity: .8;

      &.current {
        box-shadow: 0 0 15px rgba(255, 255, 255, .2);
        opacity: 1;
      }
    }
  }

  .color-0 {
    background: rgba(0, 0, 0, .1);
  }

  .color-1 {
    background: #fff;
  }

  .color-2 {
    background: #ef1d2b;
  }

  .color-3 {
    background: #f494c3;
  }

  .color-4 {
    background: #f27f40;
  }

  .color-5 {
    background: #fdf33c;
  }

  .color-6 {
    background: #479ca2;
  }

  .color-7 {
    background: #8ada5c;
  }

  .color-8 {
    background: #1b46aa;
  }

  .color-9 {
    background: #9cf3fe;
  }

  .color-a {
    background: #873ac1;
  }

  .color-b {
    background: #a0849e;
  }

  .color-c {
    background: #59426b;
  }

  .color-d {
    background: #e2cdc5;
  }

  .color-e {
    background: #89453f;
  }

  .color-f {
    background: #000000;
  }
</style>
