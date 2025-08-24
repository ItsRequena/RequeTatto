import requeTattoLogo from '../images/newRequeTattoLogo.png'
import './Logo.css'

export function Logo(){
    return (
        <>
            <a>
                <img src={requeTattoLogo} className="logo" alt="RequeTatto logo" />
            </a>
        </>
    )
}