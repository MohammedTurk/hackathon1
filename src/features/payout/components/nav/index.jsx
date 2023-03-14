import React from "react";
import { Link } from "components";
import { ChevronRightIconOutline } from "lib/@heroicons";

const Nav = () => {
    return (
        <div className="flex gap-4">
        <Link href="sign-up">Balance</Link>
        <span className="h-5 w-5">
            <ChevronRightIconOutline />
        </span>
        <Link href="sign-in">Withdraw</Link>
        </div>
    );
};

export default Nav;
