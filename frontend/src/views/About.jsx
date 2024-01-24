import phone from '../assets/icons/PhoneCall 1.svg';

function About() {
    return ( 
        <div className="py-8 px-16 flex flex-col gap-16 pb-16">
            <span className="text-sm">
                <p className='text-base mb-4'>About</p>
                This is a small ecomerce website project for GIC year 4 ITC internet programming class.
                Our store sell many electronic products ranging from computer accessories to laptop.
            </span>
            <div className='flex gap-2 items-center'>
                <p>Call us:</p>
                <img className='h-6' src={phone} alt='loading'/>
                <p>+855 15-987-990</p>
            </div>
            <div className='flex flex-col gap-4'>
                <p id='privacy'>Privacy Policy</p>
                <p className='font-medium text-text1'>Information we collect:</p>
                <span className='text-sm'>
                    Personal information
                    - Name
                    - Address
                    - Email address
                    - Phone number
                    - Payment information
                </span>
                <p className='font-medium text-text1'>How We Use Your Information</p>
                <span className='flex gap-2 flex-col text-sm'>
                    <p>1. Process and fulfill orders.</p>
                    <p>2. Communicate with you about your orders.</p>
                    <p>3. Provide customer support.</p>
                    <p>4. Personalize your shopping experience.</p>
                    <p>5. Improve our website and services.</p>
                    <p>6. Send newsletters and promotional emails (with the option to opt-out).</p>
                    <p>By using our website, you consent to our Privacy Policy.</p>
                </span>
            </div>

            {/* subscribe form */}
            <div className='self-center flex flex-col gap-6'>
                <p className='text-center font-medium text-lg'>Let's keep in touch</p>
                <div className='flex flex-col gap-1 items-center'>
                    <p>Subscribe to keep up with fresh news and exciting updates.</p>
                    <p>We promise not to spam you!</p>
                </div>
                <div className=' flex gap-1'>
                    <input className='border-2 text-sm w-[22rem] outline-none border-text1 px-4 py-2' type='email' placeholder='Enter your email address'/>
                    <button className='active:scale-95 font-medium bg-secondary1 rounded-sm text-white px-4 py-2 shadow-lg shadow-secondary1'>Subscribe</button>
                </div>
                
            </div>
        </div>
     );
}

export default About;