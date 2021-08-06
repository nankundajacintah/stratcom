import React from "react";
import {Route} from "react-router-dom"

const PublicRoutes = ({children, ...rest})=><Route
 {...rest}
 render={()=>children}
/>
export default PublicRoutes;