import deletebutton from "../assets/Delete.png"


function Body(){
    return <body>
       <div className="container mx-auto mt-10">
        <div className="flex">
            <div className="checkbox"></div>
            <div className="label">Create Guest Experience mobile check-in</div>
            <img className="delete" src={deletebutton} />
        </div>
        <div className="flex">
            <div className="checkbox"></div>
            <div className="label">Document current CI/CD process</div>
            <img className="delete" src={deletebutton} />
        </div>

        <div className="flex">
            <div className="checkbox"></div>
            <div className="label">Perform Code Review for final Pillow-Talk release</div>
            <img className="delete" src={deletebutton} />
        </div>

        <div className="flex">
            <div className="checkbox"></div>
            <div className="label">Implement new Color Palette from Deisgn Team</div>
            <img className="delete" src={deletebutton} />
        </div>

        <div className="flex">
            <div className="checkbox"></div>
            <div className="label">Fix image uploading process for guest check-in</div>
            <img className="delete" src={deletebutton} />
        </div>

        <div className="flex">
            <div className="checkbox"></div>
            <div className="label">Provide on-boarding docuemantation</div>
            <img className="delete" src={deletebutton} />
        </div>
       </div>

        <hr className="white-line"></hr>
       
    </body>
}

export default Body;