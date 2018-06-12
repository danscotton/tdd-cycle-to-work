const { expect } = require('chai');
const RouteManager = require('../src/route_manager');

describe('RouteManager', () => {
    it('returns undefined if it has no route data', () => {
        const routeManager = new RouteManager();
        expect(routeManager.getRouteData()).to.be.undefined;
    })

    it('can add route data', () => {
        const routeManager = new RouteManager();
        const data = [
            { place: "start", x: "51.2", y: "34.3" },
            { place: "end", x: "51.9", y: "35.7" }
        ];
        routeManager.setRouteData(data);
        expect(routeManager.getRouteData()).to.deep.equal(data);
    })
})

