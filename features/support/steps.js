const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
let routeData;

const getRouteData = () => {
    return routeData;
}

const setRouteData = (data) => {
    routeData = data;
}

Given('I have no configured routes', () => {
    expect(getRouteData()).to.equal(undefined);
})

When('I supply the following route data of my commute', (table) => {
    setRouteData(table.hashes());
})

Then('my route is saved', () => {
    expect(getRouteData()).to.deep.equal([
        { place: "start", x: "51.2", y: "34.3" },
        { place: "end", x: "51.9", y: "35.7" }
    ]);
})