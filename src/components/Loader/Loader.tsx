import { Discuss } from "react-loader-spinner";

const Loader = () => {
    return (
        <Discuss
            visible={true}
            height="80"
            width="80"
            ariaLabel="discuss-loading"
            wrapperStyle={{}}
            wrapperClass="discuss-wrapper"
        />
    );
}
 
export default Loader;