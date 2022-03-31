const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  let start = this.journeys.map((journey) => {return journey.startLocation})
  return start;
};

Traveller.prototype.getJourneyEndLocations = function () {
  let end = this.journeys.map((journey) => {return journey.endLocation})
  return end;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  let ride = this.journeys.filter((journey) => {return journey.transport == transport})
  return ride;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return  this.journeys.filter((journey)=> {
  return journey.distance >minDistance;
});
};

Traveller.prototype.calculateTotalDistanceTravelled = function() { 
  return this.journeys.reduce((total, journeys) =>{
  return total += journeys.distance
  },0);

};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.map((journey) => {
    return journey.transport;
  })
  
    .filter((transport, index, array) =>{
      return array.indexOf(transport) === index;
  
    });
  };



//   let transportMethods = []

//   let newArray = this.journeys.map(journey => {
//     transportMethods.push(journey.transport)
//     return transportMethods
//   });

//   uniqueString = [...new Set(newArray.getUniqueModesOfTransport)];
//   return uniqueString.getUniqueModesOfTransport
// };



// code to write the last function found here, but does not Work 
https://www.codegrepper.com/code-examples/javascript/get+unique+strings+from+array+javascript

module.exports = Traveller;
