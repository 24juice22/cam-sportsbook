import React, {useContext} from 'react'
import { SportsbookContext } from '../contexts/SportsbookContexts'

function OddsError() {
    const { sport } = useContext(SportsbookContext);
    
    return (
        <p className="odds-error">There are currently no {sport} odds.</p>
    )
}

export default OddsError