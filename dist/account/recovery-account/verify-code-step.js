"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyCodeStep = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Typography_1 = tslib_1.__importDefault(require("@material-ui/core/Typography"));
const Button_1 = tslib_1.__importDefault(require("@material-ui/core/Button"));
const Box_1 = tslib_1.__importDefault(require("@material-ui/core/Box"));
const TextField_1 = tslib_1.__importDefault(require("@material-ui/core/TextField"));
const Link_1 = tslib_1.__importDefault(require("@material-ui/core/Link"));
const CircularProgress_1 = tslib_1.__importDefault(require("@material-ui/core/CircularProgress"));
function VerifyCodeStep({ loading, onResendCode, VerifyCodeStepInfoText, resendCodeButtonLabel, form, onSubmit, onSubmitButtonLabel, }) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Box_1.default, { marginBottom: 1 },
            react_1.default.createElement(Typography_1.default, null,
                react_1.default.createElement(VerifyCodeStepInfoText, null),
                react_1.default.createElement(Link_1.default, { onClick: () => {
                        onResendCode();
                    } }, resendCodeButtonLabel))),
        react_1.default.createElement("form", { style: {
                display: "flex",
                flexDirection: "column",
            }, onSubmit: (event) => {
                event.preventDefault();
                onSubmit();
            } },
            react_1.default.createElement(Box_1.default, { marginBottom: 1 },
                react_1.default.createElement(TextField_1.default, { label: form.code.label, variant: "outlined", fullWidth: true, value: form.code.value, disabled: loading, helperText: form.code.helperText, onFocus: form.code.onFocus, onBlur: form.code.onBlur, error: form.code.error, onChange: (event) => form.code.onChange(event.target.value) })),
            react_1.default.createElement(Button_1.default, { variant: "contained", color: "primary", type: "submit", disabled: loading }, loading ? react_1.default.createElement(CircularProgress_1.default, null) : onSubmitButtonLabel))));
}
exports.VerifyCodeStep = VerifyCodeStep;
//# sourceMappingURL=verify-code-step.js.map