import React from 'react'

const Profile = () => {
  return (
    <div className="w-full self-stretch inline-flex flex-col justify-center items-center gap-5 overflow-hidden">
    <img className="w-36 h-36 rounded-full" src="https://placehold.co/150x150" />
    <div className="self-stretch flex flex-col justify-start items-start gap-[5px] overflow-hidden">
        <div className="self-stretch text-center justify-start text-3xl font-bold leading-10">Anne Lee</div>
        <div className="self-stretch text-center justify-start text-grey text-sm font-light leading-none">Design Engineer </div>
    </div>
</div>
  )
}

export default Profile