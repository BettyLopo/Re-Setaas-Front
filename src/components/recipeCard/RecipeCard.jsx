import React from 'react'
import HeartIcon from '../buttons/icons/HeartIcon'
import { useNavigate } from 'react-router-dom'

const RecipeCard = ({recipe, time, user, category}) => {
    const navigate = useNavigate();
    
    const handleNavigate = () => {
        navigate('/detail/');
    }

  return (
    <div className="w-[21.25rem] h-[24rem] rounded-cont bg-softblue border-brown border-[0.18rem] shadow-bigs flex flex-col">
        <section className="m-4 w-[18.75rem] h-[16.6rem] rounded-inp bg-brokenwhite border-[0.15rem] border-brown ">
                <div className="flex flex-row justify-between py-5 px-5">
                    <HeartIcon />
                    <svg width="27" height="18" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleNavigate}>
                        <path d="M29.8188 9.70156C26.9943 3.91508 21.4026 0 15 0C8.59738 0 3.00414 3.91781 0.181222 9.70211C0.0620768 9.94958 0 10.223 0 10.5003C0 10.7776 0.0620768 11.051 0.181222 11.2984C3.00571 17.0849 8.59738 21 15 21C21.4026 21 26.9959 17.0822 29.8188 11.2979C29.9379 11.0504 30 10.777 30 10.4997C30 10.2224 29.9379 9.94903 29.8188 9.70156ZM15 18.375C13.5166 18.375 12.0666 17.9131 10.8332 17.0478C9.59984 16.1825 8.63855 14.9526 8.07089 13.5136C7.50323 12.0747 7.35471 10.4913 7.6441 8.96366C7.93349 7.43606 8.64779 6.03287 9.69669 4.93153C10.7456 3.8302 12.082 3.08017 13.5368 2.77632C14.9917 2.47246 16.4997 2.62841 17.8701 3.22445C19.2406 3.82049 20.4119 4.82985 21.236 6.12488C22.0601 7.41992 22.5 8.94247 22.5 10.5C22.5005 11.5343 22.3068 12.5586 21.9301 13.5142C21.5533 14.4699 21.0009 15.3382 20.3044 16.0696C19.6078 16.8009 18.7809 17.381 17.8707 17.7766C16.9605 18.1722 15.9851 18.3755 15 18.375ZM15 5.25C14.5537 5.25655 14.1103 5.32627 13.6818 5.45727C14.035 5.96131 14.2045 6.58158 14.1596 7.20559C14.1146 7.82961 13.8582 8.41605 13.4367 8.85855C13.0153 9.30106 12.4568 9.57033 11.8625 9.61754C11.2682 9.66475 10.6774 9.48676 10.1974 9.11586C9.92404 10.1733 9.97338 11.2941 10.3385 12.3205C10.7036 13.347 11.366 14.2274 12.2326 14.8378C13.0992 15.4482 14.1263 15.7579 15.1693 15.7233C16.2123 15.6887 17.2187 15.3116 18.0468 14.6449C18.875 13.9783 19.4832 13.0558 19.7859 12.0072C20.0885 10.9586 20.0704 9.83674 19.734 8.79953C19.3976 7.76233 18.76 6.86199 17.9108 6.22525C17.0615 5.58851 16.0435 5.24742 15 5.25Z" fill="#B8BEDD" stroke="#554348"/>
                    </svg>
                </div>
                <img 
                    src="" 
                    alt="" 
                    className=""
                />
        </section>
        <section className="flex flex-col">
            <div className="flex flex-row justify-between">
                <p className="font-ultra text-ctitle text-darklila pl-4 line-clamp-2 leading-5 w-[65%]">{recipe}</p>
                <p className="font-raleway text-tiny text-darklila pr-4 ">{time}</p>
            </div>
            <div className="flex flex-row justify-between pt-[0.2rem]">
                <p className="font-raleway text-tint text-darklila pl-4">{user}</p>
                <p className="font-raleway text-tiny text-darklila pr-4">#{category}</p>
            </div>
        </section>
       

    </div>
  )
}

export default RecipeCard
