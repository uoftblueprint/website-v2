import RoleCard from "../RoleCard/RoleCard";
import "./OpenRoles.css"

export default function OpenRoles(){
    return (
        <div className="application-container">
            <RoleCard/>
            <RoleCard/>
            <RoleCard/>
        </div>
    )
}