import {GestorUsuarios} from './accessor';

const gestor = new GestorUsuarios();

gestor.createUser(
    {
        nombre: 'Alvaro',
        apellidos: 'Rod Gom',
        email: 'alu0101362953@ull.edu.es',
        contraseña: 'xxxxxxx',
        edad: 20
    }
);