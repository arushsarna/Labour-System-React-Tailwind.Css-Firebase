
import Hired from 'components/Hired';
export default function Dashboard() {
    return (
        <>
            <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">

            </div>

            <div className="px-3 md:px-8 h-auto -mt-24">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 px-4 mb-16">
                        <Hired title="Workers Available"
                            id="ID" name="Name" money="Daily Wage" status="Status" phoneno="Phone No."
                            id1="1" name1="Ramu" money1="Rs 150" status1="Open to Hire" phoneno1="889468264"
                            id2="2" name2="Shamu" money2="Rs 150" status2="Open to Hire" phoneno2="4587964116"
                            id3="3" name3="Gita" money3="Rs 150" status3="Open to Hire" phoneno3="548749416"
                            id4="4" name4="Sita" money4="Rs 150" status4="Open to Hire" phoneno4="255494988" />
                    </div>
                </div>
            </div>
        </>
    );
}