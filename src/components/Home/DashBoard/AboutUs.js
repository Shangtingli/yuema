import * as React from "react"
import Avatar from "./BasicInfo/Avatar"

class AboutUs extends React.Component{

    render(){
        return(
            <div className="dashboard-content-container" style={{textAlign:"center"}}>
                <h2> About Contributors </h2>
                <div style={styles.mainContainer}>
                    <Avatar
                        avatarKey={'author_avatars/shangting.png'}
                        width={"150px"}
                        height={"150px"}
                    />
                    <div style={styles.informationContainer}>
                        <h3> Shangting Li </h3>
                        <p> A passionate Software developer and data explorer</p>
                    </div>
                </div>

                <div style={styles.mainContainer}>
                    <Avatar
                        avatarKey={'author_avatars/yanchen.png'}
                        width={"150px"}
                        height={"150px"}
                    />
                    <div style={styles.informationContainer}>
                        <h3> Yenchen Chou </h3>
                        <p> MS Data Science student at USC. Sharing real-world data science problems related to your daily life and explore new ideas through data science.</p>
                    </div>
                </div>

                <div style={styles.mainContainer}>
                    <Avatar
                        avatarKey={'author_avatars/yufei.png'}
                        width={"150px"}
                        height={"150px"}
                    />
                    <div style={styles.informationContainer}>
                        <h3> Yufei Hu </h3>
                        <p> This person is lazy...</p>
                    </div>
                </div>

                <div style={styles.mainContainer}>
                    <Avatar
                        avatarKey={'author_avatars/runze.png'}
                        width={"150px"}
                        height={"150px"}
                    />
                    <div style={styles.informationContainer}>
                        <h3> Runze Liu </h3>
                        <p> This person is lazy...</p>
                    </div>
                </div>

                <div style={styles.mainContainer}>
                    <Avatar
                        avatarKey={'author_avatars/zhifeng.png'}
                        width={"150px"}
                        height={"150px"}
                    />
                    <div style={styles.informationContainer}>
                        <h3> Zhifeng Liu </h3>
                        <p> This person is lazy...</p>
                    </div>
                </div>


            </div>
        )
    }
}

export default AboutUs;

const styles = {
    mainContainer:{
        display:"flex",
        width: "450px",
        margin: "10px auto 10px"
    },
    informationContainer:{
        width: "300px",
        height: "150px"
    }
}