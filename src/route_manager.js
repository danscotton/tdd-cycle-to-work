class RouteManager {
    constructor() {
        this.routeData = undefined;
    }

    getRouteData() {
        return this.routeData;
    }

    setRouteData(data) {
        this.routeData = data;
    }
}

module.exports = RouteManager;