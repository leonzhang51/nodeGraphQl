import people from "./database"; //get all of the available data from our database.
import { fetchDatafromVtex } from "./service";

const Resolvers = {
  Query: {
    getAllPeople: () => people, //if the user runs the getAllPeople command
    //if the user runs the getPerson command:
    getPerson: (_: any, args: any) => {
      console.log(args);
      //get the object that contains the specified ID.
      return people.find((person) => person.id === args.id);
    },
    getOrders: async () => {
      const testdata = await fetchDatafromVtex();
      return testdata;
    },
  },
};
export default Resolvers;
