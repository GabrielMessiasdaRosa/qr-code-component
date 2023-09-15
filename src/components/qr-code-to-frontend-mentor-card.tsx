import Image from "next/image";
import Card from "./card";

export interface QrCodeToFrontendMentorCardProps {}

export default function QrCodeToFrontendMentorCard({}: QrCodeToFrontendMentorCardProps) {
  return (
    <Card size="xl" className="gap-4 text-slate-600">
      <Image
        width={400}
        height={400}
        className="rounded-2xl"
        src={"/images/image-qr-code.png"}
        alt="Try frontend mentor, qr code image"
      />
      <div className="flex flex-col w-full gap-4 text-center p-4">
        <h1 className="font-bold text-xl sm:text-2xl ">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-slate-500 font-medium">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </Card>
  );
}
