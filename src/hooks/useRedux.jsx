import { useDispatch, useSelector } from "react-redux";

const useRedux = () => {
    const dispatch = useDispatch();
    const useAppSelector = (selector) => useSelector(selector);
    return {
        useAppSelector,
        dispatch
    }
}
export default useRedux;