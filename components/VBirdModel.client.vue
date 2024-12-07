<script setup lang="ts">
const {scene} = await useGLTF('/models/bird.gltf', {draco: true})
const usersWatching = useState<number>('usersWatching')
</script>

<template>
  <div class="bg-black">
    <TresCanvas alpha>
      <!-- Камера -->
      <TresPerspectiveCamera :position="[1, 2, 3]"/>
      <OrbitControls
          auto-rotate
          :enable-rotate="true"
          :enable-zoom="true"
          :enable-damping="true"
          :enable-pan="false"
          :auto-rotate-speed="usersWatching * 10"
          :min-polar-angle="0"
          :max-polar-angle="3.14"
      />
      <!-- Основной направленный свет -->
      <TresDirectionalLight :position="[5, 10, 5]" :intensity="2" />
      <TresDirectionalLight :position="[-5, -10, -5]" :intensity="2" />
      <TresDirectionalLight :position="[0, -10, 40]" :intensity="2" />
      <TresDirectionalLight :position="[0, 5, -5]" :intensity="2" />
      <!-- Отображение модели -->
      <primitive :object="scene"/>
    </TresCanvas>
  </div>
</template>
