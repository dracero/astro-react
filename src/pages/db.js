import mongoose from "mongoose";

// Conectarse a la base de datos
mongoose.connect('mongodb+srv://root:juana99@cluster0.zf9fl.mongodb.net/firstsvelte?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Definir el esquema de la colección users
const userSchema = new mongoose.Schema({
  value: Number,
});

// Crear el modelo de la colección users si no existe
let User;
try {
  User = mongoose.model('User');
} catch {
  User = mongoose.model('User', userSchema);
}

// Exportar el modelo de la colección users
export default User;