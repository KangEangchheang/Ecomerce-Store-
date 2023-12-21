import gold_star from '../../assets/icons/gold_star.svg';
import gray_star from '../../assets/icons/gray_star.svg';
import UserReview from './UserReview';

function Review({review}) {
    const star = [];
    for(let i=0;i<Math.round(review.star_rating);i++){
        star.push(<img key={i} className='h-4' src={gold_star}></img>)
    }
    for(let i=0;i<(5-Math.round(review.star_rating));i++){
        star.push(<img key={i} className='h-4' src={gray_star}></img>)
    }
    return ( 
        <div className="mt-8 self-start w-full">
            <div className="flex justify-between items-center">
                <span><span className="text-xl font-semibold mr-1">Reviews</span>({10})</span>
                {/* why is the button in a div? because im going to add animation */}
                <div className="relative">
                    <button className="py-2 px-8 border-2 border-solid border-secondary1 text-sm rounded-3xl">Write A Review</button>    
                </div>
            </div>
            {/* the actual review start here */}
            {/* star rating */}
            <div className='flex gap-2 center mt-4'>
                {star}
                <p className='text-sm font-light'>({review.star_rating})</p>
            </div>
            {/* individual star count */}
            <div className='mt-4 flex flex-col gap-4'>
                <div className='flex gap-4 items-baseline'>
                    <p>5 Star</p>
                    <div className='h-3 bg-text1 w-2/6'>
                        <div className='h-full w-1/6 bg-secondary1'></div>
                    </div>
                    <p className='text-sm'>{3}</p>
                </div>
                <div className='flex gap-4 items-baseline'>
                    <p>4 Star</p>
                    <div className='h-3 bg-text1 w-2/6'>
                        <div className='h-full w-2/3 bg-secondary1'></div>
                    </div>
                    <p className='text-sm'>{10}</p>
                </div>
                <div className='flex gap-4 items-baseline'>
                    <p>3 Star</p>
                    <div className='h-3 bg-text1 w-2/6'>
                        <div className='h-full w-1/3 bg-secondary1'></div>
                    </div>
                    <p className='text-sm'>{8}</p>
                </div>
                <div className='flex gap-4 items-baseline'>
                    <p>2 Star</p>
                    <div className='h-3 bg-text1 w-2/6'>
                        <div className='h-full w-1/6 bg-secondary1'></div>
                    </div>
                    <p className='text-sm'>{3}</p>
                </div>
                <div className='flex gap-4 items-baseline'>
                    <p>1 Star</p>
                    <div className='h-3 bg-text1 w-2/6 ml-1'>
                        <div className='h-full w-1 bg-secondary1'></div>
                    </div>
                    <p className='text-sm'>{0}</p>
                </div>
            </div>
            {/* filter review */}
            <div className='mt-8 relative border-2 border-solid border-secondary1 w-max pr-6'>
                <button className='px-6 py-1'>Sort</button>
                <p className='cursor-pointer rotate-90 absolute top-0 right-2 text-2xl'>{">"}</p>
            </div>

            {/* the reviews */}
            <div className='mt-16 w-full flex flex-col'>
                <UserReview/>
                <UserReview/>
            </div>
        </div>
     );
}

export default Review;