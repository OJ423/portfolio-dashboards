"use client"

import Link from "next/link";
import { useEffect, useMemo, useState } from "react"
import { IconContext } from "react-icons";
import { IoLogOutOutline, IoCreateOutline, IoHomeOutline, IoMailOutline, IoPersonCircleOutline, IoHeartCircleOutline, IoCartOutline, IoPhonePortraitOutline, IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Image from "next/image";
import Flag from "react-world-flags"
import {profileData, Result} from "@/utils/data"
import dynamic from "next/dynamic";


export default function Profile() {
  const placeHolder: Result = {
    gender: "gender",
    name: {
      title: "Title",
      first: "First Name",
      last: "Last Name"
    },
    location: {
      street: {
        number: 1,
        name: "Street",
      },
      city: "Harrogate",
      state: "North Yorkshire",
      country: "UK",
      postcode: "27",
      coordinates: {
        latitude: "0.234",
        longitude: "0.234",
        },
      timezone: {
        offset: "+0",
        description: "Timezone description"
      },
    },
    email: "hello@email.com",
    login: {
      uuid: "2345",
      username: "username",
      password: "password",
      salt: "salt",
      md5: "md5",
      sha1: "sha1",
      sha256: "sha56",
    },
    dob: {
      age: 27,
      date: "27-01-01",
    },
    registered: {
      age: 27,
      date: "27-01-01",
    },
    phone: "0123456789",
    cell: "0777888999",
    id: {
      name: "id name",
      value: "id value",
    },
    picture: {
      large: "large pic",
      medium: "medium pic",
      thumbnail: "small pic",
    },
    nat: "UK",
  }
  const [isLoaded, setIsLoaded] = useState<Boolean>(false)
  const [profileInfo, setProfileInfo] = useState<Result>(profileData[0])
  const [showPassword, setShowPassword] = useState<Boolean>(false)
  const [showProfileMenu, setShowProfileMenu] = useState<Boolean>(false)
  useEffect(() => {
      setProfileInfo(profileData[Math.floor(Math.random()*6)])
      setIsLoaded(true)
  },[])

  function handleProfileMenu():void {
    setShowProfileMenu(!showProfileMenu)
  }

  const Map = useMemo(() => dynamic(
    () => import('@/components/AddressMap'),
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])

  function displayPassword():void {
    setShowPassword(!showPassword)
  }

  console.log(showProfileMenu)

  return(<>
    {isLoaded? 
    <main className="flex md:h-lvh flex-col bg-white justify-between">
      <div className="min-h-[100%] min-w-[100%] pattern-bkg absolute"></div>
      <section className="flex justify-between flex-row items-center p-4 xl:px-0 xl:py-8  w-full z-10 max-w-screen-lg mx-auto">
        <h1 className="font-bold">
        Profile:{" "}
        <span className="text-blue-500">
          {profileInfo.name.first}{" "}
          {profileInfo.name.last}
          </span>
        </h1>
        <div className="flex flex-row gap-4 items-center">
          <Image
            src={profileInfo.picture.large}
            width={50}
            height={50}
            alt={`Profile picture for ${profileInfo.name.first} ${profileInfo.name.last}`}
            className="rounded-full border-4 border-white shadow-2xl cursor-pointer"
            onClick={handleProfileMenu}
            priority
          />
          <p className="font-bold text-lg text-gray-500">Hello {profileInfo.name.first}</p>
          <IconContext.Provider value={{size:"2rem"}}>
            <Link href={"/"}>
              <IoHomeOutline className="hover:text-blue-500 transition-all"/>
            </Link> 
          </IconContext.Provider>
        </div>
      </section>
      <div className="flex flex-row z-10">
        <div className="bg-gray-100 p-8 rounded-3xl flex flex-col w-max mx-auto border-8 shadow-2xl">
          <section className="flex flex-wrap md:flex gap-4 md:gap-4 xl:gap-8 justify-between md:justify-center self-center items-center mt-8 max-w-screen-lg md:w-full px-4 xl-px-0">
            <Image
              src={profileInfo.picture.large}
              width={100}
              height={100}
              alt={`Profile picture for ${profileInfo.name.first} ${profileInfo.name.last}`}
              className="rounded-full border-4 border-white shadow-2xl"
              priority
            />
            <div className="flex gap-2 flex-row items-center">
                <Flag code={profileInfo.nat} className="h-4 md:h-8"/>
                <p className="text-slate-500 text-sm font-bold">{profileInfo.name.first}{" "}{profileInfo.name.last}</p>
            </div>
            <div className="hidden sm:flex gap-2 flex-row items-center">
              <IconContext.Provider value={{size:"2rem"}}>
                <IoMailOutline className="hover:text-blue-500 transition-all"  />
              </IconContext.Provider>
              <Link href={`mailto:${profileInfo?.email}`}>
                <p className="text-slate-500 text-sm font-bold hover:text-blue-500 transition-all">{profileInfo?.email}</p>
              </Link>
            </div>
            <div className="hidden md:flex gap-2 md:flex-row items-center">
              <IconContext.Provider value={{size:"2rem"}}>
                <IoPhonePortraitOutline className="hover:text-blue-500 transition-all" />
              </IconContext.Provider>
              <Link href={`tel:${profileInfo?.cell}`}>
                <p className="text-slate-500 text-sm font-bold hover:text-blue-500 transition-all">{profileInfo.cell}</p>
              </Link>
            </div>
          </section>
          <section className="grid grid-cols-1 sm:grid-cols-2 px-4 xl:px-0 gap-4 xl:gap-8 sm:justify-between self-center items-top mt-8 max-w-screen-lg w-full ">
            <div className="w-full flex flex-col gap-4 xl:gap-8">
              <Map mapData={profileInfo}/>
              <div className="p-4 rounded-lg bg-white shadow-2xl w-full">
                <h2 className="text-slate-500 font-bold mb-4">Address</h2>
                <p className="text-sm">{profileInfo.location.street.number}{" "}{profileInfo.location.street.name}{", "}{profileInfo.location.city}{", "}{profileInfo.location.postcode}</p>
                <div className="flex gap-2 flex-row items-center mt-4">
                  <Flag code={profileInfo.nat} className="h-4"/>
                  <p className="text-slate-500 text-sm font-bold">{profileInfo.location.country}</p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4 xl:gap-8">
              <div className="p-4 rounded-lg bg-white shadow-2xl flex-wrap">
                <h2 className="text-slate-500 font-bold mb-4">Personal Details</h2>
                <div className="flex gap-8 flex-row items-center mt-4 flex-wrap pb-4 border-b-2">
                  <div>   
                    <p className="text-xs text-gray-400">Title</p>
                    <p className="text-slate-500 font-bold">{profileInfo.name.title}</p>
                  </div>
                  <div> 
                    <p className="text-xs text-gray-400">First Name</p>
                    <p className="text-slate-500 font-bold">{profileInfo.name.first}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Last Name</p>
                    <p className="text-slate-500 font-bold">{profileInfo.name.last}</p>
                  </div>
                </div>
                <div className="flex gap-8 flex-row items-center flex-wrap py-4 border-b-2">
                  <div>
                    <p className="text-xs text-gray-400">Email</p>
                    <p className="text-sm text-slate-500 font-bold">{profileInfo.email}</p>
                  </div>
                </div>
                <div className="flex gap-8 flex-row items-center pt-4 flex-wrap">
                  <div>
                    <p className="text-xs text-gray-400">Mobile</p>
                    <p className="text-sm text-slate-500 font-bold">{profileInfo.cell}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Phone</p>
                    <p className="text-sm text-slate-500 font-bold">{profileInfo.phone}</p>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-white shadow-2xl">
                <h2 className="text-slate-500 font-bold mb-4">Account Details</h2>
                <div className="flex gap-8 flex-row items-center mt-4 flex-wrap pb-4 border-b-2 justify-between">
                  <div>
                    <p className="text-xs text-gray-400">Username</p>
                    <p className="text-sm text-slate-500 font-bold">{profileInfo.login.username}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Password</p>
                    {!showPassword ? 
                    <p className="text-sm text-slate-500 font-bold">{"Password Hidden"}</p>
                    :
                    <p className="text-sm text-slate-500 font-bold">{profileInfo.login.password}</p>
                    }
                  </div>
                  {!showPassword ?
                  <IconContext.Provider value={{size:"2rem"}}>
                    <IoEyeOutline onClick={displayPassword} className="hover:text-blue-500 transition-all cursor-pointer" />
                  </IconContext.Provider>
                  :
                  <IconContext.Provider value={{size:"2rem"}}>
                    <IoEyeOffOutline onClick={displayPassword} className="hover:text-blue-500 transition-all cursor-pointer" />
                  </IconContext.Provider>
                  }
                </div>
                <div className="flex gap-8 flex-row items-center pt-4 flex-wrap">
                  <p className="text-xs text-gray-400">Date Registered</p>
                  <p className="text-sm text-slate-500 font-bold">{profileInfo.registered.date.slice(0,10)}</p>
                  <p className="text-xs text-gray-400">Account Age</p>
                  <p className="text-sm text-slate-500 font-bold">{profileInfo.registered.age}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
   {/* View Contact Slide Out */}

    <div onClick={handleProfileMenu} className={`${!showProfileMenu ? 'invisible opacity-0': 'opacity-50'} w-full h-full bg-gray-300 fixed duration-500 ease-out transition-all cursor-pointer z-20`}>
    </div>
    <section className={`${!showProfileMenu ? 'translate-x-full': 'translate-x-0'} w-[30vw] h-full bg-white right-0 top-0 opacity-100 fixed duration-500 ease-out transition-all p-8 flex justify-center text-center items-center z-30 shadow-lg items-center`}>
      <ul className="text-left">
        <li className="list-style-none mb-4 text-gray-400 flex gap-4 justify-start items-center cursor-pointer">
          <IconContext.Provider value={{size:"1.5rem"}}>
            <IoPersonCircleOutline className="hover:text-blue-500 transition-all"  />
          </IconContext.Provider>Profile</li>
        <li className="list-style-none mb-4 flex gap-4 justify-start items-center cursor-pointer">
          <IconContext.Provider value={{size:"1.5rem"}}>
            <IoCartOutline className="hover:text-blue-500 transition-all"  />
          </IconContext.Provider>Past Orders</li>
        <li className="list-style-none mb-4 flex gap-4 justify-start items-center cursor-pointer">
          <IconContext.Provider value={{size:"1.5rem"}}>
            <IoHeartCircleOutline className="hover:text-blue-500 transition-all"  />
          </IconContext.Provider>Favourite Items</li>
        <li className="list-style-none mb-4 flex gap-4 justify-start items-center cursor-pointer">
          <IconContext.Provider value={{size:"1.5rem"}}>
            <IoCreateOutline className="hover:text-blue-500 transition-all"  />
          </IconContext.Provider>Edit Profile</li>
        <li className="list-style-none flex gap-4 justify-start items-center cursor-pointer">
          <IconContext.Provider value={{size:"1.5rem"}}>
            <IoLogOutOutline className="hover:text-blue-500 transition-all"  />
          </IconContext.Provider>Log Out</li>
      </ul>

    </section>
    <div onClick={handleProfileMenu} className={`${!showProfileMenu ? 'invisible opacity-0': 'opacity-50'} absolute cursor-pointer text-gray-600 top-0 w-8 h-8 flex items-center justify-center right-0 mt-5 mr-5 z-40`}>
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </div>
      <footer className="flex justify-between flex-row items-top p-12 shadow-2xl w-full mt-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      </footer>
  </main>
  :
  <main className="flex md:h-lvh flex-col bg-white justify-center items-center">
    <p className="font-bold text-2xl text-gray-400">Profile data loading...</p>
  </main>
}

 </>   )
}