import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { ChracterCollection } from './ChracterCollection';

const numbersCollection = new NumbersCollection([-9,1,-2,3])
const sorter1 = new Sorter(numbersCollection);
sorter1.sort();
console.log(numbersCollection.data);

const ChCollection = new ChracterCollection('XKraha');
const sorter = new Sorter(ChCollection);
sorter.sort();
console.log(ChCollection.data);