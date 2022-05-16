import {Document, Schema, model} from 'mongoose';
import validator from 'validator';

/* Definición de la interfaz del modelo Cancion. */
export interface UserInterface extends Document {
  nombre: string,
  apellidos: string,
  email: string,
  contraseña: string,
  edad: number
}

/* Definición del esquema para el modelo Cancion. */
const UserSchema = new Schema({
  nombre: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    validate: (value: string) => {
      if (!value.match(/^[A-Z]/)) {
        throw new Error('El nombre de un usuario debe comenzar por mayúscula.');
      } else if (!validator.isAlphanumeric(value)) {
        throw new Error('El nombre de un usuario solo puede contener caracteres alfanuméricos');
      }
    },
  },
  apellidos: {
    type: String,
    required: true,
    trim: true,
    validate: (value: string) => {
      if (!value.match(/^[A-Z]/)) {
        throw new Error('Los apellidos de un usuario debe comenzar por mayúscula.');
      } else if (!validator.isAlphanumeric(value)) {
        throw new Error('Los apellidos de un usuario solo puede contener caracteres alfanuméricos');
      }
    },
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate: (value: string) => {
      if (!value.match(/^[*@*]/)) {
        throw new Error('El email debe contener @');
      }
    },
  },
  contraseña: {
    type: String,
    required: true,
    trim: true,
    validate: (value: string) => {
      if (value.length < 4) {
        throw new Error('La contraseña debe tener al menos 4 caracteres');
      }
    },
  },
  edad: {
    type: Number,
    required: true,
    validate: (value: number) => {
      if (value < 0) {
        throw new Error('La edad no puede ser negativa');
      }
    },
  },
});

/* Exportando el modelo Canción. */
export const User = model<UserInterface>('user', UserSchema);
