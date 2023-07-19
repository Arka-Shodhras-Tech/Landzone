import { Footer, Navbar1 } from "../home/nav&foot&contact&about/navbar";
import { Comp } from "../adminpage/asidebar/asidebar";
export const Adminpage=()=>
{
    return(
        <>
        <Navbar1/>
        <div className="home">
            <div className="adpage">
                <Comp/>
                <section>
                    <div>
                        <h2>Company info</h2>
                    </div>
                </section>
            </div>
        </div>
        <Footer/>
        </>
    )
}