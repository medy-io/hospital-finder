// hospital-card-header.component.tsx
import React from 'react';
import './card-header.scss';
import { APP_NAME } from './../../constants/global-constants.constant';
import { STATE_NAME } from './../../constants/global-constants.constant';

export default function HospitalCardHeader() {
  return (
    <header className="h-c-header">
      <span className="h-c-title">{STATE_NAME[44]} {APP_NAME}</span>
    </header>
  );
}
