import React from "react";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const ProtectRoute = ({ route, children }) => {
  const { role, userInfo } = useSelector((state) => state.auth);

  //console.log("Checking ProtectRoute:", { role, userInfo, route });

  if (role) {
    if (userInfo) {
      if (route.role) {
        if (userInfo.role === route.role) {
          if (route.status) {
            if (route.status === userInfo.status) {
              return <Suspense fallback={null}>{children}</Suspense>;
            } else {
              console.log("Status mismatch");
              if (userInfo.status === "pending") {
                return <Navigate to="/seller/account-pending" replace />;
              } else {
                return <Navigate to="/seller/account-deactive" replace />;
              }
            }
          } else {
            if (route.visibility) {
              if (route.visibility.some((r) => r === userInfo.status)) {
                return <Suspense fallback={null}>{children}</Suspense>;
              } else {
                return <Navigate to="/seller/account-pending" replace />;
              }
            } else {
              return <Suspense fallback={null}>{children}</Suspense>;
            }
          }
        } else {
          console.log("Role mismatch");
          return <Navigate to="/unauthorized" replace />;
        }
      } else {
        if (route.ability === "seller") {
          return <Suspense fallback={null}>{children}</Suspense>;
        }
      }
    }
  } else {
    console.log("User not logged in");
    return <Navigate to="/login" replace />;
  }
};

export default ProtectRoute;

// import React from "react";

// const ProtectRoute = () => {
//   return <div>ProtectRoute</div>;
// };

// export default ProtectRoute;
