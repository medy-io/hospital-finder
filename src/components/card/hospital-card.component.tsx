import React from 'react';
import './hospital-card.css';

export default function HospitalCard(props: any) {
  return (
    <div>
      <header>
        <i>LOGO</i>
        <span>PA Hospital Finder</span>
      </header>
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
        <div>
          <a href={props && props.nearestHospital && props.nearestHospital.mapsUrl ? props.nearestHospital.mapsUrl : 'null'}>  
            <button className="card-button">
              Directions
            </button>
          </a>
          <button className="card-button">
              911
          </button>
        </div>
      </main>
    </div>
  );
}
