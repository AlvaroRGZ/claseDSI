import {GestorUsuarios} from './accessor';
import {User} from './model';
import './mongoose';

const gestor = new GestorUsuarios();

const newUser = new User({
    nombre: 'prueba',
    apellidos: 'Rfffm',
    email: 'alu0101362953@ull.edu.es',
    contraseña: 'xxxxxxx',
    edad: 20,
});

/* gestor.createUser(newUser);
gestor.getUser('Alvaro');

const actUser = new User({
    nombre: 'Alvaro',
    edad: 25,
});

gestor.pathUser('Alvaro', actUser);

*/

const actUser = new User({
    nombre: 'Alvaro',
    edad: 25,
});

gestor.deleteUser('Alvaro');
