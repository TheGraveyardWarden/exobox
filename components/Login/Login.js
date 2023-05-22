import React, { useEffect, useState } from "react";
import DefaultBtn from "../Buttons/DefaultBtn";
import GoogleBtn from "../Buttons/GoogleBtn";
import ColumnFlexCon from "../ColumnFlexCon";
import PasswordInput from "../Inputs/PasswordInput";
import PhoneNumberInput from "../Inputs/PhoneNumberInput";
import Logo from "../Logo";
import RowFlexCon from "../RowFlexCon";
import SmallLink from "../SmallLink";
import Title from "../Title";
import LoginBackground from "./LoginBackground";
import Animation from '../Animation';
import TextInput from "../Inputs/TextInput";
import EmailVerifInput from "../Inputs/EmailVerifInput";
import GenderInput from "../Inputs/GenderInput";
// eslint-disable-next-line
import Loading from "../Loading";
import { loading_1 } from "../../assets/media";

function Login() {
    const [phoneNumber, setPhoneNumber] = useState("9999999999");
    const [password, setPassword] = useState("");
    const [onVerif, setOnVerif] = useState(false);
    const [loginBtnState, setLoginBtnState] = useState('login');
    const [verifInput, setVerifInput] = useState(false);
    const [verifCode, setVerifCode] = useState("");
    const [emailVerifCode, setEmailVerifCode] = useState("");
    const [gender, setGender] = useState('female');
    const [showWrong, setShowWrong] = useState(false);
    const [phoneNumberIsValid, setPhoneNumberIsValid] = useState(false);

    const CenterLoginCon = () => {
        let offset = (window.innerHeight/2)-(document.getElementsByName('login_con')[0].clientHeight/2);
        // if(offset < 0) return;
        setTimeout(() => {
            document.getElementsByName('login_con')[0].style.transform = 'translate(0, ' + (offset).toString() + 'px)';
        }, 200);
    }

    const GBN = n => {
        return document.getElementsByName(n)[0];
    }

    const ShowLoginCon = () => {
        document.getElementsByName('login_con')[0].classList.remove('no_vis');
    }

    useEffect(() => {
        if(phoneNumber[0] !== '9') setPhoneNumberIsValid(false);
        else if(phoneNumber.length !== 10) setPhoneNumberIsValid(false);
        else setPhoneNumberIsValid(true);
    }, [phoneNumber])

    const onLoginBtnWrongHover = e => {
        Animation.LoginBtnWrong('login_btn', setShowWrong);
    }

    useEffect(() => {
        if(!phoneNumberIsValid) {
            Animation.move = true;
        } else {
            Animation.move = false;
            Animation.RemoveLoginBtnWrong('login_btn', setShowWrong);
        }
    }, [phoneNumberIsValid])

    useEffect(() => {
        CenterLoginCon();
        ShowLoginCon();
        GBN('login_btn').addEventListener('mouseenter', onLoginBtnWrongHover);
    }, [])

    const onSubmit = () => {
        if(!phoneNumberIsValid) {
            alert('Did u just hack us??');
            return;
        };
        switch (loginBtnState) {
            case 'login':
                Animation.MoveToHomePage(['google_btn', 'phone_number_input', 'password_input'], 'login_btn', 150);
                break;
            case 'register':
                setVerifInput(true);
                Animation.FadeOut('google_btn');
                Animation.GoUp('phone_number_input', 67, 7);
                Animation.GoUp("login_btn", 92, 25);
                Animation.Disappear('login');
                setLoginBtnState("register2");
                break;
            case 'register2':
                // Animation.ChStatus('phone_number_input', 'true');
                
                setLoginBtnState('register3');
                Animation.RemoveUp('login_btn');
                GBN('reg_title').innerHTML = 'مشخصات خودرا وارد کنید';
                GBN('login_btn').innerHTML = '<div name="login_btn2" class="column_flex_con default_btn full_width transition"><p>مرحله بعد</p></div>';
                setTimeout(() => {
                    Animation.FadeIn('name_input');
                    Animation.FadeIn('pass1_input');
                    Animation.FadeIn('pass2_input');
                    Animation.FadeIn('gmail_input');
                    Animation.FadeIn('gender_input');
                    //Animation.GoUp('login_btn', 90, 25);
                    CenterLoginCon();
                }, 100);
                
                break;
            case 'register3':
                setLoginBtnState('register4');
                Animation.RemoveUp('login_btn');
                Animation.FadeOut('name_input');
                Animation.FadeOut('pass1_input');
                Animation.FadeOut('pass2_input');
                Animation.FadeOut('gmail_input');
                Animation.FadeOut('gender_input');
                Animation.FadeIn('email_verif_input');
                Animation.GoUp('email_verif_input', 430, 10);
                Animation.GoUp('login_btn', 0, 25);
                GBN('reg_title').innerHTML = 'کد تایید';
                break;
            case 'register4':
                // Animation.ChStatus('email_verif_input', 'true', 20, 400, 1, 0);
                
                Animation.MoveToHomePage(['email_verif_input'], 'login_btn', -20);
                
                break;
            case 'verif_login':
                setVerifInput(true);
                setLoginBtnState('verif_login2');
                break;
            case 'verif_login2':
                Animation.ChStatus('phone_number_input', 'wrong');
                break;
            default:
                break;
        }
        //CenterLoginCon();
    }

    const onRegisterLink = () => {
        setVerifInput(false);
        setLoginBtnState('register');
        if(onVerif) {
            Animation.FadeIn("google_btn");
            Animation.RemoveUp("phone_number_input");
            Animation.Disappear("login_with_password");
        }
        Animation.FadeOut("password_input");
        Animation.GoUp("login_btn", 92, 25);
        Animation.Disappear("login_with_verif_code");
        Animation.Disappear("seperator");
        Animation.Disappear("reg");
        Animation.Appear("login");
        Animation.Appear("reg_title");
        Animation.Disappear("login_title");
        //CenterLoginCon();
    }

    const onLoginLink = () => {
        setVerifInput(false);
        setLoginBtnState('login');
        Animation.FadeIn("password_input");
        Animation.FadeIn('google_btn');
        Animation.RemoveUp('phone_number_input');
        Animation.RemoveUp("login_btn");
        Animation.Appear("login_with_verif_code");
        Animation.Appear("seperator");
        Animation.Appear("reg");
        Animation.Disappear("login");
        Animation.Disappear("reg_title");
        Animation.Appear("login_title");
        //CenterLoginCon();
    }

    const onVerifLoginLink = () => {
        setVerifInput(false);
        setLoginBtnState('verif_login');
        setOnVerif(true);
        Animation.FadeOut("google_btn");
        Animation.FadeOut("password_input");
        Animation.GoUp("phone_number_input", 67, 7);
        Animation.GoUp("login_btn", 92, 25);
        Animation.Disappear("login_with_verif_code");
        Animation.Appear("login_with_password");
        //CenterLoginCon();
    }

    const onPasswordLoginLink = () => {
        setVerifInput(false);
        setLoginBtnState('login');
        setOnVerif(false);
        Animation.FadeIn("google_btn");
        Animation.FadeIn("password_input");
        Animation.RemoveUp("phone_number_input");
        Animation.RemoveUp("login_btn");
        Animation.Disappear("login_with_password");
        Animation.Appear("login_with_verif_code");
        //CenterLoginCon();
    }

    return <>
        <LoginBackground/>
        <ColumnFlexCon name="login_con" className={"login_con transition no_vis"}>
            <Title name='move_to_home_page' className={'transition fade_out_r width_350 margin_bot_m200 hide'} >در حال انتقال به صفحه اصلی</Title>
            <RowFlexCon name='header' className={'full_width top_bot_margin'}>
                <Logo/>
                <Title name="login_title" className={'transition'}>ورود</Title>
                <Title name="reg_title" className={'hide transition'}>عضویت</Title>
            </RowFlexCon>
            {(loginBtnState !== 'register3' && loginBtnState !== 'register4') && <>
                <GoogleBtn name="google_btn" className={"full_width transition"}/>
                <PhoneNumberInput verifCode={verifCode} setVerifCode={setVerifCode} verifInput={verifInput} name="phone_number_input" className={"full_width transition"} setPhoneNumber={setPhoneNumber} phoneNumber={phoneNumber} />
                <PasswordInput name="password_input" className={"full_width"} password={password} setPassword={setPassword} />
            </>}
            {(loginBtnState === 'register3' || loginBtnState === 'register4') && <>
                <TextInput label="نام و نام خانوادگی" className={"full_width transition fade_out"} inputClassName="no_letter_spacing normal_margin full_width right_aligned" name="name_input" placeholder={"محمد علی علیرضایی"} />
                <TextInput type="password" label={"پسوورد را وارد کنید"} className={"full_width transition fade_out"} name="pass1_input" placeholder={"***********"} />
                <TextInput type="password" label={"پسوورد را دوباره وارد کنید"} className={"full_width transition fade_out"} name="pass2_input" placeholder={"***********"} />
                <TextInput optional={true} label={"ایمیل خود را وارد کنید"} type="email" className={"full_width transition fade_out"} name="gmail_input" placeholder={"***********"} />
                <EmailVerifInput name="email_verif_input" className={"full_width transition fade_out"} verifCode={emailVerifCode} setVerifCode={setEmailVerifCode}  />
                <GenderInput gender={gender} setGender={setGender} name={'gender_input'} className={'transition full_width fade_out'}/>
            </>}
            <DefaultBtn name={"login_btn"} showWrong={showWrong} onSubmit={onSubmit} className={"full_width transition"} value={"ورود"} />
            <RowFlexCon name="login_small_links" className={"login_small_links full_width"}>
                <RowFlexCon>
                    <SmallLink onClick={onVerifLoginLink} name="login_with_verif_code">ورود با کد تایید</SmallLink>
                    <SmallLink onClick={onPasswordLoginLink} className="hide transition" name="login_with_password">ورود با پسوورد</SmallLink>
                    <p name="seperator">|</p>
                    <SmallLink onClick={onRegisterLink} name="reg">عضویت</SmallLink>
                </RowFlexCon>
                <SmallLink onClick={onLoginLink} className="hide transition" name="login">ورود</SmallLink>
            </RowFlexCon>
            <p name="wait" className="wait hide">... چند لحظه صبر کنید</p>
            {/* <Loading className="hide"/> */}
            <img alt="loading" src={loading_1} className="loading_img hide" />
        </ColumnFlexCon>
    </>
}

export default Login;