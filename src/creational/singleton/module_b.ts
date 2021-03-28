import { MyDatabaseClassic } from "./db/my-database-classic";
import './module_a';

const myDatabaseClassic = MyDatabaseClassic.getInstance();
myDatabaseClassic.add({name: 'João Brunno', age: 2});
myDatabaseClassic.show();