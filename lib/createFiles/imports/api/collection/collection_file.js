import { Mongo } from 'meteor/mongo';

const {name} = new Mongo.Collection('{dbName}');

export default {name};
