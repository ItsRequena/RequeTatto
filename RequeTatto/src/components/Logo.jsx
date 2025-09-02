import requeTattoLogo from '../images/newRequeTattoLogo.png'
import '../styles/Logo.css'

export function Logo(){
    return (
        <>
            <a>
                <img src={requeTattoLogo} className="logo" alt="RequeTatto logo" />
            </a>
        </>
    )
}