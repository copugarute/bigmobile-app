<template>
    <v-form
        ref="form" 
        v-model="valid"
        lazy-validation
    >
        <h2
            class="text-h4 text-center white--text font-weight-regular mt-10 mb-5"
        >
            Contactanos
        </h2>
       
            <v-row>
                <v-col
                    cols="12"
                    md=""
                >
                    <v-text-field
                        v-model="firstname"
                        :rules="nameRules"
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
                        :disabled="!this.valid"
                        @click="enviarForm"
                    >
                        Envíar
                    </v-btn>
                </v-col>
            </v-row>
  </v-form>
</template>

<script>
export default {
    name:'Form-Home',
    data(){
        return{
            valid: true,
            success: false,
            error:false,
            firstname: '',
            lastname: '',
            email: '',
            
            nameRules: [
                v => !!v || 'Debe rellenar este campo',
            ],
            
            emailRules: [
                v => !!v || 'Debe rellenar este campo',
                v => /.+@.+/.test(v) || 'El email debe ser valido',
            ],
        }
    },
    methods:{
        validate() {
            this.$refs.form.validate();
        },
        enviarForm(){
            this.validate
            if(this.validate()){

                console.log('Enviado')
                
            }
            
        }

    }

}
</script>

<style>

</style>