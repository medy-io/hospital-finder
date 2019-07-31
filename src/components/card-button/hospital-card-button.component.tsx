// hospital-card-button.component.tsx
import React from 'react';
import './card-button.scss';


export default function HospitalCardButton(props: any) {
  return (
    <a href={props && props.nearestHospital && props.nearestHospital.mapsUrl ? props.nearestHospital.mapsUrl : 'null'}>
      <button className="h-c-button">
        <span className="h-c-button-content">Directions</span>
      </button>
    </a>
  );
}
