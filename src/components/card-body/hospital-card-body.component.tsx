// hospital-card-body.component.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faMapMarkedAlt, faLaptop } from '@fortawesome/free-solid-svg-icons'
import './card-body.scss';

export default function HospitalCardBody(props: any) {
  return (
    <div className="h-c-content">
      <main>
        <div className="h-c-hospital-name">
          {props && props.nearestHospital && props.nearestHospital.name ? props.nearestHospital.name : 'null'}
        </div>
        <div className="h-c-secondary-content">
          <div className="h-c-hospital-address">
            <FontAwesomeIcon className="h-c-icon" icon={faMapMarkedAlt} />
            {props && props.nearestHospital && props.nearestHospital.name ? props.nearestHospital.address : 'null'}
          </div>
          <div className="h-c-hospital-phone">
            <FontAwesomeIcon className="h-c-icon" icon={faPhoneAlt} />
            {props && props.nearestHospital && props.nearestHospital.name ? props.nearestHospital.phone : 'null'}
          </div>
          <div className="h-c-hospital-website">
            <FontAwesomeIcon className="h-c-icon" icon={faLaptop} />
            <a href={props && props.nearestHospital && props.nearestHospital.name ? props.nearestHospital.website : 'null'}>
              {props && props.nearestHospital && props.nearestHospital.name ? props.nearestHospital.website : 'null'}
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
