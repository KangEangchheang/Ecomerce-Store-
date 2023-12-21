function UserReview() {
    return ( 
        <div className='flex gap-4 mb-16 border-b-[1px] border-solid border-text1 py-8'>
            {/* user profile detail */}
            <div className='w-2/6'>
                <p className='text-lg'>{'Chharng Chhit'}</p>
                <span className='text-sm'>Review at:<span className='text-text1'>{' 20 December 2023'}</span></span>
            </div>
            {/* user review detail */}
            <div className='flex flex-col gap-4'>
                <p className="text-lg">{'Good product'}</p>
                <p className="text-sm font-light max-w-prose">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam soluta hic dolorum saepe! Ullam nam nemo vitae, inventore dolorem dolores eos placeat delectus! Rem quasi, quae et praesentium odio repudiandae.
                Voluptatum quos beatae asperiores ea totam fuga dolor praesentium, alias voluptatibus enim ratione atque! Corporis quis consequatur, velit illo, sequi soluta excepturi animi facere magnam ea doloribus veniam minus ut!
                Omnis sed, excepturi corrupti, deserunt officiis unde amet nisi odit placeat sunt enim dicta vel earum, iusto fugit veniam assumenda aliquam dignissimos! Placeat magnam tempora id dolorem, delectus sit praesentium!</p>
                <div>
                    <span className="text-sm text-text1 w-fit">Was this review helpful?</span>
                    <div className="text-sm text-text1 w-[20ch] flex justify-between mt-2">
                        <a className="underline cursor-pointer">Yes</a>
                        <a className="underline cursor-pointer text-blue-800">Report</a>
                    </div>
                </div>
            </div>

        </div>
     );
}

export default UserReview;