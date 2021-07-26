<template>
  <div id="al" :class="[type, animate]">
    <i :class="ic"></i>
    <span>{{ msg }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true,
    };
  },
  computed: {
    ic() {
      if (this.type === 'err') {
        return 'el-icon-close';
      }
      if (this.type === 'success') {
        return 'el-icon-check';
      }
      if (this.type === 'warn') {
        return 'el-icon-bell';
      }
      return 'el-icon-check';
    },
    animate() {
      return this.flag ? 'fadeIn' : 'fadeOut';
    },
  },
};
</script>

<style scoped>
#al {
  min-width: 200px;
  height: 30px;
  line-height: 30px;
  text-align: left;
  position: fixed;
  border-radius: 8px;
  padding: 3px;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  padding: 10px;
  animation: runA all 2s;
}

.success {
  color: #67c23a;
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}

.err {
  color: #f56c6c;
  background-color: #fef0f0;
  border-color: #fde2e2;
}

.warn {
  color: #e6a23c;
  background-color: #fdf6ec;
  border-color: #faecd8;
}

@keyframes fadeIn {
  0% {
    top: 0;
    opacity: 0;
  }

  100% {
    top: 30px;
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    top: 30px;
    opacity: 1;
  }

  100% {
    top: 0;
    opacity: 0;
  }
}

.fadeIn {
  animation: fadeIn 0.5s forwards;
}

.fadeOut {
  animation: fadeOut 0.5s forwards;
}
</style>
