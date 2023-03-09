import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { FaEdit } from "react-icons/fa";
import { useQuery } from "react-query";
import UpdateProfile from "./UpdateProfile";
// import Loading from "../../Shared/Loading/Loading";

const MyProfile = () => {
  const [{ displayName, email, photoURL }] = useAuthState(auth);
  const [activeProfile, setActiveProfile] = useState("myProfile");
  // get profile data
  const { data: profile, refetch } = useQuery("profile", () =>
    fetch(
      `https://rri-server.vercel.app/profile/${email}`
    ).then((res) => res.json())
  );

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <>
      {activeProfile === "myProfile" && (
        <div className="m-3 p-6 md:m-8 bg-base-100 rounded-lg font-serif">
          <div className="flex items-center justify-between">
            <button className="text-3xl font-semibold text-left text-primary">
              My Profile
            </button>
            <div
              onClick={() => setActiveProfile("updateProfile")}
              className="btn btn-ghost text-red-300 flex items-center"
            >
              Edit
              <FaEdit className="ml-1" />
            </div>
          </div>
          <hr className="my-6" />
          {/* _______________________________________ */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
            {/* ____left side___ */}
            <div className="flex-1 flex flex-col justify-center items-center">
              <img
                className="rounded-full w-38 h-28 md:w-40 md:h-40"
                src={photoURL}
                alt={displayName}
              />
              <div
                onClick={() => setActiveProfile("updateProfile")}
                className="btn btn-error btn-sm rounded-full mt-3 capitalize text-base-100"
              >
                Update Profile
              </div>
            </div>

            {/* ____right side_____  */}
            <div className="flex-1 text-left mt-6 md:mt-0">
              {/* ____name ____ */}
              <p className="p-2 font-semibold">
                Name: <br />
                <span className="font-normal uppercase"> {displayName}</span>
              </p>
              {/* _____email______ */}
              <p className="p-2 font-semibold">
                Email Address: <br />
                <span className="font-normal"> {email}</span>
              </p>
              {/* ______phone number_____ */}
              <p className="p-2 font-semibold">
                Phone Number: <br />
                <span className="font-normal">
                  {profile?.phone ? (
                    profile?.phone
                  ) : (
                    <span className="text-red-400 text-xs font-semibold font-sans">
                      please! add your number
                    </span>
                  )}
                </span>
              </p>

              {/* ______address______ */}
              <div className="p-2 font-semibold">
                Address: <br />
                <hr />
                <div className="font-normal">
                  <span className="font-medium">Street Address:-</span>
                  <address>
                    {profile?.address ? (
                      profile?.address
                    ) : (
                      <span className="text-red-400 text-xs font-semibold font-sans">
                        please! add your address
                      </span>
                    )}
                  </address>
                  {/* <span className="font-medium">City/Division:- </span>
              Rangpur */}
                </div>
              </div>
              <hr />
              {/* ______education______ */}
              <p className="p-2 font-semibold">
                Education: <br />
                <span className="font-normal">
                  {profile?.education ? (
                    profile?.education
                  ) : (
                    <span className="text-red-400 text-xs font-semibold font-sans">
                      please! add your education
                    </span>
                  )}
                </span>
              </p>
              {/* _______linekedin_____ */}
              <p className="p-2 font-semibold">
                Linkedin: <br />
                <span className="font-normal">
                  <a className="btn-link" href={profile?.linkedin} target="_">
                    {profile?.linkedin ? (
                      profile?.linkedin
                    ) : (
                      <span className="text-red-400 text-xs font-semibold font-sans">
                        please! add your linkedin profile link
                      </span>
                    )}
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
      {/* _____________________update profile_________________ */}
      {activeProfile === "updateProfile" && (
        <UpdateProfile setActiveProfile={setActiveProfile} refetch={refetch} />
      )}
    </>
  );
};

export default MyProfile;
