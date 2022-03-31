window.onload = () => {
  const authDiv =
    document.querySelector(
      "#header > div.utillmenu > div > fieldset > a > div"
    ) || document.querySelector("#header > div.utillmenu > ul > a > li");
  if (authDiv) {
    authDiv.onclick = (e) => {
      e.preventDefault();
      window.location.href =
        "https://sso1.mju.ac.kr/login.do?redirect_uri=http://lms.mju.ac.kr/ilos/bandi/sso/index.jsp";
    };
  }
};
