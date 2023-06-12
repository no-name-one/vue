<template>
    <div>
        <div class="books">
            <div class="book">
                <img class="picture" src="../../assets/sherlock.jpg" alt="sherlock holmes"/>
                <div class="data">
                    <div class="title"><strong>Title ---- </strong>Sherlock Holmes</div>
                    <div><strong>Author ---- </strong>Arthur Conan Doyle</div>
                </div>
                <div class="data">
                    <my-button @click="$router.push('/about1')">Open</my-button>
                </div>
                <div class="btns">
                    <div>
                        <my-button id="l" class="like" @click="addLike">Like</my-button>
                        <my-button class="dislike" @click="addDislike">Dislike</my-button>
                    </div>
                </div>
                <div class="data">
                    <div class="title">Likes: {{a}}</div>
                    <div>Dislikes: {{b}}</div>
                </div>
            </div>
            <div class="book">
                <img src="../../assets/potter.jpg" alt="harry potter"/>
                <div class="data">
                    <div class="title"><strong>Title ---- </strong>Harry Potter and the Prisoner of Azkaban</div>
                    <div><strong>Author ---- </strong>Rowling Joanne Kathleen</div>
                </div>
                <div class="data">
                    <my-button @click="$router.push('/about2')">Open</my-button>
                </div>
                <div class="btns">
                    <div>
                        <my-button class="like" @click="addLike2">Like</my-button>
                        <my-button class="dislike" @click="addDislike2">Dislike</my-button>
                    </div>
                </div>
                <div class="data">
                    <div class="title">Likes: {{a2}}</div>
                    <div>Dislikes: {{b2}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
export default {
    components: {MyButton},
    data() {
        return {
            users: 2,
            a: 10,
            b: 1,
            a2: 100,
            b2: 10,
            counter: 0,
            counter2: 0
        }
    },
    methods: {
        addLike() {
            if (this.counter > 0) {
                this.a -= 1;
                this.counter -= 1;
            } else if (this.counter < 0){

            } else {
                this.a += 1;
                this.counter += 1;
            }
        },
        addDislike() {
            if (this.counter < 0) {
                this.counter += 1;
                this.b -= 1;
            } else if(this.counter > 0) {

            } else {
                this.b += 1;
                this.counter -= 1;
            }
        },
        addLike2() {
            if (this.counter2 > 0) {
                this.a2 -= 1;
                this.counter2 -= 1;
            } else if (this.counter2 < 0){

            } else {
                this.a2 += 1;
                this.counter2 += 1;
            }
        },
        addDislike2() {
            if (this.counter2 < 0) {
                this.counter2 += 1;
                this.b2 -= 1;
            } else if (this.counter2 > 0) {

            } else {
                this.b2 += 1;
                this.counter2 -= 1;
            }
        }
    }
}
</script>

<style scoped>
.books {
    display: block;
//flex-direction: column;
}

img {
    height: 120px;
}

.book {
    padding: 15px;
    border: 3px solid mediumslateblue;
    margin-bottom: 5px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
}

.data {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.btns {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.title {
    margin-bottom: 5px;
}

.like {
    color: green;
    margin-right: 5px;
    border-color: black;
}

.dislike {
    color: indianred;
    border-color: black;
}
</style>