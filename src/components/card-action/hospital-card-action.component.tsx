// hospital-card-action.component.tsx
import React from 'react';
import HospitalCardButton from './../card-button/hospital-card-button.component';
import './card-action.css';

export default function HospitalCardAction(props: any) {
  return (
    <div className="h-c-action">
      <HospitalCardButton nearestHospital={props} />
    </div>
  );
}
