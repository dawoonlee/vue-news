<template>
    <div>
        <div v-for="item in jobs" :key="item.title">{{ item.title }}</div>
    </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js';

export default {
    data() {
        return {
            jobs: []
        }
    },
    created() {
        fetchJobsList()
            .then(response => this.jobs = response.data)
            .catch(e => console.log(e));
    }

}
</script>

<style></style>