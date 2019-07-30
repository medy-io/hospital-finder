// hospital-card-header.component.tsx
import React from 'react';
import './../hospital-card/hospital-card.css';

export default function HospitalCardHeader() {
  return (
    <header className="h-c-header">
      <span className="h-c-logo"><i>LOGO</i></span>
      <span className="h-c-title">PA Hospital Finder</span>
    </header>
  );
}
