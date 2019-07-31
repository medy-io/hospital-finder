// hospital-card-body.component.tsx
import React from 'react';
import './card-body.css';

export default function HospitalCardBody(props: any) {
  return (
    <div className="h-c-content">
      <main>
        <div className="">
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
  );
}
