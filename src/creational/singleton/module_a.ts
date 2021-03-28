import { MyDatabaseClassic } from "./db/my-database-classic";

const myDatabaseClassic = MyDatabaseClassic.getInstance();
myDatabaseClassic.add({name: 'Brunno', age: 38});
myDatabaseClassic.add({name: 'Eveline', age: 36});
// myDatabaseClassic.show();