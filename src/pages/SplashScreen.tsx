import icon from '/darth-vader-svgrepo-com.svg'

export function SplashScreen() {
    return (
        <div className="fixed w-screen h-screen bg-black flex items-center justify-center z-50">
            <img src={icon} alt="" className='animate-pulse'/>
            
        </div>
    )
}