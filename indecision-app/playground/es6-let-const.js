var nameVar = 'Mike';
// Vars can be reassigned with NO errors thrown
var nameVar = 'Anthony';
console.log('nameVar:', nameVar);

let nameLet = 'Jen';
// Lets cannot be re-defined
// let nameLet = 'Julie'; - Throws "Duplicate declaration" error
console.log('nameLet:', nameLet);

const nameConst = 'Frank';
// Consts cannot be redefined OR re assigned.
// nameConst = 'Gunther';
console.log('nameConst', nameConst);

// Block scoping
const fullName = 'Jen Gilliam';

if (fullName) {
    let firstName = fullName.split(' ')[0];
    console.log(firstName);
}

// const and let variables are block-level scoped; this will not work
console.log(firstName);