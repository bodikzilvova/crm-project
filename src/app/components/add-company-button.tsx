'use client';

import React, { useState } from 'react';
import Button from './button';
import dynamic from 'next/dynamic';

const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
    ssr: false,
})

export default function AddCompanyButton() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(false)}>Add company</Button>
      <CompanyFormModal
        onSubmit={console.log}
        show={show}
        onClose={() => setShow(false)}
      ></CompanyFormModal>
    </>
  );
}
