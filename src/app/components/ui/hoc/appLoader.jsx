import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCallsList } from "../../../store/calls";
import {
  getIsLoggedIn,
  getRegUserLoadingStatus,
  loadRegUserList,
} from "../../../store/regUser";
import { loadUsersList } from "../../../store/users";

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn());
  // const regUserStatusLoading = useSelector(getRegUserLoadingStatus());
  useEffect(() => {
    dispatch(loadUsersList());
    dispatch(loadCallsList());
    if (isLoggedIn) {
      dispatch(loadRegUserList());
    }
  }, [isLoggedIn]);

  return children;
};

export default AppLoader;
