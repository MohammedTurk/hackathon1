import { Image } from "components";

const Confirmation = () => {
  return (
    <div className="p-6 text-center font-medium">
      <Image
        alt="code verified successfully"
        src="/assets/img/check-mark.png"
        width={65}
        height={65}
        className="m-auto mb-8"
      />
      <h6 className="text-lg">Your Payment is Complete</h6>
      <p>$500</p>
    </div>
  );
};

export default Confirmation;
