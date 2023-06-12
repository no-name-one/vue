<template>
    <div class="navbar">
        <div @click="$router.push('/')">📚 Store</div>
        <div class="navbar__btns">
            <my-button @click="$router.push('/books')">Books</my-button>
        </div>
    </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
export default {
    components: {MyButton}

}
</script>

<style scoped>
.navbar {
    height: 50px;
    background-color: lavender;
    box-shadow: 2px 2px 4px silver;
    display: flex;
    align-items: center;
    padding: 0 15px;
}

.navbar__btns {
    margin-left: auto;
}
</style>