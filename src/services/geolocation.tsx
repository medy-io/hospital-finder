import hospitalData from './../data/hospitals_2018-09.json';

// check for window, navigator, and geolocation
export default function checkForGeoLocation(): void {
    if (window && window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(getUserPosition);
    }
}

// get user position
export const getUserPosition = (pos: any) => {
    if (pos) {
        return createHospitalObj(pos.coords.latitude, pos.coords.longitude, findNearestHospital(pos.coords.latitude, pos.coords.longitude));
    }
}

// TODO: increase the accuracy of finding how close the hospital is relative to directions and not a striaght line ***
const findNearestHospital = (userlat: number, userlong: number) => {
    // @ts-ignore
    return hospitalData.features.reduce((prev: any, currentHospital: any) => {
        if (prev && currentHospital && currentHospital.geometry && currentHospital.geometry.coordinates.length > 0) {
            return {
                hospitalData: currentHospital,
                lat: Math.abs(currentHospital.properties.LATITUDE - userlat) < Math.abs(prev.lat) ? currentHospital.properties.LATITUDE : prev.lat,
                long: Math.abs(currentHospital.properties.LONGITUDE - userlong) < Math.abs(prev.long) ? currentHospital.properties.LONGITUDE : prev.long
            };
        }
    });
}

const createHospitalObj = (userLat: number, userLong: number, hospital: any) => {
    const urlPrefix: string = 'https://www.google.com/maps/dir/?api=1&Space+Needle+Seattle+WA&destination=Pike+Place+Market+Seattle+WA&travelmode=driving';
    const travelMode: string = '&travelmode=driving';
    return {
        name: hospital.hospitalData.properties.FACILITY_N,
        address: hospital.hospitalData.properties.STREET + ', ' + hospital.hospitalData.properties.CITY_TOWN + ', PA ' + hospital.hospitalData.properties.ZIP_CODE,
        phone: hospital.hospitalData.properties.AREA_CODE + ' - ' + hospital.hospitalData.properties.TELEPHONE_,
        website: hospital.hospitalData.properties.FACILITY_U ? hospital.hospitalData.properties.FACILITY_U : '',
        coordinates: { lat: hospital.hospitalData.geometry.coordinates[1], long: hospital.hospitalData.geometry.coordinates[0] },
        mapsUrl: urlPrefix + 'origin=' + userLat + ',' + userLong + '&destination=' + hospital.lat + ',' + hospital.long + travelMode
    };
}
