interface HeaderProps{
    title: string
    image: string
}

function Header({title, image}:HeaderProps){
    return(
        <header>
            <nav>
                <span>{title}</span>
                <h2>Forum UI</h2>
                <div>
                    <img src= {image} alt="" />
                </div>
            </nav>
        </header>
    ) 
}

export default Header