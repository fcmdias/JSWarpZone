class Image
{
  constructor(url)
  {
    this.url = url;
    console.log(`Loading image from ${url}`);
  }

  draw()
  {
    console.log(`Drawing image from ${this.url}`);
  }
}

// only gives you the impression that you have the image 
// you don't have the image up to the point that you actually need to draw the image
class LazyImage 
{
  constructor(url)
  {
    this.url = url;
  }

  draw()
  {
    if (!this.image)
      this.image = new Image(this.url);
    this.image.draw();
  }
}


function drawImage(img)
{
  console.log(`About to draw the image`);
  img.draw();
  console.log(`Done drawing the image`);
}

// let img = new Image('http://pokemon.com/pikachu.png')
// drawImage(img);

let img = new LazyImage('http://pokemon.com/pikachu.png')
drawImage(img);