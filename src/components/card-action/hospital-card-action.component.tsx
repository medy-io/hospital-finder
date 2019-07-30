// hospital-card-action.component.tsx
import React from 'react';
import './../hospital-card/hospital-card.css';

export default function HospitalCardAction(props: any) {
  return (
    <div className="h-c-action">
      <a href={props && props.nearestHospital && props.nearestHospital.mapsUrl ? props.nearestHospital.mapsUrl : 'null'}>
        <button className="h-c-button">
          <span className="h-c-button-content">Directions</span>
        </button>
      </a>
    </div>
  );
}
