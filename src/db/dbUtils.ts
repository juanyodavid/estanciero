import { commentsCollection, usersCollection } from './mongo';

export const returnUserList = async () => {
    const filter = { name: { $regex: /Connie/i } }; // Search for names containing 'Connie' (case-insensitive)
    const userList = await usersCollection.find(filter).toArray();
    const serializedUsers = userList.map((item) => 
       JSON.parse(JSON.stringify(item,(key,value) => key === '_id'? 
        value.toString(value) : value)));
    // console.log(serializedUsers);
    return serializedUsers;
}
export const returnComments = async () => {
    const filter = { name: { $regex: /Connie/i } }; // Search for names containing 'Connie' (case-insensitive)
    const commentList = await commentsCollection.find().limit(3).toArray();
    const serializedUsers = commentList.map((item) => 
       JSON.parse(JSON.stringify(item,(key,value) => key === '_id'? 
        value.toString(value) : value)));
    // console.log(serializedUsers);
    return serializedUsers;
}
export const returnUser = async (correo:string) => {
    const filter = { email : correo };
    const userList = await usersCollection.find(filter).toArray();
    const serializedUsers = userList.map((item) => 
       JSON.parse(JSON.stringify(item,(key,value) => key === '_id'? 
        value.toString(value) : value)));
    // console.log(serializedUsers);
    return serializedUsers;
}

export async function createUser(email: string, password: string, name: string): Promise<any> {
    try {
      const newUser = await usersCollection.insertOne({
        "email": email,
        "password": password,
        "name": name,
      });
  
      return newUser;
    } catch (error: any) {
      console.error('Error creating user:', error);
      // Handle error appropriately (e.g., log to a file, display an error message)
      return { error: error.message }; // Return an error object
    }
  }
  export interface Usuario{
    id: string;
    username: string;
    bio: string | undefined;
    followers: string[] | undefined;
  }
  export interface Comentario{
    nombre: string;
    celular: string | undefined;
    tipo_trabajo: string;
    primer_trabajo: boolean;
    creator: Usuario;
    description: string;
    comment:string;
    createdAt:string | undefined;
    updatedAt:string | undefined;
    tags:string[] | undefined;
    likes:string[] | undefined;
    downs:string[] | undefined;
  }
export async function createComment(Comment:Comentario): Promise<any> {
    try {
      const newComment = await commentsCollection.insertOne({
        ...Comment
      });
      return newComment;
    } catch (error: any) {
      console.error('Error creating comment:', error);
      // Handle error appropriately (e.g., log to a file, display an error message)
      return { error: error.message }; // Return an error object
    }
  }
  