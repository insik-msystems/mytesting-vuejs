<template>
    <v-container fill-height style="max-width:450px;">
        <v-layout align-center row wrap>
            <v-flex xs12>
                <v-alert class='mb-3' :type='msgType' :value='isAlert'>
                {{message}}
                </v-alert>
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
                    <v-btn block large depressed color="primary" 
                    @click="localLogin()">
                    로그인    
                    </v-btn>
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex"

export default {
    name:'Login',
    data() {
        return {
            email: null,
            password: null,
            isAlert: false,
            message: null,
            msgType: 'success'
        }
    },
    computed: {
        ...mapState(["isLogin", "isLoginError"])
    },
    methods: {
        ...mapActions(["login"]),
        localLogin() {
           this.login( { email: this.email, password: this.password })
           if (this.isLoginError) {
              this.isAlert = true
              this.message = '입력하신 유저는 존재하지 않아요.'
              this.msgType = 'error'
           } 
           if (this.isLogin) {
              this.isAlert = true, 
              this.message = '로그인에 성공했습니다.'
              this.msgType = 'success'
           }
        }

    //     login() {
    //         let selectedUser = null
    //         this.allUsers.forEach(user => {
    //             if (user.email === this.email) {
    //                 selectedUser = user
    //                 return
    //             }
    //         })
            
    //         // 삼항 연산자 테스트
    //         selectedUser === null 
    //          ? (this.isAlert = true, this.message = '입력하신 유저는 존재하지 않아요.', this.msgType = 'error')
    //          :  selectedUser.password !== this.password
    //             ?  (this.isAlert = true, this.message = '입력하신 유저의 패스워드가 맞지 않아요.', this.msgType = 'warning')
    //             :  (this.isAlert = true, 
    //                 this.message = '로그인에 성공했습니다.', this.msgType = 'success')
            
    //         console.log('Login:', this.email, this.password) 
    //     }
    }
}
</script>