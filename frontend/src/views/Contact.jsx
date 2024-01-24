import phone from '../assets/icons/PhoneCall 1.svg';
function Contact() {
    return ( 
        <section className='px-16 mt-8 mb-16 flex gap-8 '>
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg justify-center overflow-hidden sm:mr-10 p-10 flex items-end relative">
                {/* using iframe to embed google map */}
                <iframe width="100%" height="100%" className=" absolute inset-0 opacity-90" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7942270259073!2d104.89482917458449!3d11.566604144122966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095136616e73a5%3A0x21d1123265ec6b58!2sSakura%20Buffet%20BBQ%26Soup%20(Sonthormok)!5e0!3m2!1sen!2skh!4v1706086258696!5m2!1sen!2skh"></iframe>
                
                <div className="bg-white relative w-[90%] flex flex-wrap py-6 rounded-md shadow-md">
                    <div className="lg:w-1/2 px-6">
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                        <p className="mt-1">804 Kampuchea Krom Blvd (128), Phnom Penh</p>
                    </div>
                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                        <a className="text-indigo-500 leading-relaxed">ZenByte.support@gmail.com</a>
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                        <div className='flex gap-2 items-center'>
                            <img className='h-6' src={phone} alt='loading'/>
                            <p>+855 15-987-990</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* the right side */}
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                <p className="leading-relaxed mb-5 text-gray-600">Help us enhance your shopping experience! Share your feedback on our products and services.</p>
                <div className="relative mb-4">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                    <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-secondary1 focus:shadow-lg  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-secondary1 focus:shadow-lg text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                    <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-secondary1 focus:shadow-lg  h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                    <button className="text-white bg-secondary1 shadow-lg shadow-secondary1 border-0 py-2 px-6 focus:outline-none active:scale-95 rounded text-lg">Send</button>
                    <p className="text-xs text-gray-500 mt-5">We appreciate your thoughts and strive to make your online shopping better.</p>
                </div>
        </section>
     );
}

export default Contact;