import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import './skeleton.css'
import 'react-loading-skeleton/dist/skeleton.css'
export default function SkeletonLoading() {
    return (
        <ul className="skeleton-container">

            {Array.from({ length: 12 }).map((_, index) => ( // Adjust the number for skeleton items
                <li key={index} className='item-skeleton'>
                    <SkeletonTheme baseColor="silver" highlightColor="#444" >
                        <Skeleton height={100} width={100} />
                        <Skeleton height={20} width={150} style={{ margin: '20px 0', }}/>
                        <Skeleton height={20} width={80} />
                        <Skeleton height={20} width={100} style={{ margin: '10px 0' }} />
                    </SkeletonTheme>
                </li>
            ))}

        </ul>
    )
}