<template>
  <div>

  </div>
</template>

<script lang="ts">
import { defineComponent} from "vue";
import Form from '@/services/sheetGenerator/Form';
import Renderer from '@/services/sheetGenerator/Renderer';

export default defineComponent({
  props: {
    questions: Array
  },
  data() {
    return {
      image: ''
    };
  },

  setup() {
    return {};
  },
  components: {},
  mounted() {
    //
    // const form = Form.make(this.questions);
    // form.findBestLayout();

    // const renderer = new Renderer(form);
    // console.log(renderer.render());

  },
  methods: {},
});
</script>
