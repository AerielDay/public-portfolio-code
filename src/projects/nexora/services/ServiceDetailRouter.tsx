import React from 'react';
import { useParams } from 'react-router-dom';
import DigitalTransformation from './DigitalTransformation';
import FrontEndModernization from './FrontEndModernization';
import DataAnalytics from './DataAnalytics';
import Cybersecurity from './Cybersecurity';

export default function ServiceDetailRouter() {
    const { slug } = useParams();

    switch (slug) {
        case 'digital-transformation':
            return <DigitalTransformation />;
        case 'front-end-modernization':
            return <FrontEndModernization />;
        case 'data-analytics':
            return <DataAnalytics />;
        case 'cybersecurity':
            return <Cybersecurity />;
        default:
            return (
                <main className="nexora container">
                    <h2>Service not found</h2>
                    <p>The requested service "{slug}" was not found.</p>
                </main>
            );
    }
}
