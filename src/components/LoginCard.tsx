function LoginCard() {
  return (
    <aside className="card login-card">
      <p className="login-text">네이버를 더 안전하고 편리하게 이용하세요</p>
      <button className="naver-login-btn">NAVER 로그인</button>
      <div className="login-links">
        <span>아이디 찾기</span>
        <span>|</span>
        <span>비밀번호 찾기</span>
        <span>|</span>
        <span>회원가입</span>
      </div>
    </aside>
  );
}

export default LoginCard;