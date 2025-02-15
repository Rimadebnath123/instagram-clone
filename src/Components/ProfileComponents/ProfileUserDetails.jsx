import React from "react";
import { TbCircleDashed } from "react-icons/tb";

const ProfileUserDetails = () => {
  return (
    <div className="py-10 w-full">
      <div className="flex items-center">
        <div className="w-[20%]">
          <img
            className="w-32 h-32 rounded-full"
            src="https://cdn.pixabay.com/photo/2018/10/21/21/28/autumn-3763897_1280.jpg"
            alt=""
          />
        </div>
        <div className="space-y-5">
          <div className="flex space-x-10 items-center">
            <p>Asadul Mondol</p>
            <button>Edit Profile </button>
            <TbCircleDashed></TbCircleDashed>
          </div>
          <div className="flex space-x-10">
            <div>
              <span className="font-semibold mr-2">10</span>
              <span>posts</span>
            </div>
            <div>
              <span className="font-semibold mr-2">5</span>
              <span>follower</span>
            </div>
            <div>
              <span className="font-semibold mr-2">7</span>
              <span>following</span>
            </div>
          </div>
          <div>
            <p className="font-semibold">Full Name</p>
            <p className="font-thin text-sm">
              🧑‍🎓 Engineering Students 😎 💃 No Babu Sona 😊 🍔 Fast Food
              Addicted 💪 🏫 School Life Is So Better 😏 📈 Learning & Earning
              💰 🎉 Party 18 March{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUserDetails;
