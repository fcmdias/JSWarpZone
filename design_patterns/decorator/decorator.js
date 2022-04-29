// decorator facilitates the addition of behaviors to individual objects without inheriting from them

// a decorator keeps the reference to the decorated objects
// adds utility fields and methods to augment the object's features

class Shape{} 

class Circle extends Shape 
{
  constructor(radius=0)
  {
    super();
    this.radius = radius;
  }

  resize(factor)
  {
    this.radius *= factor;
  }

  toString()
  {
    return `A circle of radius ${this.radius}`;
  }
}

class ColoredShape extends Shape 
{
  constructor(shape, color)
  {
    super();
    this.shape = shape; 
    this.color = color;
  }

  toString()
  {
    return `${this.shape.toString()} ` +
      `has the color ${this.color}`;
  }
}

class TransparentShape extends Shape
{
  constructor(shape, transparency)
  {
    super();
    this.shape = shape;
    this.transparency = transparency;
  }

  toString()
  {
    return `${this.shape.toString()} has ` +
      `${this.transparency * 100.0}% transparency`;
  }
}

let circle = new Circle(2);
console.log(circle.toString());

let redCircle = new ColoredShape(circle, 'red');
redCircle.shape.resize(2);
console.log(redCircle.toString());

let redHalfCircle = new TransparentShape(redCircle, 0.5);
console.log(redHalfCircle.toString());