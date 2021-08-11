import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 230000;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled = true;
  leftEdge = -20000;
  rightEdge = 470000;
  bottomEdge = 0;
  topEdge = 330000;

  handleTakeOff(rocketImage) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      // this.width = 0;
      rocketImage.style.bottom = '10px';
      this.takeOffEnabled = false;
      this.message = 'Shuttle in flight.';
    }
  }

  handleLanding(rocketImage) {
    window.alert('The shuttle is landing. Landing gear engaged.');
    this.color = 'green';
    this.height = 0;
    this.width = 0;
    rocketImage.style.bottom = '0px';
    this.takeOffEnabled = true;
    this.message = 'Space shuttle ready for takeoff!';
  }

  handleAbort(rocketImage) {
    let result = window.confirm('Are you sure you want to abort the mission?');
    if (result) {
      this.color = 'red';
      this.height = 0;
      this.width = 0;
      rocketImage.style.bottom = '0px';
      this.takeOffEnabled = true;
      this.message = 'Mission aborted.';
    }
  }

  moveRocket(rocketImage, direction) {
    if (direction === 'right' && this.width < this.rightEdge) {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    }
    if (direction === 'left' && this.width > this.leftEdge) {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    }
    if (direction === 'up' && this.height < this.topEdge) {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    }
    if (direction === 'down' && this.height > this.bottomEdge) {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    }
    this.checkEdge();
  }

  checkEdge() {
    if (this.width === this.rightEdge || this.width === this.leftEdge || this.height === this.topEdge || this.height === this.bottomEdge) {
      this.color = 'orange';
    } else {
      this.color = 'blue';
    }
  }
}



