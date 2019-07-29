import hospitalData from "./../data/hospitals_2018-09.json";

// TODO: increase the accuracy of finding how close the hospital is relative to directions and not a striaght line ***
const findNearestHospital = (userlat: number, userlong: number) => {
  // @ts-ignore
  let hosArr: [] = hospitalData.features.map(currentHospital => {
    if (
      currentHospital &&
      currentHospital.geometry &&
      currentHospital.geometry.coordinates.length > 0
    ) {
      let currentDis: number = getDistanceFromLatLonInKm(
        userlat,
        userlong,
        currentHospital.geometry.coordinates[1],
        currentHospital.geometry.coordinates[0]
      );
      return {
        hospitalData: currentHospital,
        smallestDis: currentDis
      };
    }
  });
  return hosArr.sort(compare);
};

const getDistanceFromLatLonInKm = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
};

const deg2rad = (deg: number) => {
  return deg * (Math.PI / 180);
};

const compare = (a: any, b: any) => {
  return a.smallestDis - b.smallestDis;
};

const createHospitalObj = (
  userLat: number,
  userLong: number,
  hospital: any
) => {
  console.log("createHospitalObj");
  console.log(hospital[0]);
  if (
    hospital[0] &&
    hospital[0].hospitalData &&
    hospital[0].hospitalData.geometry &&
    hospital[0].hospitalData.geometry.coordinates.length > 0
  ) {
    const urlPrefix: string = "https://www.google.com/maps/dir/?api=1&";
    const travelMode: string = "&travelmode=driving";
    let directionsToHospital: any = {
      name: hospital[0].hospitalData.properties.FACILITY_N,
      address:
        hospital[0].hospitalData.properties.STREET +
        ", " +
        hospital[0].hospitalData.properties.CITY_TOWN +
        ", PA " +
        hospital[0].hospitalData.properties.ZIP_CODE,
      phone:
        hospital[0].hospitalData.properties.AREA_CODE +
        " - " +
        hospital[0].hospitalData.properties.TELEPHONE_,
      website: hospital[0].hospitalData.properties.FACILITY_U
        ? hospital[0].hospitalData.properties.FACILITY_U
        : "",
      coordinates: {
        lat: hospital[0].hospitalData.geometry.coordinates[1],
        long: hospital[0].hospitalData.geometry.coordinates[0]
      },
      mapsUrl:
        urlPrefix +
        "origin=" +
        userLat +
        "," +
        userLong +
        "&destination=" +
        hospital[0].hospitalData.geometry.coordinates[1] +
        "," +
        hospital[0].hospitalData.geometry.coordinates[0] +
        travelMode
    };
    setDirectionsToHospital(directionsToHospital);
  }
};

export const createHospitalObj;
