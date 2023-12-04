import { ColorRing } from "react-loader-spinner";

const Loader = () => {
    return (
        <ColorRing
            visible={true}
            height="40"
            width="40"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#ffff', '#ffff', '#ffff', '#ffff', '#ffff']}
            
        />
    )
}

export default Loader