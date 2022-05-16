import {User, UserInterface} from './model';

export class GestorUsuarios {
    constructor() {
        // conecction();
    }

    async getUser(userName: string) {
        try {
            const user = await User.findOne({nombre: userName});

            if (user) {
              console.log(`Se obtuvo al usuario: ${user.nombre}`);
              console.log(`Con correo: ${user.email}`);
            } else {
            }
        } catch (error) {
            console.log(`Error al obtener al usuario`);
        }
    }

    async createUser(userData: UserInterface) {
        try {
            await userData.save();
        } catch (error) {
            console.log(`Error al almacenar al usuario`);
        }
    }

    async pathUser(userName: string, userData: UserInterface) {
        const allowedUpdates = ['nombre', 'apellidos', 'email', 'contraseña', 'edad'];
        const actualUpdates = Object.keys(userData);
        const isValidUpdate =
            actualUpdates.every((update) => allowedUpdates.includes(update));

        if (!isValidUpdate) {
            console.log(`No se puede actualizar esas propiedades`);
        } else {
            try {
                const user =
                await User.findOneAndUpdate({nombre: userName}, userData, {
                    new: true,
                    runValidators: true,
                });
                if (user) {
                    console.log(`${userName} => ${userData.nombre}`);
                } else {
                    console.log(`No se encontro el usuario a actualizar`);
                }
            } catch (error) {
                console.log(`Error al actualizar el usuario`);
            }
        }
    }

    async deleteUser(userName: string) {
        try {
            const user =
                await User.findOneAndDelete({nombre: userName});
            if (user) {
                console.log(`Usuario ${userName} eliminado`);
            } else {
                console.log(`No se encontro el usuario a borrar`);
            }
        } catch (error) {
            console.log(`Error al borrar el usuario`);
        }
    }
}

