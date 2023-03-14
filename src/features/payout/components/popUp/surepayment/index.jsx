import { Card , OtpInput ,Link ,Button } from "components";
import { XMarkIconMini } from "lib/@heroicons";
export const Surepayment = () => {
  return (
    <div>
      <Card className="w-[600px] pl-[60px] pr-[60px]">
        
          <p className="text-center font-bold ">We need to make sure its you!</p>
          <Link href=""><XMarkIconMini className="w-4 h-4 ml-[500px] mt-[-15px]"/></Link>
        
        
        
        {/* //     <Image src="public/" alt="..." w={20} h={20}></Image> */}
        <div className="w-[380px] ml-16">
          <p className=" mt-20 mb-10  ">
            We have sent you a verification code to your phone number
            ********789
          </p>
        </div>
        <OtpInput></OtpInput>
        <p className="text-center mt-10">02:00</p>
        <p className="text-center mt-4 mb-10">
          Didnt get the code?{" "}
          <Link href="" className="text-blue">
            Resend
          </Link>
        </p>
        <Button className="w-full mb-10">Continue</Button>
      </Card>
    </div>
  );
}
export default Surepayment;