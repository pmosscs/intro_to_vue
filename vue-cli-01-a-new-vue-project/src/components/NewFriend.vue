<template>
    <div>
        <form>
            <div>
                <label for="id">ID:</label>
                <input v-model="inputId" type="text" id="id">
            </div>
            <div>
                <label for="name">Name:</label>
                <input v-model="inputName" type="text" id="name" />
            </div>
            <div>
                <label for="phone">Phone Number:</label>
                <input v-model="inputNumber" type="text" id="phone">
            </div>
            <div>
                <label for="email">Email Adress:</label>
                <input v-model="inputEmail" type="text" id="email">
            </div>
            <div>
                <label>Favorite?</label>
                <label for="true">Yes</label>
                <input type="radio" id="true" name="fave" :value="true" v-model="inputFavorite">
                <label for="false">No</label>
                <input type="radio" id="false" name="fave" :value="false" v-model="inputFavorite">
            </div>
            <button @click.prevent="submitFriend">Submit Friend</button>
        </form>
    </div>
</template>


<script>
export default {
    data() {
        return {
            inputId: "",
            inputName: "",
            inputNumber: "",
            inputEmail: "",
            inputFavorite: null
        }
    },
    methods: {
        submitFriend() {
            const newFreind = {
                id: this.inputId,
                name: this.inputName,
                phone: this.inputNumber,
                email: this.inputEmail,
                isFavorite: this.inputFavorite
            };
            this.$emit('add-friend', newFreind);

            this.inputId = ""
            this.inputName = ""
            this.inputNumber = ""
            this.inputEmail = ""
            this.inputFavorite = null
        }
    }
}


</script>


<style>

</style>