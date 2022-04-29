// a proxy is a class that functions as an interface to a particular resource. That resource may be remote, expensive to construct, or may require logging or some other added functionality.

class Car 
{
  drive()
  {
    console.log(`Car is being driven`);
  }
}

// could also be called protectedCar
class CarProxy 
{
  constructor(driver)
  {
    this.driver = driver;
    this._car = new Car();
  }

  drive()
  {
    if (this.driver.age >= 16){
      this._car.drive();
    }else {
      console.log(`Driver too young`);
    }
  }
}

class Driver 
{
  constructor(age)
  {
    this.age = age;
  }
}


let car = new Car();
car.drive();

let car2 = new CarProxy(new Driver(12));
let car3 = new CarProxy(new Driver(20));
car2.drive()
car3.drive()
