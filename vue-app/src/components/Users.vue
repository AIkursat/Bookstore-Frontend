<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1 class="mt-3">All Users</h1>
            </div>
            <hr>

            <table v-if="this.ready" class="table table-compact table-striped">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Email</th>
                        <th>Stauts</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="u in this.users" v-bind:key="u.id">
                        <td>
                            <router-link :to="`/admin/users/${u.id}`">{{u.last_name}}, {{u.first_name}}</router-link>
                        </td>
                        <td>{{u.email}}</td>
                        <td v-if="u.token.id > 0">
                            <span class="badge bg-success" @click="logUserOut(u.id)">Logged in</span>
                        </td>
                        <td v-else>
                            <span class="badge bg-danger">Not logged in</span>
                        </td>
                    </tr>
                </tbody>
            </table>

            <p v-else>Loading...</p>

        </div>
    </div>
</template>

<script>
import Security from './security.js'
import notie from 'notie'
import {store} from './store.js'

export default {
    data() {
        return {
            users: [],
            ready: false,
            store,
        }
    },
    beforeMount() {
        Security.requireToken();

        fetch(process.env.VUE_APP_API_URL + "/admin/users", Security.requestOptions(""))
        .then((response) => response.json())
        .then((response) => {
            if (response.error) {
                this.$emit('error', response.message);
            } else {
                this.users = response.data.users;
                this.ready = true;
            }
        })
        .catch((error) => {
            this.$emit('error', error);
        });
    },
    methods: {
        logUserOut(id) {
            if (id !== store.user.id) {
                notie.confirm({
                    text: "Are you sure you want to log this user out?",
                    submitText: "Log Out",
                    submitCallback: function() {
                        console.log("Would log out user id", id);
                    }
                })
            } else {
                this.$emit('error', "You can't log yourself out!");
            }
        }
    }
}
</script>