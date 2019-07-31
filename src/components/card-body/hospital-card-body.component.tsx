// hospital-card-body.component.tsx
import React from 'react';
import './card-body.css';

export default function HospitalCardBody(props: any) {
  return (
    <div className="h-c-content">
      <main>
        <div className="h-c-hospital-name">
          {props && props.nearestHospital && props.nearestHospital.name ? props.nearestHospital.name : 'null'}
        </div>
        <div className="h-c-hospital-address">
          {props && props.nearestHospital && props.nearestHospital.name ? props.nearestHospital.address : 'null'}
        </div>
        <div className="h-c-hospital-phone">
          {props && props.nearestHospital && props.nearestHospital.name ? props.nearestHospital.phone : 'null'}
        </div>
        <div className="h-c-hospital-website">
          {props && props.nearestHospital && props.nearestHospital.name ? props.nearestHospital.website : 'null'}
        </div>
      </main>
    </div>
  );
}
