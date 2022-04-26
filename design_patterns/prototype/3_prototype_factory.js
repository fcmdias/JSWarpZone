
class Address 
{
    constructor(suite, city, country)
    {
        this.suite = suite;
        this.city = city;
        this.country = country;
    }

    
    toString()
    {
        return `Address: ${this.suite}, ` +
            `${this.city}, ${this.country}`;
    }
}

class Employee 
{
    constructor(name, address)
    {
        this.name = name;
        this.address = address
    }


    toString()
    {
        return `${this.name} works at ${this.address.toString()}`;
    }

}

class Serializer
{
    constructor(types)
    {
        this.types = types;
    }

    markRecursive(object)
    {
        let idx = this.types.findIndex( t => {
            return t.name === object.constructor.name;
        });
        if (idx !== -1)
        {
            object['typeIndex'] = idx;

            for (let key in object)
            {
                if (object.hasOwnProperty(key) && object[key] != null)
                    this.markRecursive(object[key]);
            }
        }
    }

    reconstructRecursive(object)
    {
        if (object.hasOwnProperty('typeIndex'))
        {
            let type = this.types[object.typeIndex];
            let obj = new type();
            for (let key in object)
            {
                if (object.hasOwnProperty(key) && object[key] != null)
                {
                    obj[key] = this.reconstructRecursive(object[key]);
                }
            }
            delete obj.typeIndex;
            return obj;
        }
        return object;
    }

    clone(object)
    {
        this.markRecursive(object)
        let copy = JSON.parse(JSON.stringify(object));
        return this.reconstructRecursive(copy)
    }
}

class EmployeeFactory 
{
    static _newEmployee(proto, name, suite)
    {
        let copy = EmployeeFactory.Serializer.clone(proto);
        copy.name = name;
        copy.address.suite = suite;
        return copy;
    }

    static newMainOfficeEmployee(name, suite)
    {
        return this._newEmployee(
            EmployeeFactory.main, name, suite
        );
    }

    static newAuxOfficeEmployee(name, suite)
    {
        return this._newEmployee(
            EmployeeFactory.aux, name, suite
        );
    }
    
}

EmployeeFactory.Serializer = new Serializer([Employee,Address]);
EmployeeFactory.main = new Employee(null,
    new Address(null, '123 East Dr', 'London'));
EmployeeFactory.aux = new Employee(null,
    new Address(null, '200 London Rd', 'Oxford'));
let john = EmployeeFactory.newMainOfficeEmployee("John", 4222);
let jane = EmployeeFactory.newAuxOfficeEmployee("Jane",43);

console.log(johnny.toString());
console.log(jane.toString());