import userpfp from '../../assets/icons/user.svg';
function Dashboard({user,order,address}) {
    return ( 
        <div className="flex grow mt-8 flex-col gap-4">
            <div className="flex gap-4 w-full h-fit flex-wrap">
                {/* profile edit */}
                <div className="flex justify-center items-center py-4 flex-grow border-2 rounded-lg shadow-md border-secondary">
                    <div className="flex flex-col gap-1 text-center items-center">
                        <div className="border-2 border-l-secondary w-fit p-px rounded-full">
                            <img className="object-cover w-28 h-28 rounded-full" alt={"loading" } src={userpfp}/>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold text-lg">{user.username}</p>
                            <p className="font-light text-text1 text-sm">{user.role}</p>
                        </div>
                        <p className="hover:bg-neutral-200 hover:text-primary1 w-fit bg-secondary py-1 px-4 rounded-full font-medium text-secondary1 cursor-pointer">Edit Profile</p>
                    </div>  
                </div>
                <div className="py-4 px-6 w-2/5 border-2 rounded-lg shadow-md border-secondary">
                    <p className="text-text1 font-medium text-sm mb-6">BILLING ADDRESS</p>
                    <div className="flex flex-col gap-2 flex-wrap mb-4">
                        <p className="font-semibold">{user.username}</p>
                        <p className="text-sm text-primary1">street 360, Toul Kork, Phnom Penh</p>
                        <p className="text-sm text-primary1">Postcode 40010</p>
                        <p>{user.email}</p>
                        <p className="tracking-wide">{user.phonenumber}</p>
                    </div>
                    <p className="hover:bg-neutral-200 hover:text-primary1 bg-secondary py-1 px-4 rounded-full font-medium text-secondary1 cursor-pointer w-fit">Edit Address</p>
                </div>
            </div>
            {/* recent ordering history */}
            <div className="py-4 border-2 rounded-lg shadow-md border-secondary w-full">
                <div className="flex justify-between px-8 mb-4">
                    <p className="font-semibold text-lg">Recent Order History</p>
                    <p className="hover:bg-neutral-200 hover:text-primary1 bg-secondary py-1 px-4 rounded-full font-medium text-secondary1 cursor-pointer w-fit">View All</p>
                </div> 
                {/* order list table    */}
                <table className="text-sm w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="text-start bg-secondary px-4 py-3 text-primary1 font-semibold">ORDER ID</th>
                            <th className="text-start bg-secondary px-4 py-3 text-primary1 font-semibold">DATE</th>
                            <th className="text-start bg-secondary px-4 py-3 text-primary1 font-semibold">TOTAL</th>
                            <th className="text-start bg-secondary px-4 py-3 text-primary1 font-semibold">STATUS</th>
                            <th className="text-start bg-secondary px-4 py-3 text-primary1 font-semibold">DETAIL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.map((e,i)=>(
                            <tr key={i}>
                                <td className="text-start p-4">{e.orderId}</td>
                                <td className="text-start p-4">{e.createAt}</td>
                                <td className="text-start p-4">${e.totalPrice}</td>
                                <td className="text-start p-4">{e.status}</td>
                                <td className="text-start p-4"><p className="hover:bg-neutral-200 hover:text-primary1 bg-secondary py-1 px-4 rounded-full font-medium text-secondary1 cursor-pointer w-fit">View All</p></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div> 
    );
}

export default Dashboard;