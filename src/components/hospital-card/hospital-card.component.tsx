import React from 'react';
import HospitalCardHeader from './../card-header/hospital-card-header.component';
import HospitalCardBody from './../card-body/hospital-card-body.component';
import HospitalCardAction from './../card-action/hospital-card-action.component';
import './hospital-card.scss';

export default function HospitalCard(props: any) {
  return (
    <div className="hospital-card">
      <HospitalCardHeader />
      <HospitalCardBody nearestHospital={props.nearestHospital} />
      <HospitalCardAction nearestHospital={props.nearestHospital} />
    </div>
  );
}
