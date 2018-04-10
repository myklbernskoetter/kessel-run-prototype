<template>
  <div class="container" v-cloak>
    <slot></slot>
  </div>
</template>

<script>
  import VLink from '../components/VLink.vue';
  export default {
  }
</script>

<style lang="scss">
html,
body {
  height: 100vh;
  margin: 0;
  padding: 0;
}

.container {
  height: 100%;
}

@keyframes vertical1 {
	0%,
	100% {
		transform: translateY(0) scale(1);
		z-index: 1;
	}

	50% {
		transform: translateY(3.5rem) scale(.25);
		z-index: 0;
	}
}

@keyframes vertical2 {
	0%,
	100% {
		transform: translateY(3.5rem) scale(.25);
		z-index: 0;
	}

	50% {
		transform: translateY(0) scale(1);
		z-index: 1;
	}
}


@keyframes opacity {
	to {
    opacity: 1;
  }
}

@keyframes scaleUp {
  to {
    transform: scale(1);
  }
}

@keyframes target1-rotation {
		0% {
				-webkit-transform: rotate(0deg);
		}

		50% {
			transform: rotate(200deg);
		}

		100% {
				-webkit-transform: rotate(0deg);
		}
}
</style>
