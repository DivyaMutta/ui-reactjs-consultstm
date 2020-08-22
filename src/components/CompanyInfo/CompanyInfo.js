import React from 'react';
import './CompanyInfo.css';

export default function CompanyInfo({ companyInfo }) {
    const cn = 'Company-info';
    return (
        <div className={cn}>
            <div className={`${cn}-row`}>
                <label className={`${cn}-name`}>{companyInfo.name}</label>
                {companyInfo.status &&
                    <p className={`${cn}-status`}>Company Status:
                    &nbsp;<span className="uppercase">{companyInfo.status}</span></p>
                }
            </div>
            <div className={`${cn}-row`}>
                <label className={`${cn}-row-header`}>COMPANY REGISTRATION NUMBER</label>
                <p className={`${cn}-row-content`}>{companyInfo.registrationNumber}</p>
            </div>
            <div className={`${cn}-row`}>
                <label className={`${cn}-row-header`}>VAT NUMBER</label>
                <p className={`${cn}-row-content`}>{companyInfo.vatNumber}</p>
            </div>
            <div className={`${cn}-row`}>
                <label className={`${cn}-row-header`}>REGISTERED ADDRESS</label>
                <p className={`${cn}-row-content`}>{companyInfo.address}</p>
            </div>
            <div className={`${cn}-row`}>
                <label className={`${cn}-row-header`}>COUNTRY</label>
                <p className={`${cn}-row-content`}>{companyInfo.country}</p>
            </div>
            <div className={`${cn}-row`}>
                <label className={`${cn}-row-header`}>ADDITIONAL STATUS DETAILS</label>
                <p className={`${cn}-row-content`}>{companyInfo.additionalStatusDetails}</p>
            </div>
            <div className={`${cn}-row`}>
                <label className={`${cn}-row-header`}>COMPANY DESCRIPTION</label>
                <p className={`${cn}-row-content`}>{companyInfo.description}</p>
            </div>
        </div>
    );
}
