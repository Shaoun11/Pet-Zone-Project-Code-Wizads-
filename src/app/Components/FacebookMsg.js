import { CustomChat, FacebookProvider } from "react-facebook";


const FacebookMsg = () => {
    return (
        <FacebookProvider appId="1392742798047921" chatSupport>

        <CustomChat  pageId="232140936653590" minimized={true}/>
        

</FacebookProvider>
    );
};

export default FacebookMsg;