import React from 'react'
import { Card, Link } from 'components'
import {ChevronRightIcon} from "@heroicons/react"

const Nav = () => {
    return (
        <Card className="flex gap-4">
            <Link href="sign-up">Balance</Link>
            {/* <ChevronRightIcon /> */}
            <Link href="sign-in">Withdraw</Link>
        </Card>
    )
}

export default Nav