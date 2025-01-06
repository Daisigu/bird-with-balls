<script setup lang="ts">
const protocol = location.protocol === 'https:' ? 'wss' : 'ws'
const { data } = useWebSocket(`${protocol}://${location.host}/api/websocket`)
const usersWatching = useState('usersWatching', () => 1)

watch(data, (newValue) => {
  if (newValue) {
    try {
      const parsed = JSON.parse(newValue)
      console.log(parsed)
      usersWatching.value = parsed.userCount || 1
    } catch (error) {
      console.error('Failed to parse WebSocket message', error)
    }
  }
})
</script>

<template>
  <footer class="p-2">
    <span class="font-mono text-xs sm:text-lg">Users watching spinning bird with balls: {{ usersWatching }}</span>
  </footer>
</template>
