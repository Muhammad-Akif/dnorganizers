import './User.css'
import Navbar from './componenets/Navbar';
import VerticalTabs from './Tabs';
import IconLabelTabs from './BottomTabs'


export default function User() {
    return (
        <>
            <Navbar />
            <div className="contnt">
                <div className="tabs">
                    <VerticalTabs />
                </div>
                <div className="bottomtabs">
                    <IconLabelTabs />
                </div>
            </div>
        </>
    )
}
