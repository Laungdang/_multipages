import './Timer.css'
import { useEffect, useState } from 'react'

function Timer(){

    const [running, setRunning] = useState(false)
    const [seconds, setSecond] = useState(60)

    useEffect( () => {
        let interval = null
        if (running){
            interval = setInterval(() => {
                setSecond(seconds + 1)
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [running, seconds])
     

    function runClick(){
        setRunning(!running)
    }
    
    function secondsToString(seconds){
        const MINUTE_SECONDS = 60
        const HOURS_SECONDS = 60 * MINUTE_SECONDS
        const DAY_SECONDS = 24 * HOURS_SECONDS

        const day = Math.floor(seconds / DAY_SECONDS)
        const hours = Math.floor((seconds % DAY_SECONDS) / HOURS_SECONDS)
        const minutes = Math.floor((seconds % HOURS_SECONDS) / MINUTE_SECONDS)
        const secs = Math.floor(seconds % MINUTE_SECONDS)

        if (day > 0){
            return `${day}d ${hours}h ${minutes}m ${secs}s`
        }else if (hours > 0){
            return `${hours}h ${minutes}m ${secs}s`
        }else if (minutes > 0){
            return `${minutes}m ${secs}s`
        }else {
            return `${secs}s`
        }
    }

    function resetClick (){
        setRunning(false)
        setSecond(0)
    }

    return (
        <div className='timer-container'>
            <h3 className='timer-title'>Timer</h3>
            <p><input className="timer-display" type="text" readOnly={true} value={secondsToString(seconds)} /></p>
            <div className='timer-buttons'>
                <button className='btn btn-danger' onClick={resetClick}>Reset</button>
                <button className={'btn ' +(running ? 'btn-warning' : 'btn-success')} onClick={runClick}>{running ? 'Pause' : 'Run'}</button>
            </div>
        </div>
    )
}

export default Timer