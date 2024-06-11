const Time =()=>{
    const hour= new Date().getHours();
    if (hour<12)return "morning";
    if(hour<18)return "afternoon";
    return "evening";
}

export default Time
