const app = {
    // datos
    data() {
        return {
            nombre: '',
            telefono: '',
            categoria: '',
            contactos: [],
            error: '',
            mensaje: false
        }
    },
    methods: {
        agregarContacto() {
            if (!this.nombre || !this.telefono || !this.categoria) {
                this.error = 'Todos los datos deben de ser rellenados';
                this.mensaje = false;
                return;
            }

            this.contactos.push({
                nombre: this.nombre,
                telefono: this.telefono,
                categoria: this.categoria,
                mensajes: 0,
                llamadas: 0,
            });

            this.nombre = '';
            this.telefono = '';
            this.categoria = '';
            this.error = '';
            this.mensaje = true;
        },
        eliminarContacto(index) {
            this.contactos.splice(index, 1);
        }

    },

    computed: {
        totalContactos(){
            return this.contactos.length;
        },
        totalMensajes(){
            return this.contactos.reduce((total, c) => total + c.mensajes, 0);
        }, 
        totalLlamadas(){
            return this.contactos.reduce((total, c) => total + c.llamadas, 0);
        }
    }
};

const app1 = Vue.createApp(app).mount('#componente');
