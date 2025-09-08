export function Leafs(){

    const [expandedImageUrl, setExpandedImageUrl] = useState('')

    useEffect(() => {
        openTatto()
    }, [expandedImageUrl])

    const openTatto = () => {
        if(expandedImageUrl !== ''){
            const modal = document.getElementById('imageModal');
            const modalImage = document.getElementById('modalImage');
            modal.style.display = 'flex';
            modalImage.src = expandedImageUrl;
        }
    }

    return (
        <>
        <div className='page'>
            <header>
                <h2></h2>
            </header>
            <main >
                {expandedImageUrl && 
                <div className="modal" id="imageModal" onClick={() => setExpandedImageUrl('')} >
                    <img id="modalImage" src={null} alt="Imagen ampliada"></img>
                </div>}
                <ul>
                    <li>

                    </li>
                    <li>

                    </li>
                </ul>
            </main>
        </div>
        </>
    )
}