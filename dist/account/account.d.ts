/// <reference types="react" />
import { LoginProps } from "./login";
import { CreateAccountProps } from "./create-account";
import { RecoveryAccountProps } from "./recovery-account";
export declare type AccountView = undefined | "login" | "recovery-account" | "create-account";
export interface AccountProps {
    view: AccountView;
    setView: (view: AccountView) => void;
    backButtonVisible: boolean;
    setBackButtonVisible: (visible: boolean) => void;
    backButtonView: AccountView;
    setBackButtonView: (view: AccountView) => void;
    loginProps: LoginProps;
    createAccountProps: CreateAccountProps;
    recoveryAccountProps: RecoveryAccountProps;
}
export default function Account(props: AccountProps): JSX.Element;