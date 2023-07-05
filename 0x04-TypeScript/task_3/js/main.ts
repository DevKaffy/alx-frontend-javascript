///  < reference path= './crud.d.ts'/>

import { RowID, RowElement } from "./interface";
import * as CRUD from './crud';
import { insertRow } from "./crud";

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const newRowID: RowID = CRUD.insertRow(row)
console.log(`insertRow $(newRowID)`)

const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,
};
CRUD.updateRow(newRowID, updatedRow)
console.log(`updatedRow $(newRowID)`)

CRUD.deleteRow(newRowID)
console.log(`deleteRow $(newRowID)`)