import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";

class Terms extends Component {

    render(){
        return (
            <div className="container">
                <div className='p-5 m-5'>
                    <h1 className='mb-4' style={{ fontSize: "3em", fontWeight: 700 }}>Terms and Conditions</h1>
                    <p className='mb-5 lh-lg'>
                    Welcome to Know Your Neighborhood! These terms and conditions ("Terms") govern your use of the Know Your Neighborhood website (the "Website") and all related services provided by Know Your Neighborhood ("we," "us," or "our"). By accessing or using the Website, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use the Website.<br/>
                    </p>

                    <h3 className='mb-3' style={{ fontSize: "1.5em", fontWeight: 700 }}>Acceptance of Terms</h3>
                    <p className='mb-4 lh-lg'>
                    1.1. By accessing or using the Website, you affirm that you are at least 18 years old and capable of entering into a binding agreement. If you are using the Website on behalf of an organization or entity, you represent and warrant that you have the authority to bind such organization or entity to these Terms.<br/>
                    1.2. These Terms may be updated from time to time, and your continued use of the Website constitutes your acceptance of any changes. It is your responsibility to review these Terms periodically.<br/>
                    </p>

                    <h3 className='mb-3' style={{ fontSize: "1.5em", fontWeight: 700 }}>Use of the Website</h3>
                    <p className='mb-4 lh-lg'>
                    2.1. The Website provides information and resources related to neighborhoods and local communities. The content on the Website is for general informational purposes only and should not be considered as professional advice.<br/>
                    2.2. You agree to use the Website only for lawful purposes and in compliance with all applicable laws and regulations.<br/>
                    2.3. You are solely responsible for any content you post, upload, or transmit through the Website. You warrant that you own or have the necessary rights and permissions to use and share such content.<br/>
                    2.4. You agree not to:<br/>
                         a. Violate any applicable laws or regulations in your use of the Website.<br/>
                    b. Interfere with or disrupt the Website or its servers.<br/>
                    c. Engage in any activity that could harm or compromise the security or integrity of the Website or its users.<br/>
                    d. Attempt to gain unauthorized access to any portion of the Website.<br/>
                    e. Use the Website to distribute spam, unsolicited communications, or any form of advertising.<br/>
                    f. Impersonate any person or entity or falsely represent your affiliation with any person or entity.<br/>
                    </p>

                    <h3 className='mb-3' style={{ fontSize: "1.5em", fontWeight: 700 }}>Intellectual Property</h3>
                    <p className='mb-4 lh-lg'>
                    3.1. The Website and its content, including but not limited to text, graphics, logos, images, and software, are the property of Know Your Neighborhood or its licensors and are protected by intellectual property laws.<br/>
                    3.2. You are granted a limited, non-exclusive, non-transferable, and revocable license to access and use the Website and its content for personal, non-commercial purposes.<br/>
                    3.3. You may not reproduce, modify, distribute, transmit, display, perform, or use any part of the Website or its content without prior written consent from Know Your Neighborhood.<br/>
                    </p>

                    <h3 className='mb-3' style={{ fontSize: "1.5em", fontWeight: 700 }}>User Contributions</h3>
                    <p className='mb-4 lh-lg'>
                    4.1. By submitting any content to the Website, you grant Know Your Neighborhood a worldwide, non-exclusive, royalty-free, perpetual, and transferable license to use, reproduce, modify, adapt, publish, translate, distribute, perform, and display such content in connection with the operation of the Website and its services.<br/>
                    4.2. You acknowledge that you are solely responsible for any content you submit and that you have all necessary rights and permissions to grant the license described in section.<br/>
                    4.3. Know Your Neighborhood reserves the right to remove or modify any user-contributed content at its discretion.<br/>
                    </p>

                    <h3 className='mb-3' style={{ fontSize: "1.5em", fontWeight: 700 }}>Disclaimer of Warranties</h3>
                    <p className='mb-4 lh-lg'> 
                    5.1. The Website and its content are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied.<br/>
                    5.2. Know Your Neighborhood does not guarantee the accuracy, completeness</p> 
                </div>
            </div>
        );
    }
}

export default Terms;