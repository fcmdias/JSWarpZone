class ChiefExecutiveOfficer
{
    get name() {return ChiefExecutiveOfficer._name; }
    set name(value) {
        ChiefExecutiveOfficer._name = value;
    }

    get age() {return ChiefExecutiveOfficer._age; }
    set age(value) {
        ChiefExecutiveOfficer._age = value;
    }

    toString()
    {
        return `CEO's name if ${this.name} ` + 
            `and he is ${this.age} years old.`;
    }
}

ChiefExecutiveOfficer._age = undefined;
ChiefExecutiveOfficer._name = undefined;


let ceo = new ChiefExecutiveOfficer();
ceo.name = 'Adam Smith';
ceo.age  = 55;

console.log(ceo.toString())

let ceo2 = new ChiefExecutiveOfficer();
ceo2.name = 'James Dough';
ceo2.age  = 25;

console.log(ceo.toString())