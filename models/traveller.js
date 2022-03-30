const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  let start = this.journeys.map((journeys) => {return journeys.startLocation})
  return start;
};
// we start with let and the variable name, assign the this.attribute to refer to the Constructor
Traveller.prototype.getJourneyEndLocations = function () {
  let end = this.journeys.map((journeys) => {return journeys.endLocation})
  return end;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  let ride = this.journeys.filter((journeys) => {return journeys.transport == transport})
  return ride;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return  this.journeys.filter((journey)=> {
  return journey.distance >minDistance;
});
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {  

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
