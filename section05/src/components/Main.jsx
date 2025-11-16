import "./Main.css";


const Main = () =>{
 
    const user = {
        name : "성공을즐기자",
        isLogin : false,
    };

    if(user.isLogin){
        return (
            <div className="logout">   
                <h1>{user.name}님 환영합니다.</h1>
                <button >로그아웃</button>
            </div>
        );  
    }else{
        return (
            <div>
                <h1>로그인이 필요합니다.</h1>
                <button  > 로그인</button>
            </div>
        );
    }

 
};

export default Main;
