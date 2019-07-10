<template>
    <div>
        <div class="alert" v-if="message">{{ message }}</div>
        <div v-if="! loaded">Loading...</div>
        <form @submit.prevent="onSubmit($event)" v-else>
            <div class="form-group">
                <label for="user_name">Name:</label>
                <input type="text"
                       class="form-control"
                       v-model="user.name"
                       id="user_name">
            </div>
            <div class="form-group">
                <label for="user_email">Email:</label>
                <input type="email"
                       class="form-control"
                       v-model="user.email"
                       id="user_email">
            </div>
            <div class="form-group">
                <button type="submit" :disabled="saving">Update</button>
                <button :disabled="saving" @click.prevent="onDelete($event)">Delete</button>
            </div>
        </form>
        <div>
            <router-link :to="{ name: 'users.index' }">
                <button>Cancel</button>
            </router-link>
        </div>
    </div>
</template>

<script>
    import api from '@api/users'

    export default {
        name: "EditUser",
        data(){
            return {
                loaded: false,
                message: null,
                saving: false,
                user: {
                    id: null,
                    name: "",
                    email: "",
                }
            }
        },
        methods: {
            onSubmit(event){
                this.saving = true;

                api.update(this.user.id, {
                    name: this.user.name,
                    email: this.user.email,
                }).then((response) => {
                    this.message = 'User updated! Redirecting...';
                    this.user = response.data.data;
                    setTimeout(() => {
                        this.message = null;
                        this.$router.push({
                            name: 'users.index'
                        })
                    }, 1000);
                }).catch((error) => {
                    console.log(error);
                }).then(() => this.saving = false)
            },

            onDelete() {
                this.saving = true;

                api.delete(this.user.id)
                    .then((response) => {
                        this.message = 'User deleted!';
                        setTimeout(() => {
                            this.$router.push({ name: 'users.index' });
                        }, 2000);
                    })
            }
        },

        created() {
            api.find(this.$route.params.id).then((response) => {
               this.loaded = true;
               this.user = response.data.data;
            }).catch((error) => {
                this.$router.push({
                    name: '404'
                })
            });
        }
    }
</script>

<style scoped lang="scss">
    $red: lighten(red, 30%);
    $darkRed: darken(red, 50%);

    .form-group label {
        display: block;
    }
    .alert {
        background: $red;
        color: $darkRed;
        padding: 1rem;
        margin-bottom: 1rem;
        width: 50%;
        border: 1px solid $darkRed;
        border-radius: 5px;
    }
</style>
