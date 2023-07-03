import { Footer, Navbar } from "../navfoot/navbar";
import { Comp } from "../company/company";
export const Adminpage=()=>
{
    return(
        <>
        <Navbar/>
        <div className="home">
            <div className="adpage">
                <aside>
                <Comp/>
                </aside>
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