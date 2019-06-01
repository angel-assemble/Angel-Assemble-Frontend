<template>
  <Disaster/>
</template>

<script>
import { Auth } from 'aws-amplify'
import Disaster from '@/components/Disaster.vue'
export default {
  name: 'protected',
  components: {
    Disaster
  }
}
</script>