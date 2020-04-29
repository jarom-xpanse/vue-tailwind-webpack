<template>
    <div>
        <h1>Welcome to this vuejs application -</h1>
        <Header />
    </div>
</template>

<script>
import Header from './components/Header';
export default {
    name: "app",
    components: {
        Header
    }
}
</script>

<style scoped>

</style>