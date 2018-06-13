class RouteManager {
    constructor() {
        this.routeData = undefined;
        this.timesData = undefined;
    }

    getRouteData() {
        return this.routeData;
    }

    setRouteData(data) {
        this.routeData = data;
    }

    getTimesData() {
        return this.timesData;
    }

    setTimesData (data) {
        this.timesData = data;
    }
}

module.exports = RouteManager;