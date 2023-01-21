<template>

    
    <v-form 
        v-model="valid"
    >
        <h2
            class="text-h4 text-center white--text font-weight-regular mt-10 mb-5"
        >
            Contactanos
        </h2>
        <v-alert
            dense
            text
            dark
            colored-border
            type="success"
            color="orange darken-3"
            v-show="mensaje"
        >
            {{mensaje}}
        </v-alert>
        <v-container>
            
            <v-row>
                <v-col
                    cols="12"
                    md=""
                >
                    <v-text-field
                        v-model="firstname"
                        :rules="nameRules"
                        :counter="10"
                        label="Nombre"
                        required
                        dark
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="12"
                    md=""
                >
                    <v-text-field
                        v-model="lastname"
                        :rules="nameRules"
                        :counter="10"
                        label="Apellido"
                        required
                        dark
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="12"
                    md=""
                >
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                        dark
                    ></v-text-field>
                </v-col>
                <v-col>
                    <v-btn
                        outlined
                        block
                        dark
                        @click="enviarForm"
                    >
                        Envíar
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
  </v-form>
</template>

<script>
export default {
    name:'Form-Home',
    data(){
        return{
            valid: false,
            mensaje:'',
            firstname: '',
            lastname: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 10 || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
        }
    },
    methods:{
        enviarForm(){
            console.log('Enviado')
            this.mensaje = 'Mensaje enviado lo contactaremos a la brevedad'

        }
    }

}
</script>

<style>

</style>