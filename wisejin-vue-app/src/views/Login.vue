<template>
    <v-container fill-height style="max-width:450px;">
        <v-layout align-center row wrap>
            <v-flex xs12>
                <v-card>
                    <v-toolbar color="blue" flat dense>
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
            password: null
        }
    }
}
</script>