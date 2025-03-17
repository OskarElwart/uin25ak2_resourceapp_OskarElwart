import PageTitle from "./PageTitle"
import Nav from "./Nav"

//sender category prop vidre til PageTitle.jsx og Nav. lister opp {children} for å få opp innholdet
export default function Layout({ category, children }) {
    return (
        <>
        <header>    
        <Nav category={category}/>
        </header>
        <div id="content">
            <PageTitle category={category}/>
            {children}
        </div>
        </>
    );
}
