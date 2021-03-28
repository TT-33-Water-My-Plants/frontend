import React from 'react'
import { Button } from 'semantic-ui-react'

import Banner from './Banner'

export default function Home(){
    return (
        <>
        <Banner />
        <h1>Hello World!</h1>
        <Button>Test Button</Button>
        </>
    )
}