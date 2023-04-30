import Image from "next/image";

export default function Avatar({ userProfile }: { userProfile: CurrentUsersProfile }) {
  if (userProfile.images[0].url) {
    const avatar = userProfile.images[0];
    return (
      <Image
        className="w-8 h-8 border-2 rounded-full bg-slate-200 border-slate-500"
        src={avatar.url}
        width={avatar.width || 500}
        height={avatar.height || 500}
        alt={`${userProfile.display_name} Profile Picture`}
      />
    );
  } else {
    return (
      <div className="w-8 h-8 border-2 rounded-full border-slate-500 bg-slate-200" />
    );
  }
}
