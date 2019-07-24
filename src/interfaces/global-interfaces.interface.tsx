export interface HospitalDisplayData {
    name: string;
    address: string;
    phone: string;
    website?: string;
    coordinates: Coords;
    mapsUrl: string;
}
export interface Coords {
    lat: number;
    long: number;
}
export interface GoogleMapsJSRequest {
    origin: LatLng | String;
    destination: LatLng | String;
    travelMode: TravelMode;
    transitOptions: TransitOptions;
    drivingOptions: DrivingOptions;
    unitSystem: UnitSystem;
    waypoints: DirectionsWaypoint[];
    optimizeWaypoints: Boolean;
    provideRouteAlternatives: Boolean;
    avoidFerries: Boolean;
    avoidHighways: Boolean;
    avoidTolls: Boolean;
    region: String;
}
interface LatLng {
    a: any;
}
interface TravelMode {
    a: any;
}
interface TransitOptions {
    a: any;
}
interface DrivingOptions {
    a: any;
}
interface UnitSystem {
    a: any;
}
interface DirectionsWaypoint {
    a: any;
}