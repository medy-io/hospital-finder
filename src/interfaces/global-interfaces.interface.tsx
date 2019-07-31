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
