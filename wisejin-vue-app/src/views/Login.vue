<template>
    <v-container fill-height style="max-width:450px;">
        <v-layout align-center row wrap>
            <v-flex xs12>
                <v-card>
                    <v-toolbar dark flat dense>
                        <v-toolbar-title>로그인</v-toolbar-title>
                    </v-toolbar>

                    <div class="pa-3">
                    <v-text-field
                        label="사용자 아이디를 입력해주세요."
                        v-model="email"
                    ></v-text-field>
                    <v-text-field
                        label="사용자 암호를 입력해주세요."
                        type='password'
                        v-model="password"
                    ></v-text-field>
                    <v-btn block large depressed color="primary" @click="login">
                    로그인    
                    </v-btn>
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name:'Login',
    data() {
        return {
            email: null,
            password: null,
            allUsers: [
                {id: 1, name:'hoge', email: 'hoge@gmail.com', password:'12345'},
                {id: 2, name:'fuga', email: 'fuga@gmail.com', password:'12345'}
            ]
        }
    },
    methods: {
        login() {
            let selectedUser = null
            this.allUsers.forEach(user => {
                if (user.email === this.email) {
                    selectedUser = user
                    return
                }
            })
            if (selectedUser === null) {
                alert('사용자가 없네요!')
            } else {
                if (selectedUser.password !== this.password) {
                    alert('패스워드가 다르네요!')
                } else {
                    console.log('Login:', this.email, this.password)
                }
            }
        }
    }
}
</script>