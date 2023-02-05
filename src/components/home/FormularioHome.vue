<template>
    <v-form
        ref="form" 
        v-model="valid"
        lazy-validation
        class="mb-10"
    >
         <!-- ALERT -->
        <v-alert
            dense
            text
            :type="typeAlert"
            v-model="stateAlert"
            v-show="stateAlert"
        >
            {{msj}}
        </v-alert>
       
            <v-row
                class="px-5"
            >
                <v-col
                    cols="12"
                >
                <!-- INPUT NOMBRE -->
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
                >
                     <!-- INPUT APELLIDO -->
                    <v-text-field
                        v-model="lastname"
                        :rules="nameRules"
                        label="Apellido"
                        required
                        dark
                        class=""
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="12"
                >
                     <!-- INPUT EMAIL -->
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                        dark
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                >
                     <!-- BOTON -->
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
            typeAlert:'',
            stateAlert:false,
            msj:'',
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
        enviarForm(){
            this.$refs.form.validate()
            if(!this.valid){
                console.log('error')
                this.stateAlert = true
                this.typeAlert = 'error'
                this.msj = 'Error al enviar el mensaje'
                
            }else{
                console.log('Enviado')
                this.stateAlert = true
                this.typeAlert = 'success'
                this.msj = 'Mensaje enviado correctamente'
            }
            
        }

    }

}
</script>

<style>

</style>