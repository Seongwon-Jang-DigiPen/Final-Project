//Name: Seongwon Jang(장성원)
//Assignment name: Final Project
//Course Number: 20616-09(cs099)
//Term & Year: Spring 2020
class vec2 {
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }

  getX() {
    return this.x
  }
  getY() {
    return this.y
  }
  getAngle() {
    return atan2(this.y, this.x)
  }

  setAngle(angle_in_radians) {

    var length = this.getLength()
    this.x = cos(angle_in_radians) * length;
    this.y = sin(angle_in_radians) * length;
  }

  getLength() {
    return sqrt(pow(this.x, 2) + pow(this.y, 2))
  }
  
  setLength(length) {

    var angle = this.getAngle()
    this.x = cos(angle) * length;
    this.y = sin(angle) * length;
  }


  add(v2) {
    var nv2 = new vec2()
    nv2.x = this.x + v2.x
    nv2.y = this.y + v2.y
    return nv2
  }

  addTo(v2) {

    this.x = this.x + v2.x
    this.y = this.y + v2.y


  }
  subtract(v2) {
    var nv2 = new vec2()
    nv2.x = this.x - v2.x
    nv2.y = this.y - v2.y
    return nv2
  }
  subtractFrom(v2) {
    this.x = this.x - v2.x
    this.y = this.y - v2.y

  }
  multiply(scalar) {
    var nv2 = new vec2()
    nv2.x = this.x * scalar;
    nv2.y = this.y * scalar;
    return nv2;
  }
  multiplyBy(scalar) {
    this.x *= scalar
    this.y *= scalar

  }
  multiplyByx(scalar) {
    this.x *= scalar
  }
  divide(scalar) {
    var nv2 = new vec2()
    nv2.x = this.x / scalar;
    nv2.y = this.y / scalar;
    return nv2;
  }
  divideBy(scalar) {
    this.x = this.x / scalar;
    this.y = this.y / scalar;

  }

}