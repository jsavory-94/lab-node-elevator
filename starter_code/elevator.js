class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [Person];
  }

  start() {
    setInterval(update(), 1000);
  }

  stop() {clearInterval(start);}

  update() { }
  _passengersEnter() { }
  
  _passengersLeave() { }
  floorUp(floor) {if (this.floor < this.MAXFLOOR){
    floor++;
  } 
 

  floorDown(() => {if (this.floor > 0){
    floor--;}
  });    

  call()

  log(() => {console.log("Direction: up | Floor: 0 ")});
}

module.exports = Elevator;
