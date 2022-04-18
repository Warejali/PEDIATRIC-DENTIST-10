import React from 'react';
import doctor from '../../images/doctor.png';
import './AboutDoctor.css'

const AboutDoctor = () => {
    return (
        <div className='about-section container py-4'>
            <h2 className='about-title text-center py-3 fw-bold'>MESSAGE OF DENTIST</h2>
            <div className="row row-cols-1 row-cols-md-6">
                <div className="text-part col-6 d-flex justify-content-center align-items-center">
                    <div>
                        <p className='px-3'>A dentist has many responsibilities, and one of the most important is promoting good dental hygiene. This helps to prevent complications in your mouth or other parts of the body.

                            A dentist also diagnoses and treats problems of the gums, teeth, and mouth. Dentists use modern technology and equipment like X-ray machines, lasers, drills, brushes, scalpels, and other medical tools when performing dental procedures. They also wear protective equipment like gloves, masks, and safety glasses to prevent the spread of germs or bacteria.
                            <h6>I focus 5 goals now:</h6>
                            <li>Teaching people about dental hygiene</li>
                            <li>Removing buildup or decay from teeth</li>
                            <li>Repairing or removing damaged teeth</li>
                            <li>Putting in fillings or sealants</li>
                            <li>Checking the growth of teeth and jawbones</li>
                            Dentistry requires a team approach, and the dentist is the leader. Working with the dentist are dental assistants, hygienists, and lab technicians. Together, the team ensures that people get quality dental care.
                        </p>
                    </div>
                </div>
                <div className="col-6 p-3">
                    <div className='img-part'>
                        <img className='about-image w-100 p-3' src={doctor} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutDoctor;