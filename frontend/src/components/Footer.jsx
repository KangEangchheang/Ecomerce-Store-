function Footer() {
    return ( 
        <div className="bg-text2 w-[100vw] px-24 py-8 text-text text-sm flex gap-20 font-light flex-wrap mt-10">
            <div className="flex flex-col gap-3">
                <h1 className="text-xl font-semibold font-serif">iFour</h1>
                <div className="font-semibold">Subscribe</div>
                <p>Get notification on the latest product offers</p>
                <input type="email" className="bg-text2 text-text1 border-secondary border-[1px] rounded outline-none px-3 py-2 text-sm" placeholder="Email"/>
            </div>
            <div className="flex flex-col gap-3">
                <div className="text-[16px] font-semibold">Support</div>
                <p>Phnom penh</p>
                <p>iFoursupport@gmail.com</p>
                <p>+85518273641</p>
            </div>
            <div className="flex flex-col gap-3">
                <div className="text-[16px] font-semibold">Account</div>
                <p>My Account</p>
                <p>Sign Up</p>
                <p>Login</p>
                <p>History</p>
            </div>
            <div className="flex flex-col gap-3">
                <div className="text-[16px] font-semibold">Quick link</div>
                <p>Privacy Policy</p>
                <p>Terms Of Use </p>
                <p>FAQ</p>
                <p>Contact</p>
            </div>
            <div className="flex flex-col gap-3">
                <div className="text-[16px] font-semibold">Follow us</div>
                <div className="flex gap-3">
                    
                </div>
            </div>
            <div className="w-full text-center text-text1">© Copyright 2023 All right reversed</div>
        </div>
     );
}

export default Footer;