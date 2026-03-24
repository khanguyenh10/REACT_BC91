import useRedux from "./useRedux";


const useUserInfo = () => {
    const { useAppSelector } = useRedux();
    const { userLogin, productsFavorite } = useAppSelector(state => state.userReducer);
    const isLogined = !!userLogin;
    return {
        isLogined,
        userLogin,
        productsFavorite

    }
}

export default useUserInfo;