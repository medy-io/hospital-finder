import React from 'react';
import './hospital-card.css';

export default function HospitalCard(props: any) {
  return (
    <div className="hospital-card">
      <header className="h-c-header">
        <i>LOGO</i>
        <span>PA Hospital Finder</span>
      </header>
      <div className="h-c-content">
        <main>
          <div>
            {props && props.nearestHospital && props.nearestHospital.name ? props.nearestHospital.name : 'null'}
          </div>
          <div>
            {props && props.nearestHospital && props.nearestHospital.name ? props.nearestHospital.address : 'null'}
          </div>
          <div>
            {props && props.nearestHospital && props.nearestHospital.name ? props.nearestHospital.phone : 'null'}
          </div>
          <div>
            {props && props.nearestHospital && props.nearestHospital.name ? props.nearestHospital.website : 'null'}
          </div>
        </main>
      </div>
      <div className="h-c-action">
        <a href={props && props.nearestHospital && props.nearestHospital.mapsUrl ? props.nearestHospital.mapsUrl : 'null'}>
          <button className="h-c-button">
            <span className="h-c-button-content">Directions</span>
          </button>
        </a>
      </div>
    </div>
  );
}
