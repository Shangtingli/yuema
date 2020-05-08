import * as React from "react"
import Avatar from "./BasicInfo/Avatar"

class AboutUs extends React.Component{

    render(){
        return(
            <div className="dashboard-content-container" style={{textAlign:"center",backgroundColor:"rgba(0,0,0,0.5)"}}>
                <h2 style={{color:"white"}}> About Contributors </h2>
                <div style={styles.mainContainer}>
                    <Avatar
                        avatarKey={'s3/avatars/author_avatars/shangting.png'}
                        width={"150px"}
                        height={"150px"}
                    />
                    <div style={styles.informationContainer}>
                        <h3 style={{color:"white"}}> Shangting Li </h3>
                        <p style={{color:"white"}}> A passionate Software developer and data explorer</p>
                    </div>
                </div>

                <div style={styles.mainContainer}>
                    <Avatar
                        avatarKey={'s3/avatars/author_avatars/yenchen.png'}
                        width={"150px"}
                        height={"150px"}
                    />
                    <div style={styles.informationContainer}>
                        <h3 style={{color:"white"}}> Yenchen Chou </h3>
                        <p style={{color:"white"}}> MS Data Science student at USC. Sharing real-world data science problems related to your daily life and explore new ideas through data science.</p>
                    </div>
                </div>

                <div style={styles.mainContainer}>
                    <Avatar
                        avatarKey={'s3/avatars/author_avatars/yufei.png'}
                        width={"150px"}
                        height={"150px"}
                    />
                    <div style={styles.informationContainer}>
                        <h3 style={{color:"white"}}> Yufei Hu </h3>
                        <p style={{color:"white"}}> This person is lazy...</p>
                    </div>
                </div>

                <div style={styles.mainContainer}>
                    <Avatar
                        avatarKey={'s3/avatars/author_avatars/runze.png'}
                        width={"150px"}
                        height={"150px"}
                    />
                    <div style={styles.informationContainer}>
                        <h3 style={{color:"white"}}> Runze Liu </h3>
                        <p style={{color:"white"}}> This person is lazy...</p>
                    </div>
                </div>

                <div style={styles.mainContainer}>
                    <Avatar
                        avatarKey={'s3/avatars/author_avatars/zhifeng.png'}
                        width={"150px"}
                        height={"150px"}
                    />
                    <div style={styles.informationContainer}>
                        <h3 style={{color:"white"}}> Zhifeng Liu </h3>
                        <p style={{color:"white"}}> This person is lazy...</p>
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
        height: "150px",
        margin: "10px auto 10px",
        backgroundColor: "rgba(255,255,255,0.7)"
    },
    informationContainer:{
        width: "300px",
        height: "150px"
    }
}