<template>
    <li>
        <h2>{{ name }} {{ isFavorite? "(Favorite)": "" }}</h2>
        <button @click="toggleDetails">
            {{ detailsAreVisible? "Hide": "Show" }} Details
        </button>
        <button @click="toggleFavorite">
            {{ isFavorite? "Remove Favorite": "Make Favorite" }}
        </button>
        <ul v-if="detailsAreVisible === true">
            <li><strong>Phone:</strong>{{ phoneNumber }}</li>
            <li><strong>Email:</strong>{{ emailAddress }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    //   props: [
    //     'name', 'phoneNumber', 'emailAddress', 'isFavorite'
    //   ],
    emits: ['toggle-favorite'],
    // emits: {
    //     'toggle-favorite': function (id) {
    //         if (id) {
    //             return true;
    //         } else {
    //             console.warn('no id')
    //             return false
    //         }
    //     }
    // },
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phoneNumber: String,
        emailAddress: String,
        isFavorite: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    data() {
        return {

            detailsAreVisible: false,
            // friend: {
            //     id: 'manuel',
            //     name: 'Manuel Lorenz',
            //     phone: '0123 456 789',
            //     email: 'manuel@localhost.com'
            // },
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavorite() {
            this.$emit('toggle-favorite', this.id)
        },
    },
};
</script>
