"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Dialog_1 = tslib_1.__importDefault(require("@material-ui/core/Dialog"));
const DialogContent_1 = tslib_1.__importDefault(require("@material-ui/core/DialogContent"));
const IconButton_1 = tslib_1.__importDefault(require("@material-ui/core/IconButton"));
const ArrowBack_1 = tslib_1.__importDefault(require("@material-ui/icons/ArrowBack"));
const login_1 = require("./login");
const create_account_1 = require("./create-account");
const recovery_account_1 = require("./recovery-account");
function SwitchView({ view, loginProps, createAccountProps, recoveryAccountProps, }) {
    switch (view) {
        case "login":
            return react_1.default.createElement(login_1.Login, Object.assign({}, loginProps));
        case "create-account":
            return react_1.default.createElement(create_account_1.CreateAccount, Object.assign({}, createAccountProps));
        case "recovery-account":
            return react_1.default.createElement(recovery_account_1.RecoveryAccount, Object.assign({}, recoveryAccountProps));
        default:
            return null;
    }
}
function Account(props) {
    const { backButtonVisible, backButtonView, view, setView } = props;
    return (react_1.default.createElement(Dialog_1.default, { open: view !== undefined, onClose: () => setView(undefined), scroll: "body" },
        backButtonVisible && (react_1.default.createElement(DialogContent_1.default, null,
            react_1.default.createElement(IconButton_1.default, { onClick: () => setView(backButtonView), edge: "start", color: "inherit", "aria-label": "Voltar" },
                react_1.default.createElement(ArrowBack_1.default, { fontSize: "large" })))),
        react_1.default.createElement(SwitchView, Object.assign({}, props))));
}
exports.default = Account;
//# sourceMappingURL=account.js.map