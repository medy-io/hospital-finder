// hospital display data object definition
export interface HospitalDisplayData {
    name: string;           // required => need for user
    address?: string;       // optional
    phone?: string;         // optional
    website?: string;       // optional
    coordinates: Coords;    // required => need for sorting by distance
    mapsUrl: string;        // required => need for directions
}
// coords object for multi use
export interface Coords {
    lat: number;
    long: number;
}
