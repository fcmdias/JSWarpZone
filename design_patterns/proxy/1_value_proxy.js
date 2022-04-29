// a proxy is a class that functions as an interface to a particular resource. That resource may be remote, expensive to construct, or may require logging or some other added functionality.

class Percentage
{
  constructor(percent)
  {
    this.percent = percent;
  }

  toString()
  {
    return `${this.percent}%`;
  }

  valueOf()
  {
    return this.percent / 100;
  }
}

let fivePercent = new Percentage(5);
console.log(fivePercent.toString());
console.log(`5% of 50 is ${50*fivePercent}`);