export function useLoginProps(): {
    form: {
        initialValues: {
            phone: string;
            name: string;
            code: string;
        };
        initialErrors: import("formik").FormikErrors<unknown>;
        initialTouched: import("formik").FormikTouched<unknown>;
        initialStatus: any;
        handleBlur: {
            (e: import("react").FocusEvent<any, Element>): void;
            <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
        };
        handleChange: {
            (e: import("react").ChangeEvent<any>): void;
            <T_1 = string | import("react").ChangeEvent<any>>(field: T_1): T_1 extends import("react").ChangeEvent<any> ? void : (e: string | import("react").ChangeEvent<any>) => void;
        };
        handleReset: (e: any) => void;
        handleSubmit: (e?: import("react").FormEvent<HTMLFormElement>) => void;
        resetForm: (nextState?: Partial<import("formik").FormikState<{
            phone: string;
            name: string;
            code: string;
        }>>) => void;
        setErrors: (errors: import("formik").FormikErrors<{
            phone: string;
            name: string;
            code: string;
        }>) => void;
        setFormikState: (stateOrCb: import("formik").FormikState<{
            phone: string;
            name: string;
            code: string;
        }> | ((state: import("formik").FormikState<{
            phone: string;
            name: string;
            code: string;
        }>) => import("formik").FormikState<{
            phone: string;
            name: string;
            code: string;
        }>)) => void;
        setFieldTouched: (field: string, touched?: boolean, shouldValidate?: boolean) => Promise<void> | Promise<import("formik").FormikErrors<{
            phone: string;
            name: string;
            code: string;
        }>>;
        setFieldValue: (field: string, value: any, shouldValidate?: boolean) => Promise<void> | Promise<import("formik").FormikErrors<{
            phone: string;
            name: string;
            code: string;
        }>>;
        setFieldError: (field: string, value: string) => void;
        setStatus: (status: any) => void;
        setSubmitting: (isSubmitting: boolean) => void;
        setTouched: (touched: import("formik").FormikTouched<{
            phone: string;
            name: string;
            code: string;
        }>, shouldValidate?: boolean) => Promise<void> | Promise<import("formik").FormikErrors<{
            phone: string;
            name: string;
            code: string;
        }>>;
        setValues: (values: import("react").SetStateAction<{
            phone: string;
            name: string;
            code: string;
        }>, shouldValidate?: boolean) => Promise<void> | Promise<import("formik").FormikErrors<{
            phone: string;
            name: string;
            code: string;
        }>>;
        submitForm: () => Promise<any>;
        validateForm: (values?: {
            phone: string;
            name: string;
            code: string;
        }) => Promise<import("formik").FormikErrors<{
            phone: string;
            name: string;
            code: string;
        }>>;
        validateField: (name: string) => Promise<void> | Promise<string>;
        isValid: boolean;
        dirty: boolean;
        unregisterField: (name: string) => void;
        registerField: (name: string, { validate }: any) => void;
        getFieldProps: (nameOrOptions: any) => import("formik").FieldInputProps<any>;
        getFieldMeta: (name: string) => import("formik").FieldMetaProps<any>;
        getFieldHelpers: (name: string) => import("formik").FieldHelperProps<any>;
        validateOnBlur: boolean;
        validateOnChange: boolean;
        validateOnMount: boolean;
        values: {
            phone: string;
            name: string;
            code: string;
        };
        errors: import("formik").FormikErrors<{
            phone: string;
            name: string;
            code: string;
        }>;
        touched: import("formik").FormikTouched<{
            phone: string;
            name: string;
            code: string;
        }>;
        isSubmitting: boolean;
        isValidating: boolean;
        status?: any;
        submitCount: number;
    };
    isUserFound: any;
    isCodeSended: boolean;
    loading: any;
    editPhone: boolean;
    handleEditPhone: (e: any) => void;
    handleResendCode: (isEdit: any, e: any) => void;
    countRef: import("react").MutableRefObject<undefined>;
    time: number;
    timeIndex: number;
    handleBack: () => void;
    profile: any;
    error: any;
};
//# sourceMappingURL=login.props.d.ts.map